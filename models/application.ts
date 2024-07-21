
import { Model, RelationMappings, JSONSchema } from 'objection'
import BaseModel from './base'

export default class Application extends BaseModel {

  public static get tableName(): string {
    return 'applications'
  }

  public static get timestamps(): boolean {
    return true
  }

  public static get jsonSchema(): JSONSchema {
    return {
      type: 'object',
      required: [],
      properties: {
      }
    }
  }

  public static get relationMappings(): RelationMappings {
    return {
    }
  }
}
