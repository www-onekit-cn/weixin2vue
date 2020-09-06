import OnekitWX_Upload from "./Upload"
import SocketTask from "./SocketTask"
export default class OnekitWX_WebSocket extends OnekitWX_Upload{
  static connectSocket(object) {
    let url = object.url; // 【必填】开发者服务器 wss 接口地址
   // let header = object.header; // HTTP Header，Header 中不能设置 Referer
    let protocols = object.protocols; // 子协议数组	1.4.0
   // let success = object.success;
  //  let fail = object.fail;
  //  let complete = object.complete;
    ///////////////////////////////////
    let socket = new WebSocket(url, protocols);
    /*
    */
    let socketTask = new SocketTask(socket);
    if (!OnekitWX_WebSocket._socketTask) {
      OnekitWX_WebSocket._socketTask = socketTask;
    }
    return socketTask;
  }

  static onSocketOpen(callback) {
    if (OnekitWX_WebSocket._socketTask) {
      OnekitWX_WebSocket._socketTask._socket.addEventListener("open", function(event) {
        if (callback) {
          return callback(event);
        }
      });
    }
  }

  static sendSocketMessage(object) {
    let data = object.data; // 【必填】需要发送的内容
 //   let success = object.success;
   // let fail = object.fail;
  //  let complete = object.complete;
    ///////////////////////////////
    if (OnekitWX_WebSocket._socketTask) {
      OnekitWX_WebSocket._socketTask.send(data);
    }
  }

  static onSocketMessage(callback) {
    if (OnekitWX_WebSocket._socketTask) {
      OnekitWX_WebSocket._socketTask._socket.addEventListener("message", function(event) {
        if (callback) {
          callback(event);
        }
      });
    }
  }

  static onSocketError(callback) {
    if (OnekitWX_WebSocket._socketTask) {
      OnekitWX_WebSocket._socketTask._socket.addEventListener("error", callback);
    }
  }

  static onSocketClose(callback) {
    if (OnekitWX_WebSocket._socketTask) {
      OnekitWX_WebSocket._socketTask._socket.addEventListener("close", function(event) {
        if (callback) {
          callback(event);
        }
      });
    }
  }

  static closeSocket() {
    OnekitWX_WebSocket._socketTask.close();
  }
}
