import type { Context } from '../../types';
import type { Chain, ChainContract, ChainToken, ChainTransaction } from './chain.types';

export class Service {
  async getChain({ chainId }: { chainId: string }, ctx: Context) {
    console.log('Chain.Service.getChain', chainId);
    const chain = await ctx.app.model.Chain.findById(chainId).lean().exec();
    if (!chain) {
      throw new Error('Chain not found');
    }
    return chain as Chain;
  }

  async addChainContract(
    {
      chainId,
      description,
      content,
      type,
      standard,
    }: { chainId: string; description: string; content: string; type: string; standard: string },
    ctx: Context
  ) {
    console.log('Chain.Service.addChainContract', chainId, description, content, type, standard);
    const chainContract = await ctx.app.model.ChainContract.create({ description, content, type, standard });
    await ctx.app.model.Chain.updateOne({ _id: chainId }, { $push: { contracts: chainContract._id } }).exec();
    return chainContract as ChainContract;
  }

  async addChainToken({ chainId, tokenData }: { chainId: string; tokenData: Partial<ChainToken> }, ctx: Context) {
    console.log('Chain.Service.addChainToken', chainId, tokenData);
    const chainToken = await ctx.app.model.ChainToken.create({ ...tokenData });
    await ctx.app.model.Chain.updateOne({ _id: chainId }, { $push: { tokens: chainToken._id } }).exec();
    return chainToken as ChainToken;
  }

  async addChainTransaction({ chainId, value }: { chainId: string; value: string }, ctx: Context) {
    console.log('Chain.Service.addChainTransaction', chainId, value);
    const chainTransaction = await ctx.app.model.ChainTransaction.create({ value, chainId });
    return chainTransaction as ChainTransaction;
  }
}
