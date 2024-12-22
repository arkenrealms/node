import { z, ObjectId, Entity } from '../../schema';

export const Area = Entity.merge(
  z.object({
    type: z.string().default('zone'),
    landmarks: z.array(ObjectId).optional(),
  })
);

export const AreaLandmark = Entity.merge(
  z.object({
    areaId: ObjectId.optional(),
    area: ObjectId.optional(),
  })
);

export const AreaType = Entity.merge(z.object({}));

export const AreaNameChoice = Entity.merge(z.object({}));
