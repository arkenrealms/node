// module/collection.service.ts

import type {
  CollectibleCollection,
  CollectibleCardBox,
  CollectibleCardPack,
  CollectibleCard,
  Router,
  RouterInput,
  RouterOutput,
  RouterContext,
} from './collection.types';

export class Service {
  async getCollectibleCollection(
    input: RouterInput['getCollectibleCollection'],
    ctx: RouterContext
  ): Promise<RouterOutput['getCollectibleCollection']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Collection.Service.getCollectibleCollection', input.collectibleCollectionId);

    const collectibleCollection = await ctx.app.model.CollectibleCollection.findById(input.collectibleCollectionId)
      .lean()
      .exec();
    if (!collectibleCollection) throw new Error('CollectibleCollection not found');

    return collectibleCollection as CollectibleCollection;
  }

  async createCollectibleCollection(
    input: RouterInput['createCollectibleCollection'],
    ctx: RouterContext
  ): Promise<RouterOutput['createCollectibleCollection']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Collection.Service.createCollectibleCollection', input.name);

    const collectibleCollection = await ctx.app.model.CollectibleCollection.create(input);
    return collectibleCollection as CollectibleCollection;
  }

  async updateCollectibleCollection(
    input: RouterInput['updateCollectibleCollection'],
    ctx: RouterContext
  ): Promise<RouterOutput['updateCollectibleCollection']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Collection.Service.updateCollectibleCollection', input.collectibleCollectionId, input.data);

    const updatedCollectibleCollection = await ctx.app.model.CollectibleCollection.findByIdAndUpdate(
      input.collectibleCollectionId,
      input.data,
      { new: true }
    )
      .lean()
      .exec();
    if (!updatedCollectibleCollection) throw new Error('CollectibleCollection update failed');

    return updatedCollectibleCollection as CollectibleCollection;
  }

  async getCollectibleCardBox(
    input: RouterInput['getCollectibleCardBox'],
    ctx: RouterContext
  ): Promise<RouterOutput['getCollectibleCardBox']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Collection.Service.getCollectibleCardBox', input.collectibleCardBoxId);

    const collectibleCardBox = await ctx.app.model.CollectibleCardBox.findById(input.collectibleCardBoxId)
      .lean()
      .exec();
    if (!collectibleCardBox) throw new Error('CollectibleCardBox not found');

    return collectibleCardBox as CollectibleCardBox;
  }

  async createCollectibleCardBox(
    input: RouterInput['createCollectibleCardBox'],
    ctx: RouterContext
  ): Promise<RouterOutput['createCollectibleCardBox']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Collection.Service.createCollectibleCardBox', input.name);

    const collectibleCardBox = await ctx.app.model.CollectibleCardBox.create(input);
    return collectibleCardBox as CollectibleCardBox;
  }

  async updateCollectibleCardBox(
    input: RouterInput['updateCollectibleCardBox'],
    ctx: RouterContext
  ): Promise<RouterOutput['updateCollectibleCardBox']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Collection.Service.updateCollectibleCardBox', input.collectibleCardBoxId, input.data);

    const updatedCollectibleCardBox = await ctx.app.model.CollectibleCardBox.findByIdAndUpdate(
      input.collectibleCardBoxId,
      input.data,
      { new: true }
    )
      .lean()
      .exec();
    if (!updatedCollectibleCardBox) throw new Error('CollectibleCardBox update failed');

    return updatedCollectibleCardBox as CollectibleCardBox;
  }

  async getCollectibleCardPack(
    input: RouterInput['getCollectibleCardPack'],
    ctx: RouterContext
  ): Promise<RouterOutput['getCollectibleCardPack']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Collection.Service.getCollectibleCardPack', input.collectibleCardPackId);

    const collectibleCardPack = await ctx.app.model.CollectibleCardPack.findById(input.collectibleCardPackId)
      .lean()
      .exec();
    if (!collectibleCardPack) throw new Error('CollectibleCardPack not found');

    return collectibleCardPack as CollectibleCardPack;
  }

  async createCollectibleCardPack(
    input: RouterInput['createCollectibleCardPack'],
    ctx: RouterContext
  ): Promise<RouterOutput['createCollectibleCardPack']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Collection.Service.createCollectibleCardPack', input.name);

    const collectibleCardPack = await ctx.app.model.CollectibleCardPack.create(input);
    return collectibleCardPack as CollectibleCardPack;
  }

  async updateCollectibleCardPack(
    input: RouterInput['updateCollectibleCardPack'],
    ctx: RouterContext
  ): Promise<RouterOutput['updateCollectibleCardPack']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Collection.Service.updateCollectibleCardPack', input.collectibleCardPackId, input.data);

    const updatedCollectibleCardPack = await ctx.app.model.CollectibleCardPack.findByIdAndUpdate(
      input.collectibleCardPackId,
      input.data,
      { new: true }
    )
      .lean()
      .exec();
    if (!updatedCollectibleCardPack) throw new Error('CollectibleCardPack update failed');

    return updatedCollectibleCardPack as CollectibleCardPack;
  }

  async getCollectibleCard(
    input: RouterInput['getCollectibleCard'],
    ctx: RouterContext
  ): Promise<RouterOutput['getCollectibleCard']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Collection.Service.getCollectibleCard', input.collectibleCardId);

    const collectibleCard = await ctx.app.model.CollectibleCard.findById(input.collectibleCardId).lean().exec();
    if (!collectibleCard) throw new Error('CollectibleCard not found');

    return collectibleCard as CollectibleCard;
  }

  async createCollectibleCard(
    input: RouterInput['createCollectibleCard'],
    ctx: RouterContext
  ): Promise<RouterOutput['createCollectibleCard']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Collection.Service.createCollectibleCard', input.name);

    const collectibleCard = await ctx.app.model.CollectibleCard.create(input);
    return collectibleCard as CollectibleCard;
  }

  async updateCollectibleCard(
    input: RouterInput['updateCollectibleCard'],
    ctx: RouterContext
  ): Promise<RouterOutput['updateCollectibleCard']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Collection.Service.updateCollectibleCard', input.collectibleCardId, input.data);

    const updatedCollectibleCard = await ctx.app.model.CollectibleCard.findByIdAndUpdate(
      input.collectibleCardId,
      input.data,
      { new: true }
    )
      .lean()
      .exec();
    if (!updatedCollectibleCard) throw new Error('CollectibleCard update failed');

    return updatedCollectibleCard as CollectibleCard;
  }
}
