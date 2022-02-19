import { Model, RelationMappings, JSONSchema } from 'objection'
import Node from './node'
import Product from './product'
import Tag from './tag'
import BaseModel from './base'

export default class Server extends BaseModel {
  public parentId!: number
  public score!: number

  public product!: Product
  public productId!: number

  public address!: string
  public port!: number
  public totalConnected!: number

  public static get tableName(): string {
    return 'servers'
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
          from: 'servers.parentId',
          to: 'nodes.id'
        }
      },
      tags: {
        relation: Model.ManyToManyRelation,
        modelClass: Tag,
        join: {
          from: 'servers.id',
          to: 'tags.id',
          through: {
            from: 'nodes.fromServerId',
            to: 'nodes.toTagId',
            extra: ['relationKey']
          }
        },
        filter: {
          relationKey: 'tags'
        },
        beforeInsert (model) {
          (model as Node).relationKey = 'tags'
        }
      }
    }
  }
}

// has many profiles
// has many tags
// has many events
// score
