import { Model, RelationMappings, JSONSchema } from 'objection'
import Profile from './profile'
import Asset from './asset'
import Rating from './rating'
import Tag from './tag'
import Community from './community'
import Idea from './idea'
import Project from './project'
import Discussion from './discussion'
import Server from './game-server'
import File from './file'
import Node from './node'
import BaseModel from './base'
import Vote from './vote'

type Language = any
type SystemRequirement = any
type ProductPlan = any

interface ProductMeta {
  name: string;
  members: Array<Profile>;
  isProposal: boolean;
  price: number;
  oldPrice: number;
  images: Record<string, any>;
  video: string;
  genre: string;
  releaseDate: string;
  developer: string;
  publisher: string;
  developerTags: Array<string>;
  languageSupport: Array<Language>;
  systemRequirements: Array<SystemRequirement>;
  tags: Array<Tag>;
  type: string;
  downloads: number;
  plans: Array<ProductPlan>;
  frequentlyTradedAssets: Array<Asset>;
  saleBox: Record<string, any>;
  assets: Array<Asset>;
  community: Record<string, any>;
  nameUrl: string;
  steamId: number;
  author: string;
}

export default class Product extends BaseModel {
  public parentId!: number
  public score!: number

  public owner!: Profile
  public ownerId!: number

  public rating!: Rating
  public ratingId!: number

  public idea!: Idea
  public ideaId!: number

  public project!: Project
  public projectId!: number

  public meta!: ProductMeta

  public static get tableName(): string {
    return 'products'
  }

  public static get timestamps(): boolean {
    return true
  }

  public static get jsonSchema(): JSONSchema {
    return {
      type: 'object',
      required: [],

      properties: {
      }
    }
  }

  public static get relationMappings(): RelationMappings {
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
        relation: Model.BelongsToOneRelation,
        modelClass: Profile,
        join: {
          from: 'products.ownerId',
          to: 'profiles.id'
        }
      },
      vote: {
        relation: Model.ManyToManyRelation,
        modelClass: Vote,
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
        relation: Model.HasOneRelation,
        modelClass: Rating,
        join: {
          from: 'products.ratingId',
          to: 'ratings.id'
        }
      },
      community: {
        relation: Model.HasOneRelation,
        modelClass: Community,
        join: {
          from: 'products.communityId',
          to: 'communities.id'
        }
      },
      idea: {
        relation: Model.HasOneRelation,
        modelClass: Idea,
        join: {
          from: 'products.ideaId',
          to: 'ideas.id'
        }
      },
      project: {
        relation: Model.HasOneRelation,
        modelClass: Project,
        join: {
          from: 'products.projectId',
          to: 'projects.id'
        }
      },
      subproducts: {
        relation: Model.HasManyRelation,
        modelClass: Product,
        join: {
          from: 'products.id',
          to: 'products.parentId'
        }
      },
      servers: {
        relation: Model.HasManyRelation,
        modelClass: Server,
        join: {
          from: 'products.id',
          to: 'servers.productId'
        }
      },
      updates: {
        relation: Model.ManyToManyRelation,
        modelClass: Discussion,
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
        beforeInsert (model) {
          (model as Node).relationKey = 'updates'
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
        relation: Model.ManyToManyRelation,
        modelClass: File,
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
        beforeInsert (model) {
          (model as Node).relationKey = 'files'
        }
      },
      tags: {
        relation: Model.ManyToManyRelation,
        modelClass: Tag,
        join: {
          from: 'products.id',
          to: 'tags.id',
          through: {
            from: 'nodes.fromProductId',
            to: 'nodes.toTagId',
            extra: ['relationKey'],
            beforeInsert (model) {
              (model as Node).relationKey = 'tags'
            }
          }
        },
        filter: qb => {
          // TODO: simplify this when this issue is resolved https://github.com/Vincit/objection.js/issues/1356
          qb.select('tags.id', 'tags.name', 'node_tags.fromProductId')
          qb.join('nodes as node_tags', 'node_tags.toTagId', 'tags.id')
          qb.where('node_tags.relationKey', '=', 'tags')
          // @ts-ignore
          // TODO: figure this out
          // qb._parentQuery.whereRaw('"nodes"."fromProductId" = "products"."id"')
        }
      },
      internalTags: {
        relation: Model.ManyToManyRelation,
        modelClass: Tag,
        join: {
          from: 'products.id',
          to: 'tags.id',
          through: {
            from: 'nodes.fromProductId',
            to: 'nodes.toTagId',
            extra: ['relationKey'],
            beforeInsert (model) {
              (model as Node).relationKey = 'internalTags'
            }
          }
        },
        filter: qb => {
          // TODO: simplify this when this issue is resolved https://github.com/Vincit/objection.js/issues/1356
          qb.select('tags.id', 'tags.name', 'node_tags.fromProductId')
          qb.join('nodes as node_tags', 'node_tags.toTagId', 'tags.id')
          qb.where('node_tags.relationKey', '=', 'internalTags')
          // @ts-ignore
          // TODO: figure this out
          // qb._parentQuery.whereRaw('"nodes"."fromProductId" = "products"."id"')
        }
      }
    }
  }

  // static get modifiers() {
  //   const knex = this.knex()
  //   return {
  //     released(query) {
  //       query.where('tags.value', 'released')
  //     },
  //     permission(query) {
  //       const accountId = query.context().account.accountId
  //       const permission = query.context().permission

  //       query
  //         .join('accounts', 'accounts.accountId', '=', accountId)
  //         .where(knex.raw(`JSON_CONTAINS(accounts.meta, CAST(CONCAT('{ "permissions": { "${permission}": true }}') AS JSON), '$')`))
  //         .orWhere(knex.raw(`JSON_CONTAINS(accounts.meta, CAST(CONCAT('{ "permissions": { "${permission}": [', products.id, ']}}') AS JSON), '$')`))
  //     },
  //   }
  // }
}
