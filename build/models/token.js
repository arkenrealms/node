"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = __importDefault(require("./base"));
class Token extends base_1.default {
    static get tableName() {
        return 'tokens';
    }
    static get timestamps() {
        return true;
    }
    static get jsonSchema() {
        return {
            type: 'object',
            required: [],
            properties: {}
        };
    }
    static get relationMappings() {
        return {};
    }
}
exports.default = Token;
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
//# sourceMappingURL=token.js.map