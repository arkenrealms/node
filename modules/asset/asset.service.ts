import type { Asset, AssetLicense, Router, RouterInput, RouterOutput, RouterContext } from './asset.types';

export class Service {
  async getAsset(input: RouterInput['getAsset'], ctx: RouterContext): Promise<RouterOutput['getAsset']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Asset.Service.getAsset', input.assetId);

    const asset = await ctx.app.model.Asset.findById(input.assetId).lean().exec();
    if (!asset) throw new Error('Asset not found');

    return asset as Asset;
  }

  async getAssetLicense(
    input: RouterInput['getAssetLicense'],
    ctx: RouterContext
  ): Promise<RouterOutput['getAssetLicense']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Asset.Service.getAssetLicense', input.assetLicenseId);

    const assetLicense = await ctx.app.model.AssetLicense.findById(input.assetLicenseId).lean().exec();
    if (!assetLicense) throw new Error('AssetLicense not found');

    return assetLicense as AssetLicense;
  }

  async createAsset(input: RouterInput['createAsset'], ctx: RouterContext): Promise<RouterOutput['createAsset']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Asset.Service.createAsset', input.uri, input.type);

    const asset = await ctx.app.model.Asset.create({
      uri: input.uri,
      type: input.type,
      standard: input.standard,
      licenseId: input.licenseId,
      chainId: input.chainId,
    });

    return asset as Asset;
  }

  async createAssetLicense(
    input: RouterInput['createAssetLicense'],
    ctx: RouterContext
  ): Promise<RouterOutput['createAssetLicense']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Asset.Service.createAssetLicense', input.value);

    const assetLicense = await ctx.app.model.AssetLicense.create({
      value: input.value,
      assets: input.assets,
    });

    return assetLicense as AssetLicense;
  }

  async updateAsset(input: RouterInput['updateAsset'], ctx: RouterContext): Promise<RouterOutput['updateAsset']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Asset.Service.updateAsset', input.assetId, input.data);

    const updatedAsset = await ctx.app.model.Asset.findByIdAndUpdate(input.assetId, input.data, { new: true })
      .lean()
      .exec();
    if (!updatedAsset) throw new Error('Asset update failed');

    return updatedAsset as Asset;
  }

  async updateAssetLicense(
    input: RouterInput['updateAssetLicense'],
    ctx: RouterContext
  ): Promise<RouterOutput['updateAssetLicense']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Asset.Service.updateAssetLicense', input.assetLicenseId, input.data);

    const updatedAssetLicense = await ctx.app.model.AssetLicense.findByIdAndUpdate(input.assetLicenseId, input.data, {
      new: true,
    })
      .lean()
      .exec();
    if (!updatedAssetLicense) throw new Error('AssetLicense update failed');

    return updatedAssetLicense as AssetLicense;
  }
}
