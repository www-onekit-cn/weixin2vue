<template>
  <onekit-page id='app'>
    <import src='../../../common/head.vue' />
    <import src='../../../common/foot.vue' />

    <onekit-view onekit-class="container">
      <onekit-template is="onekit-template-head"
                       DATA='{"title":"iBeacon"}'></onekit-template>

      <onekit-view onekit-class="page-body">
        <onekit-view onekit-class="page-section">
          <onekit-view onekit-class="weui-cells__title">输入iBeacon设备广播的UUID</onekit-view>
          <onekit-view onekit-class="weui-cells weui-cells_after-title">
            <onekit-view onekit-class="weui-cell weui-cell_input">
              <onekit-input onekit-class="weui-input"
                            @Input="enterUuid"></onekit-input>
            </onekit-view>
          </onekit-view>
        </onekit-view>
        <onekit-view onekit-class="btn-area">
          <onekit-button type="primary"
                         @Tap="startSearch">搜索iBeacon</onekit-button>
          <onekit-button @Tap="stopSearch">停止搜索</onekit-button>
        </onekit-view>
        <onekit-view onekit-class="page-body-info">
          <onekit-view onekit-class="devices_summary">已发现 {{beacons.length}} 个外围设备：</onekit-view>
          <onekit-scroll-view onekit-class="device_list"
                              scroll-y
                              scroll-with-animation>
            <onekit-view v-for="(item) in beacons"
                         :key="item.index"
                         onekit-class="device_item"
                         hover-class="device_item_hover">
              <onekit-view onekit-style="font-size: 16px; color: #333;">主ID: {{item.major}} <onekit-text onekit-style="font-size: 12px;">次ID: {{item.minor}}</onekit-text>
              </onekit-view>
              <onekit-view onekit-style="font-size: 10px">信号强度: {{item.rssi}}dBm</onekit-view>
              <onekit-view onekit-style="font-size: 10px">UUID: {{item.uuid}}</onekit-view>
              <onekit-view onekit-style="font-size: 10px">Proximity: {{item.proximity}} Accuracy: {{item.accuracy}}</onekit-view>
            </onekit-view>
          </onekit-scroll-view>
        </onekit-view>
      </onekit-view>

      <onekit-template is="onekit-template-foot"></onekit-template>
    </onekit-view>
  </onekit-page>
</template>
<script>
import Vue from 'vue'
import head from '../../../common/head.head'
Vue.component('onekit-template-head', head)
import foot from '../../../common/foot.foot'
Vue.component('onekit-template-foot', foot)
const ONEKIT_JSON = {
  "navigationBarTitleText": "iBeacon",
  "usingComponents": {}
}
import OnekitPage from '../../../../weixin2vue/OnekitPage';
import wx from '../../../../weixin2vue/wx';
//let global = {};
export default OnekitPage(ONEKIT_JSON, {
  onShareAppMessage: function () {
    return {
      title: 'iBeacon',
      path: 'packageAPI/pages/ibeacon/ibeacon'
    }
  },
  data: {
    uuid: '',
    beacons: [
    ]
  },
  onUnload: function () {
    this.stopSearch()
  },
  enterUuid: function (e) {
    this.setData({
      uuid: e.detail.value
    })
  },
  startSearch: function () {
    if (this._searching) return
    this._searching = true
    wx.startBeaconDiscovery({
      uuids: [
        this.data.uuid
      ],
      success: (res) => {
        console.log(res)
        wx.onBeaconUpdate(({ beacons }) => {
          this.setData({
            beacons
          })
        })
      },
      fail: (err) => { console.error(err) }
    })
  },
  stopSearch: function () {
    this._searching = false
    wx.stopBeaconDiscovery()
  }
})
</script>
<style scoped src="@/app.css"/>
<style>
@import "../../../common/lib/weui.css";
.page-body-info {
  margin-top: 25px;
  padding: 15px 30px;
  width: auto;
}
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
</style>
