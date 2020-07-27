<style scoped src="@/onekit/OneKit.css"></style>
<style scoped="scoped" src="./subscribe-message.css"></style>
<script src="./subscribe-message.js"></script>
<template>
<onekit-page>
<import src="../../../common/head.vue"/>
<import src="../../../common/foot.vue"/>

<onekit-view class="container">
  

  <onekit-view class="page-body">
    <onekit-view class="page-section">
      <onekit-block>
        <onekit-text class="page-body-text">点击提交，调用示例订阅消息</onekit-text>
        <onekit-button Class="page-body-button" type="primary" @tap="requestSubscribeMessage">提交</onekit-button>
      </onekit-block>
    </onekit-view>
  </onekit-view>

  
</onekit-view>
</onekit-page>
</template>