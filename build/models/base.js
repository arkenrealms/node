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
Object.defineProperty(exports, "__esModule", { value: true });
var objection_1 = require("objection");
var BaseModel = /** @class */ (function (_super) {
    __extends(BaseModel, _super);
    function BaseModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BaseModel.prototype.$beforeValidate = function (jsonSchema, json, opt) {
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
    };
    BaseModel.prototype.$beforeInsert = function () {
        // @ts-ignore
        if (!this.constructor.timestamps)
            return;
        this.createdAt = new Date().toISOString();
    };
    BaseModel.prototype.$beforeUpdate = function () {
        // @ts-ignore
        if (!this.constructor.timestamps)
            return;
        // // @ts-ignore
        // if (typeof this.createdAt === 'function') this.createdAt = this.createdAt.toISOString()
        this.updatedAt = new Date().toISOString();
    };
    Object.defineProperty(BaseModel, "namedFilters", {
        get: function () {
            return {
                active: function (builder) {
                    builder.where('status', 'active');
                }
            };
        },
        enumerable: false,
        configurable: true
    });
    BaseModel.idColumn = 'id';
    return BaseModel;
}(objection_1.Model));
exports.default = BaseModel;
// class MyModel extends BaseModel {
//   static timestamps = true
// }
