# arken/packages/node/data/zk/updateLeaf_js/README.md

## Purpose
Generated JavaScript/WASM witness tooling for the `updateLeaf` circuit.

## Files
- `generate_witness.js`: CLI entrypoint (`wasm + input.json -> output.wtns`).
- `witness_calculator.js`: runtime adapter around circuit WASM exports.
- `updateLeaf.wasm`: compiled circuit artifact consumed by witness tools.
