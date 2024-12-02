import type {
  Chain,
  ChainContract,
  ChainToken,
  ChainTransaction,
  Router,
  RouterInput,
  RouterOutput,
  RouterContext,
} from './chain.types';
import { ARXError } from '../../util/rpc';
import { getFilter } from '../../util/api';

export class Service {
  async getChain(input: RouterInput['getChain'], ctx: RouterContext): Promise<RouterOutput['getChain']> {
    if (!input) throw new ARXError('NO_INPUT');
    console.log('Chain.Service.getChain', input);

    const chain = await ctx.app.model.Chain.findOne(getFilter(input)).lean().exec();
    if (!chain) throw new Error('Chain not found');

    return chain as Chain;
  }

  async getChainContract(
    input: RouterInput['getChainContract'],
    ctx: RouterContext
  ): Promise<RouterOutput['getChainContract']> {
    if (!input) throw new ARXError('NO_INPUT');
    console.log('Chain.Service.getChainContract', input);

    const chainContract = await ctx.app.model.ChainContract.findOne(getFilter(input)).lean().exec();
    if (!chainContract) throw new Error('ChainContract not found');

    return chainContract as ChainContract;
  }

  async getChainToken(input: RouterInput['getChainToken'], ctx: RouterContext): Promise<RouterOutput['getChainToken']> {
    if (!input) throw new ARXError('NO_INPUT');
    console.log('Chain.Service.getChainToken', input);

    const chainToken = await ctx.app.model.ChainToken.findOne(getFilter(input)).lean().exec();
    if (!chainToken) throw new Error('ChainToken not found');

    return chainToken as ChainToken;
  }

  async getChainTransaction(
    input: RouterInput['getChainTransaction'],
    ctx: RouterContext
  ): Promise<RouterOutput['getChainTransaction']> {
    if (!input) throw new ARXError('NO_INPUT');
    console.log('Chain.Service.getChainTransaction', input);

    const chainTransaction = await ctx.app.model.ChainTransaction.findOne(getFilter(input)).lean().exec();
    if (!chainTransaction) throw new Error('ChainTransaction not found');

    return chainTransaction as ChainTransaction;
  }

  async createChain(input: RouterInput['createChain'], ctx: RouterContext): Promise<RouterOutput['createChain']> {
    if (!input) throw new ARXError('NO_INPUT');
    console.log('Chain.Service.createChain', input);

    const chain = await ctx.app.model.Chain.create(input);

    return chain as Chain;
  }

  async createChainContract(
    input: RouterInput['createChainContract'],
    ctx: RouterContext
  ): Promise<RouterOutput['createChainContract']> {
    if (!input) throw new ARXError('NO_INPUT');
    console.log('Chain.Service.createChainContract', input);

    const chainContract = await ctx.app.model.ChainContract.create(input);

    return chainContract as ChainContract;
  }

  async createChainToken(
    input: RouterInput['createChainToken'],
    ctx: RouterContext
  ): Promise<RouterOutput['createChainToken']> {
    if (!input) throw new ARXError('NO_INPUT');
    console.log('Chain.Service.createChainToken', input);

    const chainToken = await ctx.app.model.ChainToken.create(input);

    return chainToken as ChainToken;
  }

  async createChainTransaction(
    input: RouterInput['createChainTransaction'],
    ctx: RouterContext
  ): Promise<RouterOutput['createChainTransaction']> {
    if (!input) throw new ARXError('NO_INPUT');
    console.log('Chain.Service.createChainTransaction', input);

    const chainTransaction = await ctx.app.model.ChainToken.create(input);

    return chainTransaction as ChainTransaction;
  }

  async updateChain(input: RouterInput['updateChain'], ctx: RouterContext): Promise<RouterOutput['updateChain']> {
    if (!input) throw new ARXError('NO_INPUT');
    console.log('Chain.Service.updateChain', input);

    const updatedChain = await ctx.app.model.Game.findByIdAndUpdate(input.where.id.equals, { new: true }).lean().exec();
    if (!updatedChain) throw new Error('Chain update failed');

    return updatedChain as Chain;
  }

  async updateChainContract(
    input: RouterInput['updateChainContract'],
    ctx: RouterContext
  ): Promise<RouterOutput['updateChainContract']> {
    if (!input) throw new ARXError('NO_INPUT');
    console.log('Chain.Service.updateChainContract', input);

    const updatedChainContract = await ctx.app.model.ChainContract.findByIdAndUpdate(input.where.id.equals, {
      new: true,
    })
      .lean()
      .exec();

    if (!updatedChainContract) throw new Error('ChainContract update failed');

    return updatedChainContract as ChainContract;
  }

  async updateChainToken(
    input: RouterInput['updateChainToken'],
    ctx: RouterContext
  ): Promise<RouterOutput['updateChainToken']> {
    if (!input) throw new ARXError('NO_INPUT');
    console.log('Chain.Service.updateChainToken', input);

    const updatedChainToken = await ctx.app.model.ChainToken.findByIdAndUpdate(input.where.id.equals, { new: true })
      .lean()
      .exec();

    if (!updatedChainToken) throw new Error('ChainToken update failed');

    return updatedChainToken as ChainToken;
  }

  async updateChainTransaction(
    input: RouterInput['updateChainTransaction'],
    ctx: RouterContext
  ): Promise<RouterOutput['updateChainTransaction']> {
    if (!input) throw new ARXError('NO_INPUT');
    console.log('Chain.Service.updateChainTransaction', input);

    const updatedChainTransaction = await ctx.app.model.ChainTransaction.findByIdAndUpdate(input.where.id.equals, {
      new: true,
    })
      .lean()
      .exec();

    if (!updatedChainTransaction) throw new Error('ChainTransaction update failed');

    return updatedChainTransaction as ChainTransaction;
  }
}
