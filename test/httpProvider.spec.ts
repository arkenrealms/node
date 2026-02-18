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

  test('preserves explicit request id instead of overwriting it', async () => {
    const provider = new Provider('https://rpc.example.org');
    const result = await provider.request({ method: 'eth_chainId', params: [], id: 777 });

    expect(result).toBe(777);
  });

  test('uses fallback request id when id is missing', async () => {
    const provider = new Provider('https://rpc.example.org');
    const result = await provider.request({ method: 'eth_chainId', params: [] });

    expect(result).toBe(56);
  });
});
