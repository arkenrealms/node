import * as mongo from '../../util/mongo';
import type * as Types from './item.types';

// Item

export const ItemSchema = mongo.createSchema<Types.ItemDocument>('Item', {
  token: { type: String, maxlength: 500, required: true },
  assetId: { type: mongo.Schema.Types.ObjectId, ref: 'Asset', required: true },
  chainId: { type: mongo.Schema.Types.ObjectId, ref: 'Chain', required: true },
});

export const Item = mongo.createModel<Types.ItemDocument>('Item', ItemSchema);

// ItemAttribute

export const ItemAttributeSchema = mongo.createSchema<Types.ItemAttributeDocument>('ItemAttribute', {});

export const ItemAttribute = mongo.createModel<Types.ItemAttributeDocument>('ItemAttribute', ItemAttributeSchema);

// ItemMaterial

export const ItemMaterialSchema = mongo.createSchema<Types.ItemMaterialDocument>('ItemMaterial', {});

export const ItemMaterial = mongo.createModel<Types.ItemMaterialDocument>('ItemMaterial', ItemMaterialSchema);

// ItemSet

export const ItemSetSchema = mongo.createSchema<Types.ItemSetDocument>('ItemSet', {});

export const ItemSet = mongo.createModel<Types.ItemSetDocument>('ItemSet', ItemSetSchema);

// ItemSlot

export const ItemSlotSchema = mongo.createSchema<Types.ItemSlotDocument>('ItemSlot', {});

export const ItemSlot = mongo.createModel<Types.ItemSlotDocument>('ItemSlot', ItemSlotSchema);

// ItemRarity

export const ItemRaritySchema = mongo.createSchema<Types.ItemRarityDocument>('ItemRarity', {});

export const ItemRarity = mongo.createModel<Types.ItemRarityDocument>('ItemRarity', ItemRaritySchema);

// ItemType

export const ItemTypeSchema = mongo.createSchema<Types.ItemTypeDocument>('ItemType', {});

export const ItemType = mongo.createModel<Types.ItemTypeDocument>('ItemType', ItemTypeSchema);

// ItemSubType

export const ItemSubTypeSchema = mongo.createSchema<Types.ItemSubTypeDocument>('ItemSubType', {});

export const ItemSubType = mongo.createModel<Types.ItemSubTypeDocument>('ItemSubType', ItemSubTypeSchema);

// ItemSpecificType

export const ItemSpecificTypeSchema = mongo.createSchema<Types.ItemSpecificTypeDocument>('ItemSpecificType', {});

export const ItemSpecificType = mongo.createModel<Types.ItemSpecificTypeDocument>(
  'ItemSpecificType',
  ItemSpecificTypeSchema
);

// ItemAffix

export const ItemAffixSchema = mongo.createSchema<Types.ItemAffixDocument>('ItemAffix', {});

export const ItemAffix = mongo.createModel<Types.ItemAffixDocument>('ItemAffix', ItemAffixSchema);

// ItemRecipe

export const ItemRecipeSchema = mongo.createSchema<Types.ItemRecipeDocument>('ItemRecipe', {});

export const ItemRecipe = mongo.createModel<Types.ItemRecipeDocument>('ItemRecipe', ItemRecipeSchema);

// ItemSkin

export const ItemSkinSchema = mongo.createSchema<Types.ItemSkinDocument>('ItemSkin', {});

export const ItemSkin = mongo.createModel<Types.ItemSkinDocument>('ItemSkin', ItemSkinSchema);
