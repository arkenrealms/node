import { Model, RelationMappings, JSONSchema } from 'objection'
import Profile from './profile'
import Rating from './rating'
import Node from './node'
import BaseModel from './base'

export default class Suggestion extends BaseModel {
  public parentId!: number

  public rating!: Rating

  public static get tableName(): string {
    return 'suggestions'
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
      parent: {
        relation: Model.HasOneRelation,
        modelClass: Node,
        join: {
          from: 'suggestions.parentId',
          to: 'nodes.id'
        }
      },
      profile: {
        relation: Model.HasOneRelation,
        modelClass: Node,
        join: {
          from: 'suggestions.profileId',
          to: 'nodes.id'
        }
      },
      rating: {
        relation: Model.HasOneRelation,
        modelClass: Rating,
        join: {
          from: 'suggestions.ratingId',
          to: 'ratings.id'
        }
      }
    }
  }
}
