<style scoped src="@/onekit/OneKit.css"></style>
<style scoped="scoped" src="./sidebar.css"></style>
<script src="./sidebar.js"></script>
<template>
<onekit-page>

<script>
const test = require('./sidebar.wxs')</script>

<onekit-view class="page">
  <onekit-view class="page-bottom">
    <onekit-view class="page-content">
      <onekit-view class="wc">
          <onekit-text>技术开发</onekit-text>
      </onekit-view>
      <onekit-view class="wc">
          <onekit-text>产品解析</onekit-text>
      </onekit-view>
      <onekit-view class="wc">
          <onekit-text>运营规范</onekit-text>
      </onekit-view>
      <onekit-view class="wc">
          <onekit-text>高校大赛</onekit-text>
      </onekit-view>
    </onekit-view>
  </onekit-view> 
  <onekit-view :data-width="windowWidth" :catch:touchmove="test.touchmove" @:touchend="test.touchend" @:touchstart="test.touchstart" class="page-top">
    <onekit-view style="margin: 10px 10px;"> >>> 右滑出现侧边菜单</onekit-view>
      <onekit-block v-for="(item,title) in tabs">
        <onekit-view style="display: flex; align-items: center; flex-direction: column;">
          <onekit-image :src="item.img" mode="widthFix"></onekit-image>
         
        </onekit-view>
      </onekit-block>
  </onekit-view>
</onekit-view>
</onekit-page>
</template>