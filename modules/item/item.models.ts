import * as mongo from '../../util/mongo';
import type * as Types from './item.types';

export const Item = mongo.createModel<Types.ItemDocument>('Item', {
  token: { type: String, maxlength: 500, required: true },
  assetId: { type: mongo.Schema.Types.ObjectId, ref: 'Asset', required: true },
  chainId: { type: mongo.Schema.Types.ObjectId, ref: 'Chain', required: true },
});

export const ItemAttribute = mongo.createModel<Types.ItemAttributeDocument>('ItemAttribute', {});

export const ItemMaterial = mongo.createModel<Types.ItemMaterialDocument>('ItemMaterial', {});

export const ItemSet = mongo.createModel<Types.ItemSetDocument>('ItemSet', {});

export const ItemSlot = mongo.createModel<Types.ItemSlotDocument>('ItemSlot', {});

export const ItemRarity = mongo.createModel<Types.ItemRarityDocument>('ItemRarity', {});

export const ItemType = mongo.createModel<Types.ItemTypeDocument>('ItemType', {});

export const ItemSubType = mongo.createModel<Types.ItemSubTypeDocument>('ItemSubType', {});

export const ItemSpecificType = mongo.createModel<Types.ItemSpecificTypeDocument>('ItemSpecificType', {});

export const ItemAffix = mongo.createModel<Types.ItemAffixDocument>('ItemAffix', {});

export const ItemRecipe = mongo.createModel<Types.ItemRecipeDocument>('ItemRecipe', {});

export const ItemSkin = mongo.createModel<Types.ItemSkinDocument>('ItemSkin', {});

export const ItemTransmute = mongo.createModel<Types.ItemTransmuteDocument>(
  'ItemTransmute',
  {
    token: { type: String, maxlength: 500, required: true },
    assetId: { type: mongo.Schema.Types.ObjectId, ref: 'Asset', required: true },
    gameItemId: { type: mongo.Schema.Types.ObjectId, ref: 'Item', required: true },
    chainId: { type: mongo.Schema.Types.ObjectId, ref: 'Chain' },
  },
  {
    virtuals: [
      {
        name: 'item',
      },
      {
        name: 'asset',
      },
    ],
  }
);
