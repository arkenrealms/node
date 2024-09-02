import { z, ObjectId, Entity } from '../../schema';

// Account Schema
export const Account = Entity.merge(
  z.object({
    username: z.string().min(1),
    email: z.string().optional(),
    telegramUserId: z.number().optional(),
  })
);

// Achievement Schema
export const Achievement = Entity.merge(z.object({}));

// Act Schema
export const Act = Entity.merge(z.object({}));

// Agent Schema
export const Agent = Entity.merge(z.object({}));

// Application Schema
export const Application = Entity.merge(
  z.object({
    ownerId: ObjectId.optional(),
    metaverseId: ObjectId.optional(),
    name: z.string().min(1),
    description: z.string().optional(),
  })
);

// Badge Schema
export const Badge = Entity.merge(
  z.object({
    value: z.string().min(1),
  })
);

// BattlePass Schema
export const BattlePass = Entity.merge(z.object({}));

// Biome Schema
export const Biome = Entity.merge(z.object({}));

// BiomeFeature Schema
export const BiomeFeature = Entity.merge(z.object({}));

// Bounty Schema
export const Bounty = Entity.merge(z.object({}));

// Collection Schema
export const Collection = Entity.merge(
  z.object({
    value: z.string().optional(),
  })
);

// Comment Schema
export const Comment = Entity.merge(
  z.object({
    body: z.string().min(1),
    entity: ObjectId,
    entityModel: z.enum(['NewsArticle', 'ChainToken']),
    text: z.string(),
    ratingId: ObjectId,
  })
);

// Community Schema
export const Community = Entity.merge(
  z.object({
    value: z.string().optional(),
    ideas: z.array(ObjectId).optional(),
    products: z.array(ObjectId).optional(),
    projects: z.array(ObjectId).optional(),
  })
);

// Company Schema
export const Company = Entity.merge(
  z.object({
    content: z.string().optional(),
    people: z.array(ObjectId).optional(),
  })
);

// Conversation Schema
export const Conversation = Entity.merge(
  z.object({
    userId: ObjectId.optional(),
    messages: z.array(z.unknown()).optional(),
  })
);

// Data Schema
export const Data = Entity.merge(
  z.object({
    mod: z.string(),
  })
);

// Discussion Schema
export const Discussion = Entity.merge(
  z.object({
    content: z.string().optional(),
    parentId: ObjectId.optional(),
    rootMessageId: ObjectId.optional(),
    type: z.string().default('Discussion'),
  })
);

// Energy Schema
export const Energy = Entity.merge(z.object({}));

// Event Schema
export const Event = Entity.merge(
  z.object({
    value: z.string().optional(),
  })
);

// File Schema
export const File = Entity.merge(
  z.object({
    value: z.string().optional(),
    storageType: z.string().max(100).optional(),
    accessType: z.string().max(100).optional(),
  })
);

// Galaxy Schema
export const Galaxy = Entity.merge(
  z.object({
    universeId: ObjectId.optional(),
  })
);

// Guide Schema
export const Guide = Entity.merge(
  z.object({
    content: z.string().optional(),
    gameId: ObjectId.optional(),
    attachments: z.array(z.unknown()).optional(),
  })
);

// Idea Schema
export const Idea = Entity.merge(
  z.object({
    value: z.string().optional(),
    type: z.string().max(100).optional(),
    communityId: ObjectId.optional(),
  })
);

// Leaderboard Schema
export const Leaderboard = Entity.merge(
  z.object({
    value: z.string().optional(),
    productId: ObjectId.optional(),
  })
);

// Log Schema
export const Log = Entity.merge(
  z.object({
    mod: z.string(),
    messages: z.array(z.unknown()).optional(),
    tags: z.array(z.unknown()).optional(),
  })
);

// Lore Schema
export const Lore = Entity.merge(
  z.object({
    gameId: ObjectId.optional(),
  })
);

// Market Schema
export const Market = Entity.merge(
  z.object({
    value: z.string().optional(),
  })
);

// Memory Schema
export const Memory = Entity.merge(z.object({}));

// Message Schema
export const Message = Entity.merge(
  z.object({
    content: z.string().optional(),
    type: z.string().max(100).optional(),
    replyToId: ObjectId.optional(),
    parentId: ObjectId.optional(),
    parent: ObjectId.optional(),
    messages: z.array(ObjectId).optional(),
  })
);

// Metaverse Schema
export const Metaverse = Entity.merge(
  z.object({
    omniverseId: ObjectId,
    ratingId: ObjectId.optional(),
  })
);

// NewsArticle Schema
export const NewsArticle = Entity.merge(
  z.object({
    href: z.string(),
    source: z.string(),
  })
);

// Npc Schema
export const Npc = Entity.merge(
  z.object({
    characterRaceId: ObjectId.optional(),
    characterId: ObjectId.optional(),
  })
);

// Offer Schema
export const Offer = Entity.merge(
  z.object({
    value: z.string().optional(),
  })
);

// Omniverse Schema
export const Omniverse = Entity.merge(
  z.object({
    ratingId: ObjectId.optional(),
  })
);

// Order Schema
export const Order = Entity.merge(
  z.object({
    value: z.string().optional(),
  })
);

// Payment Schema
export const Payment = Entity.merge(
  z.object({
    value: z.string().optional(),
  })
);

// Permission Schema
export const Permission = Entity.merge(
  z.object({
    permissionsOnRoles: z.array(ObjectId).optional(),
  })
);

// Person Schema
export const Person = Entity.merge(
  z.object({
    content: z.string().optional(),
    companyId: ObjectId.optional(),
  })
);

// Planet Schema
export const Planet = Entity.merge(
  z.object({
    solarSystemId: ObjectId.optional(),
  })
);

// Poll Schema
export const Poll = Entity.merge(z.object({}));

// Project Schema
export const Project = Entity.merge(
  z.object({
    value: z.string().optional(),
    contractStatus: z.string().default('Pending').optional(),
    parentId: ObjectId.optional(),
    realmId: ObjectId.optional(),
    communityId: ObjectId.optional(),
    productId: ObjectId.optional(),
    ratingId: ObjectId.optional(),
  })
);

// Proposal Schema
export const Proposal = Entity.merge(
  z.object({
    content: z.string().optional(),
  })
);

// Quest Schema
export const Quest = Entity.merge(
  z.object({
    type: z.string().default('zone'),
  })
);

export const Question = Entity.merge(
  z.object({
    topics: z.array(z.unknown()).optional(),
    text: z.string(),
    answer: z.string(),
    popularity: z.number().optional(),
  })
);

// Rating Schema
export const Rating = Entity.merge(
  z.object({
    value: z.string().optional(),
    votes: z.array(ObjectId).optional(),
    projects: z.array(ObjectId).optional(),
    comments: z.array(ObjectId).optional(),
  })
);

// Realm Schema
export const Realm = Entity.merge(
  z.object({
    value: z.string().optional(),
  })
);

// RecordUpdate Schema
export const RecordUpdate = Entity.merge(
  z.object({
    objectType: z.string().max(100),
    objectId: z.string().min(1),
    actionType: z.string().max(100),
    reason: z.string().max(100),
    recordUpdatesOnForms: z.array(ObjectId).optional(),
    recordUpdatesOnProfiles: z.array(ObjectId).optional(),
  })
);

// Referral Schema
export const Referral = Entity.merge(
  z.object({
    recipientId: ObjectId,
    senderId: ObjectId,
    recipient: ObjectId.optional(),
    sender: ObjectId.optional(),
  })
);

// Review Schema
export const Review = Entity.merge(
  z.object({
    value: z.string().optional(),
  })
);

// Role Schema
export const Role = Entity.merge(
  z.object({
    value: z.string().optional(),
    rolesOnProfiles: z.array(ObjectId).optional(),
    permissionsOnRoles: z.array(ObjectId).optional(),
  })
);

// Season Schema
export const Season = Entity.merge(z.object({}));

// Server Schema
export const Server = Entity.merge(
  z.object({
    value: z.string().optional(),
  })
);

// Session Schema
export const Session = Entity.merge(
  z.object({
    expired: z.date(),
  })
);

// SolarSystem Schema
export const SolarSystem = Entity.merge(
  z.object({
    galaxyId: ObjectId.optional(),
  })
);

// Star Schema
export const Star = Entity.merge(z.object({}));

// Stash Schema
export const Stash = Entity.merge(z.object({}));

// Stock Schema
export const Stock = Entity.merge(
  z.object({
    rank: z.number().min(0).optional(),
    price: z.number().min(0).optional(),
    hourChange: z.number().optional(),
    dayChange: z.number().optional(),
    weekChange: z.number().optional(),
    marketCap: z.number().min(0).optional(),
    volume: z.number().min(0).optional(),
    ticker: z.string(),
    unusualActivity: z.number().min(0).optional(),
  })
);

// Suggestion Schema
export const Suggestion = Entity.merge(
  z.object({
    value: z.string().optional(),
  })
);

// Tag Schema
export const Tag = Entity.merge(
  z.object({
    value: z.string().optional(),
  })
);

// Team Schema
export const Team = Entity.merge(
  z.object({
    ratingId: ObjectId.optional(),
  })
);

// Tournament Schema
export const Tournament = Entity.merge(z.object({}));

// Trade Schema
export const Trade = Entity.merge(
  z.object({
    chainId: ObjectId,
    buyerId: ObjectId,
    content: z.string().optional(),
  })
);

// Universe Schema
export const Universe = Entity.merge(z.object({}));

// Validator Schema
export const Validator = Entity.merge(z.object({}));

// Vote Schema
export const Vote = Entity.merge(
  z.object({
    value: z.string().optional(),
    ratingId: ObjectId.optional(),
  })
);

// WorldEvent Schema
export const WorldEvent = Entity.merge(
  z.object({
    text: z.string().min(1),
    importance: z.number().optional(),
    tags: z.array(z.unknown()).optional(),
  })
);

// Stat schema
export const Stat = Entity.merge(
  z.object({
    number: z.number().default(0),
  })
);

export const Node = z.object({
  parentId: ObjectId,
  relationKey: z.string(),
  relationType: z.string(),
  fromAccountId: ObjectId.optional(),
  toAccountId: ObjectId.optional(),
  fromProfileId: ObjectId.optional(),
  toProfileId: ObjectId.optional(),
  fromBadgeId: ObjectId.optional(),
  toBadgeId: ObjectId.optional(),
  fromAchievementId: ObjectId.optional(),
  toAchievementId: ObjectId.optional(),
  fromIdeaId: ObjectId.optional(),
  toIdeaId: ObjectId.optional(),
  fromSuggestionId: ObjectId.optional(),
  toSuggestionId: ObjectId.optional(),
  fromProjectId: ObjectId.optional(),
  toProjectId: ObjectId.optional(),
  fromProductId: ObjectId.optional(),
  toProductId: ObjectId.optional(),
  fromAssetId: ObjectId.optional(),
  toAssetId: ObjectId.optional(),
  fromBountyId: ObjectId.optional(),
  toBountyId: ObjectId.optional(),
  fromRealmId: ObjectId.optional(),
  toRealmId: ObjectId.optional(),
  fromCommunityId: ObjectId.optional(),
  toCommunityId: ObjectId.optional(),
  fromCollectionId: ObjectId.optional(),
  toCollectionId: ObjectId.optional(),
  fromDiscussionId: ObjectId.optional(),
  toDiscussionId: ObjectId.optional(),
  fromMessageId: ObjectId.optional(),
  toMessageId: ObjectId.optional(),
  fromOfferId: ObjectId.optional(),
  toOfferId: ObjectId.optional(),
  fromLicenseId: ObjectId.optional(),
  toLicenseId: ObjectId.optional(),
  fromOrderId: ObjectId.optional(),
  toOrderId: ObjectId.optional(),
  fromRatingId: ObjectId.optional(),
  toRatingId: ObjectId.optional(),
  fromReviewId: ObjectId.optional(),
  toReviewId: ObjectId.optional(),
  fromTagId: ObjectId.optional(),
  toTagId: ObjectId.optional(),
  fromVoteId: ObjectId.optional(),
  toVoteId: ObjectId.optional(),
  fromLeaderboardId: ObjectId.optional(),
  toLeaderboardId: ObjectId.optional(),
  fromLogId: ObjectId.optional(),
  toLogId: ObjectId.optional(),
  fromFileId: ObjectId.optional(),
  toFileId: ObjectId.optional(),
  fromEventId: ObjectId.optional(),
  toEventId: ObjectId.optional(),
  fromServerId: ObjectId.optional(),
  toServerId: ObjectId.optional(),
});
