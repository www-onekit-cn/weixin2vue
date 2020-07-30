/**
 * Created by xxx.
 * Modified by Wangjunjie on 2018/12/24.
 */
import OnekitWX_AD from "../AD/AD"
import OneKit from "../../TheKit"
class DownloadTask {

}

export class OnekitWX_Download extends OnekitWX_AD {

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
  /*
      $.ajax({
        url: url,
        headers: header,
        dataType: 'arraybuffer',
        success: function (arraybuffer) {
          let shortName = url.substr(url.lastIndexOf('/') + 1);
          let tempFilePath = OneKit.createTempPath(shortName);
          OneKit.tempFiles[tempFilePath] = arraybuffer;
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
        error: function (a, b) {
          //alert(url+"\n"+JSON.stringify(a)+"\n"+b);
          throw new Error(a + '\b' + b);
        }
      });
    } catch (e) {
      result = {
        errMsg: e.toString()
      };
      if (fail) {
        fail(result);
      }
      if (complete) {
        complete(result);
      }
    }*/
  }
}
