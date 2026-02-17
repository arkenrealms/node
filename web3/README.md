# @arken/node web3

Legacy-compatible Web3 transport helpers.

## Files
- `httpProvider.ts`: custom JSON-RPC provider wrapper with fetch + Cache API usage.

## Notes
- This folder currently exposes one monolithic provider implementation.
- Behavior relies on browser/worker globals (`fetch`, `caches`, `Request`, `Response`), so runtime assumptions should be validated explicitly in tests before reuse in Node-only environments.
