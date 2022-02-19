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
var node_1 = __importDefault(require("./node"));
var base_1 = __importDefault(require("./base"));
var Tag = /** @class */ (function (_super) {
    __extends(Tag, _super);
    function Tag() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Tag, "tableName", {
        get: function () {
            return 'tags';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tag, "timestamps", {
        get: function () {
            return true;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tag, "jsonSchema", {
        get: function () {
            return {
                type: 'object',
                required: ['key', 'name', 'meta'],
                properties: {
                    key: { type: 'string' },
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
    Object.defineProperty(Tag, "relationMappings", {
        get: function () {
            return {
                parent: {
                    relation: objection_1.Model.HasOneRelation,
                    modelClass: node_1.default,
                    join: {
                        from: 'tags.parentId',
                        to: 'nodes.id'
                    }
                },
            };
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tag, "modifiers", {
        get: function () {
            return {
                released: function (builder) {
                    builder.where('tags.name', 'Released');
                }
            };
        },
        enumerable: false,
        configurable: true
    });
    return Tag;
}(base_1.default));
exports.default = Tag;
