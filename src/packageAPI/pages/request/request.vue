<template>
  <onekit-page id='app'>
    <!--    <import src='../../../common/head.vue' />
    <import src='../../../common/foot.vue' />-->

    <onekit-view onekit-class="container">
      <onekit-template is="onekit-template-head"
                       :DATA='{"title":"request"}'></onekit-template>

      <onekit-view onekit-class="page-body">
        <onekit-view onekit-class="page-body-wording">
          <onekit-text onekit-class="page-body-text">
            点击向服务器发起请求
          </onekit-text>
        </onekit-view>
        <onekit-view onekit-class="btn-area">
          <onekit-button @Tap="makeRequest"
                         type="primary"
                         :disabled="buttonDisabled"
                         :loading="loading">request</onekit-button>
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
  "navigationBarTitleText": "网络请求",
  "usingComponents": {}
}
import OnekitPage from '../../../../weixin2vue/OnekitPage';
import wx from '../../../../weixin2vue/wx';
//let global = {};
const requestUrl = require('../../../config').requestUrl
const duration = 2000
export default OnekitPage(ONEKIT_JSON, {
  onShareAppMessage: function () {
    return {
      title: '网络请求',
      path: 'packageAPI/pages/request/request'
    }
  },
  makeRequest: function () {
    const self = this
    self.setData({
      loading: true
    })
    wx.request({
      url: requestUrl,
      data: {
        noncestr: Date.now()
      },
      success: function (result) {
        wx.showToast({
          title: '请求成功',
          icon: 'success',
          mask: true,
          duration
        })
        self.setData({
          loading: false
        })
        console.log('request success', result)
      },
      fail: function ({ errMsg }) {
        console.log('request fail', errMsg)
        self.setData({
          loading: false
        })
      }
    })
  }
})
</script>
<style scoped src="@/app.css"/>
<style>
</style>
