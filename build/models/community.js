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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var objection_1 = require("objection");
var profile_1 = __importDefault(require("./profile"));
var discussion_1 = __importDefault(require("./discussion"));
var event_1 = __importDefault(require("./event"));
var base_1 = __importDefault(require("./base"));
var Community = /** @class */ (function (_super) {
    __extends(Community, _super);
    function Community() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Community, "tableName", {
        get: function () {
            return 'communities';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Community, "timestamps", {
        get: function () {
            return true;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Community, "jsonSchema", {
        get: function () {
            return {
                type: 'object',
                required: ['value', 'meta'],
                properties: {}
            };
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Community, "relationMappings", {
        get: function () {
            return {
                owner: {
                    relation: objection_1.Model.HasOneThroughRelation,
                    modelClass: profile_1.default,
                    filter: {
                        'nodes.relationKey': 'owner'
                    },
                    beforeInsert: function (model) {
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
                    beforeInsert: function (model) {
                        model.relationKey = 'discussions';
                    }
                },
                subscribers: {
                    relation: objection_1.Model.ManyToManyRelation,
                    modelClass: profile_1.default,
                    filter: {
                        relationKey: 'subscribers'
                    },
                    beforeInsert: function (model) {
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
                    beforeInsert: function (model) {
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
        },
        enumerable: false,
        configurable: true
    });
    return Community;
}(base_1.default));
exports.default = Community;
