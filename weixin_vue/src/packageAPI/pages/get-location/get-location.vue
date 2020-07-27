<style scoped src="@/onekit/OneKit.css"></style>
<style scoped="scoped" src="./get-location.css"></style>
<script src="./get-location.js"></script>
<template>
<onekit-page>
<import src="../../../common/head.vue"/>
<import src="../../../common/foot.vue"/>

<onekit-view Class="container">
  

  <onekit-view Class="page-body">
    <onekit-view Class="page-section">
      <onekit-view Class="page-body-info">
        <onekit-text Class="page-body-text-small">当前位置经纬度</onekit-text>
        <onekit-block v-if="hasLocation === false">
          <onekit-text Class="page-body-text">未获取</onekit-text>
        </onekit-block>
        <onekit-block v-if="hasLocation === true">
          <onekit-view Class="page-body-text-location">
            <onekit-text>E: {{location.longitude[0]}}°{{location.longitude[1]}}′</onekit-text>
            <onekit-text>N: {{location.latitude[0]}}°{{location.latitude[1]}}′</onekit-text>
          </onekit-view>
        </onekit-block>
      </onekit-view>
      <onekit-view Class="btn-area">
        <onekit-button type="primary" @tap="getLocation">获取位置</onekit-button>
        <onekit-button @tap="clear">清空</onekit-button>
      </onekit-view>
    </onekit-view>
  </onekit-view>

  
</onekit-view>
</onekit-page>
</template>