import { verifyProof } from '../zk';
import {
  computeRoundStateLeafIndex,
  createRoundStateBranchWitness,
  createRoundStateImportWitness,
  proveRoundStateTransitions,
  proveSingleEntityRoundTransition,
  verifyRoundStateImportWitness,
} from '../roundStateProof';

jest.setTimeout(15000);

describe('roundStateProof', () => {
  test('produces a verifiable single-entity transition proof', async () => {
    const proof = await proveSingleEntityRoundTransition({
      entityType: 'character',
      entityId: 'char-1',
      baseVersion: 7,
      beforeState: { hp: 10, xp: 1 },
      afterState: { hp: 12, xp: 1 },
    });

    expect(proof).toMatchObject({
      kind: 'zk.updateLeaf',
      entityType: 'character',
      entityId: 'char-1',
    });
    expect(computeRoundStateLeafIndex('character', 'char-1')).toBeGreaterThanOrEqual(0);
    expect(await verifyProof(proof!.proof, proof!.publicSignals)).toBe(true);
  });

  test('returns null when the state does not change', async () => {
    await expect(
      proveSingleEntityRoundTransition({
        entityType: 'character',
        entityId: 'char-2',
        baseVersion: 1,
        beforeState: { hp: 5 },
        afterState: { hp: 5 },
      })
    ).resolves.toBeNull();
  });

  test('produces a verifiable chained proof set for multiple entity transitions', async () => {
    const chain = await proveRoundStateTransitions([
      {
        entityType: 'character',
        entityId: 'char-a',
        baseVersion: 1,
        beforeState: { hp: 10, xp: 1 },
        afterState: { hp: 11, xp: 1 },
      },
      {
        entityType: 'character',
        entityId: 'char-b',
        baseVersion: 2,
        beforeState: { hp: 9, xp: 2 },
        afterState: { hp: 8, xp: 3 },
      },
    ]);

    expect(chain.proofs).toHaveLength(2);
    expect(chain.proofs.map((proof) => proof.transitionKind)).toEqual(['update', 'update']);
    expect(chain.proofs[0].oldRoot).not.toBe(chain.proofs[0].newRoot);
    expect(chain.proofs[0].newRoot).toBe(chain.proofs[1].oldRoot);
    expect(chain.baseStateRoot).toBe(chain.proofs[0].oldRoot);
    expect(chain.postStateRoot).toBe(chain.proofs[1].newRoot);
    expect(chain.nextBranch.root).toBe(chain.postStateRoot);
    expect(chain.nextBranch.snapshotEntityIds).toEqual(['character:char-a', 'character:char-b']);
    expect(await verifyProof(chain.proofs[0].proof, chain.proofs[0].publicSignals)).toBe(true);
    expect(await verifyProof(chain.proofs[1].proof, chain.proofs[1].publicSignals)).toBe(true);
  });

  test('rejects reusing a branch root when the persisted leaf hashes are missing', async () => {
    const firstChain = await proveRoundStateTransitions([
      {
        entityType: 'character',
        entityId: 'char-rooted',
        baseVersion: 1,
        beforeState: { hp: 10 },
        afterState: { hp: 11 },
      },
    ]);

    await expect(
      proveRoundStateTransitions(
        [
          {
            entityType: 'character',
            entityId: 'char-rooted',
            baseVersion: 1,
            beforeState: { hp: 11 },
            afterState: { hp: 12 },
          },
        ],
        {
          root: firstChain.postStateRoot,
          snapshotEntityIds: ['character:char-rooted'],
          leafHashes: {},
        }
      )
    ).rejects.toThrow(/without persisted leaf hashes/);
  });

  test('rejects introducing an untracked entity with non-empty pre-state into an anchored branch', async () => {
    const firstChain = await proveRoundStateTransitions([
      {
        entityType: 'character',
        entityId: 'char-rooted',
        baseVersion: 1,
        beforeState: { hp: 10 },
        afterState: { hp: 11 },
      },
    ]);

    await expect(
      proveRoundStateTransitions(
        [
          {
            entityType: 'character',
            entityId: 'char-new',
            baseVersion: 1,
            beforeState: { hp: 5 },
            afterState: { hp: 6 },
          },
        ],
        firstChain.nextBranch
      )
    ).rejects.toThrow(/without a branch witness/);
  });

  test('allows introducing an untracked entity from an empty leaf into an anchored branch', async () => {
    const firstChain = await proveRoundStateTransitions([
      {
        entityType: 'character',
        entityId: 'char-rooted',
        baseVersion: 1,
        beforeState: { hp: 10 },
        afterState: { hp: 11 },
      },
    ]);

    const secondChain = await proveRoundStateTransitions(
      [
        {
          entityType: 'character',
          entityId: 'char-new',
          baseVersion: 1,
          beforeState: null,
          afterState: { hp: 6 },
        },
      ],
      firstChain.nextBranch
    );

    expect(secondChain.baseStateRoot).toBe(firstChain.postStateRoot);
    expect(secondChain.nextBranch.snapshotEntityIds).toEqual(['character:char-new', 'character:char-rooted']);
    expect(secondChain.proofs[0].transitionKind).toBe('insert');
    expect(secondChain.proofs[0].transitionSource).toBe('emptyLeaf');
    expect(await verifyProof(secondChain.proofs[0].proof, secondChain.proofs[0].publicSignals)).toBe(true);
  });

  test('allows importing an existing untracked entity into an anchored branch with a real witness', async () => {
    const fullBranch = await proveRoundStateTransitions([
      {
        entityType: 'character',
        entityId: 'char-rooted',
        baseVersion: 1,
        beforeState: { hp: 10 },
        afterState: { hp: 11 },
      },
      {
        entityType: 'character',
        entityId: 'char-imported',
        baseVersion: 1,
        beforeState: { hp: 5 },
        afterState: { hp: 6 },
      },
    ]);

    const branchWitness = await createRoundStateBranchWitness(
      {
        entityType: 'character',
        entityId: 'char-imported',
        baseVersion: 1,
        state: { hp: 6 },
      },
      fullBranch.nextBranch
    );

    const reducedBranch = {
      root: fullBranch.postStateRoot,
      snapshotEntityIds: ['character:char-rooted'],
      leafHashes: {
        'character:char-rooted': fullBranch.nextBranch.leafHashes['character:char-rooted'],
      },
    };

    const secondChain = await proveRoundStateTransitions(
      [
        {
          entityType: 'character',
          entityId: 'char-imported',
          baseVersion: 1,
          beforeState: { hp: 6 },
          afterState: { hp: 7 },
          branchWitness,
        },
        {
          entityType: 'character',
          entityId: 'char-rooted',
          baseVersion: 1,
          beforeState: { hp: 11 },
          afterState: { hp: 12 },
        },
      ],
      reducedBranch
    );

    expect(secondChain.baseStateRoot).toBe(fullBranch.postStateRoot);
    expect(secondChain.nextBranch.snapshotEntityIds).toEqual(['character:char-imported', 'character:char-rooted']);
    expect(secondChain.proofs.map((proof) => proof.transitionKind)).toEqual(['update', 'update']);
    expect(secondChain.proofs[0].transitionSource).toBe('branchWitness');
    expect(secondChain.proofs[1].transitionSource).toBeUndefined();
    expect(secondChain.proofs[0].newRoot).toBe(secondChain.proofs[1].oldRoot);
    expect(await verifyProof(secondChain.proofs[0].proof, secondChain.proofs[0].publicSignals)).toBe(true);
    expect(await verifyProof(secondChain.proofs[1].proof, secondChain.proofs[1].publicSignals)).toBe(true);
  });

  test('reuses a persisted branch witness for later updates when the branch snapshot is partial', async () => {
    const fullBranch = await proveRoundStateTransitions([
      {
        entityType: 'character',
        entityId: 'char-rooted',
        baseVersion: 1,
        beforeState: { hp: 10 },
        afterState: { hp: 11 },
      },
      {
        entityType: 'character',
        entityId: 'char-imported',
        baseVersion: 1,
        beforeState: { hp: 5 },
        afterState: { hp: 6 },
      },
      {
        entityType: 'character',
        entityId: 'char-hidden',
        baseVersion: 1,
        beforeState: { hp: 20 },
        afterState: { hp: 21 },
      },
    ]);

    const importWitness = await createRoundStateImportWitness(
      {
        entityType: 'character',
        entityId: 'char-imported',
        baseVersion: 1,
        state: { hp: 6 },
      },
      fullBranch.nextBranch
    );
    const verifiedImportWitness = await verifyRoundStateImportWitness({
      entityType: 'character',
      entityId: 'char-imported',
      baseVersion: 1,
      state: { hp: 6 },
      witness: importWitness,
    });

    const partialBranch = {
      root: fullBranch.postStateRoot,
      snapshotEntityIds: ['character:char-rooted', 'character:char-imported'],
      leafHashes: {
        'character:char-rooted': fullBranch.nextBranch.leafHashes['character:char-rooted'],
        'character:char-imported': fullBranch.nextBranch.leafHashes['character:char-imported'],
      },
      leafWitnesses: {
        'character:char-imported': verifiedImportWitness!.witness,
      },
    };

    const secondChain = await proveRoundStateTransitions(
      [
        {
          entityType: 'character',
          entityId: 'char-imported',
          baseVersion: 1,
          beforeState: { hp: 6 },
          afterState: { hp: 7 },
        },
      ],
      partialBranch
    );

    expect(secondChain.baseStateRoot).toBe(fullBranch.postStateRoot);
    expect(secondChain.proofs).toHaveLength(1);
    expect(secondChain.proofs[0].transitionSource).toBe('branchWitness');
    expect(secondChain.nextBranch.leafHashes['character:char-imported']).toBe(
      secondChain.nextBranch.leafWitnesses?.['character:char-imported']?.oldLeaf
    );
    expect(await verifyProof(secondChain.proofs[0].proof, secondChain.proofs[0].publicSignals)).toBe(true);
  });
});
