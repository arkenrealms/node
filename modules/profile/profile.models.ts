import * as mongo from '../../util/mongo';
import type * as Types from './profile.types';

export const Profile = mongo.createModel<Types.ProfileDocument>(
  'Profile',
  {
    accountId: { type: mongo.Schema.Types.ObjectId, ref: 'Account', required: true },
    points: { type: Number, default: 0 },
    coins: { type: Number, default: 0 },
    telegramUserId: { type: Number },
    interactions: { type: Number, default: 0 },
    activityRating: { type: Number, default: 0 },
    address: { type: String, maxlength: 100 },
    avatar: { type: String, maxlength: 100 },
    roleId: { type: mongo.Schema.Types.ObjectId, ref: 'Role' },
    privateKey: { type: String, maxlength: 300 },
    signature: { type: String, maxlength: 200 },
    chainId: { type: mongo.Schema.Types.ObjectId, ref: 'Chain' },
  },
  {
    indexes: [
      { applicationId: 1, telegramUserId: 1, unique: true },
      { applicationId: 1, accountId: 1, name: 1, unique: true },
    ],
  }
);
