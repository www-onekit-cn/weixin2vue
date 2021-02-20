<template>
  <onekit-page id='app'>
    <import src='../../../common/head.vue' />
    <import src='../../../common/foot.vue' />

    <onekit-view onekit-class="container">
      <onekit-template is="onekit-template-head"
                       DATA='{"title":"chooseLocation"}'></onekit-template>

      <onekit-view onekit-class="page-body">
        <onekit-view onekit-class="page-section">
          <onekit-view onekit-class="page-body-info">
            <onekit-text onekit-class="page-body-text-small">当前位置信息</onekit-text>
            <template v-if="hasLocation === false">
              <onekit-text onekit-class="page-body-text">未选择位置</onekit-text>
            </template>
            <template v-if="hasLocation === true">
              <onekit-text onekit-class="page-body-text">{{locationAddress}}</onekit-text>
              <onekit-view onekit-class="page-body-text-location">
                <onekit-text>E: {{location.longitude[0]}}°{{location.longitude[1]}}′</onekit-text>
                <onekit-text>N: {{location.latitude[0]}}°{{location.latitude[1]}}′</onekit-text>
              </onekit-view>
            </template>
          </onekit-view>
          <onekit-view onekit-class="btn-area">
            <onekit-button type="primary"
                           @Tap="chooseLocation">选择位置</onekit-button>
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
  "navigationBarTitleText": "使用原生地图选择位置",
  "usingComponents": {}
}
import { OnekitPage } from 'weixin2vue';
import { wx } from 'weixin2vue';
//let global = {};
const util = require('../../../util/util.js')
const formatLocation = util.formatLocation
export default OnekitPage(ONEKIT_JSON, {
  onShareAppMessage: function () {
    return {
      title: '使用原生地图选择位置',
      path: 'packageAPI/pages/choose-location/choose-location'
    }
  },
  data: {
    hasLocation: false
  },
  chooseLocation: function () {
    const that = this
    wx.chooseLocation({
      success: function (res) {
        console.log(res)
        that.setData({
          hasLocation: true,
          location: formatLocation(res.longitude, res.latitude),
          locationAddress: res.address
        })
      }
    })
  },
  clear: function () {
    this.setData({
      hasLocation: false
    })
  }
})
</script>
<style scoped src="@/app.css"/>
<style>
.page-body-info {
  padding-bottom: 0;
  height: 420px;
}
</style>
