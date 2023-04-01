"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const objection_1 = require("objection");
class BaseModel extends objection_1.Model {
    $beforeValidate(jsonSchema, json, opt) {
        // @ts-ignore
        if (this.constructor.timestamps) {
            jsonSchema.properties.createdAt = { type: ['string', 'object'], format: 'date-time' };
            // jsonSchema.properties.updatedAt = { type: ['string', 'object'], format: 'date-time' }
        }
        jsonSchema.properties.id = { type: 'integer' };
        jsonSchema.properties.key = { type: ['string', 'null'] };
        jsonSchema.properties.value = { type: 'string' };
        jsonSchema.properties.status = {
            type: 'string',
            enum: ['active', 'disabled', 'removed'],
            default: 'active'
        };
        jsonSchema.properties.meta = { type: 'object' };
        return jsonSchema;
    }
    $beforeInsert() {
        // @ts-ignore
        if (!this.constructor.timestamps)
            return;
        this.createdAt = new Date().toISOString();
    }
    $beforeUpdate() {
        // @ts-ignore
        if (!this.constructor.timestamps)
            return;
        // // @ts-ignore
        // if (typeof this.createdAt === 'function') this.createdAt = this.createdAt.toISOString()
        this.updatedAt = new Date().toISOString();
    }
    static get namedFilters() {
        return {
            active: builder => {
                builder.where('status', 'active');
            }
        };
    }
}
exports.default = BaseModel;
BaseModel.idColumn = 'id';
// class MyModel extends BaseModel {
//   static timestamps = true
// }
//# sourceMappingURL=base.js.map