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
var rating_1 = __importDefault(require("./rating"));
var tag_1 = __importDefault(require("./tag"));
var community_1 = __importDefault(require("./community"));
var idea_1 = __importDefault(require("./idea"));
var project_1 = __importDefault(require("./project"));
var discussion_1 = __importDefault(require("./discussion"));
var server_1 = __importDefault(require("./server"));
var file_1 = __importDefault(require("./file"));
var base_1 = __importDefault(require("./base"));
var vote_1 = __importDefault(require("./vote"));
var Product = /** @class */ (function (_super) {
    __extends(Product, _super);
    function Product() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Product, "tableName", {
        get: function () {
            return 'products';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product, "timestamps", {
        get: function () {
            return true;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product, "jsonSchema", {
        get: function () {
            return {
                type: 'object',
                required: [],
                properties: {}
            };
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product, "relationMappings", {
        get: function () {
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
                    modelClass: server_1.default,
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
                    beforeInsert: function (model) {
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
                    beforeInsert: function (model) {
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
                            beforeInsert: function (model) {
                                model.relationKey = 'tags';
                            }
                        }
                    },
                    filter: function (qb) {
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
                            beforeInsert: function (model) {
                                model.relationKey = 'internalTags';
                            }
                        }
                    },
                    filter: function (qb) {
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
        },
        enumerable: false,
        configurable: true
    });
    return Product;
}(base_1.default));
exports.default = Product;
