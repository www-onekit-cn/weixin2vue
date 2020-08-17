<script>
const PAGE_JSON = {
  navigationBarTitleText: "屏幕亮度",
  usingComponents: {},
};
</script>
<template>
  <page>
    <import src="../../../common/head.vue" />
    <import src="../../../common/foot.vue" />

    <onekit-view class="container">
      <onekit-view class="page-body">
        <onekit-view class="page-body-info">
          <onekit-view class="page-body-title">当前屏幕亮度</onekit-view>
          <onekit-text class="page-body-text-screen-brightness">{{screenBrightness}}</onekit-text>
        </onekit-view>
        <onekit-view class="page-section page-section-gap">
          <onekit-view class="page-section-title">设置屏幕亮度</onekit-view>
          <onekit-view class="body-view">
            <onekit-slider
              @change="changeBrightness"
              :value="screenBrightness"
              min="0"
              max="1"
              step="0.1"
            ></onekit-slider>
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
      title: "屏幕亮度",
      path: "packageAPI/pages/screen-brightness/screen-brightness",
    };
  },
  data: {
    screenBrightness: 0,
  },
  onLoad: function () {
    this._updateScreenBrightness();
  },
  changeBrightness: function (e) {
    const value = Number.parseFloat(e.detail.value.toFixed(1));
    this.setData({
      screenBrightness: Number.parseFloat(e.detail.value.toFixed(1)),
    });
    wx.setScreenBrightness({
      value: value,
    });
  },
  _updateScreenBrightness: function () {
    wx.getScreenBrightness({
      success: (res) => {
        console.log(res);
        this.setData({
          screenBrightness: Number.parseFloat(res.value.toFixed(1)),
        });
      },
      fail: function (err) {
        console.error(err);
      },
    });
  },
});
</script>
<style scoped src="@/app.css"/>
<style>
.page-body-text-screen-brightness {
  font-size: 40px;
  font-family: -apple-system-font, Helvetica Neue, Helvetica, sans-serif;
}

.page-section-gap {
  padding: 15px;
}
</style>
