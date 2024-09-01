import type { Context } from '../../types';
import type { Item, ItemAttribute, ItemMaterial, ItemTransmute } from './item.types';

export class Service {
  async getItem({ itemId }: { itemId: string }, ctx: Context) {
    console.log('Item.Service.getItem', itemId);
    const item = await ctx.app.model.Item.findById(itemId).lean().exec();
    if (!item) {
      throw new Error('Item not found');
    }
    return item as Item;
  }

  async addItemAttribute(
    { itemId, attributeData }: { itemId: string; attributeData: Partial<ItemAttribute> },
    ctx: Context
  ) {
    console.log('Item.Service.addItemAttribute', itemId, attributeData);
    const attribute = await ctx.app.model.ItemAttribute.create(attributeData);
    await ctx.app.model.Item.updateOne({ _id: itemId }, { $push: { attributes: attribute._id } }).exec();
    return attribute as ItemAttribute;
  }

  async addItemMaterial(
    { itemId, materialData }: { itemId: string; materialData: Partial<ItemMaterial> },
    ctx: Context
  ) {
    console.log('Item.Service.addItemMaterial', itemId, materialData);
    const material = await ctx.app.model.ItemMaterial.create(materialData);
    await ctx.app.model.Item.updateOne({ _id: itemId }, { $push: { materials: material._id } }).exec();
    return material as ItemMaterial;
  }

  async addItemTransmute(
    { itemId, transmuteData }: { itemId: string; transmuteData: Partial<ItemTransmute> },
    ctx: Context
  ) {
    console.log('Item.Service.addItemTransmute', itemId, transmuteData);
    const transmute = await ctx.app.model.ItemTransmute.create(transmuteData);
    await ctx.app.model.Item.updateOne({ _id: itemId }, { $push: { transmutes: transmute._id } }).exec();
    return transmute as ItemTransmute;
  }

  async updateItem({ itemId, data }: { itemId: string; data: Partial<Item> }, ctx: Context) {
    console.log('Item.Service.updateItem', itemId, data);
    const updatedItem = await ctx.app.model.Item.findByIdAndUpdate(itemId, data, { new: true }).lean().exec();
    if (!updatedItem) {
      throw new Error('Item update failed');
    }
    return updatedItem as Item;
  }
}
