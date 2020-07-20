<style scoped src="@/onekit/OneKit.css"></style>
<style scoped="scoped" src="./get-network-type.css"></style>
<script src="./get-network-type.js"></script>
<template>
<onekit-page>



<onekit-view class="container">
  

  <onekit-view class="page-body">
    <onekit-view class="page-section">
      <onekit-view class="page-body-info">
        <onekit-view class="page-body-title">网络状态</onekit-view>
        <template v-if="hasNetworkType === false">
          <onekit-text class="page-body-text">未获取</onekit-text>
          <onekit-text class="page-body-text">点击绿色按钮可获取网络状态</onekit-text>
        </template>
        <template v-if="hasNetworkType === true">
          <onekit-text class="page-body-text-network-type">{{networkType}}</onekit-text>
        </template>
      </onekit-view>
      <onekit-view class="btn-area">
        <onekit-button type="primary" @tap="getNetworkType">获取手机网络状态</onekit-button>
        <onekit-button @tap="clear">清空</onekit-button>
      </onekit-view>
    </onekit-view>
  </onekit-view>

  
</onekit-view>
</onekit-page>
</template>