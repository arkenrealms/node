import type { Context } from '../../types';
import type {
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
} from './core.types';

import type { IApp } from '../../types';

export interface IService {
  stats: (ctx: any) => Promise<any>;
}

export class Service implements IService {
  constructor() {}

  async init({ app }: { app: IApp }) {}

  async stats({ app }: { app: IApp }) {
    console.log('Core.Service.stats');

    const stats = await app.model.Stat.find().lean().exec();

    return { data: stats as Stat[] };
  }

  // Account Methods
  async getAccount({ accountId }: { accountId: string }, ctx: Context) {
    const account = await ctx.app.model.Account.findById(accountId).lean().exec();
    if (!account) throw new Error('Account not found');
    return account as Account;
  }

  async createAccount(
    { username, email, telegramUserId }: { username: string; email?: string; telegramUserId?: number },
    ctx: Context
  ) {
    const account = await ctx.app.model.Account.create({ username, email, telegramUserId });
    return account as Account;
  }

  async updateAccount({ accountId, data }: { accountId: string; data: Partial<Account> }, ctx: Context) {
    const updatedAccount = await ctx.app.model.Account.findByIdAndUpdate(accountId, data, { new: true }).lean().exec();
    if (!updatedAccount) throw new Error('Account update failed');
    return updatedAccount as Account;
  }

  // Achievement Methods
  async getAchievement({ achievementId }: { achievementId: string }, ctx: Context) {
    const achievement = await ctx.app.model.Achievement.findById(achievementId).lean().exec();
    if (!achievement) throw new Error('Achievement not found');
    return achievement as Achievement;
  }

  async createAchievement(_: {}, ctx: Context) {
    const achievement = await ctx.app.model.Achievement.create({});
    return achievement as Achievement;
  }

  async updateAchievement(
    { achievementId, data }: { achievementId: string; data: Partial<Achievement> },
    ctx: Context
  ) {
    const updatedAchievement = await ctx.app.model.Achievement.findByIdAndUpdate(achievementId, data, { new: true })
      .lean()
      .exec();
    if (!updatedAchievement) throw new Error('Achievement update failed');
    return updatedAchievement as Achievement;
  }

  // Act Methods
  async getAct({ actId }: { actId: string }, ctx: Context) {
    const act = await ctx.app.model.Act.findById(actId).lean().exec();
    if (!act) throw new Error('Act not found');
    return act as Act;
  }

  async createAct(_: {}, ctx: Context) {
    const act = await ctx.app.model.Act.create({});
    return act as Act;
  }

  async updateAct({ actId, data }: { actId: string; data: Partial<Act> }, ctx: Context) {
    const updatedAct = await ctx.app.model.Act.findByIdAndUpdate(actId, data, { new: true }).lean().exec();
    if (!updatedAct) throw new Error('Act update failed');
    return updatedAct as Act;
  }

  // Agent Methods
  async getAgent({ agentId }: { agentId: string }, ctx: Context) {
    const agent = await ctx.app.model.Agent.findById(agentId).lean().exec();
    if (!agent) throw new Error('Agent not found');
    return agent as Agent;
  }

  async createAgent(_: {}, ctx: Context) {
    const agent = await ctx.app.model.Agent.create({});
    return agent as Agent;
  }

  async updateAgent({ agentId, data }: { agentId: string; data: Partial<Agent> }, ctx: Context) {
    const updatedAgent = await ctx.app.model.Agent.findByIdAndUpdate(agentId, data, { new: true }).lean().exec();
    if (!updatedAgent) throw new Error('Agent update failed');
    return updatedAgent as Agent;
  }

  // Application Methods
  async getApplication({ applicationId }: { applicationId: string }, ctx: Context) {
    const application = await ctx.app.model.Application.findById(applicationId).lean().exec();
    if (!application) throw new Error('Application not found');
    return application as Application;
  }

  async createApplication(
    {
      ownerId,
      metaverseId,
      name,
      description,
    }: { ownerId: string; metaverseId: string; name: string; description?: string },
    ctx: Context
  ) {
    const application = await ctx.app.model.Application.create({ ownerId, metaverseId, name, description });
    return application as Application;
  }

  async updateApplication(
    { applicationId, data }: { applicationId: string; data: Partial<Application> },
    ctx: Context
  ) {
    const updatedApplication = await ctx.app.model.Application.findByIdAndUpdate(applicationId, data, { new: true })
      .lean()
      .exec();
    if (!updatedApplication) throw new Error('Application update failed');
    return updatedApplication as Application;
  }

  // Badge Methods
  async getBadge({ badgeId }: { badgeId: string }, ctx: Context) {
    const badge = await ctx.app.model.Badge.findById(badgeId).lean().exec();
    if (!badge) throw new Error('Badge not found');
    return badge as Badge;
  }

  async createBadge({ value }: { value: string }, ctx: Context) {
    const badge = await ctx.app.model.Badge.create({ value });
    return badge as Badge;
  }

  async updateBadge({ badgeId, data }: { badgeId: string; data: Partial<Badge> }, ctx: Context) {
    const updatedBadge = await ctx.app.model.Badge.findByIdAndUpdate(badgeId, data, { new: true }).lean().exec();
    if (!updatedBadge) throw new Error('Badge update failed');
    return updatedBadge as Badge;
  }

  // ... Implement similar methods for all other entities

  // WorldEvent Methods
  async getWorldEvent({ worldEventId }: { worldEventId: string }, ctx: Context) {
    const worldEvent = await ctx.app.model.WorldEvent.findById(worldEventId).lean().exec();
    if (!worldEvent) throw new Error('WorldEvent not found');
    return worldEvent as WorldEvent;
  }

  async createWorldEvent(
    { text, importance, tags }: { text: string; importance?: number; tags?: any[] },
    ctx: Context
  ) {
    const worldEvent = await ctx.app.model.WorldEvent.create({ text, importance, tags });
    return worldEvent as WorldEvent;
  }

  async updateWorldEvent({ worldEventId, data }: { worldEventId: string; data: Partial<WorldEvent> }, ctx: Context) {
    const updatedWorldEvent = await ctx.app.model.WorldEvent.findByIdAndUpdate(worldEventId, data, { new: true })
      .lean()
      .exec();
    if (!updatedWorldEvent) throw new Error('WorldEvent update failed');
    return updatedWorldEvent as WorldEvent;
  }
}
