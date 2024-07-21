import { Model, RelationMappings, JSONSchema } from 'objection'
import Profile, { ProfileStatus } from './profile'
import Message from './message'
import Event from './event'
import Node, { NodeRelation } from './node'
import Rating from './rating'
import BaseModel from './base'
import Community from './community'

export enum DiscussionType {
  Discussion = 'discussion',
  Chat = 'chat',
  Both = 'both'
}

export default class Discussion extends BaseModel {
  public content!: string
  public parentId!: number
  public rootMessageId!: number
  public type!: DiscussionType

  public static get tableName(): string {
    return 'discussions'
  }

  public static get timestamps(): boolean {
    return true
  }

  public static get jsonSchema(): JSONSchema {
    return {
      type: 'object',
      required: ['key', 'value', 'meta'],
      properties: {
      }
    }
  }

  public static get modifiers(): any {
    return {
      publicCols (builder) {
        builder.select(['id', 'key', 'value'])
      },
      idCol (builder) {
        builder.select(['id'])
      }
    }
  }

  public static get relationMappings(): RelationMappings {
    return {
      owner: {
        relation: Model.HasOneThroughRelation,
        modelClass: Profile,
        join: {
          from: 'discussions.id',
          to: 'profiles.id',
          through: {
            from: 'nodes.fromDiscussionId',
            to: 'nodes.toProfileId'
          }
        }
      },
      parent: {
        relation: Model.HasOneRelation,
        modelClass: Node,
        join: {
          from: 'discussions.parentId',
          to: 'nodes.id'
        }
      },
      rootMessage: {
        relation: Model.HasOneRelation,
        modelClass: Message,
        join: {
          from: 'discussions.rootMessageId',
          to: 'messages.id'
        }
      },
      rating: {
        relation: Model.HasOneRelation,
        modelClass: Rating,
        join: {
          from: 'discussions.ratingId',
          to: 'ratings.id'
        }
      },
      members: {
        relation: Model.ManyToManyRelation,
        modelClass: Profile,
        filter: {
          relationKey: 'members'
        },
        beforeInsert (model) {
          (model as Node).relationKey = 'members'
        },
        join: {
          from: 'profiles.id',
          to: 'discussions.id',
          through: {
            from: 'nodes.fromProfileId',
            to: 'nodes.toDiscussionId',
            extra: ['relationKey']
          }
        }
      },
      chat: {
        relation: Model.ManyToManyRelation,
        modelClass: Profile,
        filter: {
          relationKey: NodeRelation.Chat
        },
        beforeInsert (model) {
          (model as Node).relationKey = NodeRelation.Chat
        },
        modify: query => {
          query.select(['profiles.id', 'profiles.name', 'profiles.avatar', 'profiles.role', 'profiles.status'])
          query.andWhere('profiles.status', ProfileStatus.Active)
        },
        join: {
          from: 'discussions.id',
          through: {
            to: 'nodes.fromProfileId',
            extra: ['relationKey'],
            from: 'nodes.toDiscussionId'
          },
          to: 'profiles.id'
        }
      },
      messages: {
        relation: Model.ManyToManyRelation,
        modelClass: Message,
        filter: {
          relationKey: 'messages'
        },
        beforeInsert (model) {
          (model as Node).relationKey = 'messages'
        },
        join: {
          from: 'discussions.id',
          to: 'messages.id',
          through: {
            from: 'nodes.fromDiscussionId',
            to: 'nodes.toMessageId',
            extra: ['relationKey']
          }
        }
      },
      events: {
        relation: Model.ManyToManyRelation,
        modelClass: Event,
        filter: {
          relationKey: 'events'
        },
        beforeInsert (model) {
          (model as Node).relationKey = 'events'
        },
        join: {
          from: 'events.id',
          to: 'discussions.id',
          through: {
            from: 'nodes.fromEventId',
            to: 'nodes.toDiscussionId',
            extra: ['relationKey']
          }
        }
      },
      community: {
        relation: Model.HasOneThroughRelation,
        modelClass: Community,
        filter: {
          relationKey: 'discussions'
        },
        beforeInsert (model) {
          (model as Node).relationKey = 'discussions'
        },
        join: {
          from: 'communities.id',
          to: 'discussions.id',
          through: {
            from: 'nodes.fromCommunityId',
            to: 'nodes.toDiscussionId',
            extra: ['relationKey']
          }
        }
      }
    }
  }
}
