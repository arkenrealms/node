import { Model, RelationMappings, JSONSchema } from 'objection'
import Profile from './profile'
import BaseModel from './base'

export default class Reward extends BaseModel {
  public static get tableName(): string {
    return 'rewards'
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
          from: 'rewards.ownerId',
          to: 'profiles.id'
        }
      },
    }
  }
}
