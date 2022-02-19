"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getClientSocket = void 0;
var socket_io_client_1 = require("socket.io-client");
var _1 = require(".");
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
