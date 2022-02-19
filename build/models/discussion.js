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
var objection_1 = require("objection");
var profile_1 = __importStar(require("./profile"));
var message_1 = __importDefault(require("./message"));
var event_1 = __importDefault(require("./event"));
var node_1 = __importStar(require("./node"));
var rating_1 = __importDefault(require("./rating"));
var base_1 = __importDefault(require("./base"));
var community_1 = __importDefault(require("./community"));
var DiscussionType;
(function (DiscussionType) {
    DiscussionType["Discussion"] = "discussion";
    DiscussionType["Chat"] = "chat";
    DiscussionType["Both"] = "both";
})(DiscussionType = exports.DiscussionType || (exports.DiscussionType = {}));
var Discussion = /** @class */ (function (_super) {
    __extends(Discussion, _super);
    function Discussion() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Discussion, "tableName", {
        get: function () {
            return 'discussions';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Discussion, "timestamps", {
        get: function () {
            return true;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Discussion, "jsonSchema", {
        get: function () {
            return {
                type: 'object',
                required: ['key', 'value', 'meta'],
                properties: {}
            };
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Discussion, "modifiers", {
        get: function () {
            return {
                publicCols: function (builder) {
                    builder.select(['id', 'key', 'value']);
                },
                idCol: function (builder) {
                    builder.select(['id']);
                }
            };
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Discussion, "relationMappings", {
        get: function () {
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
                    beforeInsert: function (model) {
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
                    beforeInsert: function (model) {
                        model.relationKey = node_1.NodeRelation.Chat;
                    },
                    modify: function (query) {
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
                    beforeInsert: function (model) {
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
                    beforeInsert: function (model) {
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
                    beforeInsert: function (model) {
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
        },
        enumerable: false,
        configurable: true
    });
    return Discussion;
}(base_1.default));
exports.default = Discussion;
