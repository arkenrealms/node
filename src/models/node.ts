import { Model, RelationMappings, JSONSchema } from 'objection'
import Account from './account'
import Profile from './profile'
import Idea from './idea'
import Project from './project'
import Product from './product'
import Community from './community'
import Collection from './collection'
import Discussion from './discussion'
import BaseModel from './base'
import Vote from './vote'

export enum NodeRelation {
  Chat = 'chat'
}

// Based on https://github.com/Vincit/objection.js/issues/19
// Exclusive ARC https://hashrocket.com/blog/posts/modeling-polymorphic-associations-in-a-relational-database#exclusive-belongs-to-aka-exclusive-arc-
export default class Node extends BaseModel {
  public parentId!: number

  public relationKey!: string
  public relationType!: string

  public fromAccount!: Account
  public fromAccountId!: number
  public toAccount!: Account
  public toAccountId!: number

  public fromProfile!: Profile
  public fromProfileId!: number
  public toProfile!: Profile
  public toProfileId!: number

  public fromBadgeId!: number
  public toBadgeId!: number

  public fromAchievementId!: number
  public toAchievementId!: number

  public fromIdea!: Idea
  public fromIdeaId!: number
  public toIdea!: Idea
  public toIdeaId!: number

  public fromSuggestionId!: number
  public toSuggestionId!: number

  public fromProject!: Project
  public fromProjectId!: number
  public toProject!: Project
  public toProjectId!: number

  public fromProduct!: Product
  public fromProductId!: number
  public toProduct!: Product
  public toProductId!: number

  public fromAssetId!: number
  public toAssetId!: number

  public fromBountyId!: number
  public toBountyId!: number

  public fromRealmId!: number
  public toRealmId!: number

  public fromCommunity!: Community
  public toCommunity!: Community
  public fromCommunityId!: number
  public toCommunityId!: number

  public fromCollection!: Collection
  public toCollection!: Collection
  public fromCollectionId!: number
  public toCollectionId!: number

  public fromDiscussion!: Discussion
  public toDiscussion!: Discussion
  public fromDiscussionId!: number
  public toDiscussionId!: number

  public fromMessageId!: number
  public toMessageId!: number

  public fromOfferId!: number
  public toOfferId!: number

  public fromLicenseId!: number
  public toLicenseId!: number

  public fromOrderId!: number
  public toOrderId!: number

  public fromRatingId!: number
  public toRatingId!: number

  public fromReviewId!: number
  public toReviewId!: number

  public fromTagId!: number
  public toTagId!: number

  public fromVote!: Vote
  public fromVoteId!: number
  public toVote!: Vote
  public toVoteId!: number

  public fromLeaderboardId!: number
  public toLeaderboardId!: number

  public fromLogId!: number
  public toLogId!: number

  public fromFileId!: number
  public toFileId!: number

  public fromEventId!: number
  public toEventId!: number

  public fromServerId!: number
  public toServerId!: number

  public static get tableName(): string {
    return 'nodes'
  }

  public static get timestamps(): boolean {
    return false
  }

  public static get jsonSchema(): JSONSchema {
    return {
      type: 'object',
      required: [],
      properties: {
        relationKey: { type: 'string' }
      }
    }
  }

  public static get relationMappings(): RelationMappings {
    return {
      fromProfile: {
        relation: Model.HasOneRelation,
        modelClass: Profile,
        join: {
          from: 'nodes.fromProfileId',
          to: 'profiles.id'
        }
      },
      toProfile: {
        relation: Model.HasOneRelation,
        modelClass: Profile,
        join: {
          from: 'nodes.toProfileId',
          to: 'profiles.id'
        }
      },
      fromAccount: {
        relation: Model.HasOneRelation,
        modelClass: Account,
        join: {
          from: 'nodes.fromAccountId',
          to: 'accounts.id'
        }
      },
      toAccount: {
        relation: Model.HasOneRelation,
        modelClass: Account,
        join: {
          from: 'nodes.toAccountId',
          to: 'accounts.id'
        }
      },
      fromIdea: {
        relation: Model.HasOneRelation,
        modelClass: Idea,
        join: {
          from: 'nodes.fromIdeaId',
          to: 'profiles.id'
        }
      },
      toIdea: {
        relation: Model.HasOneRelation,
        modelClass: Idea,
        join: {
          from: 'nodes.toIdeaId',
          to: 'profiles.id'
        }
      },
      fromProject: {
        relation: Model.HasOneRelation,
        modelClass: Project,
        join: {
          from: 'nodes.fromProjectId',
          to: 'profiles.id'
        }
      },
      toProject: {
        relation: Model.HasOneRelation,
        modelClass: Project,
        join: {
          from: 'nodes.toProjectId',
          to: 'profiles.id'
        }
      },
      fromProduct: {
        relation: Model.HasOneRelation,
        modelClass: Product,
        join: {
          from: 'nodes.fromProductId',
          to: 'profiles.id'
        }
      },
      toProduct: {
        relation: Model.HasOneRelation,
        modelClass: Product,
        join: {
          from: 'nodes.toProductId',
          to: 'profiles.id'
        }
      },
      fromCommunity: {
        relation: Model.HasOneRelation,
        modelClass: Community,
        join: {
          from: 'nodes.fromCommunityId',
          to: 'communities.id'
        }
      },
      toCommunity: {
        relation: Model.HasOneRelation,
        modelClass: Community,
        join: {
          from: 'nodes.toCommunityId',
          to: 'communities.id'
        }
      },
      fromDiscussion: {
        relation: Model.HasOneRelation,
        modelClass: Discussion,
        join: {
          from: 'nodes.fromDiscussionId',
          to: 'discussions.id'
        }
      },
      toDiscussion: {
        relation: Model.HasOneRelation,
        modelClass: Discussion,
        join: {
          from: 'nodes.toDiscussionId',
          to: 'discussions.id'
        }
      },
      fromVote: {
        relation: Model.HasOneRelation,
        modelClass: Vote,
        join: {
          from: 'nodes.fromVoteId',
          to: 'votes.id'
        }
      },
      toVote: {
        relation: Model.HasOneRelation,
        modelClass: Vote,
        join: {
          from: 'nodes.toVoteId',
          to: 'votes.id'
        }
      }
    }
  }

  public from(): any {
    if (this.fromAccountId) return this.fromAccount
    if (this.fromProfileId) return this.fromProfile

    throw new Error('No FROM relation')
  }

  public to(): any {
    if (this.toAccountId) return this.toAccount
    if (this.toProfileId) return this.toProfile

    throw new Error('No TO relation')
  }
}

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
