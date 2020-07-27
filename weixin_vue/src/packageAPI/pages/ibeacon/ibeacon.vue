<style scoped src="@/onekit/OneKit.css"></style>
<style scoped="scoped" src="./ibeacon.css"></style>
<script src="./ibeacon.js"></script>
<template>
<onekit-page>
<import src="../../../common/head.vue"/>
<import src="../../../common/foot.vue"/>

<onekit-view Class="container">
  

  <onekit-view Class="page-body">
    <onekit-view Class="page-section">
      <onekit-view Class="weui-cells__title">输入iBeacon设备广播的UUID</onekit-view>
      <onekit-view Class="weui-cells weui-cells_after-title">
        <onekit-view Class="weui-cell weui-cell_input">
          <onekit-input Class="weui-input" @input="enterUuid"></onekit-input>
        </onekit-view>
      </onekit-view>
    </onekit-view>
    <onekit-view Class="btn-area">
      <onekit-button type="primary" @tap="startSearch">搜索iBeacon</onekit-button>
      <onekit-button @tap="stopSearch">停止搜索</onekit-button>
    </onekit-view>
    <onekit-view Class="page-body-info">
      <onekit-view Class="devices_summary">已发现 {{beacons.length}} 个外围设备：</onekit-view>
      <onekit-scroll-view Class="device_list" scroll-y scroll-with-animation>
        <onekit-view v-for="(item,index) in beacons" Class="device_item" hover-class="device_item_hover">
          <onekit-view Style="font-size: 16px; color: #333;">主ID: {{item.major}} <onekit-text Style="font-size: 12px;">次ID: {{item.minor}}</onekit-text></onekit-view>
          <onekit-view Style="font-size: 10px">信号强度: {{item.rssi}}dBm</onekit-view>
          <onekit-view Style="font-size: 10px">UUID: {{item.uuid}}</onekit-view>
          <onekit-view Style="font-size: 10px">Proximity: {{item.proximity}} Accuracy: {{item.accuracy}}</onekit-view>
        </onekit-view>
      </onekit-scroll-view>
    </onekit-view>
  </onekit-view>

  
</onekit-view>
</onekit-page>
</template>