<style scoped src="@/onekit/OneKit.css"></style>
<style scoped="scoped" src="./bluetooth.css"></style>
<script src="./bluetooth.js"></script>
<template>
<onekit-page>
<import src="../../../common/head.vue"/>
<import src="../../../common/foot.vue"/>

null
<onekit-view Class="container">
  
  <onekit-view Class="page-body">
    <onekit-view Class="page-section">
      <onekit-view Class="page-body-info">
        <onekit-view Class="devices_summary">已发现 {{devices.length}} 个外围设备：</onekit-view>
        <onekit-scroll-view Class="device_list" scroll-y scroll-with-animation>
          <onekit-view v-for="(item,index) in devices" :data-device-id="{{item.deviceId}}" :data-name="{{item.name || item.localName}}" @tap="createBLEConnection" Class="device_item" hover-class="device_item_hover">
            <onekit-view Style="font-size: 16px;">{{item.name}}</onekit-view>
            <onekit-view Style="font-size: 10px">信号强度: {{item.RSSI}}dBm ({{utils.max(0, item.RSSI + 100)}}%)</onekit-view>
            <onekit-view Style="font-size: 10px">UUID: {{item.deviceId}}</onekit-view>
            <onekit-view Style="font-size: 10px">Service数量: {{utils.len(item.advertisServiceUUIDs)}}</onekit-view>
          </onekit-view>
        </onekit-scroll-view>
      </onekit-view>

      <onekit-view Class="btn-area">
        <onekit-button type="primary" @tap="openBluetoothAdapter">开始扫描</onekit-button>
        <onekit-button @tap="stopBluetoothDevicesDiscovery">停止扫描</onekit-button>
      </onekit-view>
       <onekit-view Class="btn-area">
        <onekit-button type="primary" @:tap="changeMode">
          进去从机模式
        </onekit-button>
       </onekit-view>
    </onekit-view>
  </onekit-view>

  <onekit-view Class="connected_info" v-if="connected">
    <onekit-view>
      <onekit-text>已连接到 {{name}}</onekit-text>
      <onekit-view Class="operation">
      <onekit-button v-if="canWrite" size="mini" @tap="writeBLECharacteristicValue">写数据</onekit-button>
      <onekit-button size="mini" @tap="closeBLEConnection">断开连接</onekit-button>
      </onekit-view>
    </onekit-view>
    <onekit-view v-for="(item,index) in chs" Style="font-size: 12px; margin-top: 10px;">
      <onekit-view>特性UUID: {{item.uuid}}</onekit-view>
      <onekit-view>特性值: {{item.value}}</onekit-view>
    </onekit-view>
  </onekit-view>
  
</onekit-view>
</onekit-page>
</template>