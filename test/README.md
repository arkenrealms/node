# test/

Unit tests for `@arken/node`. Run with `npx jest --config jest.unit.config.js`.

## Files

- **`socketLink.spec.ts`** — Tests for `createSocketLink`, `attachTrpcResponseHandler`, and `createSocketProxyClient`. Covers routing, timeouts, error propagation, and server push handling.
- **`socketLink.extended.spec.ts`** — Extended tests for `attachTrpcResponseHandler` (custom `responseIdField`, `preferOnAny`, teardown) and `bindSocketClientEmit` (end-to-end proxy + response resolution).
- **`socketServer.spec.ts`** — Tests for `createSocketTrpcHandler`. Covers successful procedure invocation and error handling.
- **`socketServer.attachListener.spec.ts`** — Tests for `attachSocketTrpcListener`. Covers event registration, custom event names, handler invocation, teardown, and graceful handling of sockets without `on`/`off`.
