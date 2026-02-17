# arken/packages/node/ANALYSIS.md

## Folder purpose
Core Node SDK/runtime utility package for Arken protocol, data handling, and game-platform support services.

## Child context summary (current)
- `trpc/`: socket transport wrappers for tRPC request/response lifecycle (actively hardened).
- `test/`: protocol-focused tests for socket client/server wrappers.
- `legacy/`: backward-compatibility layer for historical game/content/contract metadata.
- `time/`: shared scheduling/time utilities used across runtime paths.
- `data/`: bundled artifacts and ZK-related support assets.
- `web3/`: legacy JSON-RPC provider helper with browser-cache assumptions and hardcoded endpoint selection.
- `scripts/`: artifact-regeneration utilities (currently ZK `updateLeaf` Groth16 setup flow).
- `types/`: ambient declaration augmentations (`mongoose` query `asJSON`) with compile-time drift risk tied to upstream generic signatures.
- `.rush/`: Rush cache metadata (`temp/shrinkwrap-deps.json`) that affects dependency determinism and lock reconciliation.
- `websocket.ts`: lightweight socket helper exposing `emitAll`/`emitDirect` and `getClientSocket`; currently uses untyped emitter params and no explicit reconnect/backoff policy controls at this utility boundary.

## Omniverse architecture perspective
This package is a foundational SDK layer for a Steam/Battle.net-like ecosystem (multi-game runtime + launcher/liveops integrations). Reliability priorities are:
1. Transport correctness and resiliency (timeouts, retries, error envelopes).
2. Deterministic content/economy data contracts.
3. Operational observability and typed boundaries across subsystems.

## Risks / gaps
- Mixed legacy and modern patterns (typed + untyped maps).
- Generated data and runtime assumptions need stronger schema/test guardrails.
- Utility modules (time/task queue) need production-grade control surfaces.

## Follow-ups
- Continue bottom-up analysis for remaining leaf folders before refining parent summaries further.
- Add protocol edge-case tests (id collisions, late responses, malformed payload permutations).
- Expand folder README/ANALYSIS coverage with explicit cross-folder dependency notes.
