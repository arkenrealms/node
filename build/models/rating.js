"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const objection_1 = require("objection");
const vote_1 = __importDefault(require("./vote"));
const profile_1 = __importDefault(require("./profile"));
const base_1 = __importDefault(require("./base"));
class Rating extends base_1.default {
    static get tableName() {
        return 'ratings';
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
                    from: 'ratings.ownerId',
                    to: 'profiles.id'
                }
            },
            parent: {
                relation: objection_1.Model.HasOneThroughRelation,
                modelClass: profile_1.default,
                filter: {
                    relationKey: 'parent'
                },
                beforeInsert(model) {
                    model.relationKey = 'parent';
                },
                join: {
                    from: 'ratings.id',
                    to: 'profiles.id',
                    through: {
                        from: 'nodes.fromIdeaId',
                        to: 'nodes.toProfileId',
                        extra: ['relationKey']
                    }
                }
            },
            votes: {
                relation: objection_1.Model.HasManyRelation,
                modelClass: vote_1.default,
                join: {
                    from: 'ratings.id',
                    to: 'votes.ratingId'
                }
            }
        };
    }
}
exports.default = Rating;
//# sourceMappingURL=rating.js.map