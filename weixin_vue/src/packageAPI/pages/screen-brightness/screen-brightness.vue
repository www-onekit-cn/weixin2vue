<style scoped src="@/onekit/OneKit.css"></style>
<style scoped="scoped" src="./screen-brightness.css"></style>
<script src="./screen-brightness.js"></script>
<template>
<onekit-page>
<import src="../../../common/head.vue"/>
<import src="../../../common/foot.vue"/>

<onekit-view Class="container">
  

  <onekit-view Class="page-body">
    <onekit-view Class="page-body-info">
      <onekit-view Class="page-body-title">当前屏幕亮度</onekit-view>
      <onekit-text Class="page-body-text-screen-brightness">{{screenBrightness}}</onekit-text>
    </onekit-view>
    <onekit-view Class="page-section page-section-gap">
      <onekit-view Class="page-section-title">设置屏幕亮度</onekit-view>
      <onekit-view Class="body-view">
        <onekit-slider @change="changeBrightness" :value="{{screenBrightness}}" min="0" max="1" step="0.1"></onekit-slider>
      </onekit-view>
    </onekit-view>
  </onekit-view>

  
</onekit-view>
</onekit-page>
</template>