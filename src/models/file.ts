import { Model, RelationMappings, JSONSchema } from 'objection'
import Profile from './profile'
import Node from './node'
import BaseModel from './base'

export default class File extends BaseModel {
  // key = [image, document, other]
  public parentId!: number

  public storageType!: string // s3, github, etc.
  public accessType!: string

  public static get tableName(): string {
    return 'files'
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
          from: 'files.parentId',
          to: 'nodes.id'
        }
      },
      owner: {
        relation: Model.HasOneRelation,
        modelClass: Profile,
        join: {
          from: 'files.ownerId',
          to: 'profiles.id'
        }
      }
    }
  }
}
