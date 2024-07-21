import { Model, RelationMappings, JSONSchema } from 'objection'
import Node from './node'
import BaseModel from './base'

export default class BattlePass extends BaseModel {
  // meta = tiers, rewards, associated product, etc.
  public parentId!: number

  public static get tableName(): string {
    return 'battlepasses'
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
          from: 'battlepasses.parentId',
          to: 'nodes.id'
        }
      }
    }
  }
}
