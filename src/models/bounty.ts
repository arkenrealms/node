import { Model, RelationMappings, JSONSchema } from 'objection'
import Profile from './profile'
import Node from './node'
import BaseModel from './base'

export default class Bounty extends BaseModel {
  // meta = prize
  public parentId!: number

  public static get tableName(): string {
    return 'bounties'
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
          from: 'bounties.parentId',
          to: 'nodes.id'
        }
      },
      hunters: {
        relation: Model.ManyToManyRelation,
        modelClass: Profile,
        filter: {
          relationKey: 'hunters'
        },
        beforeInsert (model) {
          (model as Node).relationKey = 'hunters'
        },
        join: {
          from: 'hunters.id',
          to: 'communities.id',
          through: {
            from: 'nodes.fromProfileId',
            to: 'nodes.toCommunityId',
            extra: ['relationKey']
          }
        }
      }
    }
  }
}
