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

export type MarketAnalysis = z.infer<typeof schema.MarketAnalysis>;
export type MarketInvestor = z.infer<typeof schema.MarketInvestor>;
export type MarketInvestmentPortfolio = z.infer<typeof schema.MarketInvestmentPortfolio>;
export type MarketInvestment = z.infer<typeof schema.MarketInvestment>;
export type MarketStock = z.infer<typeof schema.MarketStock>;
export type MarketToken = z.infer<typeof schema.MarketToken>;
export type MarketCompany = z.infer<typeof schema.MarketCompany>;
export type MarketETF = z.infer<typeof schema.MarketETF>;
export type MarketStockSentiment = z.infer<typeof schema.MarketStockSentiment>;

export type MarketAnalysisDocument = MarketAnalysis & Document;
export type MarketInvestorDocument = MarketInvestor & Document;
export type MarketInvestmentPortfolioDocument = MarketInvestmentPortfolio & Document;
export type MarketInvestmentDocument = MarketInvestment & Document;
export type MarketStockDocument = MarketStock & Document;
export type MarketTokenDocument = MarketToken & Document;
export type MarketCompanyDocument = MarketCompany & Document;
export type MarketETFDocument = MarketETF & Document;
export type MarketStockSentimentDocument = MarketStockSentiment & Document;

export type Mappings = {
  MarketAnalysis: Model<MarketAnalysisDocument>;
  MarketInvestor: Model<MarketInvestorDocument>;
  InvestmentPortfolio: Model<MarketInvestmentPortfolioDocument>;
  Investment: Model<MarketInvestmentDocument>;
  Stock: Model<MarketStockDocument>;
  ChainToken: Model<MarketTokenDocument>;
  Company: Model<MarketCompanyDocument>;
  ETF: Model<MarketETFDocument>;
  StockSentiment: Model<MarketStockSentimentDocument>;
};

export type RouterInput = inferRouterInputs<Router>;
export type RouterOutput = inferRouterOutputs<Router>;
