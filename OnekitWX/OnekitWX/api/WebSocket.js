class SocketTask {
    constructor(socket) {
        this._socket = socket;
    }

    send(object) {
        let data = object.data; // 【必填】需要发送的内容
        let success = object.success;
        let fail = object.fail;
        let complete = object.complete;
        ///////////////////////////////
        this._socket.send(data,success,fail,complete);

    }

    close() {
        //   let code = object.code; // 一个数字值表示关闭连接的状态号，表示连接被关闭的原因。
        //   let reason = object.reason; // 一个可读的字符串，表示连接被关闭的原因。这个字符串必须是不长于 123 字节的 UTF-8 文本（不是字符）。
        // let protocols = object.protocols;
        //  let success = object.success;
        //let fail = object.fail;
        // let complete = object.complete;
        /////////////////////////////////////
        this._socket.close();
    }

    onOpen(callback) {
        this._socket.addEventListener("open", function (event) {
            if (callback) {
                return callback(event);
            }
        });

    }

    onClose(callback) {
        this._socket.addEventListener("close", function (event) {
            if (callback) {
                callback(event);
            }
        });

    }

    onError(callback) {
        this._socket.addEventListener("error", function (event) {
            if (callback) {
                callback(event);
            }
        });
    }

    onMessage(callback) {
        this._socket.addEventListener("message", function (event) {
            if (callback) {
                callback(event.data);
            }
        });

    }
}

class OnekitWX_WebSocket {
    static connectSocket(object) {
        let url = object.url; // 【必填】开发者服务器 wss 接口地址
        let header = object.header; // HTTP Header，Header 中不能设置 Referer
        let protocols = object.protocols; // 子协议数组	1.4.0
        let success = object.success;
        let fail = object.fail;
        let complete = object.complete;
        ///////////////////////////////////
        let socket = new WebSocket(url,header,protocols,success,fail,complete);//, protocols);
        if (!OnekitWX_WebSocket._firstSocketTask) {
            OnekitWX_WebSocket._firstSocketTask = socket;
            socket.addEventListener("open", function (event) {
                if (OnekitWX_WebSocket._onSocketOpen) {
                    return OnekitWX_WebSocket._onSocketOpen(event);
                }
            });
            socket.addEventListener("close", function (event) {
                if (OnekitWX_WebSocket._onSocketClose) {
                    return OnekitWX_WebSocket._onSocketClose(event);
                }
            });
            socket.addEventListener("message", function (event) {
                if (OnekitWX_WebSocket._onSocketMessage) {
                    return OnekitWX_WebSocket._onSocketMessage(event.data);
                }
            });
            socket.addEventListener("error", function (event) {
                if (OnekitWX_WebSocket._onSocketError) {
                    return OnekitWX_WebSocket._onSocketError(event);
                }
            });
        }
        //
        return new SocketTask(socket);
    }


    static sendSocketMessage(object) {
        let data = object.data; // 【必填】需要发送的内容
        //   let success = object.success;
        // let fail = object.fail;
        //  let complete = object.complete;
        ///////////////////////////////
        OnekitWX_WebSocket._firstSocketTask.send(data);

    }

    static closeSocket() {
        OnekitWX_WebSocket._firstSocketTask.close();
    }

    //////////////////////////////

    static onSocketOpen(callback) {
        OnekitWX_WebSocket._onSocketOpen = callback;
    }

    static onSocketMessage(callback) {
        OnekitWX_WebSocket._onSocketMessage = callback;
    }

    static onSocketError(callback) {
        OnekitWX_WebSocket._onSocketError = callback;
    }

    static onSocketClose(callback) {
        OnekitWX_WebSocket._onSocketClose = callback;
    }


}
