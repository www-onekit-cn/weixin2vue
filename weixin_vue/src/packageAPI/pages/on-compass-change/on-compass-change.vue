<style scoped src="@/onekit/OneKit.css"></style>
<style scoped="scoped" src="./on-compass-change.css"></style>
<script src="./on-compass-change.js"></script>
<template>
<onekit-page>
<import src="../../../common/head.vue"/>
<import src="../../../common/foot.vue"/>

<onekit-view class="container">
  

  <onekit-view class="page-body">
    <onekit-view class="page-section page-section_center">
      <onekit-text class="page-body-text">旋转手机即可获取方位信息</onekit-text>
      <onekit-view class="direction">
        <onekit-view class="bg-compass-line"></onekit-view>
        <onekit-image class="bg-compass" src="compass.png" :style="'transform: rotate('+direction+'deg)'"></onekit-image>
        <onekit-view class="direction-value">
          <onekit-text>{{direction}}</onekit-text>
          <onekit-text class="direction-degree">o</onekit-text>
        </onekit-view>
      </onekit-view>
      <onekit-view class="controls">
        <onekit-button @tap="startCompass" :disabled="enabled">开始监听</onekit-button>
        <onekit-button @tap="stopCompass" :disabled="!enabled">停止监听</onekit-button>
      </onekit-view>
    </onekit-view>
  </onekit-view>

  
</onekit-view>
</onekit-page>
</template>