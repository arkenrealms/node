"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const objection_1 = require("objection");
const license_1 = __importDefault(require("./license"));
const offer_1 = __importDefault(require("./offer"));
const chain_1 = __importDefault(require("./chain"));
const profile_1 = __importDefault(require("./profile"));
const node_1 = __importDefault(require("./node"));
const base_1 = __importDefault(require("./base"));
class Asset extends base_1.default {
    static get tableName() {
        return 'assets';
    }
    static get timestamps() {
        return true;
    }
    static get jsonSchema() {
        return {
            type: 'object',
            required: [],
            properties: {}
        };
    }
    static get relationMappings() {
        return {
            parent: {
                relation: objection_1.Model.HasOneRelation,
                modelClass: node_1.default,
                join: {
                    from: 'assets.parentId',
                    to: 'nodes.id'
                }
            },
            owner: {
                relation: objection_1.Model.HasOneRelation,
                modelClass: profile_1.default,
                join: {
                    from: 'rewards.ownerId',
                    to: 'profiles.id'
                }
            },
            license: {
                relation: objection_1.Model.HasOneRelation,
                modelClass: license_1.default,
                join: {
                    from: 'assets.licenseId',
                    to: 'licenses.id'
                }
            },
            chain: {
                relation: objection_1.Model.HasOneRelation,
                modelClass: chain_1.default,
                join: {
                    from: 'assets.chainId',
                    to: 'chains.id'
                }
            },
            offers: {
                relation: objection_1.Model.ManyToManyRelation,
                modelClass: offer_1.default,
                filter: {
                    relationKey: 'offers'
                },
                beforeInsert(model) {
                    model.relationKey = 'offers';
                },
                join: {
                    from: 'offers.id',
                    to: 'communities.id',
                    through: {
                        from: 'nodes.fromOfferId',
                        to: 'nodes.toCommunityId',
                        extra: ['relationKey']
                    }
                }
            }
        };
    }
}
exports.default = Asset;
//# sourceMappingURL=asset.js.map