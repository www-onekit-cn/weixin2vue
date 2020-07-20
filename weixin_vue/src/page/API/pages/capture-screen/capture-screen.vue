<style scoped src="@/onekit/OneKit.css"></style>
<style scoped="scoped" src="./capture-screen.css"></style>
<script src="./capture-screen.js"></script>
<template>
<onekit-page>



<onekit-view class="container">
  

  <onekit-view class="page-body">
    <onekit-view class="page-body-info">
      <onekit-view class="page-body-title">请进行屏幕截屏</onekit-view>
      <onekit-text class="page-body-text">截屏事件{{ captured ? "已" : "未" }}触发</onekit-text>
    </onekit-view>
  </onekit-view>

  
</onekit-view>
</onekit-page>
</template>