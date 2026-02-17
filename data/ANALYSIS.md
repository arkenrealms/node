# arken/packages/node/data/ANALYSIS.md

## Folder
`arken/packages/node/data`

## Snapshot
- Files: 0
- Subfolders: 2

## Notable contents
- dirs: db, zk
- `zk/` now documented leaf-first (`circuits`, `updateLeaf_js`) with source-level ownership notes.

## Protocol/Test focus
- Prioritize transport, serialization, timeout, and error-handling paths where applicable.
- In `zk/`, prioritize deterministic proof/witness artifact generation and malformed input handling tests.

## New findings (2026-02-17)
- `zk/circuits/updateLeaf.circom` pins `main = UpdateLeaf(16)`, creating an implicit runtime coupling to tree depth.
- `zk/updateLeaf_js/*` is generated-style witness runtime code with limited test coverage and sparse reproducibility notes.
- Binary proving artifacts (`.zkey`, `.wasm`) lack local checksum/version guardrails.
