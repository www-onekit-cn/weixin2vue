<template>
  <onekit-page id='app'>
    <!--    <import src='../../../common/head.vue' />
    <import src='../../../common/foot.vue' />-->

    <onekit-view onekit-class="container">
      <onekit-template is="onekit-template-head"
                       DATA='{"title":"Login"}'></onekit-template>

      <onekit-view onekit-class="page-body">
        <onekit-view onekit-class="page-section">
          <template v-if="hasLogin === true">
            <onekit-text onekit-class="page-body-title">已登录</onekit-text>
            <onekit-text onekit-class="page-body-text">每个微信号中仅需登录 1 次，后续每次进入页面即可根据微信 id 自动拉取用户信息</onekit-text>
          </template>
          <template v-if="hasLogin === false">
            <onekit-text onekit-class="page-body-text">每个微信号中仅需登录一次</onekit-text>
            <onekit-button onekit-class="page-body-button"
                           type="primary"
                           @Tap="login">微信登录</onekit-button>
          </template>
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
  "navigationBarTitleText": "微信登录",
  "usingComponents": {}
}
import OnekitPage from '../../../../weixin2vue/OnekitPage';
import wx from '../../../../weixin2vue/wx';
import { getApp } from '../../../../weixin2vue/macro';
//let global = {};
const app = getApp()
export default OnekitPage(ONEKIT_JSON, {
  onShareAppMessage: function () {
    return {
      title: '微信登录',
      path: 'package/API/pages/login/login'
    }
  },
  onLoad: function () {
    this.setData({
      hasLogin: app.globalData.hasLogin
    })
  },
  data: {},
  login: function () {
    const that = this
    wx.login({
      success: function () {
        app.globalData.hasLogin = true
        that.setData({
          hasLogin: true
        })
      }
    })
  }
})
</script>
<style scoped src="@/app.css"/>
<style>
.page-section {
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0 25px;
  box-sizing: border-box;
}
.page-body-title {
  font-size: 30px;
  line-height: 100px;
}
.page-body-text {
  color: #bbb;
  font-size: 14px;
  line-height: 20px;
  margin: 0 0 50px 0;
  text-align: center;
}
.page-body-button {
  width: 100%;
}
</style>
