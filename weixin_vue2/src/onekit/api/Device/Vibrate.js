// INFO: 以下方法在iPhone下不能实现震动
import OnekitWX_Screen from "./Screen"
export default class OnekitWX_Vibrate extends OnekitWX_Screen{
  static vibrateLong(object) {
    let success = object.success;
    let fail = object.fail;
    let complete = object.complete;
    ///////////////////////////
    var result = {};
    try {
      //let supportsVibrate = "vibrate" in navigator;
      if (navigator['vibrate']) {
        navigator['vibrate'](400);
      } else if (navigator['webkitVibrate']) {
        navigator['webkitVibrate'](400);
      } else if (navigator['oVibrate']) {
        navigator['oVibrate'](400);
      }
      result.errMsg = 'vibrateShort:ok';
      if (success) {
        success(result);
      }
      if (complete) {
        complete(result);
      }
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

  static vibrateShort(object) {
    let success = object.success;
    let fail = object.fail;
    let complete = object.complete;
    ///////////////////////////
    var result = {};
    try {
      //let supportsVibrate = "vibrate" in navigator;
      if (navigator['vibrate']) {
        navigator['vibrate'](15);
      } else if (navigator['webkitVibrate']) {
        navigator['webkitVibrate'](15);
      } else if (navigator['oVibrate']) {
        navigator['oVibrate'](15);
      }
      result.errMsg = 'vibrateLong:ok';
      if (success) {
        success(result);
      }
      if (complete) {
        complete(result);
      }
    } catch (e) {
      alert(JSON.stringify(e));
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
