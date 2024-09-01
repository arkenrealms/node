import { z, ObjectId, Entity } from '../../schema/zod';

export const Raffle = Entity.merge(
  z.object({
    content: z.string().nonempty(),
  })
);

export const RaffleRequirement = Entity.merge(
  z.object({
    amount: z.number(),
    raffleRewardId: ObjectId,
  })
);

export const RaffleReward = Entity.merge(
  z.object({
    raffleId: ObjectId,
    winnerId: ObjectId.optional(),
    requirements: z.array(ObjectId).optional(),
  })
);

export const RaffleEntry = Entity.merge(
  z.object({
    amount: z.number(),
    raffleRewardId: ObjectId,
    raffleId: ObjectId,
  })
);
