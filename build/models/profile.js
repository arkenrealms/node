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
exports.ProfileStatus = void 0;
var objection_1 = require("objection");
var project_1 = __importDefault(require("./project"));
var license_1 = __importDefault(require("./license"));
var order_1 = __importDefault(require("./order"));
var account_1 = __importDefault(require("./account"));
var message_1 = __importDefault(require("./message"));
var asset_1 = __importDefault(require("./asset"));
var offer_1 = __importDefault(require("./offer"));
var node_1 = __importDefault(require("./node"));
var realm_1 = __importDefault(require("./realm"));
var badge_1 = __importDefault(require("./badge"));
var collection_1 = __importDefault(require("./collection"));
var event_1 = __importDefault(require("./event"));
var idea_1 = __importDefault(require("./idea"));
var product_1 = __importDefault(require("./product"));
var base_1 = __importDefault(require("./base"));
var ProfileStatus;
(function (ProfileStatus) {
    ProfileStatus["Active"] = "active";
    ProfileStatus["Disabled"] = "disabled";
})(ProfileStatus = exports.ProfileStatus || (exports.ProfileStatus = {}));
var Profile = /** @class */ (function (_super) {
    __extends(Profile, _super);
    function Profile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Profile, "tableName", {
        get: function () {
            return 'profiles';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Profile, "timestamps", {
        get: function () {
            return true;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Profile, "jsonSchema", {
        get: function () {
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
            };
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Profile, "modifiers", {
        get: function () {
            return {
                publicCols: function (builder) {
                    builder.select(['name', 'avatar', 'id', 'accountId']);
                }
            };
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Profile, "relationMappings", {
        get: function () {
            return {
                // has many realms
                // has many contributions
                // has many friends -> profiles
                // has many wishlistProducts -> nodes fromProfileId = profile.id toProductId
                // has many wishlistAssets -> nodes fromProfileId = profile.id toAssetId isn't null
                licenses: {
                    relation: objection_1.Model.ManyToManyRelation,
                    modelClass: license_1.default,
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
                    beforeInsert: function (model) {
                        model.relationKey = 'licenses';
                    }
                },
                orders: {
                    relation: objection_1.Model.ManyToManyRelation,
                    modelClass: order_1.default,
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
                    beforeInsert: function (model) {
                        model.relationKey = 'orders';
                    }
                },
                messages: {
                    relation: objection_1.Model.ManyToManyRelation,
                    modelClass: message_1.default,
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
                    beforeInsert: function (model) {
                        model.relationKey = 'messages';
                    }
                },
                assets: {
                    relation: objection_1.Model.ManyToManyRelation,
                    modelClass: asset_1.default,
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
                    beforeInsert: function (model) {
                        model.relationKey = 'assets';
                    }
                },
                offers: {
                    relation: objection_1.Model.ManyToManyRelation,
                    modelClass: offer_1.default,
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
                    beforeInsert: function (model) {
                        model.relationKey = 'offers';
                    }
                },
                ideas: {
                    relation: objection_1.Model.ManyToManyRelation,
                    modelClass: idea_1.default,
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
                    beforeInsert: function (model) {
                        model.relationKey = 'ideas';
                    }
                },
                pledges: {
                    relation: objection_1.Model.ManyToManyRelation,
                    modelClass: project_1.default,
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
                    beforeInsert: function (model) {
                        model.relationKey = 'pledges';
                    }
                },
                realms: {
                    relation: objection_1.Model.ManyToManyRelation,
                    modelClass: realm_1.default,
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
                    beforeInsert: function (model) {
                        model.relationKey = 'realms';
                    }
                },
                events: {
                    relation: objection_1.Model.ManyToManyRelation,
                    modelClass: event_1.default,
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
                    beforeInsert: function (model) {
                        model.relationKey = 'events';
                    }
                },
                badges: {
                    relation: objection_1.Model.ManyToManyRelation,
                    modelClass: badge_1.default,
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
                    beforeInsert: function (model) {
                        model.relationKey = 'badges';
                    }
                },
                collections: {
                    relation: objection_1.Model.ManyToManyRelation,
                    modelClass: collection_1.default,
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
                    beforeInsert: function (model) {
                        model.relationKey = 'collections';
                    }
                },
                ownedProducts: {
                    relation: objection_1.Model.ManyToManyRelation,
                    modelClass: product_1.default,
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
                    beforeInsert: function (model) {
                        model.relationKey = 'ownedProducts';
                    }
                },
                wishlists: {
                    relation: objection_1.Model.HasManyRelation,
                    modelClass: node_1.default,
                    join: {
                        from: 'profiles.id',
                        to: 'nodes.id'
                    },
                    filter: {
                        relationKey: 'wishlists'
                    },
                    beforeInsert: function (model) {
                        model.relationKey = 'wishlists';
                    }
                },
                account: {
                    relation: objection_1.Model.BelongsToOneRelation,
                    modelClass: account_1.default,
                    join: {
                        from: 'profiles.accountId',
                        to: 'accounts.id'
                    }
                },
                projects: {
                    relation: objection_1.Model.HasManyRelation,
                    modelClass: project_1.default,
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
            };
        },
        enumerable: false,
        configurable: true
    });
    return Profile;
}(base_1.default));
exports.default = Profile;
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
