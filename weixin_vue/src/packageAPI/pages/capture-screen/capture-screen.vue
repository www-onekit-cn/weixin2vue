<style scoped src="@/onekit/OneKit.css"></style>
<style scoped="scoped" src="./capture-screen.css"></style>
<script src="./capture-screen.js"></script>
<template>
<onekit-page>
<import src="../../../common/head.vue"/>
<import src="../../../common/foot.vue"/>

<onekit-view Class="container">
  

  <onekit-view Class="page-body">
    <onekit-view Class="page-body-info">
      <onekit-view Class="page-body-title">请进行屏幕截屏</onekit-view>
      <onekit-text Class="page-body-text">截屏事件{{ captured ? "已" : "未" }}触发</onekit-text>
    </onekit-view>
  </onekit-view>

  
</onekit-view>
</onekit-page>
</template>