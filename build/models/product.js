"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const objection_1 = require("objection");
const profile_1 = __importDefault(require("./profile"));
const rating_1 = __importDefault(require("./rating"));
const tag_1 = __importDefault(require("./tag"));
const community_1 = __importDefault(require("./community"));
const idea_1 = __importDefault(require("./idea"));
const project_1 = __importDefault(require("./project"));
const discussion_1 = __importDefault(require("./discussion"));
const game_server_1 = __importDefault(require("./game-server"));
const file_1 = __importDefault(require("./file"));
const base_1 = __importDefault(require("./base"));
const vote_1 = __importDefault(require("./vote"));
class Product extends base_1.default {
    static get tableName() {
        return 'products';
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
            // members: {
            //   relation: Model.ManyToManyRelation,
            //   modelClass: User,
            //   join: {
            //     from: 'projects.id',
            //     through: {
            //       from: 'project_members.projectId',
            //       to: 'project_members.userId',
            //       modelClass: ProjectMember,
            //       extra: ['isAdmin']
            //     },
            //     to: 'users.id'
            //   }
            // },
            owner: {
                relation: objection_1.Model.BelongsToOneRelation,
                modelClass: profile_1.default,
                join: {
                    from: 'products.ownerId',
                    to: 'profiles.id'
                }
            },
            vote: {
                relation: objection_1.Model.ManyToManyRelation,
                modelClass: vote_1.default,
                join: {
                    from: 'products.id',
                    to: 'votes.id',
                    through: {
                        from: 'nodes.toProductId',
                        to: 'nodes.fromVoteId',
                        extra: ['relationKey']
                    }
                }
            },
            rating: {
                relation: objection_1.Model.HasOneRelation,
                modelClass: rating_1.default,
                join: {
                    from: 'products.ratingId',
                    to: 'ratings.id'
                }
            },
            community: {
                relation: objection_1.Model.HasOneRelation,
                modelClass: community_1.default,
                join: {
                    from: 'products.communityId',
                    to: 'communities.id'
                }
            },
            idea: {
                relation: objection_1.Model.HasOneRelation,
                modelClass: idea_1.default,
                join: {
                    from: 'products.ideaId',
                    to: 'ideas.id'
                }
            },
            project: {
                relation: objection_1.Model.HasOneRelation,
                modelClass: project_1.default,
                join: {
                    from: 'products.projectId',
                    to: 'projects.id'
                }
            },
            subproducts: {
                relation: objection_1.Model.HasManyRelation,
                modelClass: Product,
                join: {
                    from: 'products.id',
                    to: 'products.parentId'
                }
            },
            servers: {
                relation: objection_1.Model.HasManyRelation,
                modelClass: game_server_1.default,
                join: {
                    from: 'products.id',
                    to: 'servers.productId'
                }
            },
            updates: {
                relation: objection_1.Model.ManyToManyRelation,
                modelClass: discussion_1.default,
                join: {
                    from: 'products.id',
                    to: 'discussions.id',
                    through: {
                        from: 'nodes.fromProductId',
                        to: 'nodes.toDiscussionId',
                        extra: ['relationKey']
                    }
                },
                filter: {
                    relationKey: 'updates'
                },
                beforeInsert(model) {
                    model.relationKey = 'updates';
                }
            },
            // orders: {
            //   relation: Model.ManyToManyRelation,
            //   modelClass: Order,
            //   join: {
            //     from: 'products.id',
            //     to: 'orders.id',
            //     through: {
            //       from: 'nodes.fromProductId',
            //       to: 'nodes.toOrderId',
            //       extra: ['relationKey']
            //     }
            //   },
            //   filter: {
            //     relationKey: 'orders'
            //   },
            //   beforeInsert (model) {
            //     model.key = 'orders'
            //   }
            // },
            files: {
                relation: objection_1.Model.ManyToManyRelation,
                modelClass: file_1.default,
                join: {
                    from: 'products.id',
                    to: 'files.id',
                    through: {
                        from: 'nodes.fromProductId',
                        to: 'nodes.toFileId',
                        extra: ['relationKey']
                    }
                },
                filter: {
                    relationKey: 'files'
                },
                beforeInsert(model) {
                    model.relationKey = 'files';
                }
            },
            tags: {
                relation: objection_1.Model.ManyToManyRelation,
                modelClass: tag_1.default,
                join: {
                    from: 'products.id',
                    to: 'tags.id',
                    through: {
                        from: 'nodes.fromProductId',
                        to: 'nodes.toTagId',
                        extra: ['relationKey'],
                        beforeInsert(model) {
                            model.relationKey = 'tags';
                        }
                    }
                },
                filter: qb => {
                    // TODO: simplify this when this issue is resolved https://github.com/Vincit/objection.js/issues/1356
                    qb.select('tags.id', 'tags.name', 'node_tags.fromProductId');
                    qb.join('nodes as node_tags', 'node_tags.toTagId', 'tags.id');
                    qb.where('node_tags.relationKey', '=', 'tags');
                    // @ts-ignore
                    // TODO: figure this out
                    // qb._parentQuery.whereRaw('"nodes"."fromProductId" = "products"."id"')
                }
            },
            internalTags: {
                relation: objection_1.Model.ManyToManyRelation,
                modelClass: tag_1.default,
                join: {
                    from: 'products.id',
                    to: 'tags.id',
                    through: {
                        from: 'nodes.fromProductId',
                        to: 'nodes.toTagId',
                        extra: ['relationKey'],
                        beforeInsert(model) {
                            model.relationKey = 'internalTags';
                        }
                    }
                },
                filter: qb => {
                    // TODO: simplify this when this issue is resolved https://github.com/Vincit/objection.js/issues/1356
                    qb.select('tags.id', 'tags.name', 'node_tags.fromProductId');
                    qb.join('nodes as node_tags', 'node_tags.toTagId', 'tags.id');
                    qb.where('node_tags.relationKey', '=', 'internalTags');
                    // @ts-ignore
                    // TODO: figure this out
                    // qb._parentQuery.whereRaw('"nodes"."fromProductId" = "products"."id"')
                }
            }
        };
    }
}
exports.default = Product;
//# sourceMappingURL=product.js.map