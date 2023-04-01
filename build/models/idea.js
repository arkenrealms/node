"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const objection_1 = require("objection");
const profile_1 = __importDefault(require("./profile"));
const community_1 = __importDefault(require("./community"));
const tag_1 = __importDefault(require("./tag"));
const base_1 = __importDefault(require("./base"));
const vote_1 = __importDefault(require("./vote"));
class Idea extends base_1.default {
    static get tableName() {
        return 'ideas';
    }
    static get timestamps() {
        return true;
    }
    static get jsonSchema() {
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
    }
    static get relationMappings() {
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
                beforeInsert(model) {
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
                beforeInsert(model) {
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
                        beforeInsert(model) {
                            model.relationKey = 'tags';
                        }
                    }
                },
                filter: (qb) => {
                    // TODO: simplify this when this issue is resolved https://github.com/Vincit/objection.js/issues/1356
                    qb.select('tags.id', 'node_tags.fromIdeaId');
                    qb.join('nodes as node_tags', 'node_tags.toTagId', 'tags.id');
                    qb.where('node_tags.relationKey', '=', 'tags');
                    // @ts-ignore
                    qb._parentQuery.whereRaw('"tags"."fromIdeaId" = "ideas"."id"');
                },
            }
        };
    }
}
exports.default = Idea;
//# sourceMappingURL=idea.js.map