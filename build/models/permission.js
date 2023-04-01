"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const objection_1 = require("objection");
const profile_1 = __importDefault(require("./profile"));
const role_1 = __importDefault(require("./role"));
const base_1 = __importDefault(require("./base"));
class Permission extends base_1.default {
    static get tableName() {
        return 'permissions';
    }
    static get jsonSchema() {
        return {
            type: 'object',
            required: ['key'],
            properties: {
                permissionId: { type: 'integer' },
                key: { type: 'string' }
            }
        };
    }
    static get relationMappings() {
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
    }
}
exports.default = Permission;
//# sourceMappingURL=permission.js.map