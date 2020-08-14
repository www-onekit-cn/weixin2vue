<script>
const PAGE_JSON = {
  navigationBarTitleText: "live-player",
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
          <onekit-live-player
            id="player"
            :src=" videoSrc "
            mode="RTC"
            autoplay
            @statechange="handleLivePlayerStateChange"
            @error="handleLivePlayerError"
          ></onekit-live-player>
        </onekit-view>

        <onekit-view class="page-section">
          <onekit-view class="page-url">视频地址 (支持flv, rtmp):</onekit-view>
          <onekit-input
            class="input"
            name="input"
            placeholder="视频播放链接"
            :value=" videoSrc "
            @input="handleVideoSrcInput"
          ></onekit-input>
          <onekit-button type="primary" @tap="handleScanQRCode">扫码</onekit-button>
        </onekit-view>
        <onekit-view class="page-section">
          <onekit-button @tap="handlePlay" class="page-body-button" type="primary">播放</onekit-button>
          <onekit-button @tap="handlePause" class="page-body-button" type="primary">暂停</onekit-button>
          <onekit-button @tap="handleStop" class="page-body-button" type="primary">停止</onekit-button>
          <onekit-button @tap="handleResume" class="page-body-button" type="primary">恢复</onekit-button>
          <onekit-button @tap="handleMute" class="page-body-button" type="primary">静音</onekit-button>
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
} from "../../../../onekit/onekit.js";
import wx from "../../../../onekit/wx.js";
export default OnekitPage({
  onShareAppMessage: function () {
    return {
      title: "live-player",
      path: "page/component/pages/live-player/live-player",
    };
  },
  data: {
    videoSrc: "",
  },
  onReady: function (res) {
    this.ctx = wx.createLivePlayerContext("player");
  },
  handleScanQRCode: function () {
    wx.scanCode({
      complete: (res) => {
        const { result } = res;
        this.setData({
          videoSrc: result,
        });
      },
    });
  },
  handleLivePlayerStateChange: function (e) {
    console.log("live-player code:", e.detail.code);
  },
  handleLivePlayerError: function (e) {
    console.error("live-player error:", e.detail.errMsg);
  },
  handlePlay: function () {
    this.ctx.play({
      success: (res) => {
        console.log("play success");
      },
      fail: (res) => {
        console.log("play fail");
      },
    });
  },
  handlePause: function () {
    this.ctx.pause({
      success: (res) => {
        console.log("pause success");
      },
      fail: (res) => {
        console.log("pause fail");
      },
    });
  },
  handleStop: function () {
    this.ctx.stop({
      success: (res) => {
        console.log("stop success");
      },
      fail: (res) => {
        console.log("stop fail");
      },
    });
  },
  handleResume: function () {
    this.ctx.resume({
      success: (res) => {
        console.log("resume success");
      },
      fail: (res) => {
        console.log("resume fail");
      },
    });
  },
  handleMute: function () {
    this.ctx.mute({
      success: (res) => {
        console.log("mute success");
      },
      fail: (res) => {
        console.log("mute fail");
      },
    });
  },
  handleVideoSrcInput: function (e) {
    this.setData({
      videoSrc: e.detail.value,
    });
  },
});
</script>
<style scoped src="@/app.css"/>
<style>
live-player {
  display: flex;
  width: 100%;
  height: 325px;
}

.page-body-button {
  margin-bottom: 15px;
}

.page-url {
  margin: 0 auto 15px;
  width: 90%;
}

input {
  width: 90%;
  margin: 0 auto 15px;
}
</style>
