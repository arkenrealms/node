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
var license_1 = __importDefault(require("./license"));
var offer_1 = __importDefault(require("./offer"));
var node_1 = __importDefault(require("./node"));
var base_1 = __importDefault(require("./base"));
var Asset = /** @class */ (function (_super) {
    __extends(Asset, _super);
    function Asset() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Asset, "tableName", {
        get: function () {
            return 'assets';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Asset, "timestamps", {
        get: function () {
            return true;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Asset, "jsonSchema", {
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
    Object.defineProperty(Asset, "relationMappings", {
        get: function () {
            return {
                parent: {
                    relation: objection_1.Model.HasOneRelation,
                    modelClass: node_1.default,
                    join: {
                        from: 'assets.parentId',
                        to: 'nodes.id'
                    }
                },
                license: {
                    relation: objection_1.Model.HasOneRelation,
                    modelClass: license_1.default,
                    join: {
                        from: 'assets.licenseId',
                        to: 'assets.id'
                    }
                },
                offers: {
                    relation: objection_1.Model.ManyToManyRelation,
                    modelClass: offer_1.default,
                    filter: {
                        relationKey: 'offers'
                    },
                    beforeInsert: function (model) {
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
        },
        enumerable: false,
        configurable: true
    });
    return Asset;
}(base_1.default));
exports.default = Asset;
