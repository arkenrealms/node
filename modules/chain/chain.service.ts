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

export class Service {
  async getChain(input: RouterInput['getChain'], ctx: RouterContext): Promise<RouterOutput['getChain']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Chain.Service.getChain', input.chainId);

    const chain = await ctx.app.model.Chain.findById(input.chainId).lean().exec();
    if (!chain) throw new Error('Chain not found');

    return chain as Chain;
  }

  async getChainContract(
    input: RouterInput['getChainContract'],
    ctx: RouterContext
  ): Promise<RouterOutput['getChainContract']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Chain.Service.getChainContract', input.chainContractId);

    const chainContract = await ctx.app.model.ChainContract.findById(input.chainContractId).lean().exec();
    if (!chainContract) throw new Error('ChainContract not found');

    return chainContract as ChainContract;
  }

  async getChainToken(input: RouterInput['getChainToken'], ctx: RouterContext): Promise<RouterOutput['getChainToken']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Chain.Service.getChainToken', input.chainTokenId);

    const chainToken = await ctx.app.model.ChainToken.findById(input.chainTokenId).lean().exec();
    if (!chainToken) throw new Error('ChainToken not found');

    return chainToken as ChainToken;
  }

  async getChainTransaction(
    input: RouterInput['getChainTransaction'],
    ctx: RouterContext
  ): Promise<RouterOutput['getChainTransaction']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Chain.Service.getChainTransaction', input.chainTransactionId);

    const chainTransaction = await ctx.app.model.ChainTransaction.findById(input.chainTransactionId).lean().exec();
    if (!chainTransaction) throw new Error('ChainTransaction not found');

    return chainTransaction as ChainTransaction;
  }

  async createChain(input: RouterInput['createChain'], ctx: RouterContext): Promise<RouterOutput['createChain']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Chain.Service.createChain', input.content, input.type);

    const chain = await ctx.app.model.Chain.create({
      content: input.content,
      type: input.type,
      standard: input.standard,
    });

    return chain as Chain;
  }

  async createChainContract(
    input: RouterInput['createChainContract'],
    ctx: RouterContext
  ): Promise<RouterOutput['createChainContract']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Chain.Service.createChainContract', input.description, input.content);

    const chainContract = await ctx.app.model.ChainContract.create({
      description: input.description,
      content: input.content,
      type: input.type,
      standard: input.standard,
    });

    return chainContract as ChainContract;
  }

  async createChainToken(
    input: RouterInput['createChainToken'],
    ctx: RouterContext
  ): Promise<RouterOutput['createChainToken']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Chain.Service.createChainToken', input.symbol, input.content);

    const chainToken = await ctx.app.model.ChainToken.create({
      rank: input.rank,
      description: input.description,
      content: input.content,
      type: input.type,
      standard: input.standard,
      price: input.price,
      hourChange: input.hourChange,
      dayChange: input.dayChange,
      weekChange: input.weekChange,
      marketCap: input.marketCap,
      volume: input.volume,
      symbol: input.symbol,
      circulatingSupply: input.circulatingSupply,
      cmcLink: input.cmcLink,
      movementDown: input.movementDown,
      movementUp: input.movementUp,
      enteredTop100: input.enteredTop100,
      exitedTop100: input.exitedTop100,
      largeMoveDown: input.largeMoveDown,
    });

    return chainToken as ChainToken;
  }

  async createChainTransaction(
    input: RouterInput['createChainTransaction'],
    ctx: RouterContext
  ): Promise<RouterOutput['createChainTransaction']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Chain.Service.createChainTransaction', input.value, input.chainId);

    const chainTransaction = await ctx.app.model.ChainTransaction.create({
      value: input.value,
      chainId: input.chainId,
    });

    return chainTransaction as ChainTransaction;
  }

  async updateChain(input: RouterInput['updateChain'], ctx: RouterContext): Promise<RouterOutput['updateChain']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Chain.Service.updateChain', input.chainId, input.data);

    const updatedChain = await ctx.app.model.Chain.findByIdAndUpdate(input.chainId, input.data, { new: true })
      .lean()
      .exec();
    if (!updatedChain) throw new Error('Chain update failed');

    return updatedChain as Chain;
  }

  async updateChainContract(
    input: RouterInput['updateChainContract'],
    ctx: RouterContext
  ): Promise<RouterOutput['updateChainContract']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Chain.Service.updateChainContract', input.chainContractId, input.data);

    const updatedChainContract = await ctx.app.model.ChainContract.findByIdAndUpdate(
      input.chainContractId,
      input.data,
      { new: true }
    )
      .lean()
      .exec();
    if (!updatedChainContract) throw new Error('ChainContract update failed');

    return updatedChainContract as ChainContract;
  }

  async updateChainToken(
    input: RouterInput['updateChainToken'],
    ctx: RouterContext
  ): Promise<RouterOutput['updateChainToken']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Chain.Service.updateChainToken', input.chainTokenId, input.data);

    const updatedChainToken = await ctx.app.model.ChainToken.findByIdAndUpdate(input.chainTokenId, input.data, {
      new: true,
    })
      .lean()
      .exec();
    if (!updatedChainToken) throw new Error('ChainToken update failed');

    return updatedChainToken as ChainToken;
  }

  async updateChainTransaction(
    input: RouterInput['updateChainTransaction'],
    ctx: RouterContext
  ): Promise<RouterOutput['updateChainTransaction']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Chain.Service.updateChainTransaction', input.chainTransactionId, input.data);

    const updatedChainTransaction = await ctx.app.model.ChainTransaction.findByIdAndUpdate(
      input.chainTransactionId,
      input.data,
      { new: true }
    )
      .lean()
      .exec();
    if (!updatedChainTransaction) throw new Error('ChainTransaction update failed');

    return updatedChainTransaction as ChainTransaction;
  }
}
