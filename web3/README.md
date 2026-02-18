# @arken/node web3

Legacy-compatible Web3 transport helpers.

## Files
- `httpProvider.ts`: custom JSON-RPC provider wrapper with fetch + Cache API usage.
  - Constructor now honors explicit URL input before falling back to default provider pool.
  - Invalid constructor URL input now fails over to the first valid configured provider URL instead of throwing during initialization.
  - Request IDs are preserved when callers provide one; fallback ID `56` is only used when missing.
  - Cache API usage is now runtime-guarded; provider falls back to network-only request flow when `caches`/`Request`/`Response` globals are unavailable.
  - Network POSTs are now wrapped with a deterministic timeout gate (`PROVIDER_TIMEOUT` default 5000ms) to avoid indefinite hangs.
  - Timeout handling now aborts in-flight fetches via `AbortController` when available, reducing dangling network work after deadline expiry.
  - Non-timeout fetch/network failures are now normalized into `RequestError` (`code: -32000`) for stable caller-side error handling.
  - 403 fallback retries now fail closed when no alternate provider exists, preventing unbounded recursive retry loops.
  - Caller request envelopes are cloned before normalization so `jsonrpc`/fallback-id assignment does not mutate upstream objects.
  - `send`/`sendAsync` now normalize missing request IDs to the same fallback (`56`) used by `request`, preventing callback responses with `id: undefined`.

## Notes
- This folder currently exposes one monolithic provider implementation.
- Behavior relies on browser/worker globals (`fetch`, `caches`, `Request`, `Response`), so runtime assumptions should be validated explicitly in tests before reuse in Node-only environments.
