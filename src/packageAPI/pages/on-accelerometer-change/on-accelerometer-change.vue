<template>
  <onekit-page id='app'>
    <!--    <import src='../../../common/head.vue' />
    <import src='../../../common/foot.vue' />-->

    <onekit-view onekit-class="container">
      <onekit-template is="onekit-template-head"
                       :DATA='{"title":"onAccelerometerChange"}'></onekit-template>

      <onekit-view onekit-class="page-body">
        <onekit-view onekit-class="page-section page-section_center">
          <onekit-text onekit-class="page-body-text">倾斜手机即可移动下方小球</onekit-text>
          <onekit-view onekit-class="page-body-canvas">
            <onekit-canvas onekit-class="page-body-ball"
                           :show="true"
                           canvas-id="big-ball"></onekit-canvas>
            <onekit-canvas onekit-class="page-body-ball"
                           :show="true"
                           canvas-id="small-ball"></onekit-canvas>
          </onekit-view>
          <onekit-view onekit-class="page-body-xyz">
            <onekit-text onekit-class="page-body-title">X: {{x}}</onekit-text>
            <onekit-text onekit-class="page-body-title">Y: {{y}}</onekit-text>
            <onekit-text onekit-class="page-body-title">Z: {{z}}</onekit-text>
          </onekit-view>
          <onekit-view onekit-class="page-body-controls">
            <onekit-button @Tap="startAccelerometer"
                           :disabled="enabled">开始监听</onekit-button>
            <onekit-button @Tap="stopAccelerometer"
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
  "navigationBarTitleText": "监听重力感应数据",
  "usingComponents": {}
}
import OnekitPage from '../../../../weixin2vue/OnekitPage';
import wx from '../../../../weixin2vue/wx';
//let global = {};
export default OnekitPage(ONEKIT_JSON, {
  onShareAppMessage: function () {
    return {
      title: '监听重力感应数据',
      path: 'packageAPI/pages/on-accelerometer-change/on-accelerometer-change'
    }
  },
  data: {
    x: 0,
    y: 0,
    z: 0,
    enabled: true
  },
  onReady: function () {
    this.drawBigBall()
    const that = this
    this.position = {
      x: 151,
      y: 151,
      vx: 0,
      vy: 0,
      ax: 0,
      ay: 0
    }
    wx.onAccelerometerChange(function (res) {
      that.setData({
        x: res.x.toFixed(2),
        y: res.y.toFixed(2),
        z: res.z.toFixed(2)
      })
      that.position.ax = Math.sin(((res.x * Math.PI)) / 2)
      that.position.ay = -Math.sin(((res.y * Math.PI)) / 2)
    })
    this.interval = setInterval(function () {
      that.drawSmallBall()
    }, 17)
  },
  drawBigBall: function () {
    const context = wx.createContext()
    context.beginPath(0)
    context.arc(151, 151, 140, 0, Math.PI * 2)
    context.setFillStyle('#ffffff')
    context.setStrokeStyle('#aaaaaa')
    context.fill()
    wx.drawCanvas({
      canvasId: 'big-ball',
      actions: context.getActions()
    })
  },
  drawSmallBall: function () {
    const p = this.position
    var strokeStyle = 'rgba(1,1,1,0)'
    p.x += p.vx
    p.y += p.vy
    p.vx += p.ax
    p.vy += p.ay
    if (Math.sqrt(Math.pow(Math.abs(p.x) - 151, 2) + Math.pow(Math.abs(p.y) - 151, 2)) >= 115) {
      if (((p.x > 151) && (p.vx > 0))) {
        p.vx = 0;
      }
      if (((p.x < 151) && (p.vx < 0))) {
        p.vx = 0;
      }
      if (((p.y > 151) && (p.vy > 0))) {
        p.vy = 0;
      }
      if (((p.y < 151) && (p.vy < 0))) {
        p.vy = 0;
      }
      strokeStyle = '#ff0000';
    }
    const context = wx.createContext()
    context.beginPath(0)
    context.arc(p.x, p.y, 15, 0, Math.PI * 2)
    context.setFillStyle('#1aad19')
    context.setStrokeStyle(strokeStyle)
    context.fill()
    wx.drawCanvas({
      canvasId: 'small-ball',
      actions: context.getActions()
    })
  },
  startAccelerometer: function () {
    if (this.data.enabled) {
      return;
    }
    const that = this
    wx.startAccelerometer({
      success: function () {
        that.setData({
          enabled: true
        })
      }
    })
  },
  stopAccelerometer: function () {
    if (!this.data.enabled) {
      return;
    }
    const that = this
    wx.stopAccelerometer({
      success: function () {
        that.setData({
          enabled: false
        })
      }
    })
  },
  onUnload: function () {
    clearInterval(this.interval)
  }
})
</script>
<style scoped src="@/app.css"/>
<style>
.page-body-xyz {
  display: flex;
  justify-content: space-between;
  width: 350px;
  margin-top: 45px;
  box-sizing: border-box;
  text-align: center;
}
.page-body-canvas {
  margin-top: 15px;
  width: 302px;
  height: 302px;
  position: relative;
}
.page-body-ball {
  position: absolute;
  top: 0;
  left: 0;
  width: 302px;
  height: 302px;
}
.page-body-title {
  margin-bottom: 0;
  font-size: 16px;
  width: 225px;
}
.page-body-controls {
  margin-top: 15px;
}
.page-body-controls button {
  margin-left: 10px;
  float: left;
}
</style>
