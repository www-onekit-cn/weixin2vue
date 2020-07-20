/**
 * Created by xxx.
 * Modified by Wangjunjie on 2018/12/24.
 */
//import {String_header2json} from "../js/js.js"
 class OnekitWX_WebRequest {
  abort() {
    this.jqXHR.abort();
  }
  // TODO: onHeadersReceived(): jquery无法监听 onreadystatechange 事件，使用XMLHttpRequest?
  onHeadersReceived(callback) {
    this.onHeadersReceived_callback = callback;
  }
  // TODO: offHeadersReceived(): jquery无法监听 onreadystatechange 事件，使用XMLHttpRequest?
  offHeadersReceived(callback) {
    this.offHeadersReceived_callback = callback;
  }
}

class OnekitWX_AJAX {
  static request(object) {
    let url = object.url; // 【必填】开发者服务器接口地址
    let data = object.data; // 请求的参数
    let header = object.header; // 设置请求的 header，header 中不能设置 Referer。content-type 默认为 application/json
    let method = object.method || 'GET'; // HTTP 请求方法
    let responseType = object.responseType || 'json'; // 返回的数据格式
    let dataType = object.method || 'text'; // 响应的数据类型
    let success = object.success;
    let fail = object.fail;
    let complete = object.complete;
    //////////////////////////
    let result;
    let request = new OnekitWX_WebRequest();
    let jqXHR = $.ajax({
      url: url,
      data: data,
      headers: header,
      method: method,
      dataType: responseType,
      type: dataType,
      success: function(result, status, xhr) {
        result = {
          data: result,
          header: String_header2json(xhr.getAllResponseHeaders()),
          statusCode: xhr.status
        };
        console.log(result);
        if (success) {
          success(result);
        }
      },
      error: function(res) {
        console.log(res)
        result = res;
        if (fail) {
          fail(result);
        }
      },
      complete: function(res) {
        result = res;
        if (complete) {
          complete(result);
        }
      }
    });
    request.jqXHR = jqXHR;
  }

  // TODO: 未改未测试
  static uploadFile(object) {
    let url = object.url;
    let filePath = object.filePath;
    let name = object.name;
    let header = object.header;
    let formData = object.formData;
    let success = object.success;
    let fail = object.fail;
    let complete = object.complete;
    let result;
    try {
      let params = new FormData();
      formData.append('fileDian', filePath);
      $.ajax({
        url: url,
        type: 'POST',
        headers: header,
        async: false,
        cache: false,
        processData: false, // 告诉jQuery不要去处理发送的数据
        contentType: false, // 告诉jQuery不要去设置Content-Type请求头
        data: params,
        success: function(res) {
          result = {
            uploadFile: 'ok',
            res: eval('(' + res + ')')
          };
          if (res) {
            if (success) {
              success(result);
            }
            if (complete) {
              complete(result);
            }
          }
        },
        error: function(res) {
          throw new Error(res);
        }
      });
    } catch (e) {
      result = { errMsg: e.message };
      if (fail) {
        fail(result);
      }
      if (complete) {
        complete(result);
      }
    }
  }

  // TODO: 未改未测试
  static downloadFile(object) {
    let url = object.url; // 【必填】下载资源的 url
    let header = object.header; // HTTP 请求的 Header，Header 中不能设置 Referer
    let filePath = object.filePath;
    let success = object.success;
    let fail = object.fail;
    let complete = object.complete;
    /////////////////////////////
    let result;
    try {
      $.ajax({
        url: url,
        headers: header,
        dataType: 'arraybuffer',
        success: function(arraybuffer) {
          let shortName = url.substr(url.lastIndexOf('/') + 1);
          let tempFilePath = Onekit_WX.createTempPath(shortName);
          Onekit_WX.tempFiles[tempFilePath] = arraybuffer;
          result = {
            tempFilePath: tempFilePath,
            statusCode: 200
          };
          if (success) {
            success(result);
          }
          if (complete) {
            complete(result);
          }
        },
        error: function(a, b) {
          //alert(url+"\n"+JSON.stringify(a)+"\n"+b);
          throw new Error(a + '\b' + b);
        }
      });
    } catch (e) {
      result = { errMsg: e.toString() };
      if (fail) {
        fail(result);
      }
      if (complete) {
        complete(result);
      }
    }
  }
}
