import keccak256 from 'keccak256';
import { buildPoseidon } from 'circomlibjs';
import { generateProof } from './zk';

const TREE_DEPTH = 16;
const TREE_SIZE = 1 << TREE_DEPTH;

export type SingleEntityRoundTransitionInput = {
  entityType: string;
  entityId: string;
  baseVersion?: number | null;
  beforeState: unknown;
  afterState: unknown;
  branchWitness?: RoundStateTransitionWitness | null;
};

export type RoundStateTransitionWitness = {
  oldLeaf: string;
  siblings: string[];
};

export type RoundStateImportWitness = RoundStateTransitionWitness & {
  branchRoot: string;
};

export type SingleEntityRoundTransitionProof = {
  kind: 'zk.updateLeaf';
  entityType: string;
  entityId: string;
  transitionKind: 'insert' | 'update' | 'delete';
  transitionSource?: 'emptyLeaf' | 'branchWitness';
  oldRoot: string;
  newRoot: string;
  publicSignals: string[];
  proof: unknown;
};

export type RoundStateProofBranch = {
  leafHashes: Record<string, string>;
  root?: string;
  snapshotEntityIds?: string[];
  leafWitnesses?: Record<string, RoundStateTransitionWitness>;
};

export type RoundStateTransitionChain = {
  proofs: SingleEntityRoundTransitionProof[];
  baseStateRoot: string;
  postStateRoot: string;
  nextBranch: RoundStateProofBranch;
};

type PoseidonRuntime = {
  poseidon: any;
  F: any;
};

type IndexedTransition = SingleEntityRoundTransitionInput & {
  key: string;
  leafIndex: number;
  oldLeaf: string;
  newLeaf: string;
  branchWitness?: RoundStateTransitionWitness;
};

type SparseTreeState = {
  levels: Map<number, string>[];
  emptyHashes: string[];
  root: string;
};

let poseidonRuntimePromise: Promise<PoseidonRuntime> | null = null;
let emptyHashesPromise: Promise<string[]> | null = null;

const getPoseidonRuntime = async (): Promise<PoseidonRuntime> => {
  if (!poseidonRuntimePromise) {
    poseidonRuntimePromise = (async () => {
      const poseidon = await buildPoseidon();
      return {
        poseidon,
        F: poseidon.F,
      };
    })();
  }

  return poseidonRuntimePromise;
};

const stableSerialize = (value: unknown): string => {
  if (value === null) return 'null';

  switch (typeof value) {
    case 'undefined':
      return '{"$undefined":true}';
    case 'boolean':
      return value ? 'true' : 'false';
    case 'number':
      if (!Number.isFinite(value)) {
        throw new Error('Cannot deterministically serialize non-finite numbers');
      }
      return JSON.stringify(value);
    case 'bigint':
      return `{"$bigint":${JSON.stringify(value.toString())}}`;
    case 'string':
      return JSON.stringify(value);
    case 'object':
      if (Array.isArray(value)) {
        return `[${value.map((entry) => stableSerialize(entry)).join(',')}]`;
      }

      if (value instanceof Date) {
        return `{"$date":${JSON.stringify(value.toISOString())}}`;
      }

      return `{${Object.keys(value as Record<string, unknown>)
        .sort()
        .map((key) => `${JSON.stringify(key)}:${stableSerialize((value as Record<string, unknown>)[key])}`)
        .join(',')}}`;
    default:
      throw new Error(`Unsupported deterministic serialization type: ${typeof value}`);
  }
};

const buildLeafPayload = (
  input: Pick<SingleEntityRoundTransitionInput, 'entityType' | 'entityId' | 'baseVersion'>,
  state: unknown
) => ({
  entityType: input.entityType,
  entityId: input.entityId,
  baseVersion: input.baseVersion ?? null,
  state: state ?? null,
});

const fieldToHex = (field: unknown, runtime: PoseidonRuntime): string => {
  const n = runtime.F.toObject(field) as bigint;
  return n.toString(16);
};

const getEmptyHashes = async (): Promise<string[]> => {
  if (!emptyHashesPromise) {
    emptyHashesPromise = (async () => {
      const runtime = await getPoseidonRuntime();
      const hashes: string[] = [fieldToHex(runtime.poseidon([0n]), runtime)];

      for (let level = 1; level <= TREE_DEPTH; level += 1) {
        hashes.push(
          fieldToHex(
            runtime.poseidon([BigInt(`0x${hashes[level - 1]}`), BigInt(`0x${hashes[level - 1]}`)]),
            runtime
          )
        );
      }

      return hashes;
    })();
  }

  return emptyHashesPromise;
};

const hashLeafPayload = async (payload: unknown): Promise<string> => {
  const runtime = await getPoseidonRuntime();
  const preimage = stableSerialize(payload ?? null);
  const keccakHex = keccak256(preimage).toString('hex');
  return fieldToHex(runtime.poseidon([BigInt(`0x${keccakHex}`)]), runtime);
};

export const hashRoundStateLeafPayload = hashLeafPayload;
export const hashRoundStateLeaf = async (
  input: Pick<SingleEntityRoundTransitionInput, 'entityType' | 'entityId' | 'baseVersion'>,
  state: unknown
): Promise<string> => hashLeafPayload(buildLeafPayload(input, state));

const parentHash = async (leftHex: string, rightHex: string): Promise<string> => {
  const runtime = await getPoseidonRuntime();
  return fieldToHex(runtime.poseidon([BigInt(`0x${leftHex}`), BigInt(`0x${rightHex}`)]), runtime);
};

export const computeRoundStateLeafIndex = (entityType: string, entityId: string): number => {
  const h = keccak256(`${entityType}:${entityId}`).toString('hex');
  return parseInt(h.slice(0, 8), 16) % TREE_SIZE;
};

const leafKeyFromTransition = (input: Pick<SingleEntityRoundTransitionInput, 'entityType' | 'entityId'>): string =>
  `${input.entityType}:${input.entityId}`;

const isAbsentBranchState = (value: unknown): boolean => value === null || typeof value === 'undefined';

const buildSparseTree = async (leafHashes: Map<number, string>): Promise<SparseTreeState> => {
  const emptyHashes = await getEmptyHashes();
  const levels: Map<number, string>[] = Array.from({ length: TREE_DEPTH + 1 }, () => new Map<number, string>());

  for (const [leafIndex, leafHash] of leafHashes.entries()) {
    if (leafHash !== emptyHashes[0]) {
      levels[0].set(leafIndex, leafHash);
    }
  }

  for (let level = 0; level < TREE_DEPTH; level += 1) {
    const parentIndices = [...new Set([...levels[level].keys()].map((index) => Math.floor(index / 2)))].sort(
      (left, right) => left - right
    );

    for (const parentIndex of parentIndices) {
      const leftHash = levels[level].get(parentIndex * 2) ?? emptyHashes[level];
      const rightHash = levels[level].get(parentIndex * 2 + 1) ?? emptyHashes[level];
      const hash = await parentHash(leftHash, rightHash);

      if (hash !== emptyHashes[level + 1]) {
        levels[level + 1].set(parentIndex, hash);
      }
    }
  }

  return {
    levels,
    emptyHashes,
    root: levels[TREE_DEPTH].get(0) ?? emptyHashes[TREE_DEPTH],
  };
};

const getSiblingsForLeaf = (tree: SparseTreeState, leafIndex: number): string[] => {
  let currentIndex = leafIndex;
  const siblings: string[] = [];

  for (let level = 0; level < TREE_DEPTH; level += 1) {
    const siblingIndex = currentIndex ^ 1;
    siblings.push(tree.levels[level].get(siblingIndex) ?? tree.emptyHashes[level]);
    currentIndex = Math.floor(currentIndex / 2);
  }

  return siblings;
};

const normalizeWitness = (witness?: RoundStateTransitionWitness | null): RoundStateTransitionWitness | undefined => {
  if (!witness || typeof witness !== 'object') {
    return undefined;
  }

  const oldLeaf = typeof witness.oldLeaf === 'string' ? witness.oldLeaf.trim() : '';
  if (!oldLeaf) {
    return undefined;
  }

  if (!Array.isArray(witness.siblings) || witness.siblings.length !== TREE_DEPTH) {
    throw new Error(`Round state proof branch witness must include exactly ${TREE_DEPTH} sibling hashes`);
  }

  const siblings = witness.siblings.map((value) => (typeof value === 'string' ? value.trim() : ''));
  if (siblings.some((value) => !value)) {
    throw new Error('Round state proof branch witness siblings must be non-empty strings');
  }

  return {
    oldLeaf,
    siblings,
  };
};

const normalizeImportWitness = (witness?: RoundStateImportWitness | null): RoundStateImportWitness | undefined => {
  if (!witness || typeof witness !== 'object') {
    return undefined;
  }

  const branchRoot = typeof witness.branchRoot === 'string' ? witness.branchRoot.trim() : '';
  if (!branchRoot) {
    throw new Error('Round state import witness must include a branchRoot');
  }

  const normalizedWitness = normalizeWitness(witness);
  if (!normalizedWitness) {
    return undefined;
  }

  return {
    branchRoot,
    ...normalizedWitness,
  };
};

const computeRootFromWitness = async (leafIndex: number, leafHash: string, siblings: string[]): Promise<string> => {
  let currentHash = leafHash;
  let currentIndex = leafIndex;

  for (let level = 0; level < TREE_DEPTH; level += 1) {
    const siblingHash = siblings[level];
    currentHash =
      currentIndex % 2 === 0 ? await parentHash(currentHash, siblingHash) : await parentHash(siblingHash, currentHash);
    currentIndex = Math.floor(currentIndex / 2);
  }

  return currentHash;
};

const normalizeTransitions = async (
  inputs: SingleEntityRoundTransitionInput[]
): Promise<IndexedTransition[]> => {
  const transitions: IndexedTransition[] = [];
  const seenLeafIndices = new Map<number, string>();

  for (const input of inputs) {
    if (!input.entityType || !input.entityId) {
      continue;
    }

    const beforeLeafPayload = {
      entityType: input.entityType,
      entityId: input.entityId,
      baseVersion: input.baseVersion ?? null,
      state: input.beforeState ?? null,
    };
    const afterLeafPayload = {
      entityType: input.entityType,
      entityId: input.entityId,
      baseVersion: input.baseVersion ?? null,
      state: input.afterState ?? null,
    };

    if (stableSerialize(beforeLeafPayload) === stableSerialize(afterLeafPayload)) {
      continue;
    }

    const leafIndex = computeRoundStateLeafIndex(input.entityType, input.entityId);
    const key = `${input.entityType}:${input.entityId}`;
    const existingKey = seenLeafIndices.get(leafIndex);
    if (existingKey && existingKey !== key) {
      throw new Error(`Round state proof leaf collision between ${existingKey} and ${key}`);
    }

    seenLeafIndices.set(leafIndex, key);
    transitions.push({
      ...input,
      key,
      leafIndex,
      oldLeaf: await hashLeafPayload(beforeLeafPayload),
      newLeaf: await hashLeafPayload(afterLeafPayload),
      ...(normalizeWitness(input.branchWitness) ? { branchWitness: normalizeWitness(input.branchWitness) } : {}),
    });
  }

  return transitions.sort((left, right) => {
    const witnessRank = Number(!!left.branchWitness) - Number(!!right.branchWitness);
    if (witnessRank !== 0) {
      return witnessRank * -1;
    }

    return left.key.localeCompare(right.key);
  });
};

export const createRoundStateBranchWitness = async (
  input: Pick<SingleEntityRoundTransitionInput, 'entityType' | 'entityId' | 'baseVersion'> & { state: unknown },
  branch: RoundStateProofBranch
): Promise<RoundStateTransitionWitness> => {
  const key = leafKeyFromTransition(input);
  const oldLeaf = branch?.leafHashes?.[key];
  if (!oldLeaf) {
    throw new Error(`Round state proof branch does not contain ${key} for witness generation`);
  }

  const leafHashes = new Map<number, string>();
  for (const [entryKey, hash] of Object.entries(branch.leafHashes || {})) {
    const [entityType, ...rest] = entryKey.split(':');
    const entityId = rest.join(':');
    if (!entityType || !entityId) {
      continue;
    }

    leafHashes.set(computeRoundStateLeafIndex(entityType, entityId), hash);
  }

  const tree = await buildSparseTree(leafHashes);
  const expectedRoot = typeof branch.root === 'string' && branch.root ? branch.root : tree.root;
  if (tree.root !== expectedRoot) {
    throw new Error(`Round state proof branch root mismatch while generating witness for ${key}`);
  }

  const recomputedOldLeaf = await hashLeafPayload(buildLeafPayload(input, input.state));
  if (recomputedOldLeaf !== oldLeaf) {
    throw new Error(`Round state proof branch leaf mismatch while generating witness for ${key}`);
  }

  return {
    oldLeaf,
    siblings: getSiblingsForLeaf(tree, computeRoundStateLeafIndex(input.entityType, input.entityId)),
  };
};

export const createRoundStateImportWitness = async (
  input: Pick<SingleEntityRoundTransitionInput, 'entityType' | 'entityId' | 'baseVersion'> & { state: unknown },
  branch: RoundStateProofBranch
): Promise<RoundStateImportWitness> => {
  const witness = await createRoundStateBranchWitness(input, branch);
  const branchRoot = await computeRootFromWitness(
    computeRoundStateLeafIndex(input.entityType, input.entityId),
    witness.oldLeaf,
    witness.siblings
  );

  return {
    branchRoot,
    ...witness,
  };
};

export const verifyRoundStateImportWitness = async (
  input: Pick<SingleEntityRoundTransitionInput, 'entityType' | 'entityId' | 'baseVersion'> & {
    state: unknown;
    witness?: RoundStateImportWitness | null;
  }
): Promise<
  | {
      branchRoot: string;
      leafHash: string;
      witness: RoundStateTransitionWitness;
    }
  | null
> => {
  const normalizedWitness = normalizeImportWitness(input.witness);
  if (!normalizedWitness) {
    return null;
  }

  const leafHash = await hashRoundStateLeaf(input, input.state);
  if (leafHash !== normalizedWitness.oldLeaf) {
    throw new Error(`Round state import witness leaf mismatch for ${input.entityType}:${input.entityId}`);
  }

  const branchRoot = await computeRootFromWitness(
    computeRoundStateLeafIndex(input.entityType, input.entityId),
    leafHash,
    normalizedWitness.siblings
  );
  if (branchRoot !== normalizedWitness.branchRoot) {
    throw new Error(`Round state import witness root mismatch for ${input.entityType}:${input.entityId}`);
  }

  return {
    branchRoot,
    leafHash,
    witness: {
      oldLeaf: leafHash,
      siblings: normalizedWitness.siblings,
    },
  };
};

export const verifyRoundStateBranchWitnessRoot = async (input: {
  entityType: string;
  entityId: string;
  oldLeaf: string;
  siblings: string[];
  root: string;
}): Promise<boolean> => {
  const oldLeaf = typeof input.oldLeaf === 'string' ? input.oldLeaf.trim() : '';
  const root = typeof input.root === 'string' ? input.root.trim() : '';
  const siblings = Array.isArray(input.siblings)
    ? input.siblings.map((value) => (typeof value === 'string' ? value.trim() : ''))
    : [];
  if (!input.entityType || !input.entityId || !oldLeaf || !root || siblings.length !== TREE_DEPTH || siblings.some((value) => !value)) {
    return false;
  }

  const computedRoot = await computeRootFromWitness(
    computeRoundStateLeafIndex(input.entityType, input.entityId),
    oldLeaf,
    siblings
  );

  return computedRoot === root;
};

export const proveRoundStateTransitions = async (
  inputs: SingleEntityRoundTransitionInput[],
  branch?: RoundStateProofBranch
): Promise<RoundStateTransitionChain> => {
  const transitions = await normalizeTransitions(inputs);
  const emptyHashes = await getEmptyHashes();
  const branchLeafHashes = { ...(branch?.leafHashes || {}) };
  const branchLeafWitnesses = Object.fromEntries(
    Object.entries(branch?.leafWitnesses || {})
      .map(([key, witness]) => {
        const normalizedWitness = normalizeWitness(witness);
        return normalizedWitness ? ([key, normalizedWitness] as const) : null;
      })
      .filter((entry): entry is readonly [string, RoundStateTransitionWitness] => !!entry)
  );
  const branchLeafKeys = Object.keys(branchLeafHashes);
  const branchSnapshotEntityIds = [...new Set((branch?.snapshotEntityIds || []).filter(Boolean))].sort();
  const leafHashes = new Map<number, string>();
  const missingSnapshotLeafHashes = branchSnapshotEntityIds.filter((key) => !branchLeafHashes[key]);
  const hasBranchWitness = transitions.some((transition) => !!transition.branchWitness || !!branchLeafWitnesses[transition.key]);

  if (branch?.root && transitions.length > 0 && branchLeafKeys.length === 0) {
    throw new Error('Round state proof branch root cannot be reused without persisted leaf hashes');
  }

  if (branch?.root && missingSnapshotLeafHashes.length > 0) {
    throw new Error(
      `Round state proof branch is missing leaf hashes for snapshot entities: ${missingSnapshotLeafHashes.join(', ')}`
    );
  }

  for (const [key, hash] of Object.entries(branchLeafHashes)) {
    const [entityType, ...rest] = key.split(':');
    const entityId = rest.join(':');
    if (!entityType || !entityId) {
      continue;
    }

    leafHashes.set(computeRoundStateLeafIndex(entityType, entityId), hash);
  }

  for (const transition of transitions) {
    const existingHash = branchLeafHashes[transition.key];
    if (existingHash) {
      leafHashes.set(transition.leafIndex, existingHash);
      continue;
    }

    if (isAbsentBranchState(transition.beforeState)) {
      continue;
    }

    if (transition.branchWitness) {
      continue;
    }

    if (branch?.root) {
      throw new Error(
        `Round state proof cannot introduce untracked entity ${transition.key} with non-empty pre-state without a branch witness`
      );
    }

    leafHashes.set(transition.leafIndex, transition.oldLeaf);
  }

  const initialTree = await buildSparseTree(leafHashes);
  if (branch?.root && branch.root !== initialTree.root && !hasBranchWitness) {
    throw new Error(`Round state proof branch root mismatch: expected ${branch.root}, got ${initialTree.root}`);
  }

  if (transitions.length === 0) {
    const snapshotEntityIds = Object.keys(branchLeafHashes).sort();
    return {
      proofs: [],
      baseStateRoot: initialTree.root,
      postStateRoot: initialTree.root,
      nextBranch: {
        leafHashes: branchLeafHashes,
        root: initialTree.root,
        snapshotEntityIds,
        ...(Object.keys(branchLeafWitnesses).length > 0 ? { leafWitnesses: branchLeafWitnesses } : {}),
      },
    };
  }

  const proofs: SingleEntityRoundTransitionProof[] = [];
  let currentLeafHashes = leafHashes;
  let currentRoot = branch?.root ?? initialTree.root;

  for (const transition of transitions) {
    const storedBranchWitness = branchLeafWitnesses[transition.key];
    const branchWitness = transition.branchWitness ?? storedBranchWitness;
    let oldLeaf = currentLeafHashes.get(transition.leafIndex) ?? emptyHashes[0];
    let nextRoot: string | undefined;
    let siblings: string[] | undefined;

    if (branchWitness) {
      const witnessOldRoot = await computeRootFromWitness(transition.leafIndex, branchWitness.oldLeaf, branchWitness.siblings);
      if (witnessOldRoot !== currentRoot) {
        throw new Error(`Round state proof branch witness root mismatch for ${transition.key}`);
      }

      oldLeaf = branchWitness.oldLeaf;
      siblings = branchWitness.siblings;
      nextRoot = await computeRootFromWitness(transition.leafIndex, transition.newLeaf, branchWitness.siblings);
    } else {
      const currentTree = await buildSparseTree(currentLeafHashes);
      if (currentTree.root !== currentRoot) {
        throw new Error(
          `Round state proof branch cannot reconstruct current root ${currentRoot} from persisted leaves while processing ${transition.key}`
        );
      }

      oldLeaf = currentLeafHashes.get(transition.leafIndex) ?? emptyHashes[0];
      siblings = getSiblingsForLeaf(currentTree, transition.leafIndex);
      nextRoot = undefined;
    }

    const expectedTransitionOldLeaf =
      !branchLeafHashes[transition.key] && isAbsentBranchState(transition.beforeState) && !branchWitness
        ? emptyHashes[0]
        : transition.oldLeaf;

    if (oldLeaf !== expectedTransitionOldLeaf) {
      throw new Error(`Round state proof old leaf mismatch for ${transition.key}`);
    }

    const nextLeafHashes = new Map(currentLeafHashes);
    if (transition.newLeaf === emptyHashes[0]) {
      nextLeafHashes.delete(transition.leafIndex);
      delete branchLeafHashes[transition.key];
      delete branchLeafWitnesses[transition.key];
    } else {
      nextLeafHashes.set(transition.leafIndex, transition.newLeaf);
      branchLeafHashes[transition.key] = transition.newLeaf;
      if (branchWitness) {
        branchLeafWitnesses[transition.key] = {
          oldLeaf: transition.newLeaf,
          siblings: [...branchWitness.siblings],
        };
      }
    }

    const nextTree = nextRoot ? undefined : await buildSparseTree(nextLeafHashes);
    const { proof, publicSignals } = await generateProof({
      oldRoot: currentRoot,
      newRoot: nextRoot ?? nextTree!.root,
      oldLeaf,
      newLeaf: transition.newLeaf,
      leafIndex: transition.leafIndex,
      siblings: siblings!,
    });

    proofs.push({
      kind: 'zk.updateLeaf',
      entityType: transition.entityType,
      entityId: transition.entityId,
      transitionKind:
        oldLeaf === emptyHashes[0] ? 'insert' : transition.newLeaf === emptyHashes[0] ? 'delete' : 'update',
      ...(oldLeaf === emptyHashes[0] ? { transitionSource: 'emptyLeaf' as const } : {}),
      ...(branchWitness ? { transitionSource: 'branchWitness' as const } : {}),
      oldRoot: currentRoot,
      newRoot: nextRoot ?? nextTree!.root,
      proof,
      publicSignals: publicSignals as string[],
    });

    currentLeafHashes = nextLeafHashes;
    currentRoot = nextRoot ?? nextTree!.root;
  }

  const finalTree = await buildSparseTree(currentLeafHashes);
  if (finalTree.root !== currentRoot && Object.keys(branchLeafWitnesses).length === 0) {
    throw new Error(
      `Round state proof branch cannot persist reconstructed root ${currentRoot}; additional branch witness coverage is required`
    );
  }

  const snapshotEntityIds = Object.keys(branchLeafHashes).sort();
  const postStateRoot = proofs[proofs.length - 1].newRoot;

  return {
    proofs,
    baseStateRoot: proofs[0].oldRoot,
    postStateRoot,
    nextBranch: {
      leafHashes: branchLeafHashes,
      root: postStateRoot,
      snapshotEntityIds,
      ...(Object.keys(branchLeafWitnesses).length > 0 ? { leafWitnesses: branchLeafWitnesses } : {}),
    },
  };
};

export const proveSingleEntityRoundTransition = async (
  input: SingleEntityRoundTransitionInput
): Promise<SingleEntityRoundTransitionProof | null> => {
  const chain = await proveRoundStateTransitions([input]);
  return chain.proofs[0] ?? null;
};
