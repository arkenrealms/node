import { z as zod } from 'zod';
import { initTRPC } from '@trpc/server';
import type { Context } from '../../types';
import { Service } from './collection.service';

export const z = zod;
export const t = initTRPC.context<Context>().create();
export const router = t.router;
export const procedure = t.procedure;

const collectionService = new Service();

export const createRouter = () =>
  router({
    getCollectibleCollection: procedure.input(z.object({ collectionId: z.string() })).query(async ({ input, ctx }) => {
      return collectionService.getCollectibleCollection(input, ctx);
    }),

    addCollectibleCardBox: procedure
      .input(z.object({ collectionId: z.string(), franchise: z.string().min(1) }))
      .mutation(async ({ input, ctx }) => {
        return collectionService.addCollectibleCardBox(input, ctx);
      }),

    addCollectibleCardPack: procedure
      .input(z.object({ collectionId: z.string(), franchise: z.string().min(1), cardData: z.object({}).passthrough() }))
      .mutation(async ({ input, ctx }) => {
        return collectionService.addCollectibleCardPack(input, ctx);
      }),

    addCollectibleCard: procedure
      .input(z.object({ collectionId: z.string(), franchise: z.string().min(1), cardData: z.object({}).passthrough() }))
      .mutation(async ({ input, ctx }) => {
        return collectionService.addCollectibleCard(input, ctx);
      }),
  });
