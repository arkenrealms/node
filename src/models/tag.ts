import { Model, RelationMappings, JSONSchema } from 'objection'
import Node from './node'
import BaseModel from './base'

export default class Tag extends BaseModel {
  public parentId!: number
  public locked!: boolean

  public static get tableName(): string {
    return 'tags'
  }

  public static get timestamps(): boolean {
    return true
  }

  public static get jsonSchema(): JSONSchema {
    return {
      type: 'object',
      required: ['key', 'name', 'meta'],
      properties: {
        key: { type: 'string' },
        name: { type: 'string' },
        meta: {
          type: 'object',
          required: ['author', 'assets'],
          properties: {
            author: { type: 'string' },
            assets: { type: 'array' },
            background: { type: ['string', 'null'] },
            estimatedValue: { type: 'integer' }
          }
        }
      }
    }
  }

  public static get relationMappings(): RelationMappings {
    return {
      parent: {
        relation: Model.HasOneRelation,
        modelClass: Node,
        join: {
          from: 'tags.parentId',
          to: 'nodes.id'
        }
      },
    }
  }

  public static get modifiers(): any {
    return {
      released (builder) {
        builder.where('tags.name', 'Released')
      }
    }
  }
}
