<template>
  <onekit-page id='app'>
    <!--    <import src='../../../common/head.vue' />
    <import src='../../../common/foot.vue' />-->

    <onekit-view onekit-class="container">
      <onekit-template is="onekit-template-head"
                       :DATA='{"title":"video"}'></onekit-template>

      <onekit-view onekit-class="page-body">
        <onekit-view onekit-class="page-section tc">
          <onekit-video onekit-id="myVideo"
                        src="http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400"
                        @Error="videoErrorCallback"
                        :danmu-list="danmuList"
                        enable-danmu
                        danmu-btn
                        show-casting-button
                        show-screen-lock-button
                        :show-center-play-btn="false"
                        :show-play-btn="true"
                        controls
                        :picture-in-picture-mode="['push', 'pop']"
                        @Enterpictureinpicture="bindVideoEnterPictureInPicture"
                        @Leavepictureinpicture="bindVideoLeavePictureInPicture"
                        :enable-auto-rotation="enableAutoRotation"></onekit-video>
          <onekit-view onekit-class="auto-rotate-container">
            <onekit-view>开启自动旋转</onekit-view>
            <onekit-view>
              <onekit-switch :model:checked=" enableAutoRotation "
                             @Change="handleSwitchChange"></onekit-switch>
            </onekit-view>
          </onekit-view>
          <onekit-view onekit-class="weui-cells">
            <onekit-view onekit-class="weui-cell weui-cell_input">
              <onekit-view onekit-class="weui-cell__hd">
                <onekit-view onekit-class="weui-label">弹幕内容</onekit-view>
              </onekit-view>
              <onekit-view onekit-class="weui-cell__bd">
                <onekit-input @Blur="bindInputBlur"
                              onekit-class="weui-input"
                              type="text"
                              placeholder="在此处输入弹幕内容"></onekit-input>
              </onekit-view>
            </onekit-view>
          </onekit-view>
          <onekit-view onekit-class="btn-area">
            <onekit-button @Tap="bindSendDanmu"
                           onekit-class="page-body-button"
                           type="primary"
                           formType="submit">发送弹幕</onekit-button>
          </onekit-view>
          <onekit-view onekit-class="btn-area">
            <onekit-navigator url="picture-in-picture"
                              hover-class="other-navigator-hover">
              <onekit-button type="primary"
                             onekit-class="page-body-button"
                             @Tap="bindPlayVideo">小窗模式</onekit-button>
            </onekit-navigator>
          </onekit-view>

        </onekit-view>
      </onekit-view>

      <onekit-template is="onekit-template-foot"></onekit-template>
    </onekit-view>
  </onekit-page>
</template>
<script>
/* eslint-disable no-unused-vars */
import Vue from 'vue'
import foot from '../../../../page/common/foot.foot'
Vue.component('onekit-template-foot', foot)
import head from '../../../../page/common/head.head'
Vue.component('onekit-template-head', head)
const ONEKIT_JSON = {
  "navigationBarTitleText": "video",
  "usingComponents": {}
}
import OnekitPage from '../../../../../weixin2vue/OnekitPage';
import wx from '../../../../../weixin2vue/wx';
//let //let global = {};
function getRandomColor () {
  const rgb = [
  ]
  for (var i = 0; i < 3; ++i) {
    var color = Math.floor(Math.random() * 256).toString(16);
    color = color.length == 1 ? '0' + color : color;
    rgb.push(color);
  }
  return '#' + rgb.join('')
}
export default OnekitPage(ONEKIT_JSON, {
  onShareAppMessage: function () {
    return {
      title: 'video',
      path: 'page/component/pages/video/video'
    }
  },
  onReady: function () {
    this.videoContext = wx.createVideoContext('myVideo')
  },
  onHide: function () {
  },
  inputValue: '',
  data: {
    enableAutoRotation: true,
    src: '',
    danmuList: [
      {
        text: '第 1s 出现的弹幕',
        color: '#ff0000',
        time: 1
      },
      {
        text: '第 3s 出现的弹幕',
        color: '#ff00ff',
        time: 3
      }
    ]
  },
  bindInputBlur: function (e) {
    this.inputValue = e.detail.value
  },
  bindButtonTap: function () {
    const that = this
    wx.chooseVideo({
      sourceType: [
        'album',
        'camera'
      ],
      maxDuration: 60,
      camera: [
        'front',
        'back'
      ],
      success: function (res) {
        that.setData({
          src: res.tempFilePath
        })
      }
    })
  },
  bindVideoEnterPictureInPicture: function () {
    console.log('进入小窗模式')
  },
  bindVideoLeavePictureInPicture: function () {
    console.log('退出小窗模式')
  },
  bindPlayVideo: function () {
    this.videoContext.play()
  },
  bindSendDanmu: function () {
    this.videoContext.sendDanmu({
      text: this.inputValue,
      color: getRandomColor()
    })
  },
  videoErrorCallback: function (e) {
    console.log('视频错误信息:')
    console.log(e.detail.errMsg)
  },
  handleSwitchChange: function (e) {
    this.setData({
      enableAutoRotation: e.detail.value
    })
  }
})
</script>
<style scoped src="@/app.css"/>
<style>
@import "../../../common/lib/weui.css";
.onekit-video {
  width: 345px;
}
.weui-cells {
  margin: 20px 15px 0;
  text-align: left;
}
.weui-label {
  width: 5em;
}
.auto-rotate-container {
  margin: 20px 20px 0;
  display: flex;
  justify-content: space-between;
}
.video-container {
  margin: 11px 3px;
  display: flex;
  justify-content: center;
}
</style>
