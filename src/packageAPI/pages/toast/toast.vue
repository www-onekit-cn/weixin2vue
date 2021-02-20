<template>
  <onekit-page id='app'>
    <!--    <import src='../../../common/head.vue' />
    <import src='../../../common/foot.vue' />-->

    <onekit-view onekit-class="container">
      <onekit-template is="onekit-template-head"
                       DATA='{"title":"toast"}'></onekit-template>

      <onekit-view onekit-class="page-body">
        <onekit-view onekit-class="btn-area">
          <onekit-view onekit-class="body-view">
            <onekit-button type="default"
                           @Tap="toast1Tap">点击弹出默认toast</onekit-button>
          </onekit-view>
          <onekit-view onekit-class="body-view">
            <onekit-button type="default"
                           @Tap="toast2Tap">点击弹出设置duration的toast</onekit-button>
          </onekit-view>
          <onekit-view onekit-class="body-view">
            <onekit-button type="default"
                           @Tap="toast3Tap">点击弹出显示loading的toast</onekit-button>
          </onekit-view>
          <onekit-view onekit-class="body-view">
            <onekit-button type="default"
                           @Tap="hideToast">点击隐藏toast</onekit-button>
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
  "navigationBarTitleText": "消息提示框",
  "usingComponents": {}
}
import OnekitPage from '../../../../weixin2vue/OnekitPage';
import wx from '../../../../weixin2vue/wx';
//let global = {};
export default OnekitPage(ONEKIT_JSON, {
  onShareAppMessage: function () {
    return {
      title: '消息提示框',
      path: 'packageAPI/pages/toast/toast'
    }
  },
  toast1Tap: function () {
    wx.showToast({
      title: '默认'
    })
  },
  toast2Tap: function () {
    wx.showToast({
      title: 'duration 3000',
      duration: 3000
    })
  },
  toast3Tap: function () {
    wx.showToast({
      title: 'loading',
      icon: 'loading',
      duration: 5000
    })
  },
  hideToast: function () {
    wx.hideToast()
  }
})
</script>
<style scoped src="@/app.css"/>
<style>
</style>
