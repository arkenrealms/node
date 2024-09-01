import { z as zod } from 'zod';
import { initTRPC, inferRouterInputs, inferRouterOutputs } from '@trpc/server';
import type { RouterContext } from '../../types';
import { Chain, ChainContract, ChainToken, ChainTransaction } from './chain.schema';

export const z = zod;
export const t = initTRPC.context<RouterContext>().create();
export const router = t.router;
export const procedure = t.procedure;

export const createRouter = () =>
  router({
    getChain: procedure
      .input(z.object({ chainId: z.string() }))
      .query(({ input, ctx }) => (ctx.app.service.Chain.getChain as any)(input, ctx)),

    createChain: procedure
      .input(Chain)
      .mutation(({ input, ctx }) => (ctx.app.service.Chain.createChain as any)(input, ctx)),

    updateChain: procedure
      .input(z.object({ chainId: z.string(), data: Chain.partial() }))
      .mutation(({ input, ctx }) => (ctx.app.service.Chain.updateChain as any)(input, ctx)),

    getChainContract: procedure
      .input(z.object({ chainContractId: z.string() }))
      .query(({ input, ctx }) => (ctx.app.service.Chain.getChainContract as any)(input, ctx)),

    createChainContract: procedure
      .input(ChainContract)
      .mutation(({ input, ctx }) => (ctx.app.service.Chain.createChainContract as any)(input, ctx)),

    updateChainContract: procedure
      .input(z.object({ chainContractId: z.string(), data: ChainContract.partial() }))
      .mutation(({ input, ctx }) => (ctx.app.service.Chain.updateChainContract as any)(input, ctx)),

    getChainToken: procedure
      .input(z.object({ chainTokenId: z.string() }))
      .query(({ input, ctx }) => (ctx.app.service.Chain.getChainToken as any)(input, ctx)),

    createChainToken: procedure
      .input(ChainToken)
      .mutation(({ input, ctx }) => (ctx.app.service.Chain.createChainToken as any)(input, ctx)),

    updateChainToken: procedure
      .input(z.object({ chainTokenId: z.string(), data: ChainToken.partial() }))
      .mutation(({ input, ctx }) => (ctx.app.service.Chain.updateChainToken as any)(input, ctx)),

    getChainTransaction: procedure
      .input(z.object({ chainTransactionId: z.string() }))
      .query(({ input, ctx }) => (ctx.app.service.Chain.getChainTransaction as any)(input, ctx)),

    createChainTransaction: procedure
      .input(ChainTransaction)
      .mutation(({ input, ctx }) => (ctx.app.service.Chain.createChainTransaction as any)(input, ctx)),

    updateChainTransaction: procedure
      .input(z.object({ chainTransactionId: z.string(), data: ChainTransaction.partial() }))
      .mutation(({ input, ctx }) => (ctx.app.service.Chain.updateChainTransaction as any)(input, ctx)),
  });

export type Router = ReturnType<typeof createRouter>;
export type RouterInput = inferRouterInputs<Router>;
export type RouterOutput = inferRouterOutputs<Router>;
