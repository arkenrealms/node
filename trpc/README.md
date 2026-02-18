# arken/packages/node/trpc/README.md

Socket-based tRPC transport helpers for `@arken/node`.

## Files
- `socketLink.ts`: client link + proxy, callback correlation, request ID collision avoidance, same-tick response safety (register callback before emit), timeout/error handling (including proxy timeout `reqId` metadata), strict response-id parsing, own-property callback matching (prototype-key safety), safe malformed-response/server-push decode handling, method-shape validation for server-push events, optional `onAny` response handling with graceful fallback/teardown guards.
- `socketServer.ts`: server-side request handler for `trpc` events and standardized `trpcResponse` envelopes, including explicit invalid-method guards (missing/non-string/blank method values), trimmed-method dispatch for whitespace-tolerant valid calls, and strict method-path validation (blocks `__proto__` / `prototype` / `constructor`, empty path segments like `core..ping`, and whitespace-padded segments like `core. ping`) during method resolution.
- `NOTES.md`: maintainer notes and protocol hardening backlog.

## Wire format
- Request: `trpc` event with `{ id, method, type, params }`.
- Response: `trpcResponse` with `{ id, result, error? }`.
- `result` payload convention: `{ status, data }` (serialized).
