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
  - Abort-triggered fetch rejections that occur because of timeout cancellation are now normalized back to the same deterministic timeout `RequestError` shape.
  - Non-timeout fetch/network failures are now normalized into `RequestError` (`code: -32000`) for stable caller-side error handling.
  - Malformed transport responses (non-Response-like objects returned by fetch/cache) now fail closed with `RequestError('Invalid RPC HTTP response')` instead of leaking type errors.
  - Response body read failures are now normalized into `RequestError` metadata (`code: -32000`) instead of leaking raw stream exceptions.
  - Invalid/non-JSON RPC response bodies now fail closed with `RequestError('Invalid JSON-RPC response body')` instead of returning implicit `undefined` results.
  - JSON-RPC payloads that parse but are not object envelopes (or omit both `result` and `error`) now fail closed with `RequestError('Invalid JSON-RPC response envelope')`.
  - Outbound request envelopes now fail fast when `method` is missing/blank (`RequestError('Invalid JSON-RPC request method', code: -32600)`) and normalize method names via trim before dispatch.
  - Outbound request envelopes now also validate JSON-RPC `id` shape; non-spec IDs (e.g., booleans/objects) fail fast with `RequestError('Invalid JSON-RPC request id', code: -32600)` before network dispatch.
  - JSON-RPC responses must include a spec-valid `id` (string/number/null) that matches the request id; missing/mismatched/non-spec ids now fail closed with `RequestError('Mismatched JSON-RPC response id')`.
  - JSON-RPC responses must explicitly declare `jsonrpc: '2.0'`; missing/legacy version envelopes now fail closed with `RequestError('Invalid JSON-RPC version')`.
  - JSON-RPC `error` envelopes are now validated and normalized: non-object `error` payloads fail as invalid envelopes, and missing/invalid `message`/`code` fields (including non-integer numeric codes) default to stable `RequestError('RPC request failed', code: -32000)` metadata.
  - Cache writes are now restricted to successful JSON-RPC `result` envelopes, preventing transient upstream error envelopes from being cached and replayed as stale failures.
  - 403 fallback retries now fail closed when no alternate provider exists, preventing unbounded recursive retry loops.
  - 403 failures are no longer cached as synthetic empty responses, preventing follow-up calls from returning silent `undefined` results from cache.
  - Caller request envelopes are cloned before normalization so `jsonrpc`/fallback-id assignment does not mutate upstream objects.
  - `send`/`sendAsync` now normalize missing request IDs to the same fallback (`56`) used by `request`, preventing callback responses with `id: undefined`.

## Notes
- This folder currently exposes one monolithic provider implementation.
- Behavior relies on browser/worker globals (`fetch`, `caches`, `Request`, `Response`), so runtime assumptions should be validated explicitly in tests before reuse in Node-only environments.
