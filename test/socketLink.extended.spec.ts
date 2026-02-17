// arken/packages/node/test/socketLink.extended.spec.ts

import {
  attachTrpcResponseHandler,
  bindSocketClientEmit,
  type SocketClient,
} from '../trpc/socketLink';

// =========================
// attachTrpcResponseHandler — extended
// =========================

describe('attachTrpcResponseHandler (extended)', () => {
  function makeSocket() {
    const handlers: Record<string, Function> = {};
    let anyHandler: Function | null = null;
    return {
      handlers,
      on: jest.fn((event: string, cb: Function) => {
        handlers[event] = cb;
      }),
      off: jest.fn((event: string, _cb: Function) => {
        delete handlers[event];
      }),
      onAny: jest.fn((cb: Function) => {
        anyHandler = cb;
      }),
      offAny: jest.fn((_cb: Function) => {
        anyHandler = null;
      }),
      fireAny(event: string, payload: any) {
        if (anyHandler) (anyHandler as Function)(event, payload);
      },
      fire(event: string, payload: any) {
        if (handlers[event]) handlers[event](payload);
      },
    };
  }

  it('supports responseIdField "oid"', () => {
    const socket = makeSocket();
    const client: any = {
      socket,
      ioCallbacks: {
        'req-42': {
          timeout: null,
          resolve: jest.fn(),
          reject: jest.fn(),
        },
      },
    };

    attachTrpcResponseHandler({
      client,
      backendName: 'seer',
      logging: false,
      responseIdField: 'oid',
    });

    // Simulate server response with oid field
    socket.fire('trpcResponse', {
      oid: 'req-42',
      result: '{"status":1,"data":"ok"}',
    });

    expect(client.ioCallbacks['req-42']).toBeUndefined();
  });

  it('uses onAny when preferOnAny is true', () => {
    const socket = makeSocket();
    const client: any = {
      socket,
      ioCallbacks: {
        'req-99': {
          timeout: null,
          resolve: jest.fn(),
          reject: jest.fn(),
        },
      },
    };

    const teardown = attachTrpcResponseHandler({
      client,
      backendName: 'seer',
      logging: false,
      preferOnAny: true,
    });

    expect(socket.onAny).toHaveBeenCalled();

    // Fire via onAny
    socket.fireAny('trpcResponse', {
      id: 'req-99',
      result: '{"status":1}',
    });

    expect(client.ioCallbacks['req-99']).toBeUndefined();

    // Teardown should call offAny
    teardown();
    expect(socket.offAny).toHaveBeenCalled();
  });

  it('returns teardown that removes on handlers', () => {
    const socket = makeSocket();
    const client: any = { socket, ioCallbacks: {} };

    const teardown = attachTrpcResponseHandler({
      client,
      backendName: 'test',
      logging: false,
    });

    expect(socket.on).toHaveBeenCalledWith('trpc', expect.any(Function));
    expect(socket.on).toHaveBeenCalledWith('trpcResponse', expect.any(Function));

    teardown();

    expect(socket.off).toHaveBeenCalledWith('trpc', expect.any(Function));
    expect(socket.off).toHaveBeenCalledWith('trpcResponse', expect.any(Function));
  });

  it('calls reject when resolve throws', () => {
    const socket = makeSocket();
    const rejectMock = jest.fn();
    const client: any = {
      socket,
      ioCallbacks: {
        'req-throw': {
          timeout: null,
          resolve: jest.fn(() => { throw new Error('resolve boom'); }),
          reject: rejectMock,
        },
      },
    };

    attachTrpcResponseHandler({
      client,
      backendName: 'seer',
      logging: false,
    });

    socket.fire('trpcResponse', {
      id: 'req-throw',
      result: '{"status":1}',
    });

    expect(rejectMock).toHaveBeenCalled();
  });
});

// =========================
// bindSocketClientEmit
// =========================

describe('bindSocketClientEmit', () => {
  function makeSocket() {
    const handlers: Record<string, Function> = {};
    return {
      handlers,
      emit: jest.fn(),
      on: jest.fn((event: string, cb: Function) => {
        handlers[event] = cb;
      }),
      off: jest.fn(),
      fire(event: string, payload: any) {
        if (handlers[event]) handlers[event](payload);
      },
    };
  }

  it('sets up client.socket and ioCallbacks, returns a proxy', () => {
    const socket = makeSocket();
    const client: any = { ioCallbacks: undefined, socket: undefined };

    const proxy = bindSocketClientEmit({
      client,
      socket,
      backendName: 'seer',
      logging: false,
    });

    expect(client.socket).toBe(socket);
    expect(client.ioCallbacks).toBeDefined();
    expect(proxy).toBeDefined();
  });

  it('proxy emits trpc and resolves via trpcResponse', async () => {
    const socket = makeSocket();
    const client: any = { ioCallbacks: {}, socket: undefined };

    const proxy: any = bindSocketClientEmit({
      client,
      socket,
      backendName: 'seer',
      logging: false,
      requestTimeoutMs: 5000,
    });

    // Start a call
    const promise = proxy.core.ping.query({ msg: 'hi' });

    await Promise.resolve();

    // Socket should have emitted a trpc message
    expect(socket.emit).toHaveBeenCalledWith('trpc', expect.objectContaining({
      method: 'core.ping',
      type: 'query',
    }));

    // Get the request id from the emit call
    const [, payload] = socket.emit.mock.calls[0];
    const reqId = payload.id;

    // Simulate trpcResponse coming back via the on handler
    socket.fire('trpcResponse', {
      id: reqId,
      result: JSON.stringify({ status: 1, data: { pong: 'hi' } }),
    });

    const result = await promise;
    expect(result).toEqual({ pong: 'hi' });
  });
});
