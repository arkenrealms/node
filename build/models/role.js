"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const objection_1 = require("objection");
const profile_1 = __importDefault(require("./profile"));
const permission_1 = __importDefault(require("./permission"));
const base_1 = __importDefault(require("./base"));
class Role extends base_1.default {
    static get tableName() {
        return 'roles';
    }
    static get jsonSchema() {
        return {
            type: 'object',
            required: ['name'],
            properties: {
                id: { type: 'integer' },
                name: { type: 'string' },
                meta: { type: 'object' }
            }
        };
    }
    static get relationMappings() {
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
    }
}
exports.default = Role;
//# sourceMappingURL=role.js.map