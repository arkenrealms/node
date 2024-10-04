// module/chat.service.ts

import { getFilter } from '../../util/api';
import type { RouterContext, RouterInput, RouterOutput, ChatGroupDocument, ChatMessageDocument } from './chat.types';

export class Service {
  constructor() {}

  // ChatGroup Methods
  async getChatGroup(input: RouterInput['getChatGroup'], ctx: RouterContext): Promise<RouterOutput['getChatGroup']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Chat.Service.getChatGroup', input);

    const filter = getFilter(input);
    const chatGroup = await ctx.app.model.ChatGroup.findOne(filter).lean().exec();
    if (!chatGroup) throw new Error('ChatGroup not found');

    return chatGroup as ChatGroupDocument;
  }

  async getChatGroups(input: RouterInput['getChatGroups'], ctx: RouterContext): Promise<RouterOutput['getChatGroups']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Chat.Service.getChatGroups', input);

    const filter = getFilter(input);
    const chatGroups = await ctx.app.model.ChatGroup.find(filter).lean().exec();
    if (!chatGroups) throw new Error('ChatGroups not found');

    return chatGroups as ChatGroupDocument[];
  }

  async createChatGroup(
    input: RouterInput['createChatGroup'],
    ctx: RouterContext
  ): Promise<RouterOutput['createChatGroup']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Chat.Service.createChatGroup', input);

    const newChatGroup = await ctx.app.model.ChatGroup.create(input.data);

    return newChatGroup as ChatGroupDocument;
  }

  async updateChatGroup(
    input: RouterInput['updateChatGroup'],
    ctx: RouterContext
  ): Promise<RouterOutput['updateChatGroup']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Chat.Service.updateChatGroup', input);

    const filter = getFilter(input);
    await ctx.app.model.ChatGroup.updateOne(filter, input.data, {
      runValidators: true,
    }).exec();

    const updatedChatGroup = await ctx.app.model.ChatGroup.findOne(filter).lean().exec();
    if (!updatedChatGroup) throw new Error('ChatGroup update failed');

    return updatedChatGroup as ChatGroupDocument;
  }

  // ChatMessage Methods
  async getChatMessage(
    input: RouterInput['getChatMessage'],
    ctx: RouterContext
  ): Promise<RouterOutput['getChatMessage']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Chat.Service.getChatMessage', input);

    const filter = getFilter(input);
    const chatMessage = await ctx.app.model.ChatMessage.findOne(filter).lean().exec();
    if (!chatMessage) throw new Error('ChatMessage not found');

    return chatMessage as ChatMessageDocument;
  }

  async getChatMessages(
    input: RouterInput['getChatMessages'],
    ctx: RouterContext
  ): Promise<RouterOutput['getChatMessages']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Chat.Service.getChatMessages', input);

    const filter = getFilter(input);
    const chatMessages = await ctx.app.model.ChatMessage.find(filter).lean().exec();
    if (!chatMessages) throw new Error('ChatMessages not found');

    return chatMessages as ChatMessageDocument[];
  }

  async createChatMessage(
    input: RouterInput['createChatMessage'],
    ctx: RouterContext
  ): Promise<RouterOutput['createChatMessage']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Chat.Service.createChatMessage', input);

    const newChatMessage = await ctx.app.model.ChatMessage.create(input.data);

    return newChatMessage as ChatMessageDocument;
  }

  async updateChatMessage(
    input: RouterInput['updateChatMessage'],
    ctx: RouterContext
  ): Promise<RouterOutput['updateChatMessage']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Chat.Service.updateChatMessage', input);

    const filter = getFilter(input);
    await ctx.app.model.ChatMessage.updateOne(filter, input.data, {
      runValidators: true,
    }).exec();

    const updatedChatMessage = await ctx.app.model.ChatMessage.findOne(filter).lean().exec();
    if (!updatedChatMessage) throw new Error('ChatMessage update failed');

    return updatedChatMessage as ChatMessageDocument;
  }
}
