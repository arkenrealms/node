"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const objection_1 = require("objection");
const chain_1 = __importDefault(require("./chain"));
const base_1 = __importDefault(require("./base"));
class Action extends base_1.default {
    static get tableName() {
        return 'actions';
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
                    from: 'assets.chainId',
                    to: 'assets.id'
                }
            },
        };
    }
}
exports.default = Action;
//# sourceMappingURL=action.js.map