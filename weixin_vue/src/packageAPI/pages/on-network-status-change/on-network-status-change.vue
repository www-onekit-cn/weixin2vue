<style scoped src="@/onekit/OneKit.css"></style>
<style scoped="scoped" src="./on-network-status-change.css"></style>
<script src="./on-network-status-change.js"></script>
<template>
<onekit-page>
<import src="../../../common/head.vue"/>
<import src="../../../common/foot.vue"/>

<onekit-view Class="container">
  

  <onekit-view Class="page-body">
    <onekit-view Class="page-section">
      <onekit-view Class="page-body-info">
        <onekit-view Class="page-body-title">网络状态</onekit-view>
        <onekit-block v-if="isConnected === false">
          <onekit-text Class="page-body-text">没有网络连接</onekit-text>
        </onekit-block>
        <onekit-block v-if="isConnected === true">
          <onekit-text Class="page-body-text-network-type">{{networkType}}</onekit-text>
        </onekit-block>
      </onekit-view>
    </onekit-view>
  </onekit-view>

  
</onekit-view>
</onekit-page>
</template>