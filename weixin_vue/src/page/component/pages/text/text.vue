<style scoped src="@/onekit/OneKit.css"></style>
<style scoped="scoped" src="./text.css"></style>
<script src="./text.js"></script>
<template>
<onekit-page>
<import src="../../../common/head.vue"/>
<import src="../../../common/foot.vue"/>

<onekit-view class="container">
  

  <onekit-view class="page-body">
    <onekit-view class="page-section page-section-spacing">
      <onekit-view class="text-box" scroll-y="true" :scroll-top="{{scrollTop}}">
        <onekit-text>{{text}}</onekit-text>
      </onekit-view>
      <onekit-button :disabled="{{!canAdd}}" @tap="add">add line</onekit-button>
      <onekit-button :disabled="{{!canRemove}}" @tap="remove">remove line</onekit-button>
    </onekit-view>
  </onekit-view>

  
</onekit-view>
</onekit-page>
</template>