<style scoped src="@/onekit/OneKit.css"></style>
<style scoped="scoped" src="./get-user-info.css"></style>
<script src="./get-user-info.js"></script>
<template>
<onekit-page>
<import src="../../../common/head.vue"/>
<import src="../../../common/foot.vue"/>

<onekit-view Class="container">
  

  <onekit-view Class="page-body">
    <onekit-view Class="page-section">
      <onekit-view Class="page-body-info">
        <onekit-view Class="page-body-title">用户信息</onekit-view>
        <onekit-block v-if="hasUserInfo === false">
          <onekit-text Class="page-body-text">未获取</onekit-text>
          <onekit-text Class="page-body-text">点击绿色按钮可获取用户头像及昵称</onekit-text>
        </onekit-block>
        <onekit-block v-if="hasUserInfo === true">
          <onekit-image class="userinfo-avatar" :src="{{userInfo.avatarUrl}}"></onekit-image>
          <onekit-text Class="userinfo-nickname">{{userInfo.nickName}}</onekit-text>
        </onekit-block>
      </onekit-view>
      <onekit-view Class="btn-area">
        <onekit-button type="primary" open-type="getUserInfo" @getuserinfo="getUserInfo">获取用户信息</onekit-button>
        <onekit-button @tap="clear">清空</onekit-button>
      </onekit-view>
    </onekit-view>
  </onekit-view>

  
</onekit-view>
</onekit-page>
</template>