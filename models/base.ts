import { Model } from 'objection'

export default class BaseModel extends Model {
  public id!: number
  public key!: string
  public value!: string
  public status!: string
  public meta!: Record<string, any>

  public currentScore!: number
  public dailyScore!: number
  public monthlyScore!: number
  public yearlyScore!: number

  public createdAt!: string
  public updatedAt!: string

  public static idColumn = 'id'

  public $beforeValidate (jsonSchema, json, opt): any {
    // @ts-ignore
    if (this.constructor.timestamps) {
      jsonSchema.properties.createdAt = { type: ['string', 'object'], format: 'date-time' }
      // jsonSchema.properties.updatedAt = { type: ['string', 'object'], format: 'date-time' }
    }

    jsonSchema.properties.id = { type: 'integer' }
    jsonSchema.properties.key = { type: ['string', 'null'] }
    jsonSchema.properties.value = { type: 'string' }
    jsonSchema.properties.status = {
      type: 'string',
      enum: ['active', 'disabled', 'removed'],
      default: 'active'
    }
    jsonSchema.properties.meta = { type: 'object' }

    return jsonSchema
  }

  public $beforeInsert(): any {
    // @ts-ignore
    if (!this.constructor.timestamps) return
    this.createdAt = new Date().toISOString()
  }

  public $beforeUpdate(): any {
    // @ts-ignore
    if (!this.constructor.timestamps) return
    // // @ts-ignore
    // if (typeof this.createdAt === 'function') this.createdAt = this.createdAt.toISOString()
    this.updatedAt = new Date().toISOString()
  }

  public static get namedFilters(): any {
    return {
      active: builder => {
        builder.where('status', 'active')
      }
    }
  }

  // get parent() {
  //   if (this.parentId) return Node.where(id = parentId)

  //   throw new Error("No parent")
  // }

  // $beforeInsert() {
  //   this.createdAt = this.updatedAt = new Date().toISOString()
  // }

  // $beforeUpdate() {
  //   this.updatedAt = new Date().toISOString()
  // }
  // $toDatabaseJson() {
  //   const omit = this.constructor.getRelations()
  //   return this.$$toJson(true, omit, null)
  // }
}

// class MyModel extends BaseModel {
//   static timestamps = true
// }
