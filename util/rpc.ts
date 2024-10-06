import { initTRPC, TRPCError } from '@trpc/server';
import { isValidRequest } from './web3';

export const customErrorFormatter = (t: any) =>
  t.middleware(async ({ ctx, next }) => {
    try {
      return await next();
    } catch (error) {
      if (error instanceof TRPCError) {
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
      return value.map(processValue);
    }
    if (value && typeof value === 'object') {
      return Object.fromEntries(Object.entries(value).map(([k, v]) => [k, processValue(v)]));
    }
    // Default behavior for other types
    return value;
  };

  const processedObject = processValue(object);
  return JSON.stringify(processedObject);
};

export const deserialize = (jsonString) => {
  const processValue = (value) => {
    if (value && typeof value === 'object') {
      if (value._type) {
        switch (value._type) {
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
    } else {
      // Return the value as is for primitives (string, number, boolean, null)
      return value;
    }
  };

  const parsedObject = JSON.parse(jsonString);
  return processValue(parsedObject);
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
      throw new TRPCError({
        code: 'INTERNAL_SERVER_ERROR',
        message: 'App web3 not set.',
      });
    }

    if (!input) {
      throw new TRPCError({
        code: 'BAD_REQUEST',
        message: 'No input provided',
      });
    }

    const { signature, data } = input;

    // Validate presence of signature and data
    if (!signature || !data) {
      throw new TRPCError({
        code: 'BAD_REQUEST',
        message: 'Missing signature or data',
      });
    }

    const isValid = await isValidRequest(ctx.app.web3, {
      signature: {
        address: signature.address,
        hash: signature.hash,
        data,
      },
    });

    console.log('isValid', isValid);

    if (!isValid) {
      throw new TRPCError({
        code: 'BAD_REQUEST',
        message: 'Invalid request',
      });
    }

    return next();
  });

export const hasRole = (role: string | string[], t: any) =>
  t.middleware(async ({ input, ctx, next }) => {
    console.log('hasRole', role, ctx.client?.roles);
    if (ctx.client?.roles?.length > 0) {
      if (Array.isArray(role)) {
        const hasAnyRole = role.some((r) => ctx.client.roles.includes(r));
        if (!hasAnyRole) {
          return { status: 0, message: `Not authorized. Missing one of the required roles: ${role.join(',')}` };
        }
      } else if (ctx.client.roles.includes(role)) {
        return { status: 0, message: `Not authorized. Missing role: ${role}` };
      }
    } else {
      return { status: 0, message: `Not authorized. Missing role: ${role}` };
    }

    return next();
  });

export const validateSeer = (t: any) =>
  t.middleware(async ({ input, ctx, next }) => {
    console.log('validateSeer', input);
    if (!ctx.client.isSeer) {
      return { status: 0, message: 'Not authorized' };
    }
    return next();
  });

/**
 * Reusable middleware to ensure
 * users are logged in
 */
const isAuthed = (t: any) =>
  t.middleware(({ ctx: { user, acceptableOrigin }, next }) => {
    if (!user) throw new TRPCError({ code: 'UNAUTHORIZED' });
    if (user.bannedAt)
      throw new TRPCError({
        code: 'FORBIDDEN',
        message: 'You cannot perform this action because your account has been banned',
      });
    return next({ ctx: { user, acceptableOrigin } });
  });

const isMuted = (t: any) =>
  t.middleware(async ({ ctx, next }) => {
    const { user } = ctx;
    if (!user) throw new TRPCError({ code: 'UNAUTHORIZED' });
    if (user.muted)
      throw new TRPCError({
        code: 'FORBIDDEN',
        message: 'You cannot perform this action because your account has been restricted',
      });

    return next({
      ctx: {
        ...ctx,
        user,
      },
    });
  });

const isMod = (t: any) =>
  t.middleware(({ ctx: { user, acceptableOrigin }, next }) => {
    if (!user) throw new TRPCError({ code: 'UNAUTHORIZED' });
    if (!user.isModerator)
      throw new TRPCError({
        code: 'FORBIDDEN',
        message: 'You do not have permission to perform this action',
      });
    return next({ ctx: { user, acceptableOrigin } });
  });

const isOnboarded = (t: any) =>
  t.middleware(({ ctx, next }) => {
    const { user } = ctx;
    //   if (!user) throw new TRPCError({ code: 'UNAUTHORIZED' });
    //   if (!Flags.hasFlag(user.onboarding, 'TOS')) {
    //     throw new TRPCError({
    //       code: 'FORBIDDEN',
    //       message: 'You must accept our terms of service before performing this action',
    //     });
    //   }
    return next({ ctx: { ...ctx, user } });
  });

// export const isFlagProtected = (flag: keyof FeatureAccess) =>
//   t.middleware(({ ctx, next }) => {
//     const features = getFeatureFlags(ctx);
//     if (!features[flag]) throw new TRPCError({ code: 'FORBIDDEN' });

//     return next();
//   });
