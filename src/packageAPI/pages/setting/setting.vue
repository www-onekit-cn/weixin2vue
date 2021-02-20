<template>
  <onekit-page id='app'>
    <!--    <import src='../../../common/head.vue' />
    <import src='../../../common/foot.vue' />-->

    <onekit-view onekit-class="container">
      <onekit-template is="onekit-template-head"
                       DATA='{"title":"open/get/Setting"}'></onekit-template>

      <onekit-view onekit-class="page-body">
        <onekit-form>
          <onekit-view onekit-class="page-section">
            <onekit-view onekit-class="weui-cells weui-cells_after-title">
              <onekit-view onekit-class="weui-cell weui-cell_input">
                <onekit-view onekit-class="weui-cell__hd">
                  <onekit-view onekit-class="weui-label">用户信息</onekit-view>
                </onekit-view>
                <onekit-view onekit-class="weui-cell__bd">
                  <onekit-icon v-if="setting['scope.userInfo']"
                               onekit-class="icon-small"
                               type="success_no_circle"
                               size="23"></onekit-icon>
                </onekit-view>
              </onekit-view>

              <onekit-view onekit-class="weui-cell weui-cell_input">
                <onekit-view onekit-class="weui-cell__hd">
                  <onekit-view onekit-class="weui-label">地理位置</onekit-view>
                </onekit-view>
                <onekit-view onekit-class="weui-cell__bd">
                  <onekit-icon v-if="setting['scope.userLocation']"
                               onekit-class="icon-small"
                               type="success_no_circle"
                               size="23"></onekit-icon>
                </onekit-view>
              </onekit-view>

              <onekit-view onekit-class="weui-cell weui-cell_input region">
                <onekit-view onekit-class="weui-cell__hd">
                  <onekit-view onekit-class="weui-label">通讯地址</onekit-view>
                </onekit-view>
                <onekit-view onekit-class="weui-cell__bd">
                  <onekit-icon v-if="setting['scope.address']"
                               onekit-class="icon-small"
                               type="success_no_circle"
                               size="23"></onekit-icon>
                </onekit-view>
              </onekit-view>

              <onekit-view onekit-class="weui-cell weui-cell_input detail">
                <onekit-view onekit-class="weui-cell__hd">
                  <onekit-view onekit-class="weui-label">发票抬头</onekit-view>
                </onekit-view>
                <onekit-view onekit-class="weui-cell__bd">
                  <onekit-icon v-if="setting['scope.invoiceTitle']"
                               onekit-class="icon-small"
                               type="success_no_circle"
                               size="23"></onekit-icon>
                </onekit-view>
              </onekit-view>

              <onekit-view onekit-class="weui-cell weui-cell_input">
                <onekit-view onekit-class="weui-cell__hd">
                  <onekit-view onekit-class="weui-label">微信运动步数</onekit-view>
                </onekit-view>
                <onekit-view onekit-class="weui-cell__bd">
                  <onekit-icon v-if="setting['scope.werun']"
                               onekit-class="icon-small"
                               type="success_no_circle"
                               size="23"></onekit-icon>
                </onekit-view>
              </onekit-view>

              <onekit-view onekit-class="weui-cell weui-cell_input">
                <onekit-view onekit-class="weui-cell__hd">
                  <onekit-view onekit-class="weui-label">录音功能</onekit-view>
                </onekit-view>
                <onekit-view onekit-class="weui-cell__bd">
                  <onekit-icon v-if="setting['scope.record']"
                               onekit-class="icon-small"
                               type="success_no_circle"
                               size="23"></onekit-icon>
                </onekit-view>
              </onekit-view>

              <onekit-view onekit-class="weui-cell weui-cell_input">
                <onekit-view onekit-class="weui-cell__hd">
                  <onekit-view onekit-class="weui-label">保存到相册</onekit-view>
                </onekit-view>
                <onekit-view onekit-class="weui-cell__bd">
                  <onekit-icon v-if="setting['scope.writePhotosAlbum']"
                               onekit-class="icon-small"
                               type="success_no_circle"
                               size="23"></onekit-icon>
                </onekit-view>
              </onekit-view>

              <onekit-view onekit-class="weui-cell weui-cell_input">
                <onekit-view onekit-class="weui-cell__hd">
                  <onekit-view onekit-class="weui-label">摄像头</onekit-view>
                </onekit-view>
                <onekit-view onekit-class="weui-cell__bd">
                  <onekit-icon v-if="setting['scope.camera']"
                               onekit-class="icon-small"
                               type="success_no_circle"
                               size="23"></onekit-icon>
                </onekit-view>
              </onekit-view>

            </onekit-view>
          </onekit-view>
        </onekit-form>

        <onekit-view onekit-class="btn-area">
          <onekit-button type="primary"
                         @Tap="getSetting">获取小程序设置</onekit-button>
          <onekit-button open-type="openSetting"
                         type="default">打开小程序设置</onekit-button>
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
  "navigationBarTitleText": "设置",
  "usingComponents": {}
}
import OnekitPage from '../../../../weixin2vue/OnekitPage';
import wx from '../../../../weixin2vue/wx';
//let global = {};
export default OnekitPage(ONEKIT_JSON, {
  onShareAppMessage: function () {
    return {
      title: '设置',
      path: 'packageAPI/pages/setting/setting'
    }
  },
  data: {
    setting: {}
  },
  getSetting: function () {
    wx.getSetting({
      success: (res) => {
        console.log(res)
        this.setData({
          setting: res.authSetting
        })
      }
    })
  }
})
</script>
<style scoped src="@/app.css"/>
<style>
@import "../../../common/lib/weui.css";
form {
  margin-top: 15px;
}
.weui-cell__bd {
  display: flex;
  justify-content: center;
  padding: 10px 0;
  min-height: 30px;
}
</style>
