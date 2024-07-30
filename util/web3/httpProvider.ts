const PROVIDERS = JSON.stringify(['https://bsc-dataseed1.ninicoin.io']);

let EDGE_CACHE_TTL = 60;
let BROWSER_CACHE_TTL = 0;
let PROVIDER_TIMEOUT = 5000;

class RequestError extends Error {
  constructor(message, code, data) {
    super();
    this.code = code;
    this.data = data;
    this.name = this.constructor.name;
    this.message = message;
  }
}

export default class Provider {
  constructor(url) {
    EDGE_CACHE_TTL = EDGE_CACHE_TTL || 60;
    BROWSER_CACHE_TTL = BROWSER_CACHE_TTL || 0;
    PROVIDER_TIMEOUT = PROVIDER_TIMEOUT || 5000;

    const providers = JSON.parse(PROVIDERS);

    url = new URL(providers[Math.floor(Math.random() * providers.length)]);
    this.isMetaMask = false;
    this.send = (request, callback) => {
      // console.log('sendAsync', request);

      this.request(request)
        .then((result) => callback(null, { jsonrpc: '2.0', id: request.id, result }))
        .catch((error) => callback(error, null));
    };
    this.sendAsync = (request, callback) => {
      // console.log('sendAsync', request);

      this.request(request)
        .then((result) => callback(null, { jsonrpc: '2.0', id: request.id, result }))
        .catch((error) => callback(error, null));
    };
    this.request = async (request) => {
      var _a, _b, _c;
      // if (typeof method !== 'string') {
      //   params = method.params;
      //   method = method.method;
      // }

      request.jsonrpc = '2.0';
      request.id = 56;

      const headers = {
        'Content-Type': 'application/json',
      };

      const cache = caches.default;

      let url = this.url;
      let body = JSON.stringify(request);
      let response;
      const hash = await sha256(body);
      const cacheUrl = new URL(url);
      cacheUrl.pathname = '/posts' + cacheUrl.pathname + hash;
      const cacheKey = new Request(cacheUrl.toString(), {
        headers,
        method: 'GET',
      });

      response = await cache.match(cacheKey);
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

            url = new URL(providers[Math.floor(Math.random() * providers.length)]);
            this.url = url;
            const parsed = new URL(url);
            this.host = parsed.host;
            this.path = parsed.pathname;
            return await this.request(request);
          } else {
            throw new RequestError(`${response.status}: ${response.statusText}`, -32000);
          }
        }
      }

      // if(response.headers['content-encoding'] == 'gzip'){
      //   await new Promise(resolve => {

      //   zlib.gunzip(body, function(err, dezipped) {
      //     resolve(dezipped.toString());
      //   });
      //   })
      // } else {
      //   callback(body);
      // }

      body = await response.text();

      try {
        body = JSON.parse(body);
      } catch (e) {
        body = {};
      }

      const fullBody = JSON.stringify(body);

      const cacheHeaders = { 'Cache-Control': `public, max-age=${EDGE_CACHE_TTL}` };
      await cache.put(cacheKey, new Response(fullBody, { ...response, headers: cacheHeaders }));

      if ('error' in body) {
        throw new RequestError(
          (_a = body === null || body === void 0 ? void 0 : body.error) === null || _a === void 0 ? void 0 : _a.message,
          (_b = body === null || body === void 0 ? void 0 : body.error) === null || _b === void 0 ? void 0 : _b.code,
          (_c = body === null || body === void 0 ? void 0 : body.error) === null || _c === void 0 ? void 0 : _c.data
        );
      } else {
        return body.result;
      }
      // else {
      //   throw new RequestError(`Received unexpected JSON-RPC response to ${method} request.`, -32000, body);
      // }
    };
    // this.chainId = chainId;
    this.url = url;
    const parsed = new URL(url);
    this.host = parsed.host;
    this.path = parsed.pathname;
  }
}
