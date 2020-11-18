 export default class SocketTask {
  constructor(socket){
    this.socket = socket;
  }
   send(object) {
    let data = object.data;
    if (WebSocket._isOpen) {
      this.socket.send(data);
    }
  }

   close() {
    this.socket.close();
  }

   onOpen(callback) {
    let that = this;
      this.socket.addEventListener("open",function(event) {
        that._isOpen = true;
        if (callback) {
          return callback(event);
        }
      });

  }
   onClose(callback) {
     this.socket.addEventListener("close",function(event) {
        if (callback) {
          callback(event);
        }
      });

  }
   onError(callback) {
      this.socket.addEventListener("error",function(event) {
        if (callback) {
          callback(event);
        }
      });
  }

   onMessage(callback) {
     this.socket.addEventListener("message",function(event) {
        if (callback) {
          callback(event);
        }
     });

  }
}
