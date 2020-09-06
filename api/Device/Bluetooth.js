/**
 * Created by Wangjunjie on 2018/12/25.
 */
// dcloud html5+的 nativejs 实现的蓝牙串口操作demo https://github.com/chengxg/html5-bluetooth
import OnekitWX_BLE from "./BLE"
export default class OnekitWX_Bluetooth extends OnekitWX_BLE{
  static openBluetoothAdapter() {}

  static closeBluetoothAdapter() {}

  static getBluetoothAdapterState() {}

  static onBluetoothAdapterStateChange() {}

  static startBluetoothDevicesDiscovery() {}

  static stopBluetoothDevicesDiscovery() {}

  static getBluetoothDevices() {}

  static getConnectedBluetoothDevices() {}

  static onBluetoothDeviceFound() {}

  static createBLEConnection() {}

  static closeBLEConnection() {}

  static getBLEDeviceServices() {}

  static getBLEDeviceCharacteristics() {}

  static readBLECharacteristicValue() {}

  static writeBLECharacteristicValue() {}

  static notifyBLECharacteristicValueChange() {}

  static onBLEConnectionStateChange() {}

  static onBLECharacteristicValueChange() {}
}
