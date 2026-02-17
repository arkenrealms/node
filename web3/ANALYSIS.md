# arken/packages/node/web3/ANALYSIS.md

## Folder
`arken/packages/node/web3`

## Purpose
- Hosts legacy-compatible Web3 transport/provider helpers used by higher-level node runtime flows.

## Files reviewed
- `httpProvider.ts`

## Key findings
- `Provider` ignores constructor `url` argument and instead picks from hardcoded `PROVIDERS` list (`bsc-dataseed1.ninicoin.io`).
- Request shaping is non-standard for general JSON-RPC clients (`request.id` forced to `56`), which may complicate correlation/observability.
- Runtime assumes browser-like cache globals (`caches`, `Request`, `Response`) despite package often being used in server contexts.
- Several tunables (`BROWSER_CACHE_TTL`, `PROVIDER_TIMEOUT`) are currently not enforced in request flow.

## Protocol/Test relevance
- Transport/cache behavior and request-id handling impact RPC correctness and debugging.
- Missing deterministic timeout/cancellation paths increase production reliability risk.

## Risks / gaps
- Hardcoded provider endpoint and random re-selection logic reduce explicit environment control.
- Cache key/path strategy and forced id values may mask backend issues or create debugging ambiguity.
- No local folder tests currently validate these assumptions.

## Follow-ups
- Add focused tests around request-id behavior, 403 failover path, and non-browser runtime compatibility.
- Consider parameterizing provider list and honoring constructor URL/env configuration.
- Clarify whether this helper is browser-only or should be server-safe; document/enforce accordingly.
