// module/chain.router.ts

import { z as zod } from 'zod';
import { initTRPC, inferRouterInputs, inferRouterOutputs } from '@trpc/server';
import { customErrorFormatter, hasRole } from '../../util/rpc';
import type { RouterContext } from '../../types';
import { Chain, ChainContract, ChainToken, ChainTransaction } from './chain.schema';

export const z = zod;
export const t = initTRPC.context<RouterContext>().create();
export const router = t.router;
export const procedure = t.procedure;

export const createRouter = () =>
  router({
    getChain: procedure
      .use(hasRole('guest', t))
      .use(customErrorFormatter(t))
      .input(z.object({ chainId: z.string() }))
      .query(({ input, ctx }) => (ctx.app.service.Chain.getChain as any)(input, ctx)),

    createChain: procedure
      .use(hasRole('admin', t))
      .use(customErrorFormatter(t))
      .input(Chain)
      .mutation(({ input, ctx }) => (ctx.app.service.Chain.createChain as any)(input, ctx)),

    updateChain: procedure
      .use(hasRole('admin', t))
      .use(customErrorFormatter(t))
      .input(z.object({ chainId: z.string(), data: Chain.partial() }))
      .mutation(({ input, ctx }) => (ctx.app.service.Chain.updateChain as any)(input, ctx)),

    getChainContract: procedure
      .use(hasRole('guest', t))
      .use(customErrorFormatter(t))
      .input(z.object({ chainContractId: z.string() }))
      .query(({ input, ctx }) => (ctx.app.service.Chain.getChainContract as any)(input, ctx)),

    createChainContract: procedure
      .use(hasRole('admin', t))
      .use(customErrorFormatter(t))
      .input(ChainContract)
      .mutation(({ input, ctx }) => (ctx.app.service.Chain.createChainContract as any)(input, ctx)),

    updateChainContract: procedure
      .use(hasRole('admin', t))
      .use(customErrorFormatter(t))
      .input(z.object({ chainContractId: z.string(), data: ChainContract.partial() }))
      .mutation(({ input, ctx }) => (ctx.app.service.Chain.updateChainContract as any)(input, ctx)),

    getChainToken: procedure
      .use(hasRole('guest', t))
      .use(customErrorFormatter(t))
      .input(z.object({ chainTokenId: z.string() }))
      .query(({ input, ctx }) => (ctx.app.service.Chain.getChainToken as any)(input, ctx)),

    createChainToken: procedure
      .use(hasRole('admin', t))
      .use(customErrorFormatter(t))
      .input(ChainToken)
      .mutation(({ input, ctx }) => (ctx.app.service.Chain.createChainToken as any)(input, ctx)),

    updateChainToken: procedure
      .use(hasRole('admin', t))
      .use(customErrorFormatter(t))
      .input(z.object({ chainTokenId: z.string(), data: ChainToken.partial() }))
      .mutation(({ input, ctx }) => (ctx.app.service.Chain.updateChainToken as any)(input, ctx)),

    getChainTransaction: procedure
      .use(hasRole('guest', t))
      .use(customErrorFormatter(t))
      .input(z.object({ chainTransactionId: z.string() }))
      .query(({ input, ctx }) => (ctx.app.service.Chain.getChainTransaction as any)(input, ctx)),

    createChainTransaction: procedure
      .use(hasRole('admin', t))
      .use(customErrorFormatter(t))
      .input(ChainTransaction)
      .mutation(({ input, ctx }) => (ctx.app.service.Chain.createChainTransaction as any)(input, ctx)),

    updateChainTransaction: procedure
      .use(hasRole('admin', t))
      .use(customErrorFormatter(t))
      .input(z.object({ chainTransactionId: z.string(), data: ChainTransaction.partial() }))
      .mutation(({ input, ctx }) => (ctx.app.service.Chain.updateChainTransaction as any)(input, ctx)),
  });

export type Router = ReturnType<typeof createRouter>;
export type RouterInput = inferRouterInputs<Router>;
export type RouterOutput = inferRouterOutputs<Router>;
