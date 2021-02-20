<template>
  <onekit-page id='app'>
    <!--    <import src='../../../common/head.vue' />
    <import src='../../../common/foot.vue' />-->

    <onekit-view onekit-class="container">
      <onekit-template is="onekit-template-head"
                       DATA='{"title":"navigateTo/Back, redirectTo"}'></onekit-template>

      <onekit-view onekit-class="page-body">
        <onekit-view onekit-class="btn-area">
          <onekit-button @Tap="navigateTo">跳转新页面</onekit-button>
          <onekit-button @Tap="navigateBack">返回上一页</onekit-button>
          <onekit-button @Tap="redirectTo">在当前页面打开</onekit-button>
          <onekit-button @Tap="switchTab">跳转到组件Tab页</onekit-button>
          <onekit-button @Tap="reLaunch">关闭所有页面并跳转</onekit-button>
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
  "navigationBarTitleText": "页面跳转",
  "usingComponents": {}
}
import OnekitPage from '../../../../weixin2vue/OnekitPage';
import wx from '../../../../weixin2vue/wx';
//let global = {};
export default OnekitPage(ONEKIT_JSON, {
  onShareAppMessage: function () {
    return {
      title: '页面跳转',
      path: 'packageAPI/pages/navigator/navigator'
    }
  },
  navigateTo: function () {
    wx.navigateTo({
      url: './navigator'
    })
  },
  navigateBack: function () {
    wx.navigateBack()
  },
  redirectTo: function () {
    wx.redirectTo({
      url: './navigator'
    })
  },
  switchTab: function () {
    wx.switchTab({
      url: '/page/component/index'
    })
  },
  reLaunch: function () {
    wx.reLaunch({
      url: '/page/component/index'
    })
  }
})
</script>
<style scoped src="@/app.css"/>
<style>
</style>
