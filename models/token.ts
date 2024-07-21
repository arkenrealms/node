import { Model, RelationMappings, JSONSchema } from 'objection'
import BaseModel from './base'

export default class Token extends BaseModel {
  public code!: string
  public type!: string

  public marketCap!: number
  public priceUsd!: number
  public priceBtc!: number
  public circulatingSupply!: number
  public volume24h!: number

  public static get tableName(): string {
    return 'tokens'
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
    }
  }
}

// chain
// symbol
// decimals
// etc
// .createTable('tokens', table => {
//     defaults(knex, table)
//     table.string('code', 100)
//     // table.string('name', 100)
//     table.string('type', 100)
//     table.decimal('marketCap').unsigned()
//     table.string('priceUsd', 100)
//     table.string('priceBtc', 100)
//     table.string('circulatingSupply', 100)
//     table.string('volume24h', 100)
//     // code: String
//     // name: String
//     // type: String
//     // marketCap: Float
//     // priceUsd: Float
//     // priceBtc: Float
//     // circulatingSupply: Float
//     // volume24h: Float
//     // change24h: Float
//     // change7d: Float
//     // change1m: Float
//     // change3m: Float
//     // change6m: Float
//     // change1y: Float
//     // low24h: Float
//     // high24h: Float
//     // spread: Float
//     // hackCount: Int
//     // hackMentions: Int
//     // volatilityRank: Float
//     // basePair: BasePair
//   })
//   .createTable('markets', table => {
//     defaults(knex, table)
//   })
//   .createTable('marketPairs', table => {
//     defaults(knex, table)
//     // code: String
//     // name: String
//   })
//   .createTable('transactions', table => {
//     defaults(knex, table)
//   })
//   .createTable('trades', table => {
//     defaults(knex, table)
//   })
//   .createTable('tradeIdeas', table => {
//     defaults(knex, table)
//   })
//   .createTable('exchanges', table => {
//     defaults(knex, table)
//     // name: String
//     // tokenCount: Int
//     // status: String
//     // newsMentions: Int
//     // hackMentions: Int
//     // tokens: [Token]
//   })