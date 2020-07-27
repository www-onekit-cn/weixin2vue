<style scoped src="@/onekit/OneKit.css"></style>
<style scoped="scoped" src="./get-wx-context.css"></style>
<script src="./get-wx-context.js"></script>
<template>
<onekit-page>
<import src="../../../common/head.vue"/>
<import src="../../../common/foot.vue"/>

<onekit-view Class="container">
  

  <onekit-view Class="page-body">
    <onekit-view Class="page-section">
      <onekit-view Class="page-body-info">
        <onekit-view Class="page-body-title">WXContext</onekit-view>
        <onekit-block v-if="!hasWXContext">
          <onekit-text Class="page-body-text">云函数是在云端（服务器端）运行的函数</onekit-text>
          <onekit-text Class="page-body-text">点击绿色按钮可调用云函数获取微信调用上下文</onekit-text>
          <onekit-text Class="page-body-text">返回内容包括用户 OpenID、小程序 AppID 以及用户 UnionID（满足 UnionID 获取条件时）</onekit-text>
        </onekit-block>
        <onekit-block v-else>
          <onekit-block>
            <onekit-text Class="page-body-text">OpenID</onekit-text>
            <onekit-text Class="context-value">{{wxContext.openid}}</onekit-text>
          </onekit-block>
          <onekit-block>
            <onekit-text Class="page-body-text">AppID</onekit-text>
            <onekit-text Class="context-value">{{wxContext.appid}}</onekit-text>
          </onekit-block>
          <onekit-block v-if="wxContext.unionid">
            <onekit-text Class="page-body-text">UnionID</onekit-text>
            <onekit-text Class="context-value">{{wxContext.unionid}}</onekit-text>
          </onekit-block>
        </onekit-block>
      </onekit-view>
      <onekit-view Class="btn-area">
        <onekit-button type="primary" @tap="getWXContext" :loading="{{loading}}">获取 WXContext</onekit-button>
        <onekit-button @tap="clear">清空</onekit-button>
      </onekit-view>
    </onekit-view>
  </onekit-view>

  
</onekit-view>
</onekit-page>
</template>