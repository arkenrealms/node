import { Model, RelationMappings, JSONSchema } from 'objection'
import Rating from './rating'
import Profile from './profile'
import Node from './node'
import BaseModel from './base'

export default class Realm extends BaseModel {
  public parentId!: number

  public ownerId!: number
  public owner!: Profile

  public static get tableName(): string {
    return 'realms'
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
      owner: {
        relation: Model.HasOneThroughRelation,
        modelClass: Profile,
        filter: {
          relationKey: 'owner'
        },
        beforeInsert (model) {
          (model as Node).relationKey = 'owner'
        },
        join: {
          from: 'realms.id',
          to: 'profiles.id',
          through: {
            from: 'nodes.fromRealmId',
            to: 'nodes.toProfileId',
            extra: ['relationKey']
          }
        }
      },
      parent: {
        relation: Model.HasOneRelation,
        modelClass: Node,
        join: {
          from: 'realms.parentId',
          to: 'nodes.id'
        }
      },
      rating: {
        relation: Model.ManyToManyRelation,
        modelClass: Rating,
        join: {
          from: 'realms.id',
          to: 'ratings.id',
          through: {
            from: 'nodes.fromRealmId',
            to: 'nodes.toRatingId',
            extra: ['relationKey']
          }
        },
        filter: {
          relationKey: 'rating'
        },
        beforeInsert (model) {
          console.log(model);
          (model as Node).relationKey = 'rating'
        }
      },
      // rating: {
      //   relation: Model.HasOneRelation,
      //   modelClass: Rating,
      //   join: {
      //     from: 'realms.ratingId',
      //     to: 'ratings.id'
      //   }
      // },
    }
  }
}
