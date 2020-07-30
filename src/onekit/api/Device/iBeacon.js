/**
 * Created by Wangjunjie on 2018/12/25.
 */
import OnekitWX_Gyroscope from "./Gyroscope"
export class OnekitWX_iBeacon extends OnekitWX_Gyroscope{
  // 小程序和 JS-SDK 都有 iBeacon 的实现，但是貌似不一样
  static startBeaconDiscovery(object) {
    // let uuids = object.uuids;
    // let ignoreBluetoothAvailable = object.ignoreBluetoothAvailable;
    // let success = object.success;
    // let fail = object.success;
    // let complete = object.success;
    // //////////////////////////////
    // wx.startSearchBeacons({
    //   ticket: '', //摇周边的业务ticket, 系统自动添加在摇出来的页面链接后面
    //   complete: function(argv) {
    //     //开启查找完成后的回调函数
    //   }
    // });
  }

  static stopBeaconDiscovery() {}

  static getBeacons() {}

  static onBeaconUpdate() {}

  static onBeaconServiceChange() {}
}
