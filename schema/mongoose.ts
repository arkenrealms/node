import mongoose, {
  Schema,
  SchemaDefinition,
  SchemaOptions,
  SchemaTypeOptions,
  SchemaTypes,
  Document,
  Query,
  IndexOptions,
  SchemaDefinitionProperty,
} from 'mongoose';
import { Mixed, ObjectIdSchemaDefinition } from 'mongoose'; // Mixed type
import type { AnyArray } from 'mongoose'; // AnyArray utility type
import { StringSchemaDefinition } from 'mongoose';
import pluralize from 'pluralize';
import * as types from './types';
import { toCamelCase } from '../util/string';

const CommonFields = {
  key: { type: String, minlength: 2, maxlength: 200, trim: true },
  name: { type: String },
  description: { type: String },
  status: {
    type: String,
    default: 'Active',
    enum: ['Paused', 'Pending', 'Active', 'Archived'],
  },
  data: { type: Object, default: {} },
  meta: { type: Object, default: {} },
  createdById: { type: Schema.Types.ObjectId, ref: 'Profile' },
  editedById: { type: Schema.Types.ObjectId, ref: 'Profile' },
  deletedById: { type: Schema.Types.ObjectId, ref: 'Profile' },
  createdDate: { type: Date, default: Date.now },
  updatedDate: { type: Date },
  deletedDate: { type: Date },
};

const EntityFields = {
  applicationId: { type: Schema.Types.ObjectId, ref: 'Application', required: true },
  ownerId: { type: Schema.Types.ObjectId, ref: 'Profile' },
};

type PreHookMethod = keyof mongoose.Query<any, any> | 'save' | 'validate';

interface CustomSchemaOptions extends SchemaOptions {
  extend?: 'EntityFields' | 'CommonFields';
  indexes?: { [field: string]: any }[];
  virtuals?: {
    name: string;
    options?: { ref?: string; localField?: string; foreignField?: string; justOne?: boolean; through?: any };
  }[];
  pre?: { method: PreHookMethod | RegExp; handler: (this: Document, next: any) => void }[];
}

function createSchema<T>(
  name: string,
  customFields: SchemaDefinition<T> = {} as SchemaDefinition<T>,
  options: CustomSchemaOptions = {}
): Schema<T & typeof CommonFields & (typeof EntityFields | {})> {
  const extend = options.extend || 'EntityFields';
  const collectionName = options.collection || name;

  let schema: Schema<T & typeof CommonFields & (typeof EntityFields | {})>;

  if (extend === 'EntityFields') {
    schema = new Schema<T & typeof CommonFields & typeof EntityFields>(
      {
        ...CommonFields,
        ...EntityFields,
        ...customFields,
      } as SchemaDefinition<T & typeof CommonFields & typeof EntityFields>,
      {
        timestamps: { createdAt: 'createdDate', updatedAt: 'updatedDate' },
        collection: collectionName,
      }
    );
  } else {
    schema = new Schema<T & typeof CommonFields>(
      {
        ...CommonFields,
        ...customFields,
      } as SchemaDefinition<T & typeof CommonFields>,
      {
        timestamps: { createdAt: 'createdDate', updatedAt: 'updatedDate' },
        collection: collectionName,
      }
    );
  }

  // Apply indexes
  if (options.indexes) {
    options.indexes.forEach((index) => schema.index(index));
  } else {
    schema.index({ key: 1 });
    schema.index({ name: 1 });
    schema.index({ status: 1 });

    if (extend === 'EntityFields') {
      schema.index({ applicationId: 1, key: 1 }, { unique: true } as IndexOptions);
    }
  }

  // Apply virtuals
  if (options.virtuals) {
    options.virtuals.forEach((virtual) => {
      const ref =
        virtual.options?.ref || pluralize.singular(virtual.name.charAt(0).toUpperCase() + virtual.name.slice(1));
      const localField = virtual.options?.localField || '_id';
      const foreignField = virtual.options?.foreignField || `${toCamelCase(name)}Id`; // Default foreignField
      const justOne =
        virtual.options?.justOne !== undefined ? virtual.options.justOne : !pluralize.isPlural(virtual.name);

      schema.virtual(virtual.name, {
        ref,
        localField,
        foreignField,
        justOne,
        ...virtual.options,
      });
    });
  }

  // Apply pre middleware
  if (options.pre) {
    options.pre.forEach((preHook) => {
      schema.pre(preHook.method as any, preHook.handler); // Casting to 'any' for compatibility with Mongoose types
    });
  }

  return schema;
}

export const Omniverse = createSchema<types.Omniverse>('Omniverse', {}, { extend: 'CommonFields' });

export const Metaverse = createSchema<types.Metaverse>(
  'Metaverse',
  {
    omniverseId: { type: Schema.Types.ObjectId, ref: 'Omniverse', required: true } as any,
  },
  { extend: 'CommonFields' }
);

export const Account = createSchema<types.Account>(
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
    ],
  }
);

export const Profile = createSchema<types.Profile>(
  'Profile',
  {
    accountId: { type: Schema.Types.ObjectId, ref: 'Account', required: true } as any,
    points: { type: Number },
    coins: { type: Number },
    telegramUserId: { type: Number },
    interactions: { type: Number, default: 0 } as any,
    activityRating: { type: Number, default: 0 } as any,
    address: { type: String, maxlength: 100 },
    avatar: { type: String, maxlength: 100 },
    roleId: { type: Schema.Types.ObjectId, ref: 'Role' } as any,
    privateKey: { type: String, maxlength: 300 },
    signature: { type: String, maxlength: 200 },
    chainId: { type: Schema.Types.ObjectId, ref: 'Chain' } as any,
  },
  {
    indexes: [
      { applicationId: 1, telegramUserId: 1, unique: true },
      { applicationId: 1, accountId: 1, name: 1, unique: true },
    ],
  }
);

export const Application = createSchema<types.Application>(
  'Application',
  {
    metaverseId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Metaverse',
      required: true,
    } as any,
    name: { type: String, required: true },
    description: { type: String },
  },
  {
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
      { name: 'recordUpdates' },
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

export const Data = createSchema<types.Data>(
  'Data',
  {
    mod: { type: String, required: true },
  },
  {
    indexes: [{ applicationId: 1, mod: 1, key: 1 }],
  }
);

// Video schema
export const Video = createSchema<types.Video>('Video', {
  youtubeId: { type: String, unique: true },
  url: { type: String },
});

export const VideoParticipant = createSchema<types.VideoParticipant>('VideoParticipant', {
  profileId: { type: mongoose.Schema.Types.ObjectId, ref: 'Profile' } as any,
});

export const VideoDialogue = createSchema<types.VideoDialogue>('VideoDialogue', {
  participantId: { type: mongoose.Schema.Types.ObjectId, ref: 'VideoParticipant' } as any,
  text: { type: String, required: true },
  timestamp: { type: String, required: true },
});

export const VideoTranscript = createSchema<types.VideoTranscript>('VideoTranscript', {
  videoId: { type: mongoose.Schema.Types.ObjectId, ref: 'Video', required: true } as any,
  transcript: { type: [mongoose.Schema.Types.Mixed], required: true } as any,
  summary: { type: String, required: true },
});

export const VideoScene = createSchema<types.VideoScene>('VideoScene');

export const Agent = createSchema<types.Agent>('Agent');

export const Memory = createSchema<types.Memory>('Memory');

export const Conversation = createSchema<types.Conversation>('Conversation', {
  userId: { type: String },
  messages: { type: Schema.Types.Mixed, default: [] },
});

export const Log = createSchema<types.Log>(
  'Log',
  {
    key: { type: String, minlength: 2, maxlength: 200, trim: true },
    name: { type: String },
    mod: { type: String, required: true },
    messages: { type: Schema.Types.Mixed, default: [] },
    tags: { type: Schema.Types.Mixed, default: [] },
  },
  {
    indexes: [{ deletedDate: 1 }, { mod: 1 }, { status: 1 }, { createdDate: 1, updatedDate: 1 }],
  }
);

export const Job = createSchema<types.Job>(
  'Job',
  {
    mod: { type: String, required: true },
    startDate: { type: Date },
    expireDate: { type: Date },
  },
  {
    indexes: [{ applicationId: 1, mod: 1, key: 1 }],
  }
);

export const NewsArticle = createSchema<types.NewsArticle>(
  'NewsArticle',
  {
    href: { type: String, required: true },
    source: { type: String, required: true },
  },
  {
    indexes: [{ applicationId: 1, name: 1, source: 1 }],
  }
);

export const Comment = createSchema<types.Comment>('Comment', {
  body: { type: String, required: true },
  entity: { type: Schema.Types.ObjectId, refPath: 'entityModel', required: true } as any,
  entityModel: { type: String, required: true, enum: ['NewsArticle', 'ChainToken'] },
  text: { type: String, required: true },
  ratingId: { type: Schema.Types.ObjectId, ref: 'Rating' } as any,
});

export const Question = createSchema<types.Question>('Question', {
  text: { type: String, required: true },
  answer: { type: String, required: true },
  popularity: { type: Number },
  topics: { type: Schema.Types.Mixed, default: [] },
});

export const Topic = createSchema<types.Topic>('Topic', {
  text: { type: String, required: true },
  popularity: { type: Number },
  tags: { type: Schema.Types.Mixed, default: [] },
});

export const WorldEvent = createSchema<types.WorldEvent>('WorldEvent', {
  text: { type: String, required: true },
  importance: { type: Number },
  tags: { type: Schema.Types.Mixed, default: [] },
});

export const CollectibleCollection = createSchema<types.CollectibleCollection>('CollectibleCollection', {
  hype: { type: Number },
  value: { type: Number },
});

export const CollectibleCardBox = createSchema<types.CollectibleCardBox>('CollectibleCardBox', {
  collectibleCollectionId: { type: mongoose.Schema.Types.ObjectId, ref: 'CollectibleCollection' } as any,
  franchise: { type: String, required: true, trim: true },
});

export const CollectibleCardPack = createSchema<types.CollectibleCardPack>('CollectibleCardPack', {
  collectibleCollectionId: { type: mongoose.Schema.Types.ObjectId, ref: 'CollectibleCollection' } as any,
  franchise: { type: String, required: true, trim: true },
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
});

export const CollectibleCard = createSchema<types.CollectibleCard>('CollectibleCard', {
  collectibleCollectionId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'CollectibleCollection',
  } as any,
  franchise: { type: String, required: true, trim: true },
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
});
// Stock schema
export const Stock = createSchema<types.Stock>('Stock', {
  rank: { type: Number, min: 0 },
  price: { type: Number, min: 0 },
  hourChange: { type: Number },
  dayChange: { type: Number },
  weekChange: { type: Number },
  marketCap: { type: Number, min: 0 },
  volume: { type: Number, min: 0 },
  ticker: { type: String, required: true },
  unusualActivity: { type: Number, min: 0 },
});

// Chain schema
export const Chain = createSchema<types.Chain>(
  'Chain',
  {
    content: { type: String },
    type: { type: String, maxlength: 100 },
    standard: { type: String, maxlength: 100 },
  },
  {
    virtuals: [
      {
        name: 'chainTransactions',
      },
      {
        name: 'chainContracts',
      },
      {
        name: 'chainTokens',
      },
    ],
  }
);

// ChainContract schema
export const ChainContract = createSchema<types.ChainContract>('ChainContract', {
  description: { type: String, required: true },
  content: { type: String, required: true },
  type: { type: String, maxlength: 100 },
  standard: { type: String, maxlength: 100 },
});

// ChainToken schema
export const ChainToken = createSchema<types.ChainToken>(
  'ChainToken',
  {
    rank: { type: Number, min: 0 },
    description: { type: String, required: true },
    content: { type: String },
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
  },
  {
    indexes: [{ applicationId: 1, symbol: 1, unique: true }],
  }
);

// Asset schema
export const Asset = createSchema<types.Asset>(
  'Asset',
  {
    uri: { type: String },
    chainId: { type: Schema.Types.ObjectId, ref: 'Chain' } as any,
    type: { type: String, maxlength: 100 },
    standard: { type: String, maxlength: 100 },
    licenseId: { type: Schema.Types.ObjectId, ref: 'AssetLicense' } as any,
  },
  {
    virtuals: [{ name: 'items' }],
  }
);

// Item schema
export const Item = createSchema<types.Item>('Item', {
  token: { type: String, maxlength: 500 },
  assetId: { type: Schema.Types.ObjectId, ref: 'Asset', required: true } as any,
  chainId: { type: Schema.Types.ObjectId, ref: 'Chain', required: true } as any,
});

// ItemTransmute schema
export const ItemTransmute = createSchema<types.ItemTransmute>(
  'ItemTransmute',
  {
    token: { type: String, maxlength: 500 },
    assetId: { type: Schema.Types.ObjectId, ref: 'Asset', required: true } as any,
    gameItemId: { type: Schema.Types.ObjectId, ref: 'Item', required: true } as any,
    chainId: { type: Schema.Types.ObjectId, ref: 'Chain' } as any,
  },
  {
    virtuals: [
      {
        name: 'item',
      },
      {
        name: 'asset',
      },
    ],
  }
);

// Badge schema
export const Badge = createSchema<types.Badge>('Badge');

// BattlePass schema
export const BattlePass = createSchema<types.BattlePass>('BattlePass');

// Bounty schema
export const Bounty = createSchema<types.Bounty>('Bounty');

// Collection schema
export const Collection = createSchema<types.Collection>('Collection', {
  value: { type: String },
});

// Community schema
export const Community = createSchema<types.Community>('Community', {
  value: { type: String },
  ideas: [{ type: Schema.Types.ObjectId, ref: 'Idea' }],
  products: [{ type: Schema.Types.ObjectId, ref: 'Product' }],
  projects: [{ type: Schema.Types.ObjectId, ref: 'Project' }],
});

// Discussion schema
export const Discussion = createSchema<types.Discussion>('Discussion', {
  content: { type: String },
  parentId: { type: String },
  rootMessageId: { type: String },
  type: { type: String, default: 'Discussion' },
});

// Event schema
export const Event = createSchema<types.Event>('Event', {
  value: { type: String },
});

// Exchange schema
export const Exchange = createSchema<types.Exchange>('Exchange', {
  value: { type: String },
});

// File schema
export const File = createSchema<types.File>('File', {
  value: { type: String },
  storageType: { type: String, maxlength: 100 },
  accessType: { type: String, maxlength: 100 },
});
// Idea schema
export const Idea = createSchema<types.Idea>(
  'Idea',
  {
    value: { type: String },
    type: { type: String, maxlength: 100 },
    communityId: { type: Schema.Types.ObjectId, ref: 'Community' } as any,
  },
  {
    indexes: [{ deletedDate: 1 }, { key: 1 }, { name: 1 }, { status: 1 }],
  }
);

export const Leaderboard = createSchema<types.Leaderboard>(
  'Leaderboard',
  {
    value: { type: String },
    productId: { type: Schema.Types.ObjectId, ref: 'Product' } as any,
  },
  {
    indexes: [{ deletedDate: 1 }, { key: 1 }, { name: 1 }, { status: 1 }, { createdDate: 1 }, { updatedDate: 1 }],
    virtuals: [
      {
        name: 'product',
      },
      {
        name: 'players',
        options: {
          ref: 'Profile',
          localField: '_id',
          foreignField: '_id',
          justOne: false,
          through: {
            from: 'nodes.fromLeaderboardId',
            to: 'nodes.toProfileId',
            extra: ['relationKey'],
          },
        },
      },
    ],
    pre: [
      {
        method: 'save',
        handler(this: any, next: (err?: any) => void) {
          this.relationKey = 'players';
          next();
        },
      },
    ],
  }
);

// AssetLicense schema
export const AssetLicense = createSchema<types.AssetLicense>('AssetLicense', {
  value: { type: String },
  assets: [{ type: Schema.Types.ObjectId, ref: 'Asset' }],
});

// MarketPair schema
export const MarketPair = createSchema<types.MarketPair>('MarketPair', {
  value: { type: String },
});

// Market schema
export const Market = createSchema<types.Market>('Market', {
  value: { type: String },
});

export const Message = createSchema<types.Message>('Message', {
  content: { type: String },
  type: { type: String, maxlength: 100 },
  replyToId: { type: String },
  parentId: { type: String },
  parent: { type: Schema.Types.ObjectId, ref: 'Message' } as any,
  messages: [{ type: Schema.Types.ObjectId, ref: 'Message' } as any],
});

export const Offer = createSchema<types.Offer>('Offer', {
  value: { type: String },
});

export const Order = createSchema<types.Order>('Order', {
  value: { type: String },
});

export const Product = createSchema<types.Product>(
  'Product',
  {
    shortDescription: { type: String, maxlength: 300 },
    description: { type: String, maxlength: 2000 },
    content: { type: String },
    communityId: { type: Schema.Types.ObjectId, ref: 'Community' } as any,
    type: { type: String, default: 'game', maxlength: 100 },
    releaseDate: { type: Date },
    // tags: { type: [String], default: [] }, // Explicitly cast to Schema.Types.String[]
  },
  {
    // indexes: [
    //   { tags: 'text' }, // Mongoose does not support GIN index directly, using text index instead
    // ],
    virtuals: [
      {
        name: 'projects',
        options: {
          ref: 'Project',
          localField: '_id',
          foreignField: 'productId',
        },
      },
      {
        name: 'leaderboards',
        options: {
          ref: 'Leaderboard',
          localField: '_id',
          foreignField: 'productId',
        },
      },
      {
        name: 'games',
        options: {
          ref: 'Game',
          localField: '_id',
          foreignField: 'productId',
        },
      },
      {
        name: 'productUpdates',
        options: {
          ref: 'ProductUpdate',
          localField: '_id',
          foreignField: 'productId',
        },
      },
    ],
  }
);

export const Project = createSchema<types.Project>('Project', {
  value: { type: String },
  contractStatus: { type: String, default: 'Pending' },
  parentId: { type: Schema.Types.ObjectId, ref: 'Project' } as any,
  realmId: { type: Schema.Types.ObjectId, ref: 'Realm' } as any,
  communityId: { type: Schema.Types.ObjectId, ref: 'Community' } as any,
  productId: { type: Schema.Types.ObjectId, ref: 'Product' } as any,
  ratingId: { type: Schema.Types.ObjectId, ref: 'Rating' } as any,
});

export const Rating = createSchema<types.Rating>('Rating', {
  value: { type: String },
  // votes: [{ type: Schema.Types.ObjectId, ref: 'Vote' }],
  // projects: [{ type: Schema.Types.ObjectId, ref: 'Project' }],
  // comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
});

export const Realm = createSchema<types.Realm>('Realm', {
  value: { type: String },
});

export const Review = createSchema<types.Review>('Review', {
  value: { type: String },
});

export const Role = createSchema<types.Role>('Role', {
  value: { type: String },
  rolesOnProfiles: [{ type: Schema.Types.ObjectId, ref: 'RolesOnProfiles' } as any],
  permissionsOnRoles: [{ type: Schema.Types.ObjectId, ref: 'PermissionsOnRoles' } as any],
});

export const Server = createSchema<types.Server>('Server', {
  value: { type: String },
});

export const Session = createSchema<types.Session>('Session', {
  meta: { type: Object, default: {} },
  expired: { type: Date, required: true },
});

export const Suggestion = createSchema<types.Suggestion>('Suggestion', {
  value: { type: String },
});

export const Tournament = createSchema<types.Tournament>('Tournament', {
  value: { type: String },
});

export const Trade = createSchema<types.Trade>('Trade', {
  content: { type: String },
  chainId: { type: Schema.Types.ObjectId, ref: 'Chain', required: true } as any,
  buyerId: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
});

export const ChainTransaction = createSchema<types.ChainTransaction>('ChainTransaction', {
  value: { type: String },
  chainId: { type: Schema.Types.ObjectId, ref: 'Chain' } as any,
});

export const Vote = createSchema<types.Vote>('Vote', {
  value: { type: String },
  ratingId: { type: Schema.Types.ObjectId, ref: 'Rating' } as any,
});

export const Payment = createSchema<types.Payment>('Payment', {
  value: { type: String },
});

export const Referral = createSchema<types.Referral>('Referral', {
  recipientId: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
  senderId: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
});

export const Permission = createSchema<types.Permission>('Permission', {
  permissionsOnRoles: [{ type: Schema.Types.ObjectId, ref: 'PermissionsOnRoles' } as any],
});

export const Stat = createSchema<types.Stat>('Stat', {
  number: { type: Number, default: 0 },
});

export const RecordUpdate = createSchema<types.RecordUpdate>('RecordUpdate', {
  objectType: { type: String, required: true, maxlength: 100 },
  objectId: { type: String, required: true },
  actionType: { type: String, required: true, maxlength: 100 },
  reason: { type: String, required: true, maxlength: 100 },
  recordUpdatesOnForms: [{ type: Schema.Types.ObjectId, ref: 'RecordUpdatesOnForms' } as any],
  recordUpdatesOnProfiles: [{ type: Schema.Types.ObjectId, ref: 'RecordUpdatesOnProfiles' } as any],
});

export const Interface = createSchema<types.Interface>('Interface', {
  key: { type: String, required: true },
  submissions: [{ type: Schema.Types.ObjectId, ref: 'InterfaceSubmission' }],
  commentsOnInterfaces: [{ type: Schema.Types.ObjectId, ref: 'CommentsOnInterfaces' }],
  recordUpdatesOnInterfaces: [{ type: Schema.Types.ObjectId, ref: 'RecordUpdatesOnInterfaces' }],
});

export const InterfaceGroup = createSchema<types.InterfaceGroup>('InterfaceGroup', {
  rolesOnInterfaceGroups: Schema.Types.Mixed,
});

export const InterfaceComponent = createSchema<types.InterfaceComponent>('InterfaceComponent', {
  value: { type: Object, default: {} },
  type: { type: String },
  hasAttachment: { type: Boolean },
  hasValidation: { type: Boolean },
  isDisabled: { type: Boolean },
  isEditable: { type: Boolean },
  isRequired: { type: Boolean },
});

export const InterfaceSubmission = createSchema<types.InterfaceSubmission>('InterfaceSubmission', {
  interfaceId: { type: Schema.Types.ObjectId, ref: 'Interface' } as any,
});

export const Character = createSchema<types.Character>('Character', {
  teamId: { type: Schema.Types.ObjectId, ref: 'Team' } as any,
  ownerId: { type: Schema.Types.ObjectId, ref: 'Profile', required: true } as any,
  ratingId: { type: Schema.Types.ObjectId, ref: 'Rating' } as any,
  classId: { type: Schema.Types.ObjectId, ref: 'CharacterClass' } as any,
  token: { type: String, required: true },
  // charactersOnTeams: [{ type: Schema.Types.ObjectId, ref: 'CharactersOnTeams' }],
  // npcs: [{ type: Schema.Types.ObjectId, ref: 'Npc' }],
});

export const Team = createSchema<types.Team>('Team', {
  ownerId: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
  ratingId: { type: Schema.Types.ObjectId, ref: 'Rating' } as any,
});

export const Npc = createSchema<types.Npc>('Npc', {
  characterRaceId: { type: Schema.Types.ObjectId, ref: 'CharacterRace' } as any,
  characterId: { type: Schema.Types.ObjectId, ref: 'Character' } as any,
});

export const Skill = createSchema<types.Skill>('Skill');

export const SkillMod = createSchema<types.SkillMod>('SkillMod');

export const SkillClassification = createSchema<types.SkillClassification>('SkillClassification');

export const SkillCondition = createSchema<types.SkillCondition>('SkillCondition');

export const SkillStatusEffect = createSchema<types.SkillStatusEffect>('SkillStatusEffect');

export const SkillTree = createSchema<types.SkillTree>('SkillTree');

export const SkillTreeNode = createSchema<types.SkillTreeNode>('SkillTreeNode');

export const CharacterAbility = createSchema<types.CharacterAbility>('CharacterAbility');

export const CharacterAttribute = createSchema<types.CharacterAttribute>('CharacterAttribute');

export const CharacterType = createSchema<types.CharacterType>('CharacterType');

export const ItemAttribute = createSchema<types.ItemAttribute>('ItemAttribute');

export const ItemMaterial = createSchema<types.ItemMaterial>('ItemMaterial');

export const ItemSet = createSchema<types.ItemSet>('ItemSet');

export const ItemSlot = createSchema<types.ItemSlot>('ItemSlot');

export const ItemRarity = createSchema<types.ItemRarity>('ItemRarity');

export const ItemType = createSchema<types.ItemType>('ItemType');

export const ItemSubType = createSchema<types.ItemSubType>('ItemSubType');
export const ItemSpecificType = createSchema<types.ItemSpecificType>('ItemSpecificType');
export const ItemAffix = createSchema<types.ItemAffix>('ItemAffix');
export const ItemRecipe = createSchema<types.ItemRecipe>('ItemRecipe');
export const ItemSkin = createSchema<types.ItemSkin>('ItemSkin');
export const Stash = createSchema<types.Stash>('Stash');
export const Biome = createSchema<types.Biome>('Biome');
export const BiomeFeature = createSchema<types.BiomeFeature>('BiomeFeature');
export const Planet = createSchema<types.Planet>('Planet', {
  solarSystemId: { type: Schema.Types.ObjectId, ref: 'SolarSystem' } as any,
});

export const SolarSystem = createSchema<types.SolarSystem>('SolarSystem', {
  galaxyId: { type: Schema.Types.ObjectId, ref: 'Galaxy' } as any,
});

export const Galaxy = createSchema<types.Galaxy>('Galaxy', {
  universeId: { type: Schema.Types.ObjectId, ref: 'Universe' } as any,
});

export const Star = createSchema<types.Star>('Star');

export const Universe = createSchema<types.Universe>('Universe');

export const Quest = createSchema<types.Quest>('Quest', {
  type: { type: String, default: 'zone' },
});

export const Area = createSchema<types.Area>('Area', {
  type: { type: String, default: 'zone' },
  landmarks: [{ type: Schema.Types.ObjectId, ref: 'AreaLandmark' }],
});

export const AreaType = createSchema<types.AreaType>('AreaType');

export const AreaLandmark = createSchema<types.AreaLandmark>('AreaLandmark', {
  areaId: { type: Schema.Types.ObjectId, ref: 'Area' } as any,
});

export const Act = createSchema<types.Act>('Act');

export const CharacterClass = createSchema<types.CharacterClass>('CharacterClass');

export const CharacterRace = createSchema<types.CharacterRace>('CharacterRace', {
  npcs: [{ type: Schema.Types.ObjectId, ref: 'Npc' }],
});

export const CharacterGender = createSchema<types.CharacterGender>('CharacterGender');

export const CharacterPersonality = createSchema<types.CharacterPersonality>('CharacterPersonality');

export const CharacterTitle = createSchema<types.CharacterTitle>('CharacterTitle');

export const AreaNameChoice = createSchema<types.AreaNameChoice>('AreaNameChoice');

export const CharacterNameChoice = createSchema<types.CharacterNameChoice>('CharacterNameChoice');

export const CharacterFaction = createSchema<types.CharacterFaction>('CharacterFaction');

export const Era = createSchema<types.Era>('Era');

export const Season = createSchema<types.Season>('Season');

export const Lore = createSchema<types.Lore>('Lore', {
  gameId: { type: String },
});

export const Energy = createSchema<types.Energy>('Energy');

export const Guide = createSchema<types.Guide>('Guide', {
  content: { type: String },
  gameId: { type: String, required: true },
  attachments: { type: Schema.Types.Mixed, default: [] },
});

export const Achievement = createSchema<types.Achievement>('Achievement');

export const Game = createSchema<types.Game>('Game', {
  productId: { type: Schema.Types.ObjectId, ref: 'Product', required: true } as any,
});

export const Validator = createSchema<types.Validator>('Validator');

export const Poll = createSchema<types.Poll>('Poll');

export const ProductUpdate = createSchema<types.ProductUpdate>('ProductUpdate', {
  productId: { type: Schema.Types.ObjectId, ref: 'Product' } as any,
});

export const Raffle = createSchema<types.Raffle>(
  'Raffle',
  {
    content: { type: String },
    rewards: [{ type: Schema.Types.ObjectId, ref: 'RaffleReward' }],
    // Removed raffleRequirements and raffleEntries fields as they will be virtuals
  },
  {
    virtuals: [
      {
        name: 'raffleRequirements',
        options: {
          ref: 'RaffleRequirement',
          localField: '_id',
          foreignField: 'raffleId',
        },
      },
      {
        name: 'raffleEntries',
        options: {
          ref: 'RaffleEntry',
          localField: '_id',
          foreignField: 'raffleId',
        },
      },
    ],
  }
);

export const RaffleRequirement = createSchema<types.RaffleRequirement>('RaffleRequirement', {
  amount: { type: Number, required: true },
  raffleRewardId: { type: Schema.Types.ObjectId, ref: 'Raffle' } as any,
});

export const RaffleReward = createSchema<types.RaffleReward>('RaffleReward', {
  raffleId: { type: Schema.Types.ObjectId, ref: 'Raffle' } as any,
  winnerId: { type: Schema.Types.ObjectId, ref: 'Profile' } as any,
  requirements: [{ type: Schema.Types.ObjectId, ref: 'RaffleRequirement' }],
  entries: [{ type: Schema.Types.ObjectId, ref: 'RaffleEntry' }],
});

export const RaffleEntry = createSchema<types.RaffleEntry>('RaffleEntry', {
  amount: { type: Number, required: true },
  raffleRewardId: { type: Schema.Types.ObjectId, ref: 'RaffleReward' } as any,
  raffleId: { type: Schema.Types.ObjectId, ref: 'Raffle' } as any,
});

export const Proposal = createSchema<types.Proposal>('Proposal', {
  content: { type: String },
});

export const Company = createSchema<types.Company>('Company', {
  content: { type: String },
  people: [{ type: Schema.Types.ObjectId, ref: 'Person' }],
});

export const Person = createSchema<types.Person>('Person', {
  content: { type: String },
  companyId: { type: Schema.Types.ObjectId, ref: 'Company' } as any,
});

export const ChatGroup = createSchema<types.ChatGroup>('ChatGroup', {
  name: { type: String, required: true, maxlength: 100 },
  type: { type: String, required: true, enum: ['group', 'private'] },
  members: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  externalId: { type: String },
  externalPlatform: { type: String, enum: ['Telegram', 'Discord'] },
});

export const ChatMessage = createSchema<types.ChatMessage>(
  'ChatMessage',
  {
    groupId: { type: Schema.Types.ObjectId, ref: 'ChatGroup', required: true },
    profileId: { type: Schema.Types.ObjectId, ref: 'Profile', required: true },
    content: { type: String },
    mediaUrl: { type: String },
    replyToId: { type: Schema.Types.ObjectId, ref: 'ChatMessage' },
    reactions: [
      {
        profileId: { type: Schema.Types.ObjectId, ref: 'Profile' },
        reaction: { type: String },
      },
    ],
    externalId: { type: String },
    externalPlatform: { type: String, enum: ['Telegram', 'Discord'] },
    isSpam: { type: Boolean, default: false },
    tags: { type: Schema.Types.Mixed, default: [] },
    summary: { type: String },
    entities: { type: Schema.Types.Mixed, default: [] },
    type: {
      type: String,
      default: 'text',
      enum: ['text', 'image', 'video', 'audio', 'file', 'system'],
    },
  },
  {
    indexes: [{ groupId: 1, createdDate: 1 }, { profileId: 1 }, { status: 1 }, { replyToId: 1 }, { type: 1 }],
  }
);

export const Tag = createSchema<types.Tag>(
  'Tag',
  {
    value: { type: String },
  },
  {
    virtuals: [
      {
        name: 'parent',
        options: {
          ref: 'Node',
          localField: 'parentId',
          foreignField: '_id',
          justOne: true,
        },
      },
    ],
  }
);

Tag.statics.released = function (builder) {
  return this.find({ name: 'Released' });
};

export const Node = new Schema<types.Node>({
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
});
