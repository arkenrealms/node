// arken/packages/node/trpc/socketServer.ts

import type { AnyRouter } from '@trpc/server';
import { serialize, deserialize } from '../rpc';
import { decodePayload } from '../binary';

export type CreateCallerFactory<TRouter extends AnyRouter = AnyRouter> = (router: TRouter) => (ctx: any) => any;

export interface SocketTrpcHandlerOptions<TRouter extends AnyRouter = AnyRouter> {
  router: TRouter;
  createCallerFactory: CreateCallerFactory<TRouter>;
  log?: (...args: any[]) => void;
}

function resolveTarget(caller: any, method: string) {
  return method.split('.').reduce<any>((acc, key) => (acc == null ? undefined : acc[key]), caller);
}

export function createSocketTrpcHandler<TRouter extends AnyRouter = AnyRouter>({
  router,
  createCallerFactory,
  log = console.log,
}: SocketTrpcHandlerOptions<TRouter>) {
  const createCaller = createCallerFactory(router);

  return async function handleSocketTrpc(socket: any, ctx: any, rawMessage: any) {
    const message = typeof rawMessage === 'string' ? decodePayload(rawMessage) : rawMessage;

    if (!message || typeof message !== 'object') {
      socket.emit('trpcResponse', {
        id: undefined,
        result: serialize({ status: 0 }),
        error: 'Malformed socket tRPC payload',
      });
      return;
    }

    const { id, method, params } = message as { id?: string; method?: string; params?: any };

    if (!method || typeof method !== 'string') {
      socket.emit('trpcResponse', {
        id,
        result: serialize({ status: 0 }),
        error: 'Missing or invalid tRPC method',
        meta: { message },
      });
      return;
    }

    try {
      const caller = createCaller(ctx);
      const target = resolveTarget(caller, method);

      if (typeof target !== 'function') {
        throw new Error(`TRPC handler does not exist for method: ${method}`);
      }

      const result = params != null ? await target(deserialize(params)) : await target();
      log('Socket tRPC response', method);

      socket.emit('trpcResponse', { id, result: serialize({ status: 1, data: result }) });
    } catch (error: any) {
      const stack = typeof error?.stack === 'string' ? error.stack : String(error);
      const errorMessage = stack.includes("reading '_def'")
        ? `TRPC handler does not exist: ${stack}`
        : `Server error in socket TRPC handler: ${stack}`;

      log(errorMessage, method, error);

      socket.emit('trpcResponse', {
        id,
        result: serialize({ status: 0 }),
        error: errorMessage || 'Unknown error occurred',
        meta: { message },
      });
    }
  };
}

export interface AttachSocketTrpcListenerOptions {
  socket: any;
  ctx: any;
  handleSocketTrpc: (socket: any, ctx: any, message: any) => Promise<void>;
  eventName?: string;
}

export function attachSocketTrpcListener(opts: AttachSocketTrpcListenerOptions) {
  const { socket, ctx, handleSocketTrpc, eventName = 'trpc' } = opts;

  const fn = async (message: any) => {
    await handleSocketTrpc(socket, ctx, message);
  };

  if (typeof socket?.on === 'function') socket.on(eventName, fn);

  return () => {
    if (typeof socket?.off === 'function') socket.off(eventName, fn);
  };
}
