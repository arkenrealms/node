"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const objection_1 = require("objection");
const base_1 = __importDefault(require("./base"));
class Guild extends base_1.default {
    static get tableName() {
        return 'guilds';
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
            players: {
                relation: objection_1.Model.HasManyRelation,
                modelClass: Guild,
                join: {
                    from: 'guilds.id',
                    to: 'profiles.guildId'
                }
            },
        };
    }
}
exports.default = Guild;
//# sourceMappingURL=guild.js.map