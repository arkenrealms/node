import { Model, RelationMappings, JSONSchema } from 'objection'
import Node from './node'
import BaseModel from './base'

export default class Order extends BaseModel {
  // meta = licenseConditions licenseKey license (needs to meet conditions)
  public parentId!: number

  public transactionId!: string

  public static get tableName(): string {
    return 'orders'
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
          from: 'orders.parentId',
          to: 'nodes.id'
        }
      },
      profile: {
        relation: Model.HasOneRelation,
        modelClass: Node,
        join: {
          from: 'orders.profileId',
          to: 'nodes.id'
        }
      },
      items: {
        relation: Model.HasManyRelation,
        modelClass: Node,
        join: {
          from: 'orders.id',
          through: {
            from: 'nodes.fromOrderId',
            to: 'nodes.id',
            extra: ['relationKey']
          },
          to: 'nodes.id'
        },
        filter: {
          relationKey: 'items'
        },
        beforeInsert (model) {
          (model as Node).relationKey = 'items'
        }
      }
    }
  }
}
