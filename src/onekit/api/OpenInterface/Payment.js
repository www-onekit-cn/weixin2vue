import OnekitWX_Monitor from "./Monitor"
export default class OnekitWX_Payment extends OnekitWX_Monitor{
  static requestPayment(object) {
    // 小程序参数
    let timestamp = object.timestamp; // 时间戳，从 1970 年 1 月 1 日 00:00:00 至今的秒数，即当前的时间
    let nonceStr = object.nonceStr; // 随机字符串，长度为32个字符以下
    let package_s = object.package; // 统一下单接口返回的 prepay_id 参数值，提交格式如：prepay_id=***（ package 为js关键词，所以取名为 package_s ）
    let signType = object.signType; // 签名算法
    let paySign = object.paySign; // 签名
    let success = object.success || '';
    let fail = object.fail || '';
    let complete = object.complete || '';
    wx.chooseWXPay({
      // JS-SDK参数
      timestamp: timestamp, // 支付签名时间戳，注意微信jssdk中的所有使用timestamp字段均为小写。但最新版的支付后台生成签名使用的timeStamp字段名需大写其中的S字符
      nonceStr: nonceStr, // 支付签名随机串，不长于 32 位
      package: package_s, // 统一支付接口返回的prepay_id参数值，提交格式如：prepay_id=\*\*\*）
      signType: signType, // 签名方式，默认为'SHA1'，使用新版支付需传入'MD5'
      paySign: paySign, // 支付签名
      success: success(res),
      fail: fail(res),
      complete: complete(res)
    });
  }

}
