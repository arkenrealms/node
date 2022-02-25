import { Model, RelationMappings, JSONSchema } from 'objection'
import Node from './node'
import Product from './product'
import Tag from './tag'
import BaseModel from './base'
import Profile from './profile'
import Chain from './chain'

export default class Trade extends BaseModel {
  public parentId!: number

  public product!: Product
//   id	:	1
//   seller	:	0x576a83f7B93df7D6BE68A3cfF148eDF9CF77D810
//   buyer	:	0x0000000000000000000000000000000000000000
//   tokenId	:	10010000210071037103230819
//   price	:	0.5
//   status	:	available
//   hotness	:	0
//   createdAt	:	16238290647202021-06-16T07:37:44.720Z
//   updatedAt	:	16238290647202021-06-16T07:37:44.720Z
//   lastBlock	:	7496648
//   blockNumber	:	7496648
//       1		{12}
  
  public seller!: Profile
  public buyer!: Profile
  public chain!: Chain
  public tokenId!: string
  public price!: number
  public status!: string
  public hotness!: number
  public lastBlock!: number
  public blockNumber!: number

  public static get tableName(): string {
    return 'trades'
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
