<template>
  <onekit-page id='app'>
    <import src='../../../common/head.vue' />
    <import src='../../../common/foot.vue' />

    <onekit-view onekit-class="container">
      <onekit-template is="onekit-template-head"
                       DATA='{"title":"vibrate/Long/Short"}'></onekit-template>

      <onekit-view onekit-class="page-body">
        <onekit-view onekit-class="page-section">
          <onekit-view onekit-class="btn-area">
            <onekit-button type="primary"
                           @Tap="vibrateLong">长振动</onekit-button>
            <onekit-button type="default"
                           @Tap="vibrateShort">短振动</onekit-button>
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
  "navigationBarTitleText": "振动",
  "usingComponents": {}
}
import { OnekitPage } from 'weixin2vue';
import { wx } from 'weixin2vue';
//let global = {};
export default OnekitPage(ONEKIT_JSON, {
  onShareAppMessage: function () {
    return {
      title: '振动',
      path: 'packageAPI/pages/vibrate/vibrate'
    }
  },
  vibrateShort: function () {
    wx.vibrateShort({
      success: function (res) {
        console.log(res)
      },
      fail: function (err) {
        console.error(err)
      },
      complete: function () {
        console.log('completed')
      }
    })
  },
  vibrateLong: function () {
    wx.vibrateLong({
      success: function (res) {
        console.log(res)
      },
      fail: function (err) {
        console.error(err)
      },
      complete: function () {
        console.log('completed')
      }
    })
  }
})
</script>
<style scoped src="@/app.css"/>
<style>
</style>
