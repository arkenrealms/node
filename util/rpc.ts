import { initTRPC, TRPCError } from '@trpc/server';
import { isValidRequest } from './web3';

export const customErrorFormatter = (t: any) =>
  t.middleware(async ({ ctx, next }) => {
    try {
      return await next();
    } catch (error) {
      if (error instanceof TRPCError) {
        return { status: 0, error: error.message };
      }
      return { status: 0, error: 'An unexpected error occurred' };
    }
  });

export const serialize = (object: any): string => {
  return JSON.stringify(object, (key, value) => {
    if (value instanceof Uint8Array) {
      return { _type: 'Uint8Array', data: Array.from(value) };
    }
    return value;
  });
};

export const deserialize = (string: string): any => {
  return JSON.parse(string, (key, value) => {
    if (value && value._type === 'Uint8Array') {
      return new Uint8Array(value.data);
    }
    return value;
  });
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
  t.middleware(async ({ input, ctx, next }) => {
    const { signature, data } = input;
    if (
      !(await isValidRequest(ctx.app.web3, { signature: { address: signature.address, hash: signature.hash, data } }))
    ) {
      return { status: 5, message: 'Invalid request' };
    }

    return next();
    // return next({
    //   rawInput: data,
    // });
  });

export const hasRole = (role: string | string[], t: any) =>
  t.middleware(async ({ input, ctx, next }) => {
    console.log('hasRole', role, ctx.client.roles);
    if (Array.isArray(role)) {
      const hasAnyRole = role.some((r) => ctx.client.roles.includes(r));
      if (!hasAnyRole) {
        return { status: 0, message: `Not authorized. Missing one of the required roles: ${role.join(',')}` };
      }
    } else {
      if (!ctx.client.roles.includes(role)) {
        return { status: 0, message: `Not authorized. Missing role: ${role}` };
      }
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

export const isFlagProtected = (flag: keyof FeatureAccess) =>
  middleware(({ ctx, next }) => {
    const features = getFeatureFlags(ctx);
    if (!features[flag]) throw new TRPCError({ code: 'FORBIDDEN' });

    return next();
  });
