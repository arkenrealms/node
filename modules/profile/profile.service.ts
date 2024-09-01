import type { Context } from '../../types';
import type { Profile } from './profile.types';

export class Service {
  async getProfile({ profileId }: { profileId?: string }, ctx: Context) {
    console.log('Profile.Service.getProfile', profileId);
    const profile = await ctx.app.model.Profile.findById(profileId).lean().exec();
    if (!profile) {
      throw new Error('Profile not found');
    }
    return profile as Profile;
  }

  async updateProfile({ profileId, data }: { profileId?: string; data?: Partial<Profile> }, ctx: Context) {
    console.log('Profile.Service.updateProfile', profileId, data);
    const updatedProfile = await ctx.app.model.Profile.findByIdAndUpdate(profileId, data, { new: true }).lean().exec();
    if (!updatedProfile) {
      throw new Error('Profile update failed');
    }
    return updatedProfile as Profile;
  }
}
