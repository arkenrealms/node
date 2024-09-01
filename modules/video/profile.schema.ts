import { z, ObjectId, Entity } from '../../schema/zod';

export const Video = Entity.merge(
  z.object({
    youtubeId: z.string().nonempty(),
    url: z.string().nonempty(),
  })
);

export const VideoParticipant = Entity.merge(
  z.object({
    profileId: ObjectId,
  })
);

export const VideoDialogue = Entity.merge(
  z.object({
    participantId: ObjectId,
    text: z.string().nonempty(),
    timestamp: z.string().nonempty(),
  })
);

export const VideoTranscript = Entity.merge(
  z.object({
    videoId: ObjectId,
    transcript: z.array(VideoDialogue),
    summary: z.string().optional(),
  })
);

export const VideoScene = Entity.merge(
  z.object({
    // Add any specific fields related to VideoScene if needed
  })
);
