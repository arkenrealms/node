import utf8 from 'utf8';
import { TRPCError } from '@trpc/server';
import { isValidRequest } from './web3';

export const customErrorFormatter = (t: any) =>
  t.middleware(async ({ ctx, next }) => {
    try {
      return await next();
    } catch (error) {
      if (error instanceof ARXError) {
        return { status: 0, error };
      } else if (error instanceof TRPCError) {
        return { status: 0, error };
      }
      return { status: 0, error: { code: 'UNKNOWN', message: 'An unexpected error occurred' } };
    }
  });

// const obj = {
//   name: "John",
//   date: new Date(),
//   data: new Uint8Array([1, 2, 3, 4]),
//   set: new Set([1, 2, 3]),
//   map: new Map([['key1', 'value1'], ['key2', 'value2']]),
//   bigInt: BigInt(12345678901234567890),
//   regex: /abc/i,
// };

// const serialized = serialize(obj);
// console.log(serialized);

// const deserialized = deserialize(serialized);
// console.log(deserialized);
export const serialize = (object) => {
  const processValue = (value) => {
    // Support for ArrayBuffer
    if (value instanceof ArrayBuffer) {
      return { _type: 'ArrayBuffer', data: Array.from(new Uint8Array(value)) };
    }

    // Ensure Uint8Array objects are serialized correctly
    if (value instanceof Uint8Array) {
      return { _type: 'Uint8Array', data: Array.from(value) };
    }
    // Ensure Date objects are serialized correctly with custom type indicator
    if (value instanceof Date) {
      return { _type: 'Date', data: value.toISOString() }; // Use custom serialization for Date
    }
    // Handle other types (Set, Map, BigInt, RegExp, etc.)
    if (value instanceof Set) {
      return { _type: 'Set', data: Array.from(value) };
    }
    if (value instanceof Map) {
      return { _type: 'Map', data: Array.from(value.entries()) };
    }
    if (typeof value === 'bigint') {
      return { _type: 'BigInt', data: value.toString() };
    }
    if (value instanceof RegExp) {
      return { _type: 'RegExp', data: value.source, flags: value.flags };
    }
    // Recursively process arrays and objects
    if (Array.isArray(value)) {
      return JSON.parse(JSON.stringify(value)).map(processValue);
    }
    if (value && typeof value === 'object') {
      return Object.fromEntries(
        Object.entries(JSON.parse(JSON.stringify(value))).map(([k, v]) => [k, processValue(v)])
      );
    }
    // Default behavior for other types
    return value;
  };

  const processedObject = processValue(object);
  return JSON.stringify(processedObject);
};

export const deserialize = (input) => {
  const processValue = (value) => {
    if (!value || typeof value !== 'object') return value;

    if (value instanceof ArrayBuffer) {
      return JSON.parse(utf8.decode(String.fromCharCode.apply(null, new Uint8Array(value))));
    }

    if (value._type) {
      switch (value._type || typeof value) {
        case 'ArrayBuffer':
          return Uint8Array.from(value.data).buffer;
        case 'Uint8Array':
          return new Uint8Array(value.data);
        case 'Date':
          return new Date(value.data);
        case 'Set':
          return new Set(value.data.map(processValue));
        case 'Map':
          return new Map(value.data.map(([k, v]) => [k, processValue(v)]));
        case 'BigInt':
          return BigInt(value.data);
        case 'RegExp':
          return new RegExp(value.data, value.flags);
        default:
          // Unknown _type, return the value as is
          return value;
      }
    } else {
      // Recursively process objects and arrays
      if (Array.isArray(value)) {
        return value.map(processValue);
      } else {
        return Object.fromEntries(Object.entries(value).map(([k, v]) => [k, processValue(v)]));
      }
    }
  };

  return processValue(typeof input === 'string' ? JSON.parse(input) : input);
};

export const transformer: any = {
  serialize,
  deserialize,
};

export const dummyTransformer: any = {
  serialize: (object: any): any => object,
  deserialize: (object: any): any => object,
};

export const validateRequest = (t: any) =>
  t.middleware(async ({ input, ctx, next }, arg2, arg3) => {
    if (!ctx.app?.web3) {
      throw new ARXError('INTERNAL_SERVER_ERROR', 'App web3 not set.');
    }

    if (!input) {
      throw new ARXError('BAD_REQUEST', 'No input provided');
    }

    const { signature, data } = input;

    // Validate presence of signature and data
    if (!signature || !data) {
      throw new ARXError('BAD_REQUEST', 'Missing signature or data');
    }

    const isValid = await isValidRequest(ctx.app.web3.bsc, {
      signature: {
        address: signature.address,
        hash: signature.hash,
        data,
      },
    });

    console.log('isValid', isValid);

    if (!isValid) {
      throw new ARXError('BAD_REQUEST', 'Invalid request');
    }

    return next();
  });

export const hasRole = (role: string | string[], t: any) =>
  t.middleware(async ({ input, ctx, next }) => {
    console.log('hasRole', role, ctx.client?.roles);

    // if (!ctx.client?.profile) throw new ARXError('INTERNAL_SERVER_ERROR', `Not authorized. Missing profile.`);

    if (Array.isArray(role)) {
      const hasAnyRole = role.some((r) => ctx.client.roles.includes(r));
      if (!hasAnyRole) {
        throw new ARXError(
          'INTERNAL_SERVER_ERROR',
          `Not authorized. Missing one of the required roles: ${role.join(',')}`
        );
      }
    } else if (role && !ctx.client.roles.includes(role)) {
      throw new ARXError('INTERNAL_SERVER_ERROR', `Not authorized. Missing role: ${role}`);
    }

    return next();
  });

export const validateSeer = (t: any) =>
  t.middleware(async ({ input, ctx, next }) => {
    console.log('validateSeer', input);
    if (!ctx.client.isSeer) {
      throw new ARXError('UNAUTHORIZED');
    }
    return next();
  });

/**
 * Reusable middleware to ensure
 * users are logged in
 */
const isAuthed = (t: any) =>
  t.middleware(({ ctx: { user, acceptableOrigin }, next }) => {
    if (!user) throw new ARXError('UNAUTHORIZED');
    if (user.bannedAt)
      throw new ARXError('FORBIDDEN', 'You cannot perform this action because your account has been banned');
    return next({ ctx: { user, acceptableOrigin } });
  });

const isMuted = (t: any) =>
  t.middleware(async ({ ctx, next }) => {
    const { user } = ctx;
    if (!user) throw new ARXError('UNAUTHORIZED');
    if (user.muted)
      throw new ARXError('FORBIDDEN', 'You cannot perform this action because your account has been restricted');

    return next({
      ctx: {
        ...ctx,
        user,
      },
    });
  });

const isMod = (t: any) =>
  t.middleware(({ ctx: { user, acceptableOrigin }, next }) => {
    if (!user) throw new ARXError('UNAUTHORIZED');
    if (!user.isModerator) throw new ARXError('FORBIDDEN', 'You do not have permission to perform this action');
    return next({ ctx: { user, acceptableOrigin } });
  });

const isOnboarded = (t: any) =>
  t.middleware(({ ctx, next }) => {
    const { user } = ctx;
    //   if (!user) throw new ARXError('UNAUTHORIZED');
    //   if (!Flags.hasFlag(user.onboarding, 'TOS')) {
    //     throw new ARXError({
    //       code: 'FORBIDDEN',
    //       message: 'You must accept our terms of service before performing this action',
    //     });
    //   }
    return next({ ctx: { ...ctx, user } });
  });

// export const isFlagProtected = (flag: keyof FeatureAccess) =>
//   t.middleware(({ ctx, next }) => {
//     const features = getFeatureFlags(ctx);
//     if (!features[flag]) throw new ARXError({ code: 'FORBIDDEN' });

//     return next();
//   });

export type KeyFromValue<TValue, TType extends Record<PropertyKey, PropertyKey>> = {
  [K in keyof TType]: TValue extends TType[K] ? K : never;
}[keyof TType];
export type InvertKeyValue<TType extends Record<PropertyKey, PropertyKey>> = {
  [TValue in TType[keyof TType]]: KeyFromValue<TValue, TType>;
};

export type ValueOf<TObj> = TObj[keyof TObj];

// reference: https://www.jsonrpc.org/specification

/**
 * JSON-RPC 2.0 Error codes
 *
 * `-32000` to `-32099` are reserved for implementation-defined server-errors.
 * For tRPC we're copying the last digits of HTTP 4XX errors.
 */
export const ARX_ERROR_CODES_BY_KEY = {
  NO_INPUT: -32050,

  /* BELOW ARE TRPC ERROR CODES */
  /**
   * Invalid JSON was received by the server.
   * An error occurred on the server while parsing the JSON text.
   */
  PARSE_ERROR: -32700,
  /**
   * The JSON sent is not a valid Request object.
   */
  BAD_REQUEST: -32600, // 400

  // Internal JSON-RPC error
  INTERNAL_SERVER_ERROR: -32603, // 500
  NOT_IMPLEMENTED: -32603, // 501
  BAD_GATEWAY: -32603, // 502
  SERVICE_UNAVAILABLE: -32603, // 503
  GATEWAY_TIMEOUT: -32603, // 504

  // Implementation specific errors
  UNAUTHORIZED: -32001, // 401
  FORBIDDEN: -32003, // 403
  NOT_FOUND: -32004, // 404
  METHOD_NOT_SUPPORTED: -32005, // 405
  TIMEOUT: -32008, // 408
  CONFLICT: -32009, // 409
  PRECONDITION_FAILED: -32012, // 412
  PAYLOAD_TOO_LARGE: -32013, // 413
  UNSUPPORTED_MEDIA_TYPE: -32015, // 415
  UNPROCESSABLE_CONTENT: -32022, // 422
  TOO_MANY_REQUESTS: -32029, // 429
  CLIENT_CLOSED_REQUEST: -32099, // 499
} as const;

// pure
export const ARX_ERROR_CODES_BY_NUMBER: InvertKeyValue<typeof ARX_ERROR_CODES_BY_KEY> = {
  [-32050]: 'NO_INPUT',

  /* BELOW ARE TRPC ERROR CODES */
  [-32700]: 'PARSE_ERROR',
  [-32600]: 'BAD_REQUEST',
  [-32603]: 'INTERNAL_SERVER_ERROR',
  [-32001]: 'UNAUTHORIZED',
  [-32003]: 'FORBIDDEN',
  [-32004]: 'NOT_FOUND',
  [-32005]: 'METHOD_NOT_SUPPORTED',
  [-32008]: 'TIMEOUT',
  [-32009]: 'CONFLICT',
  [-32012]: 'PRECONDITION_FAILED',
  [-32013]: 'PAYLOAD_TOO_LARGE',
  [-32015]: 'UNSUPPORTED_MEDIA_TYPE',
  [-32022]: 'UNPROCESSABLE_CONTENT',
  [-32029]: 'TOO_MANY_REQUESTS',
  [-32099]: 'CLIENT_CLOSED_REQUEST',
};

export type ARX_ERROR_CODE_NUMBER = ValueOf<typeof ARX_ERROR_CODES_BY_KEY>;
export type ARX_ERROR_CODE_KEY = keyof typeof ARX_ERROR_CODES_BY_KEY;

export function isObject(value: unknown): value is Record<string, unknown> {
  return !!value && !Array.isArray(value) && typeof value === 'object';
}
class UnknownCauseError extends Error {
  [key: string]: unknown;
}
export function getCauseFromUnknown(cause: unknown): Error | undefined {
  if (cause instanceof Error) {
    return cause;
  }

  const type = typeof cause;
  if (type === 'undefined' || type === 'function' || cause === null) {
    return undefined;
  }

  // Primitive types just get wrapped in an error
  if (type !== 'object') {
    return new Error(String(cause));
  }

  // If it's an object, we'll create a synthetic error
  if (isObject(cause)) {
    const err = new UnknownCauseError();
    for (const key in cause) {
      err[key] = cause[key];
    }
    return err;
  }

  return undefined;
}
export class ARXError extends Error {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore override doesn't work in all environments due to "This member cannot have an 'override' modifier because it is not declared in the base class 'Error'"
  public override readonly cause?: Error;
  public readonly code;

  constructor(code: ARX_ERROR_CODE_KEY, message?: string, cause?: unknown) {
    const cause2 = getCauseFromUnknown(cause);
    const message2 = message ?? cause2?.message ?? code;

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore https://github.com/tc39/proposal-error-cause
    super(message2, { cause });

    this.code = code;
    this.name = 'ARXError';

    if (!this.cause) {
      // < ES2022 / < Node 16.9.0 compatability
      this.cause = cause2;
    }
  }
}

// /**
//  * Unprotected procedure
//  **/
// const isAcceptableOrigin = t.middleware(({ ctx: { user, acceptableOrigin }, next }) => {
//   if (!acceptableOrigin)
//     throw new TRPCError({
//       code: 'UNAUTHORIZED',
//       message: 'Please use the public API instead: https://docs.arken.gg',
//     });
//   return next({ ctx: { user, acceptableOrigin } });
// });

// export const enforceClientVersion = t.middleware(async ({ next, ctx }) => {
//   // if (await needsUpdate(ctx.req)) {
//   //   throw new TRPCError({
//   //     code: 'PRECONDITION_FAILED',
//   //     message: 'Update required',
//   //     cause: 'Please refresh your browser to get the latest version of the app',
//   //   });
//   // }
//   const result = await next();
//   //   if (await needsUpdate(ctx.req)) {
//   //     ctx.res?.setHeader('x-update-required', 'true');
//   //     ctx.cache.edgeTTL = 0;
//   //   }
//   return result;
// });

// export const publicProcedure = t.procedure.use(isAcceptableOrigin).use(enforceClientVersion);

// /**
//  * Protected procedure
//  **/
// export const protectedProcedure = publicProcedure.use(isAuthed);

// /**
//  * Moderator procedure
//  **/
// export const moderatorProcedure = protectedProcedure.use(isMod);

// /**
//  * Guarded procedure to prevent users from making actions
//  * based on muted/banned properties
//  */
// export const guardedProcedure = protectedProcedure.use(isMuted);

// /**
//  * Verified procedure to prevent users from making actions
//  * if they haven't completed the onboarding process
//  */
// export const verifiedProcedure = protectedProcedure.use(isOnboarded);
