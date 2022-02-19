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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageStatus = void 0;
var objection_1 = require("objection");
var node_1 = __importStar(require("./node"));
var profile_1 = __importDefault(require("./profile"));
var base_1 = __importDefault(require("./base"));
var discussion_1 = __importDefault(require("./discussion"));
var MessageStatus;
(function (MessageStatus) {
    MessageStatus["Active"] = "active";
    MessageStatus["Disabled"] = "disabled";
    MessageStatus["Removed"] = "removed";
})(MessageStatus = exports.MessageStatus || (exports.MessageStatus = {}));
var Message = /** @class */ (function (_super) {
    __extends(Message, _super);
    function Message() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Message, "tableName", {
        get: function () {
            return 'messages';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Message, "timestamps", {
        get: function () {
            return true;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Message, "jsonSchema", {
        get: function () {
            return {
                type: 'object',
                required: [],
                properties: {
                    owner: {
                        type: 'object'
                    }
                }
            };
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Message, "relationMappings", {
        get: function () {
            return {
                parent: {
                    relation: objection_1.Model.HasOneRelation,
                    modelClass: node_1.default,
                    join: {
                        from: 'messages.parentId',
                        to: 'nodes.id'
                    }
                },
                owner: {
                    relation: objection_1.Model.HasOneRelation,
                    modelClass: profile_1.default,
                    join: {
                        from: 'messages.ownerId',
                        to: 'profiles.id'
                    }
                },
                replies: {
                    relation: objection_1.Model.HasManyRelation,
                    modelClass: Message,
                    join: {
                        from: 'messages.id',
                        to: 'messages.replyToId'
                    }
                },
                replyTo: {
                    relation: objection_1.Model.HasOneRelation,
                    modelClass: Message,
                    join: {
                        from: 'messages.replyToId',
                        to: 'messages.id'
                    }
                },
                discussion: {
                    relation: objection_1.Model.ManyToManyRelation,
                    modelClass: discussion_1.default,
                    beforeInsert: function (model) {
                        model.relationKey = node_1.NodeRelation.Chat;
                    },
                    join: {
                        from: 'messages.id',
                        through: {
                            from: 'nodes.fromMessageId',
                            extra: ['relationKey'],
                            to: 'nodes.toDiscussionId'
                        },
                        to: 'discussions.id'
                    }
                }
            };
        },
        enumerable: false,
        configurable: true
    });
    return Message;
}(base_1.default));
exports.default = Message;
