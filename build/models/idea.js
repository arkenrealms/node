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
var community_1 = __importDefault(require("./community"));
var tag_1 = __importDefault(require("./tag"));
var base_1 = __importDefault(require("./base"));
var vote_1 = __importDefault(require("./vote"));
var Idea = /** @class */ (function (_super) {
    __extends(Idea, _super);
    function Idea() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Idea, "tableName", {
        get: function () {
            return 'ideas';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Idea, "timestamps", {
        get: function () {
            return true;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Idea, "jsonSchema", {
        get: function () {
            return {
                type: 'object',
                required: ['key', 'value', 'meta'],
                properties: {
                    owner: { type: 'object' },
                    community: { type: 'object' },
                    rating: { type: 'object' },
                    meta: {
                        type: 'object',
                        required: [],
                        properties: {}
                    }
                }
            };
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Idea, "relationMappings", {
        get: function () {
            return {
                // owner: {
                //   relation: Model.HasOneThroughRelation,
                //   modelClass: Profile,
                //   filter: (qb) => {
                //     // TODO: simplify this when this issue is resolved https://github.com/Vincit/objection.js/issues/1356
                //     qb.select('profiles.id', 'node_profiles.fromIdeaId')
                //     qb.join('nodes as node_profiles', 'node_profiles.toProfileId', 'profiles.id')
                //     qb.where('node_profiles.relationKey', '=', 'owner')
                //     // @ts-ignore
                //     qb._parentQuery.whereRaw('"owner"."fromIdeaId" = "ideas"."id"')
                //   },
                //   join: {
                //     from: 'ideas.id',
                //     to: 'profiles.id',
                //     through: {
                //       from: 'nodes.fromIdeaId',
                //       to: 'nodes.toProfileId',
                //       extra: ['relationKey'],
                //       beforeInsert(model) {
                //         (model as Node).relationKey = 'owner'
                //       }
                //     }
                //   }
                // },
                owner: {
                    relation: objection_1.Model.BelongsToOneRelation,
                    modelClass: profile_1.default,
                    join: {
                        from: 'ideas.ownerId',
                        to: 'profiles.id'
                    }
                },
                vote: {
                    relation: objection_1.Model.ManyToManyRelation,
                    modelClass: vote_1.default,
                    join: {
                        from: 'ideas.id',
                        to: 'votes.id',
                        through: {
                            from: 'nodes.toIdeaId',
                            to: 'nodes.fromVoteId',
                            extra: ['relationKey']
                        }
                    },
                },
                community: {
                    relation: objection_1.Model.BelongsToOneRelation,
                    modelClass: community_1.default,
                    join: {
                        from: 'ideas.communityId',
                        to: 'communities.id'
                    }
                },
                backers: {
                    relation: objection_1.Model.ManyToManyRelation,
                    modelClass: profile_1.default,
                    filter: {
                        relationKey: 'backers'
                    },
                    beforeInsert: function (model) {
                        model.relationKey = 'backers';
                    },
                    join: {
                        from: 'ideas.id',
                        to: 'profiles.id',
                        through: {
                            from: 'nodes.fromIdeaId',
                            to: 'nodes.toProfileId',
                            extra: ['relationKey']
                        }
                    }
                },
                applications: {
                    relation: objection_1.Model.ManyToManyRelation,
                    modelClass: profile_1.default,
                    filter: {
                        relationKey: 'applications'
                    },
                    beforeInsert: function (model) {
                        model.relationKey = 'applications';
                    },
                    join: {
                        from: 'ideas.id',
                        to: 'profiles.id',
                        through: {
                            from: 'nodes.fromIdeaId',
                            to: 'nodes.toProfileId',
                            extra: ['relationKey']
                        }
                    }
                },
                // rating: {
                //   relation: Model.BelongsToOneRelation,
                //   modelClass: Rating,
                //   join: {
                //     from: 'ideas.ratingId',
                //     to: 'ratings.id'
                //   }
                // },
                tags: {
                    relation: objection_1.Model.ManyToManyRelation,
                    modelClass: tag_1.default,
                    join: {
                        from: 'ideas.id',
                        to: 'tags.id',
                        through: {
                            from: 'nodes.fromIdeaId',
                            to: 'nodes.toTagId',
                            extra: ['relationKey'],
                            beforeInsert: function (model) {
                                model.relationKey = 'tags';
                            }
                        }
                    },
                    filter: function (qb) {
                        // TODO: simplify this when this issue is resolved https://github.com/Vincit/objection.js/issues/1356
                        qb.select('tags.id', 'node_tags.fromIdeaId');
                        qb.join('nodes as node_tags', 'node_tags.toTagId', 'tags.id');
                        qb.where('node_tags.relationKey', '=', 'tags');
                        // @ts-ignore
                        qb._parentQuery.whereRaw('"tags"."fromIdeaId" = "ideas"."id"');
                    },
                }
            };
        },
        enumerable: false,
        configurable: true
    });
    return Idea;
}(base_1.default));
exports.default = Idea;
