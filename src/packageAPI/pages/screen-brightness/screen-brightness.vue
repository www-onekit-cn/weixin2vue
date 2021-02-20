<template>
  <onekit-page id='app'>
    <import src='../../../common/head.vue' />
    <import src='../../../common/foot.vue' />

    <onekit-view onekit-class="container">
      <onekit-template is="onekit-template-head"
                       DATA='{"title":"get/set/ScreenBrightness"}'></onekit-template>

      <onekit-view onekit-class="page-body">
        <onekit-view onekit-class="page-body-info">
          <onekit-view onekit-class="page-body-title">当前屏幕亮度</onekit-view>
          <onekit-text onekit-class="page-body-text-screen-brightness">{{screenBrightness}}</onekit-text>
        </onekit-view>
        <onekit-view onekit-class="page-section page-section-gap">
          <onekit-view onekit-class="page-section-title">设置屏幕亮度</onekit-view>
          <onekit-view onekit-class="body-view">
            <onekit-slider @Change="changeBrightness"
                           :value="screenBrightness"
                           min="0"
                           max="1"
                           step="0.1"></onekit-slider>
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
  "navigationBarTitleText": "屏幕亮度",
  "usingComponents": {}
}
import { OnekitPage } from 'weixin2vue';
import { wx } from 'weixin2vue';
//let //let global = {};
export default OnekitPage(ONEKIT_JSON, {
  onShareAppMessage: function () {
    return {
      title: '屏幕亮度',
      path: 'packageAPI/pages/screen-brightness/screen-brightness'
    }
  },
  data: {
    screenBrightness: 0
  },
  onLoad: function () {
    this._updateScreenBrightness()
  },
  changeBrightness: function (e) {
    const value = Number.parseFloat(e.detail.value.toFixed(1))
    this.setData({
      screenBrightness: Number.parseFloat(e.detail.value.toFixed(1))
    })
    wx.setScreenBrightness({
      value
    })
  },
  _updateScreenBrightness: function () {
    wx.getScreenBrightness({
      success: (res) => {
        console.log(res)
        this.setData({
          screenBrightness: Number.parseFloat(res.value.toFixed(1))
        })
      },
      fail: function (err) {
        console.error(err)
      }
    })
  }
})
</script>
<style scoped src="@/app.css"/>
<style>
.page-body-text-screen-brightness {
  font-size: 40px;
  font-family: -apple-system-font, Helvetica Neue, Helvetica, sans-serif;
}
.page-section-gap {
  padding: 15px;
}
</style>
