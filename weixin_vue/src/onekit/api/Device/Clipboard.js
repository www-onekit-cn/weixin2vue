/**
 * Created by zhangjin on 2018/4/26.
 * Modified by Wangjunjie on 2018/12/26.
 */
import OnekitWX_CaptureScreen from "./CaptureScreen"
export default class OnekitWX_Clipboard extends OnekitWX_CaptureScreen{
  static setClipboardData(object) {
    let data = object.data; // 【必填】剪贴板的内容
    let success = object.success;
    let fail = object.fail;
    let complete = object.complete;
    /////////////////////////////
    let result = {};
    try {
      // let oDiv = document.createElement('div');
      // oDiv.innerHTML = "<textarea  id='onekit_clipboard' style='opacity: 0'>" + data + '</textarea>';
      // document.body.appendChild(oDiv);
      // let Url2 = document.getElementById('onekit_clipboard');
      // Url2.select(); // 选择对象
      // document.execCommand('copy'); // 执行浏览器复制命令
      // result.errMsg = 'setClipboardData:ok';
      // if (success) {
      //   success(result);
      // }
      // if (complete) {
      //   complete(result);
      // }
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

  static getClipboardData(object) {
    let success = object.success;
    let fail = object.fail;
    let complete = object.complete;
    var result = {};
    try {
      // var clipboardData = clipboardData.getData('Text'); // 只能在 IE 浏览器中获取剪贴板内容
      // result.errMsg = 'getClipboardData:ok';
      // result.data = clipboardData;
      // if (success) {
      //   success(result);
      // }
      // if (complete) {
      //   complete(result);
      // }
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
}
