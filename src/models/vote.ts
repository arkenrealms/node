import { Model, RelationMappings, JSONSchema } from 'objection'
import Profile from './profile'
import Node from './node'
import BaseModel from './base'

export default class Vote extends BaseModel {
  // value = 1 or -1 or emoji
  public parentId!: number

  public static get tableName(): string {
    return 'votes'
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
          from: 'votes.parentId',
          to: 'nodes.id'
        }
      },
      owner: {
        relation: Model.HasOneThroughRelation,
        modelClass: Profile,
        join: {
          from: 'votes.id',
          to: 'profiles.id',
          through: {
            from: 'nodes.fromVoteId',
            to: 'nodes.toProfileId'
          }
        }
      }
    }
  }
}
