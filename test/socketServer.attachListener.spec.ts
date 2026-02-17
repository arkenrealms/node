// arken/packages/node/test/socketServer.attachListener.spec.ts

import { attachSocketTrpcListener } from '../trpc/socketServer';

describe('attachSocketTrpcListener', () => {
  function makeSocket() {
    const handlers: Record<string, Function[]> = {};
    return {
      handlers,
      on: jest.fn((event: string, cb: Function) => {
        handlers[event] = handlers[event] || [];
        handlers[event].push(cb);
      }),
      off: jest.fn((event: string, cb: Function) => {
        if (handlers[event]) {
          handlers[event] = handlers[event].filter((h) => h !== cb);
        }
      }),
      fire(event: string, payload: any) {
        (handlers[event] || []).forEach((fn) => fn(payload));
      },
    };
  }

  it('registers a handler on the default "trpc" event', () => {
    const socket = makeSocket();
    const handleSocketTrpc = jest.fn();

    attachSocketTrpcListener({ socket, ctx: {}, handleSocketTrpc });

    expect(socket.on).toHaveBeenCalledWith('trpc', expect.any(Function));
  });

  it('registers a handler on a custom event name', () => {
    const socket = makeSocket();
    const handleSocketTrpc = jest.fn();

    attachSocketTrpcListener({ socket, ctx: {}, handleSocketTrpc, eventName: 'rpc' });

    expect(socket.on).toHaveBeenCalledWith('rpc', expect.any(Function));
  });

  it('calls handleSocketTrpc with socket, ctx, and message', async () => {
    const socket = makeSocket();
    const handleSocketTrpc = jest.fn().mockResolvedValue(undefined);
    const ctx = { userId: 'u1' };

    attachSocketTrpcListener({ socket, ctx, handleSocketTrpc });

    const msg = { id: '1', method: 'core.ping', params: {} };
    socket.fire('trpc', msg);

    await Promise.resolve();
    expect(handleSocketTrpc).toHaveBeenCalledWith(socket, ctx, msg);
  });

  it('returns a teardown function that removes the listener', () => {
    const socket = makeSocket();
    const handleSocketTrpc = jest.fn();

    const teardown = attachSocketTrpcListener({ socket, ctx: {}, handleSocketTrpc });

    expect(socket.handlers['trpc'].length).toBe(1);
    teardown();
    expect(socket.off).toHaveBeenCalledWith('trpc', expect.any(Function));
  });

  it('does nothing if socket has no on method', () => {
    const socket = { emit: jest.fn() } as any;
    const handleSocketTrpc = jest.fn();

    // Should not throw
    const teardown = attachSocketTrpcListener({ socket, ctx: {}, handleSocketTrpc });
    teardown(); // also should not throw
  });
});
