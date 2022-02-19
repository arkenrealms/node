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
// has one asset or ??
var objection_1 = require("objection");
var profile_1 = __importDefault(require("./profile"));
var node_1 = __importDefault(require("./node"));
var base_1 = __importDefault(require("./base"));
var Offer = /** @class */ (function (_super) {
    __extends(Offer, _super);
    function Offer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Offer, "tableName", {
        get: function () {
            return 'offers';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Offer, "timestamps", {
        get: function () {
            return true;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Offer, "jsonSchema", {
        get: function () {
            return {
                type: 'object',
                required: [],
                properties: {
                    ownerId: { type: 'integer' },
                    address: { type: 'string' }
                }
            };
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Offer, "relationMappings", {
        get: function () {
            return {
                parent: {
                    relation: objection_1.Model.HasOneRelation,
                    modelClass: node_1.default,
                    join: {
                        from: 'offers.parentId',
                        to: 'nodes.id'
                    }
                },
                owner: {
                    relation: objection_1.Model.HasOneRelation,
                    modelClass: profile_1.default,
                    join: {
                        from: 'offers.ownerId',
                        to: 'profiles.id'
                    }
                }
            };
        },
        enumerable: false,
        configurable: true
    });
    return Offer;
}(base_1.default));
exports.default = Offer;
