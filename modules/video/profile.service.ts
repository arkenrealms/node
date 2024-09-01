import type { Context } from '../../types';
import type { Video, VideoParticipant, VideoDialogue, VideoTranscript, VideoScene } from './video.types';

export class Service {
  async getVideo({ videoId }: { videoId: string }, ctx: Context) {
    console.log('Video.Service.getVideo', videoId);
    const video = await ctx.app.model.Video.findById(videoId).lean().exec();
    if (!video) {
      throw new Error('Video not found');
    }
    return video as Video;
  }

  async updateVideo({ videoId, data }: { videoId: string; data: Partial<Video> }, ctx: Context) {
    console.log('Video.Service.updateVideo', videoId, data);
    const updatedVideo = await ctx.app.model.Video.findByIdAndUpdate(videoId, data, { new: true }).lean().exec();
    if (!updatedVideo) {
      throw new Error('Video update failed');
    }
    return updatedVideo as Video;
  }

  async addParticipant({ videoId, profileId }: { videoId: string; profileId: string }, ctx: Context) {
    console.log('Video.Service.addParticipant', videoId, profileId);
    const participant = await ctx.app.model.VideoParticipant.create({ profileId });
    await ctx.app.model.Video.updateOne({ _id: videoId }, { $push: { participants: participant._id } }).exec();
    return participant as VideoParticipant;
  }

  async addDialogue(
    {
      videoId,
      participantId,
      text,
      timestamp,
    }: { videoId: string; participantId: string; text: string; timestamp: string },
    ctx: Context
  ) {
    console.log('Video.Service.addDialogue', videoId, participantId, text, timestamp);
    const dialogue = await ctx.app.model.VideoDialogue.create({ participantId, text, timestamp });
    await ctx.app.model.VideoTranscript.updateOne(
      { videoId },
      { $push: { transcript: dialogue } },
      { upsert: true }
    ).exec();
    return dialogue as VideoDialogue;
  }

  async getTranscript({ videoId }: { videoId: string }, ctx: Context) {
    console.log('Video.Service.getTranscript', videoId);
    const transcript = await ctx.app.model.VideoTranscript.findOne({ videoId }).lean().exec();
    if (!transcript) {
      throw new Error('Transcript not found');
    }
    return transcript as VideoTranscript;
  }

  async addScene({ videoId, sceneData }: { videoId: string; sceneData: Partial<VideoScene> }, ctx: Context) {
    console.log('Video.Service.addScene', videoId, sceneData);
    const scene = await ctx.app.model.VideoScene.create(sceneData);
    await ctx.app.model.Video.updateOne({ _id: videoId }, { $push: { scenes: scene._id } }).exec();
    return scene as VideoScene;
  }
}
