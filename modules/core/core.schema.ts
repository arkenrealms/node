// core.schema.ts

import { z, ObjectId, Entity } from '../../schema';
import { Profile } from '../profile/profile.schema';
import { ProfileDocument } from '../profile/profile.types';

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
export const Badge = Entity.merge(z.object({}));

// BattlePass Schema
export const BattlePass = Entity.merge(z.object({}));

// Biome Schema
export const Biome = Entity.merge(z.object({}));

// BiomeFeature Schema
export const BiomeFeature = Entity.merge(z.object({}));

// Bounty Schema
export const Bounty = Entity.merge(z.object({}));

// Collection Schema
export const Collection = Entity.merge(z.object({}));

// Comment Schema
export const Comment = Entity.merge(
  z.object({
    body: z.string().min(1),
    entity: ObjectId,
    entityModel: z.string(), // Changed from enum to string
    text: z.string(),
    ratingId: ObjectId.optional(),
  })
);

// Community Schema
export const Community = Entity.merge(
  z.object({
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
    profileId: ObjectId.optional(),
    messages: z.array(z.unknown()).optional(),
    isLocked: z.boolean().default(true),
  })
);

// Data Schema
export const Data = Entity.merge(
  z.object({
    mod: z.string(),
  })
);

// Meta Schema
export const Meta = Entity.merge(z.object({}));

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
export const Event = Entity.merge(z.object({}));

// File Schema
export const File = Entity.merge(
  z.object({
    content: z.string().optional(),
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
    type: z.string().max(100).optional(),
    communityId: ObjectId.optional(),
  })
);

// Leaderboard Schema
export const Leaderboard = Entity.merge(
  z.object({
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
export const Market = Entity.merge(z.object({}));

// Memory Schema
export const Memory = Entity.merge(z.object({}));

// Message Schema
export const Message = Entity.merge(
  z.object({
    conversationId: ObjectId.optional(),
    content: z.string().optional(),
    type: z.string().max(100).optional(),
    replyToId: ObjectId.optional(),
    parentId: ObjectId.optional(),
    parent: ObjectId.optional(),
    messageIds: z.array(ObjectId).optional(),
    // messages: z.array(ObjectId).optional(),
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
export const Offer = Entity.merge(z.object({}));

// Omniverse Schema
export const Omniverse = Entity.merge(
  z.object({
    ratingId: ObjectId.optional(),
  })
);

// Order Schema
export const Order = Entity.merge(z.object({}));

// Payment Schema
export const Payment = Entity.merge(
  z.object({
    owner: Profile.optional(),
    status: z
      .enum([
        'Archived',
        'Processing',
        'Failed',
        'Submitted',
        'Denied',
        'Processed',
        'Voided',
        'Completed',
        'Refunding',
        'Refunded',
        'Expired',
      ])
      .default('Submitted'),
  })
);

// Permission Schema
export const Permission = Entity.merge(
  z.object({
    roles: z.array(ObjectId).optional(),
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
    content: z.string().optional(),
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

// Question Schema
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
    votes: z.array(ObjectId).optional(),
    projects: z.array(ObjectId).optional(),
    comments: z.array(ObjectId).optional(),
  })
);

// Referral Schema
export const Referral = Entity.merge(
  z.object({
    recipientId: ObjectId.optional(),
    senderId: ObjectId.optional(),
  })
);

// Revision Schema
export const Revision = Entity.merge(
  z.object({
    objectType: z.string().max(100),
    objectId: z.string().min(1),
    actionType: z.string().max(100),
    reason: z.string().max(100),
    interfaces: z.array(ObjectId).optional(),
    profiles: z.array(ObjectId).optional(),
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
    profiles: z.array(ObjectId).optional(),
    permissions: z.array(ObjectId).optional(),
  })
);

// Season Schema
export const Season = Entity.merge(z.object({}));

// RealmShard Schema
export const RealmShard = Entity.merge(
  z.object({
    endpoint: z.string().max(100),
    realmId: ObjectId.optional(),
    status: z.string().default('Offline').optional(),
    clientCount: z.number(),
  })
);

// Realm Schema
export const Realm = Entity.merge(
  z.object({
    endpoint: z.string().max(100).optional(),
    realmShards: z.array(RealmShard).optional(),
    gameId: ObjectId,
    status: z.string().default('Offline').optional(),
    clientCount: z.number(),
    regionCode: z.string(),
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
    content: z.string().optional(),
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
    profiles: z.array(Profile).optional(), // TODO: convert to 'members'
    limit: z.number().optional().default(50),
    points: z.number().optional().default(0),
    memberCount: z.number().optional().default(0),
  })
);

// Party Schema
export const Party = Entity.merge(
  z.object({
    targetAreaId: ObjectId.optional(),
    limit: z.number().default(6),
    isPublic: z.boolean().default(true),
    isVisibleToEnemies: z.boolean().default(true),
    isApprovalRequired: z.boolean().default(false),
    isNonLeaderInviteAllowed: z.boolean().default(false),
    isCombatEnabled: z.boolean().default(true),
    isDisbandEnabled: z.boolean().default(false),
    isFriendlyFireEnabled: z.boolean().default(true),
    isLocalQuestShared: z.boolean().default(true),
    isGlobalQuestShared: z.boolean().default(true),
    isMergeEnabled: z.boolean().default(false),
    isRejoinEnabled: z.boolean().default(false),
    itemDistribution: z.enum(['Random', 'Personal']),
    leaderId: ObjectId.optional(),
    powerRequired: z.number().default(1),
    levelRequired: z.number().default(1),
    approvalMethod: z.enum(['Auto Accept', 'Approval Required']),
    memberIds: z.array(ObjectId).optional(),
    assistantIds: z.array(ObjectId).optional(), // have control over party even if not in party
    pendingMemberIds: z.array(ObjectId).optional(),
    blockedMemberIds: z.array(ObjectId).optional(),
    members: z.array(Profile).optional().default([]),
  })
);

// Tournament Schema
export const Tournament = Entity.merge(z.object({}));

// Trade Schema
export const Trade = Entity.merge(
  z.object({
    status: z.enum(['Paused', 'Pending', 'Active', 'Delisted', 'Sold']).default('Active'), // Default set in StatusEnum matches Mongoose
    chainId: ObjectId.optional(),
    buyerId: ObjectId.optional(),
    parentId: ObjectId.optional(),
    productId: ObjectId.optional(),
    sellerId: ObjectId.optional(),
    itemId: ObjectId.optional(),
    tokenId: ObjectId.optional(),
  })
);

// Universe Schema
export const Universe = Entity.merge(z.object({}));

// Validator Schema
export const Validator = Entity.merge(z.object({}));

// Vote Schema
export const Vote = Entity.merge(
  z.object({
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

// WorldRecord Schema
export const WorldRecord = Entity.merge(
  z.object({
    gameId: ObjectId.optional(),
    holderId: ObjectId,
    score: z.number().default(0),
  })
);

// Stat Schema
export const Stat = Entity.merge(
  z.object({
    number: z.number().default(0),
  })
);

// Define the enum of model names
export const ModelNames = z.enum([
  'Account',
  'Achievement',
  'Act',
  'Agent',
  'Application',
  'Badge',
  'BattlePass',
  'Biome',
  'BiomeFeature',
  'Bounty',
  'Collection',
  'Comment',
  'Community',
  'Company',
  'Conversation',
  'Data',
  'Discussion',
  'Energy',
  'Event',
  'File',
  'Galaxy',
  'Guide',
  'Idea',
  'Leaderboard',
  'Log',
  'Lore',
  'Market',
  'Memory',
  'Message',
  'Metaverse',
  'NewsArticle',
  'Npc',
  'Offer',
  'Omniverse',
  'Order',
  'Payment',
  'Party',
  'Permission',
  'Person',
  'Planet',
  'Poll',
  'Project',
  'Proposal',
  'Quest',
  'Question',
  'Rating',
  'Realm',
  'Referral',
  'Revision',
  'Review',
  'Role',
  'Season',
  'RealmShard',
  'Session',
  'SolarSystem',
  'Star',
  'Stash',
  'Stock',
  'Suggestion',
  'Tag',
  'Team',
  'Tournament',
  'Trade',
  'Universe',
  'Validator',
  'Vote',
  'WorldEvent',
  'WorldRecord',
  'Stat',
]);

// Node Schema for polymorphic relationships
export const Node = z.object({
  relationKey: z.string(),
  fromModel: ModelNames,
  from: ObjectId,
  toModel: ModelNames,
  to: ObjectId,
});

export const Prefab = Entity.merge(
  z.object({
    name: z.string().min(1),
    fbxPath: z.string().min(1),
    customizationOptions: z.record(z.any()).optional(), // Allows flexibility for customizable properties
    childPrefabs: z
      .array(
        z.object({
          prefabId: ObjectId,
          position: z.object({
            x: z.number(),
            y: z.number(),
            z: z.number(),
          }),
          rotation: z
            .object({
              x: z.number(),
              y: z.number(),
              z: z.number(),
            })
            .optional(),
          scale: z.number().positive().default(1),
        })
      )
      .optional(),
  })
);

export const Object = Entity.merge(
  z.object({
    prefabId: ObjectId,
    playerId: ObjectId,
    coordinates: z.object({
      x: z.number(),
      y: z.number(),
      z: z.number(),
    }),
    rotation: z
      .object({
        x: z.number(),
        y: z.number(),
        z: z.number(),
      })
      .optional(),
    scale: z.number().positive().default(1),
    customizations: z.record(z.any()).optional(),
    childInstances: z
      .array(
        z.object({
          prefabId: ObjectId,
          coordinates: z.object({
            x: z.number(),
            y: z.number(),
            z: z.number(),
          }),
          rotation: z
            .object({
              x: z.number(),
              y: z.number(),
              z: z.number(),
            })
            .optional(),
          scale: z.number().positive().default(1),
        })
      )
      .optional(),
  })
);

export const ObjectInteraction = Entity.merge(
  z.object({
    profileId: ObjectId,
    objectId: ObjectId,
    interactionType: z.enum(['Use', 'Fight', 'Open', 'Talk', 'Touch']),
    outcome: z.record(z.any()).optional(),
  })
);
