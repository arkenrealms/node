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
var vote_1 = __importDefault(require("./vote"));
var profile_1 = __importDefault(require("./profile"));
var base_1 = __importDefault(require("./base"));
var Rating = /** @class */ (function (_super) {
    __extends(Rating, _super);
    function Rating() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Rating, "tableName", {
        get: function () {
            return 'ratings';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Rating, "timestamps", {
        get: function () {
            return true;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Rating, "jsonSchema", {
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
    Object.defineProperty(Rating, "relationMappings", {
        get: function () {
            return {
                owner: {
                    relation: objection_1.Model.HasOneRelation,
                    modelClass: profile_1.default,
                    join: {
                        from: 'ratings.ownerId',
                        to: 'profiles.id'
                    }
                },
                parent: {
                    relation: objection_1.Model.HasOneThroughRelation,
                    modelClass: profile_1.default,
                    filter: {
                        relationKey: 'parent'
                    },
                    beforeInsert: function (model) {
                        model.relationKey = 'parent';
                    },
                    join: {
                        from: 'ratings.id',
                        to: 'profiles.id',
                        through: {
                            from: 'nodes.fromIdeaId',
                            to: 'nodes.toProfileId',
                            extra: ['relationKey']
                        }
                    }
                },
                votes: {
                    relation: objection_1.Model.HasManyRelation,
                    modelClass: vote_1.default,
                    join: {
                        from: 'ratings.id',
                        to: 'votes.ratingId'
                    }
                }
            };
        },
        enumerable: false,
        configurable: true
    });
    return Rating;
}(base_1.default));
exports.default = Rating;
