<template>
  <onekit-page id='app'>
    <import src='../../../common/head.vue' />
    <import src='../../../common/foot.vue' />

    <onekit-view onekit-class="container">
      <onekit-template is="onekit-template-head"
                       DATA='{"title":"bluetooth"}'></onekit-template>
      <onekit-view onekit-class="page-body">
        <onekit-view onekit-class="page-section">
          <onekit-view onekit-class="page-body-info">
            <onekit-view onekit-class="devices_summary">已发现 {{devices.length}} 个外围设备：</onekit-view>
            <onekit-scroll-view onekit-class="device_list"
                                scroll-y
                                scroll-with-animation>
              <onekit-view v-for="(item,index) in devices"
                           :key="item.index"
                           :data-device-id="item.deviceId"
                           :data-name="item.name || item.localName"
                           @Tap="createBLEConnection"
                           onekit-class="device_item"
                           hover-class="device_item_hover">
                <onekit-view onekit-style="font-size: 16px;">{{item.name}}</onekit-view>
                <onekit-view onekit-style="font-size: 10px">信号强度: {{item.RSSI}}dBm ({{utils.max(0, item.RSSI + 100)}}%)</onekit-view>
                <onekit-view onekit-style="font-size: 10px">UUID: {{item.deviceId}}</onekit-view>
                <onekit-view onekit-style="font-size: 10px">Service数量: {{utils.len(item.advertisServiceUUIDs)}}</onekit-view>
              </onekit-view>
            </onekit-scroll-view>
          </onekit-view>

          <onekit-view onekit-class="btn-area">
            <onekit-button type="primary"
                           @Tap="openBluetoothAdapter">开始扫描</onekit-button>
            <onekit-button @Tap="stopBluetoothDevicesDiscovery">停止扫描</onekit-button>
          </onekit-view>
          <onekit-view onekit-class="btn-area">
            <onekit-button type="primary"
                           @:tap="changeMode">
              进去从机模式
            </onekit-button>
          </onekit-view>
        </onekit-view>
      </onekit-view>

      <onekit-view onekit-class="connected_info"
                   v-if="connected">
        <onekit-view>
          <onekit-text>已连接到 {{name}}</onekit-text>
          <onekit-view onekit-class="operation">
            <onekit-button v-if="canWrite"
                           size="mini"
                           @Tap="writeBLECharacteristicValue">写数据</onekit-button>
            <onekit-button size="mini"
                           @Tap="closeBLEConnection">断开连接</onekit-button>
          </onekit-view>
        </onekit-view>
        <onekit-view v-for="(item,index) in chs"
                     :key="item.index"
                     onekit-style="font-size: 12px; margin-top: 10px;">
          <onekit-view>特性UUID: {{item.uuid}}</onekit-view>
          <onekit-view>特性值: {{item.value}}</onekit-view>
        </onekit-view>
      </onekit-view>
      <onekit-template is="onekit-template-foot"></onekit-template>
    </onekit-view>
  </onekit-page>
</template>
<script>
const utils =
  module.exports.max = function (n1, n2) {
    return Math.max(n1, n2)
  }
module.exports.len = function (arr) {
  arr = arr || []
  return arr.length
}
  ;
import Vue from 'vue'
import head from '../../../common/head.head'
Vue.component('onekit-template-head', head)
import foot from '../../../common/foot.foot'
Vue.component('onekit-template-foot', foot)
const ONEKIT_JSON = {
  "navigationBarTitleText": "蓝牙",
  "usingComponents": {}
}
import { OnekitPage } from 'weixin2vue';
import { wx } from 'weixin2vue';
//let global = {};
function inArray (arr, key, val) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i][key] == val) {
      return i;
    }
  }
  return -1
}
function ab2hex (buffer) {
  const hexArr = Array.prototype.map.call(new Uint8Array(buffer), function (bit) {
    return ('00' + bit.toString(16)).slice(-2)
  })
  return hexArr.join('')
}
export default OnekitPage(ONEKIT_JSON, {
  onShareAppMessage: function () {
    return {
      title: '蓝牙',
      path: 'packageAPI/pages/bluetooth/bluetooth'
    }
  },
  data: {
    devices: [
    ],
    connected: false,
    chs: [
    ]
  },
  onUnload: function () {
    this.closeBluetoothAdapter()
  },
  openBluetoothAdapter: function () {
    wx.openBluetoothAdapter({
      success: (res) => {
        console.log('openBluetoothAdapter success', res)
        this.startBluetoothDevicesDiscovery()
      },
      fail: (res) => {
        if (res.errCode == 10001) {
          wx.showModal({
            title: '错误',
            content: '未找到蓝牙设备, 请打开蓝牙后重试。',
            showCancel: false
          });
          wx.onBluetoothAdapterStateChange(function (res) {
            if ((res && res.available)) {
              this.startBluetoothDevicesDiscovery();
            }
          });
        }
      }
    })
  },
  getBluetoothAdapterState: function () {
    wx.getBluetoothAdapterState({
      success: (res) => {
        console.log('getBluetoothAdapterState', res)
        if (res.discovering) {
          this.onBluetoothDeviceFound();
        } else if (res.available) {
          this.startBluetoothDevicesDiscovery();
        }
      }
    })
  },
  startBluetoothDevicesDiscovery: function () {
    if (this._discoveryStarted) {
      return;
    }
    this._discoveryStarted = true
    wx.startBluetoothDevicesDiscovery({
      allowDuplicatesKey: true,
      success: (res) => {
        console.log('startBluetoothDevicesDiscovery success', res)
        this.onBluetoothDeviceFound()
      }
    })
  },
  stopBluetoothDevicesDiscovery: function () {
    wx.stopBluetoothDevicesDiscovery({
      complete: () => { this._discoveryStarted = false }
    })
  },
  onBluetoothDeviceFound: function () {
    wx.onBluetoothDeviceFound((res) => {
      res.devices.forEach((device) => {
        if ((!device.name && !device.localName)) {
          return;
        }
        const foundDevices = this.data.devices
        const idx = inArray(foundDevices, 'deviceId', device.deviceId)
        const data = {}
        if (idx == -1) {
          data[`devices[${foundDevices.length}]`] = device;
        } else {
          data[`devices[${idx}]`] = device;
        }
        this.setData(data)
      })
    })
  },
  createBLEConnection: function (e) {
    const ds = e.currentTarget.dataset
    const deviceId = ds.deviceId
    const name = ds.name
    wx.showLoading()
    wx.createBLEConnection({
      deviceId,
      success: () => {
        this.setData({
          connected: true,
          name,
          deviceId
        })
        this.getBLEDeviceServices(deviceId)
      },
      complete: function () {
        wx.hideLoading()
      }
    })
    this.stopBluetoothDevicesDiscovery()
  },
  closeBLEConnection: function () {
    wx.closeBLEConnection({
      deviceId: this.data.deviceId
    })
    this.setData({
      connected: false,
      chs: [
      ],
      canWrite: false
    })
  },
  changeMode: function () {
    wx.navigateTo({
      url: './slave/slave'
    })
  },
  getBLEDeviceServices: function (deviceId) {
    wx.getBLEDeviceServices({
      deviceId,
      success: (res) => {
        for (var i = 0; i < res.services.length; i++) {
          if (res.services[i].isPrimary) {
            this.getBLEDeviceCharacteristics(deviceId, res.services[i].uuid);
            return;
          }
        }
      }
    })
  },
  getBLEDeviceCharacteristics: function (deviceId, serviceId) {
    wx.getBLEDeviceCharacteristics({
      deviceId,
      serviceId,
      success: (res) => {
        console.log('getBLEDeviceCharacteristics success', res.characteristics)
        for (var i = 0; i < res.characteristics.length; i++) {
          const item = res.characteristics[i];
          if (item.properties.read) {
            wx.readBLECharacteristicValue({
              deviceId,
              serviceId,
              characteristicId: item.uuid
            });
          }
          if (item.properties.write) {
            this.setData({
              canWrite: true
            });
            this._deviceId = deviceId;
            this._serviceId = serviceId;
            this._characteristicId = item.uuid;
            console.log('write');
            this.writeBLECharacteristicValue();
          }
          if ((item.properties.notify || item.properties.indicate)) {
            wx.notifyBLECharacteristicValueChange({
              deviceId,
              serviceId,
              characteristicId: item.uuid,
              state: true
            });
          }
        }
      },
      fail: function (res) {
        console.error('getBLEDeviceCharacteristics', res)
      }
    })
    wx.onBLECharacteristicValueChange((characteristic) => {
      const idx = inArray(this.data.chs, 'uuid', characteristic.characteristicId)
      const data = {}
      if (idx == -1) {
        data[`chs[${this.data.chs.length}]`] = {
          uuid: characteristic.characteristicId,
          value: ab2hex(characteristic.value)
        };
      } else {
        data[`chs[${idx}]`] = {
          uuid: characteristic.characteristicId,
          value: ab2hex(characteristic.value)
        };
      }
      wx.showToast({
        title: '收到从机数据'
      })
      this.setData(data)
    })
  },
  writeBLECharacteristicValue: function () {
    const buffer = new ArrayBuffer(1)
    const dataView = new DataView(buffer)
    dataView.setUint8(0, ((Math.random() * 19)) | 0)
    wx.writeBLECharacteristicValue({
      deviceId: this._deviceId,
      serviceId: this._serviceId,
      characteristicId: this._characteristicId,
      value: buffer,
      success: function () {
        console.log('writeBLECharacteristicValue: 成功')
      },
      fail: function () {
        console.log('writeBLECharacteristicValue: 失败')
      },
      complete: function () {
        console.log('writeBLECharacteristicValue: 结束')
      }
    })
  },
  closeBluetoothAdapter: function () {
    wx.closeBluetoothAdapter()
    this._discoveryStarted = false
  }
})
</script>
<style scoped src="@/app.css"/>
<style>
.devices_summary {
  padding: 5px;
  font-size: 15px;
}
.device_list {
  height: 150px;
  border-radius: 3px;
  flex: 1;
}
.device_item {
  border-bottom: 1px solid var(--weui-FG-3);
  padding: 5px;
  color: var(--weui-FG-HALF);
}
.device_item_hover {
  background-color: rgba(0, 0, 0, 0.1);
}
.connected_info {
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: var(--weui-BG-4);
  padding: 5px;
  padding-bottom: 10px;
  margin-bottom: env(safe-area-inset-bottom);
  font-size: 14px;
  min-height: 50px;
  box-shadow: 0px 0px 2px 0px;
}
.connected_info .operation {
  position: absolute;
  display: inline-block;
  right: 15px;
}
.page-body-info {
  padding: 15px;
  box-sizing: border-box;
}
</style>
