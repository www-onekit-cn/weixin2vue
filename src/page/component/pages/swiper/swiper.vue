
<template>
  <onekit-page id='app'>
    <!--    <import src='../../../common/head.vue' />
    <import src='../../../common/foot.vue' />-->

    <onekit-view onekit-class="container">
      <onekit-template is="onekit-template-head"
                       DATA='{"title":"swiper"}'></onekit-template>

      <onekit-view onekit-class="page-body">
        <onekit-view onekit-class="page-section page-section-spacing swiper">
          <onekit-swiper :indicator-dots="indicatorDots"
                         :autoplay="autoplay"
                         :interval="interval"
                         :duration="duration">
            <template v-for="(item) in background">
              <onekit-swiper-item>
                <onekit-view :onekit-class="'swiper-item '+(item)"></onekit-view>
              </onekit-swiper-item>
            </template>
          </onekit-swiper>
        </onekit-view>
        <onekit-view onekit-class="page-section"
                     onekit-style="margin-top: 20px;margin-bottom: 0;">
          <onekit-view onekit-class="weui-cells weui-cells_after-title">
            <onekit-view onekit-class="weui-cell weui-cell_switch">
              <onekit-view onekit-class="weui-cell__bd">指示点</onekit-view>
              <onekit-view onekit-class="weui-cell__ft">
                <onekit-switch :checked="indicatorDots"
                               @Change="changeIndicatorDots"></onekit-switch>
              </onekit-view>
            </onekit-view>
            <onekit-view onekit-class="weui-cell weui-cell_switch">
              <onekit-view onekit-class="weui-cell__bd">自动播放</onekit-view>
              <onekit-view onekit-class="weui-cell__ft">
                <onekit-switch :checked="autoplay"
                               @Change="changeAutoplay"></onekit-switch>
              </onekit-view>
            </onekit-view>
          </onekit-view>
        </onekit-view>

        <onekit-view onekit-class="page-section page-section-spacing">
          <onekit-view onekit-class="page-section-title">
            <onekit-text>幻灯片切换时长(ms)</onekit-text>
            <onekit-text onekit-class="info">{{duration}}</onekit-text>
          </onekit-view>
          <onekit-slider @Change="durationChange"
                         :value="duration"
                         min="500"
                         max="2000"></onekit-slider>
          <onekit-view onekit-class="page-section-title">
            <onekit-text>自动播放间隔时长(ms)</onekit-text>
            <onekit-text onekit-class="info">{{interval}}</onekit-text>
          </onekit-view>
          <onekit-slider @Change="intervalChange"
                         :value="interval"
                         min="2000"
                         max="10000"></onekit-slider>
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
  "navigationBarTitleText": "swiper",
  "usingComponents": {}
}
import OnekitPage from '../../../../../weixin2vue/OnekitPage';
import wx from '../../../../../weixin2vue/wx';
//let //let global = {};
export default OnekitPage(ONEKIT_JSON, {
  onShareAppMessage: function () {
    return {
      title: 'swiper',
      path: 'page/component/pages/swiper/swiper'
    }
  },
  data: {
    background: [
      'demo-text-1',
      'demo-text-2',
      'demo-text-3'
    ],
    indicatorDots: true,
    vertical: false,
    autoplay: false,
    interval: 2000,
    duration: 500
  },
  changeIndicatorDots: function () {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function () {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function (e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function (e) {
    this.setData({
      duration: e.detail.value
    })
  }
})
</script>
<style scoped src="@/app.css"/>
<style>
@import "../../../common/lib/weui.css";
.onekit-button {
  margin-bottom: 15px;
}
button:last-child {
  margin-bottom: 0;
}
.page-section-title {
  padding: 0;
}
.swiper-item {
  display: block;
  height: 150px;
}
.page-section-title {
  margin-top: 30px;
  position: relative;
}
.info {
  position: absolute;
  right: 0;
  color: #353535;
  font-size: 15px;
}
.page-foot {
  margin-top: 25px;
}
</style>
