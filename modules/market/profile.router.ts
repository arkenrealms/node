import { z as zod } from 'zod';
import { initTRPC } from '@trpc/server';
import type { Context } from '../../types';
import { Service } from './market.service';

export const z = zod;
export const t = initTRPC.context<Context>().create();
export const router = t.router;
export const procedure = t.procedure;

const marketService = new Service();

export const createRouter = () =>
  router({
    getMarket: procedure.input(z.object({ marketId: z.string() })).query(async ({ input, ctx }) => {
      return marketService.getMarket(input, ctx);
    }),

    getMarketPair: procedure.input(z.object({ marketPairId: z.string() })).query(async ({ input, ctx }) => {
      return marketService.getMarketPair(input, ctx);
    }),

    createMarket: procedure.input(z.object({ value: z.string() })).mutation(async ({ input, ctx }) => {
      return marketService.createMarket(input, ctx);
    }),

    createMarketPair: procedure.input(z.object({ value: z.string() })).mutation(async ({ input, ctx }) => {
      return marketService.createMarketPair(input, ctx);
    }),

    updateMarket: procedure
      .input(z.object({ marketId: z.string(), data: z.object({ value: z.string().optional() }) }))
      .mutation(async ({ input, ctx }) => {
        return marketService.updateMarket(input, ctx);
      }),

    updateMarketPair: procedure
      .input(z.object({ marketPairId: z.string(), data: z.object({ value: z.string().optional() }) }))
      .mutation(async ({ input, ctx }) => {
        return marketService.updateMarketPair(input, ctx);
      }),
  });
