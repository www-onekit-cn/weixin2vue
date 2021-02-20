<template>
  <onekit-page id='app'>
    <!--    <import src='../../../common/head.vue' />
    <import src='../../../common/foot.vue' />-->

    <onekit-view onekit-class="container">
      <onekit-template is="onekit-template-head"
                       DATA='{"title":"loadFontFace"}'></onekit-template>

      <onekit-view onekit-class="page-body">
        <onekit-view onekit-class="page-section">
          <onekit-view :onekit-class="'page-body-info display-area '+( loaded ? 'font-loaded' : '' )">
            <onekit-text v-if="!loaded">Load {{ fontFamily }}</onekit-text>
            <onekit-text v-else>{{ fontFamily }} is loaded</onekit-text>
          </onekit-view>
          <onekit-view onekit-class="btn-area">
            <onekit-button type="primary"
                           @Tap="loadFontFace">加载字体</onekit-button>
            <onekit-button type="default"
                           @Tap="clear">清除</onekit-button>
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
  "navigationBarTitleText": "动态加载字体",
  "usingComponents": {}
}
import OnekitPage from '../../../../weixin2vue/OnekitPage';
import wx from '../../../../weixin2vue/wx';
//let global = {};
export default OnekitPage(ONEKIT_JSON, {
  onShareAppMessage: function () {
    return {
      title: '动态加载字体',
      path: 'packageAPI/pages/load-font-face/load-font-face'
    }
  },
  data: {
    fontFamily: 'Bitstream Vera Serif Bold',
    loaded: false
  },
  onLoad: function () {
    this.setData({
      loaded: false
    })
  },
  loadFontFace: function () {
    const self = this
    wx.loadFontFace({
      family: this.data.fontFamily,
      source: 'url("https://sungd.github.io/Pacifico.ttf")',
      success: function (res) {
        console.log(res.status)
        self.setData({
          loaded: true
        })
      },
      fail: function (res) {
        console.log(res.status)
      },
      complete: function (res) {
        console.log(res.status)
      }
    })
  },
  clear: function () {
    this.setData({
      loaded: false
    })
  }
})
</script>
<style scoped src="@/app.css"/>
<style>
.page-body-info {
  align-items: center;
  padding: 100px 0;
}
.font-loaded {
  font-family: "Bitstream Vera Serif Bold";
}
.display-area {
  font-size: 20px;
}
</style>
