<style scoped src="@/onekit/OneKit.css"></style>
<style scoped="scoped" src="./scroll-view.css"></style>
<script src="./scroll-view.js"></script>
<template>
<onekit-page>



<onekit-view class="container">
  

  <onekit-view class="page-body">
    <onekit-view class="page-section">
      <onekit-view class="page-section-title">
        <onekit-text>Vertical Scroll\n纵向滚动</onekit-text>
      </onekit-view>
      <onekit-view class="page-section-spacing">
        <onekit-scroll-view scroll-y="true" style="height: 300rpx;" @scrolltoupper="upper" @scrolltolower="lower" @scroll="scroll" :scroll-into-view="toView" :scroll-top="scrollTop">
          <onekit-view id="demo1" class="scroll-view-item demo-text-1"></onekit-view>
          <onekit-view id="demo2" class="scroll-view-item demo-text-2"></onekit-view>
          <onekit-view id="demo3" class="scroll-view-item demo-text-3"></onekit-view>
        </onekit-scroll-view>
      </onekit-view>
    </onekit-view>
    <onekit-view class="page-section">
      <onekit-view class="page-section-title">
        <onekit-text>Horizontal Scroll\n横向滚动</onekit-text>
      </onekit-view>
      <onekit-view class="page-section-spacing">
        <onekit-scroll-view class="scroll-view_H" scroll-x="true" @scroll="scroll" style="width: 100%">
          <onekit-view id="demo1" class="scroll-view-item_H demo-text-1"></onekit-view>
          <onekit-view id="demo2" class="scroll-view-item_H demo-text-2"></onekit-view>
          <onekit-view id="demo3" class="scroll-view-item_H demo-text-3"></onekit-view>
        </onekit-scroll-view>
      </onekit-view>
    </onekit-view>
  </onekit-view>

  
</onekit-view>
</onekit-page>
</template>