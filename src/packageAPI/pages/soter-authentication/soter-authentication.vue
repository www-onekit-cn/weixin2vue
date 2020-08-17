<script>
const PAGE_JSON = {
  navigationBarTitleText: "生物认证",
  usingComponents: {},
};
</script>
<template>
  <page>
    <import src="../../../common/head.vue" />
    <import src="../../../common/foot.vue" />

    <onekit-view class="container">
      <onekit-view class="page-body">
        <onekit-view class="btn-area">
          <onekit-button type="primary" data-mode="fingerPrint" @tap="startAuth">指纹认证</onekit-button>
        </onekit-view>
        <onekit-view class="btn-area">
          <onekit-button type="primary" data-mode="facial" @tap="startAuth">人脸认证</onekit-button>
        </onekit-view>
      </onekit-view>
    </onekit-view>
  </page>
</template>
<script>
import OnekitPage from "../../../onekit/OnekitPage"
import wx from "../../../onekit/wx.js";
export default OnekitPage({
  onShareAppMessage: function () {
    return {
      title: "生物认证",
      path: "packageAPI/pages/soter-authentication/soter-authentication",
    };
  },
  startAuth: function (e) {
    console.log(e);
    const AUTH_MODE = e.currentTarget.dataset.mode;
    console.log(AUTH_MODE);
    const startSoterAuthentication = () => {
      wx.startSoterAuthentication({
        requestAuthModes: [AUTH_MODE],
        challenge: "test",
        authContent: "小程序示例",
        success: () => {
          wx.showToast({
            title: "认证成功",
          });
        },
        fail: (err) => {
          console.error(err);
          wx.showModal({
            title: "失败",
            content: "认证失败",
            showCancel: false,
          });
        },
      });
    };
    const checkIsEnrolled = () => {
      wx.checkIsSoterEnrolledInDevice({
        checkAuthMode: AUTH_MODE,
        success: (res) => {
          console.log(res);
          if (parseInt(res.isEnrolled, 10) <= 0) {
            wx.showModal({
              title: "错误",
              content: `您暂未录入${
                AUTH_MODE === "facial" ? "人脸" : "指纹"
              }信息，请录入后重试`,
              showCancel: false,
            });
            return;
          }
          startSoterAuthentication();
        },
        fail: (err) => {
          console.error(err);
        },
      });
    };
    const notSupported = () => {
      wx.showModal({
        title: "错误",
        content: `您的设备不支持${
          AUTH_MODE === "facial" ? "人脸" : "指纹"
        }识别`,
        showCancel: false,
      });
    };
    wx.checkIsSupportSoterAuthentication({
      success: (res) => {
        console.log(res);
        if (
          !res ||
          res.supportMode.length === 0 ||
          res.supportMode.indexOf(AUTH_MODE) < 0
        ) {
          notSupported();
          return;
        }
        checkIsEnrolled();
      },
      fail: (err) => {
        console.error(err);
        notSupported();
      },
    });
  },
});
</script>
<style scoped src="@/app.css"/>
<style>
</style>
