/**
 * Created by Wangjunjie on 2018/12/24.
 */
import OnekitWX_App from "./App"
export default class OnekitWX_Basic extends OnekitWX_App {
  static canIUse(apiId) {
    return true;
    /*
    var apiId = apiId;

    wx.checkJsApi({
      jsApiList: [apiId], // 需要检测的JS接口列表，所有JS接口列表见附录2,
      success: function(res) {
        // 以键值对的形式返回，可用的 api 值true，不可用为false
        // 如：{"checkResult":{"chooseImage":true},"errMsg":"checkJsApi:ok"}
        result = res.checkResult[apiId] === true ? true : false;
      }
    });
    return result;*/
  }
  //64转array
  static base64ToArrayBuffer(base64) {
    base64 = base64.replace(/\s/g, '+');
    let commonContent = Buffer.from(base64, 'base64');
    return commonContent;
  }
  //arrayz转64
  static arrayBufferToBase64(arrayBuffer) {
    var binary = '';
    var len = arrayBuffer.byteLength;
    for (var i = 0; i < len; i++) {
      binary += String.fromCharCode(arrayBuffer[i]);
    }
    console.log(len);
    return window.btoa(binary);
  }
}
