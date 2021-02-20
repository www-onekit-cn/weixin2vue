<template>
  <onekit-page id='app'>
    <!--    <import src='../../../common/head.vue' />
    <import src='../../../common/foot.vue' />-->

    <onekit-view onekit-class="container">
      <onekit-template is="onekit-template-head"
                       :DATA='{"title":"音视频合成"}'></onekit-template>

      <onekit-view onekit-class="page-body">
        <onekit-view onekit-class="page-section">
          <onekit-view onekit-class="page-section-title">
            源视频
          </onekit-view>
        </onekit-view>
        <onekit-view onekit-class="page-section">
          <onekit-button type="primary"
                         @Tap="handleChooseVideo"
                         data-video="one">选择源视频1</onekit-button>
          <onekit-video v-if="one"
                        :src="one"></onekit-video>
        </onekit-view>
        <onekit-view onekit-class="page-section">
          <onekit-button type="primary"
                         @Tap="handleChooseVideo"
                         data-video="two">选择源视频2</onekit-button>
          <onekit-video v-if="two"
                        :src="two"></onekit-video>
        </onekit-view>
        <onekit-view onekit-class="btn-area">
          <onekit-button :disabled="!canIUse"
                         type="primary"
                         @:tap="handleExport">合成</onekit-button>
        </onekit-view>
        <template v-if="targetSrc">
          <onekit-view onekit-class="page-section">
            <onekit-view onekit-class="page-section-title">
              <onekit-text>合成视频</onekit-text>
            </onekit-view>
            <onekit-view onekit-class="page-section-title">
              <onekit-text>合成视频轨道为：源视频1视频轨道 + 源视频2音频轨道</onekit-text>
            </onekit-view>
          </onekit-view>
          <onekit-view onekit-class="page-section">
            <onekit-video :src="targetSrc">
            </onekit-video>
          </onekit-view>
        </template>
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
  "navigationBarTitleText": "音视频合成",
  "usingComponents": {}
}
import OnekitPage from '../../../../weixin2vue/OnekitPage';
import wx from '../../../../weixin2vue/wx';
//let global = {};
export default OnekitPage(ONEKIT_JSON, {
  onShareAppMessage: function () {
    return {
      title: '音视频合成',
      path: 'packageAPI/pages/media-container/media-container'
    }
  },
  onLoad: function () {
    const canIUse = wx.canIUse('wx.createMediaContainer()')
    if (canIUse) {
      this.mediaContainer = wx.createMediaContainer();
    } else {
      this.setData({
        canIUse: false
      });
      wx.showModal({
        title: '微信版本过低，暂不支持本功能'
      });
    }
  },
  data: {
    targetSrc: '',
    one: '',
    two: '',
    canIUse: true
  },
  handleChooseVideo: function (e) {
    const that = this
    wx.chooseVideo({
      sourceType: [
        'album',
        'camera'
      ],
      success: function (res) {
        console.log(res.tempFilePath)
        that.setData({
          [e.currentTarget.dataset.video]: res.tempFilePath
        })
        if (e.currentTarget.dataset.video == 'one') {
          that.mediaContainer.extractDataSource({
            source: that.data.one,
            success: function (mt) {
              that.mediaTrackOne = mt
            }
          });
        } else {
          that.mediaContainer.extractDataSource({
            source: that.data.two,
            success: function (mt) {
              that.mediaTrackTwo = mt
            }
          });
        }
      }
    })
  },
  handleExport: function () {
    if (((this.data.one == '') || (this.data.two == ''))) {
      wx.showToast({
        title: '请先选择源视频',
        icon: "none"
      });
    } else {
      console.log(this.mediaTrackOne, this.mediaTrackTwo);
      const [trackMedia] = this.mediaTrackOne.tracks.filter((item) => item.kind == 'video');
      const [trackAudio] = this.mediaTrackTwo.tracks.filter((item) => item.kind == 'audio');
      console.log(trackMedia, trackAudio);
      this.mediaContainer.addTrack(trackMedia);
      this.mediaContainer.addTrack(trackAudio);
      const that = this;
      this.mediaContainer.export({
        success: (res) => {
          that.setData({
            targetSrc: res.tempFilePath
          })
        }
      });
    }
  }
})
</script>
<style scoped src="@/app.css"/>
<style>
.page-section {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
