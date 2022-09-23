import { Model, RelationMappings, JSONSchema } from 'objection'
import Chain from './chain'
import BaseModel from './base'

export default class Action extends BaseModel {
  public type!: string

  public static get tableName(): string {
    return 'actions'
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
      chain: {
        relation: Model.HasOneRelation,
        modelClass: Chain,
        join: {
          from: 'assets.chainId',
          to: 'assets.id'
        }
      },
    }
  }
}
