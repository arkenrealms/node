import { z, ObjectId, Entity } from '../../schema/zod';

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

export const AreaType = Entity.merge(
  z.object({
    name: z.string().min(1),
    description: z.string().optional(),
  })
);
