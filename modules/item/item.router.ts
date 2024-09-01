// module/item.router.ts

import { z as zod } from 'zod';
import { initTRPC, inferRouterInputs, inferRouterOutputs } from '@trpc/server';
import { customErrorFormatter, hasRole } from '../../util/rpc';
import type { RouterContext } from '../../types';
import {
  Item,
  ItemAttribute,
  ItemMaterial,
  ItemSet,
  ItemSlot,
  ItemRarity,
  ItemType,
  ItemSubType,
  ItemSpecificType,
  ItemAffix,
  ItemRecipe,
  ItemSkin,
  ItemTransmute,
} from './item.schema';

export const z = zod;
export const t = initTRPC.context<RouterContext>().create();
export const router = t.router;
export const procedure = t.procedure;

export const createRouter = () =>
  router({
    getItem: procedure
      .use(hasRole('guest', t))
      .use(customErrorFormatter(t))
      .input(z.object({ itemId: z.string() }))
      .query(({ input, ctx }) => (ctx.app.service.Item.getItem as any)(input, ctx)),

    createItem: procedure
      .use(hasRole('realm', t))
      .use(customErrorFormatter(t))
      .input(Item)
      .mutation(({ input, ctx }) => (ctx.app.service.Item.createItem as any)(input, ctx)),

    updateItem: procedure
      .use(hasRole('realm', t))
      .use(customErrorFormatter(t))
      .input(z.object({ itemId: z.string(), data: Item.partial() }))
      .mutation(({ input, ctx }) => (ctx.app.service.Item.updateItem as any)(input, ctx)),

    getItemAttribute: procedure
      .use(hasRole('guest', t))
      .use(customErrorFormatter(t))
      .input(z.object({ itemAttributeId: z.string() }))
      .query(({ input, ctx }) => (ctx.app.service.Item.getItemAttribute as any)(input, ctx)),

    createItemAttribute: procedure
      .use(hasRole('realm', t))
      .use(customErrorFormatter(t))
      .input(ItemAttribute)
      .mutation(({ input, ctx }) => (ctx.app.service.Item.createItemAttribute as any)(input, ctx)),

    updateItemAttribute: procedure
      .use(hasRole('realm', t))
      .use(customErrorFormatter(t))
      .input(z.object({ itemAttributeId: z.string(), data: ItemAttribute.partial() }))
      .mutation(({ input, ctx }) => (ctx.app.service.Item.updateItemAttribute as any)(input, ctx)),

    // Add more procedures for other entities like ItemMaterial, ItemSet, ItemSlot, ItemRarity, etc.

    getItemTransmute: procedure
      .use(hasRole('guest', t))
      .use(customErrorFormatter(t))
      .input(z.object({ itemTransmuteId: z.string() }))
      .query(({ input, ctx }) => (ctx.app.service.Item.getItemTransmute as any)(input, ctx)),

    createItemTransmute: procedure
      .use(hasRole('realm', t))
      .use(customErrorFormatter(t))
      .input(ItemTransmute)
      .mutation(({ input, ctx }) => (ctx.app.service.Item.createItemTransmute as any)(input, ctx)),

    updateItemTransmute: procedure
      .use(hasRole('realm', t))
      .use(customErrorFormatter(t))
      .input(z.object({ itemTransmuteId: z.string(), data: ItemTransmute.partial() }))
      .mutation(({ input, ctx }) => (ctx.app.service.Item.updateItemTransmute as any)(input, ctx)),
  });

export type Router = ReturnType<typeof createRouter>;
export type RouterInput = inferRouterInputs<Router>;
export type RouterOutput = inferRouterOutputs<Router>;
