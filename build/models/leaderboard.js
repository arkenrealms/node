"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const objection_1 = require("objection");
const profile_1 = __importDefault(require("./profile"));
const node_1 = __importDefault(require("./node"));
const base_1 = __importDefault(require("./base"));
// export interface RelationMappings {
//   [relationName: string]: RelationMapping;
// }
// export interface RelationMapping {
//   relation: Relation;
//   modelClass: ModelClass<any> | string;
//   join: RelationJoin;
//   modify?: (queryBuilder: QueryBuilder<any>) => QueryBuilder<any>;
//   filter?: ((queryBuilder: QueryBuilder<any>) => QueryBuilder<any>) | string | object;
//   beforeInsert: any
// }
class Leaderboard extends base_1.default {
    static get tableName() {
        return 'leaderboards';
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
                    from: 'leaderboards.parentId',
                    to: 'nodes.id'
                }
            },
            product: {
                relation: objection_1.Model.HasOneRelation,
                modelClass: node_1.default,
                join: {
                    from: 'leaderboards.productId',
                    to: 'products.id'
                }
            },
            players: {
                relation: objection_1.Model.ManyToManyRelation,
                modelClass: profile_1.default,
                join: {
                    from: 'leaderboards.id',
                    to: 'profiles.id',
                    through: {
                        from: 'nodes.fromLeaderboardId',
                        to: 'nodes.toProfileId',
                        extra: ['relationKey']
                    }
                },
                filter: {
                    relationKey: 'players'
                    // query => query.orderByRaw('coalesce(title, id)') //query => query.where('page:tagable_entity_tag.object_data:type', 'Page')
                },
                beforeInsert(model) {
                    model.relationKey = 'players';
                }
            }
        };
    }
}
exports.default = Leaderboard;
//# sourceMappingURL=leaderboard.js.map