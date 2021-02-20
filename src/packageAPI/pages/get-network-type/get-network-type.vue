<template>
  <onekit-page id='app'>
    <import src='../../../common/head.vue' />
    <import src='../../../common/foot.vue' />

    <onekit-view onekit-class="container">
      <onekit-template is="onekit-template-head"
                       DATA='{"title":"getNetworkType"}'></onekit-template>

      <onekit-view onekit-class="page-body">
        <onekit-view onekit-class="page-section">
          <onekit-view onekit-class="page-body-info">
            <onekit-view onekit-class="page-body-title">网络状态</onekit-view>
            <template v-if="hasNetworkType === false">
              <onekit-text onekit-class="page-body-text">未获取</onekit-text>
              <onekit-text onekit-class="page-body-text">点击绿色按钮可获取网络状态</onekit-text>
            </template>
            <template v-if="hasNetworkType === true">
              <onekit-text onekit-class="page-body-text-network-type">{{networkType}}</onekit-text>
            </template>
          </onekit-view>
          <onekit-view onekit-class="btn-area">
            <onekit-button type="primary"
                           @Tap="getNetworkType">获取手机网络状态</onekit-button>
            <onekit-button @Tap="clear">清空</onekit-button>
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
  "navigationBarTitleText": "获取手机网络状态",
  "usingComponents": {}
}
import OnekitPage from '../../../../weixin2vue/OnekitPage';
import wx from '../../../../weixin2vue/wx';
//let global = {};
export default OnekitPage(ONEKIT_JSON, {
  onShareAppMessage: function () {
    return {
      title: '获取手机网络状态',
      path: 'packageAPI/pages/get-network-type/get-network-type'
    }
  },
  data: {
    hasNetworkType: false
  },
  getNetworkType: function () {
    const that = this
    wx.getNetworkType({
      success: function (res) {
        console.log(res)
        that.setData({
          hasNetworkType: true,
          networkType: (res.subtype || res.networkType)
        })
      }
    })
  },
  clear: function () {
    this.setData({
      hasNetworkType: false,
      networkType: ''
    })
  }
})
</script>
<style scoped src="@/app.css"/>
<style>
.page-body-info {
  height: 100px;
}
.page-body-text-network-type {
  font-size: 40px;
  font-family: -apple-system-font, Helvetica Neue, Helvetica, sans-serif;
}
</style>
