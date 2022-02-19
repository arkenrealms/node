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
var objection_1 = require("objection");
var profile_1 = __importDefault(require("./profile"));
var node_1 = __importDefault(require("./node"));
var base_1 = __importDefault(require("./base"));
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
var Leaderboard = /** @class */ (function (_super) {
    __extends(Leaderboard, _super);
    function Leaderboard() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Leaderboard, "tableName", {
        get: function () {
            return 'leaderboards';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Leaderboard, "timestamps", {
        get: function () {
            return true;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Leaderboard, "jsonSchema", {
        get: function () {
            return {
                type: 'object',
                required: [],
                properties: {}
            };
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Leaderboard, "relationMappings", {
        get: function () {
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
                    beforeInsert: function (model) {
                        model.relationKey = 'players';
                    }
                }
            };
        },
        enumerable: false,
        configurable: true
    });
    return Leaderboard;
}(base_1.default));
exports.default = Leaderboard;
