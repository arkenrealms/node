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
var profile_1 = __importDefault(require("./profile"));
var role_1 = __importDefault(require("./role"));
var base_1 = __importDefault(require("./base"));
var Permission = /** @class */ (function (_super) {
    __extends(Permission, _super);
    function Permission() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Permission, "tableName", {
        get: function () {
            return 'permissions';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Permission, "jsonSchema", {
        get: function () {
            return {
                type: 'object',
                required: ['key'],
                properties: {
                    permissionId: { type: 'integer' },
                    key: { type: 'string' }
                }
            };
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Permission, "relationMappings", {
        get: function () {
            return {
                users: {
                    relation: objection_1.Model.ManyToManyRelation,
                    modelClass: profile_1.default,
                    join: {
                        from: 'permissions.id',
                        to: 'profiles.id',
                        through: {
                            from: 'profiles_permissions.permissionId',
                            to: 'profiles_permissions.userId'
                        }
                    }
                },
                roles: {
                    relation: objection_1.Model.ManyToManyRelation,
                    modelClass: role_1.default,
                    join: {
                        from: 'permissions.id',
                        to: 'roles.id',
                        through: {
                            from: 'roles_permissions.permissionId',
                            to: 'roles_permissions.roleId'
                        }
                    }
                }
            };
        },
        enumerable: false,
        configurable: true
    });
    return Permission;
}(base_1.default));
exports.default = Permission;
