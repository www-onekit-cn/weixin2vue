<template>
  <onekit-page id='app'>
    <!--    <import src='../../../common/head.vue' />
    <import src='../../../common/foot.vue' />-->

    <onekit-view onekit-class="container">
      <onekit-template is="onekit-template-head"
                       DATA='{"title":"startSoterAuthentication"}'></onekit-template>

      <onekit-view onekit-class="page-body">
        <onekit-view onekit-class="btn-area">
          <onekit-button type="primary"
                         data-mode="fingerPrint"
                         @Tap="startAuth">指纹认证</onekit-button>
        </onekit-view>
        <onekit-view onekit-class="btn-area">
          <onekit-button type="primary"
                         data-mode="facial"
                         @Tap="startAuth">人脸认证</onekit-button>
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
  "navigationBarTitleText": "生物认证",
  "usingComponents": {}
}
import OnekitPage from '../../../../weixin2vue/OnekitPage';
import wx from '../../../../weixin2vue/wx';
//let global = {};
export default OnekitPage(ONEKIT_JSON, {
  onShareAppMessage: function () {
    return {
      title: '生物认证',
      path: 'packageAPI/pages/soter-authentication/soter-authentication'
    }
  },
  startAuth: function (e) {
    console.log(e)
    const AUTH_MODE = e.currentTarget.dataset.mode
    console.log(AUTH_MODE)
    const startSoterAuthentication = () => {
      wx.startSoterAuthentication({
        requestAuthModes: [
          AUTH_MODE
        ],
        challenge: 'test',
        authContent: '小程序示例',
        success: () => {
          wx.showToast({
            title: '认证成功'
          })
        },
        fail: (err) => {
          console.error(err)
          wx.showModal({
            title: '失败',
            content: '认证失败',
            showCancel: false
          })
        }
      })
    }
    const checkIsEnrolled = () => {
      wx.checkIsSoterEnrolledInDevice({
        checkAuthMode: AUTH_MODE,
        success: (res) => {
          console.log(res)
          if (parseInt(res.isEnrolled, 10) <= 0) {
            wx.showModal({
              title: '错误',
              content: `您暂未录入${AUTH_MODE == 'facial' ? '人脸' : '指纹'}信息，请录入后重试`,
              showCancel: false
            });
            return;
          }
          startSoterAuthentication()
        },
        fail: (err) => { console.error(err) }
      })
    }
    const notSupported = () => {
      wx.showModal({
        title: '错误',
        content: `您的设备不支持${AUTH_MODE == 'facial' ? '人脸' : '指纹'}识别`,
        showCancel: false
      })
    }
    wx.checkIsSupportSoterAuthentication({
      success: (res) => {
        console.log(res)
        if ((((!res || (res.supportMode.length == 0))) || (res.supportMode.indexOf(AUTH_MODE) < 0))) {
          notSupported();
          return;
        }
        checkIsEnrolled()
      },
      fail: (err) => {
        console.error(err)
        notSupported()
      }
    })
  }
})
</script>
<style scoped src="@/app.css"/>
<style>
</style>
