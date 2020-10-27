export default class SocketTask {
  constructor(socket) {
    this._socket = socket
  }

  send(object) {
    const data = object.data
    if (WebSocket._isOpen) {
      this._socket.send(data)
    }
  }

  close() {
    this._socket.close()
  }

  onOpen(callback) {
    const that = this
    this._socket.addEventListener('open', function (event) {
      that._isOpen = true
      if (callback) {
        callback(event)
      }
    })
  }

  onClose(callback) {
    this._socket.addEventListener('close', function (event) {
      if (callback) {
        callback(event)
      }
    })
  }

  onError(callback) {
    this._socket.addEventListener('error', function (event) {
      if (callback) {
        callback(event)
      }
    })
  }

  onMessage(callback) {
    this._socket.addEventListener('message', function (event) {
      if (callback) {
        callback(event)
      }
    })
  }
}
