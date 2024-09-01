import * as mongo from '../../util/mongo';
import type * as Types from './market.types';

// Market

export const MarketSchema = mongo.createSchema<Types.MarketDocument>('Market', {
  value: { type: String, required: true },
});

export const Market = mongo.createModel<Types.MarketDocument>('Market', MarketSchema);

// MarketPair

export const MarketPairSchema = mongo.createSchema<Types.MarketPairDocument>('MarketPair', {
  value: { type: String, required: true },
});

export const MarketPair = mongo.createModel<Types.MarketPairDocument>('MarketPair', MarketPairSchema);
