import { z as zod } from 'zod';
import { initTRPC, inferRouterInputs, inferRouterOutputs } from '@trpc/server';
import { customErrorFormatter, hasRole } from '../../util/rpc';
import type { RouterContext } from '../../types';
import { Era } from './game.schema';

export const z = zod;
export const t = initTRPC.context<RouterContext>().create();
export const router = t.router;
export const procedure = t.procedure;

export const createRouter = () =>
  router({
    // Era Procedures
    getEras: procedure
      .use(hasRole('guest', t))
      .use(customErrorFormatter(t))
      .input(z.object({}))
      .output(z.object({ data: z.array(Era) }))
      .query(({ input, ctx }) => (ctx.app.service.Game.getEras as any)(input, ctx)),

    createEra: procedure
      .use(hasRole('realm', t))
      .use(customErrorFormatter(t))
      .input(Era.omit({ id: true }))
      .mutation(({ input, ctx }) => (ctx.app.service.Game.createEra as any)(input, ctx)),

    updateEra: procedure
      .use(hasRole('realm', t))
      .use(customErrorFormatter(t))
      .input(Era.pick({ id: true, data: true }))
      .mutation(({ input, ctx }) => (ctx.app.service.Game.updateEra as any)(input, ctx)),

    deleteEra: procedure
      .use(hasRole('realm', t))
      .use(customErrorFormatter(t))
      .input(Era.pick({ id: true }))
      .mutation(({ input, ctx }) => (ctx.app.service.Game.deleteEra as any)(input, ctx)),
  });

export type Router = ReturnType<typeof createRouter>;
export type RouterInput = inferRouterInputs<Router>;
export type RouterOutput = inferRouterOutputs<Router>;
