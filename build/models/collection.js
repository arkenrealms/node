"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const objection_1 = require("objection");
const profile_1 = __importDefault(require("./profile"));
const node_1 = __importDefault(require("./node"));
const base_1 = __importDefault(require("./base"));
class Collection extends base_1.default {
    static get tableName() {
        return 'collections';
    }
    static get timestamps() {
        return true;
    }
    static get jsonSchema() {
        return {
            type: 'object',
            required: ['name', 'meta'],
            properties: {
                name: { type: 'string' },
                meta: {
                    type: 'object',
                    required: ['author', 'assets'],
                    properties: {
                        author: { type: 'string' },
                        assets: { type: 'array' },
                        background: { type: ['string', 'null'] },
                        estimatedValue: { type: 'integer' }
                    }
                }
            }
        };
    }
    static get relationMappings() {
        return {
            owner: {
                relation: objection_1.Model.BelongsToOneRelation,
                modelClass: profile_1.default,
                join: {
                    from: 'collections.ownerId',
                    to: 'profiles.id'
                }
            },
            // owner: {
            //   relation: Model.HasOneThroughRelation,
            //   modelClass: Profile,
            //   filter: (qb) => {
            //     // TODO: simplify this when this issue is resolved https://github.com/Vincit/objection.js/issues/1356
            //     qb.select('profiles.id', 'node_profiles.fromCollectionId')
            //     qb.join('nodes as node_profiles', 'node_profiles.toProfileId', 'profiles.id')
            //     qb.where('node_profiles.relationKey', '=', 'owner')
            //     // @ts-ignore
            //     qb._parentQuery.whereRaw('"owner"."fromCollectionId" = "collections"."id"')
            //   },
            //   join: {
            //     from: 'collections.id',
            //     to: 'profiles.id',
            //     through: {
            //       from: 'nodes.fromCollectionId',
            //       to: 'nodes.toProfileId',
            //       extra: ['relationKey'],
            //       beforeInsert(model) {
            //         (model as Node).relationKey = 'owner'
            //       }
            //     }
            //   }
            // },
            parent: {
                relation: objection_1.Model.HasOneRelation,
                modelClass: node_1.default,
                join: {
                    from: 'collections.parentId',
                    to: 'nodes.id'
                }
            }
        };
    }
}
exports.default = Collection;
//# sourceMappingURL=collection.js.map