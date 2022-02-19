import { Model, RelationMappings, JSONSchema } from 'objection'
import Node from './node'
import Vote from './vote'
import Profile from './profile'
import BaseModel from './base'

export default class Rating extends BaseModel {
  public parentId!: number
  public ownerId!: number

  public votes!: Array<Vote>

  public score!: number // based on upvote/downvote profile reputation
  public average!: number
  public upvoteTotal!: number // has many upvoters votes -> profile where value = 1
  public downvoteTOtal!: number // has many downvoters votes -> profile where value = -1

  public static get tableName(): string {
    return 'ratings'
  }

  public static get timestamps(): boolean {
    return true
  }

  public static get jsonSchema(): JSONSchema {
    return {
      type: 'object',
      required: [],
      properties: {
      }
    }
  }

  public static get relationMappings(): RelationMappings {
    return {
      owner: {
        relation: Model.HasOneRelation,
        modelClass: Profile,
        join: {
          from: 'ratings.ownerId',
          to: 'profiles.id'
        }
      },
      parent: {
        relation: Model.HasOneThroughRelation,
        modelClass: Profile,
        filter: {
          relationKey: 'parent'
        },
        beforeInsert (model) {
          (model as Node).relationKey = 'parent'
        },
        join: {
          from: 'ratings.id',
          to: 'profiles.id',
          through: {
            from: 'nodes.fromIdeaId',
            to: 'nodes.toProfileId',
            extra: ['relationKey']
          }
        }
      },
      votes: {
        relation: Model.HasManyRelation,
        modelClass: Vote,
        join: {
          from: 'ratings.id',
          to: 'votes.ratingId'
        }
      }
    }
  }
}
