import * as mongo from '../../util/mongo';
import type * as Types from './core.types';

// Account

export const AccountSchema = mongo.createSchema<Types.AccountDocument>(
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

export const Account = mongo.createModel<Types.AccountDocument>('Account', AccountSchema);

// Achievement

export const AchievementSchema = mongo.createSchema<Types.AchievementDocument>('Achievement', {});

export const Achievement = mongo.createModel<Types.AchievementDocument>('Achievement', AchievementSchema);

// Act

export const ActSchema = mongo.createSchema<Types.ActDocument>('Act', {});

export const Act = mongo.createModel<Types.ActDocument>('Act', ActSchema);

// Agent

export const AgentSchema = mongo.createSchema<Types.AgentDocument>('Agent', {});

export const Agent = mongo.createModel<Types.AgentDocument>('Agent', AgentSchema);

// Application

export const ApplicationSchema = mongo.createSchema<Types.ApplicationDocument>(
  'Application',
  {
    ownerId: { type: mongo.Schema.Types.ObjectId, ref: 'Profile' },
    metaverseId: { type: mongo.Schema.Types.ObjectId, ref: 'Metaverse' },
    name: { type: String, required: true },
    description: { type: String },
  },
  {
    indexes: [{ metaverseId: 1, name: 1, unique: true }],
  }
);

export const Application = mongo.createModel<Types.ApplicationDocument>('Application', ApplicationSchema);

// Badge

export const BadgeSchema = mongo.createSchema<Types.BadgeDocument>('Badge', {
  value: { type: String, required: true },
});

export const Badge = mongo.createModel<Types.BadgeDocument>('Badge', BadgeSchema);

// ... Define the rest of the schemas in a similar pattern

// Universe

export const UniverseSchema = mongo.createSchema<Types.UniverseDocument>('Universe', {});

export const Universe = mongo.createModel<Types.UniverseDocument>('Universe', UniverseSchema);

// Validator

export const ValidatorSchema = mongo.createSchema<Types.ValidatorDocument>('Validator', {});

export const Validator = mongo.createModel<Types.ValidatorDocument>('Validator', ValidatorSchema);

// Vote

export const VoteSchema = mongo.createSchema<Types.VoteDocument>('Vote', {
  value: { type: String, required: true },
  ratingId: { type: mongo.Schema.Types.ObjectId, ref: 'Rating' },
});

export const Vote = mongo.createModel<Types.VoteDocument>('Vote', VoteSchema);

// WorldEvent

export const WorldEventSchema = mongo.createSchema<Types.WorldEventDocument>('WorldEvent', {
  text: { type: String, required: true },
  importance: { type: Number },
  tags: { type: [mongo.Schema.Types.Mixed], default: [] },
});

export const WorldEvent = mongo.createModel<Types.WorldEventDocument>('WorldEvent', WorldEventSchema);

// Stat

export const StatSchema = mongo.createSchema<Types.StatDocument>('Stat', {
  number: { type: Number, default: 0 },
});
export const Stat = mongo.createModel<Types.StatDocument>('Stat', StatSchema);
