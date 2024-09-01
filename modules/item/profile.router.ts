import { z as zod } from 'zod';
import { initTRPC } from '@trpc/server';
import type { Context } from '../../types';
import { Service } from './item.service';

export const z = zod;
export const t = initTRPC.context<Context>().create();
export const router = t.router;
export const procedure = t.procedure;

const itemService = new Service();

export const createRouter = () =>
  router({
    getItem: procedure.input(z.object({ itemId: z.string() })).query(async ({ input, ctx }) => {
      return itemService.getItem(input, ctx);
    }),

    addItemAttribute: procedure
      .input(z.object({ itemId: z.string(), attributeData: z.object({}).passthrough() }))
      .mutation(async ({ input, ctx }) => {
        return itemService.addItemAttribute(input, ctx);
      }),

    addItemMaterial: procedure
      .input(z.object({ itemId: z.string(), materialData: z.object({}).passthrough() }))
      .mutation(async ({ input, ctx }) => {
        return itemService.addItemMaterial(input, ctx);
      }),

    addItemTransmute: procedure
      .input(z.object({ itemId: z.string(), transmuteData: z.object({}).passthrough() }))
      .mutation(async ({ input, ctx }) => {
        return itemService.addItemTransmute(input, ctx);
      }),

    updateItem: procedure
      .input(z.object({ itemId: z.string(), data: z.object({}).passthrough() }))
      .mutation(async ({ input, ctx }) => {
        return itemService.updateItem(input, ctx);
      }),
  });
