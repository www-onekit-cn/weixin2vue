<style scoped src="@/onekit/OneKit.css"></style>
<style scoped="scoped" src="./rich-text.css"></style>
<script src="./rich-text.js"></script>
<template>
<onekit-page>
<import src="../../../common/head.vue"/>
<import src="../../../common/foot.vue"/>

<onekit-view class="container">
  

  <onekit-view class="page-body">
    <onekit-view class="page-section">
      <onekit-view class="page-section-title">通过HTML String渲染</onekit-view>
      <onekit-view class="page-content">
        <onekit-scroll-view scroll-y>{{htmlSnip}}</onekit-scroll-view>
        <onekit-button type="primary" @tap="renderHtml">渲染HTML</onekit-button>
        <onekit-block v-if="renderedByHtml">
          <onekit-rich-text :nodes="htmlSnip"></onekit-rich-text>
        </onekit-block>
      </onekit-view>
    </onekit-view>

    <onekit-view class="page-section">
      <onekit-view class="page-section-title">通过节点渲染</onekit-view>
      <onekit-view class="page-content">
        <onekit-scroll-view scroll-y>{{nodeSnip}}</onekit-scroll-view>
        <onekit-button type="primary" @tap="renderNode">渲染Node</onekit-button>
        <onekit-block v-if="renderedByNode">
          <onekit-rich-text :nodes="nodes"></onekit-rich-text>
        </onekit-block>
      </onekit-view>
    </onekit-view>
  </onekit-view>

  
</onekit-view>
</onekit-page>
</template>