import { io } from 'socket.io-client'
import { log } from '.'

export function getClientSocket(endpoint) {
  log('Connecting to', endpoint)
  return io(endpoint, {
    transports: ['websocket'],
    upgrade: false,
    autoConnect: false,
    // pingInterval: 5000,
    // pingTimeout: 20000
    // extraHeaders: {
    //   "my-custom-header": "1234"
    // }
  })
}

