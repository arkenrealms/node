import { Model, RelationMappings, JSONSchema } from 'objection'
import Profile from './profile'
import Role from './role'
import BaseModel from './base'

export default class Permission extends BaseModel {
  public static get tableName(): string {
    return 'permissions'
  }

  public static get jsonSchema(): JSONSchema {
    return {
      type: 'object',
      required: ['key'],

      properties: {
        permissionId: { type: 'integer' },
        key: { type: 'string' }
      }
    }
  }

  public static get relationMappings(): RelationMappings {
    return {
      users: {
        relation: Model.ManyToManyRelation,
        modelClass: Profile,
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
        relation: Model.ManyToManyRelation,
        modelClass: Role,
        join: {
          from: 'permissions.id',
          to: 'roles.id',
          through: {
            from: 'roles_permissions.permissionId',
            to: 'roles_permissions.roleId'
          }
        }
      }
    }
  }
}
