import { z as zod } from 'zod';
import { initTRPC } from '@trpc/server';
import type { Context } from '../../types';
import { Service } from './video.service';

export const z = zod;
export const t = initTRPC.context<Context>().create();
export const router = t.router;
export const procedure = t.procedure;

const videoService = new Service();

export const createRouter = () =>
  router({
    getVideo: procedure.input(z.object({ videoId: z.string() })).query(async ({ input, ctx }) => {
      return videoService.getVideo(input, ctx);
    }),

    updateVideo: procedure
      .input(z.object({ videoId: z.string(), data: z.object({}).passthrough() }))
      .mutation(async ({ input, ctx }) => {
        return videoService.updateVideo(input, ctx);
      }),

    addParticipant: procedure
      .input(z.object({ videoId: z.string(), profileId: z.string() }))
      .mutation(async ({ input, ctx }) => {
        return videoService.addParticipant(input, ctx);
      }),

    addDialogue: procedure
      .input(z.object({ videoId: z.string(), participantId: z.string(), text: z.string(), timestamp: z.string() }))
      .mutation(async ({ input, ctx }) => {
        return videoService.addDialogue(input, ctx);
      }),

    getTranscript: procedure.input(z.object({ videoId: z.string() })).query(async ({ input, ctx }) => {
      return videoService.getTranscript(input, ctx);
    }),

    addScene: procedure
      .input(z.object({ videoId: z.string(), sceneData: z.object({}).passthrough() }))
      .mutation(async ({ input, ctx }) => {
        return videoService.addScene(input, ctx);
      }),
  });
