<template>
  <onekit-page id='app'>
    <onekit-view>
      <onekit-audio :src="src"
                    onekit-id="myAudio"></onekit-audio>

      <onekit-button type="primary"
                     @Tap="audioPlay">播放</onekit-button>
      <onekit-button type="primary"
                     @Tap="audioPause">暂停</onekit-button>
      <onekit-button type="primary"
                     @Tap="audio14">设置当前播放时间为14秒</onekit-button>
      <onekit-button type="primary"
                     @Tap="audioStart">回到开头</onekit-button>
    </onekit-view>
  </onekit-page>
</template>
<script>
const ONEKIT_JSON = {
  "navigationBarTitleText": "音频",
  "usingComponents": {}
}
import { OnekitPage } from 'weixin2vue';
import { wx } from 'weixin2vue';
//let global = {};
export default OnekitPage(ONEKIT_JSON, {
  onShareAppMessage: function () {
    return {
      title: 'Audio',
      path: 'packageAPI/pages/audio/audio'
    }
  },
  onReady: function (e) {
    this.audioCtx = wx.createAudioContext('myAudio')
    this.audioCtx.setSrc('https://dldir1.qq.com/music/release/upload/t_mm_file_publish/2339610.m4a')
    this.audioCtx.play()
  },
  data: {
    src: ''
  },
  audioPlay: function () {
    this.audioCtx.play()
  },
  audioPause: function () {
    this.audioCtx.pause()
  },
  audio14: function () {
    this.audioCtx.seek(14)
  },
  audioStart: function () {
    this.audioCtx.seek(0)
  }
})
</script>
<style scoped src="@/app.css"/>
<style>
</style>
