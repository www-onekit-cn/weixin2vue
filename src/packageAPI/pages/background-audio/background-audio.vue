<template>
  <onekit-page id='app'>
    <import src='../../../common/head.vue' />
    <import src='../../../common/foot.vue' />

    <onekit-view onekit-class="container">
      <onekit-template is="onekit-template-head"
                       DATA='{"title":"backgroundAudio"}'></onekit-template>

      <onekit-view onekit-class="page-section">
        <onekit-view onekit-class="page-body-info">
          <onekit-text onekit-class="time-big">{{formatedPlayTime}}</onekit-text>
          <onekit-slider onekit-class="slider"
                         min="0"
                         max="269"
                         step="1"
                         :value="playTime"
                         @Change="seek"></onekit-slider>
          <onekit-view onekit-class="play-time">
            <onekit-text>00:00</onekit-text>
            <onekit-text>04:29</onekit-text>
          </onekit-view>
        </onekit-view>
        <onekit-view onekit-class="page-body-text tc">注意：离开当前页面后背景音乐将保持播放，但退出小程序将停止</onekit-view>
        <onekit-view onekit-class="page-body-buttons">
          <template v-if="playing === true">
            <onekit-view onekit-class="page-body-button"
                         @Tap="stop">
              <onekit-image src="/image/stop.png"></onekit-image>
            </onekit-view>
            <onekit-view onekit-class="page-body-button"
                         @Tap="pause">
              <onekit-image src="/image/pause.png"></onekit-image>
            </onekit-view>
          </template>
          <template v-if="playing === false">
            <onekit-view onekit-class="page-body-button"></onekit-view>
            <onekit-view onekit-class="page-body-button"
                         @Tap="play">
              <onekit-image src="/image/play.png"></onekit-image>
            </onekit-view>
          </template>
          <onekit-view onekit-class="page-body-button"></onekit-view>
        </onekit-view>
      </onekit-view>

      <onekit-template is="onekit-template-foot"></onekit-template>
    </onekit-view>
  </onekit-page>
</template>
<script>
import Vue from 'vue'
import head from '../../../common/head.head'
Vue.component('onekit-template-head', head)
import foot from '../../../common/foot.foot'
Vue.component('onekit-template-foot', foot)
const ONEKIT_JSON = {
  "navigationBarTitleText": "背景音频",
  "usingComponents": {}
}
import OnekitPage from '../../../../weixin2vue/OnekitPage';
import wx from '../../../../weixin2vue/wx';
//let global = {};
//const app = getApp()
const util = require('../../../util/util.js')
const backgroundAudioManager = wx.getBackgroundAudioManager()
var updateInterval
export default OnekitPage(ONEKIT_JSON, {
  onShareAppMessage: function () {
    return {
      title: '背景音乐',
      path: 'packageAPI/pages/background-audio/background-audio'
    }
  },
  onShow: function () {
    if ((!backgroundAudioManager.paused && (backgroundAudioManager.paused !== undefined))) {
      this._enableInterval();
      this.setData({
        playing: true
      });
    }
  },
  onLoad: function () {
    const that = this
    backgroundAudioManager.onPlay(() => {
      this._enableInterval()
      this.setData({
        pause: false
      })
    })
    backgroundAudioManager.onPause(() => {
      clearInterval(updateInterval)
      that.setData({
        playing: false,
        pause: true
      })
    })
    backgroundAudioManager.onEnded(() => {
      clearInterval(updateInterval)
      that.setData({
        playing: false,
        playTime: 0,
        formatedPlayTime: util.formatTime(0)
      })
    })
    backgroundAudioManager.onStop(() => {
      clearInterval(updateInterval)
      that.setData({
        playing: false,
        playTime: 0,
        formatedPlayTime: util.formatTime(0)
      })
    })
  },
  data: {
    playing: false,
    pause: false,
    playTime: 0,
    formatedPlayTime: '00:00:00'
  },
  play: function () {
    backgroundAudioManager.title = '此时此刻'
    backgroundAudioManager.epname = '此时此刻'
    backgroundAudioManager.singer = '许巍'
    backgroundAudioManager.coverImgUrl = 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000'
    const that = this
    if (that.data.pause) {
      backgroundAudioManager.play();
      this.setData({
        playing: true
      });
    } else {
      that.setData({
        playing: true
      }, () => { backgroundAudioManager.src = 'https://dldir1.qq.com/music/release/upload/t_mm_file_publish/2339610.m4a' });
    }
  },
  seek: function (e) {
    backgroundAudioManager.seek(e.detail.value)
  },
  pause: function () {
    clearInterval(updateInterval)
    backgroundAudioManager.pause()
  },
  stop: function () {
    clearInterval(updateInterval)
    backgroundAudioManager.stop()
  },
  _enableInterval: function () {
    const that = this
    function update () {
      console.log(backgroundAudioManager.currentTime)
      that.setData({
        playTime: backgroundAudioManager.currentTime + 1,
        formatedPlayTime: util.formatTime(backgroundAudioManager.currentTime + 1)
      })
    }
    updateInterval = setInterval(() => {
      update();
    }, () => {
      1000();
    })
  },
  onUnload: function () {
    clearInterval(updateInterval)
  }
})
</script>
<style scoped src="@/app.css"/>
<style>
.onekit-image {
  width: 75px;
  height: 75px;
}
.page-body-wrapper {
  margin-top: 0;
}
.page-body-info {
  padding-bottom: 25px;
}
.time-big {
  font-size: 30px;
  margin: 10px;
}
.slider {
  width: 90%;
}
.play-time {
  font-size: 14px;
  width: 350px;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
}
.page-body-buttons {
  display: flex;
  justify-content: space-around;
  margin-top: 50px;
}
.page-body-button {
  width: 225px;
  text-align: center;
}
</style>
