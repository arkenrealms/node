// has one asset or ??
import { Model, RelationMappings, JSONSchema } from 'objection'
import Profile from './profile'
import Node from './node'
import BaseModel from './base'

export default class Offer extends BaseModel {
  public parentId!: number

  public static get tableName(): string {
    return 'offers'
  }

  public static get timestamps(): boolean {
    return true
  }

  public static get jsonSchema(): JSONSchema {
    return {
      type: 'object',
      required: [],

      properties: {
        ownerId: { type: 'integer' },
        address: { type: 'string' }
      }
    }
  }

  public static get relationMappings(): RelationMappings {
    return {
      parent: {
        relation: Model.HasOneRelation,
        modelClass: Node,
        join: {
          from: 'offers.parentId',
          to: 'nodes.id'
        }
      },
      owner: {
        relation: Model.HasOneRelation,
        modelClass: Profile,
        join: {
          from: 'offers.ownerId',
          to: 'profiles.id'
        }
      }
    }
  }
}
