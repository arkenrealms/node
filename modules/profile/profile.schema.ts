import { z, ObjectId, Entity } from '../../schema';

// Profile schema for a user on a digital game platform
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

    bio: z.string().optional(),
    banner: z.string().url().optional(), // URL to the user's banner image
    friends: z.array(ObjectId).optional(), // List of User IDs who are friends with this profile
    achievements: z.array(ObjectId).optional(), // List of Achievement IDs
    badges: z.array(ObjectId).optional(), // List of Badge IDs
    settings: z
      .object({
        privacy: z.enum(['public', 'private', 'friends-only']).default('public'),
        notifications: z.boolean().default(true),
      })
      .optional(),
    stats: z
      .object({
        gamesOwned: z.number().int().nonnegative().default(0),
        playtime: z.number().nonnegative().default(0), // Total playtime in hours
        level: z.number().int().nonnegative().default(0),
        xp: z.number().int().nonnegative().default(0),
      })
      .optional(),
  })
);
