<style scoped src="@/onekit/OneKit.css"></style>
<style scoped="scoped" src="./scan-code.css"></style>
<script src="./scan-code.js"></script>
<template>
<onekit-page>



<onekit-view class="container">
  

  <onekit-view class="page-body">
    <onekit-view class="weui-cells__title">扫码结果</onekit-view>
    <onekit-view class="weui-cells weui-cells_after-title">
      <onekit-view class="weui-cell">
        <onekit-view class="weui-cell__bd">{{result}}</onekit-view>
      </onekit-view>
    </onekit-view>
    <onekit-view class="btn-area">
      <onekit-button type="primary" @tap="scanCode">扫一扫</onekit-button>
    </onekit-view>
  </onekit-view>

  
</onekit-view>
</onekit-page>
</template>