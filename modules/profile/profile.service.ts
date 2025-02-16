import type { Profile, RouterContext, RouterInput, RouterOutput } from './profile.types';
import { ARXError } from '../../util/rpc';
import { getFilter } from '../../util/api';

export class Service {
  async setProfileMode(
    input: RouterInput['setProfileMode'],
    ctx: RouterContext
  ): Promise<RouterOutput['setProfileMode']> {
    if (!input) throw new ARXError('NO_INPUT');
    console.log('Profile.Service.setProfileMode', input);

    ctx.client.profile.mode = input;

    await ctx.client.profile.save();
  }

  async getProfile(input: RouterInput['getProfile'], ctx: RouterContext): Promise<RouterOutput['getProfile']> {
    if (!input) throw new ARXError('NO_INPUT');
    console.log('Profile.Service.getProfile', input);

    const filter = getFilter(input);
    const profile = await ctx.app.model.Profile.findOne(filter).lean().exec();
    if (!profile) throw new ARXError('NOT_FOUND');

    // @ts-ignore
    if (profile?.meta?.market?.trades) delete profile?.meta?.market?.trades;

    return profile as Profile;
  }

  async getProfiles(input: RouterInput['getProfiles'], ctx: RouterContext): Promise<RouterOutput['getProfiles']> {
    if (!input) throw new ARXError('NO_INPUT');
    console.log('Profile.Service.getProfiles', input);

    const filter = getFilter(input);
    // const profiles = await ctx.app.model.Profile.find(filter).populate('character', 'characters').exec();

    const profiles = await ctx.app.model.Profile.aggregate([
      { $limit: input.take || 10 },
      {
        $lookup: {
          from: 'Character',
          localField: 'characterId',
          foreignField: '_id',
          as: 'character',
        },
      },
      { $unwind: '$character' },
      {
        $lookup: {
          from: 'Character',
          localField: '_id',
          foreignField: 'profileId',
          as: 'characters',
        },
      },
      { $unwind: '$characters' },
    ]);

    return profiles as Profile[];
  }

  async createProfile(input: RouterInput['createProfile'], ctx: RouterContext): Promise<RouterOutput['createProfile']> {
    if (!input) throw new ARXError('NO_INPUT');
    console.log('Profile.Service.createProfile', input.data);

    const profile = await ctx.app.model.Profile.create(input.data);
    return profile as Profile;
  }

  async updateProfile(input: RouterInput['updateProfile'], ctx: RouterContext): Promise<RouterOutput['updateProfile']> {
    if (!input) throw new ARXError('NO_INPUT');
    console.log('Profile.Service.updateProfile', input, input.data);

    const filter = getFilter(input);
    const updatedProfile = await ctx.app.model.Profile.findOneAndUpdate(filter, input.data, { new: true })
      .lean()
      .exec();
    if (!updatedProfile) throw new ARXError('INTERNAL_SERVER_ERROR');

    return updatedProfile as Profile;
  }

  async getProfileStats(
    input: RouterInput['getProfileStats'],
    ctx: RouterContext
  ): Promise<RouterOutput['getProfileStats']> {
    if (!input) throw new ARXError('NO_INPUT');
    console.log('Profile.Service.getProfileStats', input);

    const filter = getFilter(input);
    const profile: Profile = await ctx.app.model.Profile.findOne(filter).lean().exec();
    if (!profile) throw new ARXError('NOT_FOUND');

    return profile.stats;
  }

  async updateProfileSettings(
    input: RouterInput['updateProfileSettings'],
    ctx: RouterContext
  ): Promise<RouterOutput['updateProfileSettings']> {
    if (!input) throw new ARXError('NO_INPUT');
    console.log('Profile.Service.updateProfileSettings', input, input.settings);

    const filter = getFilter(input);
    const updatedProfile: Profile = await ctx.app.model.Profile.findOneAndUpdate(
      filter,
      { settings: input.settings },
      { new: true }
    )
      .lean()
      .exec();
    if (!updatedProfile) throw new ARXError('INTERNAL_SERVER_ERROR');

    return updatedProfile.settings;
  }
}
