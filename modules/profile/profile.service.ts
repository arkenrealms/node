import type { Profile, RouterContext, Router, RouterInput, RouterOutput } from './profile.types';

export class Service {
  async getProfile(input: RouterInput['getProfile'], ctx: RouterContext): Promise<RouterOutput['getProfile']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Profile.Service.getProfile', input.userId);

    const profile = await ctx.app.model.Profile.findOne({ userId: input.userId }).lean().exec();
    if (!profile) throw new Error('Profile not found');

    return profile as Profile;
  }

  async createProfile(input: RouterInput['createProfile'], ctx: RouterContext): Promise<RouterOutput['createProfile']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Profile.Service.createProfile', input);

    const profile = await ctx.app.model.Profile.create(input);
    return profile as Profile;
  }

  async updateProfile(input: RouterInput['updateProfile'], ctx: RouterContext): Promise<RouterOutput['updateProfile']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Profile.Service.updateProfile', input.userId, input.data);

    const updatedProfile = await ctx.app.model.Profile.findOneAndUpdate({ userId: input.userId }, input.data, {
      new: true,
    })
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
    console.log('Profile.Service.getProfileStats', input.userId);

    const profile = await ctx.app.model.Profile.findOne({ userId: input.userId }).lean().exec();
    if (!profile) throw new Error('Profile not found');

    return profile.stats;
  }

  async updateProfileSettings(
    input: RouterInput['updateProfileSettings'],
    ctx: RouterContext
  ): Promise<RouterOutput['updateProfileSettings']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Profile.Service.updateProfileSettings', input.userId, input.settings);

    const updatedProfile = await ctx.app.model.Profile.findOneAndUpdate(
      { userId: input.userId },
      { settings: input.settings },
      { new: true }
    )
      .lean()
      .exec();
    if (!updatedProfile) throw new Error('Profile settings update failed');

    return updatedProfile.settings;
  }
}
