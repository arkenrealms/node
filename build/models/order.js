"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const objection_1 = require("objection");
const node_1 = __importDefault(require("./node"));
const base_1 = __importDefault(require("./base"));
class Order extends base_1.default {
    static get tableName() {
        return 'orders';
    }
    static get timestamps() {
        return true;
    }
    static get jsonSchema() {
        return {
            type: 'object',
            required: [],
            properties: {}
        };
    }
    static get relationMappings() {
        return {
            parent: {
                relation: objection_1.Model.HasOneRelation,
                modelClass: node_1.default,
                join: {
                    from: 'orders.parentId',
                    to: 'nodes.id'
                }
            },
            profile: {
                relation: objection_1.Model.HasOneRelation,
                modelClass: node_1.default,
                join: {
                    from: 'orders.profileId',
                    to: 'nodes.id'
                }
            },
            items: {
                relation: objection_1.Model.HasManyRelation,
                modelClass: node_1.default,
                join: {
                    from: 'orders.id',
                    through: {
                        from: 'nodes.fromOrderId',
                        to: 'nodes.id',
                        extra: ['relationKey']
                    },
                    to: 'nodes.id'
                },
                filter: {
                    relationKey: 'items'
                },
                beforeInsert(model) {
                    model.relationKey = 'items';
                }
            }
        };
    }
}
exports.default = Order;
//# sourceMappingURL=order.js.map