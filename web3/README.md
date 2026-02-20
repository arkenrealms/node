# @arken/node web3

Legacy-compatible Web3 transport helpers.

## Files
- `httpProvider.ts`: custom JSON-RPC provider wrapper with fetch + Cache API usage.
  - Constructor now honors explicit URL input before falling back to default provider pool.
  - Request IDs are preserved when callers provide one (including explicit `null`); fallback ID `56` is only used when the `id` field is absent.
  - Cache API usage is now runtime-guarded; provider falls back to network-only request flow when `caches`/`Request`/`Response` globals are unavailable.
  - Browser cache writes/reads are now also gated by `BROWSER_CACHE_TTL > 0`; with the default `0`, requests avoid writing stale entries to runtime cache.
  - Network POSTs are now wrapped with a deterministic timeout gate (`PROVIDER_TIMEOUT` default 5000ms) to avoid indefinite hangs.
  - Timeout now actively aborts in-flight fetch requests (when `AbortController` is available) to reduce dangling connection/resource usage.
  - Abort-driven fetch rejections (`AbortError`) are normalized into the same timeout `RequestError` envelope for deterministic caller handling.
  - 403 fallback retries now fail closed when no alternate provider exists, preventing unbounded recursive retry loops.
  - Malformed cache hits are now ignored and retried against live network fetch, preventing stale/invalid cache entries from causing hard request failure.
  - Invalid non-object JSON-RPC request payloads are rejected early with `-32600` (`Invalid JSON-RPC request payload`) instead of throwing ambiguous runtime type errors.
  - Invalid or missing JSON-RPC method names are rejected early with deterministic `-32600` (`Invalid JSON-RPC method`) to avoid emitting malformed upstream calls.
  - Whitespace-padded JSON-RPC method names are now normalized (`trim`) before network submission, preventing avoidable upstream method mismatch errors.
  - Provider request normalization no longer mutates caller-owned request objects while still applying deterministic JSON-RPC defaults (`jsonrpc`, fallback `id=56`).
  - Parsed non-object JSON response payloads (e.g. `null`) are normalized to an empty envelope, preventing `TypeError` during error/result field checks.
  - Malformed RPC error envelopes now normalize to deterministic `RequestError` metadata (`message` fallback + numeric `code` fallback), avoiding undefined/string code leaks to callers.
  - Malformed network response objects that do not expose a valid Fetch-like shape (`ok/status/statusText/text`) are now rejected early with a deterministic `Invalid provider response` error instead of crashing on missing methods.

## Notes
- This folder currently exposes one monolithic provider implementation.
- Behavior relies on browser/worker globals (`fetch`, `caches`, `Request`, `Response`), so runtime assumptions should be validated explicitly in tests before reuse in Node-only environments.
