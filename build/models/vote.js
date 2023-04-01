"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const objection_1 = require("objection");
const profile_1 = __importDefault(require("./profile"));
const node_1 = __importDefault(require("./node"));
const base_1 = __importDefault(require("./base"));
class Vote extends base_1.default {
    static get tableName() {
        return 'votes';
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
            parent: {
                relation: objection_1.Model.HasOneRelation,
                modelClass: node_1.default,
                join: {
                    from: 'votes.parentId',
                    to: 'nodes.id'
                }
            },
            owner: {
                relation: objection_1.Model.HasOneThroughRelation,
                modelClass: profile_1.default,
                join: {
                    from: 'votes.id',
                    to: 'profiles.id',
                    through: {
                        from: 'nodes.fromVoteId',
                        to: 'nodes.toProfileId'
                    }
                }
            }
        };
    }
}
exports.default = Vote;
//# sourceMappingURL=vote.js.map