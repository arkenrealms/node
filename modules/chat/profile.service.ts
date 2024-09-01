import type { Context } from '../../types';
import type { ChatGroup, ChatMessage } from './chat.types';

export class Service {
  async getChatGroup({ groupId }: { groupId: string }, ctx: Context) {
    console.log('Chat.Service.getChatGroup', groupId);
    const chatGroup = await ctx.app.model.ChatGroup.findById(groupId).lean().exec();
    if (!chatGroup) {
      throw new Error('ChatGroup not found');
    }
    return chatGroup as ChatGroup;
  }

  async addChatMessage({ groupId, messageData }: { groupId: string; messageData: Partial<ChatMessage> }, ctx: Context) {
    console.log('Chat.Service.addChatMessage', groupId, messageData);
    const message = await ctx.app.model.ChatMessage.create({ ...messageData, groupId });
    return message as ChatMessage;
  }

  async updateChatGroup({ groupId, data }: { groupId: string; data: Partial<ChatGroup> }, ctx: Context) {
    console.log('Chat.Service.updateChatGroup', groupId, data);
    const updatedGroup = await ctx.app.model.ChatGroup.findByIdAndUpdate(groupId, data, { new: true }).lean().exec();
    if (!updatedGroup) {
      throw new Error('ChatGroup update failed');
    }
    return updatedGroup as ChatGroup;
  }

  async updateChatMessage({ messageId, data }: { messageId: string; data: Partial<ChatMessage> }, ctx: Context) {
    console.log('Chat.Service.updateChatMessage', messageId, data);
    const updatedMessage = await ctx.app.model.ChatMessage.findByIdAndUpdate(messageId, data, { new: true })
      .lean()
      .exec();
    if (!updatedMessage) {
      throw new Error('ChatMessage update failed');
    }
    return updatedMessage as ChatMessage;
  }
}
