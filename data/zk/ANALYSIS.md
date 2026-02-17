# arken/packages/node/data/zk/ANALYSIS.md

## Folder purpose in project context
Holds the ZK circuit and proving material used for Merkle leaf updates, likely feeding integrity checks in node-side data workflows.

## Notable files and responsibilities
- `circuits/MerklePath.circom`: Poseidon-based Merkle path verifier (`depth`-parameterized).
- `circuits/updateLeaf.circom`: asserts old/new roots using shared siblings/path for old/new leaves.
- `updateLeaf_js/witness_calculator.js`: generated WASM witness calculator runtime.
- `updateLeaf_js/generate_witness.js`: CLI utility to compute witness (`.wtns`) from input JSON.
- `verification_key.json`: Groth16 verifier key (bn128).

## Protocol/test relevance
- Not websocket transport code directly, but a high-integrity boundary where malformed input handling and deterministic artifact generation matter.
- Current workspace has no dedicated automated checks around circuit artifact consistency/regeneration.

## Risks / gaps
- Generated assets and handwritten circuit source live together with no documented regeneration command/version pin in this folder.
- Witness helper error handling is mostly runtime/log-based; no local tests here validating expected failures for malformed signal maps.
- Binary artifacts (`.zkey`, `.wasm`) can drift silently without checksum/version notes.

## Follow-ups
- Add a short reproducibility note (toolchain versions + commands) in a future pass.
- Consider a lightweight CI check that verifies circuit artifact metadata/checksums.
