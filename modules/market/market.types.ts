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

export type MarketDocument = Market & Document;
export type MarketPairDocument = MarketPair & Document;
export type MarketExchangeDocument = MarketExchange & Document;

export type Mappings = {
  Market: Model<MarketDocument>;
  MarketPair: Model<MarketPairDocument>;
  MarketExchange: Model<MarketExchangeDocument>;
};

export type RouterInput = inferRouterInputs<Router>;
export type RouterOutput = inferRouterOutputs<Router>;
