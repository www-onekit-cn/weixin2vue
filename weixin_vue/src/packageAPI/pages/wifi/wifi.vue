<style scoped src="@/onekit/onekit.css"></style>
<style scoped="scoped" src="./wifi.css"></style>
<script src="./wifi.js"></script>
<template>
<onekit-page>
<import src="../../../common/head.vue"/>
<import src="../../../common/foot.vue"/>

<onekit-view class="container">
  

  <onekit-view class="page-body">
    <onekit-view class="page-body-info">
      <onekit-scroll-view class="device-list" scroll-y>
        <onekit-view v-for="(item,index) in wifiList" class="item">
          <onekit-view class="list">
            <onekit-text>{{ item.SSID }}</onekit-text>
            <onekit-span class="wifi-icon">
              <onekit-span class="wifi-1"></onekit-span>
              <onekit-span :class="'wifi-2 '+item.strength < 2 ? "off" : """></onekit-span>
              <onekit-span :class="'wifi-3 '+item.strength < 3 ? "off" : """></onekit-span>
              <onekit-span :class="'wifi-4 '+item.strength < 4 ? "off" : """></onekit-span>
              <onekit-span class="lock" v-if="item.secure"></onekit-span>
            </onekit-span>
          </onekit-view>
        </onekit-view>
      </onekit-scroll-view>
    </onekit-view>
    <onekit-view class="btn-area">
      <onekit-button type="primary" @tap="startSearch">搜索Wi-Fi</onekit-button>
      <onekit-button @tap="stopSearch">停止搜索</onekit-button>
    </onekit-view>
  </onekit-view>

  
</onekit-view>
</onekit-page>
</template>