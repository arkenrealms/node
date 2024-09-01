import * as mongo from '../../util/mongo';
import type * as Types from './raffle.types';

// Raffle

export const RaffleSchema = mongo.createSchema<Types.RaffleDocument>(
  'Raffle',
  {
    content: { type: String, required: true },
    rewards: [{ type: mongo.Schema.Types.ObjectId, ref: 'RaffleReward' }],
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

export const Raffle = mongo.createModel<Types.RaffleDocument>('Raffle', RaffleSchema);

// RaffleRequirement

export const RaffleRequirementSchema = mongo.createSchema<Types.RaffleRequirementDocument>('RaffleRequirement', {
  amount: { type: Number, required: true },
  raffleRewardId: { type: mongo.Schema.Types.ObjectId, ref: 'RaffleReward' },
});

export const RaffleRequirement = mongo.createModel<Types.RaffleRequirementDocument>(
  'RaffleRequirement',
  RaffleRequirementSchema
);

// RaffleReward

export const RaffleRewardSchema = mongo.createSchema<Types.RaffleRewardDocument>('RaffleReward', {
  raffleId: { type: mongo.Schema.Types.ObjectId, ref: 'Raffle' },
  winnerId: { type: mongo.Schema.Types.ObjectId, ref: 'Profile' },
  requirements: [{ type: mongo.Schema.Types.ObjectId, ref: 'RaffleRequirement' }],
  entries: [{ type: mongo.Schema.Types.ObjectId, ref: 'RaffleEntry' }],
});

export const RaffleReward = mongo.createModel<Types.RaffleRewardDocument>('RaffleReward', RaffleRewardSchema);

// RaffleEntry

export const RaffleEntrySchema = mongo.createSchema<Types.RaffleEntryDocument>('RaffleEntry', {
  amount: { type: Number, required: true },
  raffleRewardId: { type: mongo.Schema.Types.ObjectId, ref: 'RaffleReward' },
  raffleId: { type: mongo.Schema.Types.ObjectId, ref: 'Raffle' },
});

export const RaffleEntry = mongo.createModel<Types.RaffleEntryDocument>('RaffleEntry', RaffleEntrySchema);
