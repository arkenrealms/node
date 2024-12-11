// module/market.types.ts

import { z } from 'zod';
import * as schema from './market.schema';
import { Document, Model } from '../../util/mongo';
import type { RouterContext } from '../../types';
import type { inferRouterInputs, inferRouterOutputs } from '@trpc/server';
import type { Router } from './market.router';

export type * from './market.router';
export type * from './market.service';
export type { RouterContext };

export type Market = z.infer<typeof schema.Market>;
export type MarketPair = z.infer<typeof schema.MarketPair>;
export type MarketExchange = z.infer<typeof schema.MarketExchange>;
export type MarketAnalysis = z.infer<typeof schema.MarketAnalysis>;
export type InvestorProfile = z.infer<typeof schema.MarketInvestor>;
export type InvestmentPortfolio = z.infer<typeof schema.MarketInvestmentPortfolio>;
export type Investment = z.infer<typeof schema.MarketInvestment>;
export type Stock = z.infer<typeof schema.MarketStock>;
export type ChainToken = z.infer<typeof schema.MarketToken>;
export type StockCompany = z.infer<typeof schema.MarketCompany>;
export type ETF = z.infer<typeof schema.MarketETF>;
export type StockSentiment = z.infer<typeof schema.MarketStockSentiment>;

export type MarketDocument = Market & Document;
export type MarketPairDocument = MarketPair & Document;
export type MarketExchangeDocument = MarketExchange & Document;
export type MarketAnalysisDocument = MarketAnalysis & Document;
export type InvestorProfileDocument = InvestorProfile & Document;
export type InvestmentPortfolioDocument = InvestmentPortfolio & Document;
export type InvestmentDocument = Investment & Document;
export type StockDocument = Stock & Document;
export type ChainDocument = ChainToken & Document;
export type StockCompanyDocument = StockCompany & Document;
export type ETFDocument = ETF & Document;
export type StockSentimentDocument = StockSentiment & Document;

export type Mappings = {
  Market: Model<MarketDocument>;
  MarketPair: Model<MarketPairDocument>;
  MarketExchange: Model<MarketExchangeDocument>;
  MarketAnalysis: Model<MarketAnalysisDocument>;
  InvestorProfile: Model<InvestorProfileDocument>;
  InvestmentPortfolio: Model<InvestmentPortfolioDocument>;
  Investment: Model<InvestmentDocument>;
  Stock: Model<StockDocument>;
  ChainToken: Model<ChainDocument>;
  Company: Model<StockCompanyDocument>;
  ETF: Model<ETFDocument>;
  StockSentiment: Model<StockSentimentDocument>;
};

export type RouterInput = inferRouterInputs<Router>;
export type RouterOutput = inferRouterOutputs<Router>;
