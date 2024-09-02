import * as mongo from '../../util/mongo';
import type * as Types from './core.types';

export const Omniverse = mongo.createModel<Types.OmniverseDocument>('Omniverse', {}, { extend: 'CommonFields' });

export const Metaverse = mongo.createModel<Types.MetaverseDocument>(
  'Metaverse',
  {
    omniverseId: { type: mongo.Schema.Types.ObjectId, ref: 'Omniverse', required: true } as any,
  },
  { extend: 'CommonFields' }
);

export const Application = mongo.createModel<Types.ApplicationDocument>(
  'Application',
  {
    metaverseId: {
      type: mongo.Schema.Types.ObjectId,
      ref: 'Metaverse',
      required: true,
    },
    ownerId: { type: mongo.Schema.Types.ObjectId, ref: 'Profile' },
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
    ],
  }
);

export const Achievement = mongo.createModel<Types.AchievementDocument>('Achievement', {});

export const Act = mongo.createModel<Types.ActDocument>('Act', {});

export const Agent = mongo.createModel<Types.AgentDocument>('Agent', {});

export const Badge = mongo.createModel<Types.BadgeDocument>('Badge', {
  value: { type: String, required: true },
});

export const Question = mongo.createModel<Types.QuestionDocument>('Question', {
  text: { type: String, required: true },
  answer: { type: String, required: true },
  popularity: { type: Number },
  topics: { type: mongo.Schema.Types.Mixed, default: [] },
});

export const Universe = mongo.createModel<Types.UniverseDocument>('Universe', {});

export const Validator = mongo.createModel<Types.ValidatorDocument>('Validator', {});

export const Vote = mongo.createModel<Types.VoteDocument>('Vote', {
  value: { type: String, required: true },
  ratingId: { type: mongo.Schema.Types.ObjectId, ref: 'Rating' },
});

export const WorldEvent = mongo.createModel<Types.WorldEventDocument>('WorldEvent', {
  text: { type: String, required: true },
  importance: { type: Number },
  tags: { type: mongo.Schema.Types.Mixed },
});

export const Stat = mongo.createModel<Types.StatDocument>('Stat', {
  number: { type: Number, default: 0 },
});
