"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getClientSocket = exports.emitDirect = exports.emitAll = void 0;
var socket_io_client_1 = require("socket.io-client");
var _1 = require(".");
function emitAll(io) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    _1.log.apply(void 0, __spreadArray(['Emit All'], args, false));
    io.emit.apply(io, args);
}
exports.emitAll = emitAll;
function emitDirect(socket) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    _1.log.apply(void 0, __spreadArray(['Emit Direct'], args, false));
    if (!socket || !socket.emit)
        return;
    socket.emit.apply(socket, args);
}
exports.emitDirect = emitDirect;
function getClientSocket(endpoint) {
    (0, _1.log)('Connecting to', endpoint);
    return (0, socket_io_client_1.io)(endpoint, {
        transports: ['websocket'],
        upgrade: false,
        autoConnect: false,
        // pingInterval: 5000,
        // pingTimeout: 20000
        // extraHeaders: {
        //   "my-custom-header": "1234"
        // }
    });
}
exports.getClientSocket = getClientSocket;
