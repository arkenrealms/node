// module/market.service.ts

import type {
  Market,
  MarketPair,
  MarketExchange,
  MarketListing,
  RouterContext,
  Router,
  RouterInput,
  RouterOutput,
} from './market.types';
import { getFilter } from '../../util/api';
import { ARXError } from '../../util/rpc';

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

  async getMarketListing(
    input: RouterInput['getMarketListing'],
    ctx: RouterContext
  ): Promise<RouterOutput['getMarketListing']> {
    if (!input) throw new ARXError('NO_INPUT');
    console.log('Market.Service.getMarketListing', input);

    const listing = await ctx.app.model.MarketListing.findOne(getFilter(input)).exec();
    if (!listing) throw new Error('MarketListing not found');

    return listing as MarketListing;
  }

  async createMarketListing(
    input: RouterInput['createMarketListing'],
    ctx: RouterContext
  ): Promise<RouterOutput['createMarketListing']> {
    if (!input) throw new ARXError('NO_INPUT');
    console.log('Market.Service.createMarketListing', input);

    const marketListing = await ctx.app.model.MarketListing.create(input);
    return marketListing as MarketListing;
  }

  async updateMarketListing(
    input: RouterInput['updateMarketListing'],
    ctx: RouterContext
  ): Promise<RouterOutput['updateMarketListing']> {
    if (!input) throw new ARXError('NO_INPUT');
    console.log('Market.Service.updateMarketListing', input);

    const updatedListing = await ctx.app.model.MarketListing.findByIdAndUpdate(input.where.id.equals, input.data, {
      new: true,
    })
      .lean()
      .exec();
    if (!updatedListing) throw new Error('MarketListing update failed');

    return updatedListing as MarketListing;
  }

  async deleteMarketListing(
    input: RouterInput['deleteMarketListing'],
    ctx: RouterContext
  ): Promise<RouterOutput['deleteMarketListing']> {
    if (!input) throw new ARXError('NO_INPUT');
    console.log('Market.Service.deleteMarketListing', input);

    const deletedListing = await ctx.app.model.MarketListing.findByIdAndDelete(input.where.id.quals).lean().exec();
    if (!deletedListing) throw new Error('MarketListing deletion failed');

    return deletedListing as MarketListing;
  }

  async getMarketListings(
    input: {
      category?: string;
      status?: string;
      exchange?: string;
      sellerId?: string;
    },
    ctx: RouterContext
  ): Promise<RouterOutput['getMarketListings']> {
    console.log('Market.Service.getMarketListings', input);

    const query: Record<string, any> = {};
    if (input.category) query.category = input.category;
    if (input.status) query.status = input.status;
    if (input.exchange) query.exchange = input.exchange;
    if (input.sellerId) query.sellerId = input.sellerId;

    const listings = await ctx.app.model.MarketListing.find(query).lean().exec();
    return listings as MarketListing[];
  }
}
