# arken/packages/node/test/README.md

Protocol-focused tests for `@arken/node` socket tRPC wrappers.

## Files
- `socketLink.spec.ts`: client transport routing, callback lifecycle, ID-collision guardrails, timeouts, late response handling, malformed payload permutations, deserialize-failure propagation, alternate response IDs, and `onAny` support.
- `socketServer.spec.ts`: server dispatch, malformed payload handling, missing method behavior, and listener attach/detach wiring.
- `NOTES.md`: tracking notes for additional test coverage.
