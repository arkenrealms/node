import type { Context } from '../../types';
import type { Asset, AssetLicense } from './asset.types';

export class Service {
  async getAsset({ assetId }: { assetId: string }, ctx: Context) {
    console.log('Asset.Service.getAsset', assetId);
    const asset = await ctx.app.model.Asset.findById(assetId).lean().exec();
    if (!asset) {
      throw new Error('Asset not found');
    }
    return asset as Asset;
  }

  async getAssetLicense({ assetLicenseId }: { assetLicenseId: string }, ctx: Context) {
    console.log('Asset.Service.getAssetLicense', assetLicenseId);
    const assetLicense = await ctx.app.model.AssetLicense.findById(assetLicenseId).lean().exec();
    if (!assetLicense) {
      throw new Error('AssetLicense not found');
    }
    return assetLicense as AssetLicense;
  }

  async createAsset(
    {
      uri,
      type,
      standard,
      licenseId,
      chainId,
    }: { uri: string; type: string; standard: string; licenseId?: string; chainId?: string },
    ctx: Context
  ) {
    console.log('Asset.Service.createAsset', uri, type, standard);
    const asset = await ctx.app.model.Asset.create({ uri, type, standard, licenseId, chainId });
    return asset as Asset;
  }

  async createAssetLicense({ value }: { value: string }, ctx: Context) {
    console.log('Asset.Service.createAssetLicense', value);
    const assetLicense = await ctx.app.model.AssetLicense.create({ value });
    return assetLicense as AssetLicense;
  }

  async updateAsset({ assetId, data }: { assetId: string; data: Partial<Asset> }, ctx: Context) {
    console.log('Asset.Service.updateAsset', assetId, data);
    const updatedAsset = await ctx.app.model.Asset.findByIdAndUpdate(assetId, data, { new: true }).lean().exec();
    if (!updatedAsset) {
      throw new Error('Asset update failed');
    }
    return updatedAsset as Asset;
  }

  async updateAssetLicense(
    { assetLicenseId, data }: { assetLicenseId: string; data: Partial<AssetLicense> },
    ctx: Context
  ) {
    console.log('Asset.Service.updateAssetLicense', assetLicenseId, data);
    const updatedAssetLicense = await ctx.app.model.AssetLicense.findByIdAndUpdate(assetLicenseId, data, { new: true })
      .lean()
      .exec();
    if (!updatedAssetLicense) {
      throw new Error('AssetLicense update failed');
    }
    return updatedAssetLicense as AssetLicense;
  }
}
