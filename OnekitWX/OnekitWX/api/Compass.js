//import {_success_callback,_fail_callback} from "../js/js.js"
class OnekitWX_Compass {
  static _deviceorientation (event) {
    if (OnekitWX_Compass._callback) {
      let result = {
        direction: event.alpha,
        accuracy: 'unknown'
      };
      OnekitWX_Compass._callback(result);
    }
  };
  static onCompassChange(callback) {
    OnekitWX_Compass._callback = callback;
  }
static offCompassChange() {
  OnekitWX_Compass._callback = null;
}
  static startCompass(object) {
    if (!object) {
      object = {};
    }
    let success = object.success;
    let fail = object.fail;
    let complete = object.complete;
    ///////////////////////////
    let result;
    try {
      if (window.DeviceMotionEvent) {
        if(OnekitWX_Compass._callback ) {
          window.addEventListener('deviceorientation', OnekitWX_Compass._deviceorientation, false);
        }
        //
        result = {
          errMsg: 'startCompass:ok'
        };
        _success_callback(success, complete, result);
      } else {
        result = {
          errMsg: 'startDeviceMotionListening:fail'
        };
        _success_callback(success, complete, result);
      }
    } catch (e) {
      result = { errMsg: e.message };
      _fail_callback(fail, complete, result);
    }
  }

  static stopCompass(object) {
    if (!object) {
      object = {};
    }
    let success = object.success;
    let fail = object.fail;
    let complete = object.complete;
    ///////////////////////////
    let result;
    try {
      if (window.DeviceMotionEvent) {
        window.removeEventListener('deviceorientation', OnekitWX_Compass._deviceorientation, false);
        //
        result = {
          errMsg: 'stopCompass:ok'
        };
        _success_callback(success, complete, result);
      } else {
        result = {
          errMsg: 'stopDeviceMotionListening:fail'
        };
        _success_callback(success, complete, result);
      }
    } catch (e) {
      result = { errMsg: e.message };
      _fail_callback(fail, complete, result);
    }
  }
}
