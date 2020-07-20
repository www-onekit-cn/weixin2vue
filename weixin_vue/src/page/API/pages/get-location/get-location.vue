<style scoped src="@/onekit/OneKit.css"></style>
<style scoped="scoped" src="./get-location.css"></style>
<script src="./get-location.js"></script>
<template>
<onekit-page>



<onekit-view class="container">
  

  <onekit-view class="page-body">
    <onekit-view class="page-section">
      <onekit-view class="page-body-info">
        <onekit-text class="page-body-text-small">当前位置经纬度</onekit-text>
        <template v-if="hasLocation === false">
          <onekit-text class="page-body-text">未获取</onekit-text>
        </template>
        <template v-if="hasLocation === true">
          <onekit-view class="page-body-text-location">
            <onekit-text>E: {{location.longitude[0]}}°{{location.longitude[1]}}′</onekit-text>
            <onekit-text>N: {{location.latitude[0]}}°{{location.latitude[1]}}′</onekit-text>
          </onekit-view>
        </template>
      </onekit-view>
      <onekit-view class="btn-area">
        <onekit-button type="primary" @tap="getLocation">获取位置</onekit-button>
        <onekit-button @tap="clear">清空</onekit-button>
      </onekit-view>
    </onekit-view>
  </onekit-view>

  
</onekit-view>
</onekit-page>
</template>