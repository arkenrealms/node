import { Model, RelationMappings, JSONSchema } from 'objection'
import Profile from './profile'
import Permission from './permission'
import BaseModel from './base'

export default class Role extends BaseModel {
  public static get tableName(): string {
    return 'roles'
  }

  public static get jsonSchema(): JSONSchema {
    return {
      type: 'object',
      required: ['name'],

      properties: {
        id: { type: 'integer' },
        name: { type: 'string' },
        meta: { type: 'object' }
      }
    }
  }

  public static get relationMappings(): RelationMappings {
    return {
      permissions: {
        relation: Model.ManyToManyRelation,
        modelClass: Permission,
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
        relation: Model.ManyToManyRelation,
        modelClass: Profile,
        join: {
          from: 'roles.id',
          to: 'profiles.id',
          through: {
            from: 'roles_profiles.roleId',
            to: 'roles_profiles.userId'
          }
        }
      }
    }
  }
}
