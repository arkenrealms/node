// src/test/socketServer.spec.ts

import { initTRPC } from '@trpc/server';
import { createSocketTrpcHandler } from '../trpc/socketServer';
import { serialize, deserialize } from '../util/rpc';

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

  const createCallerFactory = t.createCallerFactory;

  function makeFakeSocket() {
    return {
      emitted: [] as any[],
      emit(event: string, payload: any) {
        this.emitted.push({ event, payload });
      },
    };
  }

  it('invokes router method and emits trpcResponse with status 1 on success', async () => {
    const handler = createSocketTrpcHandler({
      router,
      createCallerFactory,
      log: () => {},
    });

    const socket = makeFakeSocket();
    const ctx = { userId: 'user-123' };

    const message = {
      id: 'req-1',
      method: 'core.ping',
      params: serialize({ message: 'hello' }),
    };

    await handler(socket, ctx, message);

    expect(socket.emitted.length).toBe(1);
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

    const handler = createSocketTrpcHandler({
      router: badRouter,
      createCallerFactory,
      log: () => {},
    });

    const socket = makeFakeSocket();
    const ctx = {};

    const message = {
      id: 'req-2',
      method: 'core.explode',
      params: undefined,
    };

    await handler(socket, ctx, message);

    expect(socket.emitted.length).toBe(1);
    const { event, payload } = socket.emitted[0];

    expect(event).toBe('trpcResponse');
    expect(payload.id).toBe('req-2');

    const result: any = deserialize(payload.result);
    expect(result.status).toBe(0);
    expect(typeof payload.error).toBe('string');
    expect(payload.error).toContain('boom');
  });
});
