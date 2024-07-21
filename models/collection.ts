import { Model, RelationMappings, JSONSchema } from 'objection'
import Profile from './profile'
import Node from './node'
import BaseModel from './base'

export default class Collection extends BaseModel {
  public name!: string
  public parentId!: number
  public owner!: Profile

  public static get tableName(): string {
    return 'collections'
  }

  public static get timestamps(): boolean {
    return true
  }

  public static get jsonSchema(): JSONSchema {
    return {
      type: 'object',
      required: ['name', 'meta'],
      properties: {
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
      owner: {
        relation: Model.BelongsToOneRelation,
        modelClass: Profile,
        join: {
          from: 'collections.ownerId',
          to: 'profiles.id'
        }
      },
      // owner: {
      //   relation: Model.HasOneThroughRelation,
      //   modelClass: Profile,
      //   filter: (qb) => {
      //     // TODO: simplify this when this issue is resolved https://github.com/Vincit/objection.js/issues/1356
      //     qb.select('profiles.id', 'node_profiles.fromCollectionId')
      //     qb.join('nodes as node_profiles', 'node_profiles.toProfileId', 'profiles.id')
      //     qb.where('node_profiles.relationKey', '=', 'owner')
      //     // @ts-ignore
      //     qb._parentQuery.whereRaw('"owner"."fromCollectionId" = "collections"."id"')
      //   },
      //   join: {
      //     from: 'collections.id',
      //     to: 'profiles.id',
      //     through: {
      //       from: 'nodes.fromCollectionId',
      //       to: 'nodes.toProfileId',
      //       extra: ['relationKey'],
      //       beforeInsert(model) {
      //         (model as Node).relationKey = 'owner'
      //       }
      //     }
      //   }
      // },
      parent: {
        relation: Model.HasOneRelation,
        modelClass: Node,
        join: {
          from: 'collections.parentId',
          to: 'nodes.id'
        }
      }
    }
  }
}
