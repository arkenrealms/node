# arken/packages/node/.rush/ANALYSIS.md

## Folder
`arken/packages/node/.rush`

## Purpose
- Rush temporary metadata/cache for dependency and lock coordination.

## Key files
- `temp/shrinkwrap-deps.json`

## Risks
- Stale temp metadata can create nondeterministic local dependency state.

## Next test/protocol checks
- Reinstall/regenerate via Rush and verify lock consistency.
- Re-run protocol-critical tests after dependency graph changes.
