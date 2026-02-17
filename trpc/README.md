# arken/packages/node/trpc/README.md

Socket-based tRPC transport helpers for `@arken/node`.

## Files
- `socketLink.ts`: client link + proxy, callback correlation, request ID collision avoidance, same-tick response safety (register callback before emit), timeout/error handling, safe malformed-response handling, optional `onAny` response handling.
- `socketServer.ts`: server-side request handler for `trpc` events and standardized `trpcResponse` envelopes.
- `NOTES.md`: maintainer notes and protocol hardening backlog.

## Wire format
- Request: `trpc` event with `{ id, method, type, params }`.
- Response: `trpcResponse` with `{ id, result, error? }`.
- `result` payload convention: `{ status, data }` (serialized).
