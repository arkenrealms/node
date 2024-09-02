import type { Profile, RouterContext, RouterInput, RouterOutput } from './profile.types';
import { getFilter } from '../../util/api';

export class Service {
  async getProfile(input: RouterInput['getProfile'], ctx: RouterContext): Promise<RouterOutput['getProfile']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Profile.Service.getProfile', input.query);

    const filter = getFilter(input.query);
    const profile = await ctx.app.model.Profile.findOne(filter).lean().exec();
    if (!profile) throw new Error('Profile not found');

    return profile as Profile;
  }

  async createProfile(input: RouterInput['createProfile'], ctx: RouterContext): Promise<RouterOutput['createProfile']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Profile.Service.createProfile', input.data);

    const profile = await ctx.app.model.Profile.create(input.data);
    return profile as Profile;
  }

  async updateProfile(input: RouterInput['updateProfile'], ctx: RouterContext): Promise<RouterOutput['updateProfile']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Profile.Service.updateProfile', input.query, input.data);

    const filter = getFilter(input.query);
    const updatedProfile = await ctx.app.model.Profile.findOneAndUpdate(filter, input.data, { new: true })
      .lean()
      .exec();
    if (!updatedProfile) throw new Error('Profile update failed');

    return updatedProfile as Profile;
  }

  async getProfileStats(
    input: RouterInput['getProfileStats'],
    ctx: RouterContext
  ): Promise<RouterOutput['getProfileStats']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Profile.Service.getProfileStats', input.query);

    const filter = getFilter(input.query);
    const profile = await ctx.app.model.Profile.findOne(filter).lean().exec();
    if (!profile) throw new Error('Profile not found');

    return profile.stats;
  }

  async updateProfileSettings(
    input: RouterInput['updateProfileSettings'],
    ctx: RouterContext
  ): Promise<RouterOutput['updateProfileSettings']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Profile.Service.updateProfileSettings', input.query, input.settings);

    const filter = getFilter(input.query);
    const updatedProfile = await ctx.app.model.Profile.findOneAndUpdate(
      filter,
      { settings: input.settings },
      { new: true }
    )
      .lean()
      .exec();
    if (!updatedProfile) throw new Error('Profile settings update failed');

    return updatedProfile.settings;
  }
}
