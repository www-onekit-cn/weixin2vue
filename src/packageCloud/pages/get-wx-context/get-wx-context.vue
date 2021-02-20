<template>
  <onekit-page id='app'>
    <import src='../../../common/head.vue' />
    <import src='../../../common/foot.vue' />

    <onekit-view onekit-class="container">
      <onekit-template is="onekit-template-head"
                       DATA='{"title":"getWXContext"}'></onekit-template>

      <onekit-view onekit-class="page-body">
        <onekit-view onekit-class="page-section">
          <onekit-view onekit-class="page-body-info">
            <onekit-view onekit-class="page-body-title">WXContext</onekit-view>
            <template v-if="!hasWXContext">
              <onekit-text onekit-class="page-body-text">云函数是在云端（服务器端）运行的函数</onekit-text>
              <onekit-text onekit-class="page-body-text">点击绿色按钮可调用云函数获取微信调用上下文</onekit-text>
              <onekit-text onekit-class="page-body-text">返回内容包括用户 OpenID、小程序 AppID 以及用户 UnionID（满足 UnionID 获取条件时）</onekit-text>
            </template>
            <template v-else>
              <template>
                <onekit-text onekit-class="page-body-text">OpenID</onekit-text>
                <onekit-text onekit-class="context-value">{{wxContext.openid}}</onekit-text>
              </template>
              <template>
                <onekit-text onekit-class="page-body-text">AppID</onekit-text>
                <onekit-text onekit-class="context-value">{{wxContext.appid}}</onekit-text>
              </template>
              <template v-if="wxContext.unionid">
                <onekit-text onekit-class="page-body-text">UnionID</onekit-text>
                <onekit-text onekit-class="context-value">{{wxContext.unionid}}</onekit-text>
              </template>
            </template>
          </onekit-view>
          <onekit-view onekit-class="btn-area">
            <onekit-button type="primary"
                           @Tap="getWXContext"
                           :loading="loading">获取 WXContext</onekit-button>
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
  "navigationBarTitleText": "WXContext",
  "usingComponents": {}
}
import OnekitPage from '../../../../weixin2vue/OnekitPage';
import wx from '../../../../weixin2vue/wx';
//let global = {};
export default OnekitPage(ONEKIT_JSON, {
  onShareAppMessage: function () {
    return {
      title: 'WXContext',
      path: 'page/cloud/pages/get-wx-context/get-wx-context'
    }
  },
  data: {
    hasWXContext: false,
    wxContext: {},
    loading: false
  },
  getWXContext: function () {
    this.setData({
      loading: true
    })
    wx.cloud.callFunction({
      name: 'wxContext',
      data: {},
      success: (res) => {
        console.log('[云函数] [wxContext] wxContext: ', res.result)
        this.setData({
          hasWXContext: true,
          wxContext: res.result,
          loading: false
        })
      },
      fail: (err) => { console.error('[云函数] [wxContext] 调用失败', err) }
    })
  },
  clear: function () {
    this.setData({
      hasWXContext: false,
      wxContext: {}
    })
  }
})
</script>
<style scoped src="@/app.css"/>
<style>
.page-body-info {
  padding-bottom: 0;
  height: 230px;
}
.page-body-text {
  padding: 0 calc(var(--screen-width) * 30 / 750);
  text-align: center;
}
.context-value {
  font-size: calc(var(--screen-width) * 38 / 750);
}
</style>
