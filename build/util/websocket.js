"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getClientSocket = exports.emitDirect = exports.emitAll = void 0;
const socket_io_client_1 = require("socket.io-client");
const _1 = require(".");
function emitAll(io, ...args) {
    (0, _1.log)('Emit All', ...args);
    io.emit(...args);
}
exports.emitAll = emitAll;
function emitDirect(socket, ...args) {
    (0, _1.log)('Emit Direct', ...args);
    if (!socket || !socket.emit)
        return;
    socket.emit(...args);
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
//# sourceMappingURL=websocket.js.map