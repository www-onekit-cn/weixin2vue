class OnekitWX_Login {
  static login() {
    var weiXdeng = document.createElement('button');
    weiXdeng.setAttribute('id', 'weiXingDeng');
    weiXdeng.setAttribute('style', 'width:80%;margin:20px 0 0 10%');
    weiXdeng.setAttribute('onclick', 'OpenInterface.weixinDian()');
    weiXdeng.innerText = '微信登录';
    var firstDian = document.body.firstChild;
    document.body.insertBefore(weiXdeng, firstDian);
    var zhiFdeng = document.createElement('button');
    zhiFdeng.setAttribute('id', 'zhiFBDeng');
    zhiFdeng.setAttribute('style', 'width:80%;margin:20px 0 0 10%');
    zhiFdeng.setAttribute('onclick', 'OpenInterface.zhiFBDian()');
    zhiFdeng.innerText = '支付宝登录';
    document.body.appendChild(zhiFdeng);
    var weiBdeng = document.createElement('button');
    weiBdeng.setAttribute('id', 'weiBoDeng');
    weiBdeng.setAttribute('style', 'width:80%;margin:20px 0 0 10%');
    weiBdeng.setAttribute('onclick', 'OpenInterface.weiBoDian()');
    weiBdeng.innerText = '微博登录';
    document.body.appendChild(weiBdeng);
    var QQdeng = document.createElement('button');
    QQdeng.setAttribute('id', 'QQDeng');
    QQdeng.setAttribute('style', 'width:80%;margin:20px 0 0 10%');
    QQdeng.setAttribute('onclick', 'OpenInterface.QQDian()');
    QQdeng.innerText = 'QQ登录';
    document.body.appendChild(QQdeng);
  }
  static weixinDian() {
    location.href =
      'https://open.weixin.qq.com/connect/qrconnect?appid=wx240ff52c65528fbb&scope=snsapi_login&redirect_uri=https%3A%2F%2Fwww.onekitwx.com%2Fpassport0%2Flogin%2FPlogin.php&state=' +
      Math.ceil(Math.random() * 1000) +
      '&login_type=jssdk&self_redirect=default';
  }
  static zhiFBDian() {
    location.href =
      'https://openauth.alipay.com/oauth2/publicAppAuthorize.htm?app_id=2018030502321064&scope=auth_user&redirect_uri=https://www.onekitwx.com/passport/login/ZFlogin.php&state=' +
      Math.ceil(Math.random() * 1000);
  }
  static weiBoDian() {
    location.href =
      'https://api.weibo.com/oauth2/authorize?client_id=1741134067&redirect_uri=https%3A%2F%2Fwww.onekit.cn%2Fpassport0%2Flogin%2FWBlogin%2FWlogin.php&response_type=code';
  }
  static QQDian() {
    location.href =
      'https://graph.qq.com/oauth2.0/authorize?response_type=code&client_id=101475870&redirect_uri=https://www.onekit.cn/passport0/login/QQlogin.php&state=' +
      Math.ceil(Math.random() * 1000);
  }

  static checkSession() {}

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
