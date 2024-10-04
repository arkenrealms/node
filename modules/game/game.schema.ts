import { z, ObjectId, Entity } from '../../schema';

export const Game = Entity.merge(
  z.object({
    productId: ObjectId,
  })
);

export const Era = Entity.merge(z.object({}));
