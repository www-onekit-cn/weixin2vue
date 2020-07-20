<style scoped src="@/onekit/OneKit.css"></style>
<style scoped="scoped" src="./pull-down-refresh.css"></style>
<script src="./pull-down-refresh.js"></script>
<template>
<onekit-page>



<onekit-view class="container">
  

  <onekit-view class="page-body">
    <onekit-view class="page-section">
      <onekit-view class="page-body-info">
        <onekit-text class="page-body-text">下滑页面即可刷新</onekit-text>
      </onekit-view>
      <onekit-view class="btn-area">
        <onekit-button @tap="stopPullDownRefresh">停止刷新</onekit-button>
      </onekit-view>
    </onekit-view>
  </onekit-view>

  
</onekit-view>
</onekit-page>
</template>