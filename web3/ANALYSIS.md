# arken/packages/node/web3/ANALYSIS.md

## Folder
`arken/packages/node/web3`

## Purpose
- Hosts legacy-compatible Web3 transport/provider helpers used by higher-level node runtime flows.

## Files reviewed
- `httpProvider.ts`

## Key findings
- Provider fallback pool remains hardcoded to default list (`bsc-dataseed1.ninicoin.io`) when constructor URL is not supplied.
- Constructor now honors explicit `url` input, reducing hidden endpoint drift.
- Invalid constructor URL input now falls back to the first valid configured provider URL, preventing startup-time crashes from malformed endpoint strings.
- Request shaping now preserves caller-supplied `request.id`; fallback `56` is only applied when the ID is missing.
- `send`/`sendAsync` callback responses now use normalized request IDs, so missing caller IDs no longer leak through as `undefined`.
- Request normalization now runs on a shallow cloned envelope, avoiding side-effect mutation of caller-owned request objects.
- Cache API usage is now runtime-guarded: request flow falls back to network-only mode when `caches`/`Request`/`Response` globals are unavailable.
- `PROVIDER_TIMEOUT` is now enforced through a timeout race guard around network fetch calls (default 5000ms).
- Timeout path now triggers `AbortController.abort()` (when available) before rejecting, limiting lingering in-flight network activity after timeout.
- Added timeout-state normalization so abort-driven fetch rejections raised after cancellation still surface as deterministic timeout `RequestError` metadata.
- Non-timeout fetch/network exceptions are now wrapped to `RequestError` (`code: -32000`) so consumers can rely on a consistent failure shape.
- Response body read failures are now normalized to `RequestError` (`code: -32000`) instead of surfacing raw stream-level exceptions.
- Invalid/non-JSON response bodies now fail closed as `RequestError('Invalid JSON-RPC response body')`, preventing silent `undefined` result acceptance.
- Parsed JSON-RPC payloads now require a valid object envelope with either `result` or `error`; primitive payloads and missing-field envelopes fail closed as `RequestError('Invalid JSON-RPC response envelope')`.
- JSON-RPC `error` envelopes are now validated/normalized: non-object `error` payloads fail as invalid envelopes, and malformed/missing `message` or `code` fields now fall back to stable defaults (`message: 'RPC request failed'`, `code: -32000`).
- Cache persistence now occurs only for successful `result` envelopes, which avoids pinning transient JSON-RPC errors into cache and improves retry/recovery behavior.
- `BROWSER_CACHE_TTL` remains defined but not currently enforced in request flow.

## Protocol/Test relevance
- Transport/cache behavior and request-id handling impact RPC correctness and debugging.
- Missing deterministic timeout/cancellation paths increase production reliability risk.

## Risks / gaps
- Hardcoded provider endpoint and random re-selection logic reduce explicit environment control.
- Cache key/path strategy and fallback id defaults may mask backend issues or create debugging ambiguity.
- 403 failover path now avoids infinite recursion when no alternate providers are configured and no longer writes synthetic empty cache entries that could mask repeated failures as silent `undefined` results.
- Fallback behavior still depends on static provider-list configuration.

## Follow-ups
- Expand tests for 403 failover recursion behavior under both cache-enabled and cache-disabled runtimes.
- Consider parameterizing provider list and honoring constructor URL/env configuration.
- Clarify whether this helper is browser-only or should be server-safe; document/enforce accordingly.
