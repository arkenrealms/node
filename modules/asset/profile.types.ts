import { z } from 'zod';
import * as schema from './asset.schema';
import { Document, Model } from '../../util/mongo';

export type Asset = z.infer<typeof schema.Asset>;
export type AssetLicense = z.infer<typeof schema.AssetLicense>;

export type AssetDocument = Asset & Document;
export type AssetLicenseDocument = AssetLicense & Document;

export type Mappings = {
  Asset: Model<AssetDocument>;
  AssetLicense: Model<AssetLicenseDocument>;
};
