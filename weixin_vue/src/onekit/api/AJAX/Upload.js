/**
 * Created by xxx.
 * Modified by Wangjunjie on 2018/12/24.
 */
import OnekitWX_UDPSocket from "./UDPSocket_"
 class UploadTask {
}

export class OnekitWX_Upload extends OnekitWX_UDPSocket{


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
    /*
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
    }*/
  }
}
