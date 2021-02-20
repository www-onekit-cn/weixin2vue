<template>
  <onekit-page id='app'>
    <!--    <import src='../../../common/head.vue' />
    <import src='../../../common/foot.vue' />-->

    <onekit-view onekit-class="container">
      <onekit-template is="onekit-template-head"
                       :DATA='{"title":"getUserInfo"}'></onekit-template>

      <onekit-view onekit-class="page-body">
        <onekit-view onekit-class="page-section">
          <onekit-view onekit-class="page-body-info">
            <onekit-view onekit-class="page-body-title">用户信息</onekit-view>
            <template v-if="hasUserInfo === false">
              <onekit-text onekit-class="page-body-text">未获取</onekit-text>
              <onekit-text onekit-class="page-body-text">点击绿色按钮可获取用户头像及昵称</onekit-text>
            </template>
            <template v-if="hasUserInfo === true">
              <onekit-image onekit-class="userinfo-avatar"
                            :src="userInfo.avatarUrl"></onekit-image>
              <onekit-text onekit-class="userinfo-nickname">{{userInfo.nickName}}</onekit-text>
            </template>
          </onekit-view>
          <onekit-view onekit-class="btn-area">
            <onekit-button type="primary"
                           open-type="getUserInfo"
                           @Getuserinfo="getUserInfo">获取用户信息</onekit-button>
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
  "navigationBarTitleText": "获取用户信息",
  "usingComponents": {}
}
import OnekitPage from '../../../../weixin2vue/OnekitPage';
//import wx from '../../../../weixin2vue/wx';
//let global = {};
export default OnekitPage(ONEKIT_JSON, {
  onShareAppMessage: function () {
    return {
      title: '获取用户信息',
      path: 'packageAPI/pages/get-user-info/get-user-info'
    }
  },
  data: {
    hasUserInfo: false
  },
  getUserInfo: function (info) {
    const userInfo = info.detail.userInfo
    this.setData({
      userInfo,
      hasUserInfo: true
    })
  },
  clear: function () {
    this.setData({
      hasUserInfo: false,
      userInfo: {}
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
.userinfo-avatar {
  border-radius: 114px;
  width: 114px;
  height: 114px;
}
.userinfo-nickname {
  margin-top: 10px;
  font-size: 19px;
}
</style>
