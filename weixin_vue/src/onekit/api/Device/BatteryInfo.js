/**
 * Modified by Wangjunjie on 2018/12/25.
 */
import OnekitWX_Accelerometer from "./Accelerometer"
export class OnekitWX_BatteryInfo extends OnekitWX_Accelerometer{
  static getBatteryInfo(object) {
    let success = object.success;
    let fail = object.success;
    let complete = object.success;
    //////////////////////////////
    try {
      let result = {};
      navigator.getBattery().then(function(battery) {
        result.errMsg = 'getBatteryInfo:ok';
        result.level = battery.level * 100;
        result.isCharging = battery.charging;
      });
      if (success) {
        success(result);
      }
      if (complete) {
        complete(result);
      }
    } catch (error) {
      if (fail) {
        fail(result);
      }
      if (complete) {
        complete(result);
      }
    }
  }

  static getBatteryInfoSync(object) {
    let success = object.success;
    let fail = object.success;
    let complete = object.success;
    //////////////////////////////
    try {
      let result = {};
      navigator.getBattery().then(function(battery) {
        result.errMsg = 'getBatteryInfoSync:ok';
        result.level = battery.level * 100;
        result.isCharging = battery.charging;
      });
      if (success) {
        success(result);
      }
      if (complete) {
        complete(result);
      }
    } catch (error) {
      if (fail) {
        fail(result);
      }
      if (complete) {
        complete(result);
      }
    }
  }
}
