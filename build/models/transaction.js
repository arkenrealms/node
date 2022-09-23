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
var base_1 = __importDefault(require("./base"));
var chain_1 = __importDefault(require("./chain"));
var Transaction = /** @class */ (function (_super) {
    __extends(Transaction, _super);
    function Transaction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Transaction, "tableName", {
        get: function () {
            return 'transactions';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Transaction, "timestamps", {
        get: function () {
            return true;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Transaction, "jsonSchema", {
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
    Object.defineProperty(Transaction, "relationMappings", {
        get: function () {
            return {
                chain: {
                    relation: objection_1.Model.HasOneRelation,
                    modelClass: chain_1.default,
                    join: {
                        from: 'transactions.chainId',
                        to: 'chains.id'
                    }
                },
            };
        },
        enumerable: false,
        configurable: true
    });
    return Transaction;
}(base_1.default));
exports.default = Transaction;
