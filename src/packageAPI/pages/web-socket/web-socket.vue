<style scoped src="@/onekit/onekit.css"></style>
<style scoped="scoped" src="./web-socket.css"></style>
<script src="./web-socket.js"></script>
<template>
<onekit-page>
<import src="../../../common/head.vue"/>
<import src="../../../common/foot.vue"/>

<onekit-view class="container">
  

  <onekit-view class="page-body">
    <onekit-view class="page-section">
      <onekit-view class="weui-cells weui-cells_after-title">
        <onekit-view class="weui-cell weui-cell_switch">
          <onekit-view class="weui-cell__bd">Socket状态</onekit-view>
          <onekit-view class="weui-cell__ft">
            <onekit-switch @change="toggleSocket" :disabled="!hasLogin"></onekit-switch>
          </onekit-view>
        </onekit-view>
        <onekit-view class="weui-cell">
          <onekit-view class="weui-cell__bd">消息</onekit-view>
          <onekit-view class="weui-cell__ft">
            Hello, 小程序!
          </onekit-view>
        </onekit-view>
      </onekit-view>
    </onekit-view>
    <onekit-view class="btn-area">
      <onekit-button type="primary" size="40" @tap="sendMessage" :disabled="socketStatus != 'connected'" :loading="loading">点我发送</onekit-button>
    </onekit-view>
  </onekit-view>

  
</onekit-view>
</onekit-page>
</template>