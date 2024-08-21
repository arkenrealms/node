import { sha256 } from 'crypto-js';
// or
// import { ethers } from 'ethers';
// const sha256 = ethers.utils.sha256;

const PROVIDERS = JSON.stringify(['https://bsc-dataseed1.ninicoin.io']);

let EDGE_CACHE_TTL = 60;
let BROWSER_CACHE_TTL = 0;
let PROVIDER_TIMEOUT = 5000;

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

    const parsedUrl = new URL(providers[Math.floor(Math.random() * providers.length)]);
    this.url = parsedUrl;
    this.host = parsedUrl.host;
    this.path = parsedUrl.pathname;

    this.isMetaMask = false;

    this.send = (request, callback) => {
      this.request(request)
        .then((result) => callback(null, { jsonrpc: '2.0', id: request.id, result }))
        .catch((error) => callback(error, null));
    };

    this.sendAsync = (request, callback) => {
      this.request(request)
        .then((result) => callback(null, { jsonrpc: '2.0', id: request.id, result }))
        .catch((error) => callback(error, null));
    };
  }

  async request(request: any): Promise<any> {
    var _a, _b, _c;

    request.jsonrpc = '2.0';
    request.id = 56;

    const headers = {
      'Content-Type': 'application/json',
    };

    const cache = await caches.open('my-cache-name');
    const url = this.url.toString();
    const body = JSON.stringify(request);
    const hash = await sha256(body);
    const cacheUrl = new URL(url);
    cacheUrl.pathname = '/posts' + cacheUrl.pathname + hash;

    const cacheKey = new Request(cacheUrl.toString(), {
      headers,
      method: 'GET',
    });

    let response = await cache.match(cacheKey);
    if (!response) {
      response = await fetch(url, {
        method: 'POST',
        headers,
        body: JSON.stringify(request),
      });

      if (!response.ok) {
        if (response.status === 403) {
          const fullBody = JSON.stringify({});

          const cacheHeaders = { 'Cache-Control': `public, max-age=${EDGE_CACHE_TTL}` };
          await cache.put(cacheKey, new Response(fullBody, { ...response, headers: cacheHeaders }));

          const newUrl = new URL(JSON.parse(PROVIDERS)[Math.floor(Math.random() * JSON.parse(PROVIDERS).length)]);
          this.url = newUrl;
          this.host = newUrl.host;
          this.path = newUrl.pathname;

          return await this.request(request);
        } else {
          throw new RequestError(`${response.status}: ${response.statusText}`, -32000, null);
        }
      }
    }

    let responseBody: any = await response.text();

    try {
      responseBody = JSON.parse(responseBody);
    } catch (e) {
      responseBody = {};
    }

    const fullBody = JSON.stringify(responseBody);

    const cacheHeaders = { 'Cache-Control': `public, max-age=${EDGE_CACHE_TTL}` };
    await cache.put(cacheKey, new Response(fullBody, { ...response, headers: cacheHeaders }));

    if ('error' in responseBody) {
      throw new RequestError(
        (_a = responseBody.error) === null || _a === void 0 ? void 0 : _a.message,
        (_b = responseBody.error) === null || _b === void 0 ? void 0 : _b.code,
        (_c = responseBody.error) === null || _c === void 0 ? void 0 : _c.data
      );
    } else {
      return responseBody.result;
    }
  }
}
