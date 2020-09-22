import OnekitWX_mDNS from "./mDNS"
import $ from 'jquery'
import thekit from '../../js/thekit'
class RequestTask {
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

export default class OnekitWX_Request extends OnekitWX_mDNS{
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
    let request = new RequestTask();
    let result;
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
          header: thekit.header2json(xhr.getAllResponseHeaders()),
          statusCode: xhr.status
        };
        console.log(result);
        if (success) {
          success(result);
        }
      },
      error: function(res) {
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
    request.jqXHR = {};
    return request;
  }
}
