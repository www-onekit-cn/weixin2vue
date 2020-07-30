<style scoped src="@/onekit/onekit.css"></style>
<style scoped="scoped" src="./user-authentication.css"></style>
<script src="./user-authentication.js"></script>
<template>
<onekit-page>
<import src="../../../common/head.vue"/>
<import src="../../../common/foot.vue"/>

<onekit-view class="container">
  

  <onekit-view class="page-body">
    <onekit-view class="page-section">
      <onekit-view class="page-body-info">
        <onekit-view class="page-body-title">OpenID</onekit-view>
        <onekit-block v-if="!openid">
          <onekit-text class="page-body-text">点击绿色按钮可通过云开发获取用户 OpenID</onekit-text>
          <onekit-text class="page-body-text">使用云开发，无需自己部署服务端并维护复杂的鉴权机制，在小程序端简单调用即可通过云端获取天然可信任的用户登录态</onekit-text>
        </onekit-block>
        <onekit-block v-else>
          <onekit-text class="openid">{{openid}}</onekit-text>
        </onekit-block>
      </onekit-view>
      <onekit-view class="btn-area">
        <onekit-button type="primary" @tap="onGetOpenid" :loading="loading">获取 OpenID</onekit-button>
        <onekit-button @tap="clear">清空</onekit-button>
      </onekit-view>
    </onekit-view>
  </onekit-view>

  
</onekit-view>
</onekit-page>
</template>