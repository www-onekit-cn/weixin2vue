import OnekitWX_Clipboard from "./Clipboard"
export default class OnekitWX_Compass extends OnekitWX_Clipboard{
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
        if(success){success(result);};if(complete){complete(result);};
      } else {
        result = {
          errMsg: 'startDeviceMotionListening:fail'
        };
        if(success){success(result);};if(complete){complete(result);};
      }
    } catch (e) {
      result = { errMsg: e.message };
      if(fail){fail(result);}if(complete){complete(result);}
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
        if(success){success(result);};if(complete){complete(result);};
      } else {
        result = {
          errMsg: 'stopDeviceMotionListening:fail'
        };
        if(success){success(result);};if(complete){complete(result);};
      }
    } catch (e) {
      result = { errMsg: e.message };
      if(fail){fail(result);}if(complete){complete(result);}
    }
  }
}
