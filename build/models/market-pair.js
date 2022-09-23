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
var base_1 = __importDefault(require("./base"));
var MarketPair = /** @class */ (function (_super) {
    __extends(MarketPair, _super);
    function MarketPair() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(MarketPair, "tableName", {
        get: function () {
            return 'marketPairs';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MarketPair, "timestamps", {
        get: function () {
            return true;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MarketPair, "jsonSchema", {
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
    Object.defineProperty(MarketPair, "relationMappings", {
        get: function () {
            return {};
        },
        enumerable: false,
        configurable: true
    });
    return MarketPair;
}(base_1.default));
exports.default = MarketPair;
