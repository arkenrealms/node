import { z as zod } from 'zod';
import { initTRPC, TRPCError } from '@trpc/server';
import type { Context } from '../../types';

export const z = zod;
export const t = initTRPC.context<Context>().create();
export const router = t.router;
export const procedure = t.procedure;

export const createRouter = () =>
  router({
    getProfile: procedure.input(z.object({ profileId: z.string() })).query(async ({ input, ctx }) => {
      return ctx.app.service.Profile.getProfile(input, ctx);
    }),

    updateProfile: procedure
      .input(z.object({ profileId: z.string(), data: z.object({}).passthrough() }))
      .mutation(async ({ input, ctx }) => {
        return ctx.app.service.Profile.updateProfile(input, ctx);
      }),
  });
