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

    (global as any).fetch = jest.fn(async (_url: string, init: any) => {
      const requestId = init?.body ? JSON.parse(init.body).id : null;

      return new MockResponse(JSON.stringify({ jsonrpc: '2.0', id: requestId, result: requestId }), {
        ok: true,
        status: 200,
        statusText: 'OK',
      });
    });
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

  test('rejects request envelopes with missing method before network dispatch', async () => {
    const provider = new Provider('https://rpc.example.org');

    await expect(provider.request({ params: [], id: 902 })).rejects.toMatchObject({
      code: -32600,
      message: 'Invalid JSON-RPC request method',
    });

    expect((global as any).fetch).toHaveBeenCalledTimes(0);
  });

  test('rejects request envelopes with invalid JSON-RPC id before network dispatch', async () => {
    const provider = new Provider('https://rpc.example.org');

    await expect(provider.request({ method: 'eth_chainId', params: [], id: true })).rejects.toMatchObject({
      code: -32600,
      message: 'Invalid JSON-RPC request id',
    });

    expect((global as any).fetch).toHaveBeenCalledTimes(0);
  });

  test('trims request method before network dispatch', async () => {
    (global as any).fetch = jest.fn(async (_url: string, init: any) => {
      const payload = JSON.parse(init.body);

      return new (global as any).Response(
        JSON.stringify({ jsonrpc: '2.0', id: payload.id, result: payload.method }),
        { ok: true, status: 200, statusText: 'OK' }
      );
    });

    const provider = new Provider('https://rpc.example.org');
    const result = await provider.request({ method: '  eth_chainId  ', params: [], id: 903 });

    expect(result).toBe('eth_chainId');
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

  test('normalizes abort-triggered fetch rejections to timeout RequestError after deadline', async () => {
    jest.useFakeTimers();
    try {
      (global as any).fetch = jest.fn(
        (_url: string, init: any) =>
          new Promise((_resolve, reject) => {
            const signal = init?.signal;
            if (signal && typeof signal.addEventListener === 'function') {
              signal.addEventListener('abort', () => reject(new Error('AbortError: request aborted')));
            }
          })
      );

      const provider = new Provider('https://rpc.example.org');
      const pending = provider.request({ method: 'eth_chainId', params: [], id: 1002 });
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

  test('does not cache synthetic empty body after 403 failure', async () => {
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

    await expect(provider.request({ method: 'eth_chainId', params: [], id: 1012 })).rejects.toMatchObject({
      code: -32000,
      message: '403: Forbidden',
    });

    await expect(provider.request({ method: 'eth_chainId', params: [], id: 1012 })).rejects.toMatchObject({
      code: -32000,
      message: '403: Forbidden',
    });

    expect((global as any).fetch).toHaveBeenCalledTimes(2);
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

  test('rejects malformed fetch responses with stable RequestError metadata', async () => {
    (global as any).fetch = jest.fn(async () => undefined);

    const provider = new Provider('https://rpc.example.org');

    await expect(provider.request({ method: 'eth_chainId', params: [], id: 1013 })).rejects.toMatchObject({
      code: -32000,
      message: 'Invalid RPC HTTP response',
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

  test('rejects invalid JSON-RPC response body with stable RequestError metadata', async () => {
    class InvalidJsonResponse {
      ok = true;
      status = 200;
      statusText = 'OK';

      async text() {
        return 'not-json';
      }
    }

    (global as any).fetch = jest.fn(async () => new InvalidJsonResponse());

    const provider = new Provider('https://rpc.example.org');

    await expect(provider.request({ method: 'eth_chainId', params: [], id: 1301 })).rejects.toMatchObject({
      code: -32000,
      message: 'Invalid JSON-RPC response body',
    });
  });

  test('wraps response body read failures in RequestError metadata', async () => {
    class BrokenResponse {
      ok = true;
      status = 200;
      statusText = 'OK';

      async text() {
        throw new Error('stream interrupted');
      }
    }

    (global as any).fetch = jest.fn(async () => new BrokenResponse());

    const provider = new Provider('https://rpc.example.org');

    await expect(provider.request({ method: 'eth_chainId', params: [], id: 1302 })).rejects.toMatchObject({
      code: -32000,
      message: 'stream interrupted',
    });
  });

  test('rejects JSON-RPC bodies that are valid JSON but not object envelopes', async () => {
    class PrimitiveBodyResponse {
      ok = true;
      status = 200;
      statusText = 'OK';

      async text() {
        return '42';
      }
    }

    (global as any).fetch = jest.fn(async () => new PrimitiveBodyResponse());

    const provider = new Provider('https://rpc.example.org');

    await expect(provider.request({ method: 'eth_chainId', params: [], id: 1303 })).rejects.toMatchObject({
      code: -32000,
      message: 'Invalid JSON-RPC response envelope',
    });
  });

  test('rejects JSON-RPC object envelopes missing both result and error', async () => {
    class MissingResultAndErrorResponse {
      ok = true;
      status = 200;
      statusText = 'OK';

      async text() {
        return JSON.stringify({ jsonrpc: '2.0', id: 1304 });
      }
    }

    (global as any).fetch = jest.fn(async () => new MissingResultAndErrorResponse());

    const provider = new Provider('https://rpc.example.org');

    await expect(provider.request({ method: 'eth_chainId', params: [], id: 1304 })).rejects.toMatchObject({
      code: -32000,
      message: 'Invalid JSON-RPC response envelope',
    });
  });

  test('rejects JSON-RPC responses that omit response id', async () => {
    class MissingIdResponse {
      ok = true;
      status = 200;
      statusText = 'OK';

      async text() {
        return JSON.stringify({ jsonrpc: '2.0', result: '0x1' });
      }
    }

    (global as any).fetch = jest.fn(async () => new MissingIdResponse());

    const provider = new Provider('https://rpc.example.org');

    await expect(provider.request({ method: 'eth_chainId', params: [], id: 1307 })).rejects.toMatchObject({
      code: -32000,
      message: 'Mismatched JSON-RPC response id',
    });
  });

  test('rejects JSON-RPC responses that omit jsonrpc version', async () => {
    class MissingJsonRpcVersionResponse {
      ok = true;
      status = 200;
      statusText = 'OK';

      async text() {
        return JSON.stringify({ id: 13071, result: '0x1' });
      }
    }

    (global as any).fetch = jest.fn(async () => new MissingJsonRpcVersionResponse());

    const provider = new Provider('https://rpc.example.org');

    await expect(provider.request({ method: 'eth_chainId', params: [], id: 13071 })).rejects.toMatchObject({
      code: -32000,
      message: 'Invalid JSON-RPC version',
    });
  });

  test('rejects JSON-RPC responses with non-2.0 version', async () => {
    class InvalidJsonRpcVersionResponse {
      ok = true;
      status = 200;
      statusText = 'OK';

      async text() {
        return JSON.stringify({ jsonrpc: '1.0', id: 13072, result: '0x1' });
      }
    }

    (global as any).fetch = jest.fn(async () => new InvalidJsonRpcVersionResponse());

    const provider = new Provider('https://rpc.example.org');

    await expect(provider.request({ method: 'eth_chainId', params: [], id: 13072 })).rejects.toMatchObject({
      code: -32000,
      message: 'Invalid JSON-RPC version',
    });
  });

  test('rejects JSON-RPC responses whose id does not match the request id', async () => {
    class MismatchedIdResponse {
      ok = true;
      status = 200;
      statusText = 'OK';

      async text() {
        return JSON.stringify({ jsonrpc: '2.0', id: 9999, result: '0x1' });
      }
    }

    (global as any).fetch = jest.fn(async () => new MismatchedIdResponse());

    const provider = new Provider('https://rpc.example.org');

    await expect(provider.request({ method: 'eth_chainId', params: [], id: 1308 })).rejects.toMatchObject({
      code: -32000,
      message: 'Mismatched JSON-RPC response id',
    });
  });

  test('rejects JSON-RPC responses with non-spec id types even if stringified values match', async () => {
    class BooleanIdResponse {
      ok = true;
      status = 200;
      statusText = 'OK';

      async text() {
        return JSON.stringify({ jsonrpc: '2.0', id: true, result: '0x1' });
      }
    }

    (global as any).fetch = jest.fn(async () => new BooleanIdResponse());

    const provider = new Provider('https://rpc.example.org');

    await expect(provider.request({ method: 'eth_chainId', params: [], id: 'true' })).rejects.toMatchObject({
      code: -32000,
      message: 'Mismatched JSON-RPC response id',
    });
  });

  test('normalizes malformed JSON-RPC error envelope to a stable invalid-envelope failure', async () => {
    class MalformedErrorEnvelopeResponse {
      ok = true;
      status = 200;
      statusText = 'OK';

      async text() {
        return JSON.stringify({ jsonrpc: '2.0', id: 1305, error: 'boom' });
      }
    }

    (global as any).fetch = jest.fn(async () => new MalformedErrorEnvelopeResponse());

    const provider = new Provider('https://rpc.example.org');

    await expect(provider.request({ method: 'eth_chainId', params: [], id: 1305 })).rejects.toMatchObject({
      code: -32000,
      message: 'Invalid JSON-RPC response envelope',
    });
  });

  test('uses stable defaults when JSON-RPC error fields are missing or invalid', async () => {
    class PartialErrorEnvelopeResponse {
      ok = true;
      status = 200;
      statusText = 'OK';

      async text() {
        return JSON.stringify({ jsonrpc: '2.0', id: 1306, error: { message: '   ', code: 'oops', data: null } });
      }
    }

    (global as any).fetch = jest.fn(async () => new PartialErrorEnvelopeResponse());

    const provider = new Provider('https://rpc.example.org');

    await expect(provider.request({ method: 'eth_chainId', params: [], id: 1306 })).rejects.toMatchObject({
      code: -32000,
      message: 'RPC request failed',
      data: null,
    });
  });

  test('normalizes non-integer JSON-RPC error codes to stable defaults', async () => {
    class NonIntegerCodeErrorEnvelopeResponse {
      ok = true;
      status = 200;
      statusText = 'OK';

      async text() {
        return JSON.stringify({ jsonrpc: '2.0', id: 1309, error: { message: 'backend wobble', code: 12.34, data: { hint: 'retry' } } });
      }
    }

    (global as any).fetch = jest.fn(async () => new NonIntegerCodeErrorEnvelopeResponse());

    const provider = new Provider('https://rpc.example.org');

    await expect(provider.request({ method: 'eth_chainId', params: [], id: 1309 })).rejects.toMatchObject({
      code: -32000,
      message: 'backend wobble',
      data: { hint: 'retry' },
    });
  });

  test('does not cache JSON-RPC error envelopes', async () => {
    class ErrorEnvelopeResponse {
      ok = true;
      status = 200;
      statusText = 'OK';

      async text() {
        return JSON.stringify({
          jsonrpc: '2.0',
          id: 1401,
          error: { message: 'temporary backend failure', code: -32098, data: { retryable: true } },
        });
      }
    }

    (global as any).fetch = jest.fn(async () => new ErrorEnvelopeResponse());

    const provider = new Provider('https://rpc.example.org');

    await expect(provider.request({ method: 'eth_chainId', params: [], id: 1401 })).rejects.toMatchObject({
      code: -32098,
      message: 'temporary backend failure',
    });

    await expect(provider.request({ method: 'eth_chainId', params: [], id: 1401 })).rejects.toMatchObject({
      code: -32098,
      message: 'temporary backend failure',
    });

    expect((global as any).fetch).toHaveBeenCalledTimes(2);
  });
});
