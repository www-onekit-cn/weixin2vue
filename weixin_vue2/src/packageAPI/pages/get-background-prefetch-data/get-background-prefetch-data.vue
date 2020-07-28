<style scoped src="@/onekit/OneKit.css"></style>
<style scoped="scoped" src="./get-background-prefetch-data.css"></style>
<script src="./get-background-prefetch-data.js"></script>
<template>
<onekit-page>
<import src="../../../common/head.vue"/>
<import src="../../../common/foot.vue"/>

<onekit-view class="container">
  

  <onekit-view class="page-body">
    <onekit-view class="page-section">
      <onekit-view v-if="canIUse" class="page-body-info">
        <onekit-view class="page-body-title">数据预拉取</onekit-view>
        <onekit-block v-if="appid">
          <onekit-block>
            <onekit-text class="page-body-text">OpenID</onekit-text>
            <onekit-text class="context-value">{{openid}}</onekit-text>
          </onekit-block>
          <onekit-block>
            <onekit-text class="page-body-text">AppID</onekit-text>
            <onekit-text class="context-value">{{appid}}</onekit-text>
          </onekit-block>
          <onekit-block>
            <onekit-text class="page-body-text">数据缓存的时间</onekit-text>
            <onekit-text class="context-value">{{getDataTime}}</onekit-text>
          </onekit-block>
        </onekit-block>
        <onekit-block>
          <onekit-text class="page-body-text">用户启动小程序时，调用 wx.getBackgroundFetchData() 获取已缓存到本地的数据。
          </onekit-text>
        </onekit-block>
        
      </onekit-view>
    </onekit-view>
  </onekit-view>
  
</onekit-view>
</onekit-page>
</template>