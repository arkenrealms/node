import { z as zod } from 'zod';
import { initTRPC, inferRouterInputs, inferRouterOutputs } from '@trpc/server';
import { customErrorFormatter, hasRole } from '../../util/rpc';
import type { RouterContext } from '../../types';
import { Profile } from './profile.schema';

export const z = zod;
export const t = initTRPC.context<RouterContext>().create();
export const router = t.router;
export const procedure = t.procedure;

export const createRouter = () =>
  router({
    // Profile endpoints
    getProfile: procedure
      .use(hasRole('guest', t))
      .use(customErrorFormatter(t))
      .input(z.object({ userId: z.string() }))
      .query(({ input, ctx }) => (ctx.app.service.Profile.getProfile as any)(input, ctx)),

    createProfile: procedure
      .use(hasRole('user', t))
      .use(customErrorFormatter(t))
      .input(Profile)
      .mutation(({ input, ctx }) => (ctx.app.service.Profile.createProfile as any)(input, ctx)),

    updateProfile: procedure
      .use(hasRole('user', t))
      .use(customErrorFormatter(t))
      .input(z.object({ userId: z.string(), data: Profile.partial() }))
      .mutation(({ input, ctx }) => (ctx.app.service.Profile.updateProfile as any)(input, ctx)),

    getProfileStats: procedure
      .use(hasRole('guest', t))
      .use(customErrorFormatter(t))
      .input(z.object({ userId: z.string() }))
      .query(({ input, ctx }) => (ctx.app.service.Profile.getProfileStats as any)(input, ctx)),

    updateProfileSettings: procedure
      .use(hasRole('user', t))
      .use(customErrorFormatter(t))
      .input(z.object({ userId: z.string(), settings: Profile.shape.settings }))
      .mutation(({ input, ctx }) => (ctx.app.service.Profile.updateProfileSettings as any)(input, ctx)),
  });

export type Router = ReturnType<typeof createRouter>;
export type RouterInput = inferRouterInputs<Router>;
export type RouterOutput = inferRouterOutputs<Router>;
