import * as mongo from '../../util/mongo';
import type * as Types from './core.types';

const addTagVirtuals = (modelName: string) => [
  {
    ref: 'Node',
    localField: '_id',
    foreignField: `from${modelName}Id`,
    justOne: false,
    match: { relationKey: 'tag' },
  },
];

const addApplicationVirtual = (modelName: string) => [
  {
    ref: 'Application',
    localField: 'applicationId',
    foreignField: '_id',
    justOne: true,
  },
];

export const Omniverse = mongo.createModel<Types.OmniverseDocument>(
  'Omniverse',
  {
    ratingId: { type: mongo.Schema.Types.ObjectId, ref: 'Rating' },
  },
  {
    extend: 'CommonFields',
    virtuals: [...addTagVirtuals('Omniverse'), ...addApplicationVirtual('Omniverse')],
  }
);

export const Metaverse = mongo.createModel<Types.MetaverseDocument>(
  'Metaverse',
  {
    omniverseId: { type: mongo.Schema.Types.ObjectId, ref: 'Omniverse', required: true },
    ratingId: { type: mongo.Schema.Types.ObjectId, ref: 'Rating' },
  },
  {
    extend: 'CommonFields',
    virtuals: [...addTagVirtuals('Metaverse'), ...addApplicationVirtual('Metaverse')],
  }
);

export const Application = mongo.createModel<Types.ApplicationDocument>(
  'Application',
  {
    ownerId: { type: mongo.Schema.Types.ObjectId, ref: 'Profile' },
    metaverseId: { type: mongo.Schema.Types.ObjectId, ref: 'Metaverse' },
    name: { type: String, required: true },
    description: { type: String },
  },
  {
    extend: 'CommonFields',
    indexes: [{ metaverseId: 1, name: 1, unique: true }],
    virtuals: [
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
      ...addTagVirtuals('Application'),
      ...addApplicationVirtual('Application'),
    ],
  }
);

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
      },
      ...addTagVirtuals('Account'),
      ...addApplicationVirtual('Account'),
    ],
  }
);

export const Achievement = mongo.createModel<Types.AchievementDocument>(
  'Achievement',
  {},
  {
    virtuals: [...addTagVirtuals('Achievement'), ...addApplicationVirtual('Achievement')],
  }
);

export const Act = mongo.createModel<Types.ActDocument>(
  'Act',
  {},
  {
    virtuals: [...addTagVirtuals('Act'), ...addApplicationVirtual('Act')],
  }
);

export const Agent = mongo.createModel<Types.AgentDocument>(
  'Agent',
  {},
  {
    virtuals: [...addTagVirtuals('Agent'), ...addApplicationVirtual('Agent')],
  }
);

export const Badge = mongo.createModel<Types.BadgeDocument>(
  'Badge',
  {},
  {
    virtuals: [...addTagVirtuals('Badge'), ...addApplicationVirtual('Badge')],
  }
);

export const BattlePass = mongo.createModel<Types.BattlePassDocument>(
  'BattlePass',
  {},
  {
    virtuals: [...addTagVirtuals('BattlePass'), ...addApplicationVirtual('BattlePass')],
  }
);

export const Biome = mongo.createModel<Types.BiomeDocument>(
  'Biome',
  {},
  {
    virtuals: [...addTagVirtuals('Biome'), ...addApplicationVirtual('Biome')],
  }
);

export const BiomeFeature = mongo.createModel<Types.BiomeFeatureDocument>(
  'BiomeFeature',
  {},
  {
    virtuals: [...addTagVirtuals('BiomeFeature'), ...addApplicationVirtual('BiomeFeature')],
  }
);

export const Bounty = mongo.createModel<Types.BountyDocument>(
  'Bounty',
  {},
  {
    virtuals: [...addTagVirtuals('Bounty'), ...addApplicationVirtual('Bounty')],
  }
);

export const Collection = mongo.createModel<Types.CollectionDocument>(
  'Collection',
  {},
  {
    virtuals: [...addTagVirtuals('Collection'), ...addApplicationVirtual('Collection')],
  }
);

export const Comment = mongo.createModel<Types.CommentDocument>(
  'Comment',
  {
    body: { type: String, required: true },
    entity: { type: mongo.Schema.Types.ObjectId, ref: 'Entity' },
    entityModel: { type: String, enum: ['NewsArticle', 'ChainToken'] },
    text: { type: String },
    ratingId: { type: mongo.Schema.Types.ObjectId, ref: 'Rating' },
  },
  {
    virtuals: [...addTagVirtuals('Comment'), ...addApplicationVirtual('Comment')],
  }
);

export const Community = mongo.createModel<Types.CommunityDocument>(
  'Community',
  {
    ideas: { type: [mongo.Schema.Types.ObjectId], ref: 'Idea' },
    products: { type: [mongo.Schema.Types.ObjectId], ref: 'Product' },
    projects: { type: [mongo.Schema.Types.ObjectId], ref: 'Project' },
  },
  {
    virtuals: [...addTagVirtuals('Community'), ...addApplicationVirtual('Community')],
  }
);

export const Company = mongo.createModel<Types.CompanyDocument>(
  'Company',
  {
    content: { type: String },
    people: { type: [mongo.Schema.Types.ObjectId], ref: 'Person' },
  },
  {
    virtuals: [...addTagVirtuals('Company'), ...addApplicationVirtual('Company')],
  }
);

export const Conversation = mongo.createModel<Types.ConversationDocument>(
  'Conversation',
  {
    userId: { type: mongo.Schema.Types.ObjectId, ref: 'User' },
    messages: { type: [mongo.Schema.Types.Mixed] },
  },
  {
    virtuals: [...addTagVirtuals('Conversation'), ...addApplicationVirtual('Conversation')],
  }
);

export const Data = mongo.createModel<Types.DataDocument>(
  'Data',
  {
    mod: { type: String, required: true },
  },
  {
    virtuals: [...addTagVirtuals('Data'), ...addApplicationVirtual('Data')],
  }
);

export const Discussion = mongo.createModel<Types.DiscussionDocument>(
  'Discussion',
  {
    content: { type: String },
    parentId: { type: mongo.Schema.Types.ObjectId, ref: 'Discussion' },
    rootMessageId: { type: mongo.Schema.Types.ObjectId, ref: 'Message' },
    type: { type: String, default: 'Discussion' },
  },
  {
    virtuals: [...addTagVirtuals('Discussion'), ...addApplicationVirtual('Discussion')],
  }
);

export const Energy = mongo.createModel<Types.EnergyDocument>(
  'Energy',
  {},
  {
    virtuals: [...addTagVirtuals('Energy'), ...addApplicationVirtual('Energy')],
  }
);

export const Event = mongo.createModel<Types.EventDocument>(
  'Event',
  {},
  {
    virtuals: [...addTagVirtuals('Event'), ...addApplicationVirtual('Event')],
  }
);

export const File = mongo.createModel<Types.FileDocument>(
  'File',
  {
    content: { type: String },
    storageType: { type: String, max: 100 },
    accessType: { type: String, max: 100 },
  },
  {
    virtuals: [...addTagVirtuals('File'), ...addApplicationVirtual('File')],
  }
);

export const Galaxy = mongo.createModel<Types.GalaxyDocument>(
  'Galaxy',
  {
    universeId: { type: mongo.Schema.Types.ObjectId, ref: 'Universe' },
  },
  {
    virtuals: [...addTagVirtuals('Galaxy'), ...addApplicationVirtual('Galaxy')],
  }
);

export const Guide = mongo.createModel<Types.GuideDocument>(
  'Guide',
  {
    content: { type: String },
    gameId: { type: mongo.Schema.Types.ObjectId, ref: 'Game' },
    attachments: { type: [mongo.Schema.Types.Mixed] },
  },
  {
    virtuals: [...addTagVirtuals('Guide'), ...addApplicationVirtual('Guide')],
  }
);

export const Idea = mongo.createModel<Types.IdeaDocument>(
  'Idea',
  {
    type: { type: String, max: 100 },
    communityId: { type: mongo.Schema.Types.ObjectId, ref: 'Community' },
  },
  {
    virtuals: [...addTagVirtuals('Idea'), ...addApplicationVirtual('Idea')],
  }
);

export const Leaderboard = mongo.createModel<Types.LeaderboardDocument>(
  'Leaderboard',
  {
    productId: { type: mongo.Schema.Types.ObjectId, ref: 'Product' },
  },
  {
    virtuals: [...addTagVirtuals('Leaderboard'), ...addApplicationVirtual('Leaderboard')],
  }
);

export const Log = mongo.createModel<Types.LogDocument>(
  'Log',
  {
    mod: { type: String, required: true },
    messages: { type: [mongo.Schema.Types.Mixed] },
    tags: { type: [mongo.Schema.Types.Mixed] },
  },
  {
    virtuals: [...addTagVirtuals('Log'), ...addApplicationVirtual('Log')],
  }
);

export const Lore = mongo.createModel<Types.LoreDocument>(
  'Lore',
  {
    gameId: { type: mongo.Schema.Types.ObjectId, ref: 'Game' },
  },
  {
    virtuals: [...addTagVirtuals('Lore'), ...addApplicationVirtual('Lore')],
  }
);

export const Market = mongo.createModel<Types.MarketDocument>(
  'Market',
  {},
  {
    virtuals: [...addTagVirtuals('Market'), ...addApplicationVirtual('Market')],
  }
);

export const Memory = mongo.createModel<Types.MemoryDocument>(
  'Memory',
  {},
  {
    virtuals: [...addTagVirtuals('Memory'), ...addApplicationVirtual('Memory')],
  }
);

export const Message = mongo.createModel<Types.MessageDocument>(
  'Message',
  {
    content: { type: String },
    type: { type: String, max: 100 },
    replyToId: { type: mongo.Schema.Types.ObjectId, ref: 'Message' },
    parentId: { type: mongo.Schema.Types.ObjectId, ref: 'Message' },
    parent: { type: mongo.Schema.Types.ObjectId, ref: 'Message' },
    messages: { type: [mongo.Schema.Types.ObjectId], ref: 'Message' },
  },
  {
    virtuals: [...addTagVirtuals('Message'), ...addApplicationVirtual('Message')],
  }
);

export const NewsArticle = mongo.createModel<Types.NewsArticleDocument>(
  'NewsArticle',
  {
    href: { type: String, required: true },
    source: { type: String, required: true },
  },
  {
    virtuals: [...addTagVirtuals('NewsArticle'), ...addApplicationVirtual('NewsArticle')],
  }
);

export const Npc = mongo.createModel<Types.NpcDocument>(
  'Npc',
  {
    characterRaceId: { type: mongo.Schema.Types.ObjectId, ref: 'CharacterRace' },
    characterId: { type: mongo.Schema.Types.ObjectId, ref: 'Character' },
  },
  {
    virtuals: [...addTagVirtuals('Npc'), ...addApplicationVirtual('Npc')],
  }
);

export const Offer = mongo.createModel<Types.OfferDocument>(
  'Offer',
  {},
  {
    virtuals: [...addTagVirtuals('Offer'), ...addApplicationVirtual('Offer')],
  }
);

export const Order = mongo.createModel<Types.OrderDocument>(
  'Order',
  {},
  {
    virtuals: [...addTagVirtuals('Order'), ...addApplicationVirtual('Order')],
  }
);

export const Payment = mongo.createModel<Types.PaymentDocument>(
  'Payment',
  {},
  {
    virtuals: [...addTagVirtuals('Payment'), ...addApplicationVirtual('Payment')],
  }
);

export const Permission = mongo.createModel<Types.PermissionDocument>(
  'Permission',
  {
    roles: { type: [mongo.Schema.Types.ObjectId], ref: 'Role' },
  },
  {
    virtuals: [...addTagVirtuals('Permission'), ...addApplicationVirtual('Permission')],
  }
);

export const Person = mongo.createModel<Types.PersonDocument>(
  'Person',
  {
    content: { type: String },
    companyId: { type: mongo.Schema.Types.ObjectId, ref: 'Company' },
  },
  {
    virtuals: [...addTagVirtuals('Person'), ...addApplicationVirtual('Person')],
  }
);

export const Planet = mongo.createModel<Types.PlanetDocument>(
  'Planet',
  {
    solarSystemId: { type: mongo.Schema.Types.ObjectId, ref: 'SolarSystem' },
  },
  {
    virtuals: [...addTagVirtuals('Planet'), ...addApplicationVirtual('Planet')],
  }
);

export const Poll = mongo.createModel<Types.PollDocument>(
  'Poll',
  {},
  {
    virtuals: [...addTagVirtuals('Poll'), ...addApplicationVirtual('Poll')],
  }
);

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
    virtuals: [...addTagVirtuals('Project'), ...addApplicationVirtual('Project')],
  }
);

export const Proposal = mongo.createModel<Types.ProposalDocument>(
  'Proposal',
  {
    content: { type: String },
  },
  {
    virtuals: [...addTagVirtuals('Proposal'), ...addApplicationVirtual('Proposal')],
  }
);

export const Quest = mongo.createModel<Types.QuestDocument>(
  'Quest',
  {
    type: { type: String, default: 'zone' },
  },
  {
    virtuals: [...addTagVirtuals('Quest'), ...addApplicationVirtual('Quest')],
  }
);

export const Question = mongo.createModel<Types.QuestionDocument>(
  'Question',
  {
    topics: { type: [mongo.Schema.Types.Mixed] },
    text: { type: String, required: true },
    answer: { type: String, required: true },
    popularity: { type: Number },
  },
  {
    virtuals: [...addTagVirtuals('Question'), ...addApplicationVirtual('Question')],
  }
);

export const Rating = mongo.createModel<Types.RatingDocument>(
  'Rating',
  {
    votes: { type: [mongo.Schema.Types.ObjectId], ref: 'Vote' },
    projects: { type: [mongo.Schema.Types.ObjectId], ref: 'Project' },
    comments: { type: [mongo.Schema.Types.ObjectId], ref: 'Comment' },
  },
  {
    virtuals: [
      {
        ref: 'Node',
        localField: '_id',
        foreignField: 'fromRatingId',
        justOne: false,
        match: { relationKey: 'vote' },
      },
      {
        ref: 'Node',
        localField: '_id',
        foreignField: 'fromRatingId',
        justOne: false,
        match: { relationKey: 'project' },
      },
      {
        ref: 'Node',
        localField: '_id',
        foreignField: 'fromRatingId',
        justOne: false,
        match: { relationKey: 'comment' },
      },
      {
        ref: 'Node',
        localField: '_id',
        foreignField: 'fromRatingId',
        justOne: false,
        match: { relationKey: 'idea' },
      },
      {
        ref: 'Node',
        localField: '_id',
        foreignField: 'fromRatingId',
        justOne: false,
        match: { relationKey: 'product' },
      },
      {
        ref: 'Node',
        localField: '_id',
        foreignField: 'fromRatingId',
        justOne: false,
        match: { relationKey: 'community' },
      },
      {
        ref: 'Node',
        localField: '_id',
        foreignField: 'fromRatingId',
        justOne: false,
        match: { relationKey: 'application' },
      },
      {
        ref: 'Node',
        localField: '_id',
        foreignField: 'fromRatingId',
        justOne: false,
        match: { relationKey: 'realm' },
      },
      {
        ref: 'Node',
        localField: '_id',
        foreignField: 'fromRatingId',
        justOne: false,
        match: { relationKey: 'team' },
      },
      {
        ref: 'Node',
        localField: '_id',
        foreignField: 'fromRatingId',
        justOne: false,
        match: { relationKey: 'tournament' },
      },
      {
        ref: 'Node',
        localField: '_id',
        foreignField: 'fromRatingId',
        justOne: false,
        match: { relationKey: 'trade' },
      },
      ...addTagVirtuals('Rating'),
      ...addApplicationVirtual('Rating'),
    ],
  }
);

export const Realm = mongo.createModel<Types.RealmDocument>(
  'Realm',
  {},
  {
    virtuals: [
      {
        ref: 'Node',
        localField: '_id',
        foreignField: 'fromRealmId',
        justOne: false,
        match: { relationKey: 'server' },
      },
      {
        ref: 'Node',
        localField: '_id',
        foreignField: 'fromRealmId',
        justOne: false,
        match: { relationKey: 'rating' },
      },
      ...addTagVirtuals('Realm'),
      ...addApplicationVirtual('Realm'),
    ],
  }
);

export const Revision = mongo.createModel<Types.RevisionDocument>(
  'Revision',
  {
    objectType: { type: String, max: 100, required: true },
    objectId: { type: String, required: true },
    actionType: { type: String, max: 100, required: true },
    reason: { type: String, max: 100, required: true },
    interfaces: { type: [mongo.Schema.Types.ObjectId], ref: 'Interface' },
    profiles: { type: [mongo.Schema.Types.ObjectId], ref: 'Profile' },
  },
  {
    virtuals: [...addTagVirtuals('Revision'), ...addApplicationVirtual('Revision')],
  }
);

export const Referral = mongo.createModel<Types.ReferralDocument>(
  'Referral',
  {
    recipientId: { type: mongo.Schema.Types.ObjectId, ref: 'Profile', required: true },
    senderId: { type: mongo.Schema.Types.ObjectId, ref: 'Profile', required: true },
    recipient: { type: mongo.Schema.Types.ObjectId, ref: 'Profile' },
    sender: { type: mongo.Schema.Types.ObjectId, ref: 'Profile' },
  },
  {
    virtuals: [...addTagVirtuals('Referral'), ...addApplicationVirtual('Referral')],
  }
);

export const Review = mongo.createModel<Types.ReviewDocument>(
  'Review',
  {
    value: { type: String },
  },
  {
    virtuals: [...addTagVirtuals('Review'), ...addApplicationVirtual('Review')],
  }
);

export const Role = mongo.createModel<Types.RoleDocument>(
  'Role',
  {
    value: { type: String },
    profiles: { type: [mongo.Schema.Types.ObjectId], ref: 'Profile' },
    permissions: { type: [mongo.Schema.Types.ObjectId], ref: 'Permission' },
  },
  {
    virtuals: [...addTagVirtuals('Role'), ...addApplicationVirtual('Role')],
  }
);

export const Season = mongo.createModel<Types.SeasonDocument>(
  'Season',
  {},
  {
    virtuals: [...addTagVirtuals('Season'), ...addApplicationVirtual('Season')],
  }
);

export const Server = mongo.createModel<Types.ServerDocument>(
  'Server',
  {
    value: { type: String },
  },
  {
    virtuals: [...addTagVirtuals('Server'), ...addApplicationVirtual('Server')],
  }
);

export const Session = mongo.createModel<Types.SessionDocument>(
  'Session',
  {
    expired: { type: Date, required: true },
  },
  {
    virtuals: [...addTagVirtuals('Session'), ...addApplicationVirtual('Session')],
  }
);

export const SolarSystem = mongo.createModel<Types.SolarSystemDocument>(
  'SolarSystem',
  {
    galaxyId: { type: mongo.Schema.Types.ObjectId, ref: 'Galaxy' },
  },
  {
    virtuals: [...addTagVirtuals('SolarSystem'), ...addApplicationVirtual('SolarSystem')],
  }
);

export const Star = mongo.createModel<Types.StarDocument>(
  'Star',
  {},
  {
    virtuals: [...addTagVirtuals('Star'), ...addApplicationVirtual('Star')],
  }
);

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
    virtuals: [
      {
        ref: 'Node',
        localField: '_id',
        foreignField: 'fromTradeId',
        justOne: false,
        match: { relationKey: 'tags' },
      },
      {
        ref: 'Node',
        localField: '_id',
        foreignField: 'parentId',
        justOne: true,
      },
      {
        ref: 'Product',
        localField: '_id',
        foreignField: 'productId',
        justOne: true,
      },
      {
        ref: 'Profile',
        localField: '_id',
        foreignField: 'sellerId',
        justOne: true,
      },
      {
        ref: 'Profile',
        localField: '_id',
        foreignField: 'buyerId',
        justOne: true,
      },
      {
        ref: 'Chain',
        localField: '_id',
        foreignField: 'chainId',
        justOne: true,
      },
      {
        ref: 'ChainToken',
        localField: '_id',
        foreignField: 'tokenId',
        justOne: true,
      },
      ...addTagVirtuals('Trade'),
      ...addApplicationVirtual('Trade'),
    ],
  }
);

export const Vote = mongo.createModel<Types.VoteDocument>(
  'Vote',
  {
    ratingId: { type: mongo.Schema.Types.ObjectId, ref: 'Rating', optional: true },
  },
  {
    virtuals: [
      {
        name: 'parent',
        ref: 'Node',
        localField: '_id',
        foreignField: 'parentId',
        justOne: true,
      },
      {
        name: 'owner',
        ref: 'Profile',
        localField: '_id',
        foreignField: 'fromVoteId',
        justOne: true,
      },
      ...addTagVirtuals('Vote'),
      ...addApplicationVirtual('Vote'),
    ],
  }
);