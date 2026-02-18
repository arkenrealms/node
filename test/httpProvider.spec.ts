// arken/packages/node/test/httpProvider.spec.ts

import Provider from '../web3/httpProvider';

describe('web3/httpProvider', () => {
  const originalFetch = (global as any).fetch;
  const originalCaches = (global as any).caches;
  const originalRequest = (global as any).Request;
  const originalResponse = (global as any).Response;

  beforeEach(() => {
    const cacheStore = new Map<string, any>();

    class MockRequest {
      url: string;
      constructor(url: string) {
        this.url = url;
      }
    }

    class MockResponse {
      body: string;
      ok: boolean;
      status: number;
      statusText: string;

      constructor(body: string, init: any = {}) {
        this.body = body;
        this.ok = init.ok ?? true;
        this.status = init.status ?? 200;
        this.statusText = init.statusText ?? 'OK';
      }

      async text() {
        return this.body;
      }
    }

    (global as any).Request = MockRequest;
    (global as any).Response = MockResponse;
    (global as any).caches = {
      open: jest.fn(async () => ({
        match: jest.fn(async (request: any) => cacheStore.get(request.url)),
        put: jest.fn(async (request: any, response: any) => {
          cacheStore.set(request.url, response);
        }),
      })),
    };

    (global as any).fetch = jest.fn(async (_url: string, init: any) =>
      new MockResponse(JSON.stringify({ result: init?.body ? JSON.parse(init.body).id : null }), {
        ok: true,
        status: 200,
        statusText: 'OK',
      })
    );
  });

  afterAll(() => {
    (global as any).fetch = originalFetch;
    (global as any).caches = originalCaches;
    (global as any).Request = originalRequest;
    (global as any).Response = originalResponse;
  });

  test('uses constructor url when provided', () => {
    const provider = new Provider('https://rpc.example.org/custom/path');

    expect(provider.host).toBe('rpc.example.org');
    expect(provider.path).toBe('/custom/path');
    expect(provider.url.toString()).toBe('https://rpc.example.org/custom/path');
  });

  test('falls back to default provider when constructor url is invalid', () => {
    const provider = new Provider('not a valid url');

    expect(provider.host).toBe('bsc-dataseed1.ninicoin.io');
    expect(provider.url.toString()).toBe('https://bsc-dataseed1.ninicoin.io/');
  });

  test('preserves explicit request id instead of overwriting it', async () => {
    const provider = new Provider('https://rpc.example.org');
    const result = await provider.request({ method: 'eth_chainId', params: [], id: 777 });

    expect(result).toBe(777);
  });

  test('does not mutate the caller request object', async () => {
    const provider = new Provider('https://rpc.example.org');
    const request = { method: 'eth_chainId', params: [] };

    await provider.request(request);

    expect(request).toEqual({ method: 'eth_chainId', params: [] });
  });

  test('uses fallback request id when id is missing', async () => {
    const provider = new Provider('https://rpc.example.org');
    const result = await provider.request({ method: 'eth_chainId', params: [] });

    expect(result).toBe(56);
  });

  test('falls back to network-only flow when Cache API globals are unavailable', async () => {
    (global as any).caches = undefined;
    (global as any).Request = undefined;
    (global as any).Response = undefined;

    const provider = new Provider('https://rpc.example.org');
    const result = await provider.request({ method: 'eth_chainId', params: [], id: 901 });

    expect(result).toBe(901);
    expect((global as any).fetch).toHaveBeenCalledTimes(1);
  });

  test('rejects when fetch exceeds provider timeout window', async () => {
    jest.useFakeTimers();
    try {
      (global as any).fetch = jest.fn(() => new Promise(() => {}));

      const provider = new Provider('https://rpc.example.org');
      const pending = provider.request({ method: 'eth_chainId', params: [], id: 999 });
      const assertion = expect(pending).rejects.toMatchObject({
        code: -32000,
        message: 'Request timeout after 5000ms',
      });

      await jest.advanceTimersByTimeAsync(5001);
      await assertion;
    } finally {
      jest.useRealTimers();
    }
  }, 10000);

  test('aborts in-flight fetch on timeout when AbortController is available', async () => {
    jest.useFakeTimers();
    try {
      const abortSpy = jest.fn();

      (global as any).fetch = jest.fn((_url: string, init: any) => {
        const signal = init?.signal;
        if (signal && typeof signal.addEventListener === 'function') {
          signal.addEventListener('abort', abortSpy);
        }

        return new Promise(() => {});
      });

      const provider = new Provider('https://rpc.example.org');
      const pending = provider.request({ method: 'eth_chainId', params: [], id: 1001 });
      const assertion = expect(pending).rejects.toMatchObject({
        code: -32000,
        message: 'Request timeout after 5000ms',
      });

      await jest.advanceTimersByTimeAsync(5001);
      await assertion;
      expect(abortSpy).toHaveBeenCalledTimes(1);
    } finally {
      jest.useRealTimers();
    }
  }, 10000);

  test('does not recurse indefinitely on 403 when no alternate providers are configured', async () => {
    class ForbiddenResponse {
      ok = false;
      status = 403;
      statusText = 'Forbidden';

      async text() {
        return JSON.stringify({});
      }
    }

    (global as any).fetch = jest.fn(async () => new ForbiddenResponse());

    const provider = new Provider('https://bsc-dataseed1.ninicoin.io');

    await expect(provider.request({ method: 'eth_chainId', params: [], id: 1010 })).rejects.toMatchObject({
      code: -32000,
      message: '403: Forbidden',
    });
    expect((global as any).fetch).toHaveBeenCalledTimes(1);
  });

  test('wraps fetch network failures in RequestError for stable error shape', async () => {
    (global as any).fetch = jest.fn(async () => {
      throw new Error('socket hang up');
    });

    const provider = new Provider('https://rpc.example.org');

    await expect(provider.request({ method: 'eth_chainId', params: [], id: 1011 })).rejects.toMatchObject({
      code: -32000,
      message: 'socket hang up',
    });
  });

  test('send uses fallback id when request id is missing', async () => {
    const provider = new Provider('https://rpc.example.org');

    await new Promise<void>((resolve, reject) => {
      provider.send({ method: 'eth_chainId', params: [] }, (error, response) => {
        try {
          expect(error).toBeNull();
          expect(response).toMatchObject({ jsonrpc: '2.0', id: 56, result: 56 });
          resolve();
        } catch (assertionError) {
          reject(assertionError);
        }
      });
    });
  });

  test('sendAsync uses fallback id when request id is missing', async () => {
    const provider = new Provider('https://rpc.example.org');

    await new Promise<void>((resolve, reject) => {
      provider.sendAsync({ method: 'eth_chainId', params: [] }, (error, response) => {
        try {
          expect(error).toBeNull();
          expect(response).toMatchObject({ jsonrpc: '2.0', id: 56, result: 56 });
          resolve();
        } catch (assertionError) {
          reject(assertionError);
        }
      });
    });
  });
});
