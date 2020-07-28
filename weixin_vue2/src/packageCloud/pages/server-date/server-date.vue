<style scoped src="@/onekit/OneKit.css"></style>
<style scoped="scoped" src="./server-date.css"></style>
<script src="./server-date.js"></script>
<template>
<onekit-page>
<import src="../../../common/head.vue"/>
<import src="../../../common/foot.vue"/>

<onekit-view class="container">
  

  <onekit-view class="page-body" v-if="openid">
    <onekit-view class="page-section">
      <onekit-view class="page-body-info">
        <onekit-view class="page-body-title">服务端时间</onekit-view>
        <onekit-block v-if="!serverDate">
          <onekit-text class="page-body-text">很多时候我们希望记录数据的创建时间</onekit-text>
          <onekit-text class="page-body-text">在小程序端使用 Date 对象创建的是客户端时间（可被任意修改），而非服务端时间</onekit-text>
          <onekit-text class="page-body-text">这时可以使用云开发提供的 serverDate 对象，在请求被处理时会自动转换成服务端时间</onekit-text>
        </onekit-block>
        <onekit-block v-else>
          <onekit-block>
            <onekit-text class="page-body-text">客户端时间</onekit-text>
            <onekit-text class="context-value">{{clientDateFormatted}}</onekit-text>
          </onekit-block>
          <onekit-block>
            <onekit-text class="page-body-text">服务端时间</onekit-text>
            <onekit-text class="context-value">{{serverDateFormatted}}</onekit-text>
          </onekit-block>
          <onekit-block>
            <onekit-text class="page-body-text">时间差距</onekit-text>
            <onekit-text class="context-value">{{delta}} 毫秒</onekit-text>
          </onekit-block>
        </onekit-block>
      </onekit-view>
      <onekit-view class="btn-area">
        <onekit-button type="primary" @tap="insertData" :loading="loading">插入数据</onekit-button>
      </onekit-view>
    </onekit-view>
  </onekit-view>

  
</onekit-view>
</onekit-page>
</template>