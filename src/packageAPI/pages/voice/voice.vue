<template>
  <onekit-page id='app'>
    <import src='../../../common/head.vue' />
    <import src='../../../common/foot.vue' />

    <onekit-view onekit-class="container">
      <onekit-template is="onekit-template-head"
                       DATA='{"title":"录音/音频"}'></onekit-template>

      <onekit-view onekit-class="page-body">
        <onekit-view onekit-class="page-section">
          <template v-if="recording === false && playing === false && hasRecord === false">
            <onekit-view onekit-class="page-body-time">
              <onekit-text onekit-class="time-big">{{formatedRecordTime}}</onekit-text>
            </onekit-view>
            <onekit-view onekit-class="page-body-buttons">
              <onekit-view onekit-class="page-body-button"></onekit-view>
              <onekit-view onekit-class="page-body-button"
                           @Tap="startRecord">
                <onekit-image src="/image/record.png"></onekit-image>
              </onekit-view>
              <onekit-view onekit-class="page-body-button"></onekit-view>
            </onekit-view>
          </template>

          <template v-if="recording === true">
            <onekit-view onekit-class="page-body-time">
              <onekit-text onekit-class="time-big">{{formatedRecordTime}}</onekit-text>
            </onekit-view>
            <onekit-view onekit-class="page-body-buttons">
              <onekit-view onekit-class="page-body-button"></onekit-view>
              <onekit-view onekit-class="page-body-button"
                           @Tap="stopRecord">
                <onekit-view onekit-class="button-stop-record"></onekit-view>
              </onekit-view>
              <onekit-view onekit-class="page-body-button"></onekit-view>
            </onekit-view>
          </template>

          <template v-if="hasRecord === true && playing === false">
            <onekit-view onekit-class="page-body-time">
              <onekit-text onekit-class="time-big">{{formatedPlayTime}}</onekit-text>
              <onekit-text onekit-class="time-small">{{formatedRecordTime}}</onekit-text>
            </onekit-view>
            <onekit-view onekit-class="page-body-buttons">
              <onekit-view onekit-class="page-body-button"></onekit-view>
              <onekit-view onekit-class="page-body-button"
                           @Tap="playVoice">
                <onekit-image src="/image/play.png"></onekit-image>
              </onekit-view>
              <onekit-view onekit-class="page-body-button"
                           @Tap="clear">
                <onekit-image src="/image/trash.png"></onekit-image>
              </onekit-view>
            </onekit-view>
          </template>

          <template v-if="hasRecord === true && playing === true">
            <onekit-view onekit-class="page-body-time">
              <onekit-text onekit-class="time-big">{{formatedPlayTime}}</onekit-text>
              <onekit-text onekit-class="time-small">{{formatedRecordTime}}</onekit-text>
            </onekit-view>
            <onekit-view onekit-class="page-body-buttons">
              <onekit-view onekit-class="page-body-button"
                           @Tap="stopVoice">
                <onekit-image src="/image/stop.png"></onekit-image>
              </onekit-view>
              <onekit-view onekit-class="page-body-button"
                           @Tap="pauseVoice">
                <onekit-image src="/image/pause.png"></onekit-image>
              </onekit-view>
              <onekit-view onekit-class="page-body-button"
                           @Tap="clear">
                <onekit-image src="/image/trash.png"></onekit-image>
              </onekit-view>
            </onekit-view>
          </template>
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
  "navigationBarTitleText": "录音",
  "usingComponents": {}
}
import OnekitPage from '../../../../weixin2vue/OnekitPage';
import wx from '../../../../weixin2vue/wx';
//let global = {};
const util = require('../../../util/util.js')
var playTimeInterval
var recordTimeInterval
const recorderManager = wx.getRecorderManager()
const innerAudioContext = wx.createInnerAudioContext()
export default OnekitPage(ONEKIT_JSON, {
  onShareAppMessage: function () {
    return {
      title: '录音',
      path: 'packageAPI/pages/voice/voice'
    }
  },
  data: {
    recording: false,
    playing: false,
    hasRecord: false,
    recordTime: 0,
    playTime: 0,
    formatedRecordTime: '00:00:00',
    formatedPlayTime: '00:00:00'
  },
  onHide: function () {
    if (this.data.playing) {
      this.stopVoice();
    } else if (this.data.recording) {
      this.stopRecordUnexpectedly();
    }
  },
  onLoad: function () {
    const that = this
    recorderManager.onStart(() => {
      console.log('recorderManage: onStart')
      recordTimeInterval = setInterval(() => {
        const recordTime = that.data.recordTime += 1
        that.setData({
          formatedRecordTime: util.formatTime(that.data.recordTime),
          recordTime
        })
      }, 1000)
    })
    recorderManager.onStop((res) => {
      console.log('recorderManage: onStop')
      that.setData({
        hasRecord: true,
        recording: false,
        tempFilePath: res.tempFilePath,
        formatedPlayTime: util.formatTime(that.data.playTime)
      })
      clearInterval(recordTimeInterval)
    })
    innerAudioContext.onPlay(() => {
      console.log('innerAudioContext: onPlay')
      playTimeInterval = setInterval(() => {
        const playTime = that.data.playTime + 1
        if (that.data.playTime == that.data.recordTime) {
          that.stopVoice();
        } else {
          console.log('update playTime', playTime);
          that.setData({
            formatedPlayTime: util.formatTime(playTime),
            playTime
          });
        }
      }, 1000)
    })
    innerAudioContext.onStop(() => {
    })
  },
  startRecord: function () {
    this.setData({
      recording: true
    })
    const options = {
      duration: 10000,
      sampleRate: 44100,
      numberOfChannels: 1,
      encodeBitRate: 192000,
      format: 'aac',
      frameSize: 50
    }
    recorderManager.start(options)
  },
  stopRecord: function () {
    recorderManager.stop()
  },
  stopRecordUnexpectedly: function () {
    const that = this
    wx.stopRecord({
      success: function () {
        console.log('stop record success')
        clearInterval(recordTimeInterval)
        that.setData({
          recording: false,
          hasRecord: false,
          recordTime: 0,
          formatedRecordTime: util.formatTime(0)
        })
      }
    })
  },
  playVoice: function () {
    innerAudioContext.src = this.data.tempFilePath
    this.setData({
      playing: true
    }, () => { innerAudioContext.play() })
  },
  pauseVoice: function () {
    clearInterval(playTimeInterval)
    innerAudioContext.pause()
    this.setData({
      playing: false
    })
  },
  stopVoice: function () {
    clearInterval(playTimeInterval)
    innerAudioContext.stop()
    this.setData({
      playing: false,
      formatedPlayTime: util.formatTime(0),
      playTime: 0
    })
  },
  clear: function () {
    clearInterval(playTimeInterval)
    innerAudioContext.stop()
    this.setData({
      playing: false,
      hasRecord: false,
      tempFilePath: '',
      formatedRecordTime: util.formatTime(0),
      recordTime: 0,
      playTime: 0
    })
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
  justify-content: space-between;
  flex-grow: 1;
  margin-bottom: 150px;
}
.page-body-time {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.time-big {
  font-size: 30px;
  margin: 10px;
}
.time-small {
  font-size: 15px;
}
.page-body-buttons {
  margin-top: 30px;
  display: flex;
  justify-content: space-around;
}
.page-body-button {
  width: 225px;
  text-align: center;
}
.button-stop-record {
  width: 15px;
  height: 15px;
  border: 10px solid #fff;
  background-color: #f55c23;
  border-radius: 115px;
  margin: 0 auto;
}
</style>
