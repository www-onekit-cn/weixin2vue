<script>
const PAGE_JSON = {
  navigationBarTitleText: "振动",
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
          <onekit-view class="btn-area">
            <onekit-button type="primary" @tap="vibrateLong">长振动</onekit-button>
            <onekit-button type="default" @tap="vibrateShort">短振动</onekit-button>
          </onekit-view>
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
      title: "振动",
      path: "packageAPI/pages/vibrate/vibrate",
    };
  },
  vibrateShort: function () {
    wx.vibrateShort({
      success: function (res) {
        console.log(res);
      },
      fail: function (err) {
        console.error(err);
      },
      complete: function () {
        console.log("completed");
      },
    });
  },
  vibrateLong: function () {
    wx.vibrateLong({
      success: function (res) {
        console.log(res);
      },
      fail: function (err) {
        console.error(err);
      },
      complete: function () {
        console.log("completed");
      },
    });
  },
});
</script>
<style scoped src="@/app.css"/>
<style>
</style>
