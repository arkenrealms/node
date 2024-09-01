import type { Context } from '../../types';
import type { Raffle, RaffleRequirement, RaffleReward, RaffleEntry } from './raffle.types';

export class Service {
  async getRaffle({ raffleId }: { raffleId: string }, ctx: Context) {
    console.log('Raffle.Service.getRaffle', raffleId);
    const raffle = await ctx.app.model.Raffle.findById(raffleId).lean().exec();
    if (!raffle) {
      throw new Error('Raffle not found');
    }
    return raffle as Raffle;
  }

  async addRaffleRequirement(
    { raffleId, requirementData }: { raffleId: string; requirementData: Partial<RaffleRequirement> },
    ctx: Context
  ) {
    console.log('Raffle.Service.addRaffleRequirement', raffleId, requirementData);
    const requirement = await ctx.app.model.RaffleRequirement.create({ ...requirementData, raffleId });
    return requirement as RaffleRequirement;
  }

  async addRaffleReward(
    { raffleId, rewardData }: { raffleId: string; rewardData: Partial<RaffleReward> },
    ctx: Context
  ) {
    console.log('Raffle.Service.addRaffleReward', raffleId, rewardData);
    const reward = await ctx.app.model.RaffleReward.create({ ...rewardData, raffleId });
    return reward as RaffleReward;
  }

  async addRaffleEntry({ raffleId, entryData }: { raffleId: string; entryData: Partial<RaffleEntry> }, ctx: Context) {
    console.log('Raffle.Service.addRaffleEntry', raffleId, entryData);
    const entry = await ctx.app.model.RaffleEntry.create({ ...entryData, raffleId });
    return entry as RaffleEntry;
  }

  async updateRaffle({ raffleId, data }: { raffleId: string; data: Partial<Raffle> }, ctx: Context) {
    console.log('Raffle.Service.updateRaffle', raffleId, data);
    const updatedRaffle = await ctx.app.model.Raffle.findByIdAndUpdate(raffleId, data, { new: true }).lean().exec();
    if (!updatedRaffle) {
      throw new Error('Raffle update failed');
    }
    return updatedRaffle as Raffle;
  }
}
