// arken/packages/node/web3/httpProvider.ts

import { SHA256 } from 'crypto-js';
// or
// import { ethers } from 'ethers';
// const sha256 = ethers.utils.sha256;

const DEFAULT_PROVIDERS = ['https://bsc-dataseed1.ninicoin.io'];
const PROVIDERS = JSON.stringify(DEFAULT_PROVIDERS);

let EDGE_CACHE_TTL = 60;
let BROWSER_CACHE_TTL = 0;
let PROVIDER_TIMEOUT = 5000;

const TIMEOUT_ERROR_CODE = -32000;

class RequestError extends Error {
  code: number;
  data: any;

  constructor(message: string, code: number, data: any) {
    super(message);
    this.code = code;
    this.data = data;
    this.name = this.constructor.name;
  }
}

export default class Provider {
  url: URL;
  host: string;
  path: string;
  isMetaMask: boolean;
  send: (request: any, callback: (error: any, response: any) => void) => void;
  sendAsync: (request: any, callback: (error: any, response: any) => void) => void;

  constructor(url: string) {
    EDGE_CACHE_TTL = EDGE_CACHE_TTL || 60;
    BROWSER_CACHE_TTL = BROWSER_CACHE_TTL || 0;
    PROVIDER_TIMEOUT = PROVIDER_TIMEOUT || 5000;

    const providers = JSON.parse(PROVIDERS);

    const requestedProviderUrl = typeof url === 'string' && url.trim().length > 0 ? url.trim() : null;

    const resolvedProviderUrl = requestedProviderUrl || providers[Math.floor(Math.random() * providers.length)];

    const parsedUrl = this.parseProviderUrl(resolvedProviderUrl, providers);
    this.url = parsedUrl;
    this.host = parsedUrl.host;
    this.path = parsedUrl.pathname;

    this.isMetaMask = false;

    this.send = (request, callback) => {
      const requestEnvelope = { ...(request || {}) };
      if (typeof requestEnvelope.id === 'undefined' || requestEnvelope.id === null) {
        requestEnvelope.id = 56;
      }

      this.request(requestEnvelope)
        .then((result) => callback(null, { jsonrpc: '2.0', id: requestEnvelope.id, result }))
        .catch((error) => callback(error, null));
    };

    this.sendAsync = (request, callback) => {
      const requestEnvelope = { ...(request || {}) };
      if (typeof requestEnvelope.id === 'undefined' || requestEnvelope.id === null) {
        requestEnvelope.id = 56;
      }

      this.request(requestEnvelope)
        .then((result) => callback(null, { jsonrpc: '2.0', id: requestEnvelope.id, result }))
        .catch((error) => callback(error, null));
    };
  }

  private parseProviderUrl(candidate: string, providers: string[]): URL {
    try {
      return new URL(candidate);
    } catch (_error) {
      for (const provider of providers) {
        try {
          return new URL(provider);
        } catch (_providerError) {
          continue;
        }
      }

      throw new RequestError('No valid provider URL configured', -32000, null);
    }
  }

  private async fetchWithTimeout(url: string, init: any): Promise<any> {
    let timeoutHandle: ReturnType<typeof setTimeout> | undefined;
    let didTimeout = false;
    const canAbort = typeof AbortController !== 'undefined';
    const controller = canAbort ? new AbortController() : null;
    const fetchInit = controller ? { ...(init || {}), signal: controller.signal } : init;

    try {
      const timeoutPromise = new Promise((_, reject) => {
        timeoutHandle = setTimeout(() => {
          didTimeout = true;
          if (controller) {
            controller.abort();
          }
          reject(new RequestError(`Request timeout after ${PROVIDER_TIMEOUT}ms`, TIMEOUT_ERROR_CODE, null));
        }, PROVIDER_TIMEOUT);
      });

      return await Promise.race([fetch(url, fetchInit), timeoutPromise]);
    } catch (error: any) {
      if (error instanceof RequestError) {
        throw error;
      }

      if (didTimeout) {
        throw new RequestError(`Request timeout after ${PROVIDER_TIMEOUT}ms`, TIMEOUT_ERROR_CODE, null);
      }

      const message = error && typeof error.message === 'string' ? error.message : 'RPC request failed';
      throw new RequestError(message, -32000, null);
    } finally {
      if (timeoutHandle) {
        clearTimeout(timeoutHandle);
      }
    }
  }

  async request(request: any): Promise<any> {
    const requestEnvelope = { ...(request || {}) };
    return this.requestWithRetries(requestEnvelope, 0);
  }

  private async requestWithRetries(request: any, forbiddenRetries: number): Promise<any> {
    request.jsonrpc = '2.0';
    if (typeof request.id === 'undefined' || request.id === null) {
      request.id = 56;
    }

    const headers = {
      'Content-Type': 'application/json',
    };

    const canUseRuntimeCache =
      typeof caches !== 'undefined' &&
      typeof (caches as any).open === 'function' &&
      typeof Request !== 'undefined' &&
      typeof Response !== 'undefined';

    const cache = canUseRuntimeCache ? await caches.open('my-cache-name') : null;
    const url = this.url.toString();
    const body = JSON.stringify(request);
    const hash = SHA256(body).toString();
    const cacheUrl = new URL(url);
    cacheUrl.pathname = '/posts' + cacheUrl.pathname + hash;

    const cacheKey =
      cache && canUseRuntimeCache
        ? new Request(cacheUrl.toString(), {
            headers,
            method: 'GET',
          })
        : null;

    let response = cache && cacheKey ? await cache.match(cacheKey) : null;
    if (!response) {
      response = await this.fetchWithTimeout(url, {
        method: 'POST',
        headers,
        body: JSON.stringify(request),
      });

      if (!response.ok) {
        if (response.status === 403) {
          const availableProviders: string[] = JSON.parse(PROVIDERS);
          const currentProvider = this.url.toString();
          const alternateProviders = availableProviders.filter((provider) => provider !== currentProvider);

          if (alternateProviders.length === 0 || forbiddenRetries >= availableProviders.length - 1) {
            throw new RequestError(`${response.status}: ${response.statusText}`, -32000, null);
          }

          const newUrl = new URL(alternateProviders[Math.floor(Math.random() * alternateProviders.length)]);
          this.url = newUrl;
          this.host = newUrl.host;
          this.path = newUrl.pathname;

          return await this.requestWithRetries(request, forbiddenRetries + 1);
        } else {
          throw new RequestError(`${response.status}: ${response.statusText}`, -32000, null);
        }
      }
    }

    let responseBodyText = '';
    try {
      responseBodyText = await response.text();
    } catch (error: any) {
      const message = error && typeof error.message === 'string' ? error.message : 'Failed to read RPC response body';
      throw new RequestError(message, -32000, null);
    }

    let responseBody: any;
    try {
      responseBody = JSON.parse(responseBodyText);
    } catch (_error) {
      throw new RequestError('Invalid JSON-RPC response body', -32000, null);
    }

    const isObjectEnvelope = typeof responseBody === 'object' && responseBody !== null;
    if (!isObjectEnvelope) {
      throw new RequestError('Invalid JSON-RPC response envelope', -32000, null);
    }

    if (responseBody.jsonrpc !== '2.0') {
      throw new RequestError('Invalid JSON-RPC version', -32000, null);
    }

    if (!('id' in responseBody) || String(responseBody.id) !== String(request.id)) {
      throw new RequestError('Mismatched JSON-RPC response id', -32000, null);
    }

    if ('error' in responseBody) {
      const errorEnvelope = responseBody.error;
      const isObjectErrorEnvelope = typeof errorEnvelope === 'object' && errorEnvelope !== null;
      if (!isObjectErrorEnvelope) {
        throw new RequestError('Invalid JSON-RPC response envelope', -32000, null);
      }

      const rawMessage = responseBody.error.message;
      const message = typeof rawMessage === 'string' && rawMessage.trim().length > 0 ? rawMessage : 'RPC request failed';

      const code =
        typeof responseBody.error.code === 'number' && Number.isFinite(responseBody.error.code)
          ? responseBody.error.code
          : -32000;

      throw new RequestError(message, code, responseBody.error.data ?? null);
    }

    if ('result' in responseBody) {
      const fullBody = JSON.stringify(responseBody);

      if (cache && cacheKey && typeof Response !== 'undefined') {
        const cacheHeaders = { 'Cache-Control': `public, max-age=${EDGE_CACHE_TTL}` };
        await cache.put(cacheKey, new Response(fullBody, { ...response, headers: cacheHeaders }));
      }

      return responseBody.result;
    }

    throw new RequestError('Invalid JSON-RPC response envelope', -32000, null);
  }
}
