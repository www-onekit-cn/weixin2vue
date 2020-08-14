<script>
const PAGE_JSON = {
  navigationBarTitleText: "获取手机系统信息",
  usingComponents: {},
};
</script>
<template>
  <page>
    <import src="../../../common/head.vue" />
    <import src="../../../common/foot.vue" />

    <onekit-view class="container">
      <onekit-view class="page-body">
        <onekit-view class="page-section">
          <onekit-view class="weui-cells weui-cells_after-title">
            <onekit-view class="weui-cell weui-cell_input">
              <onekit-view class="weui-cell__hd">
                <onekit-view class="weui-label">手机品牌</onekit-view>
              </onekit-view>
              <onekit-view class="weui-cell__bd">
                <onekit-input
                  class="weui-input"
                  type="text"
                  :disabled="true"
                  placeholder="未获取"
                  :value="systemInfo.brand"
                ></onekit-input>
              </onekit-view>
            </onekit-view>
            <onekit-view class="weui-cell weui-cell_input">
              <onekit-view class="weui-cell__hd">
                <onekit-view class="weui-label">手机型号</onekit-view>
              </onekit-view>
              <onekit-view class="weui-cell__bd">
                <onekit-input
                  class="weui-input"
                  type="text"
                  :disabled="true"
                  placeholder="未获取"
                  :value="systemInfo.model"
                ></onekit-input>
              </onekit-view>
            </onekit-view>
            <onekit-view class="weui-cell weui-cell_input">
              <onekit-view class="weui-cell__hd">
                <onekit-view class="weui-label">微信语言</onekit-view>
              </onekit-view>
              <onekit-view class="weui-cell__bd">
                <onekit-input
                  class="weui-input"
                  type="text"
                  :disabled="true"
                  placeholder="未获取"
                  :value="systemInfo.language"
                ></onekit-input>
              </onekit-view>
            </onekit-view>
            <onekit-view class="weui-cell weui-cell_input">
              <onekit-view class="weui-cell__hd">
                <onekit-view class="weui-label">微信版本</onekit-view>
              </onekit-view>
              <onekit-view class="weui-cell__bd">
                <onekit-input
                  class="weui-input"
                  type="text"
                  :disabled="true"
                  placeholder="未获取"
                  :value="systemInfo.version"
                ></onekit-input>
              </onekit-view>
            </onekit-view>
            <onekit-view class="weui-cell weui-cell_input">
              <onekit-view class="weui-cell__hd">
                <onekit-view class="weui-label">屏幕宽度</onekit-view>
              </onekit-view>
              <onekit-view class="weui-cell__bd">
                <onekit-input
                  class="weui-input"
                  type="text"
                  :disabled="true"
                  placeholder="未获取"
                  :value="systemInfo.windowWidth"
                ></onekit-input>
              </onekit-view>
            </onekit-view>
            <onekit-view class="weui-cell weui-cell_input">
              <onekit-view class="weui-cell__hd">
                <onekit-view class="weui-label">屏幕高度</onekit-view>
              </onekit-view>
              <onekit-view class="weui-cell__bd">
                <onekit-input
                  class="weui-input"
                  type="text"
                  :disabled="true"
                  placeholder="未获取"
                  :value="systemInfo.windowHeight"
                ></onekit-input>
              </onekit-view>
            </onekit-view>
            <onekit-view class="weui-cell weui-cell_input">
              <onekit-view class="weui-cell__hd">
                <onekit-view class="weui-label">DPR</onekit-view>
              </onekit-view>
              <onekit-view class="weui-cell__bd">
                <onekit-input
                  class="weui-input"
                  type="text"
                  :disabled="true"
                  placeholder="未获取"
                  :value="systemInfo.pixelRatio"
                ></onekit-input>
              </onekit-view>
            </onekit-view>
          </onekit-view>
          <onekit-view class="btn-area">
            <onekit-button type="primary" @tap="getSystemInfo">获取手机系统信息</onekit-button>
          </onekit-view>
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
      title: "获取手机系统信息",
      path: "packageAPI/pages/get-system-info/get-system-info",
    };
  },
  data: {
    systemInfo: {},
  },
  getSystemInfo: function () {
    const that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          systemInfo: res,
        });
      },
    });
  },
});
</script>
<style scoped src="@/app.css"/>
<style>
@import "../../../common/lib/weui.css";
</style>
