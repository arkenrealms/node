import type {
  Video,
  VideoParticipant,
  VideoDialogue,
  VideoTranscript,
  VideoScene,
  RouterContext,
  Router,
  RouterInput,
  RouterOutput,
} from './video.types';
import { getFilter } from '../../util/api';

export class Service {
  async getVideo(input: RouterInput['getVideo'], ctx: RouterContext): Promise<RouterOutput['getVideo']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Video.Service.getVideo', input.query);

    const filter = getFilter(input.query);
    const video = await ctx.app.model.Video.findOne(filter).lean().exec();
    if (!video) throw new Error('Video not found');

    return video as Video;
  }

  async createVideo(input: RouterInput['createVideo'], ctx: RouterContext): Promise<RouterOutput['createVideo']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Video.Service.createVideo', input.data);

    const video = await ctx.app.model.Video.create(input.data);
    return video as Video;
  }

  async updateVideo(input: RouterInput['updateVideo'], ctx: RouterContext): Promise<RouterOutput['updateVideo']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Video.Service.updateVideo', input.query, input.data);

    const filter = getFilter(input.query);
    const updatedVideo = await ctx.app.model.Video.findOneAndUpdate(filter, input.data, { new: true }).lean().exec();
    if (!updatedVideo) throw new Error('Video update failed');

    return updatedVideo as Video;
  }

  async deleteVideo(input: RouterInput['deleteVideo'], ctx: RouterContext): Promise<RouterOutput['deleteVideo']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Video.Service.deleteVideo', input.query);

    const filter = getFilter(input.query);
    const video = await ctx.app.model.Video.findOneAndDelete(filter).lean().exec();
    if (!video) throw new Error('Video not found');

    return video as Video;
  }

  // Similar changes for VideoParticipant, VideoDialogue, VideoTranscript, VideoScene...

  async getVideoParticipant(
    input: RouterInput['getVideoParticipant'],
    ctx: RouterContext
  ): Promise<RouterOutput['getVideoParticipant']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Video.Service.getVideoParticipant', input.query);

    const filter = getFilter(input.query);
    const participant = await ctx.app.model.VideoParticipant.findOne(filter).lean().exec();
    if (!participant) throw new Error('VideoParticipant not found');

    return participant as VideoParticipant;
  }

  async createVideoParticipant(
    input: RouterInput['createVideoParticipant'],
    ctx: RouterContext
  ): Promise<RouterOutput['createVideoParticipant']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Video.Service.createVideoParticipant', input.data);

    const participant = await ctx.app.model.VideoParticipant.create(input.data);
    return participant as VideoParticipant;
  }

  async updateVideoParticipant(
    input: RouterInput['updateVideoParticipant'],
    ctx: RouterContext
  ): Promise<RouterOutput['updateVideoParticipant']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Video.Service.updateVideoParticipant', input.query, input.data);

    const filter = getFilter(input.query);
    const updatedParticipant = await ctx.app.model.VideoParticipant.findOneAndUpdate(filter, input.data, { new: true })
      .lean()
      .exec();
    if (!updatedParticipant) throw new Error('VideoParticipant update failed');

    return updatedParticipant as VideoParticipant;
  }

  async deleteVideoParticipant(
    input: RouterInput['deleteVideoParticipant'],
    ctx: RouterContext
  ): Promise<RouterOutput['deleteVideoParticipant']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Video.Service.deleteVideoParticipant', input.query);

    const filter = getFilter(input.query);
    const participant = await ctx.app.model.VideoParticipant.findOneAndDelete(filter).lean().exec();
    if (!participant) throw new Error('VideoParticipant not found');

    return participant as VideoParticipant;
  }

  async getVideoDialogue(
    input: RouterInput['getVideoDialogue'],
    ctx: RouterContext
  ): Promise<RouterOutput['getVideoDialogue']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Video.Service.getVideoDialogue', input.query);

    const filter = getFilter(input.query);
    const dialogue = await ctx.app.model.VideoDialogue.findOne(filter).lean().exec();
    if (!dialogue) throw new Error('VideoDialogue not found');

    return dialogue as VideoDialogue;
  }

  async createVideoDialogue(
    input: RouterInput['createVideoDialogue'],
    ctx: RouterContext
  ): Promise<RouterOutput['createVideoDialogue']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Video.Service.createVideoDialogue', input.data);

    const dialogue = await ctx.app.model.VideoDialogue.create(input.data);
    return dialogue as VideoDialogue;
  }

  async updateVideoDialogue(
    input: RouterInput['updateVideoDialogue'],
    ctx: RouterContext
  ): Promise<RouterOutput['updateVideoDialogue']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Video.Service.updateVideoDialogue', input.query, input.data);

    const filter = getFilter(input.query);
    const updatedDialogue = await ctx.app.model.VideoDialogue.findOneAndUpdate(filter, input.data, { new: true })
      .lean()
      .exec();
    if (!updatedDialogue) throw new Error('VideoDialogue update failed');

    return updatedDialogue as VideoDialogue;
  }

  async deleteVideoDialogue(
    input: RouterInput['deleteVideoDialogue'],
    ctx: RouterContext
  ): Promise<RouterOutput['deleteVideoDialogue']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Video.Service.deleteVideoDialogue', input.query);

    const filter = getFilter(input.query);
    const dialogue = await ctx.app.model.VideoDialogue.findOneAndDelete(filter).lean().exec();
    if (!dialogue) throw new Error('VideoDialogue not found');

    return dialogue as VideoDialogue;
  }

  async getVideoTranscript(
    input: RouterInput['getVideoTranscript'],
    ctx: RouterContext
  ): Promise<RouterOutput['getVideoTranscript']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Video.Service.getVideoTranscript', input.query);

    const filter = getFilter(input.query);
    const transcript = await ctx.app.model.VideoTranscript.findOne(filter).lean().exec();
    if (!transcript) throw new Error('VideoTranscript not found');

    return transcript as VideoTranscript;
  }

  async createVideoTranscript(
    input: RouterInput['createVideoTranscript'],
    ctx: RouterContext
  ): Promise<RouterOutput['createVideoTranscript']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Video.Service.createVideoTranscript', input.data);

    const transcript = await ctx.app.model.VideoTranscript.create(input.data);
    return transcript as VideoTranscript;
  }

  async updateVideoTranscript(
    input: RouterInput['updateVideoTranscript'],
    ctx: RouterContext
  ): Promise<RouterOutput['updateVideoTranscript']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Video.Service.updateVideoTranscript', input.query, input.data);

    const filter = getFilter(input.query);
    const updatedTranscript = await ctx.app.model.VideoTranscript.findOneAndUpdate(filter, input.data, { new: true })
      .lean()
      .exec();
    if (!updatedTranscript) throw new Error('VideoTranscript update failed');

    return updatedTranscript as VideoTranscript;
  }

  async deleteVideoTranscript(
    input: RouterInput['deleteVideoTranscript'],
    ctx: RouterContext
  ): Promise<RouterOutput['deleteVideoTranscript']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Video.Service.deleteVideoTranscript', input.query);

    const filter = getFilter(input.query);
    const transcript = await ctx.app.model.VideoTranscript.findOneAndDelete(filter).lean().exec();
    if (!transcript) throw new Error('VideoTranscript not found');

    return transcript as VideoTranscript;
  }

  async getVideoScene(input: RouterInput['getVideoScene'], ctx: RouterContext): Promise<RouterOutput['getVideoScene']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Video.Service.getVideoScene', input.query);

    const filter = getFilter(input.query);
    const scene = await ctx.app.model.VideoScene.findOne(filter).lean().exec();
    if (!scene) throw new Error('VideoScene not found');

    return scene as VideoScene;
  }

  async createVideoScene(
    input: RouterInput['createVideoScene'],
    ctx: RouterContext
  ): Promise<RouterOutput['createVideoScene']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Video.Service.createVideoScene', input.data);

    const scene = await ctx.app.model.VideoScene.create(input.data);
    return scene as VideoScene;
  }

  async updateVideoScene(
    input: RouterInput['updateVideoScene'],
    ctx: RouterContext
  ): Promise<RouterOutput['updateVideoScene']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Video.Service.updateVideoScene', input.query, input.data);

    const filter = getFilter(input.query);
    const updatedScene = await ctx.app.model.VideoScene.findOneAndUpdate(filter, input.data, { new: true })
      .lean()
      .exec();
    if (!updatedScene) throw new Error('VideoScene update failed');

    return updatedScene as VideoScene;
  }

  async deleteVideoScene(
    input: RouterInput['deleteVideoScene'],
    ctx: RouterContext
  ): Promise<RouterOutput['deleteVideoScene']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Video.Service.deleteVideoScene', input.query);

    const filter = getFilter(input.query);
    const scene = await ctx.app.model.VideoScene.findOneAndDelete(filter).lean().exec();
    if (!scene) throw new Error('VideoScene not found');

    return scene as VideoScene;
  }
}
