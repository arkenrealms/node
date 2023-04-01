"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const objection_1 = require("objection");
const base_1 = __importDefault(require("./base"));
const chain_1 = __importDefault(require("./chain"));
class Transaction extends base_1.default {
    static get tableName() {
        return 'transactions';
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
        return {
            chain: {
                relation: objection_1.Model.HasOneRelation,
                modelClass: chain_1.default,
                join: {
                    from: 'transactions.chainId',
                    to: 'chains.id'
                }
            },
        };
    }
}
exports.default = Transaction;
//# sourceMappingURL=transaction.js.map