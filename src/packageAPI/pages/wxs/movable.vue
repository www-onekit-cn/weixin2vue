<template>
  <onekit-page id='app'>

    <onekit-view v-if="show"
                 onekit-class="area"
                 onekit-style="position:relative;width:100%;height:100%;overflow: hidden">
      <onekit-view data-index="1"
                   :data-obj="dataObj"
                   @Touchstart="test$touchstart"
                   @Touchmove="test$touchmove"
                   @Touchend="test$touchmove"
                   onekit-class="movable"
                   :onekit-style="'position:absolute;width:100px;height:100px;border-radius: 50%;background:url(\'https://res.wx.qq.com/community/dist/community/images/logo_miniprogram_013191.png\');background-size: cover;left:'+(left)+'px;top:'+(top)+'px'"></onekit-view>
    </onekit-view>

  </onekit-page>
</template>
<script>
const test = require('./movable');
const ONEKIT_JSON = {
  "navigationBarTitleText": "movable",
  "usingComponents": {}
}
import { OnekitPage } from 'weixin2vue';
import { wx } from 'weixin2vue';
//let global = {};
export default OnekitPage(ONEKIT_JSON, {
  test$touchstart (e) { test.touchstart(e, this); },
  test$touchmove (e) { test.touchmove(e, this); },
  onShareAppMessage: function () {
    return {
      title: 'movable',
      path: 'packageAPI/pages/wxs/movable'
    }
  },
  data: {
    left: 50,
    top: 50,
    taptest: 'taptest',
    show: true,
    dataObj: {
      obj: 1
    }
  },
  onLoad: function (options) {
  },
  onReady: function () {
    setTimeout(() => { this.setData({}) }, 3000)
  },
  taptest: function () {
    this.setData({
      show: false
    })
  }
})
</script>
<style scoped src="@/app.css"/>
<style>
</style>
