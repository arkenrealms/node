import { z, ObjectId, Entity } from '../../schema/zod';

export const Product = Entity.merge(
  z.object({
    shortDescription: z.string().max(300).nonempty(),
    content: z.string().nonempty(),
    communityId: ObjectId,
    type: z.string().max(100).default('game'),
    releaseDate: z.date().optional(),
  })
);

export const ProductUpdate = Entity.merge(
  z.object({
    productId: ObjectId,
    updateContent: z.string().nonempty(),
    updateDate: z.date(),
  })
);
