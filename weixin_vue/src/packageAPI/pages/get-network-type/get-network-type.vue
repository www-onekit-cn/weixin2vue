<style scoped src="@/onekit/OneKit.css"></style>
<style scoped="scoped" src="./get-network-type.css"></style>
<script src="./get-network-type.js"></script>
<template>
<onekit-page>
<import src="../../../common/head.vue"/>
<import src="../../../common/foot.vue"/>

<onekit-view Class="container">
  

  <onekit-view Class="page-body">
    <onekit-view Class="page-section">
      <onekit-view Class="page-body-info">
        <onekit-view Class="page-body-title">网络状态</onekit-view>
        <onekit-block v-if="hasNetworkType === false">
          <onekit-text Class="page-body-text">未获取</onekit-text>
          <onekit-text Class="page-body-text">点击绿色按钮可获取网络状态</onekit-text>
        </onekit-block>
        <onekit-block v-if="hasNetworkType === true">
          <onekit-text Class="page-body-text-network-type">{{networkType}}</onekit-text>
        </onekit-block>
      </onekit-view>
      <onekit-view Class="btn-area">
        <onekit-button type="primary" @tap="getNetworkType">获取手机网络状态</onekit-button>
        <onekit-button @tap="clear">清空</onekit-button>
      </onekit-view>
    </onekit-view>
  </onekit-view>

  
</onekit-view>
</onekit-page>
</template>