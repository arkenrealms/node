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
- Constructor URL parsing now normalizes malformed endpoint inputs into deterministic request metadata (`RequestError` `-32602`) rather than surfacing runtime-specific `URL` parser exceptions.
- Constructor URL validation now also enforces http(s)-only protocols (rejects `ws:`/other schemes), which is warranted because downstream transport uses Fetch HTTP semantics and non-http schemes would fail later with less actionable errors.
- Request shaping now preserves caller-supplied `request.id` (including explicit `null`); fallback `56` is only applied when the `id` field is absent.
- Cache API usage is now runtime-guarded: request flow falls back to network-only mode when `caches`/`Request`/`Response` globals are unavailable.
- Browser cache usage is now additionally gated by `BROWSER_CACHE_TTL > 0`; this aligns behavior with current default (`0`) so runtime cache is not populated unless explicitly enabled.
- Cache hits are now shape-validated before use; malformed cache entries are discarded and refetched from network.
- `PROVIDER_TIMEOUT` is now enforced through a timeout race guard around network fetch calls (default 5000ms).
- `BROWSER_CACHE_TTL` remains defined but not currently enforced in request flow.

## Protocol/Test relevance
- Transport/cache behavior and request-id handling impact RPC correctness and debugging.
- Timeout behavior now includes active abort signaling for in-flight fetch requests when runtime supports `AbortController`, reducing dangling network work under outage/hang scenarios.
- Abort-triggered fetch failures (`AbortError`) are now mapped back to the same timeout `RequestError` shape, avoiding runtime-specific error-envelope drift.
- Request payloads now validate JSON-RPC envelope shape (`object` and non-array) before mutation, returning deterministic `-32600` invalid-request errors for malformed caller input.
- Request payloads now also validate the JSON-RPC `method` field (`non-empty string`) before network submission, preventing malformed RPC calls from leaking to providers.
- Method names are now normalized with `trim()` before submission so callers with padded method strings still produce canonical RPC method keys.
- Request-default injection now uses a cloned envelope, preventing side-effect mutation of caller-provided JSON-RPC request objects.
- Parsed response bodies are now envelope-normalized (`object` only) so primitive JSON payloads (for example `null`) do not trigger `'in'` operator runtime faults during error/result checks.
- RPC error envelopes now normalize malformed payload metadata (blank/non-string `message`, non-numeric `code`) into deterministic `RequestError` defaults so upstream handlers do not receive undefined/stringly-typed error codes.
- Network fetch results now validate a minimal Fetch-like response shape before status parsing (`ok/status/statusText/text`) and require `status` to be finite, preventing runtime crashes or malformed `NaN` status propagation when custom fetch polyfills return invalid response objects.
- Non-RequestError fetch rejections are now normalized into deterministic provider `RequestError` envelopes (`-32000`) so caller behavior is stable even when runtimes throw primitives/non-standard errors.
- Response body stream-read failures (`response.text()` throws/rejects) are now normalized to `Invalid provider response` so transport callers receive a deterministic provider-error envelope instead of runtime-specific stream exceptions.

## Risks / gaps
- Hardcoded provider endpoint and random re-selection logic reduce explicit environment control.
- Cache key/path strategy and fallback id defaults may mask backend issues or create debugging ambiguity.
- 403 failover path now avoids infinite recursion when no alternate providers are configured, but still depends on static provider-list configuration.

## Follow-ups
- Expand tests for 403 failover recursion behavior under both cache-enabled and cache-disabled runtimes.
- Consider parameterizing provider list and honoring constructor URL/env configuration.
- Clarify whether this helper is browser-only or should be server-safe; document/enforce accordingly.
