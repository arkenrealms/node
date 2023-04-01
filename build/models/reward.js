"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const objection_1 = require("objection");
const profile_1 = __importDefault(require("./profile"));
const base_1 = __importDefault(require("./base"));
class Reward extends base_1.default {
    static get tableName() {
        return 'rewards';
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
            owner: {
                relation: objection_1.Model.HasOneRelation,
                modelClass: profile_1.default,
                join: {
                    from: 'rewards.ownerId',
                    to: 'profiles.id'
                }
            },
        };
    }
}
exports.default = Reward;
//# sourceMappingURL=reward.js.map