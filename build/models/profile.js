"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileStatus = void 0;
const objection_1 = require("objection");
const project_1 = __importDefault(require("./project"));
const license_1 = __importDefault(require("./license"));
const order_1 = __importDefault(require("./order"));
const achievement_1 = __importDefault(require("./achievement"));
const account_1 = __importDefault(require("./account"));
const guild_1 = __importDefault(require("./guild"));
const message_1 = __importDefault(require("./message"));
const asset_1 = __importDefault(require("./asset"));
const offer_1 = __importDefault(require("./offer"));
const node_1 = __importDefault(require("./node"));
const realm_1 = __importDefault(require("./realm"));
const badge_1 = __importDefault(require("./badge"));
const collection_1 = __importDefault(require("./collection"));
const event_1 = __importDefault(require("./event"));
const idea_1 = __importDefault(require("./idea"));
const product_1 = __importDefault(require("./product"));
const base_1 = __importDefault(require("./base"));
var ProfileStatus;
(function (ProfileStatus) {
    ProfileStatus["Active"] = "active";
    ProfileStatus["Disabled"] = "disabled";
})(ProfileStatus = exports.ProfileStatus || (exports.ProfileStatus = {}));
class Profile extends base_1.default {
    static get tableName() {
        return 'profiles';
    }
    static get timestamps() {
        return true;
    }
    static get jsonSchema() {
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
    }
    static get modifiers() {
        return {
            publicCols(builder) {
                builder.select(['name', 'avatar', 'id', 'accountId']);
            }
        };
    }
    static get relationMappings() {
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
                beforeInsert(model) {
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
                beforeInsert(model) {
                    model.relationKey = 'orders';
                }
            },
            achievements: {
                relation: objection_1.Model.ManyToManyRelation,
                modelClass: achievement_1.default,
                join: {
                    from: 'profiles.id',
                    to: 'achievements.id',
                    through: {
                        from: 'nodes.fromProfileId',
                        to: 'nodes.toAchievementId',
                        extra: ['relationKey']
                    }
                },
                filter: {
                    relationKey: 'achievements'
                },
                beforeInsert(model) {
                    model.relationKey = 'achievements';
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
                beforeInsert(model) {
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
                beforeInsert(model) {
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
                beforeInsert(model) {
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
                beforeInsert(model) {
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
                beforeInsert(model) {
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
                beforeInsert(model) {
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
                beforeInsert(model) {
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
                beforeInsert(model) {
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
                beforeInsert(model) {
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
                beforeInsert(model) {
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
                beforeInsert(model) {
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
            guild: {
                relation: objection_1.Model.BelongsToOneRelation,
                modelClass: guild_1.default,
                join: {
                    from: 'profiles.guildId',
                    to: 'guilds.id'
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
    }
}
exports.default = Profile;
//# sourceMappingURL=profile.js.map