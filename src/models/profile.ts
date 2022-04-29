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

  public address!: string
  public privateKey!: string
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

// {
//   "address": "0xf9386Ef8B669Fb37feB7F1AFF9cd64bb4a86b6ac",
//   "inventoryItemCount": 0,
//   "equippedItemCount": 0,
//   "marketTradeListedCount": 0,
//   "marketTradeSoldCount": 0,
//   "transferredOutCount": 27,
//   "holdings": {},
//   "points": 8,
//   "username": "The New Normal",
//   "guildId": 4,
//   "joinedGuildAt": 1629050011601,
//   "isGuildMembershipActive": true,
//   "guildMembershipTokenId": 4265,
//   "rewardHistory": [],
//   "rewards": {
//     "runes": {
//       "sol": 0.89,
//       "zod": 19.488999999999997,
//       "shael": 0.99,
//       "dol": 1.41,
//       "tal": 9.496,
//       "thul": 0.77,
//       "amn": 9.171999999999999,
//       "ort": 9.118,
//       "ith": 9.117999999999999,
//       "nef": 8.963,
//       "tir": 0.97,
//       "ral": 8.219,
//       "hel": 8.161999999999999
//     },
//     "items": {
//       "8xhw23c0h": {
//         "name": "Santa Christmas 2021 Ticket",
//         "rarity": "Normal",
//         "quantity": 1
//       },
//       "kGKq9eQble": {
//         "name": "Santa Christmas 2021 Ticket",
//         "rarity": "Normal",
//         "quantity": 1
//       },
//       "6WjdDCBBJW": {
//         "name": "Santa Christmas 2021 Ticket",
//         "rarity": "Normal",
//         "quantity": 1
//       },
//       "NtxgvF_TC": {
//         "name": "Santa Christmas 2021 Ticket",
//         "rarity": "Normal",
//         "quantity": 1
//       },
//       "p9vq2jjNBX": {
//         "name": "Santa Christmas 2021 Ticket",
//         "rarity": "Normal",
//         "quantity": 1
//       },
//       "UB8cq2u9g": {
//         "name": "Santa Christmas 2021 Ticket",
//         "rarity": "Normal",
//         "quantity": 1
//       },
//       "6WdEHgh4jo": {
//         "name": "Santa Christmas 2021 Ticket",
//         "rarity": "Normal",
//         "quantity": 1
//       },
//       "jBekknchrn": {
//         "name": "Santa Christmas 2021 Ticket",
//         "rarity": "Normal",
//         "quantity": 1
//       },
//       "6kchofzpyZ": {
//         "name": "Santa Christmas 2021 Ticket",
//         "rarity": "Normal",
//         "quantity": 1
//       },
//       "y9ruaFCyJ": {
//         "name": "Santa Christmas 2021 Ticket",
//         "rarity": "Normal",
//         "quantity": 1
//       },
//       "Aa1aCisevb": {
//         "name": "Santa Christmas 2021 Ticket",
//         "rarity": "Normal",
//         "quantity": 1
//       },
//       "Nz_eq-pmUs": {
//         "name": "Santa Christmas 2021 Ticket",
//         "rarity": "Normal",
//         "quantity": 1
//       },
//       "xKly8u-Of": {
//         "name": "Santa Christmas 2021 Ticket",
//         "rarity": "Normal",
//         "quantity": 1
//       },
//       "amOBY_P4ks": {
//         "name": "Santa Christmas 2021 Ticket",
//         "rarity": "Normal",
//         "quantity": 1
//       },
//       "RxTVLJ4cmG": {
//         "name": "Santa Christmas 2021 Ticket",
//         "rarity": "Normal",
//         "quantity": 1
//       },
//       "_23VLL2op": {
//         "name": "Santa Christmas 2021 Ticket",
//         "rarity": "Normal",
//         "quantity": 1
//       },
//       "iictuThErF": {
//         "name": "Santa Christmas 2021 Ticket",
//         "rarity": "Normal",
//         "quantity": 1
//       },
//       "Ai_Ui9Rtj": {
//         "name": "Santa Christmas 2021 Ticket",
//         "rarity": "Normal",
//         "quantity": 1
//       },
//       "QNJYw1d1P": {
//         "name": "Santa Christmas 2021 Ticket",
//         "rarity": "Normal",
//         "quantity": 1
//       },
//       "5wLCwjy6ux": {
//         "name": "Santa Christmas 2021 Ticket",
//         "rarity": "Normal",
//         "quantity": 1
//       },
//       "YPXbZKMmY_": {
//         "name": "Santa Christmas 2021 Ticket",
//         "rarity": "Normal",
//         "quantity": 1
//       },
//       "r2MuF7idj0": {
//         "name": "Santa Christmas 2021 Ticket",
//         "rarity": "Normal",
//         "quantity": 1
//       },
//       "-j_s8su_e9": {
//         "name": "Santa Christmas 2021 Ticket",
//         "rarity": "Normal",
//         "quantity": 1
//       },
//       "jXr-3ER3jK": {
//         "name": "Santa Christmas 2021 Ticket",
//         "rarity": "Normal",
//         "quantity": 1
//       },
//       "FIkRBt2LVw": {
//         "name": "Santa Christmas 2021 Ticket",
//         "rarity": "Normal",
//         "quantity": 1
//       },
//       "iGxuZvX1d": {
//         "name": "Santa Christmas 2021 Ticket",
//         "rarity": "Normal",
//         "quantity": 1
//       },
//       "vIpr3JL0k": {
//         "name": "Santa Christmas 2021 Ticket",
//         "rarity": "Normal",
//         "quantity": 1
//       },
//       "5IxK7oHPr8": {
//         "name": "Santa Christmas 2021 Ticket",
//         "rarity": "Normal",
//         "quantity": 1
//       },
//       "83clUcXsII": {
//         "name": "Santa Christmas 2021 Ticket",
//         "rarity": "Normal",
//         "quantity": 1
//       },
//       "_Yc_bCijBC": {
//         "name": "Santa Christmas 2021 Ticket",
//         "rarity": "Normal",
//         "quantity": 1
//       },
//       "h20QfcP4y": {
//         "name": "Santa Christmas 2021 Ticket",
//         "rarity": "Normal",
//         "quantity": 1
//       },
//       "-r6cepCGSi": {
//         "name": "Santa Christmas 2021 Ticket",
//         "rarity": "Normal",
//         "quantity": 1
//       },
//       "5wjfAJEhp": {
//         "name": "Santa Christmas 2021 Ticket",
//         "rarity": "Normal",
//         "quantity": 1
//       },
//       "VeuT73Y9Dk": {
//         "name": "Santa Christmas 2021 Ticket",
//         "rarity": "Normal",
//         "quantity": 1
//       },
//       "XLCV2he7YG": {
//         "name": "Santa Christmas 2021 Ticket",
//         "rarity": "Normal",
//         "quantity": 1
//       },
//       "QyZhNsZupI": {
//         "name": "Santa Christmas 2021 Ticket",
//         "rarity": "Normal",
//         "quantity": 1
//       },
//       "Jx52PDYh4e": {
//         "name": "Guardian Egg",
//         "rarity": "Magical",
//         "quantity": 1
//       },
//       "VspR6z610f": {
//         "name": "Santa Christmas 2021 Ticket",
//         "rarity": "Normal",
//         "quantity": 1
//       },
//       "mEoZLFv5n2": {
//         "name": "Santa Christmas 2021 Ticket",
//         "rarity": "Normal",
//         "quantity": 1
//       },
//       "emecNKpG09": {
//         "name": "Santa Christmas 2021 Ticket",
//         "rarity": "Normal",
//         "quantity": 1
//       },
//       "XZCISfjcQz": {
//         "name": "Santa Christmas 2021 Ticket",
//         "rarity": "Normal",
//         "quantity": 1
//       }
//     }
//   },
//   "lifetimeRewards": {
//     "runes": {
//       "zod": 19.488999999999997,
//       "hel": 8.161999999999999,
//       "ith": 9.117999999999999,
//       "amn": 9.171999999999999,
//       "sol": 0.89,
//       "shael": 0.99,
//       "dol": 1.41,
//       "tal": 9.496,
//       "thul": 0.77,
//       "ort": 9.118,
//       "nef": 8.963,
//       "tir": 0.97,
//       "ral": 8.219
//     },
//     "items": {
//       "8xhw23c0h": {
//         "name": "Santa Christmas 2021 Ticket",
//         "rarity": "Normal",
//         "quantity": 1
//       },
//       "kGKq9eQble": {
//         "name": "Santa Christmas 2021 Ticket",
//         "rarity": "Normal",
//         "quantity": 1
//       },
//       "6WjdDCBBJW": {
//         "name": "Santa Christmas 2021 Ticket",
//         "rarity": "Normal",
//         "quantity": 1
//       },
//       "NtxgvF_TC": {
//         "name": "Santa Christmas 2021 Ticket",
//         "rarity": "Normal",
//         "quantity": 1
//       },
//       "p9vq2jjNBX": {
//         "name": "Santa Christmas 2021 Ticket",
//         "rarity": "Normal",
//         "quantity": 1
//       },
//       "UB8cq2u9g": {
//         "name": "Santa Christmas 2021 Ticket",
//         "rarity": "Normal",
//         "quantity": 1
//       },
//       "6WdEHgh4jo": {
//         "name": "Santa Christmas 2021 Ticket",
//         "rarity": "Normal",
//         "quantity": 1
//       },
//       "jBekknchrn": {
//         "name": "Santa Christmas 2021 Ticket",
//         "rarity": "Normal",
//         "quantity": 1
//       },
//       "6kchofzpyZ": {
//         "name": "Santa Christmas 2021 Ticket",
//         "rarity": "Normal",
//         "quantity": 1
//       },
//       "y9ruaFCyJ": {
//         "name": "Santa Christmas 2021 Ticket",
//         "rarity": "Normal",
//         "quantity": 1
//       },
//       "Aa1aCisevb": {
//         "name": "Santa Christmas 2021 Ticket",
//         "rarity": "Normal",
//         "quantity": 1
//       },
//       "Nz_eq-pmUs": {
//         "name": "Santa Christmas 2021 Ticket",
//         "rarity": "Normal",
//         "quantity": 1
//       },
//       "xKly8u-Of": {
//         "name": "Santa Christmas 2021 Ticket",
//         "rarity": "Normal",
//         "quantity": 1
//       },
//       "amOBY_P4ks": {
//         "name": "Santa Christmas 2021 Ticket",
//         "rarity": "Normal",
//         "quantity": 1
//       },
//       "RxTVLJ4cmG": {
//         "name": "Santa Christmas 2021 Ticket",
//         "rarity": "Normal",
//         "quantity": 1
//       },
//       "_23VLL2op": {
//         "name": "Santa Christmas 2021 Ticket",
//         "rarity": "Normal",
//         "quantity": 1
//       },
//       "iictuThErF": {
//         "name": "Santa Christmas 2021 Ticket",
//         "rarity": "Normal",
//         "quantity": 1
//       },
//       "Ai_Ui9Rtj": {
//         "name": "Santa Christmas 2021 Ticket",
//         "rarity": "Normal",
//         "quantity": 1
//       },
//       "QNJYw1d1P": {
//         "name": "Santa Christmas 2021 Ticket",
//         "rarity": "Normal",
//         "quantity": 1
//       },
//       "5wLCwjy6ux": {
//         "name": "Santa Christmas 2021 Ticket",
//         "rarity": "Normal",
//         "quantity": 1
//       },
//       "YPXbZKMmY_": {
//         "name": "Santa Christmas 2021 Ticket",
//         "rarity": "Normal",
//         "quantity": 1
//       },
//       "r2MuF7idj0": {
//         "name": "Santa Christmas 2021 Ticket",
//         "rarity": "Normal",
//         "quantity": 1
//       },
//       "-j_s8su_e9": {
//         "name": "Santa Christmas 2021 Ticket",
//         "rarity": "Normal",
//         "quantity": 1
//       },
//       "jXr-3ER3jK": {
//         "name": "Santa Christmas 2021 Ticket",
//         "rarity": "Normal",
//         "quantity": 1
//       },
//       "FIkRBt2LVw": {
//         "name": "Santa Christmas 2021 Ticket",
//         "rarity": "Normal",
//         "quantity": 1
//       },
//       "iGxuZvX1d": {
//         "name": "Santa Christmas 2021 Ticket",
//         "rarity": "Normal",
//         "quantity": 1
//       },
//       "vIpr3JL0k": {
//         "name": "Santa Christmas 2021 Ticket",
//         "rarity": "Normal",
//         "quantity": 1
//       },
//       "5IxK7oHPr8": {
//         "name": "Santa Christmas 2021 Ticket",
//         "rarity": "Normal",
//         "quantity": 1
//       },
//       "83clUcXsII": {
//         "name": "Santa Christmas 2021 Ticket",
//         "rarity": "Normal",
//         "quantity": 1
//       },
//       "_Yc_bCijBC": {
//         "name": "Santa Christmas 2021 Ticket",
//         "rarity": "Normal",
//         "quantity": 1
//       },
//       "h20QfcP4y": {
//         "name": "Santa Christmas 2021 Ticket",
//         "rarity": "Normal",
//         "quantity": 1
//       },
//       "-r6cepCGSi": {
//         "name": "Santa Christmas 2021 Ticket",
//         "rarity": "Normal",
//         "quantity": 1
//       },
//       "5wjfAJEhp": {
//         "name": "Santa Christmas 2021 Ticket",
//         "rarity": "Normal",
//         "quantity": 1
//       },
//       "VeuT73Y9Dk": {
//         "name": "Santa Christmas 2021 Ticket",
//         "rarity": "Normal",
//         "quantity": 1
//       },
//       "XLCV2he7YG": {
//         "name": "Santa Christmas 2021 Ticket",
//         "rarity": "Normal",
//         "quantity": 1
//       },
//       "QyZhNsZupI": {
//         "name": "Santa Christmas 2021 Ticket",
//         "rarity": "Normal",
//         "quantity": 1
//       },
//       "Jx52PDYh4e": {
//         "name": "Guardian Egg",
//         "rarity": "Magical",
//         "quantity": 1
//       },
//       "VspR6z610f": {
//         "name": "Santa Christmas 2021 Ticket",
//         "rarity": "Normal",
//         "quantity": 1
//       },
//       "mEoZLFv5n2": {
//         "name": "Santa Christmas 2021 Ticket",
//         "rarity": "Normal",
//         "quantity": 1
//       },
//       "emecNKpG09": {
//         "name": "Santa Christmas 2021 Ticket",
//         "rarity": "Normal",
//         "quantity": 1
//       },
//       "XZCISfjcQz": {
//         "name": "Santa Christmas 2021 Ticket",
//         "rarity": "Normal",
//         "quantity": 1
//       }
//     }
//   },
//   "craftedItemCount": 10,
//   "transferredInCount": 0
// }