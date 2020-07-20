/**
 * Created by Wangjunjie on 2018/12/25.
 */
class OnekitWX_Record {
  static startRecord(object) {
    let success = object.success;
    let fail = object.success;
    let complete = object.success;
    //////////////////////////////
    try {
      wx.startRecord();
    } catch (error) {
      result.errMsg = error.message;
      console.log(result);
    }
  }

  static stopRecord(object) {
    let success = object.success;
    let fail = object.success;
    let complete = object.success;
    //////////////////////////////
    let result = {};
    let localId;
    wx.stopRecord({
      success: function(res) {
        if (success) {
          result.errMsg = 'startRecord:ok';
          result.tempFilePath = res.localId; // 小程序中会返回录音文件的临时存放路径 tempFilePath ，JS-SDK中会返回录音文件的 localId ，所以这里直接将 localId 赋值给 tempFilePath，让用户获取 tempFilePath 来播放录音。
          success(result);
        }
      },
      fail: function(result) {
        fail(result);
      },
      complete: function(result) {
        if (complete) {
          complete(result);
        }
      }
    });
  }
}
