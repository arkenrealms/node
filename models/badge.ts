import { Model, RelationMappings, JSONSchema } from 'objection'
import Node from './node'
import BaseModel from './base'


export default class Badge extends BaseModel {
  public parentId!: number

  public name!: string

  public static get tableName(): string {
    return 'badges'
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
          from: 'badges.parentId',
          to: 'nodes.id'
        }
      }
    }
  }
}
