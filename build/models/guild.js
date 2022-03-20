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
var tag_1 = __importDefault(require("./tag"));
var base_1 = __importDefault(require("./base"));
var Guild = /** @class */ (function (_super) {
    __extends(Guild, _super);
    function Guild() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Guild, "tableName", {
        get: function () {
            return 'trades';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Guild, "timestamps", {
        get: function () {
            return true;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Guild, "jsonSchema", {
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
    Object.defineProperty(Guild, "relationMappings", {
        get: function () {
            return {
                parent: {
                    relation: objection_1.Model.HasOneRelation,
                    modelClass: node_1.default,
                    join: {
                        from: 'servers.parentId',
                        to: 'nodes.id'
                    }
                },
                tags: {
                    relation: objection_1.Model.ManyToManyRelation,
                    modelClass: tag_1.default,
                    join: {
                        from: 'servers.id',
                        to: 'tags.id',
                        through: {
                            from: 'nodes.fromServerId',
                            to: 'nodes.toTagId',
                            extra: ['relationKey']
                        }
                    },
                    filter: {
                        relationKey: 'tags'
                    },
                    beforeInsert: function (model) {
                        model.relationKey = 'tags';
                    }
                }
            };
        },
        enumerable: false,
        configurable: true
    });
    return Guild;
}(base_1.default));
exports.default = Guild;
