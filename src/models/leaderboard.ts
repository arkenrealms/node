import { Model, RelationMappings, JSONSchema } from 'objection'
import Profile from './profile'
import Product from './product'
import Node from './node'
import BaseModel from './base'


// export interface RelationMappings {
//   [relationName: string]: RelationMapping;
// }
// export interface RelationMapping {
//   relation: Relation;
//   modelClass: ModelClass<any> | string;
//   join: RelationJoin;
//   modify?: (queryBuilder: QueryBuilder<any>) => QueryBuilder<any>;
//   filter?: ((queryBuilder: QueryBuilder<any>) => QueryBuilder<any>) | string | object;
//   beforeInsert: any
// }

export default class Leaderboard extends BaseModel {
  public parentId!: number
  public score!: number

  public product!: Product
  public productId!: number

  public static get tableName(): string {
    return 'leaderboards'
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
          from: 'leaderboards.parentId',
          to: 'nodes.id'
        }
      },
      product: {
        relation: Model.HasOneRelation,
        modelClass: Node,
        join: {
          from: 'leaderboards.productId',
          to: 'products.id'
        }
      },
      players: {
        relation: Model.ManyToManyRelation,
        modelClass: Profile,
        join: {
          from: 'leaderboards.id',
          to: 'profiles.id',
          through: {
            from: 'nodes.fromLeaderboardId',
            to: 'nodes.toProfileId',
            extra: ['relationKey']
          }
        },
        filter: {
          relationKey: 'players'
          // query => query.orderByRaw('coalesce(title, id)') //query => query.where('page:tagable_entity_tag.object_data:type', 'Page')
        },
        beforeInsert (model) {
          (model as Node).relationKey = 'players'
        }
      }
    }
  }
}
