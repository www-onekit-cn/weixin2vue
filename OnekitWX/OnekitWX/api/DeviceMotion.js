class OnekitWX_DeviceMotion {
  static _callback(event) {
    if (DeviceMotion.callback) {
      let deviceMotion = event;
      let result = {
        errMsg: 'onDeviceMotionChange:ok',
        alpha: deviceMotion.alpha,
        beta: deviceMotion.beta,
        gamma: deviceMotion.gamma
      };
      DeviceMotion.callback(result);
    }
  }

  static startDeviceMotionListening(object) {
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
        window.addEventListener('deviceorientation', DeviceMotion._callback, false);
        result = {
          errMsg: 'startDeviceMotionListening:ok'
        };
        _success_callback(success, complete, result);
      } else {
        result = {
          errMsg: 'startDeviceMotionListening:fail'
        };
        _success_callback(success, complete, result);
      }
    } catch (error) {
      result = { errMsg: error.message };
      _fail_callback(fail, complete, result);
    }
  }

  static stopDeviceMotionListening(object) {
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
        window.removeEventListener('deviceorientation', DeviceMotion._callback, false);
        result = {
          errMsg: 'stopDeviceMotionListening:ok'
        };
      } else {
        result = {
          errMsg: 'stopDeviceMotionListening:fail'
        };
        _success_callback(success, complete, result);
      }
    } catch (error) {
      result = { errMsg: error.message };
      _fail_callback(fail, complete, result);
    }
  }

  static onDeviceMotionChange(callback) {
    DeviceMotion.callback = callback;
  }
}
