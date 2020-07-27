<style scoped src="@/onekit/OneKit.css"></style>
<style scoped="scoped" src="./pull-down-refresh.css"></style>
<script src="./pull-down-refresh.js"></script>
<template>
<onekit-page>
<import src="../../../common/head.vue"/>
<import src="../../../common/foot.vue"/>

<onekit-view Class="container">
  

  <onekit-view Class="page-body">
    <onekit-view Class="page-section">
      <onekit-view Class="page-body-info">
        <onekit-text Class="page-body-text">下滑页面即可刷新</onekit-text>
      </onekit-view>
      <onekit-view Class="btn-area">
        <onekit-button @tap="stopPullDownRefresh">停止刷新</onekit-button>
      </onekit-view>
    </onekit-view>
  </onekit-view>

  
</onekit-view>
</onekit-page>
</template>