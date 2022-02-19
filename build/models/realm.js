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
var rating_1 = __importDefault(require("./rating"));
var profile_1 = __importDefault(require("./profile"));
var node_1 = __importDefault(require("./node"));
var base_1 = __importDefault(require("./base"));
var Realm = /** @class */ (function (_super) {
    __extends(Realm, _super);
    function Realm() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Realm, "tableName", {
        get: function () {
            return 'realms';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Realm, "timestamps", {
        get: function () {
            return true;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Realm, "jsonSchema", {
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
    Object.defineProperty(Realm, "relationMappings", {
        get: function () {
            return {
                owner: {
                    relation: objection_1.Model.HasOneThroughRelation,
                    modelClass: profile_1.default,
                    filter: {
                        relationKey: 'owner'
                    },
                    beforeInsert: function (model) {
                        model.relationKey = 'owner';
                    },
                    join: {
                        from: 'realms.id',
                        to: 'profiles.id',
                        through: {
                            from: 'nodes.fromRealmId',
                            to: 'nodes.toProfileId',
                            extra: ['relationKey']
                        }
                    }
                },
                parent: {
                    relation: objection_1.Model.HasOneRelation,
                    modelClass: node_1.default,
                    join: {
                        from: 'realms.parentId',
                        to: 'nodes.id'
                    }
                },
                rating: {
                    relation: objection_1.Model.ManyToManyRelation,
                    modelClass: rating_1.default,
                    join: {
                        from: 'realms.id',
                        to: 'ratings.id',
                        through: {
                            from: 'nodes.fromRealmId',
                            to: 'nodes.toRatingId',
                            extra: ['relationKey']
                        }
                    },
                    filter: {
                        relationKey: 'rating'
                    },
                    beforeInsert: function (model) {
                        console.log(model);
                        model.relationKey = 'rating';
                    }
                },
                // rating: {
                //   relation: Model.HasOneRelation,
                //   modelClass: Rating,
                //   join: {
                //     from: 'realms.ratingId',
                //     to: 'ratings.id'
                //   }
                // },
            };
        },
        enumerable: false,
        configurable: true
    });
    return Realm;
}(base_1.default));
exports.default = Realm;
