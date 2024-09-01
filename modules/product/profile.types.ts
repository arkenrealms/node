import { z } from 'zod';
import * as schema from './product.schema';
import { Document, Model } from '../../util/mongo';

export type Product = z.infer<typeof schema.Product>;
export type ProductUpdate = z.infer<typeof schema.ProductUpdate>;

export type ProductDocument = Product & Document;
export type ProductUpdateDocument = ProductUpdate & Document;

export type Mappings = {
  Product: Model<ProductDocument>;
  ProductUpdate: Model<ProductUpdateDocument>;
};
