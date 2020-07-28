import OnekitWX_DeviceMotion from "./DeviceMotion"
export default class OnekitWX_Gyroscope extends OnekitWX_DeviceMotion{
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
        if(success){success(result);};if(complete){complete(result);};
      } else {
        result = {
          errMsg: 'startGyroscope:fail'
        };
        if(success){success(result);};if(complete){complete(result);};
      }
    } catch (error) {
      result = { errMsg: error.message };
      if(fail){fail(result);}if(complete){complete(result);}
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
        if(success){success(result);};if(complete){complete(result);};
      }
    } catch (error) {
      result = { errMsg: error.message };
      if(fail){fail(result);}if(complete){complete(result);}
    }
  }

  static onGyroscopeChange(callback) {
    Gyroscope.callback = callback;
  }
}
