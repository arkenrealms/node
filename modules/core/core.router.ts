import { z as zod } from 'zod';
import { initTRPC } from '@trpc/server';
import type { Context } from '../../types';
import { Service } from './core.service';

export const z = zod;
export const t = initTRPC.context<Context>().create();
export const router = t.router;
export const procedure = t.procedure;

export const createRouter = (service: any) =>
  router({
    // Account routes
    getAccount: procedure.input(z.object({ accountId: z.string() })).query(async ({ input, ctx }) => {
      return service.getAccount(input, ctx);
    }),
    createAccount: procedure
      .input(z.object({ username: z.string(), email: z.string().optional(), telegramUserId: z.number().optional() }))
      .mutation(async ({ input, ctx }) => {
        return service.createAccount(input, ctx);
      }),
    updateAccount: procedure
      .input(
        z.object({
          accountId: z.string(),
          data: z.object({
            username: z.string().optional(),
            email: z.string().optional(),
            telegramUserId: z.number().optional(),
          }),
        })
      )
      .mutation(async ({ input, ctx }) => {
        return service.updateAccount(input, ctx);
      }),

    // Achievement routes
    getAchievement: procedure.input(z.object({ achievementId: z.string() })).query(async ({ input, ctx }) => {
      return service.getAchievement(input, ctx);
    }),
    createAchievement: procedure.input(z.object({})).mutation(async ({ input, ctx }) => {
      return service.createAchievement(input, ctx);
    }),
    updateAchievement: procedure
      .input(z.object({ achievementId: z.string(), data: z.object({}) }))
      .mutation(async ({ input, ctx }) => {
        return service.updateAchievement(input, ctx);
      }),

    // Act routes
    getAct: procedure.input(z.object({ actId: z.string() })).query(async ({ input, ctx }) => {
      return service.getAct(input, ctx);
    }),
    createAct: procedure.input(z.object({})).mutation(async ({ input, ctx }) => {
      return service.createAct(input, ctx);
    }),
    updateAct: procedure.input(z.object({ actId: z.string(), data: z.object({}) })).mutation(async ({ input, ctx }) => {
      return service.updateAct(input, ctx);
    }),

    // Agent routes
    getAgent: procedure.input(z.object({ agentId: z.string() })).query(async ({ input, ctx }) => {
      return service.getAgent(input, ctx);
    }),
    createAgent: procedure.input(z.object({})).mutation(async ({ input, ctx }) => {
      return service.createAgent(input, ctx);
    }),
    updateAgent: procedure
      .input(z.object({ agentId: z.string(), data: z.object({}) }))
      .mutation(async ({ input, ctx }) => {
        return service.updateAgent(input, ctx);
      }),

    // Application routes
    getApplication: procedure.input(z.object({ applicationId: z.string() })).query(async ({ input, ctx }) => {
      return service.getApplication(input, ctx);
    }),
    createApplication: procedure
      .input(
        z.object({ ownerId: z.string(), metaverseId: z.string(), name: z.string(), description: z.string().optional() })
      )
      .mutation(async ({ input, ctx }) => {
        return service.createApplication(input, ctx);
      }),
    updateApplication: procedure
      .input(
        z.object({
          applicationId: z.string(),
          data: z.object({
            ownerId: z.string().optional(),
            metaverseId: z.string().optional(),
            name: z.string().optional(),
            description: z.string().optional(),
          }),
        })
      )
      .mutation(async ({ input, ctx }) => {
        return service.updateApplication(input, ctx);
      }),

    // Badge routes
    getBadge: procedure.input(z.object({ badgeId: z.string() })).query(async ({ input, ctx }) => {
      return service.getBadge(input, ctx);
    }),
    createBadge: procedure.input(z.object({ value: z.string() })).mutation(async ({ input, ctx }) => {
      return service.createBadge(input, ctx);
    }),
    updateBadge: procedure
      .input(z.object({ badgeId: z.string(), data: z.object({ value: z.string().optional() }) }))
      .mutation(async ({ input, ctx }) => {
        return service.updateBadge(input, ctx);
      }),

    // Repeat similar structure for other entities...

    // WorldEvent routes
    getWorldEvent: procedure.input(z.object({ worldEventId: z.string() })).query(async ({ input, ctx }) => {
      return service.getWorldEvent(input, ctx);
    }),
    createWorldEvent: procedure
      .input(z.object({ text: z.string(), importance: z.number().optional(), tags: z.array(z.unknown()).optional() }))
      .mutation(async ({ input, ctx }) => {
        return service.createWorldEvent(input, ctx);
      }),
    updateWorldEvent: procedure
      .input(
        z.object({
          worldEventId: z.string(),
          data: z.object({
            text: z.string().optional(),
            importance: z.number().optional(),
            tags: z.array(z.unknown()).optional(),
          }),
        })
      )
      .mutation(async ({ input, ctx }) => {
        return service.updateWorldEvent(input, ctx);
      }),

    info: procedure.query(async ({ input, ctx }) => {
      return service.info(ctx);
    }),
    stats: procedure
      .input(
        z.object({
          where: z.object({
            createdDate: z.object({
              gte: dateFromString.optional(),
            }),
          }),
          orderBy: z.object({
            number: z.enum(['asc', 'desc']),
          }),
        })
      )
      .query(async ({ input, ctx }) => {
        return service.stats(ctx);
      }),
  });

// export const router: ReturnType<typeof Service.createRouter>;
