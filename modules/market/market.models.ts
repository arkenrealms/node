import * as mongo from '../../util/mongo';
import type * as Types from './market.types';

export const Market = mongo.createModel<Types.MarketDocument>('Market', {
  value: { type: String, required: true },
});

export const MarketPair = mongo.createModel<Types.MarketPairDocument>('MarketPair', {
  value: { type: String, required: true },
});

export const MarketExchange = mongo.createModel<Types.MarketExchangeDocument>('MarketExchange', {
  value: { type: String },
});

export const MarketAnalysis = mongo.createModel<Types.MarketAnalysisDocument>('MarketAnalysis', {
  action: { type: String, required: true },
  asset: { type: String, required: true },
  signalType: { type: String, required: true },
  confidence: { type: Number, required: true },
  riskLevel: { type: String, required: true },
  timeFrame: { type: String, required: true },
  source: { type: String, required: true },
  summary: { type: String, required: true },
  labels: {
    sector: { type: String },
    topic: { type: String },
    sentiment: { type: String },
  },
});
