"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const objection_1 = require("objection");
const rating_1 = __importDefault(require("./rating"));
const node_1 = __importDefault(require("./node"));
const base_1 = __importDefault(require("./base"));
class Suggestion extends base_1.default {
    static get tableName() {
        return 'suggestions';
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
                    from: 'suggestions.parentId',
                    to: 'nodes.id'
                }
            },
            profile: {
                relation: objection_1.Model.HasOneRelation,
                modelClass: node_1.default,
                join: {
                    from: 'suggestions.profileId',
                    to: 'nodes.id'
                }
            },
            rating: {
                relation: objection_1.Model.HasOneRelation,
                modelClass: rating_1.default,
                join: {
                    from: 'suggestions.ratingId',
                    to: 'ratings.id'
                }
            }
        };
    }
}
exports.default = Suggestion;
//# sourceMappingURL=suggestion.js.map