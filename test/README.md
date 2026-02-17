# arken/packages/node/test/README.md

Protocol-focused tests for `@arken/node` socket tRPC wrappers.

## Files
- `socketLink.spec.ts`: client transport routing, callback lifecycle, duplicate-delivery idempotency, unsubscribe/teardown-vs-late-response no-op behavior (link + proxy), timeout-vs-late-response race handling, single-terminal-settlement guards for resolve/error permutations (link + proxy paths), callback-boundary resolve-throw fallback behavior for mixed `error`/`result` envelopes, ID-collision guardrails, timeouts, late response handling, malformed payload permutations, strict response-id handling (non-string/blank IDs), own-property callback matching/prototype-key safety, deserialize-failure propagation, immediate same-tick response handling, alternate response IDs, server-push malformed-param resilience (for both `trpc` and `trpcResponse` fallback paths), malformed push-method filtering, and `onAny` support including non-response filtering + fallback/teardown edge paths.
- `socketServer.spec.ts`: server dispatch, malformed payload handling, missing method behavior, and listener attach/detach wiring.
- `NOTES.md`: tracking notes for additional test coverage.
