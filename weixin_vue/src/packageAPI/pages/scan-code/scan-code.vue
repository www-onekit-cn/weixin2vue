<style scoped src="@/onekit/OneKit.css"></style>
<style scoped="scoped" src="./scan-code.css"></style>
<script src="./scan-code.js"></script>
<template>
<onekit-page>
<import src="../../../common/head.vue"/>
<import src="../../../common/foot.vue"/>

<onekit-view Class="container">
  

  <onekit-view Class="page-body">
    <onekit-view Class="weui-cells__title">扫码结果</onekit-view>
    <onekit-view Class="weui-cells weui-cells_after-title">
      <onekit-view Class="weui-cell">
        <onekit-view Class="weui-cell__bd">{{result}}</onekit-view>
      </onekit-view>
    </onekit-view>
    <onekit-view Class="btn-area">
      <onekit-button type="primary" @tap="scanCode">扫一扫</onekit-button>
    </onekit-view>
  </onekit-view>

  
</onekit-view>
</onekit-page>
</template>