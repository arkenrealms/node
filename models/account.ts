import { Model, RelationMappings, JSONSchema } from 'objection'
import BaseModel from './base'
import Profile from './profile'

export default class Account extends BaseModel {
  public parentId!: number
  public email!: string
  public firstName!: string
  public lastName!: string
  public password!: string
  public avatar!: string

  public static get tableName(): string {
    return 'accounts'
  }

  public static get timestamps(): boolean {
    return false
  }

  public static get jsonSchema(): JSONSchema {
    return {
      type: 'object',
      required: ['email', 'password'],
      properties: {
        email: { type: 'string' },
        firstName: { type: 'string', minLength: 1, maxLength: 255 },
        lastName: { type: 'string', minLength: 1, maxLength: 255 },
        password: { type: 'string' }
      }
    }
  }

  public static get relationMappings(): RelationMappings {
    return {
      profiles: {
        relation: Model.HasManyRelation,
        modelClass: Profile,
        join: {
          from: 'accounts.id',
          to: 'profiles.accountId'
        }
      }
    }
  }
}
