class OnekitWX_Gyroscope {
  static _callback(event) {
    if (Gyroscope.callback) {
      let deviceOrientation = event.acceleration;
      let result = {
        errMsg: 'onGyroscopeChange:ok',
        x: deviceOrientation.x,
        y: deviceOrientation.y,
        z: deviceOrientation.z
      };
      Gyroscope.callback(result);
    }
  }
  static startGyroscope(object) {
    if (!object) {
      object = {};
    }
    let interval = object.interval || 'normal'; // 监听陀螺仪数据回调函数的执行频率
    let success = object.success;
    let fail = object.fail;
    let complete = object.complete;
    ///////////////////////////////
    let result;
    try {
      if (window.DeviceOrientationEvent) {
        window.addEventListener('devicemotion', Gyroscope._callback, false);
        result = {
          errMsg: 'startGyroscope:ok'
        };
        _success_callback(success, complete, result);
      } else {
        result = {
          errMsg: 'startGyroscope:fail'
        };
        _success_callback(success, complete, result);
      }
    } catch (error) {
      result = { errMsg: error.message };
      _fail_callback(fail, complete, result);
    }
  }

  static stopGyroscope(object) {
    if (!object) {
      object = {};
    }
    let success = object.success;
    let fail = object.fail;
    let complete = object.complete;
    /////////////////////////////////
    let result;
    try {
      if (window.DeviceOrientationEvent) {
        window.removeEventListener('devicemotion', Gyroscope._callback, false);
        result = {
          errMsg: 'stopGyroscope:ok'
        };
      } else {
        result = {
          errMsg: 'stopGyroscope:fail'
        };
        _success_callback(success, complete, result);
      }
    } catch (error) {
      result = { errMsg: error.message };
      _fail_callback(fail, complete, result);
    }
  }

  static onGyroscopeChange(callback) {
    Gyroscope.callback = callback;
  }
}
