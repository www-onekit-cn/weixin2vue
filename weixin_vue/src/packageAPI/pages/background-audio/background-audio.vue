<style scoped src="@/onekit/OneKit.css"></style>
<style scoped="scoped" src="./background-audio.css"></style>
<script src="./background-audio.js"></script>
<template>
<onekit-page>
<import src="../../../common/head.vue"/>
<import src="../../../common/foot.vue"/>

<onekit-view class="container">
  

  <onekit-view class="page-section">
    <onekit-view class="page-body-info">
      <onekit-text class="time-big">{{formatedPlayTime}}</onekit-text>
      <onekit-slider class="slider" min="0" max="269" step="1" :value="{{playTime}}" @change="seek"></onekit-slider>
      <onekit-view class="play-time">
        <onekit-text>00:00</onekit-text>
        <onekit-text>04:29</onekit-text>
      </onekit-view>
    </onekit-view>
    <onekit-view class="page-body-text tc">注意：离开当前页面后背景音乐将保持播放，但退出小程序将停止</onekit-view>
    <onekit-view class="page-body-buttons">
      <onekit-block v-if="playing === true">
        <onekit-view class="page-body-button" @tap="stop">
          <onekit-image src="/image/stop.png"></onekit-image>
        </onekit-view>
        <onekit-view class="page-body-button" @tap="pause">
          <onekit-image src="/image/pause.png"></onekit-image>
        </onekit-view>
      </onekit-block>
      <onekit-block v-if="playing === false">
        <onekit-view class="page-body-button"></onekit-view>
        <onekit-view class="page-body-button" @tap="play">
          <onekit-image src="/image/play.png"></onekit-image>
        </onekit-view>
      </onekit-block>
      <onekit-view class="page-body-button"></onekit-view>
    </onekit-view>
  </onekit-view>

  
</onekit-view>
</onekit-page>
</template>