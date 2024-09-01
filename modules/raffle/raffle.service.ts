import type {
  Raffle,
  RaffleRequirement,
  RaffleReward,
  RaffleEntry,
  RouterContext,
  Router,
  RouterInput,
  RouterOutput,
} from './raffle.types';

export class Service {
  async getRaffle(input: RouterInput['getRaffle'], ctx: RouterContext): Promise<RouterOutput['getRaffle']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Raffle.Service.getRaffle', input.raffleId);

    const raffle = await ctx.app.model.Raffle.findById(input.raffleId).lean().exec();
    if (!raffle) throw new Error('Raffle not found');

    return raffle as Raffle;
  }

  async createRaffle(input: RouterInput['createRaffle'], ctx: RouterContext): Promise<RouterOutput['createRaffle']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Raffle.Service.createRaffle', input);

    const raffle = await ctx.app.model.Raffle.create(input);
    return raffle as Raffle;
  }

  async updateRaffle(input: RouterInput['updateRaffle'], ctx: RouterContext): Promise<RouterOutput['updateRaffle']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Raffle.Service.updateRaffle', input.raffleId, input.data);

    const updatedRaffle = await ctx.app.model.Raffle.findByIdAndUpdate(input.raffleId, input.data, { new: true })
      .lean()
      .exec();
    if (!updatedRaffle) throw new Error('Raffle update failed');

    return updatedRaffle as Raffle;
  }

  async getRaffleRequirement(
    input: RouterInput['getRaffleRequirement'],
    ctx: RouterContext
  ): Promise<RouterOutput['getRaffleRequirement']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Raffle.Service.getRaffleRequirement', input.raffleRequirementId);

    const raffleRequirement = await ctx.app.model.RaffleRequirement.findById(input.raffleRequirementId).lean().exec();
    if (!raffleRequirement) throw new Error('Raffle Requirement not found');

    return raffleRequirement as RaffleRequirement;
  }

  async createRaffleRequirement(
    input: RouterInput['createRaffleRequirement'],
    ctx: RouterContext
  ): Promise<RouterOutput['createRaffleRequirement']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Raffle.Service.createRaffleRequirement', input);

    const raffleRequirement = await ctx.app.model.RaffleRequirement.create(input);
    return raffleRequirement as RaffleRequirement;
  }

  async updateRaffleRequirement(
    input: RouterInput['updateRaffleRequirement'],
    ctx: RouterContext
  ): Promise<RouterOutput['updateRaffleRequirement']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Raffle.Service.updateRaffleRequirement', input.raffleRequirementId, input.data);

    const updatedRaffleRequirement = await ctx.app.model.RaffleRequirement.findByIdAndUpdate(
      input.raffleRequirementId,
      input.data,
      { new: true }
    )
      .lean()
      .exec();
    if (!updatedRaffleRequirement) throw new Error('Raffle Requirement update failed');

    return updatedRaffleRequirement as RaffleRequirement;
  }

  async getRaffleReward(
    input: RouterInput['getRaffleReward'],
    ctx: RouterContext
  ): Promise<RouterOutput['getRaffleReward']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Raffle.Service.getRaffleReward', input.raffleRewardId);

    const raffleReward = await ctx.app.model.RaffleReward.findById(input.raffleRewardId).lean().exec();
    if (!raffleReward) throw new Error('Raffle Reward not found');

    return raffleReward as RaffleReward;
  }

  async createRaffleReward(
    input: RouterInput['createRaffleReward'],
    ctx: RouterContext
  ): Promise<RouterOutput['createRaffleReward']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Raffle.Service.createRaffleReward', input);

    const raffleReward = await ctx.app.model.RaffleReward.create(input);
    return raffleReward as RaffleReward;
  }

  async updateRaffleReward(
    input: RouterInput['updateRaffleReward'],
    ctx: RouterContext
  ): Promise<RouterOutput['updateRaffleReward']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Raffle.Service.updateRaffleReward', input.raffleRewardId, input.data);

    const updatedRaffleReward = await ctx.app.model.RaffleReward.findByIdAndUpdate(input.raffleRewardId, input.data, {
      new: true,
    })
      .lean()
      .exec();
    if (!updatedRaffleReward) throw new Error('Raffle Reward update failed');

    return updatedRaffleReward as RaffleReward;
  }

  async getRaffleEntry(
    input: RouterInput['getRaffleEntry'],
    ctx: RouterContext
  ): Promise<RouterOutput['getRaffleEntry']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Raffle.Service.getRaffleEntry', input.raffleEntryId);

    const raffleEntry = await ctx.app.model.RaffleEntry.findById(input.raffleEntryId).lean().exec();
    if (!raffleEntry) throw new Error('Raffle Entry not found');

    return raffleEntry as RaffleEntry;
  }

  async createRaffleEntry(
    input: RouterInput['createRaffleEntry'],
    ctx: RouterContext
  ): Promise<RouterOutput['createRaffleEntry']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Raffle.Service.createRaffleEntry', input);

    const raffleEntry = await ctx.app.model.RaffleEntry.create(input);
    return raffleEntry as RaffleEntry;
  }

  async updateRaffleEntry(
    input: RouterInput['updateRaffleEntry'],
    ctx: RouterContext
  ): Promise<RouterOutput['updateRaffleEntry']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Raffle.Service.updateRaffleEntry', input.raffleEntryId, input.data);

    const updatedRaffleEntry = await ctx.app.model.RaffleEntry.findByIdAndUpdate(input.raffleEntryId, input.data, {
      new: true,
    })
      .lean()
      .exec();
    if (!updatedRaffleEntry) throw new Error('Raffle Entry update failed');

    return updatedRaffleEntry as RaffleEntry;
  }
}
