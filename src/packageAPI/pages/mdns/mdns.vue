<style scoped src="@/onekit/onekit.css"></style>
<style scoped="scoped" src="./mdns.css"></style>
<script src="./mdns.js"></script>
<template>
<onekit-page>
<import src="../../../common/head.vue"/>
<import src="../../../common/foot.vue"/>

<onekit-view class="container">
  
  <onekit-view class="page-body">
    <onekit-view class="page-section">
      <onekit-button type="primary" @:tap="startDiscovery">
        开始搜索 mDNS
      </onekit-button>
      <onekit-button type="primary" @:tap="stopDiscovery">
        停止搜索 mDNS
      </onekit-button>
      <onekit-view>
        <onekit-view v-for="(item,index) in serviceList" class="row">
          <onekit-text>设备服务名：{{item.serviceName}}</onekit-text>
          <onekit-text>ip地址：{{item.ip}}:{{item.port}}</onekit-text>
          <onekit-text>当前服务类型：{{item.serviceType}}</onekit-text>
        </onekit-view>
      </onekit-view>
    </onekit-view>
  </onekit-view>
</onekit-view>
</onekit-page>
</template>