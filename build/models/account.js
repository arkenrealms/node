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
var profile_1 = __importDefault(require("./profile"));
var Account = /** @class */ (function (_super) {
    __extends(Account, _super);
    function Account() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Account, "tableName", {
        get: function () {
            return 'accounts';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Account, "timestamps", {
        get: function () {
            return false;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Account, "jsonSchema", {
        get: function () {
            return {
                type: 'object',
                required: ['email', 'password'],
                properties: {
                    email: { type: 'string' },
                    firstName: { type: 'string', minLength: 1, maxLength: 255 },
                    lastName: { type: 'string', minLength: 1, maxLength: 255 },
                    password: { type: 'string' }
                }
            };
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Account, "relationMappings", {
        get: function () {
            return {
                profiles: {
                    relation: objection_1.Model.HasManyRelation,
                    modelClass: profile_1.default,
                    join: {
                        from: 'accounts.id',
                        to: 'profiles.accountId'
                    }
                }
            };
        },
        enumerable: false,
        configurable: true
    });
    return Account;
}(base_1.default));
exports.default = Account;
