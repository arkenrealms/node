"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const objection_1 = require("objection");
const profile_1 = __importDefault(require("./profile"));
const node_1 = __importDefault(require("./node"));
const base_1 = __importDefault(require("./base"));
class Bounty extends base_1.default {
    static get tableName() {
        return 'bounties';
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
                    from: 'bounties.parentId',
                    to: 'nodes.id'
                }
            },
            hunters: {
                relation: objection_1.Model.ManyToManyRelation,
                modelClass: profile_1.default,
                filter: {
                    relationKey: 'hunters'
                },
                beforeInsert(model) {
                    model.relationKey = 'hunters';
                },
                join: {
                    from: 'hunters.id',
                    to: 'communities.id',
                    through: {
                        from: 'nodes.fromProfileId',
                        to: 'nodes.toCommunityId',
                        extra: ['relationKey']
                    }
                }
            }
        };
    }
}
exports.default = Bounty;
//# sourceMappingURL=bounty.js.map