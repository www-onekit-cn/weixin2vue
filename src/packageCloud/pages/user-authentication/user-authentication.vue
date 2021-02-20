<template>
  <onekit-page id='app'>
    <import src='../../../common/head.vue' />
    <import src='../../../common/foot.vue' />

    <onekit-view onekit-class="container">
      <onekit-template is="onekit-template-head"
                       DATA='{"title":"User Authentication"}'></onekit-template>

      <onekit-view onekit-class="page-body">
        <onekit-view onekit-class="page-section">
          <onekit-view onekit-class="page-body-info">
            <onekit-view onekit-class="page-body-title">OpenID</onekit-view>
            <template v-if="!openid">
              <onekit-text onekit-class="page-body-text">点击绿色按钮可通过云开发获取用户 OpenID</onekit-text>
              <onekit-text onekit-class="page-body-text">使用云开发，无需自己部署服务端并维护复杂的鉴权机制，在小程序端简单调用即可通过云端获取天然可信任的用户登录态</onekit-text>
            </template>
            <template v-else>
              <onekit-text onekit-class="openid">{{openid}}</onekit-text>
            </template>
          </onekit-view>
          <onekit-view onekit-class="btn-area">
            <onekit-button type="primary"
                           @Tap="onGetOpenid"
                           :loading="loading">获取 OpenID</onekit-button>
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
  "navigationBarTitleText": "用户鉴权",
  "usingComponents": {}
}
import OnekitPage from '../../../../weixin2vue/OnekitPage';
//import wx from '../weixin2vue/wx';
import { getApp } from '../../../../weixin2vue/macro';
//let global = {};
const app = getApp()
export default OnekitPage(ONEKIT_JSON, {
  onShareAppMessage: function () {
    return {
      title: '用户鉴权',
      path: 'page/cloud/pages/user-authentication/user-authentication'
    }
  },
  data: {
    openid: '',
    loading: false
  },
  onGetOpenid: function () {
    this.setData({
      loading: true
    })
    app.getUserOpenIdViaCloud().then((openid) => {
      this.setData({
        openid,
        loading: false
      })
      return openid
    }).catch((err) => { console.error(err) })
  },
  clear: function () {
    this.setData({
      openid: ''
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
.openid {
  margin-top: calc(var(--screen-width) * 20 / 750);
  font-size: calc(var(--screen-width) * 38 / 750);
}
</style>
