<script>
const PAGE_JSON = {
  navigationBarTitleText: "设置",
  usingComponents: {},
};
</script>
<template>
  <page>
    <import src="../../../common/head.vue" />
    <import src="../../../common/foot.vue" />

    <onekit-view class="container">
      <onekit-view class="page-body">
        <onekit-form>
          <onekit-view class="page-section">
            <onekit-view class="weui-cells weui-cells_after-title">
              <onekit-view class="weui-cell weui-cell_input">
                <onekit-view class="weui-cell__hd">
                  <onekit-view class="weui-label">用户信息</onekit-view>
                </onekit-view>
                <onekit-view class="weui-cell__bd">
                  <onekit-icon
                    v-if="setting['scope.userInfo']"
                    class="icon-small"
                    type="success_no_circle"
                    size="23"
                  ></onekit-icon>
                </onekit-view>
              </onekit-view>

              <onekit-view class="weui-cell weui-cell_input">
                <onekit-view class="weui-cell__hd">
                  <onekit-view class="weui-label">地理位置</onekit-view>
                </onekit-view>
                <onekit-view class="weui-cell__bd">
                  <onekit-icon
                    v-if="setting['scope.userLocation']"
                    class="icon-small"
                    type="success_no_circle"
                    size="23"
                  ></onekit-icon>
                </onekit-view>
              </onekit-view>

              <onekit-view class="weui-cell weui-cell_input region">
                <onekit-view class="weui-cell__hd">
                  <onekit-view class="weui-label">通讯地址</onekit-view>
                </onekit-view>
                <onekit-view class="weui-cell__bd">
                  <onekit-icon
                    v-if="setting['scope.address']"
                    class="icon-small"
                    type="success_no_circle"
                    size="23"
                  ></onekit-icon>
                </onekit-view>
              </onekit-view>

              <onekit-view class="weui-cell weui-cell_input detail">
                <onekit-view class="weui-cell__hd">
                  <onekit-view class="weui-label">发票抬头</onekit-view>
                </onekit-view>
                <onekit-view class="weui-cell__bd">
                  <onekit-icon
                    v-if="setting['scope.invoiceTitle']"
                    class="icon-small"
                    type="success_no_circle"
                    size="23"
                  ></onekit-icon>
                </onekit-view>
              </onekit-view>

              <onekit-view class="weui-cell weui-cell_input">
                <onekit-view class="weui-cell__hd">
                  <onekit-view class="weui-label">微信运动步数</onekit-view>
                </onekit-view>
                <onekit-view class="weui-cell__bd">
                  <onekit-icon
                    v-if="setting['scope.werun']"
                    class="icon-small"
                    type="success_no_circle"
                    size="23"
                  ></onekit-icon>
                </onekit-view>
              </onekit-view>

              <onekit-view class="weui-cell weui-cell_input">
                <onekit-view class="weui-cell__hd">
                  <onekit-view class="weui-label">录音功能</onekit-view>
                </onekit-view>
                <onekit-view class="weui-cell__bd">
                  <onekit-icon
                    v-if="setting['scope.record']"
                    class="icon-small"
                    type="success_no_circle"
                    size="23"
                  ></onekit-icon>
                </onekit-view>
              </onekit-view>

              <onekit-view class="weui-cell weui-cell_input">
                <onekit-view class="weui-cell__hd">
                  <onekit-view class="weui-label">保存到相册</onekit-view>
                </onekit-view>
                <onekit-view class="weui-cell__bd">
                  <onekit-icon
                    v-if="setting['scope.writePhotosAlbum']"
                    class="icon-small"
                    type="success_no_circle"
                    size="23"
                  ></onekit-icon>
                </onekit-view>
              </onekit-view>

              <onekit-view class="weui-cell weui-cell_input">
                <onekit-view class="weui-cell__hd">
                  <onekit-view class="weui-label">摄像头</onekit-view>
                </onekit-view>
                <onekit-view class="weui-cell__bd">
                  <onekit-icon
                    v-if="setting['scope.camera']"
                    class="icon-small"
                    type="success_no_circle"
                    size="23"
                  ></onekit-icon>
                </onekit-view>
              </onekit-view>
            </onekit-view>
          </onekit-view>
        </onekit-form>

        <onekit-view class="btn-area">
          <onekit-button type="primary" @tap="getSetting">获取小程序设置</onekit-button>
          <onekit-button open-type="openSetting" type="default">打开小程序设置</onekit-button>
        </onekit-view>
      </onekit-view>
    </onekit-view>
  </page>
</template>
<script>
import {
  OnekitApp,
  OnekitPage,
  OnekitComponent,
} from "../../../onekit/onekit.js";
import wx from "../../../onekit/wx.js";
export default OnekitPage({
  onShareAppMessage: function () {
    return {
      title: "设置",
      path: "packageAPI/pages/setting/setting",
    };
  },
  data: {
    setting: {},
  },
  getSetting: function () {
    wx.getSetting({
      success: (res) => {
        console.log(res);
        this.setData({
          setting: res.authSetting,
        });
      },
    });
  },
});
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
