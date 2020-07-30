<style scoped src="@/onekit/onekit.css"></style>
<style scoped="scoped" src="./swiper.css"></style>
<script src="./swiper.js"></script>
<template>
<onekit-page>
<import src="../../../common/head.vue"/>
<import src="../../../common/foot.vue"/>

<onekit-view class="container">
  

  <onekit-view class="page-body">
    <onekit-view class="page-section page-section-spacing swiper">
      <onekit-swiper :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
        <onekit-block v-for="(item) in background">
          <onekit-swiper-item>
            <onekit-view :class="'swiper-item '+item"></onekit-view>
          </onekit-swiper-item>
        </onekit-block>
      </onekit-swiper>
    </onekit-view>
    <onekit-view class="page-section" style="margin-top: 20px;margin-bottom: 0;">
      <onekit-view class="weui-cells weui-cells_after-title">
        <onekit-view class="weui-cell weui-cell_switch">
          <onekit-view class="weui-cell__bd">指示点</onekit-view>
          <onekit-view class="weui-cell__ft">
            <onekit-switch :checked="indicatorDots" @change="changeIndicatorDots"></onekit-switch>
          </onekit-view>
        </onekit-view>
        <onekit-view class="weui-cell weui-cell_switch">
          <onekit-view class="weui-cell__bd">自动播放</onekit-view>
          <onekit-view class="weui-cell__ft">
            <onekit-switch :checked="autoplay" @change="changeAutoplay"></onekit-switch>
          </onekit-view>
        </onekit-view>
      </onekit-view>
    </onekit-view>

    <onekit-view class="page-section page-section-spacing">
      <onekit-view class="page-section-title">
        <onekit-text>幻灯片切换时长(ms)</onekit-text>
        <onekit-text class="info">{{duration}}</onekit-text>
      </onekit-view>
      <onekit-slider @change="durationChange" :value="duration" min="500" max="2000"></onekit-slider>
      <onekit-view class="page-section-title">
        <onekit-text>自动播放间隔时长(ms)</onekit-text>
        <onekit-text class="info">{{interval}}</onekit-text>
      </onekit-view>
      <onekit-slider @change="intervalChange" :value="interval" min="2000" max="10000"></onekit-slider>
    </onekit-view>
  </onekit-view>

  
</onekit-view>
</onekit-page>
</template>