# arken/packages/node/data/zk/circuits/README.md

## Purpose
Circom source for Merkle membership verification and leaf-update root transition proofs.

## Files
- `MerklePath.circom`: computes a Poseidon Merkle root from `(leaf, path, siblings)`.
- `updateLeaf.circom`: validates both old and new roots for an in-place leaf update.
