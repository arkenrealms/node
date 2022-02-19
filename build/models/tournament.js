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
var Tournament = /** @class */ (function (_super) {
    __extends(Tournament, _super);
    function Tournament() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Tournament, "tableName", {
        get: function () {
            return 'tournaments';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tournament, "timestamps", {
        get: function () {
            return true;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tournament, "jsonSchema", {
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
    Object.defineProperty(Tournament, "relationMappings", {
        get: function () {
            return {
                parent: {
                    relation: objection_1.Model.HasOneRelation,
                    modelClass: node_1.default,
                    join: {
                        from: 'tournaments.parentId',
                        to: 'nodes.id'
                    }
                }
            };
        },
        enumerable: false,
        configurable: true
    });
    return Tournament;
}(base_1.default));
exports.default = Tournament;
