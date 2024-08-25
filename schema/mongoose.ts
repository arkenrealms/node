import mongoose, { Schema, Types } from 'mongoose';
import * as types from './types';

export const Account = new Schema(
  {
    applicationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Application',
      required: true,
    } as any,
    // organizationId: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: 'Organization'
    // },
    username: { type: String, required: true },
    email: { type: String },
    telegramUserId: { type: Number },
    status: { type: String, default: 'Active', enum: ['Paused', 'Pending', 'Active', 'Archived'] },
    data: { type: Object, default: {} },
    meta: { type: Object, default: {} },
    createdDate: { type: Date, default: Date.now },
    updatedDate: { type: Date },
    deletedDate: { type: Date },
  },
  { collection: 'User', timestamps: { createdAt: 'createdDate', updatedAt: 'updatedDate' } }
);

Account.index({ applicationId: 1, username: 1 }, { unique: true });
Account.index({ applicationId: 1, telegramUserId: 1 }, { unique: true });

Account.virtual('profiles', {
  ref: 'Profile',
  localField: '_id',
  foreignField: 'accountId',
});

export const Data = new Schema<types.Data>(
  {
    applicationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Application',
      required: true,
    } as any,
    mod: { type: String, required: true },
    key: { type: String, required: true },
    data: { type: Object, default: {} },
    meta: { type: Object, default: {} },
    status: { type: String, default: 'Active', enum: ['Paused', 'Pending', 'Active', 'Archived'] },
    createdDate: { type: Date, default: Date.now },
    updatedDate: { type: Date },
    deletedDate: { type: Date },
  },
  { collection: 'Data', timestamps: { createdAt: 'createdDate', updatedAt: 'updatedDate' } }
);

Data.index({ applicationId: 1, mod: 1, key: 1 }, { unique: true });

export const Profile = new Schema(
  {
    applicationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Application',
      required: true,
    } as any,
    accountId: { type: Schema.Types.ObjectId, ref: 'Account', required: true },
    name: { type: String, required: true },
    key: { type: String, maxlength: 100 },
    status: { type: String, default: 'Active', enum: ['Paused', 'Pending', 'Active', 'Archived'] },
    data: { type: Object, default: {} },
    meta: { type: Object, default: {} },
    createdDate: { type: Date, default: Date.now },
    updatedDate: { type: Date },
    deletedDate: { type: Date },
    points: { type: Number },
    coins: { type: Number },
    telegramUserId: { type: Number },
    interactions: { type: Number, default: 0 },
    activityRating: { type: Number, default: 0 },
    address: { type: String, maxlength: 100 },
    avatar: { type: String, maxlength: 100 },
    roleId: { type: Schema.Types.ObjectId, ref: 'Role' },
    privateKey: { type: String, maxlength: 300 },
    signature: { type: String, maxlength: 200 },
    createdById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    editedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    deletedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    chainId: { type: Schema.Types.ObjectId, ref: 'Chain' },
  },
  { collection: 'Profile', timestamps: { createdAt: 'createdDate', updatedAt: 'updatedDate' } }
);

Account.index({ applicationId: 1, telegramUserId: 1 }, { unique: true });
Account.index({ applicationId: 1, accountId: 1, name: 1 }, { unique: true });

export const Application = new Schema<types.Application>(
  {
    metaverseId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Metaverse',
      required: true,
    } as any,
    name: { type: String, required: true },
    description: { type: String },
    status: { type: String, default: 'Active', enum: ['Paused', 'Pending', 'Active', 'Archived'] },
    meta: { type: Object, default: {} },
    createdDate: { type: Date, default: Date.now },
    updatedDate: { type: Date },
    deletedDate: { type: Date },
  },
  {
    collection: 'Application',
    timestamps: { createdAt: 'createdDate', updatedAt: 'updatedDate' },
  }
);

Application.index({ metaverseId: 1, name: 1 }, { unique: true });

Application.virtual('agents', {
  ref: 'Agent',
  localField: '_id',
  foreignField: 'applicationId',
});

Application.virtual('chain', {
  ref: 'Chain',
  localField: '_id',
  foreignField: 'applicationId',
});

Application.virtual('account', {
  ref: 'Account',
  localField: '_id',
  foreignField: 'applicationId',
});

Application.virtual('assets', {
  ref: 'Asset',
  localField: '_id',
  foreignField: 'applicationId',
});

Application.virtual('badges', {
  ref: 'Badge',
  localField: '_id',
  foreignField: 'applicationId',
});

Application.virtual('battlePasses', {
  ref: 'BattlePass',
  localField: '_id',
  foreignField: 'applicationId',
});

Application.virtual('collections', {
  ref: 'Collection',
  localField: '_id',
  foreignField: 'applicationId',
});

Application.virtual('communities', {
  ref: 'Community',
  localField: '_id',
  foreignField: 'applicationId',
});

Application.virtual('discussions', {
  ref: 'Discussion',
  localField: '_id',
  foreignField: 'applicationId',
});

Application.virtual('events', {
  ref: 'Event',
  localField: '_id',
  foreignField: 'applicationId',
});

Application.virtual('exchanges', {
  ref: 'Exchange',
  localField: '_id',
  foreignField: 'applicationId',
});

Application.virtual('files', {
  ref: 'File',
  localField: '_id',
  foreignField: 'applicationId',
});

Application.virtual('ideas', {
  ref: 'Idea',
  localField: '_id',
  foreignField: 'applicationId',
});

Application.virtual('leaderboards', {
  ref: 'Leaderboard',
  localField: '_id',
  foreignField: 'applicationId',
});

Application.virtual('assetLicenses', {
  ref: 'AssetLicense',
  localField: '_id',
  foreignField: 'applicationId',
});

Application.virtual('logs', {
  ref: 'Log',
  localField: '_id',
  foreignField: 'applicationId',
});

Application.virtual('marketPairs', {
  ref: 'MarketPair',
  localField: '_id',
  foreignField: 'applicationId',
});

Application.virtual('markets', {
  ref: 'Market',
  localField: '_id',
  foreignField: 'applicationId',
});

Application.virtual('messages', {
  ref: 'Message',
  localField: '_id',
  foreignField: 'applicationId',
});

Application.virtual('offers', {
  ref: 'Offer',
  localField: '_id',
  foreignField: 'applicationId',
});

Application.virtual('orders', {
  ref: 'Order',
  localField: '_id',
  foreignField: 'applicationId',
});

Application.virtual('products', {
  ref: 'Product',
  localField: '_id',
  foreignField: 'applicationId',
});

Application.virtual('projects', {
  ref: 'Project',
  localField: '_id',
  foreignField: 'applicationId',
});

Application.virtual('ratings', {
  ref: 'Rating',
  localField: '_id',
  foreignField: 'applicationId',
});

Application.virtual('realms', {
  ref: 'Realm',
  localField: '_id',
  foreignField: 'applicationId',
});

Application.virtual('reviews', {
  ref: 'Review',
  localField: '_id',
  foreignField: 'applicationId',
});

Application.virtual('roles', {
  ref: 'Role',
  localField: '_id',
  foreignField: 'applicationId',
});

Application.virtual('gameServers', {
  ref: 'Server',
  localField: '_id',
  foreignField: 'applicationId',
});

Application.virtual('suggestions', {
  ref: 'Suggestion',
  localField: '_id',
  foreignField: 'applicationId',
});

Application.virtual('tags', {
  ref: 'Tag',
  localField: '_id',
  foreignField: 'applicationId',
});

Application.virtual('tokens', {
  ref: 'ChainToken',
  localField: '_id',
  foreignField: 'applicationId',
});

Application.virtual('tradeIdeas', {
  ref: 'TradeIdea',
  localField: '_id',
  foreignField: 'applicationId',
});

Application.virtual('trades', {
  ref: 'Trade',
  localField: '_id',
  foreignField: 'applicationId',
});

Application.virtual('buyerTrades', {
  ref: 'Trade',
  localField: '_id',
  foreignField: 'applicationId',
});

Application.virtual('transactions', {
  ref: 'ChainTransaction',
  localField: '_id',
  foreignField: 'applicationId',
});

Application.virtual('votes', {
  ref: 'Vote',
  localField: '_id',
  foreignField: 'applicationId',
});

Application.virtual('payments', {
  ref: 'Payment',
  localField: '_id',
  foreignField: 'applicationId',
});

Application.virtual('permissions', {
  ref: 'Permission',
  localField: '_id',
  foreignField: 'applicationId',
});

Application.virtual('stats', {
  ref: 'Stat',
  localField: '_id',
  foreignField: 'applicationId',
});

Application.virtual('recordUpdates', {
  ref: 'RecordUpdate',
  localField: '_id',
  foreignField: 'applicationId',
});

Application.virtual('comments', {
  ref: 'Comment',
  localField: '_id',
  foreignField: 'applicationId',
});

Application.virtual('interfaces', {
  ref: 'Interface',
  localField: '_id',
  foreignField: 'applicationId',
});

Application.virtual('characters', {
  ref: 'Character',
  localField: '_id',
  foreignField: 'applicationId',
});

Application.virtual('metaverses', {
  ref: 'Metaverse',
  localField: '_id',
  foreignField: 'applicationId',
});

Application.virtual('omniverses', {
  ref: 'Omniverse',
  localField: '_id',
  foreignField: 'applicationId',
});

Application.virtual('referrals', {
  ref: 'Referral',
  localField: '_id',
  foreignField: 'applicationId',
});

Application.virtual('recipientReferrals', {
  ref: 'Referral',
  localField: '_id',
  foreignField: 'applicationId',
});

Application.virtual('senderReferrals', {
  ref: 'Referral',
  localField: '_id',
  foreignField: 'applicationId',
});

Application.virtual('chains', {
  ref: 'Chain',
  localField: '_id',
  foreignField: 'applicationId',
});

Application.virtual('characterAbilities', {
  ref: 'CharacterAbility',
  localField: '_id',
  foreignField: 'applicationId',
});
Application.virtual('tournaments', {
  ref: 'Tournament',
  localField: '_id',
  foreignField: 'applicationId',
});

Application.virtual('teams', {
  ref: 'Team',
  localField: '_id',
  foreignField: 'applicationId',
});

Application.virtual('items', {
  ref: 'Item',
  localField: '_id',
  foreignField: 'applicationId',
});

Application.virtual('skills', {
  ref: 'Skill',
  localField: '_id',
  foreignField: 'applicationId',
});

Application.virtual('itemRecipes', {
  ref: 'ItemRecipe',
  localField: '_id',
  foreignField: 'applicationId',
});

Application.virtual('itemSkins', {
  ref: 'ItemSkin',
  localField: '_id',
  foreignField: 'applicationId',
});

Application.virtual('stashes', {
  ref: 'Stash',
  localField: '_id',
  foreignField: 'applicationId',
});

Application.virtual('biomes', {
  ref: 'Biome',
  localField: '_id',
  foreignField: 'applicationId',
});

Application.virtual('planets', {
  ref: 'Planet',
  localField: '_id',
  foreignField: 'applicationId',
});

Application.virtual('solarSystems', {
  ref: 'SolarSystem',
  localField: '_id',
  foreignField: 'applicationId',
});

Application.virtual('universes', {
  ref: 'Universe',
  localField: '_id',
  foreignField: 'applicationId',
});

Application.virtual('stars', {
  ref: 'Star',
  localField: '_id',
  foreignField: 'applicationId',
});

Application.virtual('areas', {
  ref: 'Area',
  localField: '_id',
  foreignField: 'applicationId',
});

Application.virtual('acts', {
  ref: 'Act',
  localField: '_id',
  foreignField: 'applicationId',
});

Application.virtual('characterClasses', {
  ref: 'CharacterClass',
  localField: '_id',
  foreignField: 'applicationId',
});

Application.virtual('characterFactions', {
  ref: 'CharacterFaction',
  localField: '_id',
  foreignField: 'applicationId',
});

Application.virtual('eras', {
  ref: 'Era',
  localField: '_id',
  foreignField: 'applicationId',
});

Application.virtual('seasons', {
  ref: 'Season',
  localField: '_id',
  foreignField: 'applicationId',
});

Application.virtual('itemAttributes', {
  ref: 'ItemAttribute',
  localField: '_id',
  foreignField: 'applicationId',
});

Application.virtual('itemMaterials', {
  ref: 'ItemMaterial',
  localField: '_id',
  foreignField: 'applicationId',
});

Application.virtual('itemSets', {
  ref: 'ItemSet',
  localField: '_id',
  foreignField: 'applicationId',
});

Application.virtual('itemSlots', {
  ref: 'ItemSlot',
  localField: '_id',
  foreignField: 'applicationId',
});

Application.virtual('itemRarities', {
  ref: 'ItemRarity',
  localField: '_id',
  foreignField: 'applicationId',
});

Application.virtual('itemTypes', {
  ref: 'ItemType',
  localField: '_id',
  foreignField: 'applicationId',
});

Application.virtual('itemSubTypes', {
  ref: 'ItemSubType',
  localField: '_id',
  foreignField: 'applicationId',
});

Application.virtual('itemSpecificTypes', {
  ref: 'ItemSpecificType',
  localField: '_id',
  foreignField: 'applicationId',
});
Application.virtual('characterGenders', {
  ref: 'CharacterGender',
  localField: '_id',
  foreignField: 'applicationId',
});

Application.virtual('characterRaces', {
  ref: 'CharacterRace',
  localField: '_id',
  foreignField: 'applicationId',
});

Application.virtual('characterPersonalities', {
  ref: 'CharacterPersonality',
  localField: '_id',
  foreignField: 'applicationId',
});

Application.virtual('characterTitles', {
  ref: 'CharacterTitle',
  localField: '_id',
  foreignField: 'applicationId',
});

Application.virtual('lores', {
  ref: 'Lore',
  localField: '_id',
  foreignField: 'applicationId',
});

Application.virtual('energies', {
  ref: 'Energy',
  localField: '_id',
  foreignField: 'applicationId',
});

Application.virtual('guides', {
  ref: 'Guide',
  localField: '_id',
  foreignField: 'applicationId',
});

Application.virtual('achievements', {
  ref: 'Achievement',
  localField: '_id',
  foreignField: 'applicationId',
});

Application.virtual('games', {
  ref: '',
  localField: '_id',
  foreignField: 'applicationId',
});

Application.virtual('npcs', {
  ref: 'Npc',
  localField: '_id',
  foreignField: 'applicationId',
});

Application.virtual('characterAttributes', {
  ref: 'CharacterAttribute',
  localField: '_id',
  foreignField: 'applicationId',
});

Application.virtual('characterTypes', {
  ref: 'CharacterType',
  localField: '_id',
  foreignField: 'applicationId',
});

Application.virtual('areaTypes', {
  ref: 'AreaType',
  localField: '_id',
  foreignField: 'applicationId',
});

Application.virtual('areaLandmarks', {
  ref: 'AreaLandmark',
  localField: '_id',
  foreignField: 'applicationId',
});

Application.virtual('biomeFeatures', {
  ref: 'BiomeFeature',
  localField: '_id',
  foreignField: 'applicationId',
});

Application.virtual('skillMods', {
  ref: 'SkillMod',
  localField: '_id',
  foreignField: 'applicationId',
});

Application.virtual('skillClassifications', {
  ref: 'SkillClassification',
  localField: '_id',
  foreignField: 'applicationId',
});

Application.virtual('skillConditions', {
  ref: 'SkillCondition',
  localField: '_id',
  foreignField: 'applicationId',
});

Application.virtual('skillStatusEffects', {
  ref: 'SkillStatusEffect',
  localField: '_id',
  foreignField: 'applicationId',
});

Application.virtual('skillTrees', {
  ref: 'SkillTree',
  localField: '_id',
  foreignField: 'applicationId',
});

Application.virtual('skillTreeNodes', {
  ref: 'SkillTreeNode',
  localField: '_id',
  foreignField: 'applicationId',
});

Application.virtual('areaNameChoices', {
  ref: 'AreaNameChoice',
  localField: '_id',
  foreignField: 'applicationId',
});

Application.virtual('characterNameChoices', {
  ref: 'CharacterNameChoice',
  localField: '_id',
  foreignField: 'applicationId',
});

Application.virtual('validators', {
  ref: 'Validator',
  localField: '_id',
  foreignField: 'applicationId',
});

Application.virtual('productUpdates', {
  ref: 'ProductUpdate',
  localField: '_id',
  foreignField: 'applicationId',
});

Application.virtual('polls', {
  ref: 'Poll',
  localField: '_id',
  foreignField: 'applicationId',
});

Application.virtual('galaxies', {
  ref: 'Galaxy',
  localField: '_id',
  foreignField: 'applicationId',
});

Application.virtual('quests', {
  ref: 'Quest',
  localField: '_id',
  foreignField: 'applicationId',
});

Application.virtual('raffles', {
  ref: 'Raffle',
  localField: '_id',
  foreignField: 'applicationId',
});

Application.virtual('raffleEntries', {
  ref: 'RaffleEntry',
  localField: '_id',
  foreignField: 'applicationId',
});

Application.virtual('raffleRequirements', {
  ref: 'RaffleRequirement',
  localField: '_id',
  foreignField: 'applicationId',
});

Application.virtual('raffleRewards', {
  ref: 'RaffleReward',
  localField: '_id',
  foreignField: 'applicationId',
});

Application.virtual('proposals', {
  ref: 'Proposal',
  localField: '_id',
  foreignField: 'applicationId',
});

Application.virtual('companies', {
  ref: 'Company',
  localField: '_id',
  foreignField: 'applicationId',
});

Application.virtual('people', {
  ref: 'Person',
  localField: '_id',
  foreignField: 'applicationId',
});

export const Video = new Schema<types.Video>(
  {
    applicationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Application',
      required: true,
    } as any,
    name: { type: String, required: true },
    youtubeId: { type: String, required: false, unique: true },
    url: { type: String, required: false },
    description: { type: String },
    status: { type: String, default: 'Active', enum: ['Paused', 'Pending', 'Active', 'Archived'] },
    data: { type: Object, default: {} },
    meta: { type: Object, default: {} },
    createdDate: { type: Date, default: Date.now },
    updatedDate: { type: Date },
    deletedDate: { type: Date },
  },
  { collection: 'Video', timestamps: { createdAt: 'createdDate', updatedAt: 'updatedDate' } }
);

export const VideoParticipant = new Schema<types.VideoParticipant>(
  {
    applicationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Application',
      required: true,
    } as any,
    name: { type: String, required: true },
    profileId: { type: mongoose.Schema.Types.ObjectId, ref: 'Profile', required: false } as any,
    description: { type: String },
    status: { type: String, default: 'Active', enum: ['Paused', 'Pending', 'Active', 'Archived'] },
    data: { type: Object, default: {} },
    meta: { type: Object, default: {} },
    createdDate: { type: Date, default: Date.now },
    updatedDate: { type: Date },
    deletedDate: { type: Date },
  },
  {
    collection: 'VideoParticipant',
    timestamps: { createdAt: 'createdDate', updatedAt: 'updatedDate' },
  }
);

export const VideoDialogue = new Schema<types.VideoDialogue>(
  {
    applicationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Application',
      required: true,
    } as any,
    participantId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'VideoParticipant',
      required: false,
    } as any,
    name: { type: String, required: true },
    description: { type: String },
    status: { type: String, default: 'Active', enum: ['Paused', 'Pending', 'Active', 'Archived'] },
    data: { type: Object, default: {} },
    text: { type: String, required: true },
    timestamp: { type: String, required: true },
    meta: { type: Object, default: {} },
    createdDate: { type: Date, default: Date.now },
    updatedDate: { type: Date },
    deletedDate: { type: Date },
  },
  {
    collection: 'VideoDialogue',
    timestamps: { createdAt: 'createdDate', updatedAt: 'updatedDate' },
  }
);

export const VideoTranscript = new Schema<types.VideoTranscript>(
  {
    applicationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Application',
      required: true,
    } as any,
    videoId: { type: mongoose.Schema.Types.ObjectId, ref: 'Video', required: true } as any,
    transcript: { type: [VideoDialogue], required: true },
    summary: { type: String, required: true },
    status: { type: String, default: 'Active', enum: ['Paused', 'Pending', 'Active', 'Archived'] },
    data: { type: Object, default: {} },
    meta: { type: Object, default: {} },
    createdDate: { type: Date, default: Date.now },
    updatedDate: { type: Date },
    deletedDate: { type: Date },
  },
  {
    collection: 'VideoTranscript',
    timestamps: { createdAt: 'createdDate', updatedAt: 'updatedDate' },
  }
);

VideoTranscript.index({ videoId: 1 }, { unique: true });

export const VideoScene = new Schema<types.VideoScene>(
  {
    applicationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Application',
      required: true,
    } as any,
    name: { type: String, required: true },
    description: { type: String },
    status: { type: String, default: 'Active', enum: ['Paused', 'Pending', 'Active', 'Archived'] },
    data: { type: Object, default: {} },
    meta: { type: Object, default: {} },
    createdDate: { type: Date, default: Date.now },
    updatedDate: { type: Date },
    deletedDate: { type: Date },
  },
  {
    collection: 'VideoScene',
    timestamps: { createdAt: 'createdDate', updatedAt: 'updatedDate' },
  }
);

export const Agent = new Schema<types.Agent>(
  {
    applicationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Application',
      required: true,
    } as any,
    name: { type: String, required: true },
    description: { type: String },
    status: { type: String, default: 'Active', enum: ['Paused', 'Pending', 'Active', 'Archived'] },
    data: { type: Object, default: {} },
    meta: { type: Object, default: {} },
    createdDate: { type: Date, default: Date.now },
    updatedDate: { type: Date },
    deletedDate: { type: Date },
  },
  { collection: 'Agent', timestamps: { createdAt: 'createdDate', updatedAt: 'updatedDate' } }
);

export const Memory = new Schema<types.Memory>(
  {
    applicationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Application',
      required: true,
    } as any,
    description: { type: String },
    status: { type: String, default: 'Active', enum: ['Paused', 'Pending', 'Active', 'Archived'] },
    data: { type: Object, default: {} },
    meta: { type: Object, default: {} },
    createdDate: { type: Date, default: Date.now },
    updatedDate: { type: Date },
    deletedDate: { type: Date },
  },
  { collection: 'Memory', timestamps: { createdAt: 'createdDate', updatedAt: 'updatedDate' } }
);

export const Conversation = new Schema<types.Conversation>(
  {
    applicationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Application',
      required: true,
    } as any,
    userId: { type: String },
    name: { type: String, required: true },
    description: { type: String },
    messages: [],
    status: { type: String, default: 'Active', enum: ['Paused', 'Pending', 'Active', 'Archived'] },
    meta: { type: Object, default: {} },
    createdDate: { type: Date, default: Date.now },
    updatedDate: { type: Date },
    deletedDate: { type: Date },
  },
  {
    collection: 'Conversation',
    timestamps: { createdAt: 'createdDate', updatedAt: 'updatedDate' },
  }
);

export const Log = new Schema<types.Log>(
  {
    applicationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Application',
      required: true,
    } as any,
    mod: { type: String, required: true },
    messages: { type: Array },
    tags: { type: Array },
    data: { type: Object, default: {} },
    meta: { type: Object, default: {} },
    status: { type: String, default: 'Active', enum: ['Paused', 'Pending', 'Active', 'Archived'] },
    createdDate: { type: Date, default: Date.now },
    updatedDate: { type: Date },
    deletedDate: { type: Date },
    createdById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    editedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    deletedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
  },
  { collection: 'Log', timestamps: { createdAt: 'createdDate', updatedAt: 'updatedDate' } }
);

Log.index({ deletedDate: 1 });
Log.index({ mod: 1 });
Log.index({ status: 1 });
Log.index({ createdDate: 1, updatedDate: 1 });

export const Job = new Schema<types.Job>(
  {
    applicationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Application',
      required: true,
    } as any,
    mod: { type: String, required: true },
    key: { type: String, required: true },
    startDate: { type: Date },
    expireDate: { type: Date },
    data: { type: Object, default: {} },
    meta: { type: Object, default: {} },
    status: { type: String, default: 'Active', enum: ['Paused', 'Pending', 'Active', 'Archived'] },
    createdDate: { type: Date, default: Date.now },
    updatedDate: { type: Date },
    deletedDate: { type: Date },
  },
  { collection: 'Job', timestamps: { createdAt: 'createdDate', updatedAt: 'updatedDate' } }
);
Job.index({ applicationId: 1, mod: 1, key: 1 }, { unique: true });

export const NewsArticle = new Schema<types.NewsArticle>(
  {
    applicationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Application',
      required: true,
    } as any,
    name: {
      type: String,
      required: true,
      minlength: [3, 'Minimum length: 3'],
      maxlength: [50, 'Maximum length: 50'],
      trim: true,
    },
    href: { type: String, required: true },
    source: { type: String, required: true },
    meta: { type: Object, default: {} },
    status: { type: String, default: 'Active', enum: ['Paused', 'Pending', 'Active', 'Archived'] },
    createdDate: { type: Date, default: Date.now },
    updatedDate: { type: Date },
    deletedDate: { type: Date },
  },
  {
    collection: 'NewsArticle',
    timestamps: { createdAt: 'createdDate', updatedAt: 'updatedDate' },
  }
);
NewsArticle.index({ applicationId: 1, name: 1, source: 1 }, { unique: true });

export const Comment = new Schema<types.Comment>(
  {
    applicationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Application',
      required: true,
    } as any,
    body: { type: String, required: true },
    entity: {
      type: Schema.Types.ObjectId,
      required: true,
      refPath: 'entityModel',
    },
    entityModel: {
      type: String,
      required: true,
      enum: ['NewsArticle', 'ChainToken'],
    },
    createdDate: { type: Date, default: Date.now },
    updatedDate: { type: Date },
    deletedDate: { type: Date },

    text: { type: String, required: true },
    meta: { type: Object, default: {} },
    status: { type: String, default: 'Active', enum: ['Paused', 'Pending', 'Active', 'Archived'] },
    ownerId: { type: Schema.Types.ObjectId, ref: 'Profile', required: true } as any,
    createdById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    editedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    deletedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    ratingId: { type: Schema.Types.ObjectId, ref: 'Rating' } as any,
  },
  { collection: 'Comment', timestamps: { createdAt: 'createdDate', updatedAt: 'updatedDate' } }
);

export const Question = new Schema<types.Question>(
  {
    applicationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Application',
      required: true,
    } as any,
    key: {
      type: String,
      required: true,
      minlength: [2, 'Minimum length: 2'],
      maxlength: [200, 'Maximum length: 200'],
      trim: true,
    },
    text: { type: String, required: true },
    answer: { type: String, required: true },
    popularity: { type: Number },
    topics: { type: Array },
    data: { type: Object, default: {} },
    meta: { type: Object, default: {} },
    status: { type: String, default: 'Active', enum: ['Paused', 'Pending', 'Active', 'Archived'] },
    createdDate: { type: Date, default: Date.now },
    updatedDate: { type: Date },
    deletedDate: { type: Date },
  },
  { collection: 'Question', timestamps: { createdAt: 'createdDate', updatedAt: 'updatedDate' } }
);

export const Topic = new Schema<types.Topic>(
  {
    applicationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Application',
      required: true,
    } as any,
    key: {
      type: String,
      required: true,
      minlength: [2, 'Minimum length: 2'],
      maxlength: [200, 'Maximum length: 200'],
      trim: true,
    },
    text: { type: String, required: true },
    popularity: { type: Number },
    tags: { type: Array },
    data: { type: Object, default: {} },
    meta: { type: Object, default: {} },
    status: { type: String, default: 'Active', enum: ['Paused', 'Pending', 'Active', 'Archived'] },
    createdDate: { type: Date, default: Date.now },
    updatedDate: { type: Date },
    deletedDate: { type: Date },
  },
  { collection: 'Topic', timestamps: { createdAt: 'createdDate', updatedAt: 'updatedDate' } }
);

export const WorldEvent = new Schema<types.WorldEvent>(
  {
    applicationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Application',
      required: true,
    } as any,
    key: {
      type: String,
      required: true,
      minlength: [2, 'Minimum length: 2'],
      maxlength: [200, 'Maximum length: 200'],
      trim: true,
    },
    text: { type: String, required: true },
    importance: { type: Number },
    tags: { type: Array },
    data: { type: Object, default: {} },
    meta: { type: Object, default: {} },
    status: { type: String, default: 'Active', enum: ['Paused', 'Pending', 'Active', 'Archived'] },
    createdDate: { type: Date, default: Date.now },
    updatedDate: { type: Date },
    deletedDate: { type: Date },
  },
  {
    collection: 'WorldEvent',
    timestamps: { createdAt: 'createdDate', updatedAt: 'updatedDate' },
  }
);

export const CollectibleCollection = new Schema<types.CollectibleCollection>(
  {
    applicationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Application',
      required: true,
    } as any,
    name: {
      type: String,
      required: true,
      minlength: [2, 'Minimum length: 2'],
      maxlength: [200, 'Maximum length: 200'],
      trim: true,
    },
    hype: { type: Number },
    value: { type: Number },
    data: { type: Object, default: {} },
    meta: { type: Object, default: {} },
    status: { type: String, default: 'Active', enum: ['Paused', 'Pending', 'Active', 'Archived'] },
    createdDate: { type: Date, default: Date.now },
    updatedDate: { type: Date },
    deletedDate: { type: Date },
  },
  {
    collection: 'CollectibleCollection',
    timestamps: { createdAt: 'createdDate', updatedAt: 'updatedDate' },
  }
);

export const CollectibleCardBox = new Schema<types.CollectibleCardBox>(
  {
    applicationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Application',
      required: true,
    } as any,
    collectibleCollectionId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'CollectibleCollection',
    } as any,
    name: {
      type: String,
      required: true,
      minlength: [2, 'Minimum length: 2'],
      maxlength: [200, 'Maximum length: 200'],
      trim: true,
    },
    franchise: {
      type: String,
      required: true,
      trim: true,
    },
    data: { type: Object, default: {} },
    meta: { type: Object, default: {} },
    status: { type: String, default: 'Active', enum: ['Paused', 'Pending', 'Active', 'Archived'] },
    createdDate: { type: Date, default: Date.now },
    updatedDate: { type: Date },
    deletedDate: { type: Date },
  },
  {
    collection: 'CollectibleCardBox',
    timestamps: { createdAt: 'createdDate', updatedAt: 'updatedDate' },
  }
);

export const CollectibleCardPack = new Schema<types.CollectibleCardPack>(
  {
    applicationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Application',
      required: true,
    } as any,
    collectibleCollectionId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'CollectibleCollection',
    } as any,
    name: {
      type: String,
      required: true,
      minlength: [2, 'Minimum length: 2'],
      maxlength: [200, 'Maximum length: 200'],
      trim: true,
    },
    franchise: {
      type: String,
      required: true,
      trim: true,
    },
    ungraded: { type: Number },
    grade10: { type: Number },
    grade9: { type: Number },
    grade8: { type: Number },
    grade7: { type: Number },
    grade6: { type: Number },
    grade5: { type: Number },
    grade4: { type: Number },
    grade3: { type: Number },
    grade2: { type: Number },
    grade1: { type: Number },
    additional: { type: String },
    code: { type: String },
    hype: { type: Number },
    series: { type: String },
    category: { type: String },
    year: { type: Number },
    data: { type: Object, default: {} },
    meta: { type: Object, default: {} },
    status: { type: String, default: 'Active', enum: ['Paused', 'Pending', 'Active', 'Archived'] },
    createdDate: { type: Date, default: Date.now },
    updatedDate: { type: Date },
    deletedDate: { type: Date },
  },
  {
    collection: 'CollectibleCardPack',
    timestamps: { createdAt: 'createdDate', updatedAt: 'updatedDate' },
  }
);

export const CollectibleCard = new Schema<types.CollectibleCard>(
  {
    applicationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Application',
      required: true,
    } as any,
    collectibleCollectionId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'CollectibleCollection',
    } as any,
    name: {
      type: String,
      required: true,
      minlength: [1, 'Minimum length: 1'],
      maxlength: [200, 'Maximum length: 200'],
      trim: true,
    },
    franchise: {
      type: String,
      required: true,
      trim: true,
    },
    ungraded: { type: Number },
    grade10: { type: Number },
    grade9: { type: Number },
    grade8: { type: Number },
    grade7: { type: Number },
    grade6: { type: Number },
    grade5: { type: Number },
    grade4: { type: Number },
    grade3: { type: Number },
    grade2: { type: Number },
    grade1: { type: Number },
    additional: { type: String },
    code: { type: String },
    hype: { type: Number },
    series: { type: String },
    category: { type: String },
    year: { type: Number },
    data: { type: Object, default: {} },
    meta: { type: Object, default: {} },
    status: { type: String, default: 'Active', enum: ['Paused', 'Pending', 'Active', 'Archived'] },
    createdDate: { type: Date, default: Date.now },
    updatedDate: { type: Date },
    deletedDate: { type: Date },
  },
  {
    collection: 'CollectibleCard',
    timestamps: { createdAt: 'createdDate', updatedAt: 'updatedDate' },
  }
);

export const Stock = new Schema<types.Stock>(
  {
    applicationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Application',
      required: true,
    } as any,
    rank: { type: Number, min: 0 },
    name: { type: String, required: true },
    meta: { type: Object, default: {} },
    status: { type: String, default: 'Active', enum: ['Paused', 'Pending', 'Active', 'Archived'] },
    price: { type: Number, min: 0 },
    hourChange: { type: Number },
    dayChange: { type: Number },
    weekChange: { type: Number },
    marketCap: { type: Number, min: 0 },
    volume: { type: Number, min: 0 },
    ticker: { type: String, required: true },
    unusualActivity: { type: Number, min: 0 },
    createdDate: { type: Date, default: Date.now },
    updatedDate: { type: Date },
    deletedDate: { type: Date },
  },
  { collection: 'Stock', timestamps: { createdAt: 'createdDate', updatedAt: 'updatedDate' } }
);

export const Chain = new Schema<types.Chain>(
  {
    name: { type: String, required: true, maxlength: 100 },
    key: { type: String, maxlength: 100 },
    description: { type: String },
    content: { type: String },
    meta: { type: Object, default: {} },
    status: { type: String, default: 'Active', enum: ['Paused', 'Pending', 'Active', 'Archived'] },
    metaverseId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Metaverse',
      required: true,
    } as any,
    ownerId: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    createdById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    editedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    deletedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date },
    deletedAt: { type: Date },
    type: { type: String, maxlength: 100 },
    standard: { type: String, maxlength: 100 },
  },
  {
    timestamps: { createdAt: 'createdDate', updatedAt: 'updatedDate' },
    collection: 'Chain',
  }
);

Chain.index({ deletedDate: 1 });
Chain.index({ key: 1 });
Chain.index({ name: 1 });
Chain.index({ status: 1 });
Chain.index({ createdDate: 1, updatedDate: 1 });

Chain.virtual('transactions', {
  ref: 'ChainTransaction',
  localField: '_id',
  foreignField: 'chainId',
});

Chain.virtual('contracts', {
  ref: 'ChainContract',
  localField: '_id',
  foreignField: 'chainId',
});

Chain.virtual('tokens', {
  ref: 'ChainToken',
  localField: '_id',
  foreignField: 'chainId',
});

export const ChainContract = new Schema<types.ChainContract>({
  name: { type: String, required: true, maxlength: 100 },
  key: { type: String, maxlength: 100 },
  description: { type: String, required: true },
  content: { type: String, required: true },
  meta: { type: Object, default: {} },
  status: { type: String, default: 'Active', enum: ['Paused', 'Pending', 'Active', 'Archived'] },
  applicationId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Application',
    required: true,
  },
  ownerId: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
  createdById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
  editedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
  deletedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date },
  deletedAt: { type: Date },
  type: { type: String, maxlength: 100 },
  standard: { type: String, maxlength: 100 },
});

export const ChainToken = new Schema<types.ChainToken>(
  {
    applicationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Application',
      required: true,
    } as any,
    rank: { type: Number, min: 0 },
    name: { type: String, required: true },
    description: { type: String, required: true },
    content: { type: String, required: true },
    type: { type: String, maxlength: 100 },
    standard: { type: String, maxlength: 100 },
    price: { type: Number, min: 0 },
    hourChange: { type: Number },
    dayChange: { type: Number },
    weekChange: { type: Number },
    marketCap: { type: Number, min: 0 },
    volume: { type: Number, min: 0 },
    symbol: { type: String, required: true },
    circulatingSupply: { type: Number, min: 0 },
    cmcLink: { type: String },
    movementDown: { type: Number, min: 0 },
    movementUp: { type: Number, min: 0 },
    enteredTop100: { type: Number, min: 0 },
    exitedTop100: { type: Number, min: 0 },
    largeMoveDown: { type: Number, min: 0 },
    data: { type: Object, default: {} },
    meta: { type: Object, default: {} },
    ownerId: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    createdById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    editedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    deletedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    status: { type: String, default: 'Active', enum: ['Paused', 'Pending', 'Active', 'Archived'] },
    createdDate: { type: Date, default: Date.now },
    updatedDate: { type: Date },
    deletedDate: { type: Date },
  },
  {
    collection: 'ChainToken',
    timestamps: { createdAt: 'createdDate', updatedAt: 'updatedDate' },
  }
);
ChainToken.index({ applicationId: 1, symbol: 1 }, { unique: true });

export const Asset = new Schema<types.Asset>(
  {
    name: { type: String, maxlength: 100 },
    key: { type: String, maxlength: 100 },
    uri: { type: String },
    meta: { type: Object, default: {} },
    status: { type: String, default: 'Active', enum: ['Paused', 'Pending', 'Active', 'Archived'] },
    applicationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Application',
      required: true,
    } as any,
    metaverseId: { type: Schema.Types.ObjectId, ref: 'Metaverse', required: true } as any,
    chainId: { type: Schema.Types.ObjectId, ref: 'Chain' } as any,
    ownerId: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    createdById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    editedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    deletedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    createdDate: { type: Date, default: Date.now },
    updatedDate: { type: Date },
    deletedDate: { type: Date },
    type: { type: String, maxlength: 100 },
    standard: { type: String, maxlength: 100 },
    licenseId: { type: String },

    license: { type: Schema.Types.ObjectId, ref: 'AssetLicense' } as any,
    chain: { type: Schema.Types.ObjectId, ref: 'Chain' } as any,
    items: [{ type: Schema.Types.ObjectId, ref: 'Item' }],
  },
  {
    timestamps: { createdAt: 'createdDate', updatedAt: 'updatedDate' },
    collection: 'Asset',
  }
);

Asset.index({ deletedDate: 1 });
Asset.index({ key: 1 });
Asset.index({ name: 1 });
Asset.index({ status: 1 });
Asset.index({ createdDate: 1, updatedDate: 1 });

export const Item = new Schema<types.Item>(
  {
    name: { type: String, maxlength: 100 },
    key: { type: String, maxlength: 100 },
    token: { type: String, maxlength: 500 },
    meta: { type: Object, default: {} },
    status: { type: String, default: 'Active', enum: ['Paused', 'Pending', 'Active', 'Archived'] },
    assetId: { type: Schema.Types.ObjectId, ref: 'Asset', required: true } as any,
    metaverseId: { type: Schema.Types.ObjectId, ref: 'Metaverse', required: true } as any,
    chainId: { type: Schema.Types.ObjectId, ref: 'Chain', required: true } as any,
    ownerId: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    createdById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    editedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    deletedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    createdDate: { type: Date, default: Date.now },
    updatedDate: { type: Date },
    deletedDate: { type: Date },
  },
  {
    timestamps: { createdAt: 'createdDate', updatedAt: 'updatedDate' },
    collection: 'Item',
  }
);

Item.index({ deletedDate: 1 });
Item.index({ key: 1 });
Item.index({ name: 1 });
Item.index({ status: 1 });
Item.index({ createdDate: 1, updatedDate: 1 });

export const ItemTransmute = new Schema<types.ItemTransmute>(
  {
    name: { type: String, maxlength: 100 },
    key: { type: String, maxlength: 100 },
    token: { type: String, maxlength: 500 },
    meta: { type: Object, default: {} },
    status: { type: String, default: 'Active', enum: ['Paused', 'Pending', 'Active', 'Archived'] },
    assetId: { type: Schema.Types.ObjectId, ref: 'Asset', required: true } as any,
    gameItemId: { type: Schema.Types.ObjectId, ref: 'Item', required: true } as any,
    metaverseId: { type: Schema.Types.ObjectId, ref: 'Metaverse', required: true } as any,
    ownerId: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    createdById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    editedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    deletedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    createdDate: { type: Date, default: Date.now },
    updatedDate: { type: Date },
    deletedDate: { type: Date },
    chain: { type: Schema.Types.ObjectId, ref: 'Chain' } as any,
  },
  {
    timestamps: { createdAt: 'createdDate', updatedAt: 'updatedDate' },
    collection: 'ItemTransmute',
  }
);

ItemTransmute.index({ deletedDate: 1 });
ItemTransmute.index({ key: 1 });
ItemTransmute.index({ name: 1 });
ItemTransmute.index({ status: 1 });
ItemTransmute.index({ createdDate: 1, updatedDate: 1 });

ItemTransmute.virtual('item', {
  ref: 'Item',
  localField: 'gameItemId',
  foreignField: '_id',
});

ItemTransmute.virtual('asset', {
  ref: 'Asset',
  localField: 'assetId',
  foreignField: '_id',
});

export const Badge = new Schema<types.Badge>(
  {
    name: { type: String, maxlength: 100 },
    key: { type: String, maxlength: 100 },
    value: { type: String },
    meta: { type: Object, default: {} },
    status: { type: String, default: 'Active', enum: ['Paused', 'Pending', 'Active', 'Archived'] },
    applicationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Application',
      required: true,
    } as any,
    ownerId: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    createdById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    editedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    deletedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    createdDate: { type: Date, default: Date.now },
    updatedDate: { type: Date },
    deletedDate: { type: Date },
  },
  {
    timestamps: { createdAt: 'createdDate', updatedAt: 'updatedDate' },
    collection: 'Badge',
  }
);

Badge.index({ deletedDate: 1 });
Badge.index({ key: 1 });
Badge.index({ name: 1 });
Badge.index({ status: 1 });
Badge.index({ createdDate: 1, updatedDate: 1 });

export const BattlePass = new Schema<types.BattlePass>(
  {
    name: { type: String, maxlength: 100 },
    key: { type: String, maxlength: 100 },
    description: { type: String },
    meta: { type: Object, default: {} },
    status: { type: String, default: 'Active', enum: ['Paused', 'Pending', 'Active', 'Archived'] },
    applicationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Application',
      required: true,
    } as any,
    ownerId: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    createdById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    editedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    deletedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    createdDate: { type: Date, default: Date.now },
    updatedDate: { type: Date },
    deletedDate: { type: Date },
  },
  {
    timestamps: { createdAt: 'createdDate', updatedAt: 'updatedDate' },
    collection: 'BattlePass',
  }
);

BattlePass.index({ deletedDate: 1 });
BattlePass.index({ key: 1 });
BattlePass.index({ name: 1 });
BattlePass.index({ status: 1 });
BattlePass.index({ createdDate: 1, updatedDate: 1 });

export const Bounty = new Schema<types.Bounty>(
  {
    name: { type: String, maxlength: 100 },
    key: { type: String, maxlength: 100 },
    description: { type: String },
    meta: { type: Object, default: {} },
    status: { type: String, default: 'Active', enum: ['Paused', 'Pending', 'Active', 'Archived'] },
    applicationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Application',
      required: true,
    } as any,
    ownerId: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    createdById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    editedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    deletedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    createdDate: { type: Date, default: Date.now },
    updatedDate: { type: Date },
    deletedDate: { type: Date },
  },
  {
    timestamps: { createdAt: 'createdDate', updatedAt: 'updatedDate' },
    collection: 'Bounty',
  }
);

Bounty.index({ deletedDate: 1 });
Bounty.index({ key: 1 });
Bounty.index({ name: 1 });
Bounty.index({ status: 1 });
Bounty.index({ createdDate: 1, updatedDate: 1 });

export const Collection = new Schema<types.Collection>(
  {
    name: { type: String, maxlength: 100 },
    key: { type: String, maxlength: 100 },
    value: { type: String },
    meta: { type: Object, default: {} },
    status: { type: String, default: 'Active', enum: ['Paused', 'Pending', 'Active', 'Archived'] },
    applicationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Application',
      required: true,
    } as any,
    ownerId: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    createdById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    editedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    deletedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    createdDate: { type: Date, default: Date.now },
    updatedDate: { type: Date },
    deletedDate: { type: Date },
  },
  {
    timestamps: { createdAt: 'createdDate', updatedAt: 'updatedDate' },
    collection: 'Collection',
  }
);

Collection.index({ deletedDate: 1 });
Collection.index({ key: 1 });
Collection.index({ name: 1 });
Collection.index({ status: 1 });
Collection.index({ createdDate: 1, updatedDate: 1 });

export const Community = new Schema<types.Community>(
  {
    name: { type: String, maxlength: 100 },
    key: { type: String, maxlength: 100 },
    value: { type: String },
    meta: { type: Object, default: {} },
    status: { type: String, default: 'Active', enum: ['Paused', 'Pending', 'Active', 'Archived'] },
    applicationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Application',
      required: true,
    } as any,
    ownerId: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    createdById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    editedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    deletedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    createdDate: { type: Date, default: Date.now },
    updatedDate: { type: Date },
    deletedDate: { type: Date },
    ideas: [{ type: Schema.Types.ObjectId, ref: 'Idea' }],
    products: [{ type: Schema.Types.ObjectId, ref: 'Product' }],
    projects: [{ type: Schema.Types.ObjectId, ref: 'Project' }],
  },
  {
    timestamps: { createdAt: 'createdDate', updatedAt: 'updatedDate' },
    collection: 'Community',
  }
);

Community.index({ deletedDate: 1 });
Community.index({ key: 1 });
Community.index({ name: 1 });
Community.index({ status: 1 });
Community.index({ createdDate: 1, updatedDate: 1 });

export const Discussion = new Schema<types.Discussion>(
  {
    name: { type: String, maxlength: 100 },
    key: { type: String, maxlength: 100 },
    content: { type: String },
    meta: { type: Object, default: {} },
    status: { type: String, default: 'Active', enum: ['Paused', 'Pending', 'Active', 'Archived'] },
    applicationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Application',
      required: true,
    } as any,
    ownerId: { type: Schema.Types.ObjectId, ref: 'Profile', required: true } as any,
    createdById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    editedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    deletedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    createdDate: { type: Date, default: Date.now },
    updatedDate: { type: Date },
    deletedDate: { type: Date },
    parentId: { type: String },
    rootMessageId: { type: String },
    type: { type: String, default: 'Discussion' },
  },
  {
    timestamps: { createdAt: 'createdDate', updatedAt: 'updatedDate' },
    collection: 'Discussion',
  }
);

Discussion.index({ deletedDate: 1 });
Discussion.index({ key: 1 });
Discussion.index({ name: 1 });
Discussion.index({ status: 1 });
Discussion.index({ createdDate: 1, updatedDate: 1 });

export const Event = new Schema<types.Event>(
  {
    name: { type: String, maxlength: 100 },
    key: { type: String, maxlength: 100 },
    value: { type: String },
    meta: { type: Object, default: {} },
    status: { type: String, default: 'Active', enum: ['Paused', 'Pending', 'Active', 'Archived'] },
    applicationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Application',
      required: true,
    } as any,
    ownerId: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    createdById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    editedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    deletedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    createdDate: { type: Date, default: Date.now },
    updatedDate: { type: Date },
    deletedDate: { type: Date },
  },
  {
    timestamps: { createdAt: 'createdDate', updatedAt: 'updatedDate' },
    collection: 'Event',
  }
);

Event.index({ deletedDate: 1 });
Event.index({ key: 1 });
Event.index({ name: 1 });
Event.index({ status: 1 });
Event.index({ createdDate: 1, updatedDate: 1 });

export const Exchange = new Schema<types.Exchange>(
  {
    name: { type: String, maxlength: 100 },
    key: { type: String, maxlength: 100 },
    value: { type: String },
    meta: { type: Object, default: {} },
    status: { type: String, default: 'Active', enum: ['Paused', 'Pending', 'Active', 'Archived'] },
    applicationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Application',
      required: true,
    } as any,
    ownerId: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    createdById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    editedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    deletedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    createdDate: { type: Date, default: Date.now },
    updatedDate: { type: Date },
    deletedDate: { type: Date },
  },
  {
    timestamps: { createdAt: 'createdDate', updatedAt: 'updatedDate' },
    collection: 'Exchange',
  }
);

Exchange.index({ deletedDate: 1 });
Exchange.index({ key: 1 });
Exchange.index({ name: 1 });
Exchange.index({ status: 1 });
Exchange.index({ createdDate: 1, updatedDate: 1 });

export const File = new Schema<types.File>(
  {
    name: { type: String, maxlength: 100 },
    key: { type: String, maxlength: 100 },
    value: { type: String },
    meta: { type: Object, default: {} },
    status: { type: String, default: 'Active', enum: ['Paused', 'Pending', 'Active', 'Archived'] },
    applicationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Application',
      required: true,
    } as any,
    ownerId: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    createdById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    editedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    deletedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    createdDate: { type: Date, default: Date.now },
    updatedDate: { type: Date },
    deletedDate: { type: Date },
    storageType: { type: String, maxlength: 100 },
    accessType: { type: String, maxlength: 100 },
  },
  {
    timestamps: { createdAt: 'createdDate', updatedAt: 'updatedDate' },
    collection: 'File',
  }
);

File.index({ deletedDate: 1 });
File.index({ key: 1 });
File.index({ name: 1 });
File.index({ status: 1 });
File.index({ createdDate: 1, updatedDate: 1 });

export const Idea = new Schema<types.Idea>(
  {
    name: { type: String, maxlength: 100 },
    key: { type: String, maxlength: 100 },
    value: { type: String },
    meta: { type: Object, default: {} },
    status: { type: String, default: 'Active', enum: ['Paused', 'Pending', 'Active', 'Archived'] },
    applicationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Application',
      required: true,
    } as any,
    ownerId: { type: Schema.Types.ObjectId, ref: 'Profile', required: true } as any,
    createdById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    editedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    deletedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    createdDate: { type: Date, default: Date.now },
    updatedDate: { type: Date },
    deletedDate: { type: Date },
    type: { type: String, maxlength: 100 },
    communityId: { type: Schema.Types.ObjectId, ref: 'Community' } as any,
    community: { type: Schema.Types.ObjectId, ref: 'Community' } as any,
  },
  {
    timestamps: { createdAt: 'createdDate', updatedAt: 'updatedDate' },
    collection: 'Idea',
  }
);

Idea.index({ deletedDate: 1 });
Idea.index({ key: 1 });
Idea.index({ name: 1 });
Idea.index({ status: 1 });
Idea.index({ createdDate: 1, updatedDate: 1 });

export const Leaderboard = new Schema<types.Leaderboard>(
  {
    name: { type: String, maxlength: 100 },
    key: { type: String, maxlength: 100 },
    value: { type: String },
    meta: { type: Object, default: {} },
    status: { type: String, default: 'Active', enum: ['Paused', 'Pending', 'Active', 'Archived'] },
    applicationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Application',
      required: true,
    } as any,
    ownerId: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    createdById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    editedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    deletedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    createdDate: { type: Date, default: Date.now },
    updatedDate: { type: Date },
    deletedDate: { type: Date },
    productId: { type: Schema.Types.ObjectId, ref: 'Product' } as any,
  },
  {
    timestamps: { createdAt: 'createdDate', updatedAt: 'updatedDate' },
    collection: 'Leaderboard',
  }
);

Leaderboard.index({ deletedDate: 1 });
Leaderboard.index({ key: 1 });
Leaderboard.index({ name: 1 });
Leaderboard.index({ status: 1 });
Leaderboard.index({ createdDate: 1, updatedDate: 1 });

Leaderboard.virtual('product', {
  ref: 'Product',
  localField: 'productId',
  foreignField: '_id',
  justOne: true,
});

Leaderboard.virtual('players', {
  ref: 'Profile',
  localField: '_id',
  foreignField: '_id',
  justOne: false,
  through: {
    from: 'nodes.fromLeaderboardId',
    to: 'nodes.toProfileId',
    extra: ['relationKey'],
  },
});

Leaderboard.pre<any>('save', function (next) {
  this.relationKey = 'players';
  next();
});

export enum NodeRelation {
  Chat = 'chat',
}

interface NodeDocument extends Document {
  createdDate: any;
  updatedDate: any;
  deletedDate: any;
  parentId: mongoose.Types.ObjectId;
  relationKey: string;
  relationType: string;
  fromAccountId: mongoose.Types.ObjectId;
  toAccountId: mongoose.Types.ObjectId;
  fromProfileId: mongoose.Types.ObjectId;
  toProfileId: mongoose.Types.ObjectId;
  fromBadgeId: mongoose.Types.ObjectId;
  toBadgeId: mongoose.Types.ObjectId;
  fromAchievementId: mongoose.Types.ObjectId;
  toAchievementId: mongoose.Types.ObjectId;
  fromIdeaId: mongoose.Types.ObjectId;
  toIdeaId: mongoose.Types.ObjectId;
  fromSuggestionId: mongoose.Types.ObjectId;
  toSuggestionId: mongoose.Types.ObjectId;
  fromProjectId: mongoose.Types.ObjectId;
  toProjectId: mongoose.Types.ObjectId;
  fromProductId: mongoose.Types.ObjectId;
  toProductId: mongoose.Types.ObjectId;
  fromAssetId: mongoose.Types.ObjectId;
  toAssetId: mongoose.Types.ObjectId;
  fromBountyId: mongoose.Types.ObjectId;
  toBountyId: mongoose.Types.ObjectId;
  fromRealmId: mongoose.Types.ObjectId;
  toRealmId: mongoose.Types.ObjectId;
  fromCommunityId: mongoose.Types.ObjectId;
  toCommunityId: mongoose.Types.ObjectId;
  fromCollectionId: mongoose.Types.ObjectId;
  toCollectionId: mongoose.Types.ObjectId;
  fromDiscussionId: mongoose.Types.ObjectId;
  toDiscussionId: mongoose.Types.ObjectId;
  fromMessageId: mongoose.Types.ObjectId;
  toMessageId: mongoose.Types.ObjectId;
  fromOfferId: mongoose.Types.ObjectId;
  toOfferId: mongoose.Types.ObjectId;
  fromLicenseId: mongoose.Types.ObjectId;
  toLicenseId: mongoose.Types.ObjectId;
  fromOrderId: mongoose.Types.ObjectId;
  toOrderId: mongoose.Types.ObjectId;
  fromRatingId: mongoose.Types.ObjectId;
  toRatingId: mongoose.Types.ObjectId;
  fromReviewId: mongoose.Types.ObjectId;
  toReviewId: mongoose.Types.ObjectId;
  fromTagId: mongoose.Types.ObjectId;
  toTagId: mongoose.Types.ObjectId;
  fromVoteId: mongoose.Types.ObjectId;
  toVoteId: mongoose.Types.ObjectId;
  fromLeaderboardId: mongoose.Types.ObjectId;
  toLeaderboardId: mongoose.Types.ObjectId;
  fromLogId: mongoose.Types.ObjectId;
  toLogId: mongoose.Types.ObjectId;
  fromFileId: mongoose.Types.ObjectId;
  toFileId: mongoose.Types.ObjectId;
  fromEventId: mongoose.Types.ObjectId;
  toEventId: mongoose.Types.ObjectId;
  fromServerId: mongoose.Types.ObjectId;
  toServerId: mongoose.Types.ObjectId;
}

export const Node = new Schema<types.Node>(
  {
    parentId: {
      type: Schema.Types.ObjectId,
      ref: 'Node',
      required: true,
    } as any,
    relationKey: {
      type: String,
      required: true,
    },
    relationType: {
      type: String,
      required: true,
    },
    fromAccountId: {
      type: Schema.Types.ObjectId,
      ref: 'Account',
    } as any,
    toAccountId: {
      type: Schema.Types.ObjectId,
      ref: 'Account',
    } as any,
    fromProfileId: {
      type: Schema.Types.ObjectId,
      ref: 'Profile',
    } as any,
    toProfileId: {
      type: Schema.Types.ObjectId,
      ref: 'Profile',
    } as any,
    fromBadgeId: {
      type: Schema.Types.ObjectId,
      ref: 'Badge',
    } as any,
    toBadgeId: {
      type: Schema.Types.ObjectId,
      ref: 'Badge',
    } as any,
    fromAchievementId: {
      type: Schema.Types.ObjectId,
      ref: 'Achievement',
    } as any,
    toAchievementId: {
      type: Schema.Types.ObjectId,
      ref: 'Achievement',
    } as any,
    fromIdeaId: {
      type: Schema.Types.ObjectId,
      ref: 'Idea',
    } as any,
    toIdeaId: {
      type: Schema.Types.ObjectId,
      ref: 'Idea',
    } as any,
    fromSuggestionId: {
      type: Schema.Types.ObjectId,
      ref: 'Suggestion',
    } as any,
    toSuggestionId: {
      type: Schema.Types.ObjectId,
      ref: 'Suggestion',
    } as any,
    fromProjectId: {
      type: Schema.Types.ObjectId,
      ref: 'Project',
    } as any,
    toProjectId: {
      type: Schema.Types.ObjectId,
      ref: 'Project',
    } as any,
    fromProductId: {
      type: Schema.Types.ObjectId,
      ref: 'Product',
    } as any,
    toProductId: {
      type: Schema.Types.ObjectId,
      ref: 'Product',
    } as any,
    fromAssetId: {
      type: Schema.Types.ObjectId,
      ref: 'Asset',
    } as any,
    toAssetId: {
      type: Schema.Types.ObjectId,
      ref: 'Asset',
    } as any,
    fromBountyId: {
      type: Schema.Types.ObjectId,
      ref: 'Bounty',
    } as any,
    toBountyId: {
      type: Schema.Types.ObjectId,
      ref: 'Bounty',
    } as any,
    fromRealmId: {
      type: Schema.Types.ObjectId,
      ref: 'Realm',
    } as any,
    toRealmId: {
      type: Schema.Types.ObjectId,
      ref: 'Realm',
    } as any,
    fromCommunityId: {
      type: Schema.Types.ObjectId,
      ref: 'Community',
    } as any,
    toCommunityId: {
      type: Schema.Types.ObjectId,
      ref: 'Community',
    } as any,
    fromCollectionId: {
      type: Schema.Types.ObjectId,
      ref: 'Collection',
    } as any,
    toCollectionId: {
      type: Schema.Types.ObjectId,
      ref: 'Collection',
    } as any,
    fromDiscussionId: {
      type: Schema.Types.ObjectId,
      ref: 'Discussion',
    } as any,
    toDiscussionId: {
      type: Schema.Types.ObjectId,
      ref: 'Discussion',
    } as any,
    fromMessageId: {
      type: Schema.Types.ObjectId,
      ref: 'Message',
    } as any,
    toMessageId: {
      type: Schema.Types.ObjectId,
      ref: 'Message',
    } as any,
    fromOfferId: {
      type: Schema.Types.ObjectId,
      ref: 'Offer',
    } as any,
    toOfferId: {
      type: Schema.Types.ObjectId,
      ref: 'Offer',
    } as any,
    fromLicenseId: {
      type: Schema.Types.ObjectId,
      ref: 'License',
    } as any,
    toLicenseId: {
      type: Schema.Types.ObjectId,
      ref: 'License',
    } as any,
    fromOrderId: {
      type: Schema.Types.ObjectId,
      ref: 'Order',
    } as any,
    toOrderId: {
      type: Schema.Types.ObjectId,
      ref: 'Order',
    } as any,
    fromRatingId: {
      type: Schema.Types.ObjectId,
      ref: 'Rating',
    } as any,
    toRatingId: {
      type: Schema.Types.ObjectId,
      ref: 'Rating',
    } as any,
    fromReviewId: {
      type: Schema.Types.ObjectId,
      ref: 'Review',
    } as any,
    toReviewId: {
      type: Schema.Types.ObjectId,
      ref: 'Review',
    } as any,
    fromTagId: {
      type: Schema.Types.ObjectId,
      ref: 'Tag',
    } as any,
    toTagId: {
      type: Schema.Types.ObjectId,
      ref: 'Tag',
    } as any,
    fromVoteId: {
      type: Schema.Types.ObjectId,
      ref: 'Vote',
    } as any,
    toVoteId: {
      type: Schema.Types.ObjectId,
      ref: 'Vote',
    } as any,
    fromLeaderboardId: {
      type: Schema.Types.ObjectId,
      ref: 'Leaderboard',
    } as any,
    toLeaderboardId: {
      type: Schema.Types.ObjectId,
      ref: 'Leaderboard',
    } as any,
    fromLogId: {
      type: Schema.Types.ObjectId,
      ref: 'Log',
    } as any,
    toLogId: {
      type: Schema.Types.ObjectId,
      ref: 'Log',
    } as any,
    fromFileId: {
      type: Schema.Types.ObjectId,
      ref: 'File',
    } as any,
    toFileId: {
      type: Schema.Types.ObjectId,
      ref: 'File',
    } as any,
    fromEventId: {
      type: Schema.Types.ObjectId,
      ref: 'Event',
    } as any,
    toEventId: {
      type: Schema.Types.ObjectId,
      ref: 'Event',
    } as any,
    fromServerId: {
      type: Schema.Types.ObjectId,
      ref: 'Server',
    } as any,
    toServerId: {
      type: Schema.Types.ObjectId,
      ref: 'Server',
    } as any,
    createdDate: { type: Date, default: Date.now },
    updatedDate: { type: Date },
    deletedDate: { type: Date },
  },
  {
    timestamps: { createdAt: 'createdDate', updatedAt: 'updatedDate' },
    collection: 'Node',
  }
);

export const AssetLicense = new Schema<types.AssetLicense>(
  {
    name: { type: String, maxlength: 100 },
    key: { type: String, maxlength: 100 },
    value: { type: String },
    meta: { type: Object, default: {} },
    status: { type: String, default: 'Active', enum: ['Paused', 'Pending', 'Active', 'Archived'] },
    applicationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Application',
      required: true,
    } as any,
    ownerId: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    createdById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    editedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    deletedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    createdDate: { type: Date, default: Date.now },
    updatedDate: { type: Date },
    deletedDate: { type: Date },
    assets: [{ type: Schema.Types.ObjectId, ref: 'Asset' }],
  },
  {
    timestamps: { createdAt: 'createdDate', updatedAt: 'updatedDate' },
    collection: 'AssetLicense',
  }
);

AssetLicense.index({ deletedDate: 1 });
AssetLicense.index({ key: 1 });
AssetLicense.index({ name: 1 });
AssetLicense.index({ status: 1 });
AssetLicense.index({ createdDate: 1, updatedDate: 1 });

export const MarketPair = new Schema<types.MarketPair>(
  {
    name: { type: String, maxlength: 100 },
    key: { type: String, maxlength: 100 },
    value: { type: String },
    meta: { type: Object, default: {} },
    status: { type: String, default: 'Active', enum: ['Paused', 'Pending', 'Active', 'Archived'] },
    applicationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Application',
      required: true,
    } as any,
    ownerId: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    createdById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    editedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    deletedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    createdDate: { type: Date, default: Date.now },
    updatedDate: { type: Date },
    deletedDate: { type: Date },
  },
  {
    timestamps: { createdAt: 'createdDate', updatedAt: 'updatedDate' },
    collection: 'MarketPair',
  }
);

MarketPair.index({ deletedDate: 1 });
MarketPair.index({ key: 1 });
MarketPair.index({ name: 1 });
MarketPair.index({ status: 1 });
MarketPair.index({ createdDate: 1, updatedDate: 1 });

export const Market = new Schema<types.Market>(
  {
    name: { type: String, maxlength: 100 },
    key: { type: String, maxlength: 100 },
    value: { type: String },
    meta: { type: Object, default: {} },
    status: { type: String, default: 'Active', enum: ['Paused', 'Pending', 'Active', 'Archived'] },
    applicationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Application',
      required: true,
    } as any,
    ownerId: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    createdById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    editedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    deletedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    createdDate: { type: Date, default: Date.now },
    updatedDate: { type: Date },
    deletedDate: { type: Date },
  },
  {
    timestamps: { createdAt: 'createdDate', updatedAt: 'updatedDate' },
    collection: 'Market',
  }
);

Market.index({ deletedDate: 1 });
Market.index({ key: 1 });
Market.index({ name: 1 });
Market.index({ status: 1 });
Market.index({ createdDate: 1, updatedDate: 1 });

export const Message = new Schema<types.Message>(
  {
    name: { type: String, maxlength: 100 },
    key: { type: String, maxlength: 100 },
    content: { type: String },
    meta: { type: Object, default: {} },
    status: { type: String, default: 'Active', enum: ['Paused', 'Pending', 'Active', 'Archived'] },
    applicationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Application',
      required: true,
    } as any,
    ownerId: { type: Schema.Types.ObjectId, ref: 'Profile', required: true } as any,
    createdById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    editedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    deletedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    createdDate: { type: Date, default: Date.now },
    updatedDate: { type: Date },
    deletedDate: { type: Date },
    type: { type: String, maxlength: 100 },
    replyToId: { type: String },
    parentId: { type: String },
    parent: { type: Schema.Types.ObjectId, ref: 'Message' } as any,
    messages: [{ type: Schema.Types.ObjectId, ref: 'Message' }],
  },
  {
    timestamps: { createdAt: 'createdDate', updatedAt: 'updatedDate' },
    collection: 'Message',
  }
);

Message.index({ deletedDate: 1 });
Message.index({ key: 1 });
Message.index({ name: 1 });
Message.index({ status: 1 });
Message.index({ createdDate: 1, updatedDate: 1 });

export const Offer = new Schema<types.Offer>(
  {
    name: { type: String, maxlength: 100 },
    key: { type: String, maxlength: 100 },
    value: { type: String },
    meta: { type: Object, default: {} },
    status: { type: String, default: 'Active', enum: ['Paused', 'Pending', 'Active', 'Archived'] },
    applicationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Application',
      required: true,
    } as any,
    ownerId: { type: Schema.Types.ObjectId, ref: 'Profile', required: true } as any,
    createdById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    editedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    deletedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    createdDate: { type: Date, default: Date.now },
    updatedDate: { type: Date },
    deletedDate: { type: Date },
  },
  {
    timestamps: { createdAt: 'createdDate', updatedAt: 'updatedDate' },
    collection: 'Offer',
  }
);

Offer.index({ deletedDate: 1 });
Offer.index({ key: 1 });
Offer.index({ name: 1 });
Offer.index({ status: 1 });
Offer.index({ createdDate: 1, updatedDate: 1 });

export const Order = new Schema<types.Order>(
  {
    name: { type: String, maxlength: 100 },
    key: { type: String, maxlength: 100 },
    value: { type: String },
    meta: { type: Object, default: {} },
    status: { type: String, default: 'Active', enum: ['Paused', 'Pending', 'Active', 'Archived'] },
    applicationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Application',
      required: true,
    } as any,
    ownerId: { type: Schema.Types.ObjectId, ref: 'Profile', required: true } as any,
    createdById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    editedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    deletedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    createdDate: { type: Date, default: Date.now },
    updatedDate: { type: Date },
    deletedDate: { type: Date },
  },
  {
    timestamps: { createdAt: 'createdDate', updatedAt: 'updatedDate' },
    collection: 'Order',
  }
);

Order.index({ deletedDate: 1 });
Order.index({ key: 1 });
Order.index({ name: 1 });
Order.index({ status: 1 });
Order.index({ createdDate: 1, updatedDate: 1 });

export const Product = new Schema<types.Product>(
  {
    name: { type: String, required: true, maxlength: 100 },
    key: { type: String, maxlength: 100, required: true },
    shortDescription: { type: String, maxlength: 300 },
    description: { type: String, maxlength: 2000 },
    content: { type: String },
    meta: { type: Object, default: {} },
    status: { type: String, default: 'Active', enum: ['Paused', 'Pending', 'Active', 'Archived'] },
    applicationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Application',
      required: true,
    } as any,
    ownerId: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    createdById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    editedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    deletedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    createdDate: { type: Date, default: Date.now },
    updatedDate: { type: Date },
    deletedDate: { type: Date },
    communityId: { type: Schema.Types.ObjectId, ref: 'Community' } as any,
    type: { type: String, default: 'game', maxlength: 100 },
    releaseDate: { type: Date },
    tags: { type: [String], default: [] },
    projects: [{ type: Schema.Types.ObjectId, ref: 'Project' }],
    leaderboards: [{ type: Schema.Types.ObjectId, ref: 'Leaderboard' }],
    games: [{ type: Schema.Types.ObjectId, ref: '' }],
    productUpdates: [{ type: Schema.Types.ObjectId, ref: 'ProductUpdate' }],
  },
  {
    timestamps: { createdAt: 'createdDate', updatedAt: 'updatedDate' },
    collection: 'Product',
  }
);

Product.index({ deletedDate: 1 });
Product.index({ key: 1 });
Product.index({ name: 1 });
Product.index({ status: 1 });
Product.index({ createdDate: 1, updatedDate: 1 });
Product.index({ tags: 'text' }); // Mongoose does not support GIN index directly, using text index instead

export const Project = new Schema<types.Project>(
  {
    name: { type: String, maxlength: 100 },
    key: { type: String, maxlength: 100 },
    value: { type: String },
    meta: { type: Object, default: {} },
    status: { type: String, default: 'Active', enum: ['Paused', 'Pending', 'Active', 'Archived'] },
    applicationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Application',
      required: true,
    } as any,
    ownerId: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    createdById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    editedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    deletedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    createdDate: { type: Date, default: Date.now },
    updatedDate: { type: Date },
    deletedDate: { type: Date },
    contractStatus: { type: String, default: 'Pending' },
    parentId: { type: Schema.Types.ObjectId, ref: 'Project' } as any,
    realmId: { type: Schema.Types.ObjectId, ref: 'Realm' } as any,
    communityId: { type: Schema.Types.ObjectId, ref: 'Community' } as any,
    productId: { type: Schema.Types.ObjectId, ref: 'Product' } as any,
    ratingId: { type: Schema.Types.ObjectId, ref: 'Rating' } as any,
  },
  {
    timestamps: { createdAt: 'createdDate', updatedAt: 'updatedDate' },
    collection: 'Project',
  }
);

export const Rating = new Schema<types.Rating>(
  {
    name: { type: String, maxlength: 100 },
    key: { type: String, maxlength: 100 },
    value: { type: String },
    meta: { type: Object, default: {} },
    status: { type: String, default: 'Active', enum: ['Paused', 'Pending', 'Active', 'Archived'] },
    applicationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Application',
      required: true,
    } as any,
    ownerId: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    createdById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    editedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    deletedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    createdDate: { type: Date, default: Date.now },
    updatedDate: { type: Date },
    deletedDate: { type: Date },
    // votes: [{ type: Schema.Types.ObjectId, ref: 'Vote' }],
    // projects: [{ type: Schema.Types.ObjectId, ref: 'Project' }],
    // comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
  },
  {
    timestamps: { createdAt: 'createdDate', updatedAt: 'updatedDate' },
    collection: 'Rating',
  }
);

export const Realm = new Schema<types.Realm>(
  {
    name: { type: String, maxlength: 100 },
    key: { type: String, maxlength: 100 },
    value: { type: String },
    meta: { type: Object, default: {} },
    status: { type: String, default: 'Active', enum: ['Paused', 'Pending', 'Active', 'Archived'] },
    applicationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Application',
      required: true,
    } as any,
    ownerId: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    createdById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    editedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    deletedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    createdDate: { type: Date, default: Date.now },
    updatedDate: { type: Date },
    deletedDate: { type: Date },
  },
  {
    timestamps: { createdAt: 'createdDate', updatedAt: 'updatedDate' },
    collection: 'Realm',
  }
);

export const Review = new Schema<types.Review>(
  {
    name: { type: String, maxlength: 100 },
    key: { type: String, maxlength: 100 },
    value: { type: String },
    meta: { type: Object, default: {} },
    status: { type: String, default: 'Active', enum: ['Paused', 'Pending', 'Active', 'Archived'] },
    applicationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Application',
      required: true,
    } as any,
    ownerId: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    createdById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    editedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    deletedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    createdDate: { type: Date, default: Date.now },
    updatedDate: { type: Date },
    deletedDate: { type: Date },
  },
  {
    timestamps: { createdAt: 'createdDate', updatedAt: 'updatedDate' },
    collection: 'Review',
  }
);

export const Role = new Schema<types.Role>(
  {
    name: { type: String, required: true, maxlength: 100 },
    key: { type: String, maxlength: 100 },
    value: { type: String },
    meta: { type: Object, default: {} },
    status: { type: String, default: 'Active', enum: ['Paused', 'Pending', 'Active', 'Archived'] },
    metaverseId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Metaverse',
      required: true,
    } as any,
    ownerId: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    createdById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    editedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    deletedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    createdDate: { type: Date, default: Date.now },
    updatedDate: { type: Date },
    deletedDate: { type: Date },
    rolesOnProfiles: [{ type: Schema.Types.ObjectId, ref: 'RolesOnProfiles' }],
    permissionsOnRoles: [{ type: Schema.Types.ObjectId, ref: 'PermissionsOnRoles' }],
  },
  {
    timestamps: { createdAt: 'createdDate', updatedAt: 'updatedDate' },
    collection: 'Role',
  }
);

export const Server = new Schema<types.Server>(
  {
    name: { type: String, required: true, maxlength: 100 },
    key: { type: String, maxlength: 100 },
    value: { type: String },
    meta: { type: Object, default: {} },
    status: { type: String, default: 'Active', enum: ['Paused', 'Pending', 'Active', 'Archived'] },
    applicationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Application',
      required: true,
    } as any,
    ownerId: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    createdById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    editedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    deletedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    createdDate: { type: Date, default: Date.now },
    updatedDate: { type: Date },
    deletedDate: { type: Date },
  },
  {
    timestamps: { createdAt: 'createdDate', updatedAt: 'updatedDate' },
    collection: 'Server',
  }
);

export const Session = new Schema<types.Session>(
  {
    applicationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Application',
      required: true,
    } as any,
    meta: { type: Object, default: {} },
    expired: { type: Date, required: true },
  },
  {
    collection: 'Session',
  }
);

export const Suggestion = new Schema<types.Suggestion>(
  {
    name: { type: String, maxlength: 100 },
    key: { type: String, maxlength: 100 },
    value: { type: String },
    meta: { type: Object, default: {} },
    status: { type: String, default: 'Active', enum: ['Paused', 'Pending', 'Active', 'Archived'] },
    applicationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Application',
      required: true,
    } as any,
    ownerId: { type: Schema.Types.ObjectId, ref: 'Profile', required: true } as any,
    createdById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    editedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    deletedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    createdDate: { type: Date, default: Date.now },
    updatedDate: { type: Date },
    deletedDate: { type: Date },
  },
  {
    timestamps: { createdAt: 'createdDate', updatedAt: 'updatedDate' },
    collection: 'Suggestion',
  }
);

export const Tag = new Schema<types.Tag>(
  {
    name: { type: String, required: true, maxlength: 100 },
    key: { type: String, maxlength: 100 },
    value: { type: String },
    meta: { type: Object, default: {} },
    status: { type: String, default: 'Active', enum: ['Paused', 'Pending', 'Active', 'Archived'] },
    applicationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Application',
      required: true,
    } as any,
    ownerId: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    createdById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    editedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    deletedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    createdDate: { type: Date, default: Date.now },
    updatedDate: { type: Date },
    deletedDate: { type: Date },
  },
  {
    timestamps: { createdAt: 'createdDate', updatedAt: 'updatedDate' },
    collection: 'Tag',
  }
);

Tag.virtual('parent', {
  ref: 'Node',
  localField: 'parentId',
  foreignField: '_id',
  justOne: true,
});

Tag.statics.released = function (builder) {
  return builder.where('name', 'Released');
};

export const Tournament = new Schema<types.Tournament>(
  {
    name: { type: String, required: true, maxlength: 100 },
    key: { type: String, maxlength: 100 },
    value: { type: String },
    meta: { type: Object, default: {} },
    status: { type: String, default: 'Active', enum: ['Paused', 'Pending', 'Active', 'Archived'] },
    applicationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Application',
      required: true,
    } as any,
    ownerId: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    createdById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    editedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    deletedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    createdDate: { type: Date, default: Date.now },
    updatedDate: { type: Date },
    deletedDate: { type: Date },
  },
  {
    timestamps: { createdAt: 'createdDate', updatedAt: 'updatedDate' },
    collection: 'Tournament',
  }
);

export const Trade = new Schema<types.Trade>(
  {
    name: { type: String, maxlength: 100 },
    key: { type: String, maxlength: 100 },
    content: { type: String },
    meta: { type: Object, default: {} },
    status: { type: String, default: 'Active', enum: ['Paused', 'Pending', 'Active', 'Archived'] },
    applicationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Application',
      required: true,
    } as any,
    chainId: { type: Schema.Types.ObjectId, ref: 'Chain', required: true } as any,
    ownerId: { type: Schema.Types.ObjectId, ref: 'Profile', required: true } as any,
    createdById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    editedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    deletedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    createdDate: { type: Date, default: Date.now },
    updatedDate: { type: Date },
    deletedDate: { type: Date },
    buyerId: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
  },
  {
    timestamps: { createdAt: 'createdDate', updatedAt: 'updatedDate' },
    collection: 'Trade',
  }
);

export const ChainTransaction = new Schema<types.ChainTransaction>(
  {
    name: { type: String, maxlength: 100 },
    key: { type: String, maxlength: 100 },
    value: { type: String },
    meta: { type: Object, default: {} },
    status: { type: String, default: 'Active', enum: ['Paused', 'Pending', 'Active', 'Archived'] },
    applicationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Application',
      required: true,
    } as any,
    chainId: { type: Schema.Types.ObjectId, ref: 'Chain' } as any,
    ownerId: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    createdById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    editedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    deletedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    createdDate: { type: Date, default: Date.now },
    updatedDate: { type: Date },
    deletedDate: { type: Date },
  },
  {
    timestamps: { createdAt: 'createdDate', updatedAt: 'updatedDate' },
    collection: 'ChainTransaction',
  }
);

export const Vote = new Schema<types.Vote>(
  {
    name: { type: String, maxlength: 100 },
    key: { type: String, maxlength: 100 },
    value: { type: String },
    meta: { type: Object, default: {} },
    status: { type: String, default: 'Active', enum: ['Paused', 'Pending', 'Active', 'Archived'] },
    applicationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Application',
      required: true,
    } as any,
    ownerId: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    createdById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    editedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    deletedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    createdDate: { type: Date, default: Date.now },
    updatedDate: { type: Date },
    deletedDate: { type: Date },
    ratingId: { type: Schema.Types.ObjectId, ref: 'Rating' } as any,
  },
  {
    timestamps: { createdAt: 'createdDate', updatedAt: 'updatedDate' },
    collection: 'Vote',
  }
);

export const Payment = new Schema<types.Payment>(
  {
    name: { type: String, maxlength: 100 },
    key: { type: String, maxlength: 100 },
    value: { type: String },
    meta: { type: Object, default: {} },
    status: { type: String, default: 'Active', enum: ['Paused', 'Pending', 'Active', 'Archived'] },
    applicationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Application',
      required: true,
    } as any,
    ownerId: { type: Schema.Types.ObjectId, ref: 'Profile', required: true } as any,
    createdById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    editedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    deletedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    createdDate: { type: Date, default: Date.now },
    updatedDate: { type: Date },
    deletedDate: { type: Date },
  },
  {
    timestamps: { createdAt: 'createdDate', updatedAt: 'updatedDate' },
    collection: 'Payment',
  }
);

export const Referral = new Schema<types.Referral>(
  {
    meta: { type: Object, default: {} },
    status: { type: String, default: 'Active', enum: ['Paused', 'Pending', 'Active', 'Archived'] },
    applicationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Application',
      required: true,
    } as any,
    recipientId: { type: String, required: true },
    senderId: { type: String, required: true },
    createdById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    editedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    deletedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    createdDate: { type: Date, default: Date.now },
    updatedDate: { type: Date },
    deletedDate: { type: Date },
    recipient: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    sender: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
  },
  {
    timestamps: { createdAt: 'createdDate', updatedAt: 'updatedDate' },
    collection: 'Referral',
  }
);

export const Permission = new Schema<types.Permission>(
  {
    name: { type: String, required: true, maxlength: 100 },
    applicationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Application',
      required: true,
    } as any,
    ownerId: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    createdById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    editedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    deletedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    createdDate: { type: Date, default: Date.now },
    updatedDate: { type: Date },
    deletedDate: { type: Date },
    permissionsOnRoles: [{ type: Schema.Types.ObjectId, ref: 'PermissionsOnRoles' }],
  },
  {
    timestamps: { createdAt: 'createdDate', updatedAt: 'updatedDate' },
    collection: 'Permission',
  }
);

export const Stat = new Schema<types.Stat>(
  {
    applicationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Application',
      required: true,
    } as any,
    ownerId: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    createdById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    editedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    deletedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    createdDate: { type: Date, default: Date.now },
    updatedDate: { type: Date },
    deletedDate: { type: Date },
    number: { type: Number, default: 0 },
    meta: { type: Object, default: {} },
  },
  {
    timestamps: { createdAt: 'createdDate', updatedAt: 'updatedDate' },
    collection: 'Stat',
  }
);

export const RecordUpdate = new Schema<types.RecordUpdate>(
  {
    applicationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Application',
      required: true,
    } as any,
    ownerId: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    createdById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    editedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    deletedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    createdDate: { type: Date, default: Date.now },
    updatedDate: { type: Date },
    deletedDate: { type: Date },
    objectType: { type: String, required: true, maxlength: 100 },
    objectId: { type: String, required: true },
    actionType: { type: String, required: true, maxlength: 100 },
    reason: { type: String, required: true, maxlength: 100 },
    meta: { type: Object, default: {} },
    recordUpdatesOnForms: [{ type: Schema.Types.ObjectId, ref: 'RecordUpdatesOnForms' }],
    recordUpdatesOnProfiles: [{ type: Schema.Types.ObjectId, ref: 'RecordUpdatesOnProfiles' }],
  },
  {
    timestamps: { createdAt: 'createdDate', updatedAt: 'updatedDate' },
    collection: 'RecordUpdate',
  }
);

export const Interface = new Schema(
  {
    applicationId: { type: Schema.Types.ObjectId, ref: 'Application', required: true },
    ownerId: { type: Schema.Types.ObjectId, ref: 'Profile', required: true },
    createdById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    editedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    deletedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    createdDate: { type: Date, default: Date.now },
    updatedDate: { type: Date },
    deletedDate: { type: Date },
    ratingId: { type: Schema.Types.ObjectId, ref: 'Rating' } as any,
    key: { type: String, required: true },
    name: { type: String, required: true },
    meta: { type: Object, default: {} },
    status: { type: String, default: 'Active', enum: ['Paused', 'Pending', 'Active', 'Archived'] },
    submissions: [{ type: Schema.Types.ObjectId, ref: 'InterfaceSubmission' }],
    commentsOnInterfaces: [{ type: Schema.Types.ObjectId, ref: 'CommentsOnInterfaces' }],
    recordUpdatesOnInterfaces: [{ type: Schema.Types.ObjectId, ref: 'RecordUpdatesOnInterfaces' }],
  },
  {
    timestamps: { createdAt: 'createdDate', updatedAt: 'updatedDate' },
    collection: 'Interface',
  }
);

export const InterfaceGroup = new Schema(
  {
    name: String,
    key: String,
    meta: { type: Object, default: {} },
    status: { type: String, default: 'Active', enum: ['Paused', 'Pending', 'Active', 'Archived'] },
    createdDate: Date,
    updatedDate: Date,
    deletedDate: Date,
    rolesOnInterfaceGroups: Array,
  },
  {
    collection: 'InterfaceGroup',
    timestamps: { createdAt: 'createdDate', updatedAt: 'updatedDate' },
  }
);

export const InterfaceComponent = new Schema(
  {
    name: String,
    key: String,
    meta: { type: Object, default: {} },
    status: { type: String, default: 'Active', enum: ['Paused', 'Pending', 'Active', 'Archived'] },
    value: Object,
    data: { type: Object, default: {} },
    type: String,
    hasAttachment: Boolean,
    hasValidation: Boolean,
    isDisabled: Boolean,
    isEditable: Boolean,
    isRequired: Boolean,
    createdDate: Date,
    updatedDate: Date,
    deletedDate: Date,
  },
  {
    collection: 'InterfaceComponent',
    timestamps: { createdAt: 'createdDate', updatedAt: 'updatedDate' },
  }
);

export const InterfaceSubmission = new Schema(
  {
    meta: { type: Object, default: {} },
    InterfaceId: { type: String, required: true },
    status: { type: String, default: 'Active', enum: ['Paused', 'Pending', 'Active', 'Archived'] },
    interface: { type: Schema.Types.ObjectId, ref: 'Interface' },
  },
  {
    collection: 'InterfaceSubmission',
  }
);

export const Character = new Schema<types.Character>(
  {
    applicationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Application',
      required: true,
    } as any,
    teamId: { type: Schema.Types.ObjectId, ref: 'Team' } as any,
    ownerId: { type: Schema.Types.ObjectId, ref: 'Profile', required: true } as any,
    ratingId: { type: Schema.Types.ObjectId, ref: 'Rating' } as any,
    classId: { type: Schema.Types.ObjectId, ref: 'CharacterClass' } as any,
    token: { type: String, required: true },
    meta: { type: Object, default: {} },
    status: { type: String, default: 'Active', enum: ['Paused', 'Pending', 'Active', 'Archived'] },
    // charactersOnTeams: [{ type: Schema.Types.ObjectId, ref: 'CharactersOnTeams' }],
    // npcs: [{ type: Schema.Types.ObjectId, ref: 'Npc' }],
    createdById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    editedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    deletedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    createdDate: { type: Date, default: Date.now },
    updatedDate: { type: Date },
    deletedDate: { type: Date },
  },
  {
    timestamps: { createdAt: 'createdDate', updatedAt: 'updatedDate' },
    collection: 'Character',
  }
);

export const Team = new Schema<types.Team>(
  {
    applicationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Application',
      required: true,
    } as any,
    ownerId: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    ratingId: { type: Schema.Types.ObjectId, ref: 'Rating' } as any,
    key: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String },
    meta: { type: Object, default: {} },
    status: { type: String, default: 'Active', enum: ['Paused', 'Pending', 'Active', 'Archived'] },
    createdById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    editedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    deletedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    createdDate: { type: Date, default: Date.now },
    updatedDate: { type: Date },
    deletedDate: { type: Date },
  },
  {
    timestamps: { createdAt: 'createdDate', updatedAt: 'updatedDate' },
    collection: 'Team',
  }
);

export const Npc = new Schema<types.Npc>(
  {
    key: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String },
    applicationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Application',
      required: true,
    } as any,
    ownerId: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    meta: { type: Object, default: {} },
    status: { type: String, default: 'Active', enum: ['Paused', 'Pending', 'Active', 'Archived'] },
    characterRaceId: { type: Schema.Types.ObjectId, ref: 'CharacterRace' } as any,
    characterId: { type: Schema.Types.ObjectId, ref: 'Character' } as any,
    createdById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    editedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    deletedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    createdDate: { type: Date, default: Date.now },
    updatedDate: { type: Date },
    deletedDate: { type: Date },
  },
  {
    timestamps: { createdAt: 'createdDate', updatedAt: 'updatedDate' },
    collection: 'Npc',
  }
);

export const Metaverse = new Schema<types.Metaverse>(
  {
    omniverseId: { type: Schema.Types.ObjectId, ref: 'Omniverse', required: true } as any,
    ownerId: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    ratingId: { type: Schema.Types.ObjectId, ref: 'Rating' } as any,
    key: { type: String, required: true },
    name: { type: String, required: true, default: '' },
    description: { type: String },
    meta: { type: Object, default: {} },
    status: { type: String, default: 'Active', enum: ['Paused', 'Pending', 'Active', 'Archived'] },
    createdById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    editedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    deletedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    createdDate: { type: Date, default: Date.now },
    updatedDate: { type: Date },
    deletedDate: { type: Date },
  },
  {
    timestamps: { createdAt: 'createdDate', updatedAt: 'updatedDate' },
    collection: 'Metaverse',
  }
);

export const Omniverse = new Schema(
  {
    ownerId: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    ratingId: { type: Schema.Types.ObjectId, ref: 'Rating' } as any,
    key: { type: String, required: true },
    name: { type: String, required: true, default: '' },
    description: { type: String },
    meta: { type: Object, default: {} },
    status: { type: String, default: 'Active', enum: ['Paused', 'Pending', 'Active', 'Archived'] },
    createdById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    editedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    deletedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    createdDate: { type: Date, default: Date.now },
    updatedDate: { type: Date },
    deletedDate: { type: Date },
  },
  {
    timestamps: { createdAt: 'createdDate', updatedAt: 'updatedDate' },
    collection: 'Omniverse',
  }
);

export const Skill = new Schema<types.Skill>(
  {
    key: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String },
    applicationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Application',
      required: true,
    } as any,
    ownerId: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    meta: { type: Object, default: {} },
    status: { type: String, default: 'Active', enum: ['Paused', 'Pending', 'Active', 'Archived'] },
    createdById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    editedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    deletedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    createdDate: { type: Date, default: Date.now },
    updatedDate: { type: Date },
    deletedDate: { type: Date },
  },
  {
    timestamps: { createdAt: 'createdDate', updatedAt: 'updatedDate' },
    collection: 'Skill',
  }
);

export const SkillMod = new Schema<types.SkillMod>(
  {
    key: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String },
    applicationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Application',
      required: true,
    } as any,
    ownerId: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    meta: { type: Object, default: {} },
    status: { type: String, default: 'Active', enum: ['Paused', 'Pending', 'Active', 'Archived'] },
    createdById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    editedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    deletedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    createdDate: { type: Date, default: Date.now },
    updatedDate: { type: Date },
    deletedDate: { type: Date },
  },
  {
    timestamps: { createdAt: 'createdDate', updatedAt: 'updatedDate' },
    collection: 'SkillMod',
  }
);

export const SkillClassification = new Schema<types.SkillClassification>(
  {
    key: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String },
    applicationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Application',
      required: true,
    } as any,
    ownerId: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    meta: { type: Object, default: {} },
    status: { type: String, default: 'Active', enum: ['Paused', 'Pending', 'Active', 'Archived'] },
    createdById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    editedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    deletedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    createdDate: { type: Date, default: Date.now },
    updatedDate: { type: Date },
    deletedDate: { type: Date },
  },
  {
    timestamps: { createdAt: 'createdDate', updatedAt: 'updatedDate' },
    collection: 'SkillClassification',
  }
);

export const SkillCondition = new Schema<types.SkillCondition>(
  {
    key: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String },
    applicationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Application',
      required: true,
    } as any,
    ownerId: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    meta: { type: Object, default: {} },
    status: { type: String, default: 'Active', enum: ['Paused', 'Pending', 'Active', 'Archived'] },
    createdById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    editedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    deletedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    createdDate: { type: Date, default: Date.now },
    updatedDate: { type: Date },
    deletedDate: { type: Date },
  },
  {
    timestamps: { createdAt: 'createdDate', updatedAt: 'updatedDate' },
    collection: 'SkillCondition',
  }
);

export const SkillStatusEffect = new Schema<types.SkillStatusEffect>(
  {
    key: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String },
    applicationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Application',
      required: true,
    } as any,
    ownerId: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    meta: { type: Object, default: {} },
    status: { type: String, default: 'Active', enum: ['Paused', 'Pending', 'Active', 'Archived'] },
    createdById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    editedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    deletedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    createdDate: { type: Date, default: Date.now },
    updatedDate: { type: Date },
    deletedDate: { type: Date },
  },
  {
    timestamps: { createdAt: 'createdDate', updatedAt: 'updatedDate' },
    collection: 'SkillStatusEffect',
  }
);

export const SkillTree = new Schema<types.SkillTree>(
  {
    key: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String },
    applicationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Application',
      required: true,
    } as any,
    ownerId: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    meta: { type: Object, default: {} },
    status: { type: String, default: 'Active', enum: ['Paused', 'Pending', 'Active', 'Archived'] },
    createdById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    editedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    deletedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    createdDate: { type: Date, default: Date.now },
    updatedDate: { type: Date },
    deletedDate: { type: Date },
  },
  {
    timestamps: { createdAt: 'createdDate', updatedAt: 'updatedDate' },
    collection: 'SkillTree',
  }
);

export const SkillTreeNode = new Schema<types.SkillTreeNode>(
  {
    key: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String },
    applicationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Application',
      required: true,
    } as any,
    ownerId: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    meta: { type: Object, default: {} },
    status: { type: String, default: 'Active', enum: ['Paused', 'Pending', 'Active', 'Archived'] },
    createdById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    editedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    deletedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    createdDate: { type: Date, default: Date.now },
    updatedDate: { type: Date },
    deletedDate: { type: Date },
  },
  {
    timestamps: { createdAt: 'createdDate', updatedAt: 'updatedDate' },
    collection: 'SkillTreeNode',
  }
);

export const CharacterAbility = new Schema<types.CharacterAbility>(
  {
    key: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String },
    applicationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Application',
      required: true,
    } as any,
    ownerId: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    meta: { type: Object, default: {} },
    status: { type: String, default: 'Active', enum: ['Paused', 'Pending', 'Active', 'Archived'] },
    createdById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    editedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    deletedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    createdDate: { type: Date, default: Date.now },
    updatedDate: { type: Date },
    deletedDate: { type: Date },
  },
  {
    timestamps: { createdAt: 'createdDate', updatedAt: 'updatedDate' },
    collection: 'CharacterAbility',
  }
);

export const CharacterAttribute = new Schema<types.CharacterAttribute>(
  {
    key: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String },
    applicationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Application',
      required: true,
    } as any,
    ownerId: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    meta: { type: Object, default: {} },
    status: { type: String, default: 'Active', enum: ['Paused', 'Pending', 'Active', 'Archived'] },
    createdById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    editedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    deletedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    createdDate: { type: Date, default: Date.now },
    updatedDate: { type: Date },
    deletedDate: { type: Date },
  },
  {
    timestamps: { createdAt: 'createdDate', updatedAt: 'updatedDate' },
    collection: 'CharacterAttribute',
  }
);

export const CharacterType = new Schema<types.CharacterType>(
  {
    key: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String },
    applicationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Application',
      required: true,
    } as any,
    ownerId: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    meta: { type: Object, default: {} },
    status: { type: String, default: 'Active', enum: ['Paused', 'Pending', 'Active', 'Archived'] },
    createdById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    editedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    deletedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    createdDate: { type: Date, default: Date.now },
    updatedDate: { type: Date },
    deletedDate: { type: Date },
  },
  {
    timestamps: { createdAt: 'createdDate', updatedAt: 'updatedDate' },
    collection: 'CharacterType',
  }
);

export const ItemAttribute = new Schema<types.ItemAttribute>(
  {
    key: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String },
    applicationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Application',
      required: true,
    } as any,
    ownerId: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    createdById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    editedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    deletedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    createdDate: { type: Date, default: Date.now },
    updatedDate: { type: Date },
    deletedDate: { type: Date },
    meta: { type: Object, default: {} },
    status: { type: String, default: 'Active', enum: ['Paused', 'Pending', 'Active', 'Archived'] },
  },
  {
    timestamps: { createdAt: 'createdDate', updatedAt: 'updatedDate' },
    collection: 'ItemAttribute',
  }
);

export const ItemMaterial = new Schema<types.ItemMaterial>(
  {
    key: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String },
    applicationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Application',
      required: true,
    } as any,
    ownerId: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    createdById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    editedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    deletedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    createdDate: { type: Date, default: Date.now },
    updatedDate: { type: Date },
    deletedDate: { type: Date },
    meta: { type: Object, default: {} },
    status: { type: String, default: 'Active', enum: ['Paused', 'Pending', 'Active', 'Archived'] },
  },
  {
    timestamps: { createdAt: 'createdDate', updatedAt: 'updatedDate' },
    collection: 'ItemMaterial',
  }
);

export const ItemSet = new Schema<types.ItemSet>(
  {
    key: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String },
    applicationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Application',
      required: true,
    } as any,
    ownerId: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    createdById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    editedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    deletedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    createdDate: { type: Date, default: Date.now },
    updatedDate: { type: Date },
    deletedDate: { type: Date },
    meta: { type: Object, default: {} },
    status: { type: String, default: 'Active', enum: ['Paused', 'Pending', 'Active', 'Archived'] },
  },
  {
    timestamps: { createdAt: 'createdDate', updatedAt: 'updatedDate' },
    collection: 'ItemSet',
  }
);

export const ItemSlot = new Schema<types.ItemSlot>(
  {
    key: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String },
    applicationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Application',
      required: true,
    } as any,
    ownerId: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    createdById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    editedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    deletedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    createdDate: { type: Date, default: Date.now },
    updatedDate: { type: Date },
    deletedDate: { type: Date },
    meta: { type: Object, default: {} },
    status: { type: String, default: 'Active', enum: ['Paused', 'Pending', 'Active', 'Archived'] },
  },
  {
    timestamps: { createdAt: 'createdDate', updatedAt: 'updatedDate' },
    collection: 'ItemSlot',
  }
);

export const ItemRarity = new Schema<types.ItemRarity>(
  {
    key: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String },
    applicationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Application',
      required: true,
    } as any,
    ownerId: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    createdById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    editedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    deletedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    createdDate: { type: Date, default: Date.now },
    updatedDate: { type: Date },
    deletedDate: { type: Date },
    meta: { type: Object, default: {} },
    status: { type: String, default: 'Active', enum: ['Paused', 'Pending', 'Active', 'Archived'] },
  },
  {
    timestamps: { createdAt: 'createdDate', updatedAt: 'updatedDate' },
    collection: 'ItemRarity',
  }
);

export const ItemType = new Schema<types.ItemType>(
  {
    key: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String },
    applicationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Application',
      required: true,
    } as any,
    ownerId: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    createdById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    editedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    deletedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    createdDate: { type: Date, default: Date.now },
    updatedDate: { type: Date },
    deletedDate: { type: Date },
    meta: { type: Object, default: {} },
    status: { type: String, default: 'Active', enum: ['Paused', 'Pending', 'Active', 'Archived'] },
  },
  {
    timestamps: { createdAt: 'createdDate', updatedAt: 'updatedDate' },
    collection: 'ItemType',
  }
);

export const ItemSubType = new Schema<types.ItemSubType>(
  {
    key: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String },
    applicationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Application',
      required: true,
    } as any,
    ownerId: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    createdById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    editedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    deletedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    createdDate: { type: Date, default: Date.now },
    updatedDate: { type: Date },
    deletedDate: { type: Date },
    meta: { type: Object, default: {} },
    status: { type: String, default: 'Active', enum: ['Paused', 'Pending', 'Active', 'Archived'] },
  },
  {
    timestamps: { createdAt: 'createdDate', updatedAt: 'updatedDate' },
    collection: 'ItemSubType',
  }
);

export const ItemSpecificType = new Schema<types.ItemSpecificType>(
  {
    key: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String },
    applicationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Application',
      required: true,
    } as any,
    ownerId: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    createdById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    editedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    deletedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    createdDate: { type: Date, default: Date.now },
    updatedDate: { type: Date },
    deletedDate: { type: Date },
    meta: { type: Object, default: {} },
    status: { type: String, default: 'Active', enum: ['Paused', 'Pending', 'Active', 'Archived'] },
  },
  {
    timestamps: { createdAt: 'createdDate', updatedAt: 'updatedDate' },
    collection: 'ItemSpecificType',
  }
);

export const ItemAffix = new Schema<types.ItemAffix>(
  {
    key: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String },
    applicationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Application',
      required: true,
    } as any,
    ownerId: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    createdById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    editedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    deletedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    createdDate: { type: Date, default: Date.now },
    updatedDate: { type: Date },
    deletedDate: { type: Date },
    meta: { type: Object, default: {} },
    status: { type: String, default: 'Active', enum: ['Paused', 'Pending', 'Active', 'Archived'] },
  },
  {
    timestamps: { createdAt: 'createdDate', updatedAt: 'updatedDate' },
    collection: 'ItemAffix',
  }
);

export const ItemRecipe = new Schema<types.ItemRecipe>(
  {
    key: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String },
    applicationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Application',
      required: true,
    } as any,
    ownerId: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    createdById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    editedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    deletedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    createdDate: { type: Date, default: Date.now },
    updatedDate: { type: Date },
    deletedDate: { type: Date },
    meta: { type: Object, default: {} },
    status: { type: String, default: 'Active', enum: ['Paused', 'Pending', 'Active', 'Archived'] },
  },
  {
    timestamps: { createdAt: 'createdDate', updatedAt: 'updatedDate' },
    collection: 'ItemRecipe',
  }
);

export const ItemSkin = new Schema<types.ItemSkin>(
  {
    key: { type: String, required: true },
    name: { type: String, required: true },
    applicationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Application',
      required: true,
    } as any,
    ownerId: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    createdById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    editedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    deletedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    createdDate: { type: Date, default: Date.now },
    updatedDate: { type: Date },
    deletedDate: { type: Date },
    meta: { type: Object, default: {} },
    status: { type: String, default: 'Active', enum: ['Paused', 'Pending', 'Active', 'Archived'] },
  },
  {
    timestamps: { createdAt: 'createdDate', updatedAt: 'updatedDate' },
    collection: 'ItemSkin',
  }
);

export const Stash = new Schema<types.Stash>(
  {
    key: { type: String, required: true },
    name: { type: String, required: true },
    applicationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Application',
      required: true,
    } as any,
    ownerId: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    createdById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    editedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    deletedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    createdDate: { type: Date, default: Date.now },
    updatedDate: { type: Date },
    deletedDate: { type: Date },
    meta: { type: Object, default: {} },
    status: { type: String, default: 'Active', enum: ['Paused', 'Pending', 'Active', 'Archived'] },
  },
  {
    timestamps: { createdAt: 'createdDate', updatedAt: 'updatedDate' },
    collection: 'Stash',
  }
);

export const Biome = new Schema<types.Biome>(
  {
    key: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String },
    applicationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Application',
      required: true,
    } as any,
    ownerId: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    createdById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    editedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    deletedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    createdDate: { type: Date, default: Date.now },
    updatedDate: { type: Date },
    deletedDate: { type: Date },
    meta: { type: Object, default: {} },
    status: { type: String, default: 'Active', enum: ['Paused', 'Pending', 'Active', 'Archived'] },
  },
  {
    timestamps: { createdAt: 'createdDate', updatedAt: 'updatedDate' },
    collection: 'Biome',
  }
);

export const BiomeFeature = new Schema<types.BiomeFeature>(
  {
    key: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String },
    applicationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Application',
      required: true,
    } as any,
    ownerId: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    createdById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    editedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    deletedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    createdDate: { type: Date, default: Date.now },
    updatedDate: { type: Date },
    deletedDate: { type: Date },
    meta: { type: Object, default: {} },
    status: { type: String, default: 'Active', enum: ['Paused', 'Pending', 'Active', 'Archived'] },
  },
  {
    timestamps: { createdAt: 'createdDate', updatedAt: 'updatedDate' },
    collection: 'BiomeFeature',
  }
);

export const Planet = new Schema<types.Planet>(
  {
    key: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String },
    applicationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Application',
      required: true,
    } as any,
    solarSystemId: { type: Schema.Types.ObjectId, ref: 'SolarSystem' },
    ownerId: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    createdById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    editedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    deletedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    createdDate: { type: Date, default: Date.now },
    updatedDate: { type: Date },
    deletedDate: { type: Date },
    meta: { type: Object, default: {} },
    status: { type: String, default: 'Active', enum: ['Paused', 'Pending', 'Active', 'Archived'] },
  },
  {
    timestamps: { createdAt: 'createdDate', updatedAt: 'updatedDate' },
    collection: 'Planet',
  }
);

export const SolarSystem = new Schema<types.SolarSystem>(
  {
    key: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String },
    applicationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Application',
      required: true,
    } as any,
    galaxyId: { type: Schema.Types.ObjectId, ref: 'Galaxy' },
    ownerId: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    createdById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    editedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    deletedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    createdDate: { type: Date, default: Date.now },
    updatedDate: { type: Date },
    deletedDate: { type: Date },
    meta: { type: Object, default: {} },
    status: { type: String, default: 'Active', enum: ['Paused', 'Pending', 'Active', 'Archived'] },
  },
  {
    timestamps: { createdAt: 'createdDate', updatedAt: 'updatedDate' },
    collection: 'SolarSystem',
  }
);

export const Galaxy = new Schema<types.Galaxy>(
  {
    key: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String },
    applicationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Application',
      required: true,
    } as any,
    universeId: { type: Schema.Types.ObjectId, ref: 'Universe' },
    ownerId: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    createdById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    editedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    deletedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    createdDate: { type: Date, default: Date.now },
    updatedDate: { type: Date },
    deletedDate: { type: Date },
    meta: { type: Object, default: {} },
    status: { type: String, default: 'Active', enum: ['Paused', 'Pending', 'Active', 'Archived'] },
  },
  {
    timestamps: { createdAt: 'createdDate', updatedAt: 'updatedDate' },
    collection: 'Galaxy',
  }
);

export const Star = new Schema<types.Star>(
  {
    key: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String },
    applicationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Application',
      required: true,
    } as any,
    ownerId: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    createdById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    editedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    deletedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    createdDate: { type: Date, default: Date.now },
    updatedDate: { type: Date },
    deletedDate: { type: Date },
    meta: { type: Object, default: {} },
    status: { type: String, default: 'Active', enum: ['Paused', 'Pending', 'Active', 'Archived'] },
  },
  {
    timestamps: { createdAt: 'createdDate', updatedAt: 'updatedDate' },
    collection: 'Star',
  }
);

export const Universe = new Schema<types.Universe>(
  {
    key: { type: String, required: true },
    name: { type: String, required: true },
    applicationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Application',
      required: true,
    } as any,
    ownerId: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    createdById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    editedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    deletedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    createdDate: { type: Date, default: Date.now },
    updatedDate: { type: Date },
    deletedDate: { type: Date },
    meta: { type: Object, default: {} },
    status: { type: String, default: 'Active', enum: ['Paused', 'Pending', 'Active', 'Archived'] },
  },
  {
    timestamps: { createdAt: 'createdDate', updatedAt: 'updatedDate' },
    collection: 'Universe',
  }
);

export const Quest = new Schema<types.Quest>(
  {
    key: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String },
    applicationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Application',
      required: true,
    } as any,
    ownerId: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    createdById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    editedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    deletedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    createdDate: { type: Date, default: Date.now },
    updatedDate: { type: Date },
    deletedDate: { type: Date },
    meta: { type: Object, default: {} },
    status: { type: String, default: 'Active', enum: ['Paused', 'Pending', 'Active', 'Archived'] },
    type: { type: String, default: 'zone' },
  },
  {
    timestamps: { createdAt: 'createdDate', updatedAt: 'updatedDate' },
    collection: 'Quest',
  }
);

export const Area = new Schema<types.Area>(
  {
    key: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String },
    applicationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Application',
      required: true,
    } as any,
    ownerId: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    createdById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    editedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    deletedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    createdDate: { type: Date, default: Date.now },
    updatedDate: { type: Date },
    deletedDate: { type: Date },
    meta: { type: Object, default: {} },
    status: { type: String, default: 'Active', enum: ['Paused', 'Pending', 'Active', 'Archived'] },
    type: { type: String, default: 'zone' },
    landmarks: [{ type: Schema.Types.ObjectId, ref: 'AreaLandmark' }],
  },
  {
    timestamps: { createdAt: 'createdDate', updatedAt: 'updatedDate' },
    collection: 'Area',
  }
);

export const AreaType = new Schema<types.AreaType>(
  {
    key: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String },
    applicationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Application',
      required: true,
    } as any,
    ownerId: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    createdById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    editedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    deletedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    createdDate: { type: Date, default: Date.now },
    updatedDate: { type: Date },
    deletedDate: { type: Date },
    meta: { type: Object, default: {} },
    status: { type: String, default: 'Active', enum: ['Paused', 'Pending', 'Active', 'Archived'] },
  },
  {
    timestamps: { createdAt: 'createdDate', updatedAt: 'updatedDate' },
    collection: 'AreaType',
  }
);

export const AreaLandmark = new Schema<types.AreaLandmark>(
  {
    key: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String },
    areaId: { type: String },
    applicationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Application',
      required: true,
    } as any,
    ownerId: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    createdById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    editedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    deletedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    createdDate: { type: Date, default: Date.now },
    updatedDate: { type: Date },
    deletedDate: { type: Date },
    meta: { type: Object, default: {} },
    status: { type: String, default: 'Active', enum: ['Paused', 'Pending', 'Active', 'Archived'] },
    area: { type: Schema.Types.ObjectId, ref: 'Area' },
  },
  {
    timestamps: { createdAt: 'createdDate', updatedAt: 'updatedDate' },
    collection: 'AreaLandmark',
  }
);

export const Act = new Schema<types.Act>(
  {
    key: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String },
    applicationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Application',
      required: true,
    } as any,
    ownerId: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    createdById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    editedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    deletedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    createdDate: { type: Date, default: Date.now },
    updatedDate: { type: Date },
    deletedDate: { type: Date },
    meta: { type: Object, default: {} },
    status: { type: String, default: 'Active', enum: ['Paused', 'Pending', 'Active', 'Archived'] },
  },
  {
    timestamps: { createdAt: 'createdDate', updatedAt: 'updatedDate' },
    collection: 'Act',
  }
);

export const CharacterClass = new Schema<types.CharacterClass>(
  {
    key: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String },
    applicationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Application',
      required: true,
    } as any,
    ownerId: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    createdById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    editedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    deletedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    createdDate: { type: Date, default: Date.now },
    updatedDate: { type: Date },
    deletedDate: { type: Date },
    meta: { type: Object, default: {} },
    status: { type: String, default: 'Active', enum: ['Paused', 'Pending', 'Active', 'Archived'] },
  },
  {
    timestamps: { createdAt: 'createdDate', updatedAt: 'updatedDate' },
    collection: 'CharacterClass',
  }
);

export const CharacterRace = new Schema<types.CharacterRace>(
  {
    key: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String },
    applicationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Application',
      required: true,
    } as any,
    ownerId: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    createdById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    editedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    deletedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    createdDate: { type: Date, default: Date.now },
    updatedDate: { type: Date },
    deletedDate: { type: Date },
    meta: { type: Object, default: {} },
    status: { type: String, default: 'Active', enum: ['Paused', 'Pending', 'Active', 'Archived'] },
    npcs: [{ type: Schema.Types.ObjectId, ref: 'Npc' }],
  },
  {
    timestamps: { createdAt: 'createdDate', updatedAt: 'updatedDate' },
    collection: 'CharacterRace',
  }
);

export const CharacterGender = new Schema<types.CharacterGender>(
  {
    key: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String },
    applicationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Application',
      required: true,
    } as any,
    ownerId: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    createdById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    editedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    deletedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    createdDate: { type: Date, default: Date.now },
    updatedDate: { type: Date },
    deletedDate: { type: Date },
    meta: { type: Object, default: {} },
    status: { type: String, default: 'Active', enum: ['Paused', 'Pending', 'Active', 'Archived'] },
  },
  {
    timestamps: { createdAt: 'createdDate', updatedAt: 'updatedDate' },
    collection: 'CharacterGender',
  }
);

export const CharacterPersonality = new Schema<types.CharacterPersonality>(
  {
    key: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String },
    applicationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Application',
      required: true,
    } as any,
    ownerId: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    createdById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    editedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    deletedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    createdDate: { type: Date, default: Date.now },
    updatedDate: { type: Date },
    deletedDate: { type: Date },
    meta: { type: Object, default: {} },
    status: { type: String, default: 'Active', enum: ['Paused', 'Pending', 'Active', 'Archived'] },
  },
  {
    timestamps: { createdAt: 'createdDate', updatedAt: 'updatedDate' },
    collection: 'CharacterPersonality',
  }
);

export const CharacterTitle = new Schema<types.CharacterTitle>(
  {
    key: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String },
    applicationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Application',
      required: true,
    } as any,
    ownerId: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    createdById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    editedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    deletedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    createdDate: { type: Date, default: Date.now },
    updatedDate: { type: Date },
    deletedDate: { type: Date },
    meta: { type: Object, default: {} },
    status: { type: String, default: 'Active', enum: ['Paused', 'Pending', 'Active', 'Archived'] },
  },
  {
    timestamps: { createdAt: 'createdDate', updatedAt: 'updatedDate' },
    collection: 'CharacterTitle',
  }
);

export const AreaNameChoice = new Schema<types.AreaNameChoice>(
  {
    key: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String },
    applicationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Application',
      required: true,
    } as any,
    ownerId: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    createdById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    editedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    deletedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    createdDate: { type: Date, default: Date.now },
    updatedDate: { type: Date },
    deletedDate: { type: Date },
    meta: { type: Object, default: {} },
    status: { type: String, default: 'Active', enum: ['Paused', 'Pending', 'Active', 'Archived'] },
  },
  {
    timestamps: { createdAt: 'createdDate', updatedAt: 'updatedDate' },
    collection: 'AreaNameChoice',
  }
);

export const CharacterNameChoice = new Schema<types.CharacterNameChoice>(
  {
    key: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String },
    applicationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Application',
      required: true,
    } as any,
    ownerId: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    createdById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    editedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    deletedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    createdDate: { type: Date, default: Date.now },
    updatedDate: { type: Date },
    deletedDate: { type: Date },
    meta: { type: Object, default: {} },
    status: { type: String, default: 'Active', enum: ['Paused', 'Pending', 'Active', 'Archived'] },
  },
  {
    timestamps: { createdAt: 'createdDate', updatedAt: 'updatedDate' },
    collection: 'CharacterNameChoice',
  }
);

export const CharacterFaction = new Schema<types.CharacterFaction>(
  {
    key: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String },
    applicationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Application',
      required: true,
    } as any,
    ownerId: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    createdById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    editedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    deletedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    createdDate: { type: Date, default: Date.now },
    updatedDate: { type: Date },
    deletedDate: { type: Date },
    meta: { type: Object, default: {} },
    status: { type: String, default: 'Active', enum: ['Paused', 'Pending', 'Active', 'Archived'] },
  },
  {
    timestamps: { createdAt: 'createdDate', updatedAt: 'updatedDate' },
    collection: 'Faction',
  }
);

export const Era = new Schema<types.Era>(
  {
    key: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String },
    applicationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Application',
      required: true,
    } as any,
    ownerId: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    createdById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    editedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    deletedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    createdDate: { type: Date, default: Date.now },
    updatedDate: { type: Date },
    deletedDate: { type: Date },
    meta: { type: Object, default: {} },
    status: { type: String, default: 'Active', enum: ['Paused', 'Pending', 'Active', 'Archived'] },
  },
  {
    timestamps: { createdAt: 'createdDate', updatedAt: 'updatedDate' },
    collection: 'Era',
  }
);

export const Season = new Schema<types.Season>(
  {
    key: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String },
    applicationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Application',
      required: true,
    } as any,
    ownerId: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    createdById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    editedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    deletedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    createdDate: { type: Date, default: Date.now },
    updatedDate: { type: Date },
    deletedDate: { type: Date },
    meta: { type: Object, default: {} },
    status: { type: String, default: 'Active', enum: ['Paused', 'Pending', 'Active', 'Archived'] },
  },
  {
    timestamps: { createdAt: 'createdDate', updatedAt: 'updatedDate' },
    collection: 'Season',
  }
);

export const Lore = new Schema<types.Lore>(
  {
    key: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String },
    gameId: { type: String },
    applicationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Application',
      required: true,
    } as any,
    ownerId: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    createdById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    editedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    deletedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    createdDate: { type: Date, default: Date.now },
    updatedDate: { type: Date },
    deletedDate: { type: Date },
    meta: { type: Object, default: {} },
    status: { type: String, default: 'Active', enum: ['Paused', 'Pending', 'Active', 'Archived'] },
  },
  {
    timestamps: { createdAt: 'createdDate', updatedAt: 'updatedDate' },
    collection: 'Lore',
  }
);

export const Energy = new Schema<types.Energy>(
  {
    key: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String },
    applicationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Application',
      required: true,
    } as any,
    ownerId: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    createdById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    editedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    deletedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    createdDate: { type: Date, default: Date.now },
    updatedDate: { type: Date },
    deletedDate: { type: Date },
    meta: { type: Object, default: {} },
    status: { type: String, default: 'Active', enum: ['Paused', 'Pending', 'Active', 'Archived'] },
  },
  {
    timestamps: { createdAt: 'createdDate', updatedAt: 'updatedDate' },
    collection: 'Energy',
  }
);

export const Guide = new Schema<types.Guide>(
  {
    key: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String },
    content: { type: String },
    gameId: { type: String, required: true },
    applicationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Application',
      required: true,
    } as any,
    ownerId: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    createdById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    editedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    deletedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    createdDate: { type: Date, default: Date.now },
    updatedDate: { type: Date },
    deletedDate: { type: Date },
    meta: { type: Object, default: {} },
    attachments: { type: Schema.Types.Mixed, default: [] },
    status: { type: String, default: 'Active', enum: ['Paused', 'Pending', 'Active', 'Archived'] },
  },
  {
    timestamps: { createdAt: 'createdDate', updatedAt: 'updatedDate' },
    collection: 'Guide',
  }
);

export const Achievement = new Schema<types.Achievement>(
  {
    name: { type: String, required: true, maxlength: 100 },
    key: { type: String, maxlength: 100 },
    description: { type: String, default: null },
    meta: { type: Schema.Types.Mixed },
    status: { type: String, default: 'Active', enum: ['Paused', 'Pending', 'Active', 'Archived'] },
    applicationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Application',
      required: true,
    } as any,
    ownerId: { type: Schema.Types.ObjectId, ref: 'Profile', default: null } as any,
    createdById: { type: Schema.Types.ObjectId, ref: 'Profile', default: null } as any,
    editedById: { type: Schema.Types.ObjectId, ref: 'Profile', default: null } as any,
    deletedById: { type: Schema.Types.ObjectId, ref: 'Profile', default: null } as any,
    createdDate: { type: Date, default: Date.now },
    updatedDate: { type: Date },
    deletedDate: { type: Date },
  },
  {
    timestamps: { createdAt: 'createdDate', updatedAt: 'updatedDate' },
    collection: 'Achievement',
  }
);

export const Game = new Schema<types.Game>(
  {
    key: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String },
    applicationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Application',
      required: true,
    } as any,
    productId: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
    ownerId: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    createdById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    editedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    deletedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    createdDate: { type: Date, default: Date.now },
    updatedDate: { type: Date },
    deletedDate: { type: Date },

    meta: { type: Object, default: {} },
    status: { type: String, default: 'Active', enum: ['Paused', 'Pending', 'Active', 'Archived'] },
  },
  {
    timestamps: { createdAt: 'createdDate', updatedAt: 'updatedDate' },
    collection: 'Game',
  }
);

export const Validator = new Schema<types.Validator>(
  {
    key: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String },
    applicationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Application',
      required: true,
    } as any,
    ownerId: { type: Schema.Types.ObjectId, ref: 'Profile', required: true } as any,
    createdById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    editedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    deletedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    createdDate: { type: Date, default: Date.now },
    updatedDate: { type: Date },
    deletedDate: { type: Date },

    meta: { type: Object, default: {} },
    status: { type: String, default: 'Active', enum: ['Paused', 'Pending', 'Active', 'Archived'] },
  },
  {
    timestamps: { createdAt: 'createdDate', updatedAt: 'updatedDate' },
    collection: 'Validator',
  }
);

export const Poll = new Schema<types.Poll>(
  {
    key: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String },
    applicationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Application',
      required: true,
    } as any,
    ownerId: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    createdById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    editedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    deletedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    createdDate: { type: Date, default: Date.now },
    updatedDate: { type: Date },
    deletedDate: { type: Date },
    meta: { type: Object, default: {} },
    status: { type: String, default: 'Active', enum: ['Paused', 'Pending', 'Active', 'Archived'] },
  },
  {
    timestamps: { createdAt: 'createdDate', updatedAt: 'updatedDate' },
    collection: 'Poll',
  }
);

export const ProductUpdate = new Schema<types.ProductUpdate>(
  {
    key: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String },
    productId: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    ownerId: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    createdById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    editedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    deletedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    createdDate: { type: Date, default: Date.now },
    updatedDate: { type: Date },
    deletedDate: { type: Date },
    meta: { type: Object, default: {} },
    status: { type: String, default: 'Active', enum: ['Paused', 'Pending', 'Active', 'Archived'] },
  },
  {
    timestamps: { createdAt: 'createdDate', updatedAt: 'updatedDate' },
    collection: 'ProductUpdate',
  }
);

export const Raffle = new Schema<types.Raffle>(
  {
    key: { type: String, required: true },
    name: { type: String, required: true },
    content: { type: String },
    applicationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Application',
      required: true,
    } as any,
    ownerId: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    createdById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    editedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    deletedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    createdDate: { type: Date, default: Date.now },
    updatedDate: { type: Date },
    deletedDate: { type: Date },
    meta: { type: Object, default: {} },
    status: { type: String, default: 'Active', enum: ['Paused', 'Pending', 'Active', 'Archived'] },
    rewards: [{ type: Schema.Types.ObjectId, ref: 'RaffleReward' }],
    raffleRequirementId: [{ type: Schema.Types.ObjectId, ref: 'RaffleRequirement' }],
    raffleEntryId: [{ type: Schema.Types.ObjectId, ref: 'RaffleEntry' }],
  },
  {
    timestamps: { createdAt: 'createdDate', updatedAt: 'updatedDate' },
    collection: 'Raffle',
  }
);

export const RaffleRequirement = new Schema<types.RaffleRequirement>(
  {
    amount: { type: Number, required: true },
    raffleRewardId: { type: Schema.Types.ObjectId, ref: 'Raffle' },
    ownerId: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    createdById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    editedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    deletedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    createdDate: { type: Date, default: Date.now },
    updatedDate: { type: Date },
    deletedDate: { type: Date },
    meta: { type: Object, default: {} },
    status: { type: String, default: 'Active', enum: ['Paused', 'Pending', 'Active', 'Archived'] },
    // RaffleRequirementsOnRaffleRewards: [{ type: Schema.Types.ObjectId, ref: 'RaffleRequirementsOnRaffleRewards' }],
  },
  {
    timestamps: { createdAt: 'createdDate', updatedAt: 'updatedDate' },
    collection: 'RaffleRequirement',
  }
);

export const RaffleReward = new Schema<types.RaffleReward>(
  {
    raffleId: { type: Schema.Types.ObjectId, ref: 'Raffle' } as any,
    winnerId: { type: String },
    ownerId: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    createdById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    editedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    deletedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    createdDate: { type: Date, default: Date.now },
    updatedDate: { type: Date },
    deletedDate: { type: Date },
    winner: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    meta: { type: Object, default: {} },
    status: { type: String, default: 'Active', enum: ['Paused', 'Pending', 'Active', 'Archived'] },
    // RaffleRequirementsOnRaffleRewards: [{ type: Schema.Types.ObjectId, ref: 'RaffleRequirementsOnRaffleRewards' }],
    entries: [{ type: Schema.Types.ObjectId, ref: 'RaffleEntry' }],
  },
  {
    timestamps: { createdAt: 'createdDate', updatedAt: 'updatedDate' },
    collection: 'RaffleReward',
  }
);

export const RaffleEntry = new Schema<types.RaffleEntry>(
  {
    amount: { type: Number, required: true },
    raffleRewardId: { type: Schema.Types.ObjectId, ref: 'RaffleReward' },
    ownerId: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    createdById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    editedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    deletedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    createdDate: { type: Date, default: Date.now },
    updatedDate: { type: Date },
    deletedDate: { type: Date },
    meta: { type: Object, default: {} },
    status: { type: String, default: 'Active', enum: ['Paused', 'Pending', 'Active', 'Archived'] },
    raffleId: { type: Schema.Types.ObjectId, ref: 'Raffle' } as any,
  },
  {
    timestamps: { createdAt: 'createdDate', updatedAt: 'updatedDate' },
    collection: 'RaffleEntry',
  }
);

export const Proposal = new Schema<types.Proposal>(
  {
    key: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String },
    content: { type: String },
    metaverseId: { type: Schema.Types.ObjectId, ref: 'Metaverse', required: true } as any,
    ownerId: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    createdById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    editedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    deletedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    createdDate: { type: Date, default: Date.now },
    updatedDate: { type: Date },
    deletedDate: { type: Date },
    meta: { type: Object, default: {} },
    status: { type: String, default: 'Active', enum: ['Paused', 'Pending', 'Active', 'Archived'] },
  },
  {
    timestamps: { createdAt: 'createdDate', updatedAt: 'updatedDate' },
    collection: 'Proposal',
  }
);

export const Company = new Schema<types.Company>(
  {
    key: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String },
    content: { type: String },
    applicationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Application',
      required: true,
    } as any,
    ownerId: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    createdById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    editedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    deletedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    createdDate: { type: Date, default: Date.now },
    updatedDate: { type: Date },
    deletedDate: { type: Date },
    meta: { type: Object, default: {} },
    status: { type: String, default: 'Active', enum: ['Paused', 'Pending', 'Active', 'Archived'] },
    people: [{ type: Schema.Types.ObjectId, ref: 'Person' }],
  },
  {
    timestamps: { createdAt: 'createdDate', updatedAt: 'updatedDate' },
    collection: 'Company',
  }
);

export const Person = new Schema<types.Person>(
  {
    key: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String },
    content: { type: String },
    applicationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Application',
      required: true,
    } as any,
    companyId: { type: Schema.Types.ObjectId, ref: 'Company' },
    ownerId: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    createdById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    editedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    deletedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    createdDate: { type: Date, default: Date.now },
    updatedDate: { type: Date },
    deletedDate: { type: Date },
    meta: { type: Object, default: {} },
    status: { type: String, default: 'Active', enum: ['Paused', 'Pending', 'Active', 'Archived'] },
  },
  {
    timestamps: { createdAt: 'createdDate', updatedAt: 'updatedDate' },
    collection: 'Person',
  }
);

export const ChatGroup = new Schema(
  {
    name: { type: String, required: true, maxlength: 100 }, // Name of the chat channel
    type: { type: String, required: true, enum: ['group', 'private'] }, // Type of chat: group or private
    members: [{ type: Schema.Types.ObjectId, ref: 'User' }], // List of members in the chat channel
    meta: { type: Object, default: {} },
    status: { type: String, default: 'Active', enum: ['Paused', 'Pending', 'Active', 'Archived'] },
    applicationId: { type: Schema.Types.ObjectId, ref: 'Application', required: true },
    ownerId: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    externalId: { type: String },
    externalPlatform: { type: String, enum: ['Telegram', 'Discord'] },
    createdById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    editedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    deletedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    createdDate: { type: Date, default: Date.now },
    updatedDate: { type: Date },
    deletedDate: { type: Date },
  },
  {
    timestamps: { createdAt: 'createdDate', updatedAt: 'updatedDate' },
    collection: 'ChatGroup',
  }
);

export const ChatMessage = new Schema(
  {
    groupId: { type: Schema.Types.ObjectId, ref: 'ChatGroup', required: true }, // Reference to the chat channel
    profileId: { type: Schema.Types.ObjectId, ref: 'Profile', required: true }, // Reference to the user who sent the message
    content: { type: String }, // Message content
    mediaUrl: { type: String }, // URL to media content (image, video, etc.)
    replyToId: { type: Schema.Types.ObjectId, ref: 'ChatMessage' }, // Reference to the message being replied to
    reactions: [
      {
        profileId: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
        reaction: { type: String },
      },
    ], // List of reactions with user references
    meta: { type: Object, default: {} },
    externalId: { type: String },
    externalPlatform: { type: String, enum: ['Telegram', 'Discord'] },
    isSpam: { type: Boolean, default: false }, // Flag to mark message as spam
    tags: { type: Array, default: [] }, // List of tags associated with the message
    summary: { type: String }, // Summary of the message content
    entities: { type: Array, default: [] }, // List of entities extracted from the message content
    status: { type: String, default: 'Active', enum: ['Paused', 'Pending', 'Active', 'Archived', 'Deleted'] }, // Message status
    applicationId: { type: Schema.Types.ObjectId, ref: 'Application', required: true },
    ownerId: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    createdById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    editedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    deletedById: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
    createdDate: { type: Date, default: Date.now },
    updatedDate: { type: Date },
    deletedDate: { type: Date },
    type: { type: String, default: 'text', enum: ['text', 'image', 'video', 'audio', 'file', 'system'] }, // Type of message
  },
  {
    timestamps: { createdAt: 'createdDate', updatedAt: 'updatedDate' },
    collection: 'ChatMessage',
  }
);

// Indexes to optimize queries
ChatMessage.index({ groupId: 1, createdDate: 1 });
ChatMessage.index({ profileId: 1 });
ChatMessage.index({ status: 1 });
ChatMessage.index({ replyToId: 1 });
ChatMessage.index({ type: 1 });
