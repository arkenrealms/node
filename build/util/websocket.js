"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
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
    _1.log.apply(void 0, __spreadArray(['Emit All'], args));
    io.emit.apply(io, args);
}
exports.emitAll = emitAll;
function emitDirect(socket) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    _1.log.apply(void 0, __spreadArray(['Emit Direct'], args));
    if (!socket || !socket.emit)
        return;
    socket.emit.apply(socket, args);
}
exports.emitDirect = emitDirect;
function getClientSocket(endpoint) {
    _1.log('Connecting to', endpoint);
    return socket_io_client_1.io(endpoint, {
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
