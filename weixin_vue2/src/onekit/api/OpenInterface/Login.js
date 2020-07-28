import OnekitWX_Invoice from "./Invoice"
export default class OnekitWX_Login extends OnekitWX_Invoice{
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
      'https://open.weixin.qq.com/connect/qrconnect?appid=wx240ff52c65528fbb&scope=snsapi_login&redirect_uri=https%3A%2F%2Fwww.onekit.com%2Fpassport0%2Flogin%2FPlogin.php&state=' +
      Math.ceil(Math.random() * 1000) +
      '&login_type=jssdk&self_redirect=default';
  }
  static zhiFBDian() {
    location.href =
      'https://openauth.alipay.com/oauth2/publicAppAuthorize.htm?app_id=2018030502321064&scope=auth_user&redirect_uri=https://www.onekit.com/passport/login/ZFlogin.php&state=' +
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


}
