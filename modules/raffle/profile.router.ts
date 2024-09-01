import { z as zod } from 'zod';
import { initTRPC } from '@trpc/server';
import type { Context } from '../../types';
import { Service } from './raffle.service';

export const z = zod;
export const t = initTRPC.context<Context>().create();
export const router = t.router;
export const procedure = t.procedure;

const raffleService = new Service();

export const createRouter = () =>
  router({
    getRaffle: procedure.input(z.object({ raffleId: z.string() })).query(async ({ input, ctx }) => {
      return raffleService.getRaffle(input, ctx);
    }),

    addRaffleRequirement: procedure
      .input(
        z.object({
          raffleId: z.string(),
          requirementData: z.object({ amount: z.number(), raffleRewardId: z.string() }),
        })
      )
      .mutation(async ({ input, ctx }) => {
        return raffleService.addRaffleRequirement(input, ctx);
      }),

    addRaffleReward: procedure
      .input(
        z.object({
          raffleId: z.string(),
          rewardData: z.object({ winnerId: z.string().optional(), requirements: z.array(z.string()).optional() }),
        })
      )
      .mutation(async ({ input, ctx }) => {
        return raffleService.addRaffleReward(input, ctx);
      }),

    addRaffleEntry: procedure
      .input(
        z.object({ raffleId: z.string(), entryData: z.object({ amount: z.number(), raffleRewardId: z.string() }) })
      )
      .mutation(async ({ input, ctx }) => {
        return raffleService.addRaffleEntry(input, ctx);
      }),

    updateRaffle: procedure
      .input(z.object({ raffleId: z.string(), data: z.object({ content: z.string().optional() }) }))
      .mutation(async ({ input, ctx }) => {
        return raffleService.updateRaffle(input, ctx);
      }),
  });
