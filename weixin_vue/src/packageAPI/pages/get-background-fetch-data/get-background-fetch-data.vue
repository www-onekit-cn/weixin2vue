<style scoped src="@/onekit/OneKit.css"></style>
<style scoped="scoped" src="./get-background-fetch-data.css"></style>
<script src="./get-background-fetch-data.js"></script>
<template>
<onekit-page>
<import src="../../../common/head.vue"/>
<import src="../../../common/foot.vue"/>

<onekit-view Class="container">
  

  <onekit-view Class="page-body">
    <onekit-view Class="page-section">
      <onekit-block v-if="canIUse">
        <onekit-view Class="page-body-info">
          <onekit-view Class="page-body-title">周期性缓存数据</onekit-view>
          <onekit-block v-if="appid">
            <onekit-block>
              <onekit-text Class="page-body-text">OpenID</onekit-text>
              <onekit-text Class="context-value">{{openid}}</onekit-text>
            </onekit-block>
            <onekit-block>
              <onekit-text Class="page-body-text">AppID</onekit-text>
              <onekit-text Class="context-value">{{appid}}</onekit-text>
            </onekit-block>
          </onekit-block>
          <onekit-block>
            <onekit-text Class="page-body-text">微信客户端每隔 12 个小时才会发起一次请求</onekit-text>
            <onekit-text Class="page-body-text">为了方便调试周期性数据，可以在 工具 -> 拉取周期性缓存数据 开启</onekit-text>
          </onekit-block>
        </onekit-view>
      </onekit-block>
    </onekit-view>
  </onekit-view>
  
</onekit-view>
</onekit-page>
</template>