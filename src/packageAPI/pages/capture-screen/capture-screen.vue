<template>
  <onekit-page id='app'>
    <!--    <import src='../../../common/head.vue' />
    <import src='../../../common/foot.vue' />-->

    <onekit-view onekit-class="container">
      <onekit-template is="onekit-template-head"
                       DATA='{"title":"onUserCaptureScreen"}'></onekit-template>

      <onekit-view onekit-class="page-body">
        <onekit-view onekit-class="page-body-info">
          <onekit-view onekit-class="page-body-title">请进行屏幕截屏</onekit-view>
          <onekit-text onekit-class="page-body-text">截屏事件{{ captured ? "已" : "未" }}触发</onekit-text>
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
  "navigationBarTitleText": "用户截屏事件",
  "usingComponents": {}
}
import OnekitPage from '../../../../weixin2vue/OnekitPage';
import wx from '../../../../weixin2vue/wx';
//let //let global = {};
export default OnekitPage(ONEKIT_JSON, {
  onShareAppMessage: function () {
    return {
      title: '用户截屏事件',
      path: 'packageAPI/pages/capture-screen/capture-screen'
    }
  },
  data: {
    captured: false
  },
  onLoad: function () {
    wx.onUserCaptureScreen(() => {
      this.setData({
        captured: true
      })
    })
  }
})
</script>
<style scoped src="@/app.css"/>
<style>
.page-body-text {
  font-size: 20px;
  font-family: -apple-system-font, Helvetica Neue, Helvetica, sans-serif;
}
</style>
