<template>
  <onekit-page id='app'>
    <import src='../../../common/head.vue' />
    <import src='../../../common/foot.vue' />

    <onekit-view onekit-class="container">
      <onekit-template is="onekit-template-head"
                       DATA='{"title":"onNetworkStatusChange"}'></onekit-template>

      <onekit-view onekit-class="page-body">
        <onekit-view onekit-class="page-section">
          <onekit-view onekit-class="page-body-info">
            <onekit-view onekit-class="page-body-title">网络状态</onekit-view>
            <template v-if="isConnected === false">
              <onekit-text onekit-class="page-body-text">没有网络连接</onekit-text>
            </template>
            <template v-if="isConnected === true">
              <onekit-text onekit-class="page-body-text-network-type">{{networkType}}</onekit-text>
            </template>
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
  "navigationBarTitleText": "监听手机网络变化",
  "usingComponents": {}
}
import OnekitPage from '../../../../weixin2vue/OnekitPage';
import wx from '../../../../weixin2vue/wx';
//let global = {};
export default OnekitPage(ONEKIT_JSON, {
  onShareAppMessage: function () {
    return {
      title: '监听手机网络变化',
      path: 'packageAPI/pages/on-network-status-change/on-network-status-change'
    }
  },
  data: {
    isConnected: false
  },
  onLoad: function () {
    const that = this
    wx.onNetworkStatusChange(function (res) {
      that.setData({
        isConnected: res.isConnected,
        networkType: res.networkType
      })
    })
  },
  onShow: function () {
    const that = this
    wx.getNetworkType({
      success: function (res) {
        that.setData({
          isConnected: res.networkType !== 'none',
          networkType: res.networkType
        })
      }
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
