<script>
const PAGE_JSON = {
  navigationBarTitleText: "camera",
  usingComponents: {},
};
</script>
<template>
  <page>
    <import src="../../../common/head.vue" />
    <import src="../../../common/foot.vue" />

    <onekit-view class="container">
      <onekit-view class="page-body">
        <onekit-view class="page-body-wrapper">
          <onekit-camera mode="scanCode" flash="off" @scancode="scanCode" @error="error"></onekit-camera>
          <onekit-view class="btn-area">
            <onekit-button type="primary" @tap="navigateBack">返回正常模式</onekit-button>
          </onekit-view>
          <onekit-form>
            <onekit-view class="page-section">
              <onekit-view class="weui-cells weui-cells_after-title">
                <onekit-view class="weui-cell weui-cell_input">
                  <onekit-view class="weui-cell__hd">
                    <onekit-view class="weui-label">类型</onekit-view>
                  </onekit-view>
                  <onekit-view class="weui-cell__bd">{{ result.type }}</onekit-view>
                </onekit-view>
                <onekit-view class="weui-cell weui-cell_input">
                  <onekit-view class="weui-cell__hd">
                    <onekit-view class="weui-label">结果</onekit-view>
                  </onekit-view>
                  <onekit-view class="weui-cell__bd">{{ result.result }}</onekit-view>
                </onekit-view>
              </onekit-view>
            </onekit-view>
          </onekit-form>
        </onekit-view>
      </onekit-view>
    </onekit-view>
  </page>
</template>
<script>
import OnekitPage from "../../../../onekit/OnekitPage.js"
import wx from "../../../../onekit/wx.js";
export default OnekitPage({
  onShareAppMessage: function () {
    return {
      title: "camera",
      path: "page/component/pages/camera-scan-code/camera-scan-code",
    };
  },
  data: {
    result: {},
  },
  onReady: function () {
    wx.showModal({
      title: "提示",
      content: "将摄像头对准一维码即可扫描",
      showCancel: false,
    });
  },
  scanCode: function (e) {
    console.log("scanCode:", e);
    this.setData({
      result: e.detail,
    });
  },
  navigateBack: function () {
    wx.navigateBack();
  },
  error: function (e) {
    console.log(e.detail);
  },
});
</script>
<style scoped src="@/app.css"/>
<style>
@import "../../../common/lib/weui.css";

camera {
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
