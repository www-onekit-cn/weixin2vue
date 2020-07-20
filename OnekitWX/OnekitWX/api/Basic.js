/**
 * Created by Wangjunjie on 2018/12/24.
 */
var result = false;
class OnekitWX_Basic {
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
}
