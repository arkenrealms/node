import { z as zod } from 'zod';
import { initTRPC } from '@trpc/server';
import type { Context } from '../../types';
import { Service } from './asset.service';

export const z = zod;
export const t = initTRPC.context<Context>().create();
export const router = t.router;
export const procedure = t.procedure;

const assetService = new Service();

export const createRouter = () =>
  router({
    getAsset: procedure.input(z.object({ assetId: z.string() })).query(async ({ input, ctx }) => {
      return assetService.getAsset(input, ctx);
    }),

    getAssetLicense: procedure.input(z.object({ assetLicenseId: z.string() })).query(async ({ input, ctx }) => {
      return assetService.getAssetLicense(input, ctx);
    }),

    createAsset: procedure
      .input(
        z.object({
          uri: z.string(),
          type: z.string().max(100),
          standard: z.string().max(100),
          licenseId: z.string().optional(),
          chainId: z.string().optional(),
        })
      )
      .mutation(async ({ input, ctx }) => {
        return assetService.createAsset(input, ctx);
      }),

    createAssetLicense: procedure.input(z.object({ value: z.string() })).mutation(async ({ input, ctx }) => {
      return assetService.createAssetLicense(input, ctx);
    }),

    updateAsset: procedure
      .input(
        z.object({
          assetId: z.string(),
          data: z.object({
            uri: z.string().optional(),
            type: z.string().optional(),
            standard: z.string().optional(),
            licenseId: z.string().optional(),
            chainId: z.string().optional(),
          }),
        })
      )
      .mutation(async ({ input, ctx }) => {
        return assetService.updateAsset(input, ctx);
      }),

    updateAssetLicense: procedure
      .input(z.object({ assetLicenseId: z.string(), data: z.object({ value: z.string().optional() }) }))
      .mutation(async ({ input, ctx }) => {
        return assetService.updateAssetLicense(input, ctx);
      }),
  });
