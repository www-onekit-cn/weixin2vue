<template>
  <onekit-page id='app'>
    <import src='../../../common/head.vue' />
    <import src='../../../common/foot.vue' />

    <onekit-view onekit-class="container">
      <onekit-template is="onekit-template-head"
                       DATA='{"title":"getSystemInfo"}'></onekit-template>

      <onekit-view onekit-class="page-body">
        <onekit-view onekit-class="page-section">
          <onekit-view onekit-class="weui-cells weui-cells_after-title">
            <onekit-view onekit-class="weui-cell weui-cell_input">
              <onekit-view onekit-class="weui-cell__hd">
                <onekit-view onekit-class="weui-label">手机品牌</onekit-view>
              </onekit-view>
              <onekit-view onekit-class="weui-cell__bd">
                <onekit-input onekit-class="weui-input"
                              type="text"
                              :disabled="true"
                              placeholder="未获取"
                              :value="systemInfo.brand"></onekit-input>
              </onekit-view>
            </onekit-view>
            <onekit-view onekit-class="weui-cell weui-cell_input">
              <onekit-view onekit-class="weui-cell__hd">
                <onekit-view onekit-class="weui-label">手机型号</onekit-view>
              </onekit-view>
              <onekit-view onekit-class="weui-cell__bd">
                <onekit-input onekit-class="weui-input"
                              type="text"
                              :disabled="true"
                              placeholder="未获取"
                              :value="systemInfo.model"></onekit-input>
              </onekit-view>
            </onekit-view>
            <onekit-view onekit-class="weui-cell weui-cell_input">
              <onekit-view onekit-class="weui-cell__hd">
                <onekit-view onekit-class="weui-label">微信语言</onekit-view>
              </onekit-view>
              <onekit-view onekit-class="weui-cell__bd">
                <onekit-input onekit-class="weui-input"
                              type="text"
                              :disabled="true"
                              placeholder="未获取"
                              :value="systemInfo.language"></onekit-input>
              </onekit-view>
            </onekit-view>
            <onekit-view onekit-class="weui-cell weui-cell_input">
              <onekit-view onekit-class="weui-cell__hd">
                <onekit-view onekit-class="weui-label">微信版本</onekit-view>
              </onekit-view>
              <onekit-view onekit-class="weui-cell__bd">
                <onekit-input onekit-class="weui-input"
                              type="text"
                              :disabled="true"
                              placeholder="未获取"
                              :value="systemInfo.version"></onekit-input>
              </onekit-view>
            </onekit-view>
            <onekit-view onekit-class="weui-cell weui-cell_input">
              <onekit-view onekit-class="weui-cell__hd">
                <onekit-view onekit-class="weui-label">屏幕宽度</onekit-view>
              </onekit-view>
              <onekit-view onekit-class="weui-cell__bd">
                <onekit-input onekit-class="weui-input"
                              type="text"
                              :disabled="true"
                              placeholder="未获取"
                              :value="systemInfo.windowWidth"></onekit-input>
              </onekit-view>
            </onekit-view>
            <onekit-view onekit-class="weui-cell weui-cell_input">
              <onekit-view onekit-class="weui-cell__hd">
                <onekit-view onekit-class="weui-label">屏幕高度</onekit-view>
              </onekit-view>
              <onekit-view onekit-class="weui-cell__bd">
                <onekit-input onekit-class="weui-input"
                              type="text"
                              :disabled="true"
                              placeholder="未获取"
                              :value="systemInfo.windowHeight"></onekit-input>
              </onekit-view>
            </onekit-view>
            <onekit-view onekit-class="weui-cell weui-cell_input">
              <onekit-view onekit-class="weui-cell__hd">
                <onekit-view onekit-class="weui-label">DPR</onekit-view>
              </onekit-view>
              <onekit-view onekit-class="weui-cell__bd">
                <onekit-input onekit-class="weui-input"
                              type="text"
                              :disabled="true"
                              placeholder="未获取"
                              :value="systemInfo.pixelRatio"></onekit-input>
              </onekit-view>
            </onekit-view>
          </onekit-view>
          <onekit-view onekit-class="btn-area">
            <onekit-button type="primary"
                           @Tap="getSystemInfo">获取手机系统信息</onekit-button>
          </onekit-view>
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
  "navigationBarTitleText": "获取手机系统信息",
  "usingComponents": {}
}
import OnekitPage from '../../../../weixin2vue/OnekitPage';
import wx from '../../../../weixin2vue/wx';
//let global = {};
export default OnekitPage(ONEKIT_JSON, {
  onShareAppMessage: function () {
    return {
      title: '获取手机系统信息',
      path: 'packageAPI/pages/get-system-info/get-system-info'
    }
  },
  data: {
    systemInfo: {}
  },
  getSystemInfo: function () {
    const that = this
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          systemInfo: res
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
