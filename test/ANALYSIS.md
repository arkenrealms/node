# arken/packages/node/test/ANALYSIS.md

## Folder
`arken/packages/node/test`

## Snapshot
- Files: 4
- Subfolders: 0

## Notable contents
- files: NOTES.md, README.md, socketLink.spec.ts, socketServer.spec.ts

## Protocol/Test focus
- Prioritize transport, serialization, timeout, and error-handling paths where applicable.
- Expanded edge coverage for duplicate-response idempotency, explicit resolve/error permutation single-settlement invariants (link + proxy), unsubscribe/teardown-before-timeout late resolve/reject no-op behavior with callback-map invariants (link + proxy), callback-boundary resolve-throw fallback on mixed `error`/`result` envelopes (single reject + duplicate-delivery no-op), proxy timeout-vs-late-response races, proxy-timeout `reqId` metadata parity checks, ID-collision prevention, late responses, malformed payload permutations, strict response-id validation (non-string/blank IDs), own-property callback matching/prototype-key safety (including `toString` and `__proto__` ids), server-push malformed-param resilience across both direct `trpc` and `trpcResponse` fallback paths, malformed push-method filtering, deserialize-failure behavior with reqId metadata checks, immediate same-tick response races, and `preferOnAny` non-response filtering/fallback-teardown behavior.
- Ensure tests cover new/changed protocol behavior and edge cases.
- Added listener-API guard coverage in `socketServer.spec.ts` to verify attach/detach safety when socket objects do not implement `on`/`off`.
- Added server-handler regressions for undecodable payload paths: invalid binary-string message decode should emit the same status-0 malformed envelope, decoded payloads with non-string/blank-string `method` should emit the same explicit missing/invalid-method envelope, whitespace-padded valid methods should dispatch successfully after trim normalization, prototype/constructor traversal attempts (including surrounding-whitespace variants) and empty-segment method traversal attempts should be rejected as missing handlers, and undecodable `params` payloads should produce status-0 error propagation instead of unhandled throw behavior.
