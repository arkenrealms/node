import * as mongo from '../../util/mongo';
import type * as Types from './item.types';

export const Item = mongo.createModel<Types.ItemDocument>('Item', {
  token: { type: String, maxlength: 500, minlength: 1, required: false },
  characterId: { type: mongo.Schema.Types.ObjectId, ref: 'Character', required: false },
  assetId: { type: mongo.Schema.Types.ObjectId, ref: 'Asset', required: false },
  chainId: { type: mongo.Schema.Types.ObjectId, ref: 'Chain', required: false },
  materialId: { type: mongo.Schema.Types.ObjectId, ref: 'ItemMaterial', required: false },
  skinId: { type: mongo.Schema.Types.ObjectId, ref: 'ItemSkin', required: false },
  recipeId: { type: mongo.Schema.Types.ObjectId, ref: 'ItemRecipe', required: false },
  typeId: { type: mongo.Schema.Types.ObjectId, ref: 'ItemType', required: false },
  subTypeId: { type: mongo.Schema.Types.ObjectId, ref: 'ItemSubType', required: false },
  specificTypeId: { type: mongo.Schema.Types.ObjectId, ref: 'ItemSpecificType', required: false },
  rarityId: { type: mongo.Schema.Types.ObjectId, ref: 'ItemRarity', required: false },
  slotIds: [{ type: mongo.Schema.Types.ObjectId, ref: 'ItemSlot', required: false }],
  setId: { type: mongo.Schema.Types.ObjectId, ref: 'ItemSet', required: false },
  attributes: [{ type: mongo.Schema.Types.ObjectId, ref: 'ItemAttribute', required: false }],
  quantity: { type: Number, integer: true, min: 0, default: 1 },
  x: { type: Number, integer: true, min: 0, required: false },
  y: { type: Number, integer: true, min: 0, required: false },
  items: [{ type: mongo.Schema.Types.ObjectId, ref: 'Item', default: [] }],
  capacity: { type: Number, integer: true, min: 0, default: 60 },
  points: { type: Number, integer: true, min: 0, default: 0 },
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
    itemId: { type: mongo.Schema.Types.ObjectId, ref: 'Item', required: true },
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
