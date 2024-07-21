import { JSONSchema, Model, RelationMappings } from 'objection'
import Node, { NodeRelation } from './node'
import Profile from './profile'
import BaseModel from './base'
import Discussion from './discussion'

export enum MessageStatus {
  Active = 'active',
  Disabled = 'disabled',
  Removed = 'removed'
}

export default class Message extends BaseModel {
  public parentId!: number
  public ownerId!: number

  public static get tableName(): string {
    return 'messages'
  }

  public static get timestamps(): boolean {
    return true
  }

  public static get jsonSchema(): JSONSchema {
    return {
      type: 'object',
      required: [], // 'owner'
      properties: {
        owner: {
          type: 'object'
        }
      }
    }
  }

  public static get relationMappings(): RelationMappings {
    return {
      parent: {
        relation: Model.HasOneRelation,
        modelClass: Node,
        join: {
          from: 'messages.parentId',
          to: 'nodes.id'
        }
      },
      owner: {
        relation: Model.HasOneRelation,
        modelClass: Profile,
        join: {
          from: 'messages.ownerId',
          to: 'profiles.id'
        }
      },
      replies: {
        relation: Model.HasManyRelation,
        modelClass: Message,
        join: {
          from: 'messages.id',
          to: 'messages.replyToId'
        }
      },
      replyTo: {
        relation: Model.HasOneRelation,
        modelClass: Message,
        join: {
          from: 'messages.replyToId',
          to: 'messages.id'
        }
      },
      discussion: {
        relation: Model.ManyToManyRelation,
        modelClass: Discussion,
        beforeInsert (model) {
          (model as Node).relationKey = NodeRelation.Chat
        },
        join: {
          from: 'messages.id',
          through: {
            from: 'nodes.fromMessageId',
            extra: ['relationKey'],
            to: 'nodes.toDiscussionId'
          },
          to: 'discussions.id'
        }
      }
    }
  }
}
