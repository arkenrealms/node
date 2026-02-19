# arken/packages/node/data/zk/README.md

## Purpose
Static zero-knowledge proving artifacts for the `updateLeaf` Merkle update circuit.

## Contents
- `circuits/`: Circom source (`MerklePath.circom`, `updateLeaf.circom`).
- `updateLeaf_js/`: witness generation helpers emitted by circom/snarkjs.
- `updateLeaf.r1cs`, `updateLeaf.zkey`, `verification_key.json`, `updateLeaf.sym`: proving/verification assets.

## Notes
These files are mostly generated/runtime-consumed assets. Treat circuit and witness helper updates as security-sensitive and validate reproducibility when regenerated.
