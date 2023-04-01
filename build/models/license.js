"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const objection_1 = require("objection");
const node_1 = __importDefault(require("./node"));
const base_1 = __importDefault(require("./base"));
class License extends base_1.default {
    static get tableName() {
        return 'licenses';
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
                    from: 'licenses.parentId',
                    to: 'nodes.id'
                }
            }
        };
    }
}
exports.default = License;
//# sourceMappingURL=license.js.map