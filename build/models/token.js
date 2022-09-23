"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var base_1 = __importDefault(require("./base"));
var Token = /** @class */ (function (_super) {
    __extends(Token, _super);
    function Token() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Token, "tableName", {
        get: function () {
            return 'tokens';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Token, "timestamps", {
        get: function () {
            return true;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Token, "jsonSchema", {
        get: function () {
            return {
                type: 'object',
                required: [],
                properties: {}
            };
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Token, "relationMappings", {
        get: function () {
            return {};
        },
        enumerable: false,
        configurable: true
    });
    return Token;
}(base_1.default));
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
