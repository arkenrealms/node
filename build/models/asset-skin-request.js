"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const objection_1 = require("objection");
const chain_1 = __importDefault(require("./chain"));
const asset_1 = __importDefault(require("./asset"));
const profile_1 = __importDefault(require("./profile"));
const base_1 = __importDefault(require("./base"));
class AssetSkinRequest extends base_1.default {
    static get tableName() {
        return 'asset_skin_requests';
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
            owner: {
                relation: objection_1.Model.HasOneRelation,
                modelClass: profile_1.default,
                join: {
                    from: 'rewards.ownerId',
                    to: 'profiles.id'
                }
            },
            asset: {
                relation: objection_1.Model.HasOneRelation,
                modelClass: asset_1.default,
                join: {
                    from: 'asset_skin_requests.assetId',
                    to: 'assets.id'
                }
            },
            chain: {
                relation: objection_1.Model.HasOneRelation,
                modelClass: chain_1.default,
                join: {
                    from: 'asset_skin_requests.chainId',
                    to: 'assets.id'
                }
            },
        };
    }
}
exports.default = AssetSkinRequest;
//# sourceMappingURL=asset-skin-request.js.map