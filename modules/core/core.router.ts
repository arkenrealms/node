// module/core.router.ts

import { z as zod } from 'zod';
import { initTRPC, inferRouterInputs, inferRouterOutputs } from '@trpc/server';
import { customErrorFormatter, hasRole } from '../../util/rpc';
import { dateFromString } from '../../util/zod';
import type { RouterContext } from '../../types';
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
      .use(hasRole('admin', t))
      .use(customErrorFormatter(t))
      .input(Account)
      .mutation(({ input, ctx }) => (ctx.app.service.Core.createAccount as any)(input, ctx)),

    updateAccount: procedure
      .use(hasRole('admin', t))
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
      .use(hasRole('admin', t))
      .use(customErrorFormatter(t))
      .input(Achievement)
      .mutation(({ input, ctx }) => (ctx.app.service.Core.createAchievement as any)(input, ctx)),

    updateAchievement: procedure
      .use(hasRole('admin', t))
      .use(customErrorFormatter(t))
      .input(z.object({ achievementId: z.string(), data: Achievement.partial() }))
      .mutation(({ input, ctx }) => (ctx.app.service.Core.updateAchievement as any)(input, ctx)),

    // Add similar procedures for Act, Agent, Application, Badge, BattlePass, Biome, BiomeFeature,
    // Bounty, Collection, Comment, Community, Company, Conversation, Data, Discussion, Energy, Event, Exchange,
    // File, Galaxy, Guide, Idea, Leaderboard, Log, Lore, Market, Memory, Message, Metaverse, NewsArticle, Npc,
    // Offer, Omniverse, Order, Payment, Permission, Person, Planet, Poll, Project, Proposal, Quest, Rating, Realm,
    // RecordUpdate, Referral, Review, Role, Season, Server, Session, SolarSystem, Star, Stash, Stock, Suggestion, Tag,
    // Team, Tournament, Trade, Universe, Validator, Vote, WorldEvent.

    // Act Procedures
    getAct: procedure
      .use(hasRole('guest', t))
      .use(customErrorFormatter(t))
      .input(z.object({ actId: z.string() }))
      .query(({ input, ctx }) => (ctx.app.service.Core.getAct as any)(input, ctx)),

    createAct: procedure
      .use(hasRole('admin', t))
      .use(customErrorFormatter(t))
      .input(Act)
      .mutation(({ input, ctx }) => (ctx.app.service.Core.createAct as any)(input, ctx)),

    updateAct: procedure
      .use(hasRole('admin', t))
      .use(customErrorFormatter(t))
      .input(z.object({ actId: z.string(), data: Act.partial() }))
      .mutation(({ input, ctx }) => (ctx.app.service.Core.updateAct as any)(input, ctx)),

    // Agent Procedures
    getAgent: procedure
      .use(hasRole('guest', t))
      .use(customErrorFormatter(t))
      .input(z.object({ agentId: z.string() }))
      .query(({ input, ctx }) => (ctx.app.service.Core.getAgent as any)(input, ctx)),

    createAgent: procedure
      .use(hasRole('admin', t))
      .use(customErrorFormatter(t))
      .input(Agent)
      .mutation(({ input, ctx }) => (ctx.app.service.Core.createAgent as any)(input, ctx)),

    updateAgent: procedure
      .use(hasRole('admin', t))
      .use(customErrorFormatter(t))
      .input(z.object({ agentId: z.string(), data: Agent.partial() }))
      .mutation(({ input, ctx }) => (ctx.app.service.Core.updateAgent as any)(input, ctx)),

    // Application Procedures
    getApplication: procedure
      .use(hasRole('guest', t))
      .use(customErrorFormatter(t))
      .input(z.object({ applicationId: z.string() }))
      .query(({ input, ctx }) => (ctx.app.service.Core.getApplication as any)(input, ctx)),

    createApplication: procedure
      .use(hasRole('admin', t))
      .use(customErrorFormatter(t))
      .input(Application)
      .mutation(({ input, ctx }) => (ctx.app.service.Core.createApplication as any)(input, ctx)),

    updateApplication: procedure
      .use(hasRole('admin', t))
      .use(customErrorFormatter(t))
      .input(z.object({ applicationId: z.string(), data: Application.partial() }))
      .mutation(({ input, ctx }) => (ctx.app.service.Core.updateApplication as any)(input, ctx)),

    // Badge Procedures
    getBadge: procedure
      .use(hasRole('guest', t))
      .use(customErrorFormatter(t))
      .input(z.object({ badgeId: z.string() }))
      .query(({ input, ctx }) => (ctx.app.service.Core.getBadge as any)(input, ctx)),

    createBadge: procedure
      .use(hasRole('admin', t))
      .use(customErrorFormatter(t))
      .input(Badge)
      .mutation(({ input, ctx }) => (ctx.app.service.Core.createBadge as any)(input, ctx)),

    updateBadge: procedure
      .use(hasRole('admin', t))
      .use(customErrorFormatter(t))
      .input(z.object({ badgeId: z.string(), data: Badge.partial() }))
      .mutation(({ input, ctx }) => (ctx.app.service.Core.updateBadge as any)(input, ctx)),

    // BattlePass Procedures
    getBattlePass: procedure
      .use(hasRole('guest', t))
      .use(customErrorFormatter(t))
      .input(z.object({ battlePassId: z.string() }))
      .query(({ input, ctx }) => (ctx.app.service.Core.getBattlePass as any)(input, ctx)),

    createBattlePass: procedure
      .use(hasRole('admin', t))
      .use(customErrorFormatter(t))
      .input(BattlePass)
      .mutation(({ input, ctx }) => (ctx.app.service.Core.createBattlePass as any)(input, ctx)),

    updateBattlePass: procedure
      .use(hasRole('admin', t))
      .use(customErrorFormatter(t))
      .input(z.object({ battlePassId: z.string(), data: BattlePass.partial() }))
      .mutation(({ input, ctx }) => (ctx.app.service.Core.updateBattlePass as any)(input, ctx)),

    // Biome Procedures
    getBiome: procedure
      .use(hasRole('guest', t))
      .use(customErrorFormatter(t))
      .input(z.object({ biomeId: z.string() }))
      .query(({ input, ctx }) => (ctx.app.service.Core.getBiome as any)(input, ctx)),

    createBiome: procedure
      .use(hasRole('admin', t))
      .use(customErrorFormatter(t))
      .input(Biome)
      .mutation(({ input, ctx }) => (ctx.app.service.Core.createBiome as any)(input, ctx)),

    updateBiome: procedure
      .use(hasRole('admin', t))
      .use(customErrorFormatter(t))
      .input(z.object({ biomeId: z.string(), data: Biome.partial() }))
      .mutation(({ input, ctx }) => (ctx.app.service.Core.updateBiome as any)(input, ctx)),

    // BiomeFeature Procedures
    getBiomeFeature: procedure
      .use(hasRole('guest', t))
      .use(customErrorFormatter(t))
      .input(z.object({ biomeFeatureId: z.string() }))
      .query(({ input, ctx }) => (ctx.app.service.Core.getBiomeFeature as any)(input, ctx)),

    createBiomeFeature: procedure
      .use(hasRole('admin', t))
      .use(customErrorFormatter(t))
      .input(BiomeFeature)
      .mutation(({ input, ctx }) => (ctx.app.service.Core.createBiomeFeature as any)(input, ctx)),

    updateBiomeFeature: procedure
      .use(hasRole('admin', t))
      .use(customErrorFormatter(t))
      .input(z.object({ biomeFeatureId: z.string(), data: BiomeFeature.partial() }))
      .mutation(({ input, ctx }) => (ctx.app.service.Core.updateBiomeFeature as any)(input, ctx)),

    // Bounty Procedures
    getBounty: procedure
      .use(hasRole('guest', t))
      .use(customErrorFormatter(t))
      .input(z.object({ bountyId: z.string() }))
      .query(({ input, ctx }) => (ctx.app.service.Core.getBounty as any)(input, ctx)),

    createBounty: procedure
      .use(hasRole('admin', t))
      .use(customErrorFormatter(t))
      .input(Bounty)
      .mutation(({ input, ctx }) => (ctx.app.service.Core.createBounty as any)(input, ctx)),

    updateBounty: procedure
      .use(hasRole('admin', t))
      .use(customErrorFormatter(t))
      .input(z.object({ bountyId: z.string(), data: Bounty.partial() }))
      .mutation(({ input, ctx }) => (ctx.app.service.Core.updateBounty as any)(input, ctx)),
    // Collection Procedures
    getCollection: procedure
      .use(hasRole('guest', t))
      .use(customErrorFormatter(t))
      .input(z.object({ collectionId: z.string() }))
      .query(({ input, ctx }) => (ctx.app.service.Core.getCollection as any)(input, ctx)),

    createCollection: procedure
      .use(hasRole('admin', t))
      .use(customErrorFormatter(t))
      .input(Collection)
      .mutation(({ input, ctx }) => (ctx.app.service.Core.createCollection as any)(input, ctx)),

    updateCollection: procedure
      .use(hasRole('admin', t))
      .use(customErrorFormatter(t))
      .input(z.object({ collectionId: z.string(), data: Collection.partial() }))
      .mutation(({ input, ctx }) => (ctx.app.service.Core.updateCollection as any)(input, ctx)),

    // Comment Procedures
    getComment: procedure
      .use(hasRole('guest', t))
      .use(customErrorFormatter(t))
      .input(z.object({ commentId: z.string() }))
      .query(({ input, ctx }) => (ctx.app.service.Core.getComment as any)(input, ctx)),

    createComment: procedure
      .use(hasRole('admin', t))
      .use(customErrorFormatter(t))
      .input(Comment)
      .mutation(({ input, ctx }) => (ctx.app.service.Core.createComment as any)(input, ctx)),

    updateComment: procedure
      .use(hasRole('admin', t))
      .use(customErrorFormatter(t))
      .input(z.object({ commentId: z.string(), data: Comment.partial() }))
      .mutation(({ input, ctx }) => (ctx.app.service.Core.updateComment as any)(input, ctx)),

    // Community Procedures
    getCommunity: procedure
      .use(hasRole('guest', t))
      .use(customErrorFormatter(t))
      .input(z.object({ communityId: z.string() }))
      .query(({ input, ctx }) => (ctx.app.service.Core.getCommunity as any)(input, ctx)),

    createCommunity: procedure
      .use(hasRole('admin', t))
      .use(customErrorFormatter(t))
      .input(Community)
      .mutation(({ input, ctx }) => (ctx.app.service.Core.createCommunity as any)(input, ctx)),

    updateCommunity: procedure
      .use(hasRole('admin', t))
      .use(customErrorFormatter(t))
      .input(z.object({ communityId: z.string(), data: Community.partial() }))
      .mutation(({ input, ctx }) => (ctx.app.service.Core.updateCommunity as any)(input, ctx)),

    // Company Procedures
    getCompany: procedure
      .use(hasRole('guest', t))
      .use(customErrorFormatter(t))
      .input(z.object({ companyId: z.string() }))
      .query(({ input, ctx }) => (ctx.app.service.Core.getCompany as any)(input, ctx)),

    createCompany: procedure
      .use(hasRole('admin', t))
      .use(customErrorFormatter(t))
      .input(Company)
      .mutation(({ input, ctx }) => (ctx.app.service.Core.createCompany as any)(input, ctx)),

    updateCompany: procedure
      .use(hasRole('admin', t))
      .use(customErrorFormatter(t))
      .input(z.object({ companyId: z.string(), data: Company.partial() }))
      .mutation(({ input, ctx }) => (ctx.app.service.Core.updateCompany as any)(input, ctx)),

    // Conversation Procedures
    getConversation: procedure
      .use(hasRole('guest', t))
      .use(customErrorFormatter(t))
      .input(z.object({ conversationId: z.string() }))
      .query(({ input, ctx }) => (ctx.app.service.Core.getConversation as any)(input, ctx)),

    createConversation: procedure
      .use(hasRole('admin', t))
      .use(customErrorFormatter(t))
      .input(Conversation)
      .mutation(({ input, ctx }) => (ctx.app.service.Core.createConversation as any)(input, ctx)),

    updateConversation: procedure
      .use(hasRole('admin', t))
      .use(customErrorFormatter(t))
      .input(z.object({ conversationId: z.string(), data: Conversation.partial() }))
      .mutation(({ input, ctx }) => (ctx.app.service.Core.updateConversation as any)(input, ctx)),
    // Data Procedures
    getData: procedure
      .use(hasRole('guest', t))
      .use(customErrorFormatter(t))
      .input(z.object({ dataId: z.string() }))
      .query(({ input, ctx }) => (ctx.app.service.Core.getData as any)(input, ctx)),

    createData: procedure
      .use(hasRole('admin', t))
      .use(customErrorFormatter(t))
      .input(Data)
      .mutation(({ input, ctx }) => (ctx.app.service.Core.createData as any)(input, ctx)),

    updateData: procedure
      .use(hasRole('admin', t))
      .use(customErrorFormatter(t))
      .input(z.object({ dataId: z.string(), data: Data.partial() }))
      .mutation(({ input, ctx }) => (ctx.app.service.Core.updateData as any)(input, ctx)),

    // Discussion Procedures
    getDiscussion: procedure
      .use(hasRole('guest', t))
      .use(customErrorFormatter(t))
      .input(z.object({ discussionId: z.string() }))
      .query(({ input, ctx }) => (ctx.app.service.Core.getDiscussion as any)(input, ctx)),

    createDiscussion: procedure
      .use(hasRole('admin', t))
      .use(customErrorFormatter(t))
      .input(Discussion)
      .mutation(({ input, ctx }) => (ctx.app.service.Core.createDiscussion as any)(input, ctx)),

    updateDiscussion: procedure
      .use(hasRole('admin', t))
      .use(customErrorFormatter(t))
      .input(z.object({ discussionId: z.string(), data: Discussion.partial() }))
      .mutation(({ input, ctx }) => (ctx.app.service.Core.updateDiscussion as any)(input, ctx)),

    // Energy Procedures
    getEnergy: procedure
      .use(hasRole('guest', t))
      .use(customErrorFormatter(t))
      .input(z.object({ energyId: z.string() }))
      .query(({ input, ctx }) => (ctx.app.service.Core.getEnergy as any)(input, ctx)),

    createEnergy: procedure
      .use(hasRole('admin', t))
      .use(customErrorFormatter(t))
      .input(Energy)
      .mutation(({ input, ctx }) => (ctx.app.service.Core.createEnergy as any)(input, ctx)),

    updateEnergy: procedure
      .use(hasRole('admin', t))
      .use(customErrorFormatter(t))
      .input(z.object({ energyId: z.string(), data: Energy.partial() }))
      .mutation(({ input, ctx }) => (ctx.app.service.Core.updateEnergy as any)(input, ctx)),

    // Event Procedures
    getEvent: procedure
      .use(hasRole('guest', t))
      .use(customErrorFormatter(t))
      .input(z.object({ eventId: z.string() }))
      .query(({ input, ctx }) => (ctx.app.service.Core.getEvent as any)(input, ctx)),

    createEvent: procedure
      .use(hasRole('admin', t))
      .use(customErrorFormatter(t))
      .input(Event)
      .mutation(({ input, ctx }) => (ctx.app.service.Core.createEvent as any)(input, ctx)),

    updateEvent: procedure
      .use(hasRole('admin', t))
      .use(customErrorFormatter(t))
      .input(z.object({ eventId: z.string(), data: Event.partial() }))
      .mutation(({ input, ctx }) => (ctx.app.service.Core.updateEvent as any)(input, ctx)),
    // File Procedures
    getFile: procedure
      .use(hasRole('guest', t))
      .use(customErrorFormatter(t))
      .input(z.object({ fileId: z.string() }))
      .query(({ input, ctx }) => (ctx.app.service.Core.getFile as any)(input, ctx)),

    createFile: procedure
      .use(hasRole('admin', t))
      .use(customErrorFormatter(t))
      .input(File)
      .mutation(({ input, ctx }) => (ctx.app.service.Core.createFile as any)(input, ctx)),

    updateFile: procedure
      .use(hasRole('admin', t))
      .use(customErrorFormatter(t))
      .input(z.object({ fileId: z.string(), data: File.partial() }))
      .mutation(({ input, ctx }) => (ctx.app.service.Core.updateFile as any)(input, ctx)),

    // Galaxy Procedures
    getGalaxy: procedure
      .use(hasRole('guest', t))
      .use(customErrorFormatter(t))
      .input(z.object({ galaxyId: z.string() }))
      .query(({ input, ctx }) => (ctx.app.service.Core.getGalaxy as any)(input, ctx)),

    createGalaxy: procedure
      .use(hasRole('admin', t))
      .use(customErrorFormatter(t))
      .input(Galaxy)
      .mutation(({ input, ctx }) => (ctx.app.service.Core.createGalaxy as any)(input, ctx)),

    updateGalaxy: procedure
      .use(hasRole('admin', t))
      .use(customErrorFormatter(t))
      .input(z.object({ galaxyId: z.string(), data: Galaxy.partial() }))
      .mutation(({ input, ctx }) => (ctx.app.service.Core.updateGalaxy as any)(input, ctx)),

    // Guide Procedures
    getGuide: procedure
      .use(hasRole('guest', t))
      .use(customErrorFormatter(t))
      .input(z.object({ guideId: z.string() }))
      .query(({ input, ctx }) => (ctx.app.service.Core.getGuide as any)(input, ctx)),

    createGuide: procedure
      .use(hasRole('admin', t))
      .use(customErrorFormatter(t))
      .input(Guide)
      .mutation(({ input, ctx }) => (ctx.app.service.Core.createGuide as any)(input, ctx)),

    updateGuide: procedure
      .use(hasRole('admin', t))
      .use(customErrorFormatter(t))
      .input(z.object({ guideId: z.string(), data: Guide.partial() }))
      .mutation(({ input, ctx }) => (ctx.app.service.Core.updateGuide as any)(input, ctx)),

    // Idea Procedures
    getIdea: procedure
      .use(hasRole('guest', t))
      .use(customErrorFormatter(t))
      .input(z.object({ ideaId: z.string() }))
      .query(({ input, ctx }) => (ctx.app.service.Core.getIdea as any)(input, ctx)),

    createIdea: procedure
      .use(hasRole('admin', t))
      .use(customErrorFormatter(t))
      .input(Idea)
      .mutation(({ input, ctx }) => (ctx.app.service.Core.createIdea as any)(input, ctx)),

    updateIdea: procedure
      .use(hasRole('admin', t))
      .use(customErrorFormatter(t))
      .input(z.object({ ideaId: z.string(), data: Idea.partial() }))
      .mutation(({ input, ctx }) => (ctx.app.service.Core.updateIdea as any)(input, ctx)),
    // Leaderboard Procedures
    getLeaderboard: procedure
      .use(hasRole('guest', t))
      .use(customErrorFormatter(t))
      .input(z.object({ leaderboardId: z.string() }))
      .query(({ input, ctx }) => (ctx.app.service.Core.getLeaderboard as any)(input, ctx)),

    createLeaderboard: procedure
      .use(hasRole('admin', t))
      .use(customErrorFormatter(t))
      .input(Leaderboard)
      .mutation(({ input, ctx }) => (ctx.app.service.Core.createLeaderboard as any)(input, ctx)),

    updateLeaderboard: procedure
      .use(hasRole('admin', t))
      .use(customErrorFormatter(t))
      .input(z.object({ leaderboardId: z.string(), data: Leaderboard.partial() }))
      .mutation(({ input, ctx }) => (ctx.app.service.Core.updateLeaderboard as any)(input, ctx)),

    // Log Procedures
    getLog: procedure
      .use(hasRole('guest', t))
      .use(customErrorFormatter(t))
      .input(z.object({ logId: z.string() }))
      .query(({ input, ctx }) => (ctx.app.service.Core.getLog as any)(input, ctx)),

    createLog: procedure
      .use(hasRole('admin', t))
      .use(customErrorFormatter(t))
      .input(Log)
      .mutation(({ input, ctx }) => (ctx.app.service.Core.createLog as any)(input, ctx)),

    updateLog: procedure
      .use(hasRole('admin', t))
      .use(customErrorFormatter(t))
      .input(z.object({ logId: z.string(), data: Log.partial() }))
      .mutation(({ input, ctx }) => (ctx.app.service.Core.updateLog as any)(input, ctx)),

    // Lore Procedures
    getLore: procedure
      .use(hasRole('guest', t))
      .use(customErrorFormatter(t))
      .input(z.object({ loreId: z.string() }))
      .query(({ input, ctx }) => (ctx.app.service.Core.getLore as any)(input, ctx)),

    createLore: procedure
      .use(hasRole('admin', t))
      .use(customErrorFormatter(t))
      .input(Lore)
      .mutation(({ input, ctx }) => (ctx.app.service.Core.createLore as any)(input, ctx)),

    updateLore: procedure
      .use(hasRole('admin', t))
      .use(customErrorFormatter(t))
      .input(z.object({ loreId: z.string(), data: Lore.partial() }))
      .mutation(({ input, ctx }) => (ctx.app.service.Core.updateLore as any)(input, ctx)),

    // Memory Procedures
    getMemory: procedure
      .use(hasRole('guest', t))
      .use(customErrorFormatter(t))
      .input(z.object({ memoryId: z.string() }))
      .query(({ input, ctx }) => (ctx.app.service.Core.getMemory as any)(input, ctx)),

    createMemory: procedure
      .use(hasRole('admin', t))
      .use(customErrorFormatter(t))
      .input(Memory)
      .mutation(({ input, ctx }) => (ctx.app.service.Core.createMemory as any)(input, ctx)),

    updateMemory: procedure
      .use(hasRole('admin', t))
      .use(customErrorFormatter(t))
      .input(z.object({ memoryId: z.string(), data: Memory.partial() }))
      .mutation(({ input, ctx }) => (ctx.app.service.Core.updateMemory as any)(input, ctx)),
    // Message Procedures
    getMessage: procedure
      .use(hasRole('guest', t))
      .use(customErrorFormatter(t))
      .input(z.object({ messageId: z.string() }))
      .query(({ input, ctx }) => (ctx.app.service.Core.getMessage as any)(input, ctx)),

    createMessage: procedure
      .use(hasRole('admin', t))
      .use(customErrorFormatter(t))
      .input(Message)
      .mutation(({ input, ctx }) => (ctx.app.service.Core.createMessage as any)(input, ctx)),

    updateMessage: procedure
      .use(hasRole('admin', t))
      .use(customErrorFormatter(t))
      .input(z.object({ messageId: z.string(), data: Message.partial() }))
      .mutation(({ input, ctx }) => (ctx.app.service.Core.updateMessage as any)(input, ctx)),

    // Metaverse Procedures
    getMetaverse: procedure
      .use(hasRole('guest', t))
      .use(customErrorFormatter(t))
      .input(z.object({ metaverseId: z.string() }))
      .query(({ input, ctx }) => (ctx.app.service.Core.getMetaverse as any)(input, ctx)),

    createMetaverse: procedure
      .use(hasRole('admin', t))
      .use(customErrorFormatter(t))
      .input(Metaverse)
      .mutation(({ input, ctx }) => (ctx.app.service.Core.createMetaverse as any)(input, ctx)),

    updateMetaverse: procedure
      .use(hasRole('admin', t))
      .use(customErrorFormatter(t))
      .input(z.object({ metaverseId: z.string(), data: Metaverse.partial() }))
      .mutation(({ input, ctx }) => (ctx.app.service.Core.updateMetaverse as any)(input, ctx)),

    // NewsArticle Procedures
    getNewsArticle: procedure
      .use(hasRole('guest', t))
      .use(customErrorFormatter(t))
      .input(z.object({ newsArticleId: z.string() }))
      .query(({ input, ctx }) => (ctx.app.service.Core.getNewsArticle as any)(input, ctx)),

    createNewsArticle: procedure
      .use(hasRole('admin', t))
      .use(customErrorFormatter(t))
      .input(NewsArticle)
      .mutation(({ input, ctx }) => (ctx.app.service.Core.createNewsArticle as any)(input, ctx)),

    updateNewsArticle: procedure
      .use(hasRole('admin', t))
      .use(customErrorFormatter(t))
      .input(z.object({ newsArticleId: z.string(), data: NewsArticle.partial() }))
      .mutation(({ input, ctx }) => (ctx.app.service.Core.updateNewsArticle as any)(input, ctx)),

    // Npc Procedures
    getNpc: procedure
      .use(hasRole('guest', t))
      .use(customErrorFormatter(t))
      .input(z.object({ npcId: z.string() }))
      .query(({ input, ctx }) => (ctx.app.service.Core.getNpc as any)(input, ctx)),

    createNpc: procedure
      .use(hasRole('admin', t))
      .use(customErrorFormatter(t))
      .input(Npc)
      .mutation(({ input, ctx }) => (ctx.app.service.Core.createNpc as any)(input, ctx)),

    updateNpc: procedure
      .use(hasRole('admin', t))
      .use(customErrorFormatter(t))
      .input(z.object({ npcId: z.string(), data: Npc.partial() }))
      .mutation(({ input, ctx }) => (ctx.app.service.Core.updateNpc as any)(input, ctx)),
    // Offer Procedures
    getOffer: procedure
      .use(hasRole('guest', t))
      .use(customErrorFormatter(t))
      .input(z.object({ offerId: z.string() }))
      .query(({ input, ctx }) => (ctx.app.service.Core.getOffer as any)(input, ctx)),

    createOffer: procedure
      .use(hasRole('admin', t))
      .use(customErrorFormatter(t))
      .input(Offer)
      .mutation(({ input, ctx }) => (ctx.app.service.Core.createOffer as any)(input, ctx)),

    updateOffer: procedure
      .use(hasRole('admin', t))
      .use(customErrorFormatter(t))
      .input(z.object({ offerId: z.string(), data: Offer.partial() }))
      .mutation(({ input, ctx }) => (ctx.app.service.Core.updateOffer as any)(input, ctx)),

    // Omniverse Procedures
    getOmniverse: procedure
      .use(hasRole('guest', t))
      .use(customErrorFormatter(t))
      .input(z.object({ omniverseId: z.string() }))
      .query(({ input, ctx }) => (ctx.app.service.Core.getOmniverse as any)(input, ctx)),

    createOmniverse: procedure
      .use(hasRole('admin', t))
      .use(customErrorFormatter(t))
      .input(Omniverse)
      .mutation(({ input, ctx }) => (ctx.app.service.Core.createOmniverse as any)(input, ctx)),

    updateOmniverse: procedure
      .use(hasRole('admin', t))
      .use(customErrorFormatter(t))
      .input(z.object({ omniverseId: z.string(), data: Omniverse.partial() }))
      .mutation(({ input, ctx }) => (ctx.app.service.Core.updateOmniverse as any)(input, ctx)),

    // Order Procedures
    getOrder: procedure
      .use(hasRole('guest', t))
      .use(customErrorFormatter(t))
      .input(z.object({ orderId: z.string() }))
      .query(({ input, ctx }) => (ctx.app.service.Core.getOrder as any)(input, ctx)),

    createOrder: procedure
      .use(hasRole('admin', t))
      .use(customErrorFormatter(t))
      .input(Order)
      .mutation(({ input, ctx }) => (ctx.app.service.Core.createOrder as any)(input, ctx)),

    updateOrder: procedure
      .use(hasRole('admin', t))
      .use(customErrorFormatter(t))
      .input(z.object({ orderId: z.string(), data: Order.partial() }))
      .mutation(({ input, ctx }) => (ctx.app.service.Core.updateOrder as any)(input, ctx)),

    // Payment Procedures
    getPayment: procedure
      .use(hasRole('guest', t))
      .use(customErrorFormatter(t))
      .input(z.object({ paymentId: z.string() }))
      .query(({ input, ctx }) => (ctx.app.service.Core.getPayment as any)(input, ctx)),

    createPayment: procedure
      .use(hasRole('admin', t))
      .use(customErrorFormatter(t))
      .input(Payment)
      .mutation(({ input, ctx }) => (ctx.app.service.Core.createPayment as any)(input, ctx)),

    updatePayment: procedure
      .use(hasRole('admin', t))
      .use(customErrorFormatter(t))
      .input(z.object({ paymentId: z.string(), data: Payment.partial() }))
      .mutation(({ input, ctx }) => (ctx.app.service.Core.updatePayment as any)(input, ctx)),
    // Permission Procedures
    getPermission: procedure
      .use(hasRole('guest', t))
      .use(customErrorFormatter(t))
      .input(z.object({ permissionId: z.string() }))
      .query(({ input, ctx }) => (ctx.app.service.Core.getPermission as any)(input, ctx)),

    createPermission: procedure
      .use(hasRole('admin', t))
      .use(customErrorFormatter(t))
      .input(Permission)
      .mutation(({ input, ctx }) => (ctx.app.service.Core.createPermission as any)(input, ctx)),

    updatePermission: procedure
      .use(hasRole('admin', t))
      .use(customErrorFormatter(t))
      .input(z.object({ permissionId: z.string(), data: Permission.partial() }))
      .mutation(({ input, ctx }) => (ctx.app.service.Core.updatePermission as any)(input, ctx)),

    // Person Procedures
    getPerson: procedure
      .use(hasRole('guest', t))
      .use(customErrorFormatter(t))
      .input(z.object({ personId: z.string() }))
      .query(({ input, ctx }) => (ctx.app.service.Core.getPerson as any)(input, ctx)),

    createPerson: procedure
      .use(hasRole('admin', t))
      .use(customErrorFormatter(t))
      .input(Person)
      .mutation(({ input, ctx }) => (ctx.app.service.Core.createPerson as any)(input, ctx)),

    updatePerson: procedure
      .use(hasRole('admin', t))
      .use(customErrorFormatter(t))
      .input(z.object({ personId: z.string(), data: Person.partial() }))
      .mutation(({ input, ctx }) => (ctx.app.service.Core.updatePerson as any)(input, ctx)),

    // Planet Procedures
    getPlanet: procedure
      .use(hasRole('guest', t))
      .use(customErrorFormatter(t))
      .input(z.object({ planetId: z.string() }))
      .query(({ input, ctx }) => (ctx.app.service.Core.getPlanet as any)(input, ctx)),

    createPlanet: procedure
      .use(hasRole('admin', t))
      .use(customErrorFormatter(t))
      .input(Planet)
      .mutation(({ input, ctx }) => (ctx.app.service.Core.createPlanet as any)(input, ctx)),

    updatePlanet: procedure
      .use(hasRole('admin', t))
      .use(customErrorFormatter(t))
      .input(z.object({ planetId: z.string(), data: Planet.partial() }))
      .mutation(({ input, ctx }) => (ctx.app.service.Core.updatePlanet as any)(input, ctx)),

    // Poll Procedures
    getPoll: procedure
      .use(hasRole('guest', t))
      .use(customErrorFormatter(t))
      .input(z.object({ pollId: z.string() }))
      .query(({ input, ctx }) => (ctx.app.service.Core.getPoll as any)(input, ctx)),

    createPoll: procedure
      .use(hasRole('admin', t))
      .use(customErrorFormatter(t))
      .input(Poll)
      .mutation(({ input, ctx }) => (ctx.app.service.Core.createPoll as any)(input, ctx)),

    updatePoll: procedure
      .use(hasRole('admin', t))
      .use(customErrorFormatter(t))
      .input(z.object({ pollId: z.string(), data: Poll.partial() }))
      .mutation(({ input, ctx }) => (ctx.app.service.Core.updatePoll as any)(input, ctx)),
    // Project Procedures
    getProject: procedure
      .use(hasRole('guest', t))
      .use(customErrorFormatter(t))
      .input(z.object({ projectId: z.string() }))
      .query(({ input, ctx }) => (ctx.app.service.Core.getProject as any)(input, ctx)),

    createProject: procedure
      .use(hasRole('admin', t))
      .use(customErrorFormatter(t))
      .input(Project)
      .mutation(({ input, ctx }) => (ctx.app.service.Core.createProject as any)(input, ctx)),

    updateProject: procedure
      .use(hasRole('admin', t))
      .use(customErrorFormatter(t))
      .input(z.object({ projectId: z.string(), data: Project.partial() }))
      .mutation(({ input, ctx }) => (ctx.app.service.Core.updateProject as any)(input, ctx)),

    // Proposal Procedures
    getProposal: procedure
      .use(hasRole('guest', t))
      .use(customErrorFormatter(t))
      .input(z.object({ proposalId: z.string() }))
      .query(({ input, ctx }) => (ctx.app.service.Core.getProposal as any)(input, ctx)),

    createProposal: procedure
      .use(hasRole('admin', t))
      .use(customErrorFormatter(t))
      .input(Proposal)
      .mutation(({ input, ctx }) => (ctx.app.service.Core.createProposal as any)(input, ctx)),

    updateProposal: procedure
      .use(hasRole('admin', t))
      .use(customErrorFormatter(t))
      .input(z.object({ proposalId: z.string(), data: Proposal.partial() }))
      .mutation(({ input, ctx }) => (ctx.app.service.Core.updateProposal as any)(input, ctx)),

    // Quest Procedures
    getQuest: procedure
      .use(hasRole('guest', t))
      .use(customErrorFormatter(t))
      .input(z.object({ questId: z.string() }))
      .query(({ input, ctx }) => (ctx.app.service.Core.getQuest as any)(input, ctx)),

    createQuest: procedure
      .use(hasRole('admin', t))
      .use(customErrorFormatter(t))
      .input(Quest)
      .mutation(({ input, ctx }) => (ctx.app.service.Core.createQuest as any)(input, ctx)),

    updateQuest: procedure
      .use(hasRole('admin', t))
      .use(customErrorFormatter(t))
      .input(z.object({ questId: z.string(), data: Quest.partial() }))
      .mutation(({ input, ctx }) => (ctx.app.service.Core.updateQuest as any)(input, ctx)),

    // Rating Procedures
    getRating: procedure
      .use(hasRole('guest', t))
      .use(customErrorFormatter(t))
      .input(z.object({ ratingId: z.string() }))
      .query(({ input, ctx }) => (ctx.app.service.Core.getRating as any)(input, ctx)),

    createRating: procedure
      .use(hasRole('admin', t))
      .use(customErrorFormatter(t))
      .input(Rating)
      .mutation(({ input, ctx }) => (ctx.app.service.Core.createRating as any)(input, ctx)),

    updateRating: procedure
      .use(hasRole('admin', t))
      .use(customErrorFormatter(t))
      .input(z.object({ ratingId: z.string(), data: Rating.partial() }))
      .mutation(({ input, ctx }) => (ctx.app.service.Core.updateRating as any)(input, ctx)),
    // Realm Procedures
    getRealm: procedure
      .use(hasRole('guest', t))
      .use(customErrorFormatter(t))
      .input(z.object({ realmId: z.string() }))
      .query(({ input, ctx }) => (ctx.app.service.Core.getRealm as any)(input, ctx)),

    createRealm: procedure
      .use(hasRole('admin', t))
      .use(customErrorFormatter(t))
      .input(Realm)
      .mutation(({ input, ctx }) => (ctx.app.service.Core.createRealm as any)(input, ctx)),

    updateRealm: procedure
      .use(hasRole('admin', t))
      .use(customErrorFormatter(t))
      .input(z.object({ realmId: z.string(), data: Realm.partial() }))
      .mutation(({ input, ctx }) => (ctx.app.service.Core.updateRealm as any)(input, ctx)),

    // RecordUpdate Procedures
    getRecordUpdate: procedure
      .use(hasRole('guest', t))
      .use(customErrorFormatter(t))
      .input(z.object({ recordUpdateId: z.string() }))
      .query(({ input, ctx }) => (ctx.app.service.Core.getRecordUpdate as any)(input, ctx)),

    createRecordUpdate: procedure
      .use(hasRole('admin', t))
      .use(customErrorFormatter(t))
      .input(RecordUpdate)
      .mutation(({ input, ctx }) => (ctx.app.service.Core.createRecordUpdate as any)(input, ctx)),

    updateRecordUpdate: procedure
      .use(hasRole('admin', t))
      .use(customErrorFormatter(t))
      .input(z.object({ recordUpdateId: z.string(), data: RecordUpdate.partial() }))
      .mutation(({ input, ctx }) => (ctx.app.service.Core.updateRecordUpdate as any)(input, ctx)),

    // Referral Procedures
    getReferral: procedure
      .use(hasRole('guest', t))
      .use(customErrorFormatter(t))
      .input(z.object({ referralId: z.string() }))
      .query(({ input, ctx }) => (ctx.app.service.Core.getReferral as any)(input, ctx)),

    createReferral: procedure
      .use(hasRole('admin', t))
      .use(customErrorFormatter(t))
      .input(Referral)
      .mutation(({ input, ctx }) => (ctx.app.service.Core.createReferral as any)(input, ctx)),

    updateReferral: procedure
      .use(hasRole('admin', t))
      .use(customErrorFormatter(t))
      .input(z.object({ referralId: z.string(), data: Referral.partial() }))
      .mutation(({ input, ctx }) => (ctx.app.service.Core.updateReferral as any)(input, ctx)),

    // Review Procedures
    getReview: procedure
      .use(hasRole('guest', t))
      .use(customErrorFormatter(t))
      .input(z.object({ reviewId: z.string() }))
      .query(({ input, ctx }) => (ctx.app.service.Core.getReview as any)(input, ctx)),

    createReview: procedure
      .use(hasRole('admin', t))
      .use(customErrorFormatter(t))
      .input(Review)
      .mutation(({ input, ctx }) => (ctx.app.service.Core.createReview as any)(input, ctx)),

    updateReview: procedure
      .use(hasRole('admin', t))
      .use(customErrorFormatter(t))
      .input(z.object({ reviewId: z.string(), data: Review.partial() }))
      .mutation(({ input, ctx }) => (ctx.app.service.Core.updateReview as any)(input, ctx)),
    // Role Procedures
    getRole: procedure
      .use(hasRole('guest', t))
      .use(customErrorFormatter(t))
      .input(z.object({ roleId: z.string() }))
      .query(({ input, ctx }) => (ctx.app.service.Core.getRole as any)(input, ctx)),

    createRole: procedure
      .use(hasRole('admin', t))
      .use(customErrorFormatter(t))
      .input(Role)
      .mutation(({ input, ctx }) => (ctx.app.service.Core.createRole as any)(input, ctx)),

    updateRole: procedure
      .use(hasRole('admin', t))
      .use(customErrorFormatter(t))
      .input(z.object({ roleId: z.string(), data: Role.partial() }))
      .mutation(({ input, ctx }) => (ctx.app.service.Core.updateRole as any)(input, ctx)),

    // Season Procedures
    getSeason: procedure
      .use(hasRole('guest', t))
      .use(customErrorFormatter(t))
      .input(z.object({ seasonId: z.string() }))
      .query(({ input, ctx }) => (ctx.app.service.Core.getSeason as any)(input, ctx)),

    createSeason: procedure
      .use(hasRole('admin', t))
      .use(customErrorFormatter(t))
      .input(Season)
      .mutation(({ input, ctx }) => (ctx.app.service.Core.createSeason as any)(input, ctx)),

    updateSeason: procedure
      .use(hasRole('admin', t))
      .use(customErrorFormatter(t))
      .input(z.object({ seasonId: z.string(), data: Season.partial() }))
      .mutation(({ input, ctx }) => (ctx.app.service.Core.updateSeason as any)(input, ctx)),

    // Server Procedures
    getServer: procedure
      .use(hasRole('guest', t))
      .use(customErrorFormatter(t))
      .input(z.object({ serverId: z.string() }))
      .query(({ input, ctx }) => (ctx.app.service.Core.getServer as any)(input, ctx)),

    createServer: procedure
      .use(hasRole('admin', t))
      .use(customErrorFormatter(t))
      .input(Server)
      .mutation(({ input, ctx }) => (ctx.app.service.Core.createServer as any)(input, ctx)),

    updateServer: procedure
      .use(hasRole('admin', t))
      .use(customErrorFormatter(t))
      .input(z.object({ serverId: z.string(), data: Server.partial() }))
      .mutation(({ input, ctx }) => (ctx.app.service.Core.updateServer as any)(input, ctx)),

    // Session Procedures
    getSession: procedure
      .use(hasRole('guest', t))
      .use(customErrorFormatter(t))
      .input(z.object({ sessionId: z.string() }))
      .query(({ input, ctx }) => (ctx.app.service.Core.getSession as any)(input, ctx)),

    createSession: procedure
      .use(hasRole('admin', t))
      .use(customErrorFormatter(t))
      .input(Session)
      .mutation(({ input, ctx }) => (ctx.app.service.Core.createSession as any)(input, ctx)),

    updateSession: procedure
      .use(hasRole('admin', t))
      .use(customErrorFormatter(t))
      .input(z.object({ sessionId: z.string(), data: Session.partial() }))
      .mutation(({ input, ctx }) => (ctx.app.service.Core.updateSession as any)(input, ctx)),
    // SolarSystem Procedures
    getSolarSystem: procedure
      .use(hasRole('guest', t))
      .use(customErrorFormatter(t))
      .input(z.object({ solarSystemId: z.string() }))
      .query(({ input, ctx }) => (ctx.app.service.Core.getSolarSystem as any)(input, ctx)),

    createSolarSystem: procedure
      .use(hasRole('admin', t))
      .use(customErrorFormatter(t))
      .input(SolarSystem)
      .mutation(({ input, ctx }) => (ctx.app.service.Core.createSolarSystem as any)(input, ctx)),

    updateSolarSystem: procedure
      .use(hasRole('admin', t))
      .use(customErrorFormatter(t))
      .input(z.object({ solarSystemId: z.string(), data: SolarSystem.partial() }))
      .mutation(({ input, ctx }) => (ctx.app.service.Core.updateSolarSystem as any)(input, ctx)),

    // Star Procedures
    getStar: procedure
      .use(hasRole('guest', t))
      .use(customErrorFormatter(t))
      .input(z.object({ starId: z.string() }))
      .query(({ input, ctx }) => (ctx.app.service.Core.getStar as any)(input, ctx)),

    createStar: procedure
      .use(hasRole('admin', t))
      .use(customErrorFormatter(t))
      .input(Star)
      .mutation(({ input, ctx }) => (ctx.app.service.Core.createStar as any)(input, ctx)),

    updateStar: procedure
      .use(hasRole('admin', t))
      .use(customErrorFormatter(t))
      .input(z.object({ starId: z.string(), data: Star.partial() }))
      .mutation(({ input, ctx }) => (ctx.app.service.Core.updateStar as any)(input, ctx)),

    // Stash Procedures
    getStash: procedure
      .use(hasRole('guest', t))
      .use(customErrorFormatter(t))
      .input(z.object({ stashId: z.string() }))
      .query(({ input, ctx }) => (ctx.app.service.Core.getStash as any)(input, ctx)),

    createStash: procedure
      .use(hasRole('admin', t))
      .use(customErrorFormatter(t))
      .input(Stash)
      .mutation(({ input, ctx }) => (ctx.app.service.Core.createStash as any)(input, ctx)),

    updateStash: procedure
      .use(hasRole('admin', t))
      .use(customErrorFormatter(t))
      .input(z.object({ stashId: z.string(), data: Stash.partial() }))
      .mutation(({ input, ctx }) => (ctx.app.service.Core.updateStash as any)(input, ctx)),

    // Stock Procedures
    getStock: procedure
      .use(hasRole('guest', t))
      .use(customErrorFormatter(t))
      .input(z.object({ stockId: z.string() }))
      .query(({ input, ctx }) => (ctx.app.service.Core.getStock as any)(input, ctx)),

    createStock: procedure
      .use(hasRole('admin', t))
      .use(customErrorFormatter(t))
      .input(Stock)
      .mutation(({ input, ctx }) => (ctx.app.service.Core.createStock as any)(input, ctx)),

    updateStock: procedure
      .use(hasRole('admin', t))
      .use(customErrorFormatter(t))
      .input(z.object({ stockId: z.string(), data: Stock.partial() }))
      .mutation(({ input, ctx }) => (ctx.app.service.Core.updateStock as any)(input, ctx)),
    // Suggestion Procedures
    getSuggestion: procedure
      .use(hasRole('guest', t))
      .use(customErrorFormatter(t))
      .input(z.object({ suggestionId: z.string() }))
      .query(({ input, ctx }) => (ctx.app.service.Core.getSuggestion as any)(input, ctx)),

    createSuggestion: procedure
      .use(hasRole('admin', t))
      .use(customErrorFormatter(t))
      .input(Suggestion)
      .mutation(({ input, ctx }) => (ctx.app.service.Core.createSuggestion as any)(input, ctx)),

    updateSuggestion: procedure
      .use(hasRole('admin', t))
      .use(customErrorFormatter(t))
      .input(z.object({ suggestionId: z.string(), data: Suggestion.partial() }))
      .mutation(({ input, ctx }) => (ctx.app.service.Core.updateSuggestion as any)(input, ctx)),

    // Tag Procedures
    getTag: procedure
      .use(hasRole('guest', t))
      .use(customErrorFormatter(t))
      .input(z.object({ tagId: z.string() }))
      .query(({ input, ctx }) => (ctx.app.service.Core.getTag as any)(input, ctx)),

    createTag: procedure
      .use(hasRole('admin', t))
      .use(customErrorFormatter(t))
      .input(Tag)
      .mutation(({ input, ctx }) => (ctx.app.service.Core.createTag as any)(input, ctx)),

    updateTag: procedure
      .use(hasRole('admin', t))
      .use(customErrorFormatter(t))
      .input(z.object({ tagId: z.string(), data: Tag.partial() }))
      .mutation(({ input, ctx }) => (ctx.app.service.Core.updateTag as any)(input, ctx)),

    // Team Procedures
    getTeam: procedure
      .use(hasRole('guest', t))
      .use(customErrorFormatter(t))
      .input(z.object({ teamId: z.string() }))
      .query(({ input, ctx }) => (ctx.app.service.Core.getTeam as any)(input, ctx)),

    createTeam: procedure
      .use(hasRole('admin', t))
      .use(customErrorFormatter(t))
      .input(Team)
      .mutation(({ input, ctx }) => (ctx.app.service.Core.createTeam as any)(input, ctx)),

    updateTeam: procedure
      .use(hasRole('admin', t))
      .use(customErrorFormatter(t))
      .input(z.object({ teamId: z.string(), data: Team.partial() }))
      .mutation(({ input, ctx }) => (ctx.app.service.Core.updateTeam as any)(input, ctx)),

    // Tournament Procedures
    getTournament: procedure
      .use(hasRole('guest', t))
      .use(customErrorFormatter(t))
      .input(z.object({ tournamentId: z.string() }))
      .query(({ input, ctx }) => (ctx.app.service.Core.getTournament as any)(input, ctx)),

    createTournament: procedure
      .use(hasRole('admin', t))
      .use(customErrorFormatter(t))
      .input(Tournament)
      .mutation(({ input, ctx }) => (ctx.app.service.Core.createTournament as any)(input, ctx)),

    updateTournament: procedure
      .use(hasRole('admin', t))
      .use(customErrorFormatter(t))
      .input(z.object({ tournamentId: z.string(), data: Tournament.partial() }))
      .mutation(({ input, ctx }) => (ctx.app.service.Core.updateTournament as any)(input, ctx)),

    // Trade Procedures
    getTrade: procedure
      .use(hasRole('guest', t))
      .use(customErrorFormatter(t))
      .input(z.object({ tradeId: z.string() }))
      .query(({ input, ctx }) => (ctx.app.service.Core.getTrade as any)(input, ctx)),

    createTrade: procedure
      .use(hasRole('admin', t))
      .use(customErrorFormatter(t))
      .input(Trade)
      .mutation(({ input, ctx }) => (ctx.app.service.Core.createTrade as any)(input, ctx)),

    updateTrade: procedure
      .use(hasRole('admin', t))
      .use(customErrorFormatter(t))
      .input(z.object({ tradeId: z.string(), data: Trade.partial() }))
      .mutation(({ input, ctx }) => (ctx.app.service.Core.updateTrade as any)(input, ctx)),

    // Universe Procedures
    getUniverse: procedure
      .use(hasRole('guest', t))
      .use(customErrorFormatter(t))
      .input(z.object({ universeId: z.string() }))
      .query(({ input, ctx }) => (ctx.app.service.Core.getUniverse as any)(input, ctx)),

    createUniverse: procedure
      .use(hasRole('admin', t))
      .use(customErrorFormatter(t))
      .input(Universe)
      .mutation(({ input, ctx }) => (ctx.app.service.Core.createUniverse as any)(input, ctx)),

    updateUniverse: procedure
      .use(hasRole('admin', t))
      .use(customErrorFormatter(t))
      .input(z.object({ universeId: z.string(), data: Universe.partial() }))
      .mutation(({ input, ctx }) => (ctx.app.service.Core.updateUniverse as any)(input, ctx)),

    // Validator Procedures
    getValidator: procedure
      .use(hasRole('guest', t))
      .use(customErrorFormatter(t))
      .input(z.object({ validatorId: z.string() }))
      .query(({ input, ctx }) => (ctx.app.service.Core.getValidator as any)(input, ctx)),

    createValidator: procedure
      .use(hasRole('admin', t))
      .use(customErrorFormatter(t))
      .input(Validator)
      .mutation(({ input, ctx }) => (ctx.app.service.Core.createValidator as any)(input, ctx)),

    updateValidator: procedure
      .use(hasRole('admin', t))
      .use(customErrorFormatter(t))
      .input(z.object({ validatorId: z.string(), data: Validator.partial() }))
      .mutation(({ input, ctx }) => (ctx.app.service.Core.updateValidator as any)(input, ctx)),

    // Vote Procedures
    getVote: procedure
      .use(hasRole('guest', t))
      .use(customErrorFormatter(t))
      .input(z.object({ voteId: z.string() }))
      .query(({ input, ctx }) => (ctx.app.service.Core.getVote as any)(input, ctx)),

    createVote: procedure
      .use(hasRole('admin', t))
      .use(customErrorFormatter(t))
      .input(Vote)
      .mutation(({ input, ctx }) => (ctx.app.service.Core.createVote as any)(input, ctx)),

    updateVote: procedure
      .use(hasRole('admin', t))
      .use(customErrorFormatter(t))
      .input(z.object({ voteId: z.string(), data: Vote.partial() }))
      .mutation(({ input, ctx }) => (ctx.app.service.Core.updateVote as any)(input, ctx)),

    // WorldEvent Procedures
    getWorldEvent: procedure
      .use(hasRole('guest', t))
      .use(customErrorFormatter(t))
      .input(z.object({ worldEventId: z.string() }))
      .query(({ input, ctx }) => (ctx.app.service.Core.getWorldEvent as any)(input, ctx)),

    createWorldEvent: procedure
      .use(hasRole('admin', t))
      .use(customErrorFormatter(t))
      .input(WorldEvent)
      .mutation(({ input, ctx }) => (ctx.app.service.Core.createWorldEvent as any)(input, ctx)),

    updateWorldEvent: procedure
      .use(hasRole('admin', t))
      .use(customErrorFormatter(t))
      .input(z.object({ worldEventId: z.string(), data: WorldEvent.partial() }))
      .mutation(({ input, ctx }) => (ctx.app.service.Core.updateWorldEvent as any)(input, ctx)),

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
