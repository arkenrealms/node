# arken/packages/node/util

Compatibility re-exports for utility-focused subpath imports.

## Files
- `api.ts`: re-exports `../api` helpers.
- `rpc.ts`: re-exports `../rpc` helpers.

## Why this exists
Keeps `@arken/node/util` focused on utility modules without re-exporting from package root (which risked circular export coupling).
