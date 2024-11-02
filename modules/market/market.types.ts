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
export type InvestorProfile = z.infer<typeof schema.InvestorProfile>;
export type InvestmentPortfolio = z.infer<typeof schema.InvestmentPortfolio>;
export type Investment = z.infer<typeof schema.Investment>;
export type Stock = z.infer<typeof schema.Stock>;
export type ChainToken = z.infer<typeof schema.ChainToken>;
export type StockCompany = z.infer<typeof schema.StockCompany>;
export type ETF = z.infer<typeof schema.ETF>;

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
};

export type RouterInput = inferRouterInputs<Router>;
export type RouterOutput = inferRouterOutputs<Router>;
