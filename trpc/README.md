# trpc/

Socket.IO-based tRPC transport layer for the Arken protocol. Provides both client and server sides of a custom tRPC link that runs over Socket.IO instead of HTTP.

## Files

### `socketLink.ts`
Client-side tRPC link and utilities for Socket.IO transport.

- **`createSocketLink(options)`** — tRPC link that routes operations to named backends via Socket.IO. Maps the first segment of the procedure path (e.g. `seer.core.getRealms` → backend `seer`) to the correct socket client.
- **`attachTrpcResponseHandler(options)`** — Attaches event listeners to a socket client that resolve pending request callbacks when `trpcResponse` events arrive. Also supports server-push messages via `onServerPush`.
- **`createSocketProxyClient(options)`** — Creates a tRPC proxy client over a single `SocketClient`. Used for peer-to-peer or direct socket connections.
- **`bindSocketClientEmit(options)`** — Server-side convenience that combines `attachTrpcResponseHandler` + `createSocketProxyClient` in one call. Use when setting up a bidirectional socket connection (e.g. shard ↔ realm).

### `socketServer.ts`
Server-side handler for processing incoming tRPC requests over Socket.IO.

- **`createSocketTrpcHandler(options)`** — Creates an async handler function that deserializes incoming `trpc` event messages, invokes the matching tRPC procedure via `createCallerFactory`, and emits `trpcResponse` with serialized results.
- **`attachSocketTrpcListener(options)`** — Convenience helper that wires `socket.on('trpc', ...)` to the handler. Returns a teardown function.

## Protocol Flow

```
Client                          Server
  |                               |
  |-- socket.emit('trpc', {      |
  |     id, method, type, params  |
  |   }) -----------------------> |
  |                               |-- createCaller(ctx)
  |                               |-- caller[method](deserialize(params))
  |   <-------------------------- |
  |   socket.emit('trpcResponse', |
  |     { id, result, error? })   |
```

## Serialization

All params and results go through `serialize`/`deserialize` from `../rpc.ts` (JSON-based with special handling for ObjectIds, Dates, etc). Binary payloads are decoded via `decodePayload` from `../binary.ts`.
