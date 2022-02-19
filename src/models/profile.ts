import { JSONSchema, Model, RelationMappings } from 'objection'
import Project from './project'
import License from './license'
import Order from './order'
import Account from './account'
import Message from './message'
import Asset from './asset'
import Offer from './offer'
import Node from './node'
import Realm from './realm'
import Badge from './badge'
import Collection from './collection'
import Event from './event'
import Idea from './idea'
import Product from './product'
import Role from './role'
import Permission from './permission'
import BaseModel from './base'
import Vote from './vote'

export enum ProfileStatus {
  Active = 'active',
  Disabled = 'disabled'
}

export default class Profile extends BaseModel {
  public parentId!: number

  public accountId!: number
  public role!: string // [user, developer, curator]
  public reputation!: number // based on events

  public ideas!: Array<Idea>
  public projects!: Array<Project>
  public products!: Array<Product>
  public licenses!: Array<License>
  public orders!: Array<Order>
  public messages!: Array<Message>
  public assets!: Array<Asset>
  public offers!: Array<Offer>
  public badges!: Array<Badge>
  public events!: Array<Event>
  public collections!: Array<Collection>
  public wishlists!: Array<Node>

  public static get tableName(): string {
    return 'profiles'
  }

  public static get timestamps(): boolean {
    return true
  }

  public static get jsonSchema(): JSONSchema {
    return {
      type: 'object',
      required: [],
      properties: {}
      // required: ['accountId'],

      // properties: {
      //   accountId: { type: 'integer' },
      //   address: { type: ['string', 'null'] },
      //   role: {
      //     type: 'string',
      //     enum: ['user', 'developer', 'curator'],
      //     default: 'user'
      //   }
      // }
    }
  }

  static get modifiers () {
    return {
      publicCols (builder) {
        builder.select(['name', 'avatar', 'id', 'accountId'])
      }
    }
  }

  public static get relationMappings(): RelationMappings {
    return {
      // has many realms
      // has many contributions
      // has many friends -> profiles
      // has many wishlistProducts -> nodes fromProfileId = profile.id toProductId
      // has many wishlistAssets -> nodes fromProfileId = profile.id toAssetId isn't null
      licenses: {
        relation: Model.ManyToManyRelation,
        modelClass: License,
        join: {
          from: 'profiles.id',
          to: 'licenses.id',
          through: {
            from: 'nodes.fromProfileId',
            to: 'nodes.toLicenseId',
            extra: ['relationKey']
          }
        },
        filter: {
          relationKey: 'licenses'
        },
        beforeInsert (model) {
          (model as Node).relationKey = 'licenses'
        }
      },
      orders: {
        relation: Model.ManyToManyRelation,
        modelClass: Order,
        join: {
          from: 'profiles.id',
          to: 'orders.id',
          through: {
            from: 'nodes.fromProfileId',
            to: 'nodes.toOrderId',
            extra: ['relationKey']
          }
        },
        filter: {
          relationKey: 'orders'
        },
        beforeInsert (model) {
          (model as Node).relationKey = 'orders'
        }
      },
      messages: {
        relation: Model.ManyToManyRelation,
        modelClass: Message,
        join: {
          from: 'profiles.id',
          to: 'messages.id',
          through: {
            from: 'nodes.fromProfileId',
            to: 'nodes.toMessageId',
            extra: ['relationKey']
          }
        },
        filter: {
          relationKey: 'messages'
        },
        beforeInsert (model) {
          (model as Node).relationKey = 'messages'
        }
      },
      assets: {
        relation: Model.ManyToManyRelation,
        modelClass: Asset,
        join: {
          from: 'profiles.id',
          to: 'assets.id',
          through: {
            from: 'nodes.fromProfileId',
            to: 'nodes.toAssetId',
            extra: ['relationKey']
          }
        },
        filter: {
          relationKey: 'assets'
        },
        beforeInsert (model) {
          (model as Node).relationKey = 'assets'
        }
      },
      offers: {
        relation: Model.ManyToManyRelation,
        modelClass: Offer,
        join: {
          from: 'profiles.id',
          to: 'offers.id',
          through: {
            from: 'nodes.fromProfileId',
            to: 'nodes.toOfferId',
            extra: ['relationKey']
          }
        },
        filter: {
          relationKey: 'offers'
        },
        beforeInsert (model) {
          (model as Node).relationKey = 'offers'
        }
      },
      ideas: {
        relation: Model.ManyToManyRelation,
        modelClass: Idea,
        join: {
          from: 'profiles.id',
          to: 'ideas.id',
          through: {
            from: 'nodes.fromProfileId',
            to: 'nodes.toIdeaId',
            extra: ['relationKey']
          }
        },
        filter: {
          relationKey: 'ideas'
        },
        beforeInsert (model) {
          (model as Node).relationKey = 'ideas'
        }
      },
      pledges: {
        relation: Model.ManyToManyRelation,
        modelClass: Project,
        join: {
          from: 'profiles.id',
          to: 'projects.id',
          through: {
            from: 'nodes.toProfileId',
            to: 'nodes.fromProjectId',
            extra: ['relationKey']
          }
        },
        filter: {
          relationKey: 'pledges'
        },
        beforeInsert (model) {
          (model as Node).relationKey = 'pledges'
        }
      },
      realms: {
        relation: Model.ManyToManyRelation,
        modelClass: Realm,
        join: {
          from: 'profiles.id',
          to: 'realms.id',
          through: {
            from: 'nodes.fromProfileId',
            to: 'nodes.toRealmId',
            extra: ['relationKey']
          }
        },
        filter: {
          relationKey: 'realms'
        },
        beforeInsert (model) {
          (model as Node).relationKey = 'realms'
        }
      },
      events: {
        relation: Model.ManyToManyRelation,
        modelClass: Event,
        join: {
          from: 'profiles.id',
          to: 'events.id',
          through: {
            from: 'nodes.fromProfileId',
            to: 'nodes.toEventId',
            extra: ['relationKey']
          }
        },
        filter: {
          relationKey: 'events'
        },
        beforeInsert (model) {
          (model as Node).relationKey = 'events'
        }
      },
      badges: {
        relation: Model.ManyToManyRelation,
        modelClass: Badge,
        join: {
          from: 'profiles.id',
          to: 'badges.id',
          through: {
            from: 'nodes.fromProfileId',
            to: 'nodes.toBadgeId',
            extra: ['relationKey']
          }
        },
        filter: {
          relationKey: 'badges'
        },
        beforeInsert (model) {
          (model as Node).relationKey = 'badges'
        }
      },
      collections: {
        relation: Model.ManyToManyRelation,
        modelClass: Collection,
        join: {
          from: 'profiles.id',
          to: 'collections.id',
          through: {
            from: 'nodes.fromProfileId',
            to: 'nodes.toCollectionId',
            extra: ['relationKey']
          }
        },
        filter: {
          relationKey: 'collections'
        },
        beforeInsert (model) {
          (model as Node).relationKey = 'collections'
        }
      },
      ownedProducts: {
        relation: Model.ManyToManyRelation,
        modelClass: Product,
        join: {
          from: 'profiles.id',
          to: 'products.id',
          through: {
            from: 'nodes.fromProfileId',
            to: 'nodes.toProductId',
            extra: ['relationKey']
          }
        },
        filter: {
          relationKey: 'ownedProducts'
        },
        beforeInsert (model) {
          (model as Node).relationKey = 'ownedProducts'
        }
      },
      wishlists: {
        relation: Model.HasManyRelation,
        modelClass: Node,
        join: {
          from: 'profiles.id',
          to: 'nodes.id'
        },
        filter: {
          relationKey: 'wishlists'
        },
        beforeInsert (model) {
          (model as Node).relationKey = 'wishlists'
        }
      },
      account: {
        relation: Model.BelongsToOneRelation,
        modelClass: Account,
        join: {
          from: 'profiles.accountId',
          to: 'accounts.id'
        }
      },
      projects: {
        relation: Model.HasManyRelation,
        modelClass: Project,
        join: {
          from: 'profiles.id',
          to: 'projects.ownerId'
        }
      }
      // projects: {
      //   relation: Model.ManyToManyRelation,
      //   modelClass: Project,
      //   join: {
      //     from: 'accounts.id',
      //     through: {
      //       from: 'project_members.accountId',
      //       to: 'project_members.projectId',
      //       modelClass: ProjectMember,
      //       extra: ['isAdmin']
      //     },
      //     to: 'projects.id'
      //   }
      // }
    }
  }
}
