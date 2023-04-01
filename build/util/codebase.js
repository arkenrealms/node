"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cloneGsCodebase = exports.upgradeGsCodebase = exports.upgradeCodebase = void 0;
const util_1 = __importDefault(require("util"));
const child_process_1 = require("child_process");
const _1 = require("./");
function upgradeCodebase() {
    return __awaiter(this, void 0, void 0, function* () {
        // Pull latest from Git
        const execPromise = util_1.default.promisify(child_process_1.exec);
        try {
            yield execPromise('rm .git/index.lock');
        }
        catch (e2) {
            console.log(e2);
        }
        const { stdout, stderr } = yield execPromise('git add -A && git stash && git pull', { uid: 1000 });
        console.log(stderr, stdout);
        yield (0, _1.wait)(100);
    });
}
exports.upgradeCodebase = upgradeCodebase;
function upgradeGsCodebase() {
    return __awaiter(this, void 0, void 0, function* () {
        // Pull latest from Git
        const execPromise = util_1.default.promisify(child_process_1.exec);
        // try {
        //   await execPromise('cd game-server && rm .git/index.lock', {uid: 1000})
        //   await wait(1000)
        // } catch(e2) {
        //   console.log(e2)
        // }
        const { stdout, stderr } = yield execPromise('cd game-server && git add -A && git stash && git pull origin master', {
            uid: 1000,
        });
        console.log(stderr, stdout);
        yield (0, _1.wait)(100);
    });
}
exports.upgradeGsCodebase = upgradeGsCodebase;
function cloneGsCodebase(repoUri) {
    return __awaiter(this, void 0, void 0, function* () {
        // Pull latest from Git
        const execPromise = util_1.default.promisify(child_process_1.exec);
        // try {
        //   await execPromise('rm -rf game-server', {uid: 1000})
        // } catch(e2) {
        //   console.log(e2)
        // }
        const { stdout, stderr } = yield execPromise(`git clone ${repoUri} game-server`, { uid: 1000 }); // git@github.com:RuneFarm/rune-evolution-game-server.git
        console.log(stderr, stdout);
        yield (0, _1.wait)(100);
    });
}
exports.cloneGsCodebase = cloneGsCodebase;
//# sourceMappingURL=codebase.js.map