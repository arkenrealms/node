// arken/packages/node/test/socketServer.spec.ts
import { initTRPC } from '@trpc/server';
import { createSocketTrpcHandler, attachSocketTrpcListener } from '../trpc/socketServer';
import { serialize, deserialize } from '../rpc';

describe('createSocketTrpcHandler (Socket.IO tRPC server helper)', () => {
  const t = initTRPC.context<{ userId?: string }>().create();

  const router = t.router({
    core: t.router({
      ping: t.procedure
        .input((val: unknown) => {
          if (typeof val === 'object' && val && 'message' in (val as any)) return val as { message: string };
          return { message: 'hi' };
        })
        .query(({ input, ctx }) => {
          return { pong: input.message, from: ctx.userId ?? 'anon' };
        }),
    }),
  });

  function makeFakeSocket() {
    return {
      emitted: [] as any[],
      handlers: {} as Record<string, any>,
      emit(event: string, payload: any) {
        this.emitted.push({ event, payload });
      },
      on(event: string, fn: any) {
        this.handlers[event] = fn;
      },
      off(event: string) {
        delete this.handlers[event];
      },
    };
  }

  it('invokes router method and emits trpcResponse with status 1 on success', async () => {
    const handler = createSocketTrpcHandler({ router, createCallerFactory: t.createCallerFactory, log: () => {} });
    const socket = makeFakeSocket();

    await handler(socket, { userId: 'user-123' }, { id: 'req-1', method: 'core.ping', params: serialize({ message: 'hello' }) });

    const { event, payload } = socket.emitted[0];
    expect(event).toBe('trpcResponse');
    expect(payload.id).toBe('req-1');

    const result: any = deserialize(payload.result);
    expect(result.status).toBe(1);
    expect(result.data).toEqual({ pong: 'hello', from: 'user-123' });
  });

  it('emits status 0 and error when procedure throws', async () => {
    const badRouter = t.router({
      core: t.router({
        explode: t.procedure.query(() => {
          throw new Error('boom');
        }),
      }),
    });

    const handler = createSocketTrpcHandler({ router: badRouter, createCallerFactory: t.createCallerFactory, log: () => {} });
    const socket = makeFakeSocket();

    await handler(socket, {}, { id: 'req-2', method: 'core.explode', params: undefined });

    const { payload } = socket.emitted[0];
    expect(payload.id).toBe('req-2');
    expect(deserialize(payload.result).status).toBe(0);
    expect(payload.error).toContain('boom');
  });

  it('emits a clear error for malformed payloads', async () => {
    const handler = createSocketTrpcHandler({ router, createCallerFactory: t.createCallerFactory, log: () => {} });
    const socket = makeFakeSocket();

    await handler(socket, {}, null as any);

    const { payload } = socket.emitted[0];
    expect(payload.error).toContain('Malformed socket tRPC payload');
    expect(deserialize(payload.result).status).toBe(0);
  });

  it('emits a clear error when binary payload decoding fails', async () => {
    const handler = createSocketTrpcHandler({ router, createCallerFactory: t.createCallerFactory, log: () => {} });
    const socket = makeFakeSocket();

    await handler(socket, {}, 'not-binary-json');

    const { payload } = socket.emitted[0];
    expect(payload.error).toContain('Malformed socket tRPC payload');
    expect(deserialize(payload.result).status).toBe(0);
  });

  it('emits a clear error when payload method is non-string', async () => {
    const handler = createSocketTrpcHandler({ router, createCallerFactory: t.createCallerFactory, log: () => {} });
    const socket = makeFakeSocket();

    await handler(socket, {}, { id: 'req-bad-method', method: 123 as any, params: serialize({}) });

    const { payload } = socket.emitted[0];
    expect(payload.id).toBe('req-bad-method');
    expect(payload.error).toContain('Missing or invalid tRPC method');
    expect(deserialize(payload.result).status).toBe(0);
  });

  it('emits a clear error for missing methods', async () => {
    const handler = createSocketTrpcHandler({ router, createCallerFactory: t.createCallerFactory, log: () => {} });
    const socket = makeFakeSocket();

    await handler(socket, {}, { id: 'req-3', params: serialize({}) });

    const { payload } = socket.emitted[0];
    expect(payload.id).toBe('req-3');
    expect(payload.error).toContain('Missing or invalid tRPC method');
    expect(deserialize(payload.result).status).toBe(0);
  });

  it('emits a clear error for blank-string methods', async () => {
    const handler = createSocketTrpcHandler({ router, createCallerFactory: t.createCallerFactory, log: () => {} });
    const socket = makeFakeSocket();

    await handler(socket, {}, { id: 'req-blank-method', method: '   ', params: serialize({}) });

    const { payload } = socket.emitted[0];
    expect(payload.id).toBe('req-blank-method');
    expect(payload.error).toContain('Missing or invalid tRPC method');
    expect(deserialize(payload.result).status).toBe(0);
  });

  it('accepts valid methods with surrounding whitespace', async () => {
    const handler = createSocketTrpcHandler({ router, createCallerFactory: t.createCallerFactory, log: () => {} });
    const socket = makeFakeSocket();

    await handler(socket, { userId: 'trim-user' }, { id: 'req-trim-method', method: '  core.ping  ', params: serialize({ message: 'trim' }) });

    const { payload } = socket.emitted[0];
    expect(payload.id).toBe('req-trim-method');
    const result: any = deserialize(payload.result);
    expect(result.status).toBe(1);
    expect(result.data).toEqual({ pong: 'trim', from: 'trim-user' });
  });

  it('emits status 0 when params payload cannot be deserialized', async () => {
    const handler = createSocketTrpcHandler({ router, createCallerFactory: t.createCallerFactory, log: () => {} });
    const socket = makeFakeSocket();

    await handler(socket, {}, { id: 'req-bad-params', method: 'core.ping', params: '{not-json' });

    const { payload } = socket.emitted[0];
    expect(payload.id).toBe('req-bad-params');
    expect(deserialize(payload.result).status).toBe(0);
    expect(payload.error).toContain('Server error in socket TRPC handler');
  });

  it('rejects prototype-chain method traversal attempts', async () => {
    const handler = createSocketTrpcHandler({ router, createCallerFactory: t.createCallerFactory, log: () => {} });
    const socket = makeFakeSocket();

    await handler(socket, {}, { id: 'req-proto-method', method: '__proto__.toString', params: serialize({}) });

    const { payload } = socket.emitted[0];
    expect(payload.id).toBe('req-proto-method');
    expect(deserialize(payload.result).status).toBe(0);
    expect(payload.error).toContain('TRPC handler does not exist for method: __proto__.toString');
  });

  it('attachSocketTrpcListener binds and unbinds listeners', async () => {
    const socket = makeFakeSocket();
    const fn = jest.fn(async () => undefined);

    const detach = attachSocketTrpcListener({ socket, ctx: {}, handleSocketTrpc: fn, eventName: 'trpc' });
    expect(typeof socket.handlers.trpc).toBe('function');

    await socket.handlers.trpc({ id: 'req-4' });
    expect(fn).toHaveBeenCalledTimes(1);

    detach();
    expect(socket.handlers.trpc).toBeUndefined();
  });

  it('attachSocketTrpcListener is safe with sockets missing on/off hooks', () => {
    const fn = jest.fn(async () => undefined);
    const socketWithoutListeners = {
      emit() {
        return undefined;
      },
    };

    const detach = attachSocketTrpcListener({ socket: socketWithoutListeners, ctx: {}, handleSocketTrpc: fn });
    expect(() => detach()).not.toThrow();
    expect(fn).toHaveBeenCalledTimes(0);
  });
});
