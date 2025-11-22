// test/socketLink.spec.ts

import { createSocketLink, type BackendConfig, type SocketClient, type WaitUntilFn } from '../trpc/socketLink';
import { observable } from '@trpc/server/observable';
import { TRPCClientError } from '@trpc/client';

type AnyError = TRPCClientError<any>;

describe('createSocketLink (Socket.IO tRPC link)', () => {
  let notifyTRPCErrorMock: jest.Mock;
  let waitUntilMock: WaitUntilFn;

  beforeEach(() => {
    jest.useFakeTimers();
    jest.resetAllMocks();
    notifyTRPCErrorMock = jest.fn();
    waitUntilMock = jest.fn().mockImplementation(async (predicate: () => boolean) => {
      if (!predicate()) throw new Error('not ready');
    });
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  function makeClient(): SocketClient & { emitMock: jest.Mock } {
    const emitMock = jest.fn();
    const client: any = {
      ioCallbacks: {},
      socket: {
        emit: emitMock,
      },
      emitMock,
    };
    return client;
  }

  function makeObservable(link: ReturnType<typeof createSocketLink>, op: any) {
    const runtime: any = {}; // tRPC runtime, unused
    const opLink = link(runtime);
    return opLink({
      op,
      next: () => observable(() => {}),
    });
  }

  it('emits Unknown router error when router prefix is not mapped', async () => {
    const backends: BackendConfig[] = [{ name: 'seer' }];
    const clients: Record<string, SocketClient> = {
      seer: makeClient(),
    };

    const link = createSocketLink({
      backends,
      clients,
      notifyTRPCError: notifyTRPCErrorMock,
      waitUntil: waitUntilMock,
    });

    const op: any = {
      id: 1,
      context: {},
      path: 'unknownRouter.core.getRealms',
      type: 'query',
      input: {},
    };

    const obs = makeObservable(link, op);

    await new Promise<void>((resolve, reject) => {
      obs.subscribe({
        next: () => reject(new Error('next should not be called')),
        error: (err) => {
          expect(err).toBeInstanceOf(TRPCClientError);
          expect((err as AnyError).message).toContain('Unknown router: unknownRouter');
          expect(notifyTRPCErrorMock).toHaveBeenCalled();
          resolve();
        },
        complete: () => resolve(),
      });
    });
  });

  it('routes query to correct backend and resolves successful response', async () => {
    const seerClient = makeClient();
    const backends: BackendConfig[] = [{ name: 'seer' }];
    const clients: Record<string, SocketClient> = { seer: seerClient };

    // waitUntil resolves immediately
    waitUntilMock = jest.fn().mockResolvedValue(undefined);

    const link = createSocketLink({
      backends,
      clients,
      notifyTRPCError: notifyTRPCErrorMock,
      waitUntil: waitUntilMock,
    });

    const op: any = {
      id: 1,
      context: {},
      path: 'seer.core.getRealms',
      type: 'query',
      input: { foo: 'bar' },
    };

    const obs = makeObservable(link, op);

    const donePromise = new Promise<void>((resolve, reject) => {
      obs.subscribe({
        next: (val: any) => {
          expect(val.result).toEqual({ status: 1, data: ['realm-1'] });
        },
        error: (err) => reject(err),
        complete: () => {
          expect(notifyTRPCErrorMock).not.toHaveBeenCalled();
          resolve();
        },
      });
    });

    // Flush microtasks so waitUntil + emit run
    await Promise.resolve();

    expect(seerClient.emitMock).toHaveBeenCalledTimes(1);
    const [eventName, payload] = seerClient.emitMock.mock.calls[0];

    expect(eventName).toBe('trpc');
    expect(payload.type).toBe('query');
    expect(payload.method).toBe('core.getRealms');
    expect(payload.id).toBeDefined();

    const reqId = payload.id;
    const cb = (seerClient as any).ioCallbacks[reqId];
    expect(cb).toBeDefined();

    cb.resolve({
      result: JSON.stringify({ status: 1, data: ['realm-1'] }),
    });

    await donePromise;
  });

  it('propagates timeout error when server does not respond', async () => {
    const seerClient = makeClient();
    const backends: BackendConfig[] = [{ name: 'seer' }];
    const clients: Record<string, SocketClient> = { seer: seerClient };

    waitUntilMock = jest.fn().mockResolvedValue(undefined);

    const link = createSocketLink({
      backends,
      clients,
      notifyTRPCError: notifyTRPCErrorMock,
      waitUntil: waitUntilMock,
      requestTimeoutMs: 15_000,
    });

    const op: any = {
      id: 1,
      context: {},
      path: 'seer.core.getRealms',
      type: 'query',
      input: {},
    };

    const obs = makeObservable(link, op);

    const donePromise = new Promise<void>((resolve, reject) => {
      obs.subscribe({
        next: () => reject(new Error('next should not be called on timeout')),
        error: (err) => {
          expect(err).toBeInstanceOf(TRPCClientError);
          expect((err as AnyError).message).toContain('Request timeout');
          expect(notifyTRPCErrorMock).toHaveBeenCalled();
          resolve();
        },
        complete: () => resolve(),
      });
    });

    // Let waitUntil resolve and emit be scheduled
    await Promise.resolve();

    // Fire the timeout inside the link
    jest.runAllTimers();

    await donePromise;
  });

  it('calls observer.error when waitUntil rejects (no socket connection)', async () => {
    const seerClient = makeClient();
    const backends: BackendConfig[] = [{ name: 'seer' }];
    const clients: Record<string, SocketClient> = { seer: seerClient };

    waitUntilMock = jest.fn().mockRejectedValue(new Error('Socket never ready'));

    const link = createSocketLink({
      backends,
      clients,
      notifyTRPCError: notifyTRPCErrorMock,
      waitUntil: waitUntilMock,
    });

    const op: any = {
      id: 1,
      context: {},
      path: 'seer.core.getRealms',
      type: 'query',
      input: {},
    };

    const obs = makeObservable(link, op);

    await new Promise<void>((resolve, reject) => {
      obs.subscribe({
        next: () => reject(new Error('next should not be called')),
        error: (err) => {
          expect(err).toBeInstanceOf(TRPCClientError);
          expect((err as AnyError).message).toContain('Socket connection timeout');
          expect(notifyTRPCErrorMock).toHaveBeenCalled();
          resolve();
        },
        complete: () => resolve(),
      });
    });
  });

  it('propagates server error via reject()', async () => {
    const seerClient = makeClient();
    const backends: BackendConfig[] = [{ name: 'seer' }];
    const clients: Record<string, SocketClient> = { seer: seerClient };

    waitUntilMock = jest.fn().mockResolvedValue(undefined);

    const link = createSocketLink({
      backends,
      clients,
      notifyTRPCError: notifyTRPCErrorMock,
      waitUntil: waitUntilMock,
    });

    const op: any = {
      id: 1,
      context: {},
      path: 'seer.core.getRealms',
      type: 'query',
      input: {},
    };

    const obs = makeObservable(link, op);

    const donePromise = new Promise<void>((resolve, reject) => {
      obs.subscribe({
        next: () => reject(new Error('next should not be called')),
        error: (err) => {
          expect(err).toEqual(new Error('server-broke'));
          expect(notifyTRPCErrorMock).toHaveBeenCalledWith(new Error('server-broke'));
          resolve();
        },
        complete: () => resolve(),
      });
    });

    // Let waitUntil resolve and emit run
    await Promise.resolve();

    const [, payload] = (seerClient.emitMock as jest.Mock).mock.calls[0];
    const reqId = payload.id;

    const cb = (seerClient as any).ioCallbacks[reqId];
    expect(cb).toBeDefined();

    cb.reject(new Error('server-broke'));

    await donePromise;
  });
});
