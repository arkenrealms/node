import { z, ObjectId, Entity } from '../../schema/zod';

export const Profile = Entity.merge(
  z.object({
    accountId: ObjectId,
    points: z.number().optional(),
    coins: z.number().optional(),
    telegramUserId: z.number().optional(),
    interactions: z.number().default(0),
    activityRating: z.number().default(0),
    address: z.string().max(100).optional(),
    avatar: z.string().max(100).optional(),
    roleId: ObjectId.optional(),
    privateKey: z.string().max(300).optional(),
    signature: z.string().max(200).optional(),
    chainId: ObjectId.optional(),
    isBanned: z.boolean().optional(),
    banExpireDate: z.date().optional(),
    banReason: z.string().optional(),
  })
);
