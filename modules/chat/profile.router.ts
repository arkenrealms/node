import { z as zod } from 'zod';
import { initTRPC } from '@trpc/server';
import type { Context } from '../../types';
import { Service } from './chat.service';

export const z = zod;
export const t = initTRPC.context<Context>().create();
export const router = t.router;
export const procedure = t.procedure;

const chatService = new Service();

export const createRouter = () =>
  router({
    getChatGroup: procedure.input(z.object({ groupId: z.string() })).query(async ({ input, ctx }) => {
      return chatService.getChatGroup(input, ctx);
    }),

    addChatMessage: procedure
      .input(
        z.object({
          groupId: z.string(),
          messageData: z.object({
            profileId: z.string(),
            content: z.string().optional(),
            mediaUrl: z.string().optional(),
            replyToId: z.string().optional(),
            reactions: z.array(z.object({ profileId: z.string(), reaction: z.string() })).optional(),
            externalId: z.string().optional(),
            externalPlatform: z.enum(['Telegram', 'Discord']).optional(),
            isSpam: z.boolean().optional(),
            tags: z.array(z.unknown()).optional(),
            summary: z.string().optional(),
            entities: z.array(z.unknown()).optional(),
            type: z.enum(['text', 'image', 'video', 'audio', 'file', 'system']).optional(),
          }),
        })
      )
      .mutation(async ({ input, ctx }) => {
        return chatService.addChatMessage(input, ctx);
      }),

    updateChatGroup: procedure
      .input(
        z.object({
          groupId: z.string(),
          data: z.object({
            name: z.string().optional(),
            type: z.string().optional(),
            externalId: z.string().optional(),
            externalPlatform: z.string().optional(),
          }),
        })
      )
      .mutation(async ({ input, ctx }) => {
        return chatService.updateChatGroup(input, ctx);
      }),

    updateChatMessage: procedure
      .input(
        z.object({
          messageId: z.string(),
          data: z.object({
            content: z.string().optional(),
            mediaUrl: z.string().optional(),
            isSpam: z.boolean().optional(),
            tags: z.array(z.unknown()).optional(),
            summary: z.string().optional(),
            entities: z.array(z.unknown()).optional(),
          }),
        })
      )
      .mutation(async ({ input, ctx }) => {
        return chatService.updateChatMessage(input, ctx);
      }),
  });
