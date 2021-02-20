<template>
  <onekit-page id='app'>
    <import src='../../../common/head.vue' />
    <import src='../../../common/foot.vue' />

    <onekit-view onekit-class="container">
      <onekit-template is="onekit-template-head"
                       DATA='{"title":"live-player"}'></onekit-template>

      <onekit-view onekit-class="page-body">

        <onekit-view onekit-class="page-section">
          <onekit-live-player onekit-id="player"
                              :src=" videoSrc "
                              mode="RTC"
                              autoplay
                              @Statechange="handleLivePlayerStateChange"
                              @Error="handleLivePlayerError"></onekit-live-player>
        </onekit-view>

        <onekit-view onekit-class="page-section">
          <onekit-view onekit-class="page-url">视频地址 (支持flv, rtmp):</onekit-view>
          <onekit-input onekit-class="input"
                        name="input"
                        placeholder="视频播放链接"
                        :value=" videoSrc "
                        @Input="handleVideoSrcInput"></onekit-input>
          <onekit-button type="primary"
                         @Tap="handleScanQRCode">
            扫码
          </onekit-button>
        </onekit-view>
        <onekit-view onekit-class="page-section">
          <onekit-button @Tap="handlePlay"
                         onekit-class="page-body-button"
                         type="primary">播放</onekit-button>
          <onekit-button @Tap="handlePause"
                         onekit-class="page-body-button"
                         type="primary">暂停</onekit-button>
          <onekit-button @Tap="handleStop"
                         onekit-class="page-body-button"
                         type="primary">停止</onekit-button>
          <onekit-button @Tap="handleResume"
                         onekit-class="page-body-button"
                         type="primary">恢复</onekit-button>
          <onekit-button @Tap="handleMute"
                         onekit-class="page-body-button"
                         type="primary">静音</onekit-button>
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
  "navigationBarTitleText": "live-player",
  "usingComponents": {}
}
import OnekitPage from '../../../../../weixin2vue/OnekitPage';
import wx from '../../../../../weixin2vue/wx';
//let //let global = {};
export default OnekitPage(ONEKIT_JSON, {
  onShareAppMessage: function () {
    return {
      title: 'live-player',
      path: 'page/component/pages/live-player/live-player'
    }
  },
  data: {
    videoSrc: ""
  },
  onReady: function () {
    this.ctx = wx.createLivePlayerContext('player')
  },
  handleScanQRCode: function () {
    wx.scanCode({
      complete: (res) => {
        const { result } = res
        this.setData({
          videoSrc: result
        })
      }
    })
  },
  handleLivePlayerStateChange: function (e) {
    console.log('live-player code:', e.detail.code)
  },
  handleLivePlayerError: function (e) {
    console.error('live-player error:', e.detail.errMsg)
  },
  handlePlay: function () {
    this.ctx.play({
      success: () => { console.log('play success') },
      fail: () => { console.log('play fail') }
    })
  },
  handlePause: function () {
    this.ctx.pause({
      success: () => { console.log('pause success') },
      fail: () => { console.log('pause fail') }
    })
  },
  handleStop: function () {
    this.ctx.stop({
      success: () => { console.log('stop success') },
      fail: () => { console.log('stop fail') }
    })
  },
  handleResume: function () {
    this.ctx.resume({
      success: () => { console.log('resume success') },
      fail: () => { console.log('resume fail') }
    })
  },
  handleMute: function () {
    this.ctx.mute({
      success: () => { console.log('mute success') },
      fail: () => { console.log('mute fail') }
    })
  },
  handleVideoSrcInput: function (e) {
    this.setData({
      videoSrc: e.detail.value
    })
  }
})
</script>
<style scoped src="@/app.css"/>
<style>
.onekit-live-player {
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
.onekit-input {
  width: 90%;
  margin: 0 auto 15px;
}
</style>
