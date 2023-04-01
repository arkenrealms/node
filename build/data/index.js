"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.characterClasses = exports.characterRaces = exports.characterFactions = exports.solarSystems = exports.planets = exports.items = exports.npcs = exports.acts = exports.areas = exports.eras = void 0;
const areas_json_1 = __importDefault(require("./generated/areas.json"));
const eras_json_1 = __importDefault(require("./generated/eras.json"));
const acts_json_1 = __importDefault(require("./generated/acts.json"));
const npcs_json_1 = __importDefault(require("./generated/npcs.json"));
const items_json_1 = __importDefault(require("./generated/items.json"));
const planets_json_1 = __importDefault(require("./generated/planets.json"));
const solarSystems_json_1 = __importDefault(require("./generated/solarSystems.json"));
const characterFactions_json_1 = __importDefault(require("./generated/characterFactions.json"));
const characterRaces_json_1 = __importDefault(require("./generated/characterRaces.json"));
const characterClasses_json_1 = __importDefault(require("./generated/characterClasses.json"));
exports.eras = eras_json_1.default;
exports.areas = areas_json_1.default;
exports.acts = acts_json_1.default;
exports.npcs = npcs_json_1.default;
exports.items = items_json_1.default;
exports.planets = planets_json_1.default;
exports.solarSystems = solarSystems_json_1.default;
exports.characterFactions = characterFactions_json_1.default;
exports.characterRaces = characterRaces_json_1.default;
exports.characterClasses = characterClasses_json_1.default;
//# sourceMappingURL=index.js.map