// arken/packages/node/trpc/socketLink.ts

import { TRPCClientError, type TRPCLink, createTRPCProxyClient } from '@trpc/client';
import { observable } from '@trpc/server/observable';
import { serialize, deserialize } from '../util/rpc';
import { generateShortId } from '../util/db';

// ======================
// Types
// ======================

export type BackendConfig = {
  name: string;
  url: string;
};

export type SocketClient = {
  // Keep this loose so we can stuff whatever we want in tests and runtime
  ioCallbacks: Record<string, any>;
  socket: {
    emit: (...args: any[]) => void;
    on?: (event: string, cb: (payload: any) => void) => void;
    [key: string]: any;
  };
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

export interface AttachTrpcResponseHandlerOptions {
  client: SocketClient;
  backendName: string;
  logging?: boolean;
  onServerPush?: (msg: { method: string; params: any }) => void;
}

export interface CreateSocketProxyClientOptions<TRouter = any> {
  client: SocketClient;
  logPrefix?: string;
  roles?: string[];
  requestTimeoutMs?: number;
}

// ======================
// createSocketLink
// ======================

/**
 * Socket.IO-based TRPC link, similar to your React combinedLink, but extracted.
 */
export function createSocketLink(options: CreateSocketLinkOptions): TRPCLink<any> {
  const { backends, clients, notifyTRPCError, waitUntil, requestTimeoutMs = 15_000 } = options;

  const backendNames = new Set(backends.map((b) => b.name));

  return () =>
    ({ op }) =>
      observable((observer) => {
        const [routerName] = op.path.split('.');

        if (!routerName || !backendNames.has(routerName)) {
          const err = new TRPCClientError<any>(`Unknown router for ${op.path}`);
          notifyTRPCError(err);
          observer.error(err);
          observer.complete();
          return;
        }

        const client = clients[routerName];
        const uuid = generateShortId();

        const run = async () => {
          // 1) Wait for socket connection
          try {
            await waitUntil(() => !!client?.socket?.emit, 60_000);
          } catch {
            const err = new TRPCClientError<any>('Socket connection timeout');
            notifyTRPCError(err);
            observer.error(err);
            observer.complete();
            return;
          }

          const { input } = op;

          // 2) Emit the request
          client.socket.emit('trpc', {
            id: uuid,
            method: op.path.replace(`${routerName}.`, ''),
            type: op.type,
            params: serialize(input),
          });

          // 3) Timeout handling
          const timeout = setTimeout(() => {
            const err = new TRPCClientError<any>('Request timeout');
            if (client.ioCallbacks[uuid]) delete client.ioCallbacks[uuid];
            notifyTRPCError(err);
            observer.error(err);
          }, requestTimeoutMs);

          // 4) Register callbacks for response
          client.ioCallbacks[uuid] = {
            timeout,
            resolve: (response: any) => {
              clearTimeout(timeout);

              if (response.error) {
                // Build a TRPCClientError from the raw error
                const baseErr =
                  response.error instanceof TRPCClientError
                    ? response.error
                    : new TRPCClientError<any>(
                        typeof response.error === 'string' ? response.error : JSON.stringify(response.error)
                      );

                // 🔹 Attach the socket id (request id) onto the error's data
                const errAny = baseErr as any;
                errAny.data = {
                  ...(errAny.data || {}),
                  reqId: response.id ?? uuid,
                };

                notifyTRPCError(baseErr);
                observer.error(baseErr as any);
              } else {
                const result: any = deserialize(response.result);
                observer.next({
                  // shape that tRPC downstream expects
                  result,
                } as any);
                observer.complete();
              }

              delete client.ioCallbacks[uuid];
            },

            reject: (error: any) => {
              clearTimeout(timeout);

              // Optional: also wrap and tag internal errors with reqId=uuid
              let err: any = error;
              if (!(error instanceof TRPCClientError)) {
                err =
                  typeof error === 'string'
                    ? new TRPCClientError<any>(error)
                    : new TRPCClientError<any>(JSON.stringify(error));
              }

              err.data = {
                ...(err.data || {}),
                reqId: uuid,
              };

              notifyTRPCError(err);
              observer.error(err as any);
              delete client.ioCallbacks[uuid];
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

// ======================
// attachTrpcResponseHandler
// ======================

/**
 * Attach a shared "trpcResponse" handler for a given client.
 * This mirrors your React-side `.on('trpcResponse', ...)` logic.
 */
export function attachTrpcResponseHandler(opts: AttachTrpcResponseHandlerOptions) {
  const { client, backendName, logging = false, onServerPush } = opts;

  if (!client.socket.on) return;

  client.socket.on('trpcResponse', (res: any) => {
    try {
      if (logging) console.info(`[${backendName} Socket] Event:`, res);

      const { id } = res;

      if (id) {
        const cb = client.ioCallbacks[id];
        if (cb) {
          if (logging) console.info(`[${backendName} Socket] Callback exists for ID:`, id, res);
          clearTimeout(cb.timeout);
          try {
            cb.resolve(res);
          } catch (e) {
            if (logging) console.info(`[${backendName} Socket] Callback error:`, e);
            cb.reject(e);
          }
          delete client.ioCallbacks[id];
        } else if (logging) {
          console.warn(`[${backendName} Socket] No callback found for ID: ${id}`);
        }
      } else {
        // Server push case (no id)
        if (onServerPush) {
          const { method, params } = res;
          onServerPush({ method, params });
        }
      }
    } catch (e) {
      console.error(`[${backendName} Socket] Error in handler:`, e);
    }
  });
}

// ======================
// createSocketProxyClient
// ======================

/**
 * Small helper to build a tRPC proxy over a single SocketClient, reusing the same
 * callback / timeout / serialization pattern. Useful for "peer" connections.
 *
 * We return `any` here to dodge the super strict `InferrableClientTypes` generics
 * from @trpc/client; you can cast at the call site if you want stronger typing.
 */
export function createSocketProxyClient<TRouter = any>(opts: CreateSocketProxyClientOptions<TRouter>): any {
  const { client, logPrefix = 'SocketProxy', roles = [], requestTimeoutMs = 15_000 } = opts;

  const proxy = createTRPCProxyClient<any>({
    links: [
      () =>
        ({ op }) =>
          observable((observer) => {
            const { input } = op;

            // Attach client + roles to context if someone uses it
            (op as any).context = (op as any).context ?? {};
            (op as any).context.client = client;
            (op as any).context.client.roles = roles;

            if (!client?.socket?.emit) {
              observer.error(
                new TRPCClientError<any>(`${logPrefix}: Emit Direct failed, no client or bad socket`) as any
              );
              observer.complete();
              return;
            }

            const uuid = generateShortId();

            const request = { id: uuid, method: op.path, type: op.type, params: serialize(input) };
            client.ioCallbacks[uuid] = client.ioCallbacks[uuid] || {};
            client.ioCallbacks[uuid].request = request;

            client.socket.emit('trpc', request);

            const timeout = setTimeout(() => {
              delete client.ioCallbacks[uuid];
              observer.error(new TRPCClientError<any>(`${logPrefix}: Request timeout`) as any);
            }, requestTimeoutMs);

            client.ioCallbacks[uuid] = {
              ...(client.ioCallbacks[uuid] || {}),
              timeout,
              resolve: (pack: any) => {
                clearTimeout(timeout);

                if (pack.error) {
                  // Build error and tag with reqId (socket/trpc id)
                  const baseErr =
                    pack.error instanceof TRPCClientError
                      ? (pack.error as any)
                      : (new TRPCClientError<any>(
                          typeof pack.error === 'string' ? pack.error : JSON.stringify(pack.error)
                        ) as any);

                  (baseErr as any).data = {
                    ...((baseErr as any).data || {}),
                    reqId: pack.id ?? uuid,
                  };

                  observer.error(baseErr);
                } else {
                  const result: any = deserialize(pack.result);
                  // expect `{ status, data }` from server
                  if (result?.status !== 1) {
                    const statusErr = new TRPCClientError<any>(
                      `${logPrefix}: status error ${JSON.stringify(result)}`
                    ) as any;
                    statusErr.data = {
                      ...(statusErr.data || {}),
                      reqId: pack.id ?? uuid,
                    };
                    observer.error(statusErr);
                  } else {
                    // 👈 IMPORTANT: wrap in { result: { data } } so query() resolves to `data`
                    observer.next({
                      result: {
                        data: result.data ?? result,
                      },
                    } as any);
                    observer.complete();
                  }
                }

                delete client.ioCallbacks[uuid];
              },
              reject: (error: any) => {
                clearTimeout(timeout);

                let err: any = error;
                if (!(error instanceof TRPCClientError)) {
                  err =
                    typeof error === 'string'
                      ? new TRPCClientError<any>(error)
                      : new TRPCClientError<any>(JSON.stringify(error));
                }

                err.data = {
                  ...(err.data || {}),
                  reqId: uuid,
                };

                observer.error(err as any);
                delete client.ioCallbacks[uuid];
              },
            };
          }),
    ],
  });

  return proxy;
}
