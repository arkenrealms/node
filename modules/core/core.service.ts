import type {
  RouterContext,
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
  File,
  Galaxy,
  Guide,
  Idea,
  Leaderboard,
  Log,
  Lore,
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

  async info(input: RouterInput['info'], ctx: RouterContext): Promise<RouterOutput['info']> {
    if (!input) throw new Error('Input should not be void');
  }

  async stats(input: RouterInput['stats'], ctx: RouterContext): Promise<RouterOutput['stats']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Core.Service.stats');

    const stats = await ctx.app.model.Stat.find().lean().exec();

    return { data: stats as Stat[] };
  }

  // Act Methods

  // Get Act
  async getAct(input: RouterInput['getAct'], ctx: RouterContext): Promise<RouterOutput['getAct']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Core.Service.getAct', input.actId);

    const act = await ctx.app.model.Act.findById(input.actId).lean().exec();
    if (!act) throw new Error('Act not found');

    return act as Act;
  }

  // Create Act
  async createAct(input: RouterInput['createAct'], ctx: RouterContext): Promise<RouterOutput['createAct']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Core.Service.createAct', input);

    const act = await ctx.app.model.Act.create(input);
    return act as Act;
  }

  // Update Act
  async updateAct(input: RouterInput['updateAct'], ctx: RouterContext): Promise<RouterOutput['updateAct']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Core.Service.updateAct', input.actId, input.data);

    const updatedAct = await ctx.app.model.Act.findByIdAndUpdate(input.actId, input.data, { new: true }).lean().exec();
    if (!updatedAct) throw new Error('Act update failed');

    return updatedAct as Act;
  }

  // Agent Methods

  // Get Agent
  async getAgent(input: RouterInput['getAgent'], ctx: RouterContext): Promise<RouterOutput['getAgent']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Core.Service.getAgent', input.agentId);

    const agent = await ctx.app.model.Agent.findById(input.agentId).lean().exec();
    if (!agent) throw new Error('Agent not found');

    return agent as Agent;
  }

  // Create Agent
  async createAgent(input: RouterInput['createAgent'], ctx: RouterContext): Promise<RouterOutput['createAgent']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Core.Service.createAgent', input);

    const agent = await ctx.app.model.Agent.create(input);
    return agent as Agent;
  }

  // Update Agent
  async updateAgent(input: RouterInput['updateAgent'], ctx: RouterContext): Promise<RouterOutput['updateAgent']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Core.Service.updateAgent', input.agentId, input.data);

    const updatedAgent = await ctx.app.model.Agent.findByIdAndUpdate(input.agentId, input.data, { new: true })
      .lean()
      .exec();
    if (!updatedAgent) throw new Error('Agent update failed');

    return updatedAgent as Agent;
  }

  // Application Methods

  // Get Application
  async getApplication(
    input: RouterInput['getApplication'],
    ctx: RouterContext
  ): Promise<RouterOutput['getApplication']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Core.Service.getApplication', input.applicationId);

    const application = await ctx.app.model.Application.findById(input.applicationId).lean().exec();
    if (!application) throw new Error('Application not found');

    return application as Application;
  }

  // Create Application
  async createApplication(
    input: RouterInput['createApplication'],
    ctx: RouterContext
  ): Promise<RouterOutput['createApplication']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Core.Service.createApplication', input);

    const application = await ctx.app.model.Application.create(input);
    return application as Application;
  }

  // Update Application
  async updateApplication(
    input: RouterInput['updateApplication'],
    ctx: RouterContext
  ): Promise<RouterOutput['updateApplication']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Core.Service.updateApplication', input.applicationId, input.data);

    const updatedApplication = await ctx.app.model.Application.findByIdAndUpdate(input.applicationId, input.data, {
      new: true,
    })
      .lean()
      .exec();
    if (!updatedApplication) throw new Error('Application update failed');

    return updatedApplication as Application;
  }

  // Badge Methods
  async getBadge(input: RouterInput['getBadge'], ctx: RouterContext): Promise<RouterOutput['getBadge']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Core.Service.getBadge', input.badgeId);

    const badge = await ctx.app.model.Badge.findById(input.badgeId).lean().exec();
    if (!badge) throw new Error('Badge not found');

    return badge as Badge;
  }

  async createBadge(input: RouterInput['createBadge'], ctx: RouterContext): Promise<RouterOutput['createBadge']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Core.Service.createBadge', input);

    const badge = await ctx.app.model.Badge.create(input);
    return badge as Badge;
  }

  async updateBadge(input: RouterInput['updateBadge'], ctx: RouterContext): Promise<RouterOutput['updateBadge']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Core.Service.updateBadge', input.badgeId, input.data);

    const updatedBadge = await ctx.app.model.Badge.findByIdAndUpdate(input.badgeId, input.data, { new: true })
      .lean()
      .exec();
    if (!updatedBadge) throw new Error('Badge update failed');

    return updatedBadge as Badge;
  }

  // BattlePass Methods
  async getBattlePass(input: RouterInput['getBattlePass'], ctx: RouterContext): Promise<RouterOutput['getBattlePass']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Core.Service.getBattlePass', input.battlePassId);

    const battlePass = await ctx.app.model.BattlePass.findById(input.battlePassId).lean().exec();
    if (!battlePass) throw new Error('BattlePass not found');

    return battlePass as BattlePass;
  }

  async createBattlePass(
    input: RouterInput['createBattlePass'],
    ctx: RouterContext
  ): Promise<RouterOutput['createBattlePass']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Core.Service.createBattlePass', input);

    const battlePass = await ctx.app.model.BattlePass.create(input);
    return battlePass as BattlePass;
  }

  async updateBattlePass(
    input: RouterInput['updateBattlePass'],
    ctx: RouterContext
  ): Promise<RouterOutput['updateBattlePass']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Core.Service.updateBattlePass', input.battlePassId, input.data);

    const updatedBattlePass = await ctx.app.model.BattlePass.findByIdAndUpdate(input.battlePassId, input.data, {
      new: true,
    })
      .lean()
      .exec();
    if (!updatedBattlePass) throw new Error('BattlePass update failed');

    return updatedBattlePass as BattlePass;
  }

  // Biome Methods
  async getBiome(input: RouterInput['getBiome'], ctx: RouterContext): Promise<RouterOutput['getBiome']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Core.Service.getBiome', input.biomeId);

    const biome = await ctx.app.model.Biome.findById(input.biomeId).lean().exec();
    if (!biome) throw new Error('Biome not found');

    return biome as Biome;
  }

  async createBiome(input: RouterInput['createBiome'], ctx: RouterContext): Promise<RouterOutput['createBiome']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Core.Service.createBiome', input);

    const biome = await ctx.app.model.Biome.create(input);
    return biome as Biome;
  }

  async updateBiome(input: RouterInput['updateBiome'], ctx: RouterContext): Promise<RouterOutput['updateBiome']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Core.Service.updateBiome', input.biomeId, input.data);

    const updatedBiome = await ctx.app.model.Biome.findByIdAndUpdate(input.biomeId, input.data, { new: true })
      .lean()
      .exec();
    if (!updatedBiome) throw new Error('Biome update failed');

    return updatedBiome as Biome;
  }

  // BiomeFeature Methods
  async getBiomeFeature(
    input: RouterInput['getBiomeFeature'],
    ctx: RouterContext
  ): Promise<RouterOutput['getBiomeFeature']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Core.Service.getBiomeFeature', input.biomeFeatureId);

    const biomeFeature = await ctx.app.model.BiomeFeature.findById(input.biomeFeatureId).lean().exec();
    if (!biomeFeature) throw new Error('BiomeFeature not found');

    return biomeFeature as BiomeFeature;
  }

  async createBiomeFeature(
    input: RouterInput['createBiomeFeature'],
    ctx: RouterContext
  ): Promise<RouterOutput['createBiomeFeature']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Core.Service.createBiomeFeature', input);

    const biomeFeature = await ctx.app.model.BiomeFeature.create(input);
    return biomeFeature as BiomeFeature;
  }

  async updateBiomeFeature(
    input: RouterInput['updateBiomeFeature'],
    ctx: RouterContext
  ): Promise<RouterOutput['updateBiomeFeature']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Core.Service.updateBiomeFeature', input.biomeFeatureId, input.data);

    const updatedBiomeFeature = await ctx.app.model.BiomeFeature.findByIdAndUpdate(input.biomeFeatureId, input.data, {
      new: true,
    })
      .lean()
      .exec();
    if (!updatedBiomeFeature) throw new Error('BiomeFeature update failed');

    return updatedBiomeFeature as BiomeFeature;
  }
  // Collection Methods
  async getCollection(input: RouterInput['getCollection'], ctx: RouterContext): Promise<RouterOutput['getCollection']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Core.Service.getCollection', input.collectionId);

    const collection = await ctx.app.model.Collection.findById(input.collectionId).lean().exec();
    if (!collection) throw new Error('Collection not found');

    return collection as Collection;
  }

  async createCollection(
    input: RouterInput['createCollection'],
    ctx: RouterContext
  ): Promise<RouterOutput['createCollection']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Core.Service.createCollection', input);

    const collection = await ctx.app.model.Collection.create(input);
    return collection as Collection;
  }

  async updateCollection(
    input: RouterInput['updateCollection'],
    ctx: RouterContext
  ): Promise<RouterOutput['updateCollection']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Core.Service.updateCollection', input.collectionId, input.data);

    const updatedCollection = await ctx.app.model.Collection.findByIdAndUpdate(input.collectionId, input.data, {
      new: true,
    })
      .lean()
      .exec();
    if (!updatedCollection) throw new Error('Collection update failed');

    return updatedCollection as Collection;
  }

  // Comment Methods
  async getComment(input: RouterInput['getComment'], ctx: RouterContext): Promise<RouterOutput['getComment']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Core.Service.getComment', input.commentId);

    const comment = await ctx.app.model.Comment.findById(input.commentId).lean().exec();
    if (!comment) throw new Error('Comment not found');

    return comment as Comment;
  }

  async createComment(input: RouterInput['createComment'], ctx: RouterContext): Promise<RouterOutput['createComment']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Core.Service.createComment', input);

    const comment = await ctx.app.model.Comment.create(input);
    return comment as Comment;
  }

  async updateComment(input: RouterInput['updateComment'], ctx: RouterContext): Promise<RouterOutput['updateComment']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Core.Service.updateComment', input.commentId, input.data);

    const updatedComment = await ctx.app.model.Comment.findByIdAndUpdate(input.commentId, input.data, { new: true })
      .lean()
      .exec();
    if (!updatedComment) throw new Error('Comment update failed');

    return updatedComment as Comment;
  }

  // Community Methods
  async getCommunity(input: RouterInput['getCommunity'], ctx: RouterContext): Promise<RouterOutput['getCommunity']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Core.Service.getCommunity', input.communityId);

    const community = await ctx.app.model.Community.findById(input.communityId).lean().exec();
    if (!community) throw new Error('Community not found');

    return community as Community;
  }

  async createCommunity(
    input: RouterInput['createCommunity'],
    ctx: RouterContext
  ): Promise<RouterOutput['createCommunity']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Core.Service.createCommunity', input);

    const community = await ctx.app.model.Community.create(input);
    return community as Community;
  }

  async updateCommunity(
    input: RouterInput['updateCommunity'],
    ctx: RouterContext
  ): Promise<RouterOutput['updateCommunity']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Core.Service.updateCommunity', input.communityId, input.data);

    const updatedCommunity = await ctx.app.model.Community.findByIdAndUpdate(input.communityId, input.data, {
      new: true,
    })
      .lean()
      .exec();
    if (!updatedCommunity) throw new Error('Community update failed');

    return updatedCommunity as Community;
  }

  // Company Methods
  async getCompany(input: RouterInput['getCompany'], ctx: RouterContext): Promise<RouterOutput['getCompany']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Core.Service.getCompany', input.companyId);

    const company = await ctx.app.model.Company.findById(input.companyId).lean().exec();
    if (!company) throw new Error('Company not found');

    return company as Company;
  }

  async createCompany(input: RouterInput['createCompany'], ctx: RouterContext): Promise<RouterOutput['createCompany']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Core.Service.createCompany', input);

    const company = await ctx.app.model.Company.create(input);
    return company as Company;
  }

  async updateCompany(input: RouterInput['updateCompany'], ctx: RouterContext): Promise<RouterOutput['updateCompany']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Core.Service.updateCompany', input.companyId, input.data);

    const updatedCompany = await ctx.app.model.Company.findByIdAndUpdate(input.companyId, input.data, { new: true })
      .lean()
      .exec();
    if (!updatedCompany) throw new Error('Company update failed');

    return updatedCompany as Company;
  }

  // Conversation Methods
  async getConversation(
    input: RouterInput['getConversation'],
    ctx: RouterContext
  ): Promise<RouterOutput['getConversation']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Core.Service.getConversation', input.conversationId);

    const conversation = await ctx.app.model.Conversation.findById(input.conversationId).lean().exec();
    if (!conversation) throw new Error('Conversation not found');

    return conversation as Conversation;
  }

  async createConversation(
    input: RouterInput['createConversation'],
    ctx: RouterContext
  ): Promise<RouterOutput['createConversation']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Core.Service.createConversation', input);

    const conversation = await ctx.app.model.Conversation.create(input);
    return conversation as Conversation;
  }

  async updateConversation(
    input: RouterInput['updateConversation'],
    ctx: RouterContext
  ): Promise<RouterOutput['updateConversation']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Core.Service.updateConversation', input.conversationId, input.data);

    const updatedConversation = await ctx.app.model.Conversation.findByIdAndUpdate(input.conversationId, input.data, {
      new: true,
    })
      .lean()
      .exec();
    if (!updatedConversation) throw new Error('Conversation update failed');

    return updatedConversation as Conversation;
  }

  // Data Methods
  async getData(input: RouterInput['getData'], ctx: RouterContext): Promise<RouterOutput['getData']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Core.Service.getData', input.dataId);

    const data = await ctx.app.model.Data.findById(input.dataId).lean().exec();
    if (!data) throw new Error('Data not found');

    return data as Data;
  }

  async createData(input: RouterInput['createData'], ctx: RouterContext): Promise<RouterOutput['createData']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Core.Service.createData', input);

    const data = await ctx.app.model.Data.create(input);
    return data as Data;
  }

  async updateData(input: RouterInput['updateData'], ctx: RouterContext): Promise<RouterOutput['updateData']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Core.Service.updateData', input.dataId, input.data);

    const updatedData = await ctx.app.model.Data.findByIdAndUpdate(input.dataId, input.data, { new: true })
      .lean()
      .exec();
    if (!updatedData) throw new Error('Data update failed');

    return updatedData as Data;
  }

  // Discussion Methods
  async getDiscussion(input: RouterInput['getDiscussion'], ctx: RouterContext): Promise<RouterOutput['getDiscussion']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Core.Service.getDiscussion', input.discussionId);

    const discussion = await ctx.app.model.Discussion.findById(input.discussionId).lean().exec();
    if (!discussion) throw new Error('Discussion not found');

    return discussion as Discussion;
  }

  async createDiscussion(
    input: RouterInput['createDiscussion'],
    ctx: RouterContext
  ): Promise<RouterOutput['createDiscussion']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Core.Service.createDiscussion', input);

    const discussion = await ctx.app.model.Discussion.create(input);
    return discussion as Discussion;
  }

  async updateDiscussion(
    input: RouterInput['updateDiscussion'],
    ctx: RouterContext
  ): Promise<RouterOutput['updateDiscussion']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Core.Service.updateDiscussion', input.discussionId, input.data);

    const updatedDiscussion = await ctx.app.model.Discussion.findByIdAndUpdate(input.discussionId, input.data, {
      new: true,
    })
      .lean()
      .exec();
    if (!updatedDiscussion) throw new Error('Discussion update failed');

    return updatedDiscussion as Discussion;
  }

  // Energy Methods
  async getEnergy(input: RouterInput['getEnergy'], ctx: RouterContext): Promise<RouterOutput['getEnergy']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Core.Service.getEnergy', input.energyId);

    const energy = await ctx.app.model.Energy.findById(input.energyId).lean().exec();
    if (!energy) throw new Error('Energy not found');

    return energy as Energy;
  }

  async createEnergy(input: RouterInput['createEnergy'], ctx: RouterContext): Promise<RouterOutput['createEnergy']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Core.Service.createEnergy', input);

    const energy = await ctx.app.model.Energy.create(input);
    return energy as Energy;
  }

  async updateEnergy(input: RouterInput['updateEnergy'], ctx: RouterContext): Promise<RouterOutput['updateEnergy']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Core.Service.updateEnergy', input.energyId, input.data);

    const updatedEnergy = await ctx.app.model.Energy.findByIdAndUpdate(input.energyId, input.data, { new: true })
      .lean()
      .exec();
    if (!updatedEnergy) throw new Error('Energy update failed');

    return updatedEnergy as Energy;
  }

  // Event Methods
  async getEvent(input: RouterInput['getEvent'], ctx: RouterContext): Promise<RouterOutput['getEvent']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Core.Service.getEvent', input.eventId);

    const event = await ctx.app.model.Event.findById(input.eventId).lean().exec();
    if (!event) throw new Error('Event not found');

    return event as Event;
  }

  async createEvent(input: RouterInput['createEvent'], ctx: RouterContext): Promise<RouterOutput['createEvent']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Core.Service.createEvent', input);

    const event = await ctx.app.model.Event.create(input);
    return event as Event;
  }

  async updateEvent(input: RouterInput['updateEvent'], ctx: RouterContext): Promise<RouterOutput['updateEvent']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Core.Service.updateEvent', input.eventId, input.data);

    const updatedEvent = await ctx.app.model.Event.findByIdAndUpdate(input.eventId, input.data, { new: true })
      .lean()
      .exec();
    if (!updatedEvent) throw new Error('Event update failed');

    return updatedEvent as Event;
  }
  // File Methods
  async getFile(input: RouterInput['getFile'], ctx: RouterContext): Promise<RouterOutput['getFile']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Core.Service.getFile', input.fileId);

    const file = await ctx.app.model.File.findById(input.fileId).lean().exec();
    if (!file) throw new Error('File not found');

    return file as File;
  }

  async createFile(input: RouterInput['createFile'], ctx: RouterContext): Promise<RouterOutput['createFile']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Core.Service.createFile', input);

    const file = await ctx.app.model.File.create(input);
    return file as File;
  }

  async updateFile(input: RouterInput['updateFile'], ctx: RouterContext): Promise<RouterOutput['updateFile']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Core.Service.updateFile', input.fileId, input.data);

    const updatedFile = await ctx.app.model.File.findByIdAndUpdate(input.fileId, input.data, { new: true })
      .lean()
      .exec();
    if (!updatedFile) throw new Error('File update failed');

    return updatedFile as File;
  }

  // Galaxy Methods
  async getGalaxy(input: RouterInput['getGalaxy'], ctx: RouterContext): Promise<RouterOutput['getGalaxy']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Core.Service.getGalaxy', input.galaxyId);

    const galaxy = await ctx.app.model.Galaxy.findById(input.galaxyId).lean().exec();
    if (!galaxy) throw new Error('Galaxy not found');

    return galaxy as Galaxy;
  }

  async createGalaxy(input: RouterInput['createGalaxy'], ctx: RouterContext): Promise<RouterOutput['createGalaxy']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Core.Service.createGalaxy', input);

    const galaxy = await ctx.app.model.Galaxy.create(input);
    return galaxy as Galaxy;
  }

  async updateGalaxy(input: RouterInput['updateGalaxy'], ctx: RouterContext): Promise<RouterOutput['updateGalaxy']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Core.Service.updateGalaxy', input.galaxyId, input.data);

    const updatedGalaxy = await ctx.app.model.Galaxy.findByIdAndUpdate(input.galaxyId, input.data, { new: true })
      .lean()
      .exec();
    if (!updatedGalaxy) throw new Error('Galaxy update failed');

    return updatedGalaxy as Galaxy;
  }

  // Guide Methods
  async getGuide(input: RouterInput['getGuide'], ctx: RouterContext): Promise<RouterOutput['getGuide']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Core.Service.getGuide', input.guideId);

    const guide = await ctx.app.model.Guide.findById(input.guideId).lean().exec();
    if (!guide) throw new Error('Guide not found');

    return guide as Guide;
  }

  async createGuide(input: RouterInput['createGuide'], ctx: RouterContext): Promise<RouterOutput['createGuide']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Core.Service.createGuide', input);

    const guide = await ctx.app.model.Guide.create(input);
    return guide as Guide;
  }

  async updateGuide(input: RouterInput['updateGuide'], ctx: RouterContext): Promise<RouterOutput['updateGuide']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Core.Service.updateGuide', input.guideId, input.data);

    const updatedGuide = await ctx.app.model.Guide.findByIdAndUpdate(input.guideId, input.data, { new: true })
      .lean()
      .exec();
    if (!updatedGuide) throw new Error('Guide update failed');

    return updatedGuide as Guide;
  }

  // Idea Methods
  async getIdea(input: RouterInput['getIdea'], ctx: RouterContext): Promise<RouterOutput['getIdea']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Core.Service.getIdea', input.ideaId);

    const idea = await ctx.app.model.Idea.findById(input.ideaId).lean().exec();
    if (!idea) throw new Error('Idea not found');

    return idea as Idea;
  }

  async createIdea(input: RouterInput['createIdea'], ctx: RouterContext): Promise<RouterOutput['createIdea']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Core.Service.createIdea', input);

    const idea = await ctx.app.model.Idea.create(input);
    return idea as Idea;
  }

  async updateIdea(input: RouterInput['updateIdea'], ctx: RouterContext): Promise<RouterOutput['updateIdea']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Core.Service.updateIdea', input.ideaId, input.data);

    const updatedIdea = await ctx.app.model.Idea.findByIdAndUpdate(input.ideaId, input.data, { new: true })
      .lean()
      .exec();
    if (!updatedIdea) throw new Error('Idea update failed');

    return updatedIdea as Idea;
  }
  // Leaderboard Methods
  async getLeaderboard(
    input: RouterInput['getLeaderboard'],
    ctx: RouterContext
  ): Promise<RouterOutput['getLeaderboard']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Core.Service.getLeaderboard', input.leaderboardId);

    const leaderboard = await ctx.app.model.Leaderboard.findById(input.leaderboardId).lean().exec();
    if (!leaderboard) throw new Error('Leaderboard not found');

    return leaderboard as Leaderboard;
  }

  async createLeaderboard(
    input: RouterInput['createLeaderboard'],
    ctx: RouterContext
  ): Promise<RouterOutput['createLeaderboard']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Core.Service.createLeaderboard', input);

    const leaderboard = await ctx.app.model.Leaderboard.create(input);
    return leaderboard as Leaderboard;
  }

  async updateLeaderboard(
    input: RouterInput['updateLeaderboard'],
    ctx: RouterContext
  ): Promise<RouterOutput['updateLeaderboard']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Core.Service.updateLeaderboard', input.leaderboardId, input.data);

    const updatedLeaderboard = await ctx.app.model.Leaderboard.findByIdAndUpdate(input.leaderboardId, input.data, {
      new: true,
    })
      .lean()
      .exec();
    if (!updatedLeaderboard) throw new Error('Leaderboard update failed');

    return updatedLeaderboard as Leaderboard;
  }

  // Log Methods
  async getLog(input: RouterInput['getLog'], ctx: RouterContext): Promise<RouterOutput['getLog']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Core.Service.getLog', input.logId);

    const log = await ctx.app.model.Log.findById(input.logId).lean().exec();
    if (!log) throw new Error('Log not found');

    return log as Log;
  }

  async createLog(input: RouterInput['createLog'], ctx: RouterContext): Promise<RouterOutput['createLog']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Core.Service.createLog', input);

    const log = await ctx.app.model.Log.create(input);
    return log as Log;
  }

  async updateLog(input: RouterInput['updateLog'], ctx: RouterContext): Promise<RouterOutput['updateLog']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Core.Service.updateLog', input.logId, input.data);

    const updatedLog = await ctx.app.model.Log.findByIdAndUpdate(input.logId, input.data, { new: true }).lean().exec();
    if (!updatedLog) throw new Error('Log update failed');

    return updatedLog as Log;
  }

  // Lore Methods
  async getLore(input: RouterInput['getLore'], ctx: RouterContext): Promise<RouterOutput['getLore']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Core.Service.getLore', input.loreId);

    const lore = await ctx.app.model.Lore.findById(input.loreId).lean().exec();
    if (!lore) throw new Error('Lore not found');

    return lore as Lore;
  }

  async createLore(input: RouterInput['createLore'], ctx: RouterContext): Promise<RouterOutput['createLore']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Core.Service.createLore', input);

    const lore = await ctx.app.model.Lore.create(input);
    return lore as Lore;
  }

  async updateLore(input: RouterInput['updateLore'], ctx: RouterContext): Promise<RouterOutput['updateLore']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Core.Service.updateLore', input.loreId, input.data);

    const updatedLore = await ctx.app.model.Lore.findByIdAndUpdate(input.loreId, input.data, { new: true })
      .lean()
      .exec();
    if (!updatedLore) throw new Error('Lore update failed');

    return updatedLore as Lore;
  }

  // Memory Methods
  async getMemory(input: RouterInput['getMemory'], ctx: RouterContext): Promise<RouterOutput['getMemory']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Core.Service.getMemory', input.memoryId);

    const memory = await ctx.app.model.Memory.findById(input.memoryId).lean().exec();
    if (!memory) throw new Error('Memory not found');

    return memory as Memory;
  }

  async createMemory(input: RouterInput['createMemory'], ctx: RouterContext): Promise<RouterOutput['createMemory']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Core.Service.createMemory', input);

    const memory = await ctx.app.model.Memory.create(input);
    return memory as Memory;
  }

  async updateMemory(input: RouterInput['updateMemory'], ctx: RouterContext): Promise<RouterOutput['updateMemory']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Core.Service.updateMemory', input.memoryId, input.data);

    const updatedMemory = await ctx.app.model.Memory.findByIdAndUpdate(input.memoryId, input.data, { new: true })
      .lean()
      .exec();
    if (!updatedMemory) throw new Error('Memory update failed');

    return updatedMemory as Memory;
  }
  // Message Methods
  async getMessage(input: RouterInput['getMessage'], ctx: RouterContext): Promise<RouterOutput['getMessage']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Core.Service.getMessage', input.messageId);

    const message = await ctx.app.model.Message.findById(input.messageId).lean().exec();
    if (!message) throw new Error('Message not found');

    return message as Message;
  }

  async createMessage(input: RouterInput['createMessage'], ctx: RouterContext): Promise<RouterOutput['createMessage']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Core.Service.createMessage', input);

    const message = await ctx.app.model.Message.create(input);
    return message as Message;
  }

  async updateMessage(input: RouterInput['updateMessage'], ctx: RouterContext): Promise<RouterOutput['updateMessage']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Core.Service.updateMessage', input.messageId, input.data);

    const updatedMessage = await ctx.app.model.Message.findByIdAndUpdate(input.messageId, input.data, { new: true })
      .lean()
      .exec();
    if (!updatedMessage) throw new Error('Message update failed');

    return updatedMessage as Message;
  }

  // Metaverse Methods
  async getMetaverse(input: RouterInput['getMetaverse'], ctx: RouterContext): Promise<RouterOutput['getMetaverse']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Core.Service.getMetaverse', input.metaverseId);

    const metaverse = await ctx.app.model.Metaverse.findById(input.metaverseId).lean().exec();
    if (!metaverse) throw new Error('Metaverse not found');

    return metaverse as Metaverse;
  }

  async createMetaverse(
    input: RouterInput['createMetaverse'],
    ctx: RouterContext
  ): Promise<RouterOutput['createMetaverse']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Core.Service.createMetaverse', input);

    const metaverse = await ctx.app.model.Metaverse.create(input);
    return metaverse as Metaverse;
  }

  async updateMetaverse(
    input: RouterInput['updateMetaverse'],
    ctx: RouterContext
  ): Promise<RouterOutput['updateMetaverse']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Core.Service.updateMetaverse', input.metaverseId, input.data);

    const updatedMetaverse = await ctx.app.model.Metaverse.findByIdAndUpdate(input.metaverseId, input.data, {
      new: true,
    })
      .lean()
      .exec();
    if (!updatedMetaverse) throw new Error('Metaverse update failed');

    return updatedMetaverse as Metaverse;
  }

  // NewsArticle Methods
  async getNewsArticle(
    input: RouterInput['getNewsArticle'],
    ctx: RouterContext
  ): Promise<RouterOutput['getNewsArticle']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Core.Service.getNewsArticle', input.newsArticleId);

    const newsArticle = await ctx.app.model.NewsArticle.findById(input.newsArticleId).lean().exec();
    if (!newsArticle) throw new Error('NewsArticle not found');

    return newsArticle as NewsArticle;
  }

  async createNewsArticle(
    input: RouterInput['createNewsArticle'],
    ctx: RouterContext
  ): Promise<RouterOutput['createNewsArticle']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Core.Service.createNewsArticle', input);

    const newsArticle = await ctx.app.model.NewsArticle.create(input);
    return newsArticle as NewsArticle;
  }

  async updateNewsArticle(
    input: RouterInput['updateNewsArticle'],
    ctx: RouterContext
  ): Promise<RouterOutput['updateNewsArticle']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Core.Service.updateNewsArticle', input.newsArticleId, input.data);

    const updatedNewsArticle = await ctx.app.model.NewsArticle.findByIdAndUpdate(input.newsArticleId, input.data, {
      new: true,
    })
      .lean()
      .exec();
    if (!updatedNewsArticle) throw new Error('NewsArticle update failed');

    return updatedNewsArticle as NewsArticle;
  }

  // Npc Methods
  async getNpc(input: RouterInput['getNpc'], ctx: RouterContext): Promise<RouterOutput['getNpc']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Core.Service.getNpc', input.npcId);

    const npc = await ctx.app.model.Npc.findById(input.npcId).lean().exec();
    if (!npc) throw new Error('Npc not found');

    return npc as Npc;
  }

  async createNpc(input: RouterInput['createNpc'], ctx: RouterContext): Promise<RouterOutput['createNpc']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Core.Service.createNpc', input);

    const npc = await ctx.app.model.Npc.create(input);
    return npc as Npc;
  }

  async updateNpc(input: RouterInput['updateNpc'], ctx: RouterContext): Promise<RouterOutput['updateNpc']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Core.Service.updateNpc', input.npcId, input.data);

    const updatedNpc = await ctx.app.model.Npc.findByIdAndUpdate(input.npcId, input.data, { new: true }).lean().exec();
    if (!updatedNpc) throw new Error('Npc update failed');

    return updatedNpc as Npc;
  }
  // Offer Methods
  async getOffer(input: RouterInput['getOffer'], ctx: RouterContext): Promise<RouterOutput['getOffer']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Core.Service.getOffer', input.offerId);

    const offer = await ctx.app.model.Offer.findById(input.offerId).lean().exec();
    if (!offer) throw new Error('Offer not found');

    return offer as Offer;
  }

  async createOffer(input: RouterInput['createOffer'], ctx: RouterContext): Promise<RouterOutput['createOffer']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Core.Service.createOffer', input);

    const offer = await ctx.app.model.Offer.create(input);
    return offer as Offer;
  }

  async updateOffer(input: RouterInput['updateOffer'], ctx: RouterContext): Promise<RouterOutput['updateOffer']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Core.Service.updateOffer', input.offerId, input.data);

    const updatedOffer = await ctx.app.model.Offer.findByIdAndUpdate(input.offerId, input.data, { new: true })
      .lean()
      .exec();
    if (!updatedOffer) throw new Error('Offer update failed');

    return updatedOffer as Offer;
  }

  // Omniverse Methods
  async getOmniverse(input: RouterInput['getOmniverse'], ctx: RouterContext): Promise<RouterOutput['getOmniverse']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Core.Service.getOmniverse', input.omniverseId);

    const omniverse = await ctx.app.model.Omniverse.findById(input.omniverseId).lean().exec();
    if (!omniverse) throw new Error('Omniverse not found');

    return omniverse as Omniverse;
  }

  async createOmniverse(
    input: RouterInput['createOmniverse'],
    ctx: RouterContext
  ): Promise<RouterOutput['createOmniverse']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Core.Service.createOmniverse', input);

    const omniverse = await ctx.app.model.Omniverse.create(input);
    return omniverse as Omniverse;
  }

  async updateOmniverse(
    input: RouterInput['updateOmniverse'],
    ctx: RouterContext
  ): Promise<RouterOutput['updateOmniverse']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Core.Service.updateOmniverse', input.omniverseId, input.data);

    const updatedOmniverse = await ctx.app.model.Omniverse.findByIdAndUpdate(input.omniverseId, input.data, {
      new: true,
    })
      .lean()
      .exec();
    if (!updatedOmniverse) throw new Error('Omniverse update failed');

    return updatedOmniverse as Omniverse;
  }

  // Order Methods
  async getOrder(input: RouterInput['getOrder'], ctx: RouterContext): Promise<RouterOutput['getOrder']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Core.Service.getOrder', input.orderId);

    const order = await ctx.app.model.Order.findById(input.orderId).lean().exec();
    if (!order) throw new Error('Order not found');

    return order as Order;
  }

  async createOrder(input: RouterInput['createOrder'], ctx: RouterContext): Promise<RouterOutput['createOrder']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Core.Service.createOrder', input);

    const order = await ctx.app.model.Order.create(input);
    return order as Order;
  }

  async updateOrder(input: RouterInput['updateOrder'], ctx: RouterContext): Promise<RouterOutput['updateOrder']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Core.Service.updateOrder', input.orderId, input.data);

    const updatedOrder = await ctx.app.model.Order.findByIdAndUpdate(input.orderId, input.data, { new: true })
      .lean()
      .exec();
    if (!updatedOrder) throw new Error('Order update failed');

    return updatedOrder as Order;
  }

  // Payment Methods
  async getPayment(input: RouterInput['getPayment'], ctx: RouterContext): Promise<RouterOutput['getPayment']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Core.Service.getPayment', input.paymentId);

    const payment = await ctx.app.model.Payment.findById(input.paymentId).lean().exec();
    if (!payment) throw new Error('Payment not found');

    return payment as Payment;
  }

  async createPayment(input: RouterInput['createPayment'], ctx: RouterContext): Promise<RouterOutput['createPayment']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Core.Service.createPayment', input);

    const payment = await ctx.app.model.Payment.create(input);
    return payment as Payment;
  }

  async updatePayment(input: RouterInput['updatePayment'], ctx: RouterContext): Promise<RouterOutput['updatePayment']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Core.Service.updatePayment', input.paymentId, input.data);

    const updatedPayment = await ctx.app.model.Payment.findByIdAndUpdate(input.paymentId, input.data, { new: true })
      .lean()
      .exec();
    if (!updatedPayment) throw new Error('Payment update failed');

    return updatedPayment as Payment;
  }
  // Permission Methods
  async getPermission(input: RouterInput['getPermission'], ctx: RouterContext): Promise<RouterOutput['getPermission']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Core.Service.getPermission', input.permissionId);

    const permission = await ctx.app.model.Permission.findById(input.permissionId).lean().exec();
    if (!permission) throw new Error('Permission not found');

    return permission as Permission;
  }

  async createPermission(
    input: RouterInput['createPermission'],
    ctx: RouterContext
  ): Promise<RouterOutput['createPermission']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Core.Service.createPermission', input);

    const permission = await ctx.app.model.Permission.create(input);
    return permission as Permission;
  }

  async updatePermission(
    input: RouterInput['updatePermission'],
    ctx: RouterContext
  ): Promise<RouterOutput['updatePermission']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Core.Service.updatePermission', input.permissionId, input.data);

    const updatedPermission = await ctx.app.model.Permission.findByIdAndUpdate(input.permissionId, input.data, {
      new: true,
    })
      .lean()
      .exec();
    if (!updatedPermission) throw new Error('Permission update failed');

    return updatedPermission as Permission;
  }

  // Person Methods
  async getPerson(input: RouterInput['getPerson'], ctx: RouterContext): Promise<RouterOutput['getPerson']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Core.Service.getPerson', input.personId);

    const person = await ctx.app.model.Person.findById(input.personId).lean().exec();
    if (!person) throw new Error('Person not found');

    return person as Person;
  }

  async createPerson(input: RouterInput['createPerson'], ctx: RouterContext): Promise<RouterOutput['createPerson']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Core.Service.createPerson', input);

    const person = await ctx.app.model.Person.create(input);
    return person as Person;
  }

  async updatePerson(input: RouterInput['updatePerson'], ctx: RouterContext): Promise<RouterOutput['updatePerson']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Core.Service.updatePerson', input.personId, input.data);

    const updatedPerson = await ctx.app.model.Person.findByIdAndUpdate(input.personId, input.data, { new: true })
      .lean()
      .exec();
    if (!updatedPerson) throw new Error('Person update failed');

    return updatedPerson as Person;
  }

  // Planet Methods
  async getPlanet(input: RouterInput['getPlanet'], ctx: RouterContext): Promise<RouterOutput['getPlanet']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Core.Service.getPlanet', input.planetId);

    const planet = await ctx.app.model.Planet.findById(input.planetId).lean().exec();
    if (!planet) throw new Error('Planet not found');

    return planet as Planet;
  }

  async createPlanet(input: RouterInput['createPlanet'], ctx: RouterContext): Promise<RouterOutput['createPlanet']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Core.Service.createPlanet', input);

    const planet = await ctx.app.model.Planet.create(input);
    return planet as Planet;
  }

  async updatePlanet(input: RouterInput['updatePlanet'], ctx: RouterContext): Promise<RouterOutput['updatePlanet']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Core.Service.updatePlanet', input.planetId, input.data);

    const updatedPlanet = await ctx.app.model.Planet.findByIdAndUpdate(input.planetId, input.data, { new: true })
      .lean()
      .exec();
    if (!updatedPlanet) throw new Error('Planet update failed');

    return updatedPlanet as Planet;
  }

  // Poll Methods
  async getPoll(input: RouterInput['getPoll'], ctx: RouterContext): Promise<RouterOutput['getPoll']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Core.Service.getPoll', input.pollId);

    const poll = await ctx.app.model.Poll.findById(input.pollId).lean().exec();
    if (!poll) throw new Error('Poll not found');

    return poll as Poll;
  }

  async createPoll(input: RouterInput['createPoll'], ctx: RouterContext): Promise<RouterOutput['createPoll']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Core.Service.createPoll', input);

    const poll = await ctx.app.model.Poll.create(input);
    return poll as Poll;
  }

  async updatePoll(input: RouterInput['updatePoll'], ctx: RouterContext): Promise<RouterOutput['updatePoll']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Core.Service.updatePoll', input.pollId, input.data);

    const updatedPoll = await ctx.app.model.Poll.findByIdAndUpdate(input.pollId, input.data, { new: true })
      .lean()
      .exec();
    if (!updatedPoll) throw new Error('Poll update failed');

    return updatedPoll as Poll;
  }
  // Project Methods
  async getProject(input: RouterInput['getProject'], ctx: RouterContext): Promise<RouterOutput['getProject']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Core.Service.getProject', input.projectId);

    const project = await ctx.app.model.Project.findById(input.projectId).lean().exec();
    if (!project) throw new Error('Project not found');

    return project as Project;
  }

  async createProject(input: RouterInput['createProject'], ctx: RouterContext): Promise<RouterOutput['createProject']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Core.Service.createProject', input);

    const project = await ctx.app.model.Project.create(input);
    return project as Project;
  }

  async updateProject(input: RouterInput['updateProject'], ctx: RouterContext): Promise<RouterOutput['updateProject']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Core.Service.updateProject', input.projectId, input.data);

    const updatedProject = await ctx.app.model.Project.findByIdAndUpdate(input.projectId, input.data, { new: true })
      .lean()
      .exec();
    if (!updatedProject) throw new Error('Project update failed');

    return updatedProject as Project;
  }

  // Proposal Methods
  async getProposal(input: RouterInput['getProposal'], ctx: RouterContext): Promise<RouterOutput['getProposal']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Core.Service.getProposal', input.proposalId);

    const proposal = await ctx.app.model.Proposal.findById(input.proposalId).lean().exec();
    if (!proposal) throw new Error('Proposal not found');

    return proposal as Proposal;
  }

  async createProposal(
    input: RouterInput['createProposal'],
    ctx: RouterContext
  ): Promise<RouterOutput['createProposal']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Core.Service.createProposal', input);

    const proposal = await ctx.app.model.Proposal.create(input);
    return proposal as Proposal;
  }

  async updateProposal(
    input: RouterInput['updateProposal'],
    ctx: RouterContext
  ): Promise<RouterOutput['updateProposal']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Core.Service.updateProposal', input.proposalId, input.data);

    const updatedProposal = await ctx.app.model.Proposal.findByIdAndUpdate(input.proposalId, input.data, { new: true })
      .lean()
      .exec();
    if (!updatedProposal) throw new Error('Proposal update failed');

    return updatedProposal as Proposal;
  }

  // Quest Methods
  async getQuest(input: RouterInput['getQuest'], ctx: RouterContext): Promise<RouterOutput['getQuest']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Core.Service.getQuest', input.questId);

    const quest = await ctx.app.model.Quest.findById(input.questId).lean().exec();
    if (!quest) throw new Error('Quest not found');

    return quest as Quest;
  }

  async createQuest(input: RouterInput['createQuest'], ctx: RouterContext): Promise<RouterOutput['createQuest']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Core.Service.createQuest', input);

    const quest = await ctx.app.model.Quest.create(input);
    return quest as Quest;
  }

  async updateQuest(input: RouterInput['updateQuest'], ctx: RouterContext): Promise<RouterOutput['updateQuest']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Core.Service.updateQuest', input.questId, input.data);

    const updatedQuest = await ctx.app.model.Quest.findByIdAndUpdate(input.questId, input.data, { new: true })
      .lean()
      .exec();
    if (!updatedQuest) throw new Error('Quest update failed');

    return updatedQuest as Quest;
  }

  // Rating Methods
  async getRating(input: RouterInput['getRating'], ctx: RouterContext): Promise<RouterOutput['getRating']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Core.Service.getRating', input.ratingId);

    const rating = await ctx.app.model.Rating.findById(input.ratingId).lean().exec();
    if (!rating) throw new Error('Rating not found');

    return rating as Rating;
  }

  async createRating(input: RouterInput['createRating'], ctx: RouterContext): Promise<RouterOutput['createRating']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Core.Service.createRating', input);

    const rating = await ctx.app.model.Rating.create(input);
    return rating as Rating;
  }

  async updateRating(input: RouterInput['updateRating'], ctx: RouterContext): Promise<RouterOutput['updateRating']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Core.Service.updateRating', input.ratingId, input.data);

    const updatedRating = await ctx.app.model.Rating.findByIdAndUpdate(input.ratingId, input.data, { new: true })
      .lean()
      .exec();
    if (!updatedRating) throw new Error('Rating update failed');

    return updatedRating as Rating;
  }
  // Realm Methods
  async getRealm(input: RouterInput['getRealm'], ctx: RouterContext): Promise<RouterOutput['getRealm']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Core.Service.getRealm', input.realmId);

    const realm = await ctx.app.model.Realm.findById(input.realmId).lean().exec();
    if (!realm) throw new Error('Realm not found');

    return realm as Realm;
  }

  async createRealm(input: RouterInput['createRealm'], ctx: RouterContext): Promise<RouterOutput['createRealm']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Core.Service.createRealm', input);

    const realm = await ctx.app.model.Realm.create(input);
    return realm as Realm;
  }

  async updateRealm(input: RouterInput['updateRealm'], ctx: RouterContext): Promise<RouterOutput['updateRealm']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Core.Service.updateRealm', input.realmId, input.data);

    const updatedRealm = await ctx.app.model.Realm.findByIdAndUpdate(input.realmId, input.data, { new: true })
      .lean()
      .exec();
    if (!updatedRealm) throw new Error('Realm update failed');

    return updatedRealm as Realm;
  }

  // RecordUpdate Methods
  async getRecordUpdate(
    input: RouterInput['getRecordUpdate'],
    ctx: RouterContext
  ): Promise<RouterOutput['getRecordUpdate']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Core.Service.getRecordUpdate', input.recordUpdateId);

    const recordUpdate = await ctx.app.model.RecordUpdate.findById(input.recordUpdateId).lean().exec();
    if (!recordUpdate) throw new Error('RecordUpdate not found');

    return recordUpdate as RecordUpdate;
  }

  async createRecordUpdate(
    input: RouterInput['createRecordUpdate'],
    ctx: RouterContext
  ): Promise<RouterOutput['createRecordUpdate']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Core.Service.createRecordUpdate', input);

    const recordUpdate = await ctx.app.model.RecordUpdate.create(input);
    return recordUpdate as RecordUpdate;
  }

  async updateRecordUpdate(
    input: RouterInput['updateRecordUpdate'],
    ctx: RouterContext
  ): Promise<RouterOutput['updateRecordUpdate']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Core.Service.updateRecordUpdate', input.recordUpdateId, input.data);

    const updatedRecordUpdate = await ctx.app.model.RecordUpdate.findByIdAndUpdate(input.recordUpdateId, input.data, {
      new: true,
    })
      .lean()
      .exec();
    if (!updatedRecordUpdate) throw new Error('RecordUpdate update failed');

    return updatedRecordUpdate as RecordUpdate;
  }

  // Referral Methods
  async getReferral(input: RouterInput['getReferral'], ctx: RouterContext): Promise<RouterOutput['getReferral']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Core.Service.getReferral', input.referralId);

    const referral = await ctx.app.model.Referral.findById(input.referralId).lean().exec();
    if (!referral) throw new Error('Referral not found');

    return referral as Referral;
  }

  async createReferral(
    input: RouterInput['createReferral'],
    ctx: RouterContext
  ): Promise<RouterOutput['createReferral']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Core.Service.createReferral', input);

    const referral = await ctx.app.model.Referral.create(input);
    return referral as Referral;
  }

  async updateReferral(
    input: RouterInput['updateReferral'],
    ctx: RouterContext
  ): Promise<RouterOutput['updateReferral']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Core.Service.updateReferral', input.referralId, input.data);

    const updatedReferral = await ctx.app.model.Referral.findByIdAndUpdate(input.referralId, input.data, { new: true })
      .lean()
      .exec();
    if (!updatedReferral) throw new Error('Referral update failed');

    return updatedReferral as Referral;
  }

  // Review Methods
  async getReview(input: RouterInput['getReview'], ctx: RouterContext): Promise<RouterOutput['getReview']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Core.Service.getReview', input.reviewId);

    const review = await ctx.app.model.Review.findById(input.reviewId).lean().exec();
    if (!review) throw new Error('Review not found');

    return review as Review;
  }

  async createReview(input: RouterInput['createReview'], ctx: RouterContext): Promise<RouterOutput['createReview']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Core.Service.createReview', input);

    const review = await ctx.app.model.Review.create(input);
    return review as Review;
  }

  async updateReview(input: RouterInput['updateReview'], ctx: RouterContext): Promise<RouterOutput['updateReview']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Core.Service.updateReview', input.reviewId, input.data);

    const updatedReview = await ctx.app.model.Review.findByIdAndUpdate(input.reviewId, input.data, { new: true })
      .lean()
      .exec();
    if (!updatedReview) throw new Error('Review update failed');

    return updatedReview as Review;
  } // Role Methods
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

  // Season Methods
  async getSeason(input: RouterInput['getSeason'], ctx: RouterContext): Promise<RouterOutput['getSeason']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Core.Service.getSeason', input.seasonId);

    const season = await ctx.app.model.Season.findById(input.seasonId).lean().exec();
    if (!season) throw new Error('Season not found');

    return season as Season;
  }

  async createSeason(input: RouterInput['createSeason'], ctx: RouterContext): Promise<RouterOutput['createSeason']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Core.Service.createSeason', input);

    const season = await ctx.app.model.Season.create(input);
    return season as Season;
  }

  async updateSeason(input: RouterInput['updateSeason'], ctx: RouterContext): Promise<RouterOutput['updateSeason']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Core.Service.updateSeason', input.seasonId, input.data);

    const updatedSeason = await ctx.app.model.Season.findByIdAndUpdate(input.seasonId, input.data, { new: true })
      .lean()
      .exec();
    if (!updatedSeason) throw new Error('Season update failed');

    return updatedSeason as Season;
  }

  // Server Methods
  async getServer(input: RouterInput['getServer'], ctx: RouterContext): Promise<RouterOutput['getServer']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Core.Service.getServer', input.serverId);

    const server = await ctx.app.model.Server.findById(input.serverId).lean().exec();
    if (!server) throw new Error('Server not found');

    return server as Server;
  }

  async createServer(input: RouterInput['createServer'], ctx: RouterContext): Promise<RouterOutput['createServer']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Core.Service.createServer', input);

    const server = await ctx.app.model.Server.create(input);
    return server as Server;
  }

  async updateServer(input: RouterInput['updateServer'], ctx: RouterContext): Promise<RouterOutput['updateServer']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Core.Service.updateServer', input.serverId, input.data);

    const updatedServer = await ctx.app.model.Server.findByIdAndUpdate(input.serverId, input.data, { new: true })
      .lean()
      .exec();
    if (!updatedServer) throw new Error('Server update failed');

    return updatedServer as Server;
  }

  // Session Methods
  async getSession(input: RouterInput['getSession'], ctx: RouterContext): Promise<RouterOutput['getSession']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Core.Service.getSession', input.sessionId);

    const session = await ctx.app.model.Session.findById(input.sessionId).lean().exec();
    if (!session) throw new Error('Session not found');

    return session as Session;
  }

  async createSession(input: RouterInput['createSession'], ctx: RouterContext): Promise<RouterOutput['createSession']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Core.Service.createSession', input);

    const session = await ctx.app.model.Session.create(input);
    return session as Session;
  }

  async updateSession(input: RouterInput['updateSession'], ctx: RouterContext): Promise<RouterOutput['updateSession']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Core.Service.updateSession', input.sessionId, input.data);

    const updatedSession = await ctx.app.model.Session.findByIdAndUpdate(input.sessionId, input.data, { new: true })
      .lean()
      .exec();
    if (!updatedSession) throw new Error('Session update failed');

    return updatedSession as Session;
  }
  // SolarSystem Methods
  async getSolarSystem(
    input: RouterInput['getSolarSystem'],
    ctx: RouterContext
  ): Promise<RouterOutput['getSolarSystem']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Core.Service.getSolarSystem', input.solarSystemId);

    const solarSystem = await ctx.app.model.SolarSystem.findById(input.solarSystemId).lean().exec();
    if (!solarSystem) throw new Error('SolarSystem not found');

    return solarSystem as SolarSystem;
  }

  async createSolarSystem(
    input: RouterInput['createSolarSystem'],
    ctx: RouterContext
  ): Promise<RouterOutput['createSolarSystem']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Core.Service.createSolarSystem', input);

    const solarSystem = await ctx.app.model.SolarSystem.create(input);
    return solarSystem as SolarSystem;
  }

  async updateSolarSystem(
    input: RouterInput['updateSolarSystem'],
    ctx: RouterContext
  ): Promise<RouterOutput['updateSolarSystem']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Core.Service.updateSolarSystem', input.solarSystemId, input.data);

    const updatedSolarSystem = await ctx.app.model.SolarSystem.findByIdAndUpdate(input.solarSystemId, input.data, {
      new: true,
    })
      .lean()
      .exec();
    if (!updatedSolarSystem) throw new Error('SolarSystem update failed');

    return updatedSolarSystem as SolarSystem;
  }

  // Star Methods
  async getStar(input: RouterInput['getStar'], ctx: RouterContext): Promise<RouterOutput['getStar']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Core.Service.getStar', input.starId);

    const star = await ctx.app.model.Star.findById(input.starId).lean().exec();
    if (!star) throw new Error('Star not found');

    return star as Star;
  }

  async createStar(input: RouterInput['createStar'], ctx: RouterContext): Promise<RouterOutput['createStar']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Core.Service.createStar', input);

    const star = await ctx.app.model.Star.create(input);
    return star as Star;
  }

  async updateStar(input: RouterInput['updateStar'], ctx: RouterContext): Promise<RouterOutput['updateStar']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Core.Service.updateStar', input.starId, input.data);

    const updatedStar = await ctx.app.model.Star.findByIdAndUpdate(input.starId, input.data, { new: true })
      .lean()
      .exec();
    if (!updatedStar) throw new Error('Star update failed');

    return updatedStar as Star;
  }

  // Stash Methods
  async getStash(input: RouterInput['getStash'], ctx: RouterContext): Promise<RouterOutput['getStash']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Core.Service.getStash', input.stashId);

    const stash = await ctx.app.model.Stash.findById(input.stashId).lean().exec();
    if (!stash) throw new Error('Stash not found');

    return stash as Stash;
  }

  async createStash(input: RouterInput['createStash'], ctx: RouterContext): Promise<RouterOutput['createStash']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Core.Service.createStash', input);

    const stash = await ctx.app.model.Stash.create(input);
    return stash as Stash;
  }

  async updateStash(input: RouterInput['updateStash'], ctx: RouterContext): Promise<RouterOutput['updateStash']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Core.Service.updateStash', input.stashId, input.data);

    const updatedStash = await ctx.app.model.Stash.findByIdAndUpdate(input.stashId, input.data, { new: true })
      .lean()
      .exec();
    if (!updatedStash) throw new Error('Stash update failed');

    return updatedStash as Stash;
  }

  // Stock Methods
  async getStock(input: RouterInput['getStock'], ctx: RouterContext): Promise<RouterOutput['getStock']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Core.Service.getStock', input.stockId);

    const stock = await ctx.app.model.Stock.findById(input.stockId).lean().exec();
    if (!stock) throw new Error('Stock not found');

    return stock as Stock;
  }

  async createStock(input: RouterInput['createStock'], ctx: RouterContext): Promise<RouterOutput['createStock']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Core.Service.createStock', input);

    const stock = await ctx.app.model.Stock.create(input);
    return stock as Stock;
  }

  async updateStock(input: RouterInput['updateStock'], ctx: RouterContext): Promise<RouterOutput['updateStock']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Core.Service.updateStock', input.stockId, input.data);

    const updatedStock = await ctx.app.model.Stock.findByIdAndUpdate(input.stockId, input.data, { new: true })
      .lean()
      .exec();
    if (!updatedStock) throw new Error('Stock update failed');

    return updatedStock as Stock;
  } // Suggestion Methods
  async getSuggestion(input: RouterInput['getSuggestion'], ctx: RouterContext): Promise<RouterOutput['getSuggestion']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Core.Service.getSuggestion', input.suggestionId);

    const suggestion = await ctx.app.model.Suggestion.findById(input.suggestionId).lean().exec();
    if (!suggestion) throw new Error('Suggestion not found');

    return suggestion as Suggestion;
  }

  async createSuggestion(
    input: RouterInput['createSuggestion'],
    ctx: RouterContext
  ): Promise<RouterOutput['createSuggestion']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Core.Service.createSuggestion', input);

    const suggestion = await ctx.app.model.Suggestion.create(input);
    return suggestion as Suggestion;
  }

  async updateSuggestion(
    input: RouterInput['updateSuggestion'],
    ctx: RouterContext
  ): Promise<RouterOutput['updateSuggestion']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Core.Service.updateSuggestion', input.suggestionId, input.data);

    const updatedSuggestion = await ctx.app.model.Suggestion.findByIdAndUpdate(input.suggestionId, input.data, {
      new: true,
    })
      .lean()
      .exec();
    if (!updatedSuggestion) throw new Error('Suggestion update failed');

    return updatedSuggestion as Suggestion;
  }

  // Tag Methods
  async getTag(input: RouterInput['getTag'], ctx: RouterContext): Promise<RouterOutput['getTag']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Core.Service.getTag', input.tagId);

    const tag = await ctx.app.model.Tag.findById(input.tagId).lean().exec();
    if (!tag) throw new Error('Tag not found');

    return tag as Tag;
  }

  async createTag(input: RouterInput['createTag'], ctx: RouterContext): Promise<RouterOutput['createTag']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Core.Service.createTag', input);

    const tag = await ctx.app.model.Tag.create(input);
    return tag as Tag;
  }

  async updateTag(input: RouterInput['updateTag'], ctx: RouterContext): Promise<RouterOutput['updateTag']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Core.Service.updateTag', input.tagId, input.data);

    const updatedTag = await ctx.app.model.Tag.findByIdAndUpdate(input.tagId, input.data, { new: true }).lean().exec();
    if (!updatedTag) throw new Error('Tag update failed');

    return updatedTag as Tag;
  }

  // Team Methods
  async getTeam(input: RouterInput['getTeam'], ctx: RouterContext): Promise<RouterOutput['getTeam']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Core.Service.getTeam', input.teamId);

    const team = await ctx.app.model.Team.findById(input.teamId).lean().exec();
    if (!team) throw new Error('Team not found');

    return team as Team;
  }

  async createTeam(input: RouterInput['createTeam'], ctx: RouterContext): Promise<RouterOutput['createTeam']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Core.Service.createTeam', input);

    const team = await ctx.app.model.Team.create(input);
    return team as Team;
  }

  async updateTeam(input: RouterInput['updateTeam'], ctx: RouterContext): Promise<RouterOutput['updateTeam']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Core.Service.updateTeam', input.teamId, input.data);

    const updatedTeam = await ctx.app.model.Team.findByIdAndUpdate(input.teamId, input.data, { new: true })
      .lean()
      .exec();
    if (!updatedTeam) throw new Error('Team update failed');

    return updatedTeam as Team;
  }

  // Tournament Methods
  async getTournament(input: RouterInput['getTournament'], ctx: RouterContext): Promise<RouterOutput['getTournament']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Core.Service.getTournament', input.tournamentId);

    const tournament = await ctx.app.model.Tournament.findById(input.tournamentId).lean().exec();
    if (!tournament) throw new Error('Tournament not found');

    return tournament as Tournament;
  }

  async createTournament(
    input: RouterInput['createTournament'],
    ctx: RouterContext
  ): Promise<RouterOutput['createTournament']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Core.Service.createTournament', input);

    const tournament = await ctx.app.model.Tournament.create(input);
    return tournament as Tournament;
  }

  async updateTournament(
    input: RouterInput['updateTournament'],
    ctx: RouterContext
  ): Promise<RouterOutput['updateTournament']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Core.Service.updateTournament', input.tournamentId, input.data);

    const updatedTournament = await ctx.app.model.Tournament.findByIdAndUpdate(input.tournamentId, input.data, {
      new: true,
    })
      .lean()
      .exec();
    if (!updatedTournament) throw new Error('Tournament update failed');

    return updatedTournament as Tournament;
  }
  // Trade Methods
  async getTrade(input: RouterInput['getTrade'], ctx: RouterContext): Promise<RouterOutput['getTrade']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Core.Service.getTrade', input.tradeId);

    const trade = await ctx.app.model.Trade.findById(input.tradeId).lean().exec();
    if (!trade) throw new Error('Trade not found');

    return trade as Trade;
  }

  async createTrade(input: RouterInput['createTrade'], ctx: RouterContext): Promise<RouterOutput['createTrade']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Core.Service.createTrade', input);

    const trade = await ctx.app.model.Trade.create(input);
    return trade as Trade;
  }

  async updateTrade(input: RouterInput['updateTrade'], ctx: RouterContext): Promise<RouterOutput['updateTrade']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Core.Service.updateTrade', input.tradeId, input.data);

    const updatedTrade = await ctx.app.model.Trade.findByIdAndUpdate(input.tradeId, input.data, { new: true })
      .lean()
      .exec();
    if (!updatedTrade) throw new Error('Trade update failed');

    return updatedTrade as Trade;
  }

  // Universe Methods
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

  // Validator Methods
  async getValidator(input: RouterInput['getValidator'], ctx: RouterContext): Promise<RouterOutput['getValidator']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Core.Service.getValidator', input.validatorId);

    const validator = await ctx.app.model.Validator.findById(input.validatorId).lean().exec();
    if (!validator) throw new Error('Validator not found');

    return validator as Validator;
  }

  async createValidator(
    input: RouterInput['createValidator'],
    ctx: RouterContext
  ): Promise<RouterOutput['createValidator']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Core.Service.createValidator', input);

    const validator = await ctx.app.model.Validator.create(input);
    return validator as Validator;
  }

  async updateValidator(
    input: RouterInput['updateValidator'],
    ctx: RouterContext
  ): Promise<RouterOutput['updateValidator']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Core.Service.updateValidator', input.validatorId, input.data);

    const updatedValidator = await ctx.app.model.Validator.findByIdAndUpdate(input.validatorId, input.data, {
      new: true,
    })
      .lean()
      .exec();
    if (!updatedValidator) throw new Error('Validator update failed');

    return updatedValidator as Validator;
  }

  // Vote Methods
  async getVote(input: RouterInput['getVote'], ctx: RouterContext): Promise<RouterOutput['getVote']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Core.Service.getVote', input.voteId);

    const vote = await ctx.app.model.Vote.findById(input.voteId).lean().exec();
    if (!vote) throw new Error('Vote not found');

    return vote as Vote;
  }

  async createVote(input: RouterInput['createVote'], ctx: RouterContext): Promise<RouterOutput['createVote']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Core.Service.createVote', input);

    const vote = await ctx.app.model.Vote.create(input);
    return vote as Vote;
  }

  async updateVote(input: RouterInput['updateVote'], ctx: RouterContext): Promise<RouterOutput['updateVote']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Core.Service.updateVote', input.voteId, input.data);

    const updatedVote = await ctx.app.model.Vote.findByIdAndUpdate(input.voteId, input.data, { new: true })
      .lean()
      .exec();
    if (!updatedVote) throw new Error('Vote update failed');

    return updatedVote as Vote;
  }

  // WorldEvent Methods
  async getWorldEvent(input: RouterInput['getWorldEvent'], ctx: RouterContext): Promise<RouterOutput['getWorldEvent']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Core.Service.getWorldEvent', input.worldEventId);

    const worldEvent = await ctx.app.model.WorldEvent.findById(input.worldEventId).lean().exec();
    if (!worldEvent) throw new Error('WorldEvent not found');

    return worldEvent as WorldEvent;
  }

  async createWorldEvent(
    input: RouterInput['createWorldEvent'],
    ctx: RouterContext
  ): Promise<RouterOutput['createWorldEvent']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Core.Service.createWorldEvent', input);

    const worldEvent = await ctx.app.model.WorldEvent.create(input);
    return worldEvent as WorldEvent;
  }

  async updateWorldEvent(
    input: RouterInput['updateWorldEvent'],
    ctx: RouterContext
  ): Promise<RouterOutput['updateWorldEvent']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Core.Service.updateWorldEvent', input.worldEventId, input.data);

    const updatedWorldEvent = await ctx.app.model.WorldEvent.findByIdAndUpdate(input.worldEventId, input.data, {
      new: true,
    })
      .lean()
      .exec();
    if (!updatedWorldEvent) throw new Error('WorldEvent update failed');

    return updatedWorldEvent as WorldEvent;
  }

  // Get Bounty
  async getBounty(input: RouterInput['getBounty'], ctx: RouterContext): Promise<RouterOutput['getBounty']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Core.Service.getBounty', input.bountyId);

    const bounty = await ctx.app.model.Bounty.findById(input.bountyId).lean().exec();
    if (!bounty) throw new Error('Bounty not found');

    return bounty as Bounty;
  }

  // Create Bounty
  async createBounty(input: RouterInput['createBounty'], ctx: RouterContext): Promise<RouterOutput['createBounty']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Core.Service.createBounty', input);

    const bounty = await ctx.app.model.Bounty.create(input);
    return bounty as Bounty;
  }

  // Update Bounty
  async updateBounty(input: RouterInput['updateBounty'], ctx: RouterContext): Promise<RouterOutput['updateBounty']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Core.Service.updateBounty', input.bountyId, input.data);

    const updatedBounty = await ctx.app.model.Bounty.findByIdAndUpdate(input.bountyId, input.data, { new: true })
      .lean()
      .exec();
    if (!updatedBounty) throw new Error('Bounty update failed');

    return updatedBounty as Bounty;
  }
}
