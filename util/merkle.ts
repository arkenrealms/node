import keccak256 from 'keccak256';
import { MerkleNode } from '../modules/core/core.models';

const TREE_DEPTH = 16; // 2^16 = 65536 leaves

function emptyHash(level: number): Buffer {
  return keccak256(Buffer.concat([Buffer.from(`empty${level}`)]));
}

export async function getMerkleRoot(): Promise<string> {
  const root = await MerkleNode.findOne({ level: TREE_DEPTH, index: 0 });
  return root?.hash || keccak256(Buffer.alloc(0)).toString('hex');
}

export async function updateLeaf(index: number, newLeafData: any) {
  let hash = keccak256(JSON.stringify(newLeafData));

  // Save new leaf
  await MerkleNode.updateOne({ level: 0, index }, { hash: hash.toString('hex') }, { upsert: true });

  // Propagate up the tree
  for (let level = 1; level <= TREE_DEPTH; level++) {
    const parentIndex = Math.floor(index / 2);
    const leftIndex = parentIndex * 2;
    const rightIndex = parentIndex * 2 + 1;

    const left = await MerkleNode.findOne({ level: level - 1, index: leftIndex });
    const right = await MerkleNode.findOne({ level: level - 1, index: rightIndex });

    const leftHash = Buffer.from(left?.hash || emptyHash(level - 1));
    const rightHash = Buffer.from(right?.hash || emptyHash(level - 1));

    const parentHash = keccak256(Buffer.concat([leftHash, rightHash]));

    await MerkleNode.updateOne({ level, index: parentIndex }, { hash: parentHash.toString('hex') }, { upsert: true });

    index = parentIndex;
  }
}

export async function getSiblingsFromDB(leafIndex: number): Promise<string[]> {
  const siblings: string[] = [];
  let index = leafIndex;

  for (let level = 0; level < TREE_DEPTH; level++) {
    const siblingIndex = index % 2 === 0 ? index + 1 : index - 1;

    const sibling = await MerkleNode.findOne({
      level,
      index: siblingIndex,
    });

    siblings.push(sibling?.hash || emptyHash(level));
    index = Math.floor(index / 2);
  }

  return siblings;
}

export async function updateLeavesInBatch(updates: { index: number; data: any }[]) {
  // Step 1: Write leaves
  for (const update of updates) {
    const hash = keccak256(JSON.stringify(update.data)).toString('hex');
    await MerkleNode.updateOne({ level: 0, index: update.index }, { hash }, { upsert: true });
  }

  // Step 2: Propagate up
  const affected = new Set<string>();
  for (const update of updates) {
    let index = update.index;
    for (let level = 0; level <= TREE_DEPTH; level++) {
      affected.add(`${level}:${index}`);
      index = Math.floor(index / 2);
    }
  }

  // Step 3: Update affected nodes
  const sorted = Array.from(affected)
    .map((key) => {
      const [level, index] = key.split(':').map(Number);
      return { level, index };
    })
    .sort((a, b) => a.level - b.level);

  for (const { level, index } of sorted) {
    if (level === 0) continue;

    const left = await MerkleNode.findOne({ level: level - 1, index: index * 2 });
    const right = await MerkleNode.findOne({ level: level - 1, index: index * 2 + 1 });

    const leftHash = Buffer.from(left?.hash || emptyHash(level - 1), 'hex');
    const rightHash = Buffer.from(right?.hash || emptyHash(level - 1), 'hex');

    const hash = keccak256(Buffer.concat([leftHash, rightHash])).toString('hex');

    await MerkleNode.updateOne({ level, index }, { hash }, { upsert: true });
  }

  const root = await MerkleNode.findOne({ level: TREE_DEPTH, index: 0 });
  return root?.hash;
}

export function hashUpdatePayload(web3: any, payload: any): string {
  return web3.utils.sha3(JSON.stringify(payload))!;
}

export function verifySignature(web3: any, hash: string, signature: string, expectedAddress: string): boolean {
  const recovered = web3.eth.accounts.recover(hash, signature);
  return recovered.toLowerCase() === expectedAddress.toLowerCase();
}

async function handleSignedMerkleUpdate({
  web3,
  creator,
  payload,
  signature,
}: {
  web3: any;
  creator: string;
  payload: {
    leafIndex: number;
    oldLeaf: string;
    newLeaf: string;
    siblings: string[];
    oldRoot: string;
    newRoot: string;
  };
  signature: string;
}) {
  const expectedHash = hashUpdatePayload(web3, payload);

  if (!verifySignature(web3, expectedHash, signature, creator)) {
    throw new Error('Invalid signature or unauthorized event');
  }

  // Optional: verify ZK proof of transition (if included)
  // Optional: check oldRoot matches locally

  // Accept update
  await updateLeaf(payload.leafIndex, payload.newLeaf);
}
