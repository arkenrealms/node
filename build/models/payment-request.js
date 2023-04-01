"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = __importDefault(require("./base"));
class PaymentRequest extends base_1.default {
    static get tableName() {
        return 'payment_requests';
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
        //   parent: {
        //     relation: Model.HasOneRelation,
        //     modelClass: Node,
        //     join: {
        //       from: 'orders.parentId',
        //       to: 'nodes.id'
        //     }
        //   },
        //   profile: {
        //     relation: Model.HasOneRelation,
        //     modelClass: Node,
        //     join: {
        //       from: 'orders.profileId',
        //       to: 'nodes.id'
        //     }
        //   },
        //   items: {
        //     relation: Model.HasManyRelation,
        //     modelClass: Node,
        //     join: {
        //       from: 'orders.id',
        //       through: {
        //         from: 'nodes.fromOrderId',
        //         to: 'nodes.id',
        //         extra: ['relationKey']
        //       },
        //       to: 'nodes.id'
        //     },
        //     filter: {
        //       relationKey: 'items'
        //     },
        //     beforeInsert (model) {
        //       (model as Node).relationKey = 'items'
        //     }
        //   }
        };
    }
}
exports.default = PaymentRequest;
//# sourceMappingURL=payment-request.js.map