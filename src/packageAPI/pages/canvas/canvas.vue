<template>
  <onekit-page id='app'>
    <!--    <import src='../../../common/head.vue' />
    <import src='../../../common/foot.vue' />-->

    <onekit-view onekit-class="container">
      <onekit-template is="onekit-template-head"
                       :DATA='{"title":"createContext"}'></onekit-template>

      <onekit-view onekit-class="page-body">
        <onekit-view onekit-class="page-section">
          <onekit-canvas onekit-class="canvas-element"
                         canvas-id="canvas"></onekit-canvas>
          <onekit-scroll-view onekit-class="canvas-buttons"
                              scroll-y>
            <template v-for="(method) in methods">
              <onekit-button onekit-class="canvas-button"
                             @Tap="method">{{method}}</onekit-button>
            </template>
            <onekit-button onekit-class="canvas-button"
                           @Tap="toTempFilePath"
                           type="primary">toTempFilePath</onekit-button>
          </onekit-scroll-view>
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
  "navigationBarTitleText": "创建画布",
  "usingComponents": {}
}
import OnekitPage from '../../../../weixin2vue/OnekitPage';
import wx from '../../../../weixin2vue/wx';
//let global = {};
const example = require('./example.js')
export default OnekitPage(ONEKIT_JSON, {
  onShareAppMessage: function () {
    return {
      title: '创建画布',
      path: 'packageAPI/pages/canvas/canvas'
    }
  },
  onLoad: function () {
    this.context = wx.createContext()
    const methods = Object.keys(example)
    this.setData({
      methods
    })
    const that = this
    methods.forEach(function (method) {
      that[method] = function () {
        example[method](that.context)
        const actions = that.context.getActions()
        wx.drawCanvas({
          canvasId: 'canvas',
          actions
        })
      }
    })
  },
  toTempFilePath: function () {
    wx.canvasToTempFilePath({
      canvasId: 'canvas',
      success: function (res) {
        console.log(res)
      },
      fail: function (res) {
        console.log(res)
      }
    })
  }
})
</script>
<style scoped src="@/app.css"/>
<style>
.canvas-element-wrapper {
  display: block;
  margin-bottom: 50px;
}
.canvas-element {
  width: 100%;
  height: 250px;
  background-color: #ffffff;
}
.canvas-buttons {
  padding: 15px 25px 5px;
  width: 100%;
  height: 330px;
  box-sizing: border-box;
}
.canvas-button {
  float: left;
  line-height: 2;
  width: 150px;
  margin: 8px 11px;
}
</style>
