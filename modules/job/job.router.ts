import { z as zod } from 'zod';
import { initTRPC, TRPCError } from '@trpc/server';
import type { Context } from '../../types';

export const z = zod;
export const t = initTRPC.context<Context>().create();
export const router = t.router;
export const procedure = t.procedure;
export const createCallerFactory = t.createCallerFactory;

export const createRouter = (service: any) =>
  router({
    updateMetrics: procedure.mutation(async ({ ctx }: any) => {
      return service.updateMetrics(ctx);
    }),
  });

// export const router: ReturnType<typeof Service.createRouter>;
