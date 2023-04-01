"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiscussionType = void 0;
const objection_1 = require("objection");
const profile_1 = __importStar(require("./profile"));
const message_1 = __importDefault(require("./message"));
const event_1 = __importDefault(require("./event"));
const node_1 = __importStar(require("./node"));
const rating_1 = __importDefault(require("./rating"));
const base_1 = __importDefault(require("./base"));
const community_1 = __importDefault(require("./community"));
var DiscussionType;
(function (DiscussionType) {
    DiscussionType["Discussion"] = "discussion";
    DiscussionType["Chat"] = "chat";
    DiscussionType["Both"] = "both";
})(DiscussionType = exports.DiscussionType || (exports.DiscussionType = {}));
class Discussion extends base_1.default {
    static get tableName() {
        return 'discussions';
    }
    static get timestamps() {
        return true;
    }
    static get jsonSchema() {
        return {
            type: 'object',
            required: ['key', 'value', 'meta'],
            properties: {}
        };
    }
    static get modifiers() {
        return {
            publicCols(builder) {
                builder.select(['id', 'key', 'value']);
            },
            idCol(builder) {
                builder.select(['id']);
            }
        };
    }
    static get relationMappings() {
        return {
            owner: {
                relation: objection_1.Model.HasOneThroughRelation,
                modelClass: profile_1.default,
                join: {
                    from: 'discussions.id',
                    to: 'profiles.id',
                    through: {
                        from: 'nodes.fromDiscussionId',
                        to: 'nodes.toProfileId'
                    }
                }
            },
            parent: {
                relation: objection_1.Model.HasOneRelation,
                modelClass: node_1.default,
                join: {
                    from: 'discussions.parentId',
                    to: 'nodes.id'
                }
            },
            rootMessage: {
                relation: objection_1.Model.HasOneRelation,
                modelClass: message_1.default,
                join: {
                    from: 'discussions.rootMessageId',
                    to: 'messages.id'
                }
            },
            rating: {
                relation: objection_1.Model.HasOneRelation,
                modelClass: rating_1.default,
                join: {
                    from: 'discussions.ratingId',
                    to: 'ratings.id'
                }
            },
            members: {
                relation: objection_1.Model.ManyToManyRelation,
                modelClass: profile_1.default,
                filter: {
                    relationKey: 'members'
                },
                beforeInsert(model) {
                    model.relationKey = 'members';
                },
                join: {
                    from: 'profiles.id',
                    to: 'discussions.id',
                    through: {
                        from: 'nodes.fromProfileId',
                        to: 'nodes.toDiscussionId',
                        extra: ['relationKey']
                    }
                }
            },
            chat: {
                relation: objection_1.Model.ManyToManyRelation,
                modelClass: profile_1.default,
                filter: {
                    relationKey: node_1.NodeRelation.Chat
                },
                beforeInsert(model) {
                    model.relationKey = node_1.NodeRelation.Chat;
                },
                modify: query => {
                    query.select(['profiles.id', 'profiles.name', 'profiles.avatar', 'profiles.role', 'profiles.status']);
                    query.andWhere('profiles.status', profile_1.ProfileStatus.Active);
                },
                join: {
                    from: 'discussions.id',
                    through: {
                        to: 'nodes.fromProfileId',
                        extra: ['relationKey'],
                        from: 'nodes.toDiscussionId'
                    },
                    to: 'profiles.id'
                }
            },
            messages: {
                relation: objection_1.Model.ManyToManyRelation,
                modelClass: message_1.default,
                filter: {
                    relationKey: 'messages'
                },
                beforeInsert(model) {
                    model.relationKey = 'messages';
                },
                join: {
                    from: 'discussions.id',
                    to: 'messages.id',
                    through: {
                        from: 'nodes.fromDiscussionId',
                        to: 'nodes.toMessageId',
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
                    to: 'discussions.id',
                    through: {
                        from: 'nodes.fromEventId',
                        to: 'nodes.toDiscussionId',
                        extra: ['relationKey']
                    }
                }
            },
            community: {
                relation: objection_1.Model.HasOneThroughRelation,
                modelClass: community_1.default,
                filter: {
                    relationKey: 'discussions'
                },
                beforeInsert(model) {
                    model.relationKey = 'discussions';
                },
                join: {
                    from: 'communities.id',
                    to: 'discussions.id',
                    through: {
                        from: 'nodes.fromCommunityId',
                        to: 'nodes.toDiscussionId',
                        extra: ['relationKey']
                    }
                }
            }
        };
    }
}
exports.default = Discussion;
//# sourceMappingURL=discussion.js.map