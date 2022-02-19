import { Model, RelationMappings, JSONSchema } from 'objection'
import Profile from './profile'
import Discussion from './discussion'
import Event from './event'
import Node from './node'
import BaseModel from './base'

export default class Community extends BaseModel {
  public parentId!: number
  public ownerId!: number

  public currentActiveUsers!: number
  public monthlyActiveUsers!: number
  public dailyActiveUsers!: number
  public discussions!: Array<Discussion>

  public static get tableName(): string {
    return 'communities'
  }

  public static get timestamps(): boolean {
    return true
  }

  public static get jsonSchema(): JSONSchema {
    return {
      type: 'object',
      required: ['value', 'meta'],
      properties: {
      }
    }
  }

  public static get relationMappings(): RelationMappings {
    return {
      owner: {
        relation: Model.HasOneThroughRelation,
        modelClass: Profile,
        filter: {
          'nodes.relationKey': 'owner'
        },
        beforeInsert (model) {
          (model as Node).relationKey = 'owner'
        },
        join: {
          from: 'communities.id',
          to: 'profiles.id',
          through: {
            from: 'nodes.fromCommunityId',
            to: 'nodes.toProfileId',
            extra: ['nodes.relationKey']
          }
        }
      },
      discussions: {
        relation: Model.ManyToManyRelation,
        modelClass: Discussion,
        join: {
          from: 'communities.id',
          to: 'discussions.id',
          through: {
            from: 'nodes.fromCommunityId',
            to: 'nodes.toDiscussionId',
            extra: ['relationKey']
          }
        },
        filter: {
          relationKey: 'discussions'
        },
        beforeInsert (model) {
          (model as Node).relationKey = 'discussions'
        }
      },
      subscribers: {
        relation: Model.ManyToManyRelation,
        modelClass: Profile,
        filter: {
          relationKey: 'subscribers'
        },
        beforeInsert (model) {
          (model as Node).relationKey = 'subscribers'
        },
        join: {
          from: 'profiles.id',
          to: 'communities.id',
          through: {
            from: 'nodes.fromProfileId',
            to: 'nodes.toCommunityId',
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
          to: 'communities.id',
          through: {
            from: 'nodes.fromEventId',
            to: 'nodes.toCommunityId',
            extra: ['relationKey']
          }
        }
      }
    }
  }
}
