<script>
const PAGE_JSON = {
  navigationBarTitleText: "拍摄/选择视频",
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
                <onekit-view class="weui-label">视频来源</onekit-view>
              </onekit-view>
              <onekit-view class="weui-cell__bd">
                <onekit-picker
                  :range="sourceType"
                  @change="sourceTypeChange"
                  :value="sourceTypeIndex"
                >
                  <onekit-view class="weui-input">{{sourceType[sourceTypeIndex]}}</onekit-view>
                </onekit-picker>
              </onekit-view>
            </onekit-view>
            <onekit-view class="weui-cell weui-cell_input">
              <onekit-view class="weui-cell__hd">
                <onekit-view class="weui-label">摄像头</onekit-view>
              </onekit-view>
              <onekit-view class="weui-cell__bd">
                <onekit-picker :range="camera" @change="cameraChange" :value="cameraIndex">
                  <onekit-view class="weui-input">{{camera[cameraIndex]}}</onekit-view>
                </onekit-picker>
              </onekit-view>
            </onekit-view>
            <onekit-view class="weui-cell weui-cell_input">
              <onekit-view class="weui-cell__hd">
                <onekit-view class="weui-label">拍摄长度</onekit-view>
              </onekit-view>
              <onekit-view class="weui-cell__bd">
                <onekit-picker :range="duration" @change="durationChange" :value="durationIndex">
                  <onekit-view class="weui-input">{{duration[durationIndex]}}</onekit-view>
                </onekit-picker>
              </onekit-view>
            </onekit-view>
          </onekit-view>

          <onekit-view class="page-body-info">
            <onekit-block v-if="src === ''">
              <onekit-view class="image-plus image-plus-nb" @tap="chooseVideo">
                <onekit-view class="image-plus-horizontal"></onekit-view>
                <onekit-view class="image-plus-vertical"></onekit-view>
              </onekit-view>
              <onekit-view class="image-plus-text">添加视频</onekit-view>
            </onekit-block>
            <onekit-block v-if="src != ''">
              <onekit-video :src="src" class="video"></onekit-video>
            </onekit-block>
          </onekit-view>
        </onekit-view>
      </onekit-view>
    </onekit-view>
  </page>
</template>
<script>
import OnekitPage from "../../../onekit/OnekitPage"
import wx from "../../../onekit/wx.js";
const sourceType = [["camera"], ["album"], ["camera", "album"]];
const camera = [["front"], ["back"], ["front", "back"]];
const duration = Array.apply(null, {
  length: 60,
}).map(function (n, i) {
  return i + 1;
});
export default OnekitPage({
  onShareAppMessage: function () {
    return {
      title: "拍摄/选择视频",
      path: "packageAPI/pages/video/video",
    };
  },
  data: {
    sourceTypeIndex: 2,
    sourceType: ["拍摄", "相册", "拍摄或相册"],
    cameraIndex: 2,
    camera: ["前置", "后置", "前置或后置"],
    durationIndex: 59,
    duration: duration.map(function (t) {
      return t + "秒";
    }),
    src: "",
  },
  sourceTypeChange: function (e) {
    this.setData({
      sourceTypeIndex: e.detail.value,
    });
  },
  cameraChange: function (e) {
    this.setData({
      cameraIndex: e.detail.value,
    });
  },
  durationChange: function (e) {
    this.setData({
      durationIndex: e.detail.value,
    });
  },
  chooseVideo: function () {
    const that = this;
    wx.chooseVideo({
      sourceType: sourceType[this.data.sourceTypeIndex],
      camera: camera[this.data.cameraIndex],
      maxDuration: duration[this.data.durationIndex],
      success: function (res) {
        that.setData({
          src: res.tempFilePath,
        });
      },
    });
  },
});
</script>
<style scoped src="@/app.css"/>
<style>
@import "../../../common/lib/weui.css";

.page-body-info {
  display: flex;
  margin-top: 20px;
  padding: 0;
  height: 330px;
  border-top: 1px solid var(--weui-FG-3);
  border-bottom: 1px solid var(--weui-FG-3);
  align-items: center;
  justify-content: center;
}
</style>
