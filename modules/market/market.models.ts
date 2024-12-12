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

export const MarketInvestor = mongo.createModel<Types.MarketInvestorDocument>('MarketInvestor', {
  name: { type: String, required: true },
  portfolios: { type: mongo.Schema.Types.ObjectId, required: true },
  totalPnL: { type: Number },
});

export const MarketInvestmentPortfolio = mongo.createModel<Types.MarketInvestmentPortfolioDocument>(
  'MarketInvestmentPortfolio',
  {
    name: { type: String, required: true },
    categoryGoals: [
      {
        category: { type: String, required: true },
        goalPercentage: { type: Number, required: true },
        currentPnL: { type: Number },
        historicalPnL: { type: Number },
      },
    ],
    investments: { type: mongo.Schema.Types.ObjectId, required: true },
    totalPnL: { type: Number },
  }
);

export const MarketInvestment = mongo.createModel<Types.MarketInvestmentDocument>('MarketInvestment', {
  type: { type: String, required: true },
  amount: { type: Number, required: true },
  category: { type: String, required: true },
  purchasePrice: { type: Number, required: true },
  currentValue: { type: Number, required: true },
  pnl: { type: Number, required: true },
  transactions: [
    {
      date: { type: Date, required: true },
      type: { type: String, required: true },
      price: { type: Number, required: true },
      quantity: { type: Number, required: true },
    },
  ],
  stock: { type: mongo.Schema.Types.ObjectId },
  chainToken: { type: mongo.Schema.Types.ObjectId },
});

export const MarketStock = mongo.createModel<Types.MarketStockDocument>('MarketStock', {
  ticker: { type: String, required: true },
  companyName: { type: String, required: true },
  companyId: { type: mongo.Schema.Types.ObjectId, required: true, ref: 'StockCompany' },
  currentPrice: { type: Number, required: true },
  marketCap: { type: Number },
  volume: { type: Number },
  currency: { type: String, required: true },
  AUM: { type: Number },
  quoteType: { type: String },
  dailyChange: { type: Number },
  dailyChangePercent: { type: Number },
});

export const MarketToken = mongo.createModel<Types.MarketTokenDocument>('MarketToken', {
  name: { type: String, required: true },
  symbol: { type: String, required: true },
  currentPrice: { type: Number, required: true },
});

export const MarketCompany = mongo.createModel<Types.MarketCompanyDocument>('MarketCompany', {
  name: { type: String, required: true },
  ticker: { type: String, required: true },
  country: { type: String, required: true },
  industry: { type: String, required: true },
  sector: { type: String, required: true },
  type: { type: String, required: true },
  issuedETFs: [{ type: mongo.Schema.Types.ObjectId, ref: 'MarketETF' }],
});

export const MarketETF = mongo.createModel<Types.MarketETFDocument>('ETF', {
  name: { type: String, required: true },
  ticker: { type: String, required: true },
  issuer: { type: mongo.Schema.Types.ObjectId, required: true },
  leverage: { type: Number, required: false },
});

export const MarketStockSentiment = mongo.createModel<Types.MarketStockSentimentDocument>('MarketStockSentiment', {
  ticker: { type: String, required: true },
  sentiment: {
    label: { type: String, required: true },
    score: { type: Number, required: true },
  },
  context: { type: String, required: true },
  confidence: { type: Number, required: true },
});
