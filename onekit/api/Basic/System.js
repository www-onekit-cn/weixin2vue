import OnekitWX_Log from "./Log"
const MobileDetect = require("../../lib/mobile-detect.min")
export default class OnekitWX_System extends OnekitWX_Log{
  static getSystemInfo(object) {
    let success = object.success;
    let fail = object.fail;
    let complete = object.complete;
    /////////////////////////////
    var result;
    try {
      result = OnekitWX_System.getSystemInfoSync();
      if(success){success(result);}
      if(complete){complete(result);}
    } catch (e) {
      result = { errMsg: e.message };
      if(fail){fail(result);}
      if(complete){complete(result);}
    }
  }

  static getSystemInfoSync() {
    try {
      var device_type = navigator.userAgent; //获取userAgent信息
      var md = new MobileDetect(device_type); //初始化mobile-detect
      var os = md.os(); //获取系统
      var model;
      var system;
      var platform;
      if (os == 'iOS') {
        //ios系统的处理
        system = 'iOS ' + md.version('iPhone');
        model = md.mobile();
        platform = 'ios';
      } else if (os == 'AndroidOS') {
        //Android系统的处理
        system = 'Android ' + md.version('Android');
        model = md.mobile();
        platform = 'android';
      }
      return {
        errMsg: 'getSystemInfoSync:ok',
        brand: 'Onekit', // 手机品牌
        model: model, // 手机型号
        pixelRatio: window.devicePixelRatio, // 设备像素比
        screenWidth: window.screen.width, // 屏幕宽度
        screenHeight: window.screen.height, // 屏幕高度
        windowWidth: window.innerWidth, // 可使用窗口宽度
        windowHeight: window.innerHeight, // 可使用窗口高度
        statusBarHeight: 20, // 状态栏的高度
        language: window.navigator.language, // 微信设置的语言
        version: '7.0', // 微信版本号
        system: system, // 操作系统版本
        platform: platform, // 客户端平台
        fontSizeSetting: 20, // 用户字体大小设置。以“我-设置-通用-字体大小”中的设置为准，单位 px。
        SDKVersion: "2.12.1",// 客户端基础库版本
        benchmarkLevel: 1 // (仅Android小游戏) 性能等级，-2 或 0：该设备无法运行小游戏，-1：性能未知，>=1 设备性能值，该值越高，设备性能越好 (目前设备最高不到50)
      };
    } catch (e) {
      console.log(e);
      throw new Error('getSystemInfoSync:fail');
    }
  }
}
