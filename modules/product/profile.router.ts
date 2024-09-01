import { z as zod } from 'zod';
import { initTRPC } from '@trpc/server';
import type { Context } from '../../types';
import { Service } from './product.service';

export const z = zod;
export const t = initTRPC.context<Context>().create();
export const router = t.router;
export const procedure = t.procedure;

const productService = new Service();

export const createRouter = () =>
  router({
    getProduct: procedure.input(z.object({ productId: z.string() })).query(async ({ input, ctx }) => {
      return productService.getProduct(input, ctx);
    }),

    addProductUpdate: procedure
      .input(
        z.object({ productId: z.string(), updateData: z.object({ updateContent: z.string(), updateDate: z.date() }) })
      )
      .mutation(async ({ input, ctx }) => {
        return productService.addProductUpdate(input, ctx);
      }),

    updateProduct: procedure
      .input(
        z.object({
          productId: z.string(),
          data: z.object({
            shortDescription: z.string().optional(),
            content: z.string().optional(),
            type: z.string().optional(),
            releaseDate: z.date().optional(),
          }),
        })
      )
      .mutation(async ({ input, ctx }) => {
        return productService.updateProduct(input, ctx);
      }),
  });
