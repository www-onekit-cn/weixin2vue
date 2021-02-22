<template>
  <onekit-page id='app'>
    <!--    <import src='../../../common/head.vue' />
    <import src='../../../common/foot.vue' />-->

    <onekit-view onekit-class="container">
      <onekit-template is="onekit-template-head"
                       :DATA='{"title":"button"}'></onekit-template>

      <onekit-view onekit-class="page-body">
        <onekit-view onekit-class="btn-area"
                     onekit-id="buttonContainer">
          <onekit-button type="primary">页面主操作 Normal</onekit-button>
          <onekit-button type="primary"
                         loading>页面主操作 Loading</onekit-button>
          <onekit-button type="primary"
                         disabled>页面主操作 Disabled</onekit-button>

          <onekit-button type="default">页面次要操作 Normal</onekit-button>
          <onekit-button type="default"
                         disabled>页面次要操作 Disabled</onekit-button>

          <onekit-button type="warn">警告类操作 Normal</onekit-button>
          <onekit-button type="warn"
                         disabled>警告类操作 Disabled</onekit-button>

          <onekit-view onekit-class="button-sp-area">
            <onekit-button type="primary"
                           plain>按钮</onekit-button>
            <onekit-button type="primary"
                           disabled
                           plain>不可点击的按钮</onekit-button>

            <onekit-button type="default"
                           plain>按钮</onekit-button>
            <onekit-button type="default"
                           disabled
                           plain>按钮</onekit-button>

            <onekit-button onekit-class="mini-btn"
                           type="primary"
                           size="mini">按钮</onekit-button>
            <onekit-button onekit-class="mini-btn"
                           type="default"
                           size="mini">按钮</onekit-button>
            <onekit-button onekit-class="mini-btn"
                           type="warn"
                           size="mini">按钮</onekit-button>
          </onekit-view>
          <onekit-button type="primary"
                         open-type="contact"
                         @Contact="handleContact"
                         :show-message-card
                         send-message-title="临时会话">打开客服会话</onekit-button>
          <onekit-button type="primary"
                         open-type="share">触发用户转发</onekit-button>
          <onekit-button type="primary"
                         open-type="getPhoneNumber"
                         @Getphonenumber="handleGetPhoneNumber">获取用户手机号</onekit-button>
          <onekit-button type="primary"
                         open-type="getUserInfo"
                         lang="zh_CN"
                         @Getuserinfo="handleGetUserInfo">获取用户信息</onekit-button>
          <onekit-button type="primary"
                         open-type="openSetting"
                         @Opensetting="handleOpenSetting">打开设置授权页</onekit-button>
          <onekit-button type="primary"
                         open-type="feedback">打开意见反馈</onekit-button>
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
  "navigationBarTitleText": "button",
  "usingComponents": {}
}
import OnekitPage from '../../../../../weixin2vue/OnekitPage';
//import wx from '../../../../../weixin2vue/wx';
//let global = {};
const types = [
  'default',
  'primary',
  'warn'
]
const pageObject = {
  data: {
    defaultSize: 'default',
    primarySize: 'default',
    warnSize: 'default',
    disabled: false,
    plain: false,
    loading: false
  },
  onShareAppMessage: function () {
    return {
      title: 'button',
      path: 'page/component/pages/button/button'
    }
  },
  setDisabled: function () {
    this.setData({
      disabled: !this.data.disabled
    })
  },
  setPlain: function () {
    this.setData({
      plain: !this.data.plain
    })
  },
  setLoading: function () {
    this.setData({
      loading: !this.data.loading
    })
  },
  handleContact: function (e) {
    console.log(e.detail)
  },
  handleGetPhoneNumber: function (e) {
    console.log(e.detail)
  },
  handleGetUserInfo: function (e) {
    console.log(e.detail)
  },
  handleOpenSetting: function (e) {
    console.log(e.detail.authSetting)
  }
}
for (var i = 0; i < types.length; ++i) {
  (function (type) {
    pageObject[type] = function () {
      const key = type + 'Size'
      const changedData = {}
      changedData[key] = this.data[key] == 'default' ? 'mini' : 'default'
      this.setData(changedData)
    }
  })(types[i]);
}
export default OnekitPage(ONEKIT_JSON, pageObject)
</script>
<style scoped src="@/app.css"/>
<style>
.onekit-button {
  margin-top: 15px;
  margin-bottom: 15px;
}
.button-sp-area {
  margin: 0 auto;
  width: 60%;
}
.mini-btn {
  margin-right: 5px;
}
</style>
