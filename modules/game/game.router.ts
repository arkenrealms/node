import { z as zod } from 'zod';
import { initTRPC, TRPCError } from '@trpc/server';
import type { Context } from '../../types';
import { Era } from './game.schema';
import type { Service } from './game.service';

export const z = zod;
export const t = initTRPC.context<Context>().create();
export const router = t.router;
export const procedure = t.procedure;
export const createCallerFactory = t.createCallerFactory;

// export const router: ReturnType<typeof Service.createRouter>;
export const createRouter = (service: Service) =>
  router({
    eras: procedure.output(z.object({ data: z.array(Era) })).query(({ input, ctx }) => {
      return service.eras(ctx);
    }),
  });
