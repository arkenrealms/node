import { Model, RelationMappings, JSONSchema } from 'objection'
import Node from './node'
import BaseModel from './base'

export default class Chain extends BaseModel {
  public name!: string
  public icon!: string
  public shortName!: string
  public networkName!: string
  public networkId!: number
  public type!: string
  public chainId!: number
  public blockNumber!: number

  public static get tableName(): string {
    return 'chains'
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
    }
  }
}
