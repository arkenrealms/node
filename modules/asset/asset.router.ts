import { z as zod } from 'zod';
import { initTRPC, inferRouterInputs, inferRouterOutputs } from '@trpc/server';
import type { RouterContext } from '../../types';
import { Asset, AssetLicense } from './asset.schema';

export const z = zod;
export const t = initTRPC.context<RouterContext>().create();
export const router = t.router;
export const procedure = t.procedure;

export const createRouter = () =>
  router({
    getAsset: procedure
      .input(z.object({ assetId: z.string() }))
      .query(({ input, ctx }) => (ctx.app.service.Asset.getAsset as any)(input, ctx)),

    createAsset: procedure
      .input(Asset)
      .mutation(({ input, ctx }) => (ctx.app.service.Asset.createAsset as any)(input, ctx)),

    updateAsset: procedure
      .input(z.object({ assetId: z.string(), data: Asset.partial() }))
      .mutation(({ input, ctx }) => (ctx.app.service.Asset.updateAsset as any)(input, ctx)),

    getAssetLicense: procedure
      .input(z.object({ assetLicenseId: z.string() }))
      .query(({ input, ctx }) => (ctx.app.service.Asset.getAssetLicense as any)(input, ctx)),

    createAssetLicense: procedure
      .input(AssetLicense)
      .mutation(({ input, ctx }) => (ctx.app.service.Asset.createAssetLicense as any)(input, ctx)),

    updateAssetLicense: procedure
      .input(z.object({ assetLicenseId: z.string(), data: AssetLicense.partial() }))
      .mutation(({ input, ctx }) => (ctx.app.service.Asset.updateAssetLicense as any)(input, ctx)),
  });

export type Router = ReturnType<typeof createRouter>;
export type RouterInput = inferRouterInputs<Router>;
export type RouterOutput = inferRouterOutputs<Router>;
