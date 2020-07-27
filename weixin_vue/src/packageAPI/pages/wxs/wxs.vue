<style scoped src="@/onekit/OneKit.css"></style>
<style scoped="scoped" src="./wxs.css"></style>
<script src="./wxs.js"></script>
<template>
<onekit-page>
<import src="../../../common/head.vue"/>
<import src="../../../common/foot.vue"/>

<onekit-view Class="container">
  

  <onekit-view Class="page-body">
    <onekit-view Class="page-section">
    <onekit-view Class="btn-area">
      <onekit-button type="primary" data-nav="movable" @:tap="handleNavChange">movable</onekit-button>
    </onekit-view>
    
    <onekit-view Class="btn-area">
      <onekit-button type="primary" data-nav="nearby" @:tap="handleNavChange">跟随 swiper 的图片切换</onekit-button>   
    </onekit-view>
    </onekit-view>
  </onekit-view>

  
</onekit-view>
</onekit-page>
</template>