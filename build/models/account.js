"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const objection_1 = require("objection");
const base_1 = __importDefault(require("./base"));
const profile_1 = __importDefault(require("./profile"));
class Account extends base_1.default {
    static get tableName() {
        return 'accounts';
    }
    static get timestamps() {
        return false;
    }
    static get jsonSchema() {
        return {
            type: 'object',
            required: ['email', 'password'],
            properties: {
                email: { type: 'string' },
                firstName: { type: 'string', minLength: 1, maxLength: 255 },
                lastName: { type: 'string', minLength: 1, maxLength: 255 },
                password: { type: 'string' }
            }
        };
    }
    static get relationMappings() {
        return {
            profiles: {
                relation: objection_1.Model.HasManyRelation,
                modelClass: profile_1.default,
                join: {
                    from: 'accounts.id',
                    to: 'profiles.accountId'
                }
            }
        };
    }
}
exports.default = Account;
//# sourceMappingURL=account.js.map