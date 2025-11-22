// node/trpc/socketLink.ts

import { TRPCClientError, type TRPCLink } from '@trpc/client';
import { observable } from '@trpc/server/observable';
import { serialize, deserialize } from '../util/rpc';
import { generateShortId } from '../util/db';

export type BackendConfig = {
  name: string;
  url: string;
};

export type SocketClient = {
  ioCallbacks: Record<
    string,
    {
      timeout: any;
      resolve: (response: any) => void;
      reject: (error: any) => void;
    }
  >;
  socket: any; // keep this loose so both tests & real ioClient work
};

export type WaitUntilFn = (predicate: () => boolean, timeoutMs: number, intervalMs?: number) => Promise<void>;
export type NotifyTRPCErrorFn = (err: any) => void;

export interface CreateSocketLinkOptions {
  backends: BackendConfig[];
  clients: Record<string, SocketClient>;
  notifyTRPCError: NotifyTRPCErrorFn;
  waitUntil: WaitUntilFn;
  requestTimeoutMs?: number;
}

/**
 * Socket.IO-based tRPC link, extracted from the React client logic.
 */
export function createSocketLink(options: CreateSocketLinkOptions): TRPCLink<any> {
  const { backends, clients, notifyTRPCError, waitUntil, requestTimeoutMs = 15_000 } = options;

  const backendNames = new Set(backends.map((b) => b.name));

  return () =>
    ({ op }) =>
      observable((observer) => {
        const [routerName] = op.path.split('.');

        if (!routerName || !backendNames.has(routerName)) {
          const err = new TRPCClientError<any>(`Unknown router: ${routerName}`);
          notifyTRPCError(err);
          observer.error(err);
          observer.complete();
          return;
        }

        const client = clients[routerName];
        const uuid = generateShortId();

        const run = async () => {
          try {
            // Wait up to 60s for socket.emit to exist
            await waitUntil(() => !!client?.socket?.emit, 60_000);
          } catch {
            const err = new TRPCClientError<any>('Socket connection timeout');
            notifyTRPCError(err);
            observer.error(err);
            observer.complete();
            return;
          }

          const { input } = op;

          client.socket.emit('trpc', {
            id: uuid,
            method: op.path.replace(`${routerName}.`, ''),
            type: op.type,
            params: serialize(input),
          });

          const timeout = setTimeout(() => {
            const err = new TRPCClientError<any>('Request timeout');
            if (client.ioCallbacks[uuid]) delete client.ioCallbacks[uuid];
            notifyTRPCError(err);
            observer.error(err);
          }, requestTimeoutMs);

          client.ioCallbacks[uuid] = {
            timeout,
            resolve: (response: any) => {
              clearTimeout(timeout);
              if (response.error) {
                const err =
                  response.error instanceof TRPCClientError
                    ? response.error
                    : new TRPCClientError<any>(
                        typeof response.error === 'string' ? response.error : JSON.stringify(response.error)
                      );
                notifyTRPCError(err);
                observer.error(err);
              } else {
                const result = deserialize(response.result);
                observer.next({ result } as any);
                observer.complete();
              }
              // cleanup is handled by whoever owns ioCallbacks (frontend)
            },
            reject: (error: any) => {
              clearTimeout(timeout);
              notifyTRPCError(error);
              observer.error(error);
              // cleanup also handled by owner
            },
          };
        };

        run();

        // teardown
        return () => {
          if (client.ioCallbacks[uuid]) {
            clearTimeout(client.ioCallbacks[uuid].timeout);
            delete client.ioCallbacks[uuid];
          }
        };
      });
}
