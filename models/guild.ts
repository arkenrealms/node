import { Model, RelationMappings, JSONSchema } from 'objection'
import Node from './node'
import Product from './product'
import Tag from './tag'
import BaseModel from './base'
import Profile from './profile'
import Chain from './chain'

export default class Guild extends BaseModel {
  public parentId!: number

  public players!: Array<Profile>

  public static get tableName(): string {
    return 'guilds'
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
      players: {
        relation: Model.HasManyRelation,
        modelClass: Guild,
        join: {
          from: 'guilds.id',
          to: 'profiles.guildId'
        }
      },
    }
  }
}
