<style scoped src="@/onekit/OneKit.css"></style>
<style scoped="scoped" src="./on-accelerometer-change.css"></style>
<script src="./on-accelerometer-change.js"></script>
<template>
<onekit-page>
<import src="../../../common/head.vue"/>
<import src="../../../common/foot.vue"/>

<onekit-view class="container">
  

  <onekit-view class="page-body">
    <onekit-view class="page-section page-section_center">
      <onekit-text class="page-body-text">倾斜手机即可移动下方小球</onekit-text>
      <onekit-view class="page-body-canvas">
        <onekit-canvas class="page-body-ball" :show="{{true}}" canvas-id="big-ball"></onekit-canvas>
        <onekit-canvas class="page-body-ball" :show="{{true}}" canvas-id="small-ball"></onekit-canvas>
      </onekit-view>
      <onekit-view class="page-body-xyz">
        <onekit-text class="page-body-title">X: {{x}}</onekit-text>
        <onekit-text class="page-body-title">Y: {{y}}</onekit-text>
        <onekit-text class="page-body-title">Z: {{z}}</onekit-text>
      </onekit-view>
      <onekit-view class="page-body-controls">
        <onekit-button @tap="startAccelerometer" :disabled="{{enabled}}">开始监听</onekit-button>
        <onekit-button @tap="stopAccelerometer" :disabled="{{!enabled}}">停止监听</onekit-button>
      </onekit-view>
    </onekit-view>
  </onekit-view>

  
</onekit-view>
</onekit-page>
</template>