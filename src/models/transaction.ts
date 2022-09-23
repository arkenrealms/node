import { Model, RelationMappings, JSONSchema } from 'objection'
import BaseModel from './base'
import Chain from './chain'

export default class Transaction extends BaseModel {
  public caller!: string
  public destination!: string

  public static get tableName(): string {
    return 'transactions'
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
          from: 'transactions.chainId',
          to: 'chains.id'
        }
      },
    }
  }
}