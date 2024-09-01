// module/core.service.ts

import type {
  RouterContext,
  Router,
  RouterInput,
  RouterOutput,
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
  Stat,
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
} from './core.types';

export class Service {
  // Account Methods
  async getAccount(input: RouterInput['getAccount'], ctx: RouterContext): Promise<RouterOutput['getAccount']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Core.Service.getAccount', input.accountId);

    const account = await ctx.app.model.Account.findById(input.accountId).lean().exec();
    if (!account) throw new Error('Account not found');

    return account as Account;
  }

  async createAccount(input: RouterInput['createAccount'], ctx: RouterContext): Promise<RouterOutput['createAccount']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Core.Service.createAccount', input);

    const account = await ctx.app.model.Account.create(input);
    return account as Account;
  }

  async updateAccount(input: RouterInput['updateAccount'], ctx: RouterContext): Promise<RouterOutput['updateAccount']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Core.Service.updateAccount', input.accountId, input.data);

    const updatedAccount = await ctx.app.model.Account.findByIdAndUpdate(input.accountId, input.data, { new: true })
      .lean()
      .exec();
    if (!updatedAccount) throw new Error('Account update failed');

    return updatedAccount as Account;
  }

  // Achievement Methods
  async getAchievement(
    input: RouterInput['getAchievement'],
    ctx: RouterContext
  ): Promise<RouterOutput['getAchievement']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Core.Service.getAchievement', input.achievementId);

    const achievement = await ctx.app.model.Achievement.findById(input.achievementId).lean().exec();
    if (!achievement) throw new Error('Achievement not found');

    return achievement as Achievement;
  }

  async createAchievement(
    input: RouterInput['createAchievement'],
    ctx: RouterContext
  ): Promise<RouterOutput['createAchievement']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Core.Service.createAchievement', input);

    const achievement = await ctx.app.model.Achievement.create(input);
    return achievement as Achievement;
  }

  async updateAchievement(
    input: RouterInput['updateAchievement'],
    ctx: RouterContext
  ): Promise<RouterOutput['updateAchievement']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Core.Service.updateAchievement', input.achievementId, input.data);

    const updatedAchievement = await ctx.app.model.Achievement.findByIdAndUpdate(input.achievementId, input.data, {
      new: true,
    })
      .lean()
      .exec();
    if (!updatedAchievement) throw new Error('Achievement update failed');

    return updatedAchievement as Achievement;
  }

  // Add similar methods for Act, Agent, Application, Badge, BattlePass, Biome, BiomeFeature,
  // Bounty, Collection, Comment, Community, Company, Conversation, Data, Discussion, Energy, Event, Exchange,
  // File, Galaxy, Guide, Idea, Leaderboard, Log, Lore, Market, Memory, Message, Metaverse, NewsArticle, Npc,
  // Offer, Omniverse, Order, Payment, Permission, Person, Planet, Poll, Project, Proposal, Quest, Rating, Realm,
  // RecordUpdate, Referral, Review, Role, Season, Server, Session, SolarSystem, Star, Stash, Stock, Suggestion, Tag,
  // Team, Tournament, Trade, Universe, Validator, Vote, WorldEvent.

  // Example: Role Methods
  async getRole(input: RouterInput['getRole'], ctx: RouterContext): Promise<RouterOutput['getRole']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Core.Service.getRole', input.roleId);

    const role = await ctx.app.model.Role.findById(input.roleId).lean().exec();
    if (!role) throw new Error('Role not found');

    return role as Role;
  }

  async createRole(input: RouterInput['createRole'], ctx: RouterContext): Promise<RouterOutput['createRole']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Core.Service.createRole', input);

    const role = await ctx.app.model.Role.create(input);
    return role as Role;
  }

  async updateRole(input: RouterInput['updateRole'], ctx: RouterContext): Promise<RouterOutput['updateRole']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Core.Service.updateRole', input.roleId, input.data);

    const updatedRole = await ctx.app.model.Role.findByIdAndUpdate(input.roleId, input.data, { new: true })
      .lean()
      .exec();
    if (!updatedRole) throw new Error('Role update failed');

    return updatedRole as Role;
  }

  // Example: Universe Methods
  async getUniverse(input: RouterInput['getUniverse'], ctx: RouterContext): Promise<RouterOutput['getUniverse']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Core.Service.getUniverse', input.universeId);

    const universe = await ctx.app.model.Universe.findById(input.universeId).lean().exec();
    if (!universe) throw new Error('Universe not found');

    return universe as Universe;
  }

  async createUniverse(
    input: RouterInput['createUniverse'],
    ctx: RouterContext
  ): Promise<RouterOutput['createUniverse']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Core.Service.createUniverse', input);

    const universe = await ctx.app.model.Universe.create(input);
    return universe as Universe;
  }

  async updateUniverse(
    input: RouterInput['updateUniverse'],
    ctx: RouterContext
  ): Promise<RouterOutput['updateUniverse']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Core.Service.updateUniverse', input.universeId, input.data);

    const updatedUniverse = await ctx.app.model.Universe.findByIdAndUpdate(input.universeId, input.data, { new: true })
      .lean()
      .exec();
    if (!updatedUniverse) throw new Error('Universe update failed');

    return updatedUniverse as Universe;
  }

  async info(input: RouterInput['info'], ctx: RouterContext): Promise<RouterOutput['info']> {
    if (!input) throw new Error('Input should not be void');
  }

  async stats(input: RouterInput['stats'], ctx: RouterContext): Promise<RouterOutput['stats']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Core.Service.stats');

    const stats = await ctx.app.model.Stat.find().lean().exec();

    return { data: stats as Stat[] };
  }
}
