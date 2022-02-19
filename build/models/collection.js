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
var Collection = /** @class */ (function (_super) {
    __extends(Collection, _super);
    function Collection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Collection, "tableName", {
        get: function () {
            return 'collections';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Collection, "timestamps", {
        get: function () {
            return true;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Collection, "jsonSchema", {
        get: function () {
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
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Collection, "relationMappings", {
        get: function () {
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
        },
        enumerable: false,
        configurable: true
    });
    return Collection;
}(base_1.default));
exports.default = Collection;
