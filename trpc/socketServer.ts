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
      if ((error + '').includes("reading '_def'")) {
        log('TRPC handler does not exist', method, error);
      } else {
        log('Server error in socket TRPC handler', method, error);
      }

      socket.emit('trpcResponse', {
        id,
        result: serialize({ status: 0 }),
        error: error?.stack + '' || 'Unknown error occurred',
      });
    }
  };
}

// ======================
// Optional wiring helper
// ======================

export interface AttachSocketTrpcListenerOptions {
  socket: any;
  ctx: any;
  handleSocketTrpc: (socket: any, ctx: any, message: any) => Promise<void>;
  eventName?: string; // default 'trpc'
}

/**
 * Convenience helper so you don’t repeat socket.on('trpc', ...) everywhere.
 */
export function attachSocketTrpcListener(opts: AttachSocketTrpcListenerOptions) {
  const { socket, ctx, handleSocketTrpc, eventName = 'trpc' } = opts;

  const fn = async (message: any) => {
    await handleSocketTrpc(socket, ctx, message);
  };

  if (typeof socket?.on === 'function') {
    socket.on(eventName, fn);
  }

  return () => {
    if (typeof socket?.off === 'function') {
      socket.off(eventName, fn);
    }
  };
}
