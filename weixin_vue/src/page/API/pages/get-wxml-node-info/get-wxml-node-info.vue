<style scoped src="@/onekit/OneKit.css"></style>
<style scoped="scoped" src="./get-wxml-node-info.css"></style>
<script src="./get-wxml-node-info.js"></script>
<template>
<onekit-page>



<onekit-view class="container">
  

  <onekit-view class="page-body">
    <onekit-view class="page-section">
      <onekit-movable-area>
        <onekit-movable-view class="target" :x="x" :y="y" direction="all" @change="getNodeInfo">
          Drag
        </onekit-movable-view>
      </onekit-movable-area>
    </onekit-view>

    <onekit-view class="page-section">
      <onekit-view class="metric">
        <onekit-view v-for="(item,key) in  metrics ">
          <onekit-text class="b">{{ item.key }}</onekit-text>
          <onekit-text class="span">{{ item.val }}</onekit-text>
        </onekit-view>
      </onekit-view>
    </onekit-view>
  </onekit-view>

  
</onekit-view>
</onekit-page>
</template>