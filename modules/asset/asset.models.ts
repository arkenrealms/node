import * as mongo from '../../util/mongo';
import type * as Types from './asset.types';

export const Asset = mongo.createModel<Types.AssetDocument>(
  'Asset',
  {
    uri: { type: String, required: true },
    type: { type: String, maxlength: 100, required: true },
    standard: { type: String, maxlength: 100, required: true },
    licenseId: { type: mongo.Schema.Types.ObjectId, ref: 'AssetLicense' },
    license: { type: mongo.Schema.Types.ObjectId, ref: 'AssetLicense' },
    chainId: { type: mongo.Schema.Types.ObjectId, ref: 'Chain' },
    // items: [{ type: mongo.Schema.Types.ObjectId, ref: 'Item' }],
  },
  {
    virtuals: [
      {
        name: 'items',
        options: {
          ref: 'Item',
          localField: '_id',
          foreignField: 'assetId',
        },
      },
    ],
  }
);

export const AssetLicense = mongo.createModel<Types.AssetLicenseDocument>('AssetLicense', {
  value: { type: String, required: true },
  // assets: [{ type: mongo.Schema.Types.ObjectId, ref: 'Asset' }],
});
