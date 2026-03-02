# arken/packages/node/util/ANALYSIS.md

## Scope
Utility subpath re-export surface for `@arken/node`.

## Change rationale (2026-02-21)
- Replaced root-level `util.ts` `export * from '.'` pattern with explicit `api` + `rpc` re-exports.
- Added dedicated `util/api.ts` and `util/rpc.ts` bridge files to avoid circular package-root coupling and keep subpath ownership explicit.
- Added targeted test coverage (`test/util.spec.ts`) to lock expected exports.
