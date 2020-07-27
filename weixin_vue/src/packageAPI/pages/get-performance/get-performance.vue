<style scoped src="@/onekit/OneKit.css"></style>
<style scoped="scoped" src="./get-performance.css"></style>
<script src="./get-performance.js"></script>
<template>
<onekit-page>

<import src="../../../common/head.vue"/>
<import src="../../../common/foot.vue"/>

<onekit-view Class="container">
  
  <onekit-block v-if="support">
    <onekit-button type="primary" @:tap="getPerformanceInfo">
      获取性能数据
    </onekit-button>
    <onekit-view Class="page-section">
      <onekit-view v-for="(item) in array" Class="performance-list">
        <onekit-view Class="performance-item">
          <onekit-view>{{item.entryType}}：{{item.name}}</onekit-view>
          <onekit-view v-if="item.duration">耗时：{{item.duration}}</onekit-view>
          <onekit-view v-if="item.startTime">时间：{{item.startTime}}</onekit-view>
        </onekit-view>
      </onekit-view>
    </onekit-view>
  </onekit-block>
  <onekit-view Style="text-align: center" v-else>
    微信版本过低，暂不支持本功能
  </onekit-view>

  
</onekit-view>
</onekit-page>
</template>