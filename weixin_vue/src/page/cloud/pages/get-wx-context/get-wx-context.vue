<style scoped src="@/onekit/OneKit.css"></style>
<style scoped="scoped" src="./get-wx-context.css"></style>
<script src="./get-wx-context.js"></script>
<template>
<onekit-page>



<onekit-view class="container">
  

  <onekit-view class="page-body">
    <onekit-view class="page-section">
      <onekit-view class="page-body-info">
        <onekit-view class="page-body-title">WXContext</onekit-view>
        <template v-if="!hasWXContext">
          <onekit-text class="page-body-text">云函数是在云端（服务器端）运行的函数</onekit-text>
          <onekit-text class="page-body-text">点击绿色按钮可调用云函数获取微信调用上下文</onekit-text>
          <onekit-text class="page-body-text">返回内容包括用户 OpenID、小程序 AppID 以及用户 UnionID（满足 UnionID 获取条件时）</onekit-text>
        </template>
        <template v-else>
          <template>
            <onekit-text class="page-body-text">OpenID</onekit-text>
            <onekit-text class="context-value">{{wxContext.openid}}</onekit-text>
          </template>
          <template>
            <onekit-text class="page-body-text">AppID</onekit-text>
            <onekit-text class="context-value">{{wxContext.appid}}</onekit-text>
          </template>
          <template v-if="wxContext.unionid">
            <onekit-text class="page-body-text">UnionID</onekit-text>
            <onekit-text class="context-value">{{wxContext.unionid}}</onekit-text>
          </template>
        </template>
      </onekit-view>
      <onekit-view class="btn-area">
        <onekit-button type="primary" @tap="getWXContext" :loading="loading">获取 WXContext</onekit-button>
        <onekit-button @tap="clear">清空</onekit-button>
      </onekit-view>
    </onekit-view>
  </onekit-view>

  
</onekit-view>
</onekit-page>
</template>