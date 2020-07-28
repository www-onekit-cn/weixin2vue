import OnekitWX_Contact from "./Contact"
export default class OnekitWX_DeviceMotion extends OnekitWX_Contact{
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
        if(success){success(result);};if(complete){complete(result);};
      } else {
        result = {
          errMsg: 'startDeviceMotionListening:fail'
        };
        if(success){success(result);};if(complete){complete(result);};
      }
    } catch (error) {
      result = { errMsg: error.message };
      if(fail){fail(result);}if(complete){complete(result);}
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
        if(success){success(result);};if(complete){complete(result);};
      }
    } catch (error) {
      result = { errMsg: error.message };
      if(fail){fail(result);}if(complete){complete(result);}
    }
  }

  static onDeviceMotionChange(callback) {
    DeviceMotion.callback = callback;
  }
}
