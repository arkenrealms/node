import { z as zod } from 'zod';
import { initTRPC } from '@trpc/server';
import type { Context } from '../../types';
import { Service } from './chain.service';

export const z = zod;
export const t = initTRPC.context<Context>().create();
export const router = t.router;
export const procedure = t.procedure;

const chainService = new Service();

export const createRouter = () =>
  router({
    getChain: procedure.input(z.object({ chainId: z.string() })).query(async ({ input, ctx }) => {
      return chainService.getChain(input, ctx);
    }),

    addChainContract: procedure
      .input(
        z.object({
          chainId: z.string(),
          description: z.string().nonempty(),
          content: z.string().nonempty(),
          type: z.string().nonempty(),
          standard: z.string().nonempty(),
        })
      )
      .mutation(async ({ input, ctx }) => {
        return chainService.addChainContract(input, ctx);
      }),

    addChainToken: procedure
      .input(z.object({ chainId: z.string(), tokenData: z.object({}).passthrough() }))
      .mutation(async ({ input, ctx }) => {
        return chainService.addChainToken(input, ctx);
      }),

    addChainTransaction: procedure
      .input(z.object({ chainId: z.string(), value: z.string().nonempty() }))
      .mutation(async ({ input, ctx }) => {
        return chainService.addChainTransaction(input, ctx);
      }),
  });
