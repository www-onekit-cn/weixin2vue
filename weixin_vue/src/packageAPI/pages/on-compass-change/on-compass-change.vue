<style scoped src="@/onekit/OneKit.css"></style>
<style scoped="scoped" src="./on-compass-change.css"></style>
<script src="./on-compass-change.js"></script>
<template>
<onekit-page>
<import src="../../../common/head.vue"/>
<import src="../../../common/foot.vue"/>

<onekit-view Class="container">
  

  <onekit-view Class="page-body">
    <onekit-view Class="page-section page-section_center">
      <onekit-text Class="page-body-text">旋转手机即可获取方位信息</onekit-text>
      <onekit-view Class="direction">
        <onekit-view Class="bg-compass-line"></onekit-view>
        <onekit-image class="bg-compass" src="compass.png" :style="transform: rotate({{direction}}deg)"></onekit-image>
        <onekit-view Class="direction-value">
          <onekit-text>{{direction}}</onekit-text>
          <onekit-text Class="direction-degree">o</onekit-text>
        </onekit-view>
      </onekit-view>
      <onekit-view Class="controls">
        <onekit-button @tap="startCompass" :disabled="{{enabled}}">开始监听</onekit-button>
        <onekit-button @tap="stopCompass" :disabled="{{!enabled}}">停止监听</onekit-button>
      </onekit-view>
    </onekit-view>
  </onekit-view>

  
</onekit-view>
</onekit-page>
</template>