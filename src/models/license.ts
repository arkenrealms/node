import { Model, RelationMappings, JSONSchema } from 'objection'
import Node from './node'
import BaseModel from './base'

export default class License extends BaseModel {
  public parentId!: number

  public static get tableName(): string {
    return 'licenses'
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
          from: 'licenses.parentId',
          to: 'nodes.id'
        }
      }
    }
  }
}
