import { z, ObjectId, Entity } from '../../schema/zod';

export const Item = Entity.merge(
  z.object({
    token: z.string().max(500).nonempty(),
    assetId: ObjectId,
    chainId: ObjectId,
  })
);

export const ItemAttribute = Entity.merge(
  z.object({
    // Define fields for ItemAttribute here if needed
  })
);

export const ItemMaterial = Entity.merge(
  z.object({
    // Define fields for ItemMaterial here if needed
  })
);

export const ItemSet = Entity.merge(
  z.object({
    // Define fields for ItemSet here if needed
  })
);

export const ItemSlot = Entity.merge(
  z.object({
    // Define fields for ItemSlot here if needed
  })
);

export const ItemRarity = Entity.merge(
  z.object({
    // Define fields for ItemRarity here if needed
  })
);

export const ItemType = Entity.merge(
  z.object({
    // Define fields for ItemType here if needed
  })
);

export const ItemSubType = Entity.merge(
  z.object({
    // Define fields for ItemSubType here if needed
  })
);

export const ItemSpecificType = Entity.merge(
  z.object({
    // Define fields for ItemSpecificType here if needed
  })
);

export const ItemAffix = Entity.merge(
  z.object({
    // Define fields for ItemAffix here if needed
  })
);

export const ItemRecipe = Entity.merge(
  z.object({
    // Define fields for ItemRecipe here if needed
  })
);

export const ItemSkin = Entity.merge(
  z.object({
    // Define fields for ItemSkin here if needed
  })
);
