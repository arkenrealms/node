import { z } from 'zod';
import * as schema from './market.schema';
import { Document, Model } from '../../util/mongo';

export type Market = z.infer<typeof schema.Market>;
export type MarketPair = z.infer<typeof schema.MarketPair>;

export type MarketDocument = Market & Document;
export type MarketPairDocument = MarketPair & Document;

export type Mappings = {
  Market: Model<MarketDocument>;
  MarketPair: Model<MarketPairDocument>;
};
