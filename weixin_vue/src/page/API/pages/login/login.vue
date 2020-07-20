<style scoped src="@/onekit/OneKit.css"></style>
<style scoped="scoped" src="./login.css"></style>
<script src="./login.js"></script>
<template>
<onekit-page>



<onekit-view class="container">
  

  <onekit-view class="page-body">
    <onekit-view class="page-section">
      <template v-if="hasLogin === true">
        <onekit-text class="page-body-title">已登录</onekit-text>
        <onekit-text class="page-body-text">每个微信号中仅需登录 1 次，后续每次进入页面即可根据微信 id 自动拉取用户信息</onekit-text>
      </template>
      <template v-if="hasLogin === false">
        <onekit-text class="page-body-text">每个微信号中仅需登录一次</onekit-text>
        <onekit-button class="page-body-button" type="primary" @tap="login">微信登录</onekit-button>
      </template>
    </onekit-view>
  </onekit-view>

  
</onekit-view>
</onekit-page>
</template>