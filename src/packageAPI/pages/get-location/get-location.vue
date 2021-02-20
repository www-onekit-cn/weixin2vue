<template>
  <onekit-page id='app'>
    <import src='../../../common/head.vue' />
    <import src='../../../common/foot.vue' />

    <onekit-view onekit-class="container">
      <onekit-template is="onekit-template-head"
                       DATA='{"title":"getLocation"}'></onekit-template>

      <onekit-view onekit-class="page-body">
        <onekit-view onekit-class="page-section">
          <onekit-view onekit-class="page-body-info">
            <onekit-text onekit-class="page-body-text-small">当前位置经纬度</onekit-text>
            <template v-if="hasLocation === false">
              <onekit-text onekit-class="page-body-text">未获取</onekit-text>
            </template>
            <template v-if="hasLocation === true">
              <onekit-view onekit-class="page-body-text-location">
                <onekit-text>E: {{location.longitude[0]}}°{{location.longitude[1]}}′</onekit-text>
                <onekit-text>N: {{location.latitude[0]}}°{{location.latitude[1]}}′</onekit-text>
              </onekit-view>
            </template>
          </onekit-view>
          <onekit-view onekit-class="btn-area">
            <onekit-button type="primary"
                           @Tap="getLocation">获取位置</onekit-button>
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
  "navigationBarTitleText": "获取位置",
  "usingComponents": {}
}
import OnekitPage from '../../../../weixin2vue/OnekitPage';
import wx from '../../../../weixin2vue/wx';
//let global = {};
const util = require('../../../util/util.js')
const formatLocation = util.formatLocation
export default OnekitPage(ONEKIT_JSON, {
  onShareAppMessage: function () {
    return {
      title: '获取位置',
      path: 'packageAPI/pages/get-location/get-location'
    }
  },
  data: {
    hasLocation: false
  },
  getLocation: function () {
    const that = this
    wx.getLocation({
      success: function (res) {
        console.log(res)
        that.setData({
          hasLocation: true,
          location: formatLocation(res.longitude, res.latitude)
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
  height: 225px;
}
.page-body-text-small {
  font-size: 12px;
  color: var(--weui-FG-0);
  margin-bottom: 50px;
}
.page-body-text-location {
  display: flex;
  font-size: 25px;
}
.page-body-text-location text {
  margin: 5px;
}
</style>
