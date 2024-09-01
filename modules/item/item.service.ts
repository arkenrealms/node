// module/item.service.ts

import type {
  Item,
  ItemAttribute,
  ItemMaterial,
  ItemSet,
  ItemSlot,
  ItemRarity,
  ItemType,
  ItemSubType,
  ItemSpecificType,
  ItemAffix,
  ItemRecipe,
  ItemSkin,
  ItemTransmute,
  RouterContext,
  Router,
  RouterInput,
  RouterOutput,
} from './item.types';

export class Service {
  async getItem(input: RouterInput['getItem'], ctx: RouterContext): Promise<RouterOutput['getItem']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Item.Service.getItem', input.itemId);

    const item = await ctx.app.model.Item.findById(input.itemId).lean().exec();
    if (!item) throw new Error('Item not found');

    return item as Item;
  }

  async createItem(input: RouterInput['createItem'], ctx: RouterContext): Promise<RouterOutput['createItem']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Item.Service.createItem', input);

    const item = await ctx.app.model.Item.create(input);
    return item as Item;
  }

  async updateItem(input: RouterInput['updateItem'], ctx: RouterContext): Promise<RouterOutput['updateItem']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Item.Service.updateItem', input.itemId, input.data);

    const updatedItem = await ctx.app.model.Item.findByIdAndUpdate(input.itemId, input.data, { new: true })
      .lean()
      .exec();
    if (!updatedItem) throw new Error('Item update failed');

    return updatedItem as Item;
  }

  async getItemAttribute(
    input: RouterInput['getItemAttribute'],
    ctx: RouterContext
  ): Promise<RouterOutput['getItemAttribute']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Item.Service.getItemAttribute', input.itemAttributeId);

    const itemAttribute = await ctx.app.model.ItemAttribute.findById(input.itemAttributeId).lean().exec();
    if (!itemAttribute) throw new Error('ItemAttribute not found');

    return itemAttribute as ItemAttribute;
  }

  async createItemAttribute(
    input: RouterInput['createItemAttribute'],
    ctx: RouterContext
  ): Promise<RouterOutput['createItemAttribute']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Item.Service.createItemAttribute', input);

    const itemAttribute = await ctx.app.model.ItemAttribute.create(input);
    return itemAttribute as ItemAttribute;
  }

  async updateItemAttribute(
    input: RouterInput['updateItemAttribute'],
    ctx: RouterContext
  ): Promise<RouterOutput['updateItemAttribute']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Item.Service.updateItemAttribute', input.itemAttributeId, input.data);

    const updatedItemAttribute = await ctx.app.model.ItemAttribute.findByIdAndUpdate(
      input.itemAttributeId,
      input.data,
      { new: true }
    )
      .lean()
      .exec();
    if (!updatedItemAttribute) throw new Error('ItemAttribute update failed');

    return updatedItemAttribute as ItemAttribute;
  }

  // Add similar methods for other entities like ItemMaterial, ItemSet, ItemSlot, ItemRarity, etc.

  async getItemTransmute(
    input: RouterInput['getItemTransmute'],
    ctx: RouterContext
  ): Promise<RouterOutput['getItemTransmute']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Item.Service.getItemTransmute', input.itemTransmuteId);

    const itemTransmute = await ctx.app.model.ItemTransmute.findById(input.itemTransmuteId).lean().exec();
    if (!itemTransmute) throw new Error('ItemTransmute not found');

    return itemTransmute as ItemTransmute;
  }

  async createItemTransmute(
    input: RouterInput['createItemTransmute'],
    ctx: RouterContext
  ): Promise<RouterOutput['createItemTransmute']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Item.Service.createItemTransmute', input);

    const itemTransmute = await ctx.app.model.ItemTransmute.create(input);
    return itemTransmute as ItemTransmute;
  }

  async updateItemTransmute(
    input: RouterInput['updateItemTransmute'],
    ctx: RouterContext
  ): Promise<RouterOutput['updateItemTransmute']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Item.Service.updateItemTransmute', input.itemTransmuteId, input.data);

    const updatedItemTransmute = await ctx.app.model.ItemTransmute.findByIdAndUpdate(
      input.itemTransmuteId,
      input.data,
      { new: true }
    )
      .lean()
      .exec();
    if (!updatedItemTransmute) throw new Error('ItemTransmute update failed');

    return updatedItemTransmute as ItemTransmute;
  }
}
