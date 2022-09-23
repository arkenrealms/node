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
var chain_1 = __importDefault(require("./chain"));
var base_1 = __importDefault(require("./base"));
var Action = /** @class */ (function (_super) {
    __extends(Action, _super);
    function Action() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Action, "tableName", {
        get: function () {
            return 'actions';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Action, "timestamps", {
        get: function () {
            return true;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Action, "jsonSchema", {
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
    Object.defineProperty(Action, "relationMappings", {
        get: function () {
            return {
                chain: {
                    relation: objection_1.Model.HasOneRelation,
                    modelClass: chain_1.default,
                    join: {
                        from: 'assets.chainId',
                        to: 'assets.id'
                    }
                },
            };
        },
        enumerable: false,
        configurable: true
    });
    return Action;
}(base_1.default));
exports.default = Action;
