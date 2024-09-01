import { z, ObjectId, Entity } from '../../schema/zod';

export const Asset = Entity.merge(
  z.object({
    uri: z.string().nonempty(),
    type: z.string().max(100).nonempty(),
    standard: z.string().max(100).nonempty(),
    licenseId: ObjectId.optional(),
    license: ObjectId.optional(),
    chainId: ObjectId.optional(),
    items: z.array(ObjectId).optional(),
  })
);

export const AssetLicense = Entity.merge(
  z.object({
    value: z.string().nonempty(),
    assets: z.array(ObjectId).optional(),
  })
);
