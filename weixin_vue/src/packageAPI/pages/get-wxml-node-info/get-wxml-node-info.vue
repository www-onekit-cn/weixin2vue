<style scoped src="@/onekit/OneKit.css"></style>
<style scoped="scoped" src="./get-wxml-node-info.css"></style>
<script src="./get-wxml-node-info.js"></script>
<template>
<onekit-page>
<import src="../../../common/head.vue"/>
<import src="../../../common/foot.vue"/>

<onekit-view Class="container">
  

  <onekit-view Class="page-body">
    <onekit-view Class="page-section">
      <onekit-movable-area>
        <onekit-movable-view Class="target" :x="{{x}}" :y="{{y}}" direction="all" @change="getNodeInfo">
          Drag
        </onekit-movable-view>
      </onekit-movable-area>
    </onekit-view>

    <onekit-view Class="page-section">
      <onekit-view Class="metric">
        <onekit-view v-for="(item,key) in  metrics ">
          <onekit-text Class="b">{{ item.key }}</onekit-text>
          <onekit-text Class="span">{{ item.val }}</onekit-text>
        </onekit-view>
      </onekit-view>
    </onekit-view>
  </onekit-view>

  
</onekit-view>
</onekit-page>
</template>