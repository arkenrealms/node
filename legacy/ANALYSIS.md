# arken/packages/node/legacy/ANALYSIS.md

## Folder purpose
Legacy compatibility surface for historical Arken game/runtime data and contract-adjacent helpers.

## Child context summary
- `legacy/data`: content/rule adapter layer over generated game catalogs and hardcoded legacy dictionaries.
- `legacy/contracts`: contract artifacts/integration helpers (not yet deeply analyzed in this chunk).

## Key top-level files
- `contractData.ts`, `contractInfo.ts`, `farmInfo.ts`: contract and farm metadata helpers.
- `getOld*` files: migration/lookup helpers for legacy usernames/user meta.
- `types.ts`: legacy typing surface.

## Architectural context
Acts as a bridge for backward compatibility while the platform evolves toward an omniverse-grade architecture (multi-game, liveops-ready, policy-driven content).

## Risks / gaps
- Legacy responsibilities are broad and not sharply bounded by domain.
- Potential coupling between game content, wallet policy, and contract metadata.

## Follow-ups
- Continue deepest-first analysis in `legacy/contracts`.
- Define migration boundary: what remains legacy vs promoted into modern typed modules.
