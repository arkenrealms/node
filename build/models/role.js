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
var permission_1 = __importDefault(require("./permission"));
var base_1 = __importDefault(require("./base"));
var Role = /** @class */ (function (_super) {
    __extends(Role, _super);
    function Role() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Role, "tableName", {
        get: function () {
            return 'roles';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Role, "jsonSchema", {
        get: function () {
            return {
                type: 'object',
                required: ['name'],
                properties: {
                    id: { type: 'integer' },
                    name: { type: 'string' },
                    meta: { type: 'object' }
                }
            };
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Role, "relationMappings", {
        get: function () {
            return {
                permissions: {
                    relation: objection_1.Model.ManyToManyRelation,
                    modelClass: permission_1.default,
                    join: {
                        from: 'roles.roleId',
                        to: 'permissions.permissionId',
                        through: {
                            from: 'roles_permissions.roleId',
                            to: 'roles_permissions.permissionId'
                        }
                    }
                },
                profiles: {
                    relation: objection_1.Model.ManyToManyRelation,
                    modelClass: profile_1.default,
                    join: {
                        from: 'roles.id',
                        to: 'profiles.id',
                        through: {
                            from: 'roles_profiles.roleId',
                            to: 'roles_profiles.userId'
                        }
                    }
                }
            };
        },
        enumerable: false,
        configurable: true
    });
    return Role;
}(base_1.default));
exports.default = Role;
