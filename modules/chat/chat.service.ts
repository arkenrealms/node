// module/chat.service.ts

import type { ChatGroup, ChatMessage, Router, RouterInput, RouterOutput, RouterContext } from './chat.types';

export class Service {
  async getChatGroup(input: RouterInput['getChatGroup'], ctx: RouterContext): Promise<RouterOutput['getChatGroup']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Chat.Service.getChatGroup', input.chatGroupId);

    const chatGroup = await ctx.app.model.ChatGroup.findById(input.chatGroupId).lean().exec();
    if (!chatGroup) throw new Error('ChatGroup not found');

    return chatGroup as ChatGroup;
  }

  async createChatGroup(
    input: RouterInput['createChatGroup'],
    ctx: RouterContext
  ): Promise<RouterOutput['createChatGroup']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Chat.Service.createChatGroup', input.name);

    const chatGroup = await ctx.app.model.ChatGroup.create(input);
    return chatGroup as ChatGroup;
  }

  async updateChatGroup(
    input: RouterInput['updateChatGroup'],
    ctx: RouterContext
  ): Promise<RouterOutput['updateChatGroup']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Chat.Service.updateChatGroup', input.chatGroupId, input.data);

    const updatedChatGroup = await ctx.app.model.ChatGroup.findByIdAndUpdate(input.chatGroupId, input.data, {
      new: true,
    })
      .lean()
      .exec();
    if (!updatedChatGroup) throw new Error('ChatGroup update failed');

    return updatedChatGroup as ChatGroup;
  }

  async getChatMessage(
    input: RouterInput['getChatMessage'],
    ctx: RouterContext
  ): Promise<RouterOutput['getChatMessage']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Chat.Service.getChatMessage', input.chatMessageId);

    const chatMessage = await ctx.app.model.ChatMessage.findById(input.chatMessageId).lean().exec();
    if (!chatMessage) throw new Error('ChatMessage not found');

    return chatMessage as ChatMessage;
  }

  async createChatMessage(
    input: RouterInput['createChatMessage'],
    ctx: RouterContext
  ): Promise<RouterOutput['createChatMessage']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Chat.Service.createChatMessage', input.content);

    const chatMessage = await ctx.app.model.ChatMessage.create(input);
    return chatMessage as ChatMessage;
  }

  async updateChatMessage(
    input: RouterInput['updateChatMessage'],
    ctx: RouterContext
  ): Promise<RouterOutput['updateChatMessage']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Chat.Service.updateChatMessage', input.chatMessageId, input.data);

    const updatedChatMessage = await ctx.app.model.ChatMessage.findByIdAndUpdate(input.chatMessageId, input.data, {
      new: true,
    })
      .lean()
      .exec();
    if (!updatedChatMessage) throw new Error('ChatMessage update failed');

    return updatedChatMessage as ChatMessage;
  }
}
