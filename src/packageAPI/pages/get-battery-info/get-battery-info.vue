<template>
  <onekit-page id='app'>
    <!--    <import src='../../../common/head.vue' />
    <import src='../../../common/foot.vue' />-->

    <onekit-view onekit-class="container">
      <onekit-template is="onekit-template-head"
                       DATA='{"title":"getBatteryInfo"}'></onekit-template>

      <onekit-view onekit-class="page-body">
        <onekit-view onekit-class="page-section">
          <onekit-view onekit-class="weui-cells weui-cells_after-title">
            <onekit-view onekit-class="weui-cell weui-cell_input">
              <onekit-view onekit-class="weui-cell__hd">
                <onekit-view onekit-class="weui-label">当前电量</onekit-view>
              </onekit-view>
              <onekit-view onekit-class="weui-cell__bd">
                <onekit-input onekit-class="weui-input"
                              type="text"
                              :disabled="true"
                              placeholder="未获取"
                              :value="level"></onekit-input>
              </onekit-view>
            </onekit-view>
            <onekit-view onekit-class="weui-cell weui-cell_input">
              <onekit-view onekit-class="weui-cell__hd">
                <onekit-view onekit-class="weui-label">电池模式</onekit-view>
              </onekit-view>
              <onekit-view onekit-class="weui-cell__bd">
                <onekit-input onekit-class="weui-input"
                              type="text"
                              :disabled="true"
                              placeholder="未获取"
                              :value="isCharging"></onekit-input>
              </onekit-view>
            </onekit-view>
          </onekit-view>
          <onekit-button type="primary"
                         @:tap="getBatteryInfo">
            获取电量信息信息
          </onekit-button>
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
  "navigationBarTitleText": "获取手机设备电量",
  "usingComponents": {}
}
import OnekitPage from '../../../../weixin2vue/OnekitPage';
import wx from '../../../../weixin2vue/wx';
//let global = {};
export default OnekitPage(ONEKIT_JSON, {
  onShareAppMessage: function () {
    return {
      title: '获取电池信息',
      path: 'packageAPI/pages/get-battery-info/get-battery-info'
    }
  },
  data: {},
  getBatteryInfo: function () {
    wx.getBatteryInfo({
      complete: (res) => {
        const msg = res.isCharging ? '充电中' : '使用电池中'
        this.setData({
          level: res.level,
          isCharging: msg
        })
      }
    })
  }
})
</script>
<style scoped src="@/app.css"/>
<style>
@import "../../../common/lib/weui.css";
</style>
