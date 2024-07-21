import { Model, RelationMappings, JSONSchema } from 'objection'
import Node from './node'
import Rating from './rating'
import Profile from './profile'
import BaseModel from './base'

export default class Review extends BaseModel {
  public parentId!: number

  public rating!: Rating

  public owner!: Profile
  public ownerId!: number

  public static get tableName(): string {
    return 'reviews'
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
          from: 'reviews.parentId',
          to: 'nodes.id'
        }
      }
    }
  }
}
