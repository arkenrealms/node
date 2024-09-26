import { z as zod } from 'zod';
import { initTRPC, inferRouterInputs } from '@trpc/server';
import { customErrorFormatter, hasRole } from '../../util/rpc';
import type { RouterContext } from '../../types';
import { Era, Game } from './game.schema';
import { Query, getQueryInput, inferRouterOutputs } from '../../schema';

export const z = zod;
export const t = initTRPC.context<RouterContext>().create();
export const router = t.router;
export const procedure = t.procedure;

export const createRouter = () =>
  router({
    getGames: procedure
      .use(hasRole('guest', t))
      .use(customErrorFormatter(t))
      .input(getQueryInput(Game))
      .output(z.object({ data: z.array(Game) }))
      .query(({ input, ctx }) => (ctx.app.service.Game.getGames as any)(input, ctx)),

    // Era Procedures
    getEras: procedure
      .use(hasRole('guest', t))
      .use(customErrorFormatter(t))
      .input(getQueryInput(Era))
      .output(z.object({ data: z.array(Era) }))
      .query(({ input, ctx }) => (ctx.app.service.Game.getEras as any)(input, ctx)),

    createEra: procedure
      .use(hasRole('admin', t))
      .use(customErrorFormatter(t))
      .input(getQueryInput(Era.omit({ id: true })))
      .mutation(({ input, ctx }) => (ctx.app.service.Game.createEra as any)(input, ctx)),

    updateEra: procedure
      .use(hasRole('admin', t))
      .use(customErrorFormatter(t))
      .input(getQueryInput(Era.partial()))
      .mutation(({ input, ctx }) => (ctx.app.service.Game.updateEra as any)(input, ctx)),

    deleteEra: procedure
      .use(hasRole('admin', t))
      .use(customErrorFormatter(t))
      .input(getQueryInput(Era.partial()))
      .mutation(({ input, ctx }) => (ctx.app.service.Game.deleteEra as any)(input, ctx)),
  });

export type Router = ReturnType<typeof createRouter>;
export type RouterInput = inferRouterInputs<Router>;
export type RouterOutput = inferRouterOutputs<Router>;
