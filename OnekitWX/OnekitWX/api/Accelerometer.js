/**
 * Created by xxx.
 * Modified by Wangjunjie on 2018/12/25.
 */
class OnekitWX_Accelerometer {
  static onAccelerometerChange(callback) {
    OnekitWX_Accelerometer.callback = callback;
    console.log(OnekitWX_Accelerometer.callback)
  }
  static _callback(event) {
    if (OnekitWX_Accelerometer.callback) {
      var acceleration = event.accelerationIncludingGravity;
      console.log(acceleration);
      var result = {
        x: acceleration.x,
        y: acceleration.y,
        z: acceleration.z
      };
      OnekitWX_Accelerometer.callback(result);
    }
  }
  static startAccelerometer(object) {
    let interval = object.interval;
    let success = object.success;
    let fail = object.fail;
    let complete = object.complete;
    ///////////////////////////
    console.log(111);
    let result;
    window.addEventListener('devicemotion', OnekitWX_Accelerometer._callback, false);
    result = {
      errMsg: 'startAccelerometer:ok'
    };
    if (success) {
      success(result);
      console.log(result.errMsg)
    }
    if (complete) {
      complete(result);
      console.log(result.errMsg)
    }
  //   try {
  //     if (window.DeviceMotionEvent) {
  //       window.addEventListener('devicemotion', OnekitWX_Accelerometer._callback, false);
  //       result = {
  //         errMsg: 'startAccelerometer:ok'
  //       };
  //       if (success) {
  //         success(result);
  //         console.log(result.errMsg)
  //       }
  //       if (complete) {
  //         complete(result);
  //         console.log(result.errMsg)
  //       }
  //     } else {
  //       result = {
  //         errMsg: 'startAccelerometer:fail'
  //       };
  //       if (success) {
  //         success(result);
  //       }
  //       if (complete) {
  //         complete(result);
  //       }
  //     }
  //   } catch (e) {
  //     result = { errMsg: e.message };
  //     if (fail) {
  //       fail(result);
  //     }
  //     if (complete) {
  //       complete(result);
  //     }
  //   }
  }

  static stopAccelerometer(object) {
    let success = object.success;
    let fail = object.fail;
    let complete = object.complete;
    let result;
    try {
      if (window.DeviceOrientationEvent) {
        window.removeEventListener('devicemotion', OnekitWX_Accelerometer._callback, false);
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
