"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const objection_1 = require("objection");
const profile_1 = __importDefault(require("./profile"));
const discussion_1 = __importDefault(require("./discussion"));
const event_1 = __importDefault(require("./event"));
const base_1 = __importDefault(require("./base"));
class Community extends base_1.default {
    static get tableName() {
        return 'communities';
    }
    static get timestamps() {
        return true;
    }
    static get jsonSchema() {
        return {
            type: 'object',
            required: ['value', 'meta'],
            properties: {}
        };
    }
    static get relationMappings() {
        return {
            owner: {
                relation: objection_1.Model.HasOneThroughRelation,
                modelClass: profile_1.default,
                filter: {
                    'nodes.relationKey': 'owner'
                },
                beforeInsert(model) {
                    model.relationKey = 'owner';
                },
                join: {
                    from: 'communities.id',
                    to: 'profiles.id',
                    through: {
                        from: 'nodes.fromCommunityId',
                        to: 'nodes.toProfileId',
                        extra: ['nodes.relationKey']
                    }
                }
            },
            discussions: {
                relation: objection_1.Model.ManyToManyRelation,
                modelClass: discussion_1.default,
                join: {
                    from: 'communities.id',
                    to: 'discussions.id',
                    through: {
                        from: 'nodes.fromCommunityId',
                        to: 'nodes.toDiscussionId',
                        extra: ['relationKey']
                    }
                },
                filter: {
                    relationKey: 'discussions'
                },
                beforeInsert(model) {
                    model.relationKey = 'discussions';
                }
            },
            subscribers: {
                relation: objection_1.Model.ManyToManyRelation,
                modelClass: profile_1.default,
                filter: {
                    relationKey: 'subscribers'
                },
                beforeInsert(model) {
                    model.relationKey = 'subscribers';
                },
                join: {
                    from: 'profiles.id',
                    to: 'communities.id',
                    through: {
                        from: 'nodes.fromProfileId',
                        to: 'nodes.toCommunityId',
                        extra: ['relationKey']
                    }
                }
            },
            events: {
                relation: objection_1.Model.ManyToManyRelation,
                modelClass: event_1.default,
                filter: {
                    relationKey: 'events'
                },
                beforeInsert(model) {
                    model.relationKey = 'events';
                },
                join: {
                    from: 'events.id',
                    to: 'communities.id',
                    through: {
                        from: 'nodes.fromEventId',
                        to: 'nodes.toCommunityId',
                        extra: ['relationKey']
                    }
                }
            }
        };
    }
}
exports.default = Community;
//# sourceMappingURL=community.js.map