<template>
  <onekit-page id='app'>
    <!--    <import src='../../../common/head.vue' />
    <import src='../../../common/foot.vue' />-->

    <onekit-view onekit-class="container">
      <onekit-template is="onekit-template-head"
                       DATA='{"title":"WXS"}'></onekit-template>

      <onekit-view onekit-class="page-body">
        <onekit-view onekit-class="page-section">
          <onekit-view onekit-class="btn-area">
            <onekit-button type="primary"
                           data-nav="movable"
                           @:tap="handleNavChange">movable</onekit-button>
          </onekit-view>

          <onekit-view onekit-class="btn-area">
            <onekit-button type="primary"
                           data-nav="nearby"
                           @:tap="handleNavChange">跟随 swiper 的图片切换</onekit-button>
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
  "navigationBarTitleText": "WXS",
  "usingComponents": {}
}
import OnekitPage from '../../../../weixin2vue/OnekitPage';
import wx from '../../../../weixin2vue/wx';
//let global = {};
export default OnekitPage(ONEKIT_JSON, {
  onShareAppMessage: function () {
    return {
      title: 'wxs',
      path: 'packageAPI/pages/wxs/wxs'
    }
  },
  handleNavChange: function (e) {
    console.log(e)
    wx.navigateTo({
      url: `/packageAPI/pages/wxs/${e.currentTarget.dataset.nav}`
    })
  }
})
</script>
<style scoped src="@/app.css"/>
<style>
</style>
