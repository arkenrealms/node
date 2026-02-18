# @arken/node web3

Legacy-compatible Web3 transport helpers.

## Files
- `httpProvider.ts`: custom JSON-RPC provider wrapper with fetch + Cache API usage.
  - Constructor now honors explicit URL input before falling back to default provider pool.
  - Request IDs are preserved when callers provide one; fallback ID `56` is only used when missing.
  - Cache API usage is now runtime-guarded; provider falls back to network-only request flow when `caches`/`Request`/`Response` globals are unavailable.

## Notes
- This folder currently exposes one monolithic provider implementation.
- Behavior relies on browser/worker globals (`fetch`, `caches`, `Request`, `Response`), so runtime assumptions should be validated explicitly in tests before reuse in Node-only environments.
