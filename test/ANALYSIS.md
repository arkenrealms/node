# arken/packages/node/test/ANALYSIS.md

## Folder
`arken/packages/node/test`

## Snapshot
- Files: 4
- Subfolders: 0

## Notable contents
- files: NOTES.md, README.md, socketLink.spec.ts, socketServer.spec.ts, httpProvider.spec.ts

## Protocol/Test focus
- Prioritize transport, serialization, timeout, and error-handling paths where applicable.
- Expanded edge coverage for duplicate-response idempotency, explicit resolve/error permutation single-settlement invariants (link + proxy), unsubscribe/teardown-before-timeout late resolve/reject no-op behavior with callback-map invariants (link + proxy), callback-boundary resolve-throw fallback on mixed `error`/`result` envelopes (single reject + duplicate-delivery no-op), proxy timeout-vs-late-response races, proxy-timeout `reqId` metadata parity checks, ID-collision prevention, late responses, malformed payload permutations, strict response-id validation (non-string/blank IDs), own-property callback matching/prototype-key safety (including `toString` and `__proto__` ids), server-push malformed-param resilience across both direct `trpc` and `trpcResponse` fallback paths, malformed push-method filtering, deserialize-failure behavior with reqId metadata checks, immediate same-tick response races, and `preferOnAny` non-response filtering/fallback-teardown behavior.
- Ensure tests cover new/changed protocol behavior and edge cases.
- Added listener-API guard coverage in `socketServer.spec.ts` to verify attach/detach safety when socket objects do not implement `on`/`off`.
- Added server-handler regressions for undecodable payload paths: invalid binary-string message decode should emit the same status-0 malformed envelope, decoded payloads with non-string/blank-string `method` should emit the same explicit missing/invalid-method envelope, response-id normalization should trim valid IDs and drop non-string/blank IDs before response emit (including reserved prototype-path IDs like `__proto__`), whitespace-padded valid methods should dispatch successfully after trim normalization, prototype/constructor traversal attempts (including surrounding-whitespace, exact root `constructor`, `prototype`-segment, nested-segment variants, inherited built-in paths like `core.toString`, inherited array-prototype callable paths like `core.list.map`, and expanded inherited typed-array callable paths like `core.bytes.map` and `core.floats.map`) should be rejected as missing handlers, empty/whitespace-segment method traversal attempts (`core..ping`, `core. ping`) should be rejected as missing handlers, and undecodable `params` payloads should produce status-0 error propagation instead of unhandled throw behavior.
- Added link-side regression for backend-only op paths (`seer` without `method`) to ensure `createSocketLink` fails fast and avoids malformed socket emits.
- Added `httpProvider` regression coverage for cacheless runtimes to confirm request flow remains functional when Cache API globals are absent.
- Added deterministic timeout regression coverage for `httpProvider` to ensure hung fetch calls reject with explicit timeout error metadata instead of hanging indefinitely.
- Added abort-on-timeout regression coverage for `httpProvider` so in-flight fetches are cancelled via `AbortController` when timeout is reached.
- Added 403 single-provider regression coverage for `httpProvider` to ensure failover logic does not recurse indefinitely when no alternate providers are available.
- Added repeated-403 cache regression coverage so synthetic empty 403 payloads are not cached into silent `undefined` results on follow-up calls.
- Added fetch/network throw-path regression coverage for `httpProvider` so request failures surface stable `RequestError` metadata (`code: -32000`).
- Added request-envelope immutability regression coverage for `httpProvider` so normalization does not mutate caller-owned payload objects.
- Added malformed-constructor-URL fallback regression coverage for `httpProvider` so startup does not crash on invalid endpoint input.
- Added `send`/`sendAsync` fallback-ID regression coverage so callback responses stay aligned with normalized request IDs.
- Added invalid/non-JSON response-body regression coverage for `httpProvider` so malformed upstream payloads fail closed with stable `RequestError` metadata.
- Added parsed-envelope validation regressions for `httpProvider` so primitive JSON payloads and object envelopes missing both `result` and `error` fail closed with deterministic `RequestError` metadata.
- Added malformed-`error`-envelope regression coverage for `httpProvider` so non-object `error` payloads fail closed as invalid JSON-RPC envelopes.
- Added JSON-RPC `error` field-normalization regression coverage for `httpProvider` so missing/invalid `message` or `code` values resolve to deterministic defaults.
- Added response-body read-failure regression coverage for `httpProvider` so stream/read exceptions surface deterministic `RequestError` metadata.
