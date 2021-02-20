<template>
  <onekit-page id='app'>
    <!--    <import src='../../../common/head.vue' />
    <import src='../../../common/foot.vue' />-->

    <onekit-view onekit-class="container">
      <onekit-template is="onekit-template-head"
                       :DATA='{"title":"onCompassChange"}'></onekit-template>

      <onekit-view onekit-class="page-body">
        <onekit-view onekit-class="page-section page-section_center">
          <onekit-text onekit-class="page-body-text">旋转手机即可获取方位信息</onekit-text>
          <onekit-view onekit-class="direction">
            <onekit-view onekit-class="bg-compass-line"></onekit-view>
            <onekit-image onekit-class="bg-compass"
                          src="compass.png"
                          :onekit-style="'transform: rotate('+(direction)+'deg)'"></onekit-image>
            <onekit-view onekit-class="direction-value">
              <onekit-text>{{direction}}</onekit-text>
              <onekit-text onekit-class="direction-degree">o</onekit-text>
            </onekit-view>
          </onekit-view>
          <onekit-view onekit-class="controls">
            <onekit-button @Tap="startCompass"
                           :disabled="enabled">开始监听</onekit-button>
            <onekit-button @Tap="stopCompass"
                           :disabled="!enabled">停止监听</onekit-button>
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
  "navigationBarTitleText": "监听罗盘数据",
  "usingComponents": {}
}
import OnekitPage from '../../../../weixin2vue/OnekitPage';
import wx from '../../../../weixin2vue/wx';
//let global = {};
export default OnekitPage(ONEKIT_JSON, {
  onShareAppMessage: function () {
    return {
      title: '监听罗盘数据',
      path: 'packageAPI/pages/on-compass-change/on-compass-change'
    }
  },
  data: {
    enabled: true,
    direction: 0
  },
  onReady: function () {
    const that = this
    wx.onCompassChange(function (res) {
      that.setData({
        direction: parseInt(res.direction, 10)
      })
    })
  },
  startCompass: function () {
    if (this.data.enabled) {
      return;
    }
    const that = this
    wx.startCompass({
      success: function () {
        that.setData({
          enabled: true
        })
      }
    })
  },
  stopCompass: function () {
    if (!this.data.enabled) {
      return;
    }
    const that = this
    wx.stopCompass({
      success: function () {
        that.setData({
          enabled: false
        })
      }
    })
  }
})
</script>
<style scoped src="@/app.css"/>
<style>
.direction {
  position: relative;
  margin-top: 35px;
  display: flex;
  width: 520px;
  height: 520px;
  align-items: center;
  justify-content: center;
}
.direction-value {
  position: relative;
  font-size: 100px;
  color: #353535;
  line-height: 1;
  z-index: 1;
}
.direction-degree {
  position: absolute;
  top: 0;
  right: -20px;
  font-size: 30px;
}
.bg-compass {
  position: absolute;
  top: 0;
  left: 0;
  width: 520px;
  height: 520px;
  transition: 0.1s;
}
.bg-compass-line {
  position: absolute;
  left: 134px;
  top: -5px;
  width: 3px;
  height: 28px;
  background-color: #1aad19;
  border-radius: 500px;
  z-index: 1;
}
.controls {
  margin-top: 35px;
}
.controls button {
  margin-left: 10px;
  float: left;
}
</style>
