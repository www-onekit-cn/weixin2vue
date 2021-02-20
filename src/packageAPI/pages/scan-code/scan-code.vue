<template>
  <onekit-page id='app'>
    <import src='../../../common/head.vue' />
    <import src='../../../common/foot.vue' />

    <onekit-view onekit-class="container">
      <onekit-template is="onekit-template-head"
                       DATA='{"title":"scanCode"}'></onekit-template>

      <onekit-view onekit-class="page-body">
        <onekit-view onekit-class="weui-cells__title">扫码结果</onekit-view>
        <onekit-view onekit-class="weui-cells weui-cells_after-title">
          <onekit-view onekit-class="weui-cell">
            <onekit-view onekit-class="weui-cell__bd">{{result}}</onekit-view>
          </onekit-view>
        </onekit-view>
        <onekit-view onekit-class="btn-area">
          <onekit-button type="primary"
                         @Tap="scanCode">扫一扫</onekit-button>
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
  "navigationBarTitleText": "扫码",
  "usingComponents": {}
}
import { OnekitPage } from 'weixin2vue';
import { wx } from 'weixin2vue';
//let global = {};
export default OnekitPage(ONEKIT_JSON, {
  onShareAppMessage: function () {
    return {
      title: '扫码',
      path: 'packageAPI/pages/scan-code/scan-code'
    }
  },
  data: {
    result: ''
  },
  scanCode: function () {
    const that = this
    wx.scanCode({
      success: function (res) {
        that.setData({
          result: res.result
        })
      },
      fail: function () {
      }
    })
  }
})
</script>
<style scoped src="@/app.css"/>
<style>
@import "../../../common/lib/weui.css";
.weui-cell__bd {
  min-height: 24px;
  word-break: break-all;
}
</style>
