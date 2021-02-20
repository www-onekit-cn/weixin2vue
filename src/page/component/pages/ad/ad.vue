<template>
  <onekit-page id='app'>
    <import src='../../../common/head.vue' />
    <import src='../../../common/foot.vue' />

    <onekit-view onekit-class="container">
      <onekit-template is="onekit-template-head"
                       DATA='{"title":"ad"}'></onekit-template>

      <onekit-view onekit-class="page-body">
        <onekit-view onekit-class="page-section page-section-gap">
          <onekit-view onekit-class="page-section-title">关注卡片</onekit-view>
          <onekit-ad unit-id="adunit-demo4"></onekit-ad>
        </onekit-view>
        <onekit-view v-if="platform === 'ios'"
                     onekit-class="page-section page-section-gap">
          <onekit-view onekit-class="page-section-title">下载卡片</onekit-view>
          <onekit-ad unit-id="adunit-demo8"></onekit-ad>
        </onekit-view>
        <onekit-view v-else
                     onekit-class="page-section page-section-gap">
          <onekit-view onekit-class="page-section-title">下载卡片</onekit-view>
          <onekit-ad unit-id="adunit-demo9"></onekit-ad>
        </onekit-view>
        <onekit-view v-if="platform === 'ios'"
                     onekit-class="page-section page-section-gap">
          <onekit-view onekit-class="page-section-title">应用推广</onekit-view>
          <onekit-ad unit-id="adunit-demo2"></onekit-ad>
        </onekit-view>
        <onekit-view v-else
                     onekit-class="page-section page-section-gap">
          <onekit-view onekit-class="page-section-title">应用推广</onekit-view>
          <onekit-ad unit-id="adunit-demo7"></onekit-ad>
        </onekit-view>
        <onekit-view onekit-class="page-section page-section-gap">
          <onekit-view onekit-class="page-section-title">公众号推广</onekit-view>
          <onekit-ad unit-id="adunit-demo3"></onekit-ad>
        </onekit-view>
        <onekit-view onekit-class="page-section page-section-gap">
          <onekit-view onekit-class="page-section-title">活动推广</onekit-view>
          <onekit-ad unit-id="adunit-demo5"></onekit-ad>
        </onekit-view>
        <onekit-view onekit-class="page-section page-section-gap">
          <onekit-view onekit-class="page-section-title">商品推广</onekit-view>
          <onekit-ad unit-id="adunit-demo6"></onekit-ad>
        </onekit-view>
      </onekit-view>

      <onekit-template is="onekit-template-foot"></onekit-template>
    </onekit-view>
  </onekit-page>
</template>
<script>
import Vue from 'vue'
import foot from '../../../../page/common/foot.foot'
Vue.component('onekit-template-foot', foot)
import head from '../../../../page/common/head.head'
Vue.component('onekit-template-head', head)
const ONEKIT_JSON = {
  "navigationBarTitleText": "ad",
  "usingComponents": {}
}
import OnekitPage from '../../../../../weixin2vue/OnekitPage';
import wx from '../../../../../weixin2vue/wx';
//let //let global = {};
const info = wx.getSystemInfoSync()
export default OnekitPage(ONEKIT_JSON, {
  onShareAppMessage: function () {
    return {
      title: 'ad',
      path: 'page/component/pages/ad/ad'
    }
  },
  data: {
    platform: info.platform
  }
})
</script>
<style scoped src="@/app.css"/>
<style>
</style>
