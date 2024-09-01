import { z } from 'zod';
import * as schema from './item.schema';
import { Document, Model } from '../../util/mongo';

export type Item = z.infer<typeof schema.Item>;
export type ItemAttribute = z.infer<typeof schema.ItemAttribute>;
export type ItemMaterial = z.infer<typeof schema.ItemMaterial>;
export type ItemSet = z.infer<typeof schema.ItemSet>;
export type ItemSlot = z.infer<typeof schema.ItemSlot>;
export type ItemRarity = z.infer<typeof schema.ItemRarity>;
export type ItemType = z.infer<typeof schema.ItemType>;
export type ItemSubType = z.infer<typeof schema.ItemSubType>;
export type ItemSpecificType = z.infer<typeof schema.ItemSpecificType>;
export type ItemAffix = z.infer<typeof schema.ItemAffix>;
export type ItemRecipe = z.infer<typeof schema.ItemRecipe>;
export type ItemSkin = z.infer<typeof schema.ItemSkin>;
export type ItemTransmute = z.infer<typeof schema.ItemTransmute>;

export type ItemDocument = Item & Document;
export type ItemAttributeDocument = ItemAttribute & Document;
export type ItemMaterialDocument = ItemMaterial & Document;
export type ItemSetDocument = ItemSet & Document;
export type ItemSlotDocument = ItemSlot & Document;
export type ItemRarityDocument = ItemRarity & Document;
export type ItemTypeDocument = ItemType & Document;
export type ItemSubTypeDocument = ItemSubType & Document;
export type ItemSpecificTypeDocument = ItemSpecificType & Document;
export type ItemAffixDocument = ItemAffix & Document;
export type ItemRecipeDocument = ItemRecipe & Document;
export type ItemSkinDocument = ItemSkin & Document;
export type ItemTransmuteDocument = ItemTransmute & Document;

export type Mappings = {
  Item: Model<ItemDocument>;
  ItemAttribute: Model<ItemAttributeDocument>;
  ItemMaterial: Model<ItemMaterialDocument>;
  ItemSet: Model<ItemSetDocument>;
  ItemSlot: Model<ItemSlotDocument>;
  ItemRarity: Model<ItemRarityDocument>;
  ItemType: Model<ItemTypeDocument>;
  ItemSubType: Model<ItemSubTypeDocument>;
  ItemSpecificType: Model<ItemSpecificTypeDocument>;
  ItemAffix: Model<ItemAffixDocument>;
  ItemRecipe: Model<ItemRecipeDocument>;
  ItemSkin: Model<ItemSkinDocument>;
  ItemTransmute: Model<ItemTransmuteDocument>;
};
