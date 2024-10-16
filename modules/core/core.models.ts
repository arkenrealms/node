// core.models.ts

import * as mongo from '../../util/mongo';
import type * as Types from './core.types';

// Function to add tag virtuals using the Node model
const addTagVirtuals = (modelName: string) => [
  {
    name: 'tags',
    ref: 'Node',
    localField: '_id',
    foreignField: 'from',
    justOne: false,
    match: { relationKey: 'tag', fromModel: modelName },
  },
];

// Function to add application virtual
const addApplicationVirtual = () => [
  {
    name: 'application',
    ref: 'Application',
    localField: 'applicationId',
    foreignField: '_id',
    justOne: true,
  },
];

// Omniverse Model
export const Omniverse = mongo.createModel<Types.OmniverseDocument>(
  'Omniverse',
  {
    ratingId: { type: mongo.Schema.Types.ObjectId, ref: 'Rating' },
  },
  {
    extend: 'CommonFields',
    virtuals: [...addTagVirtuals('Omniverse'), ...addApplicationVirtual()],
  }
);

// Metaverse Model
export const Metaverse = mongo.createModel<Types.MetaverseDocument>(
  'Metaverse',
  {
    omniverseId: { type: mongo.Schema.Types.ObjectId, ref: 'Omniverse', required: true },
    ratingId: { type: mongo.Schema.Types.ObjectId, ref: 'Rating' },
  },
  {
    extend: 'CommonFields',
    virtuals: [...addTagVirtuals('Metaverse'), ...addApplicationVirtual()],
  }
);

// Application Model
export const Application = mongo.createModel<Types.ApplicationDocument>(
  'Application',
  {
    ownerId: { type: mongo.Schema.Types.ObjectId, ref: 'Account' },
    metaverseId: { type: mongo.Schema.Types.ObjectId, ref: 'Metaverse' },
    name: { type: String, required: true },
    description: { type: String },
  },
  {
    extend: 'CommonFields',
    indexes: [{ metaverseId: 1, name: 1, unique: true }],
    virtuals: [
      ...addTagVirtuals('Application'),
      { name: 'agents' },
      { name: 'chain' },
      { name: 'account' },
      { name: 'assets' },
      { name: 'badges' },
      { name: 'battlePasses' },
      { name: 'collections' },
      { name: 'communities' },
      { name: 'discussions' },
      { name: 'events' },
      { name: 'exchanges' },
      { name: 'files' },
      { name: 'ideas' },
      { name: 'leaderboards' },
      { name: 'assetLicenses' },
      { name: 'logs' },
      { name: 'marketPairs' },
      { name: 'markets' },
      { name: 'messages' },
      { name: 'offers' },
      { name: 'orders' },
      { name: 'products' },
      { name: 'projects' },
      { name: 'ratings' },
      { name: 'realms' },
      { name: 'reviews' },
      { name: 'roles' },
      { name: 'gameServers' },
      { name: 'suggestions' },
      { name: 'tags' },
      { name: 'tokens' },
      { name: 'tradeIdeas' },
      { name: 'trades' },
      { name: 'buyerTrades' },
      { name: 'transactions' },
      { name: 'votes' },
      { name: 'payments' },
      { name: 'permissions' },
      { name: 'stats' },
      { name: 'revisions' },
      { name: 'comments' },
      { name: 'interfaces' },
      { name: 'characters' },
      { name: 'metaverses' },
      { name: 'omniverses' },
      { name: 'referrals' },
      { name: 'recipientReferrals' },
      { name: 'senderReferrals' },
      { name: 'chains' },
      { name: 'characterAbilities' },
      { name: 'tournaments' },
      { name: 'teams' },
      { name: 'items' },
      { name: 'skills' },
      { name: 'itemRecipes' },
      { name: 'itemSkins' },
      { name: 'stashes' },
      { name: 'biomes' },
      { name: 'planets' },
      { name: 'solarSystems' },
      { name: 'universes' },
      { name: 'stars' },
      { name: 'areas' },
      { name: 'acts' },
      { name: 'characterClasses' },
      { name: 'characterFactions' },
      { name: 'eras' },
      { name: 'seasons' },
      { name: 'itemAttributes' },
      { name: 'itemMaterials' },
      { name: 'itemSets' },
      { name: 'itemSlots' },
      { name: 'itemRarities' },
      { name: 'itemTypes' },
      { name: 'itemSubTypes' },
      { name: 'itemSpecificTypes' },
      { name: 'characterGenders' },
      { name: 'characterRaces' },
      { name: 'characterPersonalities' },
      { name: 'characterTitles' },
      { name: 'lores' },
      { name: 'energies' },
      { name: 'guides' },
      { name: 'achievements' },
      { name: 'games' },
      { name: 'npcs' },
      { name: 'characterAttributes' },
      { name: 'characterTypes' },
      { name: 'areaTypes' },
      { name: 'areaLandmarks' },
      { name: 'biomeFeatures' },
      { name: 'skillMods' },
      { name: 'skillClassifications' },
      { name: 'skillConditions' },
      { name: 'skillStatusEffects' },
      { name: 'skillTrees' },
      { name: 'skillTreeNodes' },
      { name: 'areaNameChoices' },
      { name: 'characterNameChoices' },
      { name: 'validators' },
      { name: 'productUpdates' },
      { name: 'polls' },
      { name: 'galaxies' },
      { name: 'quests' },
      { name: 'raffles' },
      { name: 'raffleEntries' },
      { name: 'raffleRequirements' },
      { name: 'raffleRewards' },
      { name: 'proposals' },
      { name: 'companies' },
      { name: 'people' },
    ],
  }
);

// Account Model
export const Account = mongo.createModel<Types.AccountDocument>(
  'Account',
  {
    username: { type: String, required: true },
    email: { type: String },
    telegramUserId: { type: Number },
  },
  {
    indexes: [
      { applicationId: 1, username: 1, unique: true },
      { applicationId: 1, telegramUserId: 1, unique: true },
    ],
    virtuals: [
      {
        name: 'profiles',
        ref: 'Profile',
        localField: '_id',
        foreignField: 'accountId',
        justOne: false,
      },
      ...addTagVirtuals('Account'),
      ...addApplicationVirtual(),
    ],
  }
);

// Achievement Model
export const Achievement = mongo.createModel<Types.AchievementDocument>(
  'Achievement',
  {},
  {
    virtuals: [...addTagVirtuals('Achievement'), ...addApplicationVirtual()],
  }
);

// Act Model
export const Act = mongo.createModel<Types.ActDocument>(
  'Act',
  {},
  {
    virtuals: [...addTagVirtuals('Act'), ...addApplicationVirtual()],
  }
);

// Agent Model
export const Agent = mongo.createModel<Types.AgentDocument>(
  'Agent',
  {},
  {
    virtuals: [...addTagVirtuals('Agent'), ...addApplicationVirtual()],
  }
);

// Badge Model
export const Badge = mongo.createModel<Types.BadgeDocument>(
  'Badge',
  {},
  {
    virtuals: [...addTagVirtuals('Badge'), ...addApplicationVirtual()],
  }
);

// BattlePass Model
export const BattlePass = mongo.createModel<Types.BattlePassDocument>(
  'BattlePass',
  {},
  {
    virtuals: [...addTagVirtuals('BattlePass'), ...addApplicationVirtual()],
  }
);

// Biome Model
export const Biome = mongo.createModel<Types.BiomeDocument>(
  'Biome',
  {},
  {
    virtuals: [...addTagVirtuals('Biome'), ...addApplicationVirtual()],
  }
);

// BiomeFeature Model
export const BiomeFeature = mongo.createModel<Types.BiomeFeatureDocument>(
  'BiomeFeature',
  {},
  {
    virtuals: [...addTagVirtuals('BiomeFeature'), ...addApplicationVirtual()],
  }
);

// Bounty Model
export const Bounty = mongo.createModel<Types.BountyDocument>(
  'Bounty',
  {},
  {
    virtuals: [...addTagVirtuals('Bounty'), ...addApplicationVirtual()],
  }
);

// Collection Model
export const Collection = mongo.createModel<Types.CollectionDocument>(
  'Collection',
  {},
  {
    virtuals: [...addTagVirtuals('Collection'), ...addApplicationVirtual()],
  }
);

// Comment Model
export const Comment = mongo.createModel<Types.CommentDocument>(
  'Comment',
  {
    body: { type: String, required: true },
    entity: { type: mongo.Schema.Types.ObjectId },
    entityModel: { type: String },
    text: { type: String },
    ratingId: { type: mongo.Schema.Types.ObjectId, ref: 'Rating' },
  },
  {
    virtuals: [...addTagVirtuals('Comment'), ...addApplicationVirtual()],
  }
);

// Community Model
export const Community = mongo.createModel<Types.CommunityDocument>(
  'Community',
  {
    ideas: [{ type: mongo.Schema.Types.ObjectId, ref: 'Idea' }],
    products: [{ type: mongo.Schema.Types.ObjectId, ref: 'Product' }],
    projects: [{ type: mongo.Schema.Types.ObjectId, ref: 'Project' }],
  },
  {
    virtuals: [...addTagVirtuals('Community'), ...addApplicationVirtual()],
  }
);

// Company Model
export const Company = mongo.createModel<Types.CompanyDocument>(
  'Company',
  {
    content: { type: String },
    people: [{ type: mongo.Schema.Types.ObjectId, ref: 'Person' }],
  },
  {
    virtuals: [...addTagVirtuals('Company'), ...addApplicationVirtual()],
  }
);

// Conversation Model
export const Conversation = mongo.createModel<Types.ConversationDocument>(
  'Conversation',
  {
    userId: { type: mongo.Schema.Types.ObjectId, ref: 'User' },
    messages: [mongo.Schema.Types.Mixed],
  },
  {
    virtuals: [...addTagVirtuals('Conversation'), ...addApplicationVirtual()],
  }
);

// Data Model
export const Data = mongo.createModel<Types.DataDocument>(
  'Data',
  {
    mod: { type: String, required: true },
  },
  {
    virtuals: [...addTagVirtuals('Data'), ...addApplicationVirtual()],
  }
);

// Discussion Model
export const Discussion = mongo.createModel<Types.DiscussionDocument>(
  'Discussion',
  {
    content: { type: String },
    parentId: { type: mongo.Schema.Types.ObjectId, ref: 'Discussion' },
    rootMessageId: { type: mongo.Schema.Types.ObjectId, ref: 'Message' },
    type: { type: String, default: 'Discussion' },
  },
  {
    virtuals: [...addTagVirtuals('Discussion'), ...addApplicationVirtual()],
  }
);

// Energy Model
export const Energy = mongo.createModel<Types.EnergyDocument>(
  'Energy',
  {},
  {
    virtuals: [...addTagVirtuals('Energy'), ...addApplicationVirtual()],
  }
);

// Event Model
export const Event = mongo.createModel<Types.EventDocument>(
  'Event',
  {},
  {
    virtuals: [...addTagVirtuals('Event'), ...addApplicationVirtual()],
  }
);

// File Model
export const File = mongo.createModel<Types.FileDocument>(
  'File',
  {
    content: { type: String },
    storageType: { type: String, max: 100 },
    accessType: { type: String, max: 100 },
  },
  {
    virtuals: [...addTagVirtuals('File'), ...addApplicationVirtual()],
  }
);

// Galaxy Model
export const Galaxy = mongo.createModel<Types.GalaxyDocument>(
  'Galaxy',
  {
    universeId: { type: mongo.Schema.Types.ObjectId, ref: 'Universe' },
  },
  {
    virtuals: [...addTagVirtuals('Galaxy'), ...addApplicationVirtual()],
  }
);

// Guide Model
export const Guide = mongo.createModel<Types.GuideDocument>(
  'Guide',
  {
    content: { type: String },
    gameId: { type: mongo.Schema.Types.ObjectId, ref: 'Game' },
    attachments: [mongo.Schema.Types.Mixed],
  },
  {
    virtuals: [...addTagVirtuals('Guide'), ...addApplicationVirtual()],
  }
);

// Idea Model
export const Idea = mongo.createModel<Types.IdeaDocument>(
  'Idea',
  {
    type: { type: String, max: 100 },
    communityId: { type: mongo.Schema.Types.ObjectId, ref: 'Community' },
  },
  {
    virtuals: [...addTagVirtuals('Idea'), ...addApplicationVirtual()],
  }
);

// Leaderboard Model
export const Leaderboard = mongo.createModel<Types.LeaderboardDocument>(
  'Leaderboard',
  {
    productId: { type: mongo.Schema.Types.ObjectId, ref: 'Product' },
  },
  {
    virtuals: [...addTagVirtuals('Leaderboard'), ...addApplicationVirtual()],
  }
);

// Log Model
export const Log = mongo.createModel<Types.LogDocument>(
  'Log',
  {
    mod: { type: String, required: true },
    messages: [mongo.Schema.Types.Mixed],
    // tags: [mongo.Schema.Types.Mixed],
  },
  {
    virtuals: [...addTagVirtuals('Log'), ...addApplicationVirtual()],
  }
);

// Lore Model
export const Lore = mongo.createModel<Types.LoreDocument>(
  'Lore',
  {
    gameId: { type: mongo.Schema.Types.ObjectId, ref: 'Game' },
  },
  {
    virtuals: [...addTagVirtuals('Lore'), ...addApplicationVirtual()],
  }
);

// Market Model
export const Market = mongo.createModel<Types.MarketDocument>(
  'Market',
  {},
  {
    virtuals: [...addTagVirtuals('Market'), ...addApplicationVirtual()],
  }
);

// Memory Model
export const Memory = mongo.createModel<Types.MemoryDocument>(
  'Memory',
  {},
  {
    virtuals: [...addTagVirtuals('Memory'), ...addApplicationVirtual()],
  }
);

// Message Model
export const Message = mongo.createModel<Types.MessageDocument>(
  'Message',
  {
    content: { type: String },
    type: { type: String, max: 100 },
    replyToId: { type: mongo.Schema.Types.ObjectId, ref: 'Message' },
    parentId: { type: mongo.Schema.Types.ObjectId, ref: 'Message' },
    parent: { type: mongo.Schema.Types.ObjectId, ref: 'Message' },
    messages: [{ type: mongo.Schema.Types.ObjectId, ref: 'Message' }],
  },
  {
    virtuals: [...addTagVirtuals('Message'), ...addApplicationVirtual()],
  }
);

// NewsArticle Model
export const NewsArticle = mongo.createModel<Types.NewsArticleDocument>(
  'NewsArticle',
  {
    href: { type: String, required: true },
    source: { type: String, required: true },
  },
  {
    virtuals: [...addTagVirtuals('NewsArticle'), ...addApplicationVirtual()],
  }
);

// Npc Model
export const Npc = mongo.createModel<Types.NpcDocument>(
  'Npc',
  {
    characterRaceId: { type: mongo.Schema.Types.ObjectId, ref: 'CharacterRace' },
    characterId: { type: mongo.Schema.Types.ObjectId, ref: 'Character' },
  },
  {
    virtuals: [...addTagVirtuals('Npc'), ...addApplicationVirtual()],
  }
);

// Offer Model
export const Offer = mongo.createModel<Types.OfferDocument>(
  'Offer',
  {},
  {
    virtuals: [...addTagVirtuals('Offer'), ...addApplicationVirtual()],
  }
);

// Order Model
export const Order = mongo.createModel<Types.OrderDocument>(
  'Order',
  {},
  {
    virtuals: [...addTagVirtuals('Order'), ...addApplicationVirtual()],
  }
);

// Payment Model
export const Payment = mongo.createModel<Types.PaymentDocument>(
  'Payment',
  {},
  {
    virtuals: [...addTagVirtuals('Payment'), ...addApplicationVirtual()],
  }
);

// Permission Model
export const Permission = mongo.createModel<Types.PermissionDocument>(
  'Permission',
  {
    roles: [{ type: mongo.Schema.Types.ObjectId, ref: 'Role' }],
  },
  {
    virtuals: [...addTagVirtuals('Permission'), ...addApplicationVirtual()],
  }
);

// Person Model
export const Person = mongo.createModel<Types.PersonDocument>(
  'Person',
  {
    content: { type: String },
    companyId: { type: mongo.Schema.Types.ObjectId, ref: 'Company' },
  },
  {
    virtuals: [...addTagVirtuals('Person'), ...addApplicationVirtual()],
  }
);

// Planet Model
export const Planet = mongo.createModel<Types.PlanetDocument>(
  'Planet',
  {
    solarSystemId: { type: mongo.Schema.Types.ObjectId, ref: 'SolarSystem' },
  },
  {
    virtuals: [...addTagVirtuals('Planet'), ...addApplicationVirtual()],
  }
);

// Poll Model
export const Poll = mongo.createModel<Types.PollDocument>(
  'Poll',
  {},
  {
    virtuals: [...addTagVirtuals('Poll'), ...addApplicationVirtual()],
  }
);

// Project Model
export const Project = mongo.createModel<Types.ProjectDocument>(
  'Project',
  {
    content: { type: String },
    contractStatus: { type: String, default: 'Pending' },
    parentId: { type: mongo.Schema.Types.ObjectId, ref: 'Project' },
    realmId: { type: mongo.Schema.Types.ObjectId, ref: 'Realm' },
    communityId: { type: mongo.Schema.Types.ObjectId, ref: 'Community' },
    productId: { type: mongo.Schema.Types.ObjectId, ref: 'Product' },
    ratingId: { type: mongo.Schema.Types.ObjectId, ref: 'Rating' },
  },
  {
    virtuals: [...addTagVirtuals('Project'), ...addApplicationVirtual()],
  }
);

// Proposal Model
export const Proposal = mongo.createModel<Types.ProposalDocument>(
  'Proposal',
  {
    content: { type: String },
  },
  {
    virtuals: [...addTagVirtuals('Proposal'), ...addApplicationVirtual()],
  }
);

// Quest Model
export const Quest = mongo.createModel<Types.QuestDocument>(
  'Quest',
  {
    type: { type: String, default: 'zone' },
  },
  {
    virtuals: [...addTagVirtuals('Quest'), ...addApplicationVirtual()],
  }
);

// Question Model
export const Question = mongo.createModel<Types.QuestionDocument>(
  'Question',
  {
    topics: [mongo.Schema.Types.Mixed],
    text: { type: String, required: true },
    answer: { type: String, required: true },
    popularity: { type: Number },
  },
  {
    virtuals: [...addTagVirtuals('Question'), ...addApplicationVirtual()],
  }
);

// Rating Model
export const Rating = mongo.createModel<Types.RatingDocument>(
  'Rating',
  {
    votes: [{ type: mongo.Schema.Types.ObjectId, ref: 'Vote' }],
  },
  {
    virtuals: [...addTagVirtuals('Rating'), ...addApplicationVirtual()],
  }
);

// Realm Model
export const Realm = mongo.createModel<Types.RealmDocument>(
  'Realm',
  { gameId: { type: mongo.Schema.Types.ObjectId, ref: 'Game', required: true } },
  {
    virtuals: [...addTagVirtuals('Realm'), ...addApplicationVirtual()],
  }
);

// Referral Model
export const Referral = mongo.createModel<Types.ReferralDocument>(
  'Referral',
  {
    recipientId: { type: mongo.Schema.Types.ObjectId, ref: 'Profile', required: true },
    senderId: { type: mongo.Schema.Types.ObjectId, ref: 'Profile', required: true },
  },
  {
    virtuals: [...addTagVirtuals('Referral'), ...addApplicationVirtual()],
  }
);

// Review Model
export const Review = mongo.createModel<Types.ReviewDocument>(
  'Review',
  {
    value: { type: String },
  },
  {
    virtuals: [...addTagVirtuals('Review'), ...addApplicationVirtual()],
  }
);

// Role Model
export const Role = mongo.createModel<Types.RoleDocument>(
  'Role',
  {
    value: { type: String },
    profiles: [{ type: mongo.Schema.Types.ObjectId, ref: 'Profile' }],
    permissions: [{ type: mongo.Schema.Types.ObjectId, ref: 'Permission' }],
  },
  {
    virtuals: [...addTagVirtuals('Role'), ...addApplicationVirtual()],
  }
);

// Season Model
export const Season = mongo.createModel<Types.SeasonDocument>(
  'Season',
  {},
  {
    virtuals: [...addTagVirtuals('Season'), ...addApplicationVirtual()],
  }
);

// Server Model
export const Server = mongo.createModel<Types.ServerDocument>(
  'Server',
  {
    realmId: { type: mongo.Schema.Types.ObjectId, ref: 'Realm' },
  },
  {
    virtuals: [...addTagVirtuals('Server'), ...addApplicationVirtual()],
  }
);

// Session Model
export const Session = mongo.createModel<Types.SessionDocument>(
  'Session',
  {
    expired: { type: Date, required: true },
  },
  {
    virtuals: [...addTagVirtuals('Session'), ...addApplicationVirtual()],
  }
);

// SolarSystem Model
export const SolarSystem = mongo.createModel<Types.SolarSystemDocument>(
  'SolarSystem',
  {
    galaxyId: { type: mongo.Schema.Types.ObjectId, ref: 'Galaxy' },
  },
  {
    virtuals: [...addTagVirtuals('SolarSystem'), ...addApplicationVirtual()],
  }
);

// Star Model
export const Star = mongo.createModel<Types.StarDocument>(
  'Star',
  {},
  {
    virtuals: [...addTagVirtuals('Star'), ...addApplicationVirtual()],
  }
);

// Stat Model
export const Stat = mongo.createModel<Types.StatDocument>(
  'Stat',
  {
    number: { type: Number, default: 0 },
  },
  {
    virtuals: [...addTagVirtuals('Stat'), ...addApplicationVirtual()],
  }
);

// Stash Model
export const Stash = mongo.createModel<Types.StashDocument>(
  'Stash',
  {},
  {
    virtuals: [...addTagVirtuals('Stash'), ...addApplicationVirtual()],
  }
);

// Stock Model
export const Stock = mongo.createModel<Types.StockDocument>(
  'Stock',
  {
    rank: { type: Number, min: 0 },
    price: { type: Number, min: 0 },
    hourChange: { type: Number },
    dayChange: { type: Number },
    weekChange: { type: Number },
    marketCap: { type: Number, min: 0 },
    volume: { type: Number, min: 0 },
    ticker: { type: String },
    unusualActivity: { type: Number, min: 0 },
  },
  {
    virtuals: [...addTagVirtuals('Stock'), ...addApplicationVirtual()],
  }
);

// Suggestion Model
export const Suggestion = mongo.createModel<Types.SuggestionDocument>(
  'Suggestion',
  {
    content: { type: String },
  },
  {
    virtuals: [...addTagVirtuals('Suggestion'), ...addApplicationVirtual()],
  }
);

// Tag Model
export const Tag = mongo.createModel<Types.TagDocument>(
  'Tag',
  {
    value: { type: String },
  },
  {
    virtuals: [...addApplicationVirtual()],
  }
);

// Team Model
export const Team = mongo.createModel<Types.TeamDocument>(
  'Team',
  {
    ratingId: { type: mongo.Schema.Types.ObjectId, ref: 'Rating' },
  },
  {
    virtuals: [...addTagVirtuals('Team'), ...addApplicationVirtual()],
  }
);

// Tournament Model
export const Tournament = mongo.createModel<Types.TournamentDocument>(
  'Tournament',
  {},
  {
    virtuals: [...addTagVirtuals('Tournament'), ...addApplicationVirtual()],
  }
);

// Trade Model
export const Trade = mongo.createModel<Types.TradeDocument>(
  'Trade',
  {
    chainId: { type: mongo.Schema.Types.ObjectId, ref: 'Chain' },
    buyerId: { type: mongo.Schema.Types.ObjectId, ref: 'Profile' },
    parentId: { type: mongo.Schema.Types.ObjectId, ref: 'Trade' },
    productId: { type: mongo.Schema.Types.ObjectId, ref: 'Product' },
    sellerId: { type: mongo.Schema.Types.ObjectId, ref: 'Profile' },
    tokenId: { type: mongo.Schema.Types.ObjectId, ref: 'ChainToken' },
  },
  {
    virtuals: [...addTagVirtuals('Trade'), ...addApplicationVirtual()],
  }
);

// Universe Model
export const Universe = mongo.createModel<Types.UniverseDocument>(
  'Universe',
  {},
  {
    virtuals: [...addTagVirtuals('Universe'), ...addApplicationVirtual()],
  }
);

// Validator Model
export const Validator = mongo.createModel<Types.ValidatorDocument>(
  'Validator',
  {},
  {
    virtuals: [...addTagVirtuals('Validator'), ...addApplicationVirtual()],
  }
);

// Vote Model
export const Vote = mongo.createModel<Types.VoteDocument>(
  'Vote',
  {
    ratingId: { type: mongo.Schema.Types.ObjectId, ref: 'Rating' },
  },
  {
    virtuals: [
      {
        name: 'parent',
        ref: 'Node',
        localField: '_id',
        foreignField: 'from',
        justOne: true,
        match: { fromModel: 'Vote' },
      },
      {
        name: 'owner',
        ref: 'Profile',
        localField: '_id',
        foreignField: '_id',
        justOne: true,
      },
      ...addTagVirtuals('Vote'),
      ...addApplicationVirtual(),
    ],
  }
);

// WorldEvent Model
export const WorldEvent = mongo.createModel<Types.WorldEventDocument>(
  'WorldEvent',
  {
    text: { type: String, required: true },
    importance: { type: Number },
    // tags: [mongo.Schema.Types.Mixed],
  },
  {
    virtuals: [...addTagVirtuals('World'), ...addTagVirtuals('WorldEvent'), ...addApplicationVirtual()],
  }
);

// Node Model (for polymorphic relationships)
export const Node = mongo.createModel<Types.NodeDocument>(
  'Node',
  {
    relationKey: { type: String, required: true },
    fromModel: { type: String, required: true },
    from: { type: mongo.Schema.Types.ObjectId, required: true },
    toModel: { type: String, required: true },
    to: { type: mongo.Schema.Types.ObjectId, required: true },
  },
  {
    indexes: [
      { fromModel: 1, from: 1 },
      { toModel: 1, to: 1 },
    ],
  }
);
