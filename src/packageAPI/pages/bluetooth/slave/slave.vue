<style scoped src="@/onekit/onekit.css"></style>
<style scoped="scoped" src="./slave.css"></style>
<script src="./slave.js"></script>
<template>
<onekit-page>
<import src="../../../../common/head.vue"/>
<import src="../../../../common/foot.vue"/>


<onekit-view class="container">
  
  <onekit-view class="page-body" style="display: flex; flex-direction: column">
    <onekit-text style="text-align: center; margin: 16px">当前 serverId {{serverId}}</onekit-text>
    <onekit-view class="action-area">
      <onekit-button type="primary" @tap="openBluetoothAdapter">创建server</onekit-button>
      <onekit-button type="primary" @tap="closeServer">关闭server</onekit-button>
    </onekit-view>
    <onekit-view class="action-area">
      <onekit-button type="primary" @tap="addService">创建服务</onekit-button>
      <onekit-button type="primary" @tap="removeService">关闭服务</onekit-button>
    </onekit-view>
    <onekit-view class="action-area">
      <onekit-button type="primary" @tap="startAdvertising">开启广播</onekit-button>
      <onekit-button type="primary" @tap="stopAdvertising">关闭广播</onekit-button>
    </onekit-view>
    <onekit-view class="action-area">
      <onekit-button type="primary" @tap="showInput">写数据</onekit-button>
      <onekit-button type="primary" @tap="closeBluetoothAdapter">结束流程</onekit-button>
    </onekit-view>
    <onekit-button type="primary" @tap="chaneMode">返回主机模式</onekit-button>
    <onekit-block v-if="input">
      <onekit-input style="width: 200px;margin: 0 auto;background: var(--weui-BG-2);padding: 5px;" placeholder="写个数字" @confirm="onConfirm"></onekit-input>
    </onekit-block>
    <onekit-view>
      <onekit-view v-for="(item) in connects" v-if="connects.length > 0">
        <onekit-view>
          <onekit-text>{{item.deviceId}} : {{item.serverId}}</onekit-text>
          <onekit-text>{{item.connected ? "已连接" : "断开"}}</onekit-text>
        </onekit-view>
      </onekit-view>
    </onekit-view>
  </onekit-view>
  
</onekit-view>
</onekit-page>
</template>