import * as mongo from '../../util/mongo';
import type * as Types from './market.types';

export const Market = mongo.createModel<Types.MarketDocument>('Market', {
  value: { type: String, required: true },
});

export const MarketPair = mongo.createModel<Types.MarketPairDocument>('MarketPair', {
  value: { type: String, required: true },
});
