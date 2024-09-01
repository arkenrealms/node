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

export class Service {
  async getVideo(input: RouterInput['getVideo'], ctx: RouterContext): Promise<RouterOutput['getVideo']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Video.Service.getVideo', input.videoId);

    const video = await ctx.app.model.Video.findById(input.videoId).lean().exec();
    if (!video) throw new Error('Video not found');

    return video as Video;
  }

  async createVideo(input: RouterInput['createVideo'], ctx: RouterContext): Promise<RouterOutput['createVideo']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Video.Service.createVideo', input.youtubeId, input.url);

    const video = await ctx.app.model.Video.create(input);
    return video as Video;
  }

  async updateVideo(input: RouterInput['updateVideo'], ctx: RouterContext): Promise<RouterOutput['updateVideo']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Video.Service.updateVideo', input.videoId, input.data);

    const updatedVideo = await ctx.app.model.Video.findByIdAndUpdate(input.videoId, input.data, { new: true })
      .lean()
      .exec();
    if (!updatedVideo) throw new Error('Video update failed');

    return updatedVideo as Video;
  }

  async getVideoParticipant(
    input: RouterInput['getVideoParticipant'],
    ctx: RouterContext
  ): Promise<RouterOutput['getVideoParticipant']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Video.Service.getVideoParticipant', input.videoParticipantId);

    const participant = await ctx.app.model.VideoParticipant.findById(input.videoParticipantId).lean().exec();
    if (!participant) throw new Error('VideoParticipant not found');

    return participant as VideoParticipant;
  }

  async createVideoParticipant(
    input: RouterInput['createVideoParticipant'],
    ctx: RouterContext
  ): Promise<RouterOutput['createVideoParticipant']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Video.Service.createVideoParticipant', input.videoId, input.profileId);

    const participant = await ctx.app.model.VideoParticipant.create(input);
    return participant as VideoParticipant;
  }

  async updateVideoParticipant(
    input: RouterInput['updateVideoParticipant'],
    ctx: RouterContext
  ): Promise<RouterOutput['updateVideoParticipant']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Video.Service.updateVideoParticipant', input.videoParticipantId, input.data);

    const updatedParticipant = await ctx.app.model.VideoParticipant.findByIdAndUpdate(
      input.videoParticipantId,
      input.data,
      { new: true }
    )
      .lean()
      .exec();
    if (!updatedParticipant) throw new Error('VideoParticipant update failed');

    return updatedParticipant as VideoParticipant;
  }

  async getVideoDialogue(
    input: RouterInput['getVideoDialogue'],
    ctx: RouterContext
  ): Promise<RouterOutput['getVideoDialogue']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Video.Service.getVideoDialogue', input.videoDialogueId);

    const dialogue = await ctx.app.model.VideoDialogue.findById(input.videoDialogueId).lean().exec();
    if (!dialogue) throw new Error('VideoDialogue not found');

    return dialogue as VideoDialogue;
  }

  async createVideoDialogue(
    input: RouterInput['createVideoDialogue'],
    ctx: RouterContext
  ): Promise<RouterOutput['createVideoDialogue']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Video.Service.createVideoDialogue', input.videoId, input.participantId, input.text);

    const dialogue = await ctx.app.model.VideoDialogue.create(input);
    return dialogue as VideoDialogue;
  }

  async updateVideoDialogue(
    input: RouterInput['updateVideoDialogue'],
    ctx: RouterContext
  ): Promise<RouterOutput['updateVideoDialogue']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Video.Service.updateVideoDialogue', input.videoDialogueId, input.data);

    const updatedDialogue = await ctx.app.model.VideoDialogue.findByIdAndUpdate(input.videoDialogueId, input.data, {
      new: true,
    })
      .lean()
      .exec();
    if (!updatedDialogue) throw new Error('VideoDialogue update failed');

    return updatedDialogue as VideoDialogue;
  }

  async getVideoTranscript(
    input: RouterInput['getVideoTranscript'],
    ctx: RouterContext
  ): Promise<RouterOutput['getVideoTranscript']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Video.Service.getVideoTranscript', input.videoTranscriptId);

    const transcript = await ctx.app.model.VideoTranscript.findById(input.videoTranscriptId).lean().exec();
    if (!transcript) throw new Error('VideoTranscript not found');

    return transcript as VideoTranscript;
  }

  async createVideoTranscript(
    input: RouterInput['createVideoTranscript'],
    ctx: RouterContext
  ): Promise<RouterOutput['createVideoTranscript']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Video.Service.createVideoTranscript', input.videoId);

    const transcript = await ctx.app.model.VideoTranscript.create(input);
    return transcript as VideoTranscript;
  }

  async updateVideoTranscript(
    input: RouterInput['updateVideoTranscript'],
    ctx: RouterContext
  ): Promise<RouterOutput['updateVideoTranscript']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Video.Service.updateVideoTranscript', input.videoTranscriptId, input.data);

    const updatedTranscript = await ctx.app.model.VideoTranscript.findByIdAndUpdate(
      input.videoTranscriptId,
      input.data,
      { new: true }
    )
      .lean()
      .exec();
    if (!updatedTranscript) throw new Error('VideoTranscript update failed');

    return updatedTranscript as VideoTranscript;
  }

  async getVideoScene(input: RouterInput['getVideoScene'], ctx: RouterContext): Promise<RouterOutput['getVideoScene']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Video.Service.getVideoScene', input.videoSceneId);

    const scene = await ctx.app.model.VideoScene.findById(input.videoSceneId).lean().exec();
    if (!scene) throw new Error('VideoScene not found');

    return scene as VideoScene;
  }

  async createVideoScene(
    input: RouterInput['createVideoScene'],
    ctx: RouterContext
  ): Promise<RouterOutput['createVideoScene']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Video.Service.createVideoScene', input.videoId, input.startTime);

    const scene = await ctx.app.model.VideoScene.create(input);
    return scene as VideoScene;
  }

  async updateVideoScene(
    input: RouterInput['updateVideoScene'],
    ctx: RouterContext
  ): Promise<RouterOutput['updateVideoScene']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Video.Service.updateVideoScene', input.videoSceneId, input.data);

    const updatedScene = await ctx.app.model.VideoScene.findByIdAndUpdate(input.videoSceneId, input.data, { new: true })
      .lean()
      .exec();
    if (!updatedScene) throw new Error('VideoScene update failed');

    return updatedScene as VideoScene;
  }
}
