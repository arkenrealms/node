import { z as zod } from 'zod';
import { initTRPC, inferRouterInputs, inferRouterOutputs } from '@trpc/server';
import { customErrorFormatter, hasRole } from '../../util/rpc';
import type { RouterContext } from '../../types';
import { Video, VideoParticipant, VideoDialogue, VideoTranscript, VideoScene } from './video.schema';

export const z = zod;
export const t = initTRPC.context<RouterContext>().create();
export const router = t.router;
export const procedure = t.procedure;

export const createRouter = () =>
  router({
    // Video endpoints
    getVideo: procedure
      .use(hasRole('guest', t))
      .use(customErrorFormatter(t))
      .input(z.object({ videoId: z.string() }))
      .query(({ input, ctx }) => (ctx.app.service.Video.getVideo as any)(input, ctx)),

    createVideo: procedure
      .use(hasRole('realm', t))
      .use(customErrorFormatter(t))
      .input(Video)
      .mutation(({ input, ctx }) => (ctx.app.service.Video.createVideo as any)(input, ctx)),

    updateVideo: procedure
      .use(hasRole('realm', t))
      .use(customErrorFormatter(t))
      .input(z.object({ videoId: z.string(), data: Video.partial() }))
      .mutation(({ input, ctx }) => (ctx.app.service.Video.updateVideo as any)(input, ctx)),

    getVideoParticipant: procedure
      .use(hasRole('guest', t))
      .use(customErrorFormatter(t))
      .input(z.object({ videoParticipantId: z.string() }))
      .query(({ input, ctx }) => (ctx.app.service.Video.getVideoParticipant as any)(input, ctx)),

    createVideoParticipant: procedure
      .use(hasRole('realm', t))
      .use(customErrorFormatter(t))
      .input(VideoParticipant)
      .mutation(({ input, ctx }) => (ctx.app.service.Video.createVideoParticipant as any)(input, ctx)),

    updateVideoParticipant: procedure
      .use(hasRole('realm', t))
      .use(customErrorFormatter(t))
      .input(z.object({ videoParticipantId: z.string(), data: VideoParticipant.partial() }))
      .mutation(({ input, ctx }) => (ctx.app.service.Video.updateVideoParticipant as any)(input, ctx)),

    getVideoDialogue: procedure
      .use(hasRole('guest', t))
      .use(customErrorFormatter(t))
      .input(z.object({ videoDialogueId: z.string() }))
      .query(({ input, ctx }) => (ctx.app.service.Video.getVideoDialogue as any)(input, ctx)),

    createVideoDialogue: procedure
      .use(hasRole('realm', t))
      .use(customErrorFormatter(t))
      .input(VideoDialogue)
      .mutation(({ input, ctx }) => (ctx.app.service.Video.createVideoDialogue as any)(input, ctx)),

    updateVideoDialogue: procedure
      .use(hasRole('realm', t))
      .use(customErrorFormatter(t))
      .input(z.object({ videoDialogueId: z.string(), data: VideoDialogue.partial() }))
      .mutation(({ input, ctx }) => (ctx.app.service.Video.updateVideoDialogue as any)(input, ctx)),

    getVideoTranscript: procedure
      .use(hasRole('guest', t))
      .use(customErrorFormatter(t))
      .input(z.object({ videoTranscriptId: z.string() }))
      .query(({ input, ctx }) => (ctx.app.service.Video.getVideoTranscript as any)(input, ctx)),

    createVideoTranscript: procedure
      .use(hasRole('realm', t))
      .use(customErrorFormatter(t))
      .input(VideoTranscript)
      .mutation(({ input, ctx }) => (ctx.app.service.Video.createVideoTranscript as any)(input, ctx)),

    updateVideoTranscript: procedure
      .use(hasRole('realm', t))
      .use(customErrorFormatter(t))
      .input(z.object({ videoTranscriptId: z.string(), data: VideoTranscript.partial() }))
      .mutation(({ input, ctx }) => (ctx.app.service.Video.updateVideoTranscript as any)(input, ctx)),

    getVideoScene: procedure
      .use(hasRole('guest', t))
      .use(customErrorFormatter(t))
      .input(z.object({ videoSceneId: z.string() }))
      .query(({ input, ctx }) => (ctx.app.service.Video.getVideoScene as any)(input, ctx)),

    createVideoScene: procedure
      .use(hasRole('realm', t))
      .use(customErrorFormatter(t))
      .input(VideoScene)
      .mutation(({ input, ctx }) => (ctx.app.service.Video.createVideoScene as any)(input, ctx)),

    updateVideoScene: procedure
      .use(hasRole('realm', t))
      .use(customErrorFormatter(t))
      .input(z.object({ videoSceneId: z.string(), data: VideoScene.partial() }))
      .mutation(({ input, ctx }) => (ctx.app.service.Video.updateVideoScene as any)(input, ctx)),
  });

export type Router = ReturnType<typeof createRouter>;
export type RouterInput = inferRouterInputs<Router>;
export type RouterOutput = inferRouterOutputs<Router>;
