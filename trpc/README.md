# /Users/web/.openclaw/workspace-nel/arken/packages/node/trpc/README.md

Socket-based tRPC transport helpers for `@arken/node`.

## Files
- `socketLink.ts`: client link + proxy, callback correlation, timeout/error handling, optional `onAny` response handling.
- `socketServer.ts`: server-side request handler for `trpc` events and standardized `trpcResponse` envelopes.
- `NOTES.md`: maintainer notes and protocol hardening backlog.

## Wire format
- Request: `trpc` event with `{ id, method, type, params }`.
- Response: `trpcResponse` with `{ id, result, error? }`.
- `result` payload convention: `{ status, data }` (serialized).
