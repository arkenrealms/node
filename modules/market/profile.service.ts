import type { Context } from '../../types';
import type { Market, MarketPair } from './market.types';

export class Service {
  async getMarket({ marketId }: { marketId: string }, ctx: Context) {
    console.log('Market.Service.getMarket', marketId);
    const market = await ctx.app.model.Market.findById(marketId).lean().exec();
    if (!market) {
      throw new Error('Market not found');
    }
    return market as Market;
  }

  async getMarketPair({ marketPairId }: { marketPairId: string }, ctx: Context) {
    console.log('Market.Service.getMarketPair', marketPairId);
    const marketPair = await ctx.app.model.MarketPair.findById(marketPairId).lean().exec();
    if (!marketPair) {
      throw new Error('MarketPair not found');
    }
    return marketPair as MarketPair;
  }

  async createMarket({ value }: { value: string }, ctx: Context) {
    console.log('Market.Service.createMarket', value);
    const market = await ctx.app.model.Market.create({ value });
    return market as Market;
  }

  async createMarketPair({ value }: { value: string }, ctx: Context) {
    console.log('Market.Service.createMarketPair', value);
    const marketPair = await ctx.app.model.MarketPair.create({ value });
    return marketPair as MarketPair;
  }

  async updateMarket({ marketId, data }: { marketId: string; data: Partial<Market> }, ctx: Context) {
    console.log('Market.Service.updateMarket', marketId, data);
    const updatedMarket = await ctx.app.model.Market.findByIdAndUpdate(marketId, data, { new: true }).lean().exec();
    if (!updatedMarket) {
      throw new Error('Market update failed');
    }
    return updatedMarket as Market;
  }

  async updateMarketPair({ marketPairId, data }: { marketPairId: string; data: Partial<MarketPair> }, ctx: Context) {
    console.log('Market.Service.updateMarketPair', marketPairId, data);
    const updatedMarketPair = await ctx.app.model.MarketPair.findByIdAndUpdate(marketPairId, data, { new: true })
      .lean()
      .exec();
    if (!updatedMarketPair) {
      throw new Error('MarketPair update failed');
    }
    return updatedMarketPair as MarketPair;
  }
}
