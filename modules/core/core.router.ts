// module/core.router.ts

import { z as zod } from 'zod';
import { initTRPC, inferRouterInputs, inferRouterOutputs } from '@trpc/server';
import { customErrorFormatter, hasRole } from '~/util/rpc';
import { dateFromString } from '~/util/zod';
import type { RouterContext } from '~/types';
import {
  Account,
  Achievement,
  Act,
  Agent,
  Application,
  Badge,
  BattlePass,
  Biome,
  BiomeFeature,
  Bounty,
  Collection,
  Comment,
  Community,
  Company,
  Conversation,
  Data,
  Discussion,
  Energy,
  Event,
  Exchange,
  File,
  Galaxy,
  Guide,
  Idea,
  Leaderboard,
  Log,
  Lore,
  Market,
  Memory,
  Message,
  Metaverse,
  NewsArticle,
  Npc,
  Offer,
  Omniverse,
  Order,
  Payment,
  Permission,
  Person,
  Planet,
  Poll,
  Project,
  Proposal,
  Quest,
  Rating,
  Realm,
  RecordUpdate,
  Referral,
  Review,
  Role,
  Season,
  Server,
  Session,
  SolarSystem,
  Star,
  Stash,
  Stock,
  Suggestion,
  Tag,
  Team,
  Tournament,
  Trade,
  Universe,
  Validator,
  Vote,
  WorldEvent,
  Stat,
} from './core.schema';

export const z = zod;
export const t = initTRPC.context<RouterContext>().create();
export const router = t.router;
export const procedure = t.procedure;

export const createRouter = () =>
  router({
    // Account Procedures
    getAccount: procedure
      .use(hasRole('guest', t))
      .use(customErrorFormatter(t))
      .input(z.object({ accountId: z.string() }))
      .query(({ input, ctx }) => (ctx.app.service.Core.getAccount as any)(input, ctx)),

    createAccount: procedure
      .use(hasRole('realm', t))
      .use(customErrorFormatter(t))
      .input(Account)
      .mutation(({ input, ctx }) => (ctx.app.service.Core.createAccount as any)(input, ctx)),

    updateAccount: procedure
      .use(hasRole('realm', t))
      .use(customErrorFormatter(t))
      .input(z.object({ accountId: z.string(), data: Account.partial() }))
      .mutation(({ input, ctx }) => (ctx.app.service.Core.updateAccount as any)(input, ctx)),

    // Achievement Procedures
    getAchievement: procedure
      .use(hasRole('guest', t))
      .use(customErrorFormatter(t))
      .input(z.object({ achievementId: z.string() }))
      .query(({ input, ctx }) => (ctx.app.service.Core.getAchievement as any)(input, ctx)),

    createAchievement: procedure
      .use(hasRole('realm', t))
      .use(customErrorFormatter(t))
      .input(Achievement)
      .mutation(({ input, ctx }) => (ctx.app.service.Core.createAchievement as any)(input, ctx)),

    updateAchievement: procedure
      .use(hasRole('realm', t))
      .use(customErrorFormatter(t))
      .input(z.object({ achievementId: z.string(), data: Achievement.partial() }))
      .mutation(({ input, ctx }) => (ctx.app.service.Core.updateAchievement as any)(input, ctx)),

    // Add similar procedures for Act, Agent, Application, Badge, BattlePass, Biome, BiomeFeature,
    // Bounty, Collection, Comment, Community, Company, Conversation, Data, Discussion, Energy, Event, Exchange,
    // File, Galaxy, Guide, Idea, Leaderboard, Log, Lore, Market, Memory, Message, Metaverse, NewsArticle, Npc,
    // Offer, Omniverse, Order, Payment, Permission, Person, Planet, Poll, Project, Proposal, Quest, Rating, Realm,
    // RecordUpdate, Referral, Review, Role, Season, Server, Session, SolarSystem, Star, Stash, Stock, Suggestion, Tag,
    // Team, Tournament, Trade, Universe, Validator, Vote, WorldEvent.

    // Here are some examples for additional entities

    // Example: Role Procedures
    getRole: procedure
      .use(hasRole('guest', t))
      .use(customErrorFormatter(t))
      .input(z.object({ roleId: z.string() }))
      .query(({ input, ctx }) => (ctx.app.service.Core.getRole as any)(input, ctx)),

    createRole: procedure
      .use(hasRole('realm', t))
      .use(customErrorFormatter(t))
      .input(Role)
      .mutation(({ input, ctx }) => (ctx.app.service.Core.createRole as any)(input, ctx)),

    updateRole: procedure
      .use(hasRole('realm', t))
      .use(customErrorFormatter(t))
      .input(z.object({ roleId: z.string(), data: Role.partial() }))
      .mutation(({ input, ctx }) => (ctx.app.service.Core.updateRole as any)(input, ctx)),

    // Example: Universe Procedures
    getUniverse: procedure
      .use(hasRole('guest', t))
      .use(customErrorFormatter(t))
      .input(z.object({ universeId: z.string() }))
      .query(({ input, ctx }) => (ctx.app.service.Core.getUniverse as any)(input, ctx)),

    createUniverse: procedure
      .use(hasRole('realm', t))
      .use(customErrorFormatter(t))
      .input(Universe)
      .mutation(({ input, ctx }) => (ctx.app.service.Core.createUniverse as any)(input, ctx)),

    updateUniverse: procedure
      .use(hasRole('realm', t))
      .use(customErrorFormatter(t))
      .input(z.object({ universeId: z.string(), data: Universe.partial() }))
      .mutation(({ input, ctx }) => (ctx.app.service.Core.updateUniverse as any)(input, ctx)),

    info: procedure
      .use(hasRole('guest', t))
      .use(customErrorFormatter(t))
      .input(z.object({}))
      .query(({ input, ctx }) => (ctx.app.service.Core.info as any)(input, ctx)),

    stats: procedure
      .use(hasRole('guest', t))
      .use(customErrorFormatter(t))
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
      .query(({ input, ctx }) => (ctx.app.service.Core.stats as any)(input, ctx)),
  });

export type Router = ReturnType<typeof createRouter>;
export type RouterInput = inferRouterInputs<Router>;
export type RouterOutput = inferRouterOutputs<Router>;
