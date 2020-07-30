/**
 * Created by xxx.
 * Modified by Wangjunjie on 2018/12/25.
 */
import OnekitWX_Color from "../Canvas/Color"
export class OnekitWX_Accelerometer extends OnekitWX_Color{
  static onAccelerometerChange(callback) {
    Accelerometer.callback = callback;
  }
  static _callback(event) {
    if (Accelerometer.callback) {
      var acceleration = event.accelerationIncludingGravity;
      var result = {
        x: acceleration.x,
        y: acceleration.y,
        z: acceleration.z
      };
      Accelerometer.callback(result);
    }
  }
  static startAccelerometer(object) {
    let interval = object.interval;
    let success = object.success;
    let fail = object.fail;
    let complete = object.complete;
    ///////////////////////////
    var result;
    try {
      if (window.DeviceMotionEvent) {
        window.addEventListener('devicemotion', Accelerometer._callback, false);
        result = {
          errMsg: 'startAccelerometer:ok'
        };
        if (success) {
          success(result);
        }
        if (complete) {
          complete(result);
        }
      } else {
        result = {
          errMsg: 'startAccelerometer:fail'
        };
        if (success) {
          success(result);
        }
        if (complete) {
          complete(result);
        }
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

  static stopAccelerometer(object) {
    let success = object.success;
    let fail = object.fail;
    let complete = object.complete;
    var result;
    try {
      if (window.DeviceMotionEvent) {
        window.removeEventListener('devicemotion', Accelerometer._callback, false);
        result = {
          errMsg: 'stopAccelerometer:ok'
        };
        if (success) {
          success(result);
        }
        if (complete) {
          complete(result);
        }
      } else {
        result = {
          errMsg: 'stopAccelerometer:fail'
        };
        if (success) {
          success(result);
        }
        if (complete) {
          complete(result);
        }
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
}
