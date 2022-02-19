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
exports.NodeRelation = void 0;
var objection_1 = require("objection");
var account_1 = __importDefault(require("./account"));
var profile_1 = __importDefault(require("./profile"));
var idea_1 = __importDefault(require("./idea"));
var project_1 = __importDefault(require("./project"));
var product_1 = __importDefault(require("./product"));
var community_1 = __importDefault(require("./community"));
var discussion_1 = __importDefault(require("./discussion"));
var base_1 = __importDefault(require("./base"));
var vote_1 = __importDefault(require("./vote"));
var NodeRelation;
(function (NodeRelation) {
    NodeRelation["Chat"] = "chat";
})(NodeRelation = exports.NodeRelation || (exports.NodeRelation = {}));
// Based on https://github.com/Vincit/objection.js/issues/19
// Exclusive ARC https://hashrocket.com/blog/posts/modeling-polymorphic-associations-in-a-relational-database#exclusive-belongs-to-aka-exclusive-arc-
var Node = /** @class */ (function (_super) {
    __extends(Node, _super);
    function Node() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Node, "tableName", {
        get: function () {
            return 'nodes';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Node, "timestamps", {
        get: function () {
            return false;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Node, "jsonSchema", {
        get: function () {
            return {
                type: 'object',
                required: [],
                properties: {
                    relationKey: { type: 'string' }
                }
            };
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Node, "relationMappings", {
        get: function () {
            return {
                fromProfile: {
                    relation: objection_1.Model.HasOneRelation,
                    modelClass: profile_1.default,
                    join: {
                        from: 'nodes.fromProfileId',
                        to: 'profiles.id'
                    }
                },
                toProfile: {
                    relation: objection_1.Model.HasOneRelation,
                    modelClass: profile_1.default,
                    join: {
                        from: 'nodes.toProfileId',
                        to: 'profiles.id'
                    }
                },
                fromAccount: {
                    relation: objection_1.Model.HasOneRelation,
                    modelClass: account_1.default,
                    join: {
                        from: 'nodes.fromAccountId',
                        to: 'accounts.id'
                    }
                },
                toAccount: {
                    relation: objection_1.Model.HasOneRelation,
                    modelClass: account_1.default,
                    join: {
                        from: 'nodes.toAccountId',
                        to: 'accounts.id'
                    }
                },
                fromIdea: {
                    relation: objection_1.Model.HasOneRelation,
                    modelClass: idea_1.default,
                    join: {
                        from: 'nodes.fromIdeaId',
                        to: 'profiles.id'
                    }
                },
                toIdea: {
                    relation: objection_1.Model.HasOneRelation,
                    modelClass: idea_1.default,
                    join: {
                        from: 'nodes.toIdeaId',
                        to: 'profiles.id'
                    }
                },
                fromProject: {
                    relation: objection_1.Model.HasOneRelation,
                    modelClass: project_1.default,
                    join: {
                        from: 'nodes.fromProjectId',
                        to: 'profiles.id'
                    }
                },
                toProject: {
                    relation: objection_1.Model.HasOneRelation,
                    modelClass: project_1.default,
                    join: {
                        from: 'nodes.toProjectId',
                        to: 'profiles.id'
                    }
                },
                fromProduct: {
                    relation: objection_1.Model.HasOneRelation,
                    modelClass: product_1.default,
                    join: {
                        from: 'nodes.fromProductId',
                        to: 'profiles.id'
                    }
                },
                toProduct: {
                    relation: objection_1.Model.HasOneRelation,
                    modelClass: product_1.default,
                    join: {
                        from: 'nodes.toProductId',
                        to: 'profiles.id'
                    }
                },
                fromCommunity: {
                    relation: objection_1.Model.HasOneRelation,
                    modelClass: community_1.default,
                    join: {
                        from: 'nodes.fromCommunityId',
                        to: 'communities.id'
                    }
                },
                toCommunity: {
                    relation: objection_1.Model.HasOneRelation,
                    modelClass: community_1.default,
                    join: {
                        from: 'nodes.toCommunityId',
                        to: 'communities.id'
                    }
                },
                fromDiscussion: {
                    relation: objection_1.Model.HasOneRelation,
                    modelClass: discussion_1.default,
                    join: {
                        from: 'nodes.fromDiscussionId',
                        to: 'discussions.id'
                    }
                },
                toDiscussion: {
                    relation: objection_1.Model.HasOneRelation,
                    modelClass: discussion_1.default,
                    join: {
                        from: 'nodes.toDiscussionId',
                        to: 'discussions.id'
                    }
                },
                fromVote: {
                    relation: objection_1.Model.HasOneRelation,
                    modelClass: vote_1.default,
                    join: {
                        from: 'nodes.fromVoteId',
                        to: 'votes.id'
                    }
                },
                toVote: {
                    relation: objection_1.Model.HasOneRelation,
                    modelClass: vote_1.default,
                    join: {
                        from: 'nodes.toVoteId',
                        to: 'votes.id'
                    }
                }
            };
        },
        enumerable: false,
        configurable: true
    });
    Node.prototype.from = function () {
        if (this.fromAccountId)
            return this.fromAccount;
        if (this.fromProfileId)
            return this.fromProfile;
        throw new Error('No FROM relation');
    };
    Node.prototype.to = function () {
        if (this.toAccountId)
            return this.toAccount;
        if (this.toProfileId)
            return this.toProfile;
        throw new Error('No TO relation');
    };
    return Node;
}(base_1.default));
exports.default = Node;
// objectId: { type: Schema.Types.ObjectId, required: true },
// author: { type: String, required: true },
// text: { type: String, required: true },
// rate: { type: number, default: 0 },
// createdAt: { type: Date, default: Date.now },
// updatedAt: { type: Date, default: Date.now },
// replies: [{ type: Schema.Types.ObjectId, ref: 'Comment' }]
// product reviews =  has many meta join fromProduct = product.id where type = 'review'
// parentId is nodeId which is anything
// parentId is profile or project or product
// event.parent.getAssociation() =>
//   if (this.productId !== null)
//     return this.product
// event.parent.to().name
// objection/index.d.ts
// export interface RelationMapping {
//   relation: Relation;
//   modelClass: ModelClass<any> | string;
//   join: RelationJoin;
//   modify?: (queryBuilder: QueryBuilder<any>) => QueryBuilder<any>;
//   filter?: ((queryBuilder: QueryBuilder<any>) => QueryBuilder<any>) | string | object;
//   beforeInsert?: (model: Model, context: QueryContext) => Promise<void> | void;
// }
