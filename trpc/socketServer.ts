// src/trpc/socketServer.ts

import type { AnyRouter } from '@trpc/server';
import { serialize, deserialize } from '../util/rpc';

export type CreateCallerFactory<TRouter extends AnyRouter = AnyRouter> = (router: TRouter) => (ctx: any) => any;

export interface SocketTrpcHandlerOptions<TRouter extends AnyRouter = AnyRouter> {
  router: TRouter;
  createCallerFactory: CreateCallerFactory<TRouter>;
  log?: (...args: any[]) => void;
}

/**
 * Creates a handler that processes "trpc" messages on a Socket.IO socket:
 *  - message: { id, method, params }
 *  - calls router method and emits "trpcResponse" with { id, result, error? }
 */
export function createSocketTrpcHandler<TRouter extends AnyRouter = AnyRouter>({
  router,
  createCallerFactory,
  log = console.log,
}: SocketTrpcHandlerOptions<TRouter>) {
  const createCaller = createCallerFactory(router);

  return async function handleSocketTrpc(socket: any, ctx: any, message: any) {
    const { id, method, params } = message;

    try {
      const caller = createCaller(ctx);

      log('Seer calling trpc route', method, params);

      // Support nested paths like "core.getRealms"
      // @ts-ignore
      const target = method.split('.').reduce<any>((acc, key) => acc[key], caller);

      const result = params ? await target(deserialize(params)) : await target();

      log('Seer sending trpc response', method, params, JSON.stringify(result));

      socket.emit('trpcResponse', { id, result: serialize({ status: 1, data: result }) });
    } catch (error: any) {
      log('Server error in socket TRPC handler', error);

      socket.emit('trpcResponse', {
        id,
        result: serialize({ status: 0 }),
        error: error?.stack + '' || 'Unknown error occurred',
      });
    }
  };
}
