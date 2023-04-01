"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NodeRelation = void 0;
const objection_1 = require("objection");
const account_1 = __importDefault(require("./account"));
const profile_1 = __importDefault(require("./profile"));
const idea_1 = __importDefault(require("./idea"));
const project_1 = __importDefault(require("./project"));
const product_1 = __importDefault(require("./product"));
const community_1 = __importDefault(require("./community"));
const discussion_1 = __importDefault(require("./discussion"));
const base_1 = __importDefault(require("./base"));
const vote_1 = __importDefault(require("./vote"));
var NodeRelation;
(function (NodeRelation) {
    NodeRelation["Chat"] = "chat";
})(NodeRelation = exports.NodeRelation || (exports.NodeRelation = {}));
// Based on https://github.com/Vincit/objection.js/issues/19
// Exclusive ARC https://hashrocket.com/blog/posts/modeling-polymorphic-associations-in-a-relational-database#exclusive-belongs-to-aka-exclusive-arc-
class Node extends base_1.default {
    static get tableName() {
        return 'nodes';
    }
    static get timestamps() {
        return false;
    }
    static get jsonSchema() {
        return {
            type: 'object',
            required: [],
            properties: {
                relationKey: { type: 'string' }
            }
        };
    }
    static get relationMappings() {
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
    }
    from() {
        if (this.fromAccountId)
            return this.fromAccount;
        if (this.fromProfileId)
            return this.fromProfile;
        throw new Error('No FROM relation');
    }
    to() {
        if (this.toAccountId)
            return this.toAccount;
        if (this.toProfileId)
            return this.toProfile;
        throw new Error('No TO relation');
    }
}
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
//# sourceMappingURL=node.js.map