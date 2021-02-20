<template>
  <onekit-page id='app'>
    <import src='../../../common/head.vue' />
    <import src='../../../common/foot.vue' />

    <onekit-view onekit-class="container">
      <onekit-template is="onekit-template-head"
                       DATA='{"title":"camera"}'></onekit-template>

      <onekit-view onekit-class="page-body">
        <onekit-view onekit-class="page-body-wrapper">
          <onekit-camera mode="scanCode"
                         flash="off"
                         @Scancode="scanCode"
                         @Error="error">
          </onekit-camera>
          <onekit-view onekit-class="btn-area">
            <onekit-button type="primary"
                           @Tap="navigateBack">
              返回正常模式
            </onekit-button>
          </onekit-view>
          <onekit-form>
            <onekit-view onekit-class="page-section">
              <onekit-view onekit-class="weui-cells weui-cells_after-title">
                <onekit-view onekit-class="weui-cell weui-cell_input">
                  <onekit-view onekit-class="weui-cell__hd">
                    <onekit-view onekit-class="weui-label">类型</onekit-view>
                  </onekit-view>
                  <onekit-view onekit-class="weui-cell__bd">
                    {{ result.type }}
                  </onekit-view>
                </onekit-view>
                <onekit-view onekit-class="weui-cell weui-cell_input">
                  <onekit-view onekit-class="weui-cell__hd">
                    <onekit-view onekit-class="weui-label">结果</onekit-view>
                  </onekit-view>
                  <onekit-view onekit-class="weui-cell__bd">
                    {{ result.result }}
                  </onekit-view>
                </onekit-view>
              </onekit-view>
            </onekit-view>
          </onekit-form>
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
  "navigationBarTitleText": "camera",
  "usingComponents": {}
}
import { OnekitPage } from 'weixin2vue';
import { wx } from 'weixin2vue';
//let global = {};
export default OnekitPage(ONEKIT_JSON, {
  onShareAppMessage: function () {
    return {
      title: 'camera',
      path: 'page/component/pages/camera-scan-code/camera-scan-code'
    }
  },
  data: {
    result: {}
  },
  onReady: function () {
    wx.showModal({
      title: '提示',
      content: '将摄像头对准一维码即可扫描',
      showCancel: false
    })
  },
  scanCode: function (e) {
    console.log('scanCode:', e)
    this.setData({
      result: e.detail
    })
  },
  navigateBack: function () {
    wx.navigateBack()
  },
  error: function (e) {
    console.log(e.detail)
  }
})
</script>
<style scoped src="@/app.css"/>
<style>
@import "../../../common/lib/weui.css";
.onekit-camera {
  height: 250px;
}
.btn-area {
  margin-top: 0;
}
form {
  margin-top: 15px;
}
.weui-cell__bd {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 10px 0;
  min-height: 30px;
}
</style>
