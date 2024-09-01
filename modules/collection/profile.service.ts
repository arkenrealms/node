import type { Context } from '../../types';
import type {
  CollectibleCollection,
  CollectibleCardBox,
  CollectibleCardPack,
  CollectibleCard,
} from './collection.types';

export class Service {
  async getCollectibleCollection({ collectionId }: { collectionId: string }, ctx: Context) {
    console.log('Collection.Service.getCollectibleCollection', collectionId);
    const collection = await ctx.app.model.CollectibleCollection.findById(collectionId).lean().exec();
    if (!collection) {
      throw new Error('Collectible Collection not found');
    }
    return collection as CollectibleCollection;
  }

  async addCollectibleCardBox({ collectionId, franchise }: { collectionId: string; franchise: string }, ctx: Context) {
    console.log('Collection.Service.addCollectibleCardBox', collectionId, franchise);
    const cardBox = await ctx.app.model.CollectibleCardBox.create({ collectibleCollectionId: collectionId, franchise });
    return cardBox as CollectibleCardBox;
  }

  async addCollectibleCardPack(
    {
      collectionId,
      franchise,
      cardData,
    }: { collectionId: string; franchise: string; cardData: Partial<CollectibleCardPack> },
    ctx: Context
  ) {
    console.log('Collection.Service.addCollectibleCardPack', collectionId, franchise, cardData);
    const cardPack = await ctx.app.model.CollectibleCardPack.create({
      collectibleCollectionId: collectionId,
      franchise,
      ...cardData,
    });
    return cardPack as CollectibleCardPack;
  }

  async addCollectibleCard(
    {
      collectionId,
      franchise,
      cardData,
    }: { collectionId: string; franchise: string; cardData: Partial<CollectibleCard> },
    ctx: Context
  ) {
    console.log('Collection.Service.addCollectibleCard', collectionId, franchise, cardData);
    const card = await ctx.app.model.CollectibleCard.create({
      collectibleCollectionId: collectionId,
      franchise,
      ...cardData,
    });
    return card as CollectibleCard;
  }
}
