// module/market.service.ts

import type {
  Market,
  MarketPair,
  MarketExchange,
  RouterContext,
  Router,
  RouterInput,
  RouterOutput,
} from './market.types';

export class Service {
  async getMarket(input: RouterInput['getMarket'], ctx: RouterContext): Promise<RouterOutput['getMarket']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Market.Service.getMarket', input.marketId);

    const market = await ctx.app.model.Market.findById(input.marketId).lean().exec();
    if (!market) throw new Error('Market not found');

    return market as Market;
  }

  async createMarket(input: RouterInput['createMarket'], ctx: RouterContext): Promise<RouterOutput['createMarket']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Market.Service.createMarket', input);

    const market = await ctx.app.model.Market.create(input);
    return market as Market;
  }

  async updateMarket(input: RouterInput['updateMarket'], ctx: RouterContext): Promise<RouterOutput['updateMarket']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Market.Service.updateMarket', input.marketId, input.data);

    const updatedMarket = await ctx.app.model.Market.findByIdAndUpdate(input.marketId, input.data, { new: true })
      .lean()
      .exec();
    if (!updatedMarket) throw new Error('Market update failed');

    return updatedMarket as Market;
  }

  async getMarketPair(input: RouterInput['getMarketPair'], ctx: RouterContext): Promise<RouterOutput['getMarketPair']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Market.Service.getMarketPair', input.marketPairId);

    const marketPair = await ctx.app.model.MarketPair.findById(input.marketPairId).lean().exec();
    if (!marketPair) throw new Error('MarketPair not found');

    return marketPair as MarketPair;
  }

  async createMarketPair(
    input: RouterInput['createMarketPair'],
    ctx: RouterContext
  ): Promise<RouterOutput['createMarketPair']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Market.Service.createMarketPair', input);

    const marketPair = await ctx.app.model.MarketPair.create(input);
    return marketPair as MarketPair;
  }

  async updateMarketPair(
    input: RouterInput['updateMarketPair'],
    ctx: RouterContext
  ): Promise<RouterOutput['updateMarketPair']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Market.Service.updateMarketPair', input.marketPairId, input.data);

    const updatedMarketPair = await ctx.app.model.MarketPair.findByIdAndUpdate(input.marketPairId, input.data, {
      new: true,
    })
      .lean()
      .exec();
    if (!updatedMarketPair) throw new Error('MarketPair update failed');

    return updatedMarketPair as MarketPair;
  }

  async getMarketExchange(
    input: RouterInput['getMarketExchange'],
    ctx: RouterContext
  ): Promise<RouterOutput['getMarketExchange']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Market.Service.getMarketExchange', input.exchangeId);

    const marketExchange = await ctx.app.model.MarketExchange.findById(input.exchangeId).lean().exec();
    if (!marketExchange) throw new Error('MarketExchange not found');

    return marketExchange as MarketExchange;
  }

  async createMarketExchange(
    input: RouterInput['createMarketExchange'],
    ctx: RouterContext
  ): Promise<RouterOutput['createMarketExchange']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Market.Service.createMarketExchange', input);

    const marketExchange = await ctx.app.model.MarketExchange.create(input);
    return marketExchange as MarketExchange;
  }

  async updateMarketExchange(
    input: RouterInput['updateMarketExchange'],
    ctx: RouterContext
  ): Promise<RouterOutput['updateMarketExchange']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Market.Service.updateMarketExchange', input.exchangeId, input.data);

    const updatedMarketExchange = await ctx.app.model.MarketExchange.findByIdAndUpdate(input.exchangeId, input.data, {
      new: true,
    })
      .lean()
      .exec();
    if (!updatedMarketExchange) throw new Error('MarketExchange update failed');

    return updatedMarketExchange as MarketExchange;
  }
}
