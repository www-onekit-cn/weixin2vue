<style scoped src="@/onekit/OneKit.css"></style>
<style scoped="scoped" src="./get-user-info.css"></style>
<script src="./get-user-info.js"></script>
<template>
<onekit-page>
<import src="../../../common/head.vue"/>
<import src="../../../common/foot.vue"/>

<onekit-view class="container">
  

  <onekit-view class="page-body">
    <onekit-view class="page-section">
      <onekit-view class="page-body-info">
        <onekit-view class="page-body-title">用户信息</onekit-view>
        <onekit-block v-if="hasUserInfo === false">
          <onekit-text class="page-body-text">未获取</onekit-text>
          <onekit-text class="page-body-text">点击绿色按钮可获取用户头像及昵称</onekit-text>
        </onekit-block>
        <onekit-block v-if="hasUserInfo === true">
          <onekit-image class="userinfo-avatar" :src="{{userInfo.avatarUrl}}"></onekit-image>
          <onekit-text class="userinfo-nickname">{{userInfo.nickName}}</onekit-text>
        </onekit-block>
      </onekit-view>
      <onekit-view class="btn-area">
        <onekit-button type="primary" open-type="getUserInfo" @getuserinfo="getUserInfo">获取用户信息</onekit-button>
        <onekit-button @tap="clear">清空</onekit-button>
      </onekit-view>
    </onekit-view>
  </onekit-view>

  
</onekit-view>
</onekit-page>
</template>