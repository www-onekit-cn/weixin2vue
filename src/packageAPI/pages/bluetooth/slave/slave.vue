
<template>
  <onekit-page id='app'>
    <import src='../../../../common/head.vue' />
    <import src='../../../../common/foot.vue' />

    <onekit-view onekit-class="container">
      <onekit-template is="onekit-template-head"
                       DATA='{"title":"bluetooth"}'></onekit-template>
      <onekit-view onekit-class="page-body"
                   onekit-style="display: flex; flex-direction: column">
        <onekit-text onekit-style="text-align: center; margin: 16px">当前 serverId {{serverId}}</onekit-text>
        <onekit-view onekit-class="action-area">
          <onekit-button type="primary"
                         @Tap="openBluetoothAdapter">创建server</onekit-button>
          <onekit-button type="primary"
                         @Tap="closeServer">关闭server</onekit-button>
        </onekit-view>
        <onekit-view onekit-class="action-area">
          <onekit-button type="primary"
                         @Tap="addService">创建服务</onekit-button>
          <onekit-button type="primary"
                         @Tap="removeService">关闭服务</onekit-button>
        </onekit-view>
        <onekit-view onekit-class="action-area">
          <onekit-button type="primary"
                         @Tap="startAdvertising">开启广播</onekit-button>
          <onekit-button type="primary"
                         @Tap="stopAdvertising">关闭广播</onekit-button>
        </onekit-view>
        <onekit-view onekit-class="action-area">
          <onekit-button type="primary"
                         @Tap="showInput">写数据</onekit-button>
          <onekit-button type="primary"
                         @Tap="closeBluetoothAdapter">结束流程</onekit-button>
        </onekit-view>
        <onekit-button type="primary"
                       @Tap="chaneMode">返回主机模式</onekit-button>
        <template v-if="input">
          <onekit-input onekit-style="width: 200px;margin: 0 auto;background: var(--weui-BG-2);padding: 5px;"
                        placeholder="写个数字"
                        @Confirm="onConfirm"></onekit-input>
        </template>
        <onekit-view>
          <template v-if="connects.length > 0">
            <onekit-view v-for="(item,index) in connects"
                         :key="index">
              <onekit-view>
                <onekit-text>{{item.deviceId}} : {{item.serverId}}</onekit-text>
                <onekit-text>{{item.connected ? "已连接" : "断开"}}</onekit-text>
              </onekit-view>
            </onekit-view>
          </template>
        </onekit-view>
      </onekit-view>
      <onekit-template is="onekit-template-foot"></onekit-template>
    </onekit-view>
  </onekit-page>
</template>
<script>
/* eslint-disable no-unused-vars */
import Vue from 'vue'
import head from '../../../../common/head.head'
Vue.component('onekit-template-head', head)
import foot from '../../../../common/foot.foot'
Vue.component('onekit-template-foot', foot)
const ONEKIT_JSON = {
  "usingComponents": {}
}
import OnekitPage from '../../../../../weixin2vue/OnekitPage';
import wx from '../../../../../weixin2vue/wx';
//let global = {};
const uuid3 = '0C76801A-62EB-45E5-96A8-37C8882ABB2B'
const serviceId = 'D0611E78-BBB4-4591-A5F8-487910AE4366'
const characteristicId = '8667556C-9A37-4C91-84ED-54EE27D90049'
function ab2hex (buffer) {
  var hexArr = Array.prototype.map.call(new Uint8Array(buffer), function (bit) {
    return ('00' + bit.toString(16)).slice(-2)
  })
  return hexArr.join('')
}
function inArray (arr, key, val) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i][key] == val) {
      return i;
    }
  }
  return -1
}
export default OnekitPage(ONEKIT_JSON, {
  onShareAppMessage: function () {
    return {
      title: '蓝牙',
      path: 'packageAPI/pages/slave/slave'
    }
  },
  data: {
    connects: [
    ],
    servers: [
    ]
  },
  onLoad: function () {
    wx.onBLEPeripheralConnectionStateChanged((res) => {
      console.log('connect')
      const connects = this.data.connects
      const idx = inArray(connects, 'deviceId', res.deviceId)
      if (idx >= 0) {
        connects[idx] = res;
      } else {
        connects.push(res);
      }
      this.setData({
        connects
      })
    })
  },
  openBluetoothAdapter: function () {
    wx.openBluetoothAdapter({
      mode: 'peripheral',
      success: (res) => {
        console.log('openBluetoothAdapter success', res)
        this.createBLEPeripheralServer()
      },
      fail: (res) => {
        console.log(res)
        wx.showToast({
          title: `创建失败 错误码: ${res.errCode}`,
          icon: 'none'
        })
        if (res.errCode == 10001) {
          wx.onBluetoothAdapterStateChange(function (res) {
            console.log('onBluetoothAdapterStateChange', res)
            if (res.available) {
              this.createBLEPeripheralServer();
            }
          });
        }
      }
    })
  },
  createBLEPeripheralServer: function () {
    wx.createBLEPeripheralServer().then((res) => {
      console.log('createBLEPeripheralServer', res)
      this.data.servers.push(res.server)
      this.server = res.server
      this.setData({
        serverId: this.server.serverId
      })
      wx.showToast({
        title: '创建 server '
      })
      this.server.onCharacteristicReadRequest((res) => {
        const { serviceId, characteristicId, callbackId } = res
        const buffer = new ArrayBuffer(1)
        const dataView = new DataView(buffer)
        const newValue = Math.ceil(Math.random() * 10)
        dataView.setUint8(0, newValue)
        console.log('onCharacteristicReadRequest', res, newValue)
        this.server.writeCharacteristicValue({
          serviceId,
          characteristicId,
          value: buffer,
          needNotify: true,
          callbackId
        })
      })
      this.server.onCharacteristicWriteRequest((res) => {
        console.log('onCharacteristicWriteRequest', res)
        const { serviceId, characteristicId, value, callbackId } = res
        wx.showToast({
          title: '收到主机数据'
        })
        this.server.writeCharacteristicValue({
          serviceId,
          characteristicId,
          value,
          needNotify: true,
          callbackId
        })
      })
    })
  },
  closeServer: function () {
    this.server.close()
    wx.showToast({
      title: '关闭 server'
    })
  },
  chaneMode: function () {
    wx.navigateBack()
  },
  onConfirm: function (e) {
    console.log('onConfirm')
    const n = e.detail.value * 1
    const buffer = new ArrayBuffer(1)
    const dataView = new DataView(buffer)
    dataView.setUint8(0, n)
    this.server.writeCharacteristicValue({
      serviceId,
      characteristicId,
      value: buffer,
      needNotify: true
    })
    wx.showModal({
      title: '写入成功',
      content: '请在主机查看'
    })
  },
  showInput: function () {
    this.setData({
      input: !this.data.input
    })
  },
  addService: function () {
    const buffer = new ArrayBuffer(1)
    const dataView = new DataView(buffer)
    dataView.setUint8(0, 2)
    const descriptorBuffer = new ArrayBuffer(1)
    const dataView2 = new DataView(descriptorBuffer)
    dataView2.setInt8(0, 3)
    const service = {
      uuid: serviceId,
      characteristics: [
        {
          uuid: characteristicId,
          properties: {
            write: true,
            read: true,
            notify: true,
            indicate: true
          },
          permission: {
            readable: true,
            writeable: true,
            readEncryptionRequired: true,
            writeEncryptionRequired: true
          },
          value: buffer,
          descriptors: [
            {
              uuid: uuid3,
              permission: {
                write: true,
                read: true
              },
              value: descriptorBuffer
            }
          ]
        }
      ]
    }
    this.server.addService({
      service
    }).then((res) => {
      console.log('add Service', res)
      wx.showToast({
        title: '创建服务'
      })
    }, (rej) => {
      console.log(rej)
      if (rej.errCode == 10001) {
        wx.showToast({
          title: '请打开蓝牙'
        });
      } else {
        wx.showModal({
          title: '创建失败',
          content: `错误码: ${rej.errCode}`
        });
      }
    })
  },
  removeService: function () {
    this.server.removeService({
      serviceId
    }).then((res) => {
      wx.showToast({
        title: '关闭服务'
      })
      console.log('removeService', res)
    })
  },
  startAdvertising: function () {
    const buffer = new ArrayBuffer(1)
    const dataView = new DataView(buffer)
    dataView.setInt8(0, 4)
    this.server.startAdvertising({
      advertiseRequest: {
        connectable: true,
        deviceName: 'sanford',
        serviceUuids: [
          serviceId
        ],
        manufacturerData: [
          {
            manufacturerId: 'sanfordsun-pc0',
            manufacturerSpecificData: buffer
          }
        ]
      },
      powerLevel: 'medium'
    }).then((res) => {
      console.log('startAdvertising', res)
      wx.showToast({
        title: '开启广播'
      })
    })
  },
  stopAdvertising: function () {
    this.server.stopAdvertising()
    wx.showToast({
      title: '关闭广播'
    })
  },
  closeBluetoothAdapter: function () {
    wx.showToast({
      title: '结束流程'
    })
    wx.closeBluetoothAdapter()
  },
  onUnload: function () {
    this.data.servers.forEach(() => {
    })
  }
})
</script>
<style scoped src="@/app.css"/>
<style>
.action-area {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
</style>
