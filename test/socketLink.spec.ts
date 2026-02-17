// /arken/packages/node/test/socketLink.spec.ts

import {
  createSocketLink,
  attachTrpcResponseHandler,
  createSocketProxyClient,
  type BackendConfig,
  type SocketClient,
  type WaitUntilFn,
} from '../trpc/socketLink';
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
      socket: { emit: emitMock },
      emitMock,
    };
    return client;
  }

  function makeObservable(link: ReturnType<typeof createSocketLink>, op: any) {
    const runtime: any = {};
    const opLink = link(runtime);
    return opLink({ op, next: () => observable(() => {}) });
  }

  it('emits Unknown router error when router prefix is not mapped', async () => {
    const backends: BackendConfig[] = [{ name: 'seer', url: 'ws://dummy' }];
    const clients: Record<string, SocketClient> = { seer: makeClient() };

    const link = createSocketLink({
      backends,
      clients,
      notifyTRPCError: notifyTRPCErrorMock,
      waitUntil: waitUntilMock,
    });

    const obs = makeObservable(link, {
      id: 1,
      context: {},
      path: 'unknownRouter.core.getRealms',
      type: 'query',
      input: {},
    });

    await new Promise<void>((resolve, reject) => {
      obs.subscribe({
        next: () => reject(new Error('next should not be called')),
        error: (err) => {
          expect(err).toBeInstanceOf(TRPCClientError);
          expect((err as AnyError).message).toContain('Unknown router for unknownRouter.core.getRealms');
          expect(notifyTRPCErrorMock).toHaveBeenCalled();
          resolve();
        },
        complete: () => resolve(),
      });
    });
  });

  it('routes query to correct backend and resolves successful response', async () => {
    const seerClient = makeClient();
    const link = createSocketLink({
      backends: [{ name: 'seer', url: 'ws://dummy' }],
      clients: { seer: seerClient },
      notifyTRPCError: notifyTRPCErrorMock,
      waitUntil: jest.fn().mockResolvedValue(undefined),
    });

    const obs = makeObservable(link, {
      id: 1,
      context: {},
      path: 'seer.core.getRealms',
      type: 'query',
      input: { foo: 'bar' },
    });

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

    await Promise.resolve();

    const [eventName, payload] = seerClient.emitMock.mock.calls[0];
    expect(eventName).toBe('trpc');
    expect(payload.method).toBe('core.getRealms');

    const reqId = payload.id;
    const cb = (seerClient as any).ioCallbacks[reqId];
    cb.resolve({ result: JSON.stringify({ status: 1, data: ['realm-1'] }) });

    await donePromise;
  });

  it('propagates timeout error when server does not respond', async () => {
    const seerClient = makeClient();
    const link = createSocketLink({
      backends: [{ name: 'seer', url: 'ws://dummy' }],
      clients: { seer: seerClient },
      notifyTRPCError: notifyTRPCErrorMock,
      waitUntil: jest.fn().mockResolvedValue(undefined),
      requestTimeoutMs: 15_000,
    });

    const obs = makeObservable(link, {
      id: 1,
      context: {},
      path: 'seer.core.getRealms',
      type: 'query',
      input: {},
    });

    const donePromise = new Promise<void>((resolve, reject) => {
      obs.subscribe({
        next: () => reject(new Error('next should not be called on timeout')),
        error: (err) => {
          expect(err).toBeInstanceOf(TRPCClientError);
          expect((err as AnyError).message).toContain('Request timeout');
          resolve();
        },
      });
    });

    await Promise.resolve();
    jest.runAllTimers();
    await donePromise;
    expect(notifyTRPCErrorMock).toHaveBeenCalled();
  });

  it('cleans callback on unsubscribe before response', async () => {
    const seerClient = makeClient();
    const link = createSocketLink({
      backends: [{ name: 'seer', url: 'ws://dummy' }],
      clients: { seer: seerClient },
      notifyTRPCError: notifyTRPCErrorMock,
      waitUntil: jest.fn().mockResolvedValue(undefined),
      requestTimeoutMs: 15_000,
    });

    const obs = makeObservable(link, {
      id: 1,
      context: {},
      path: 'seer.core.getRealms',
      type: 'query',
      input: {},
    });

    const sub = obs.subscribe({ error: () => undefined });

    await Promise.resolve();
    const [, payload] = seerClient.emitMock.mock.calls[0];
    expect(seerClient.ioCallbacks[payload.id]).toBeDefined();

    sub.unsubscribe();
    expect(seerClient.ioCallbacks[payload.id]).toBeUndefined();
  });
});

describe('attachTrpcResponseHandler', () => {
  function makeSocket() {
    const handlers: Record<string, (payload: any) => void> = {};
    return {
      handlers,
      on: jest.fn((event: string, cb: (payload: any) => void) => {
        handlers[event] = cb;
      }),
      off: jest.fn(),
      onAny: jest.fn(),
      offAny: jest.fn(),
    };
  }

  it('resolves matching ioCallback on trpcResponse with id', () => {
    const socket = makeSocket();
    const client: any = {
      socket,
      ioCallbacks: {
        'req-1': { timeout: null, resolve: jest.fn(), reject: jest.fn() },
      },
    };

    attachTrpcResponseHandler({ client, backendName: 'seer', logging: false });

    socket.handlers['trpcResponse']({ id: 'req-1', result: '{"status":1,"data":["x"]}' });
    expect(client.ioCallbacks['req-1']).toBeUndefined();
  });

  it('supports alternate response id fields (oid)', () => {
    const socket = makeSocket();
    const resolve = jest.fn();
    const client: any = { socket, ioCallbacks: { 'req-oid': { timeout: null, resolve, reject: jest.fn() } } };

    attachTrpcResponseHandler({ client, backendName: 'seer', logging: false, responseIdField: 'oid' });
    socket.handlers['trpcResponse']({ oid: 'req-oid', result: '{"status":1}' });

    expect(resolve).toHaveBeenCalled();
    expect(client.ioCallbacks['req-oid']).toBeUndefined();
  });

  it('uses onAny listener when preferOnAny=true', () => {
    const socket = makeSocket();
    const resolve = jest.fn();
    const client: any = { socket, ioCallbacks: { abc: { timeout: null, resolve, reject: jest.fn() } } };

    const detach = attachTrpcResponseHandler({ client, backendName: 'seer', logging: false, preferOnAny: true });
    expect(socket.onAny).toHaveBeenCalledTimes(1);

    const anyHandler = socket.onAny.mock.calls[0][0];
    anyHandler('trpcResponse', { id: 'abc', result: '{}' });
    expect(resolve).toHaveBeenCalled();

    detach?.();
    expect(socket.offAny).toHaveBeenCalledTimes(1);
  });
});

describe('createSocketProxyClient', () => {
  function makeClient() {
    const emitMock = jest.fn();
    const socket = { emit: emitMock };
    return { socket, emitMock, ioCallbacks: {} } as any;
  }

  it('emits trpc request and resolves proxy call on success', async () => {
    const client = makeClient();
    const proxy: any = createSocketProxyClient<any>({ client, logPrefix: 'TestProxy', roles: ['seer'] });

    const promise = proxy.core.ping.query({ message: 'hi' });
    await Promise.resolve();

    const [eventName, payload] = client.emitMock.mock.calls[0];
    expect(eventName).toBe('trpc');

    client.ioCallbacks[payload.id].resolve({ result: JSON.stringify({ status: 1, data: { pong: 'hi' } }) });
    await expect(promise).resolves.toEqual({ pong: 'hi' });
  });

  it('rejects on proxy timeout', async () => {
    jest.useFakeTimers();
    const client = makeClient();
    const proxy: any = createSocketProxyClient<any>({ client, logPrefix: 'TestProxy', requestTimeoutMs: 1000 });

    const promise = proxy.core.ping.query({ message: 'hi' });
    await Promise.resolve();

    jest.advanceTimersByTime(1001);
    await expect(promise).rejects.toThrow(/Request timeout/);
    jest.useRealTimers();
  });
});
