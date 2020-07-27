<style scoped src="@/onekit/OneKit.css"></style>
<style scoped="scoped" src="./choose-location.css"></style>
<script src="./choose-location.js"></script>
<template>
<onekit-page>
<import src="../../../common/head.vue"/>
<import src="../../../common/foot.vue"/>

<onekit-view Class="container">
  

  <onekit-view Class="page-body">
    <onekit-view Class="page-section">
      <onekit-view Class="page-body-info">
        <onekit-text Class="page-body-text-small">当前位置信息</onekit-text>
        <onekit-block v-if="hasLocation === false">
          <onekit-text Class="page-body-text">未选择位置</onekit-text>
        </onekit-block>
        <onekit-block v-if="hasLocation === true">
          <onekit-text Class="page-body-text">{{locationAddress}}</onekit-text>
          <onekit-view Class="page-body-text-location">
            <onekit-text>E: {{location.longitude[0]}}°{{location.longitude[1]}}′</onekit-text>
            <onekit-text>N: {{location.latitude[0]}}°{{location.latitude[1]}}′</onekit-text>
          </onekit-view>
        </onekit-block>
      </onekit-view>
      <onekit-view Class="btn-area">
        <onekit-button type="primary" @tap="chooseLocation">选择位置</onekit-button>
        <onekit-button @tap="clear">清空</onekit-button>
      </onekit-view>
    </onekit-view>
  </onekit-view>

  
</onekit-view>
</onekit-page>
</template>