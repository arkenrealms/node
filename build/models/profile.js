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
