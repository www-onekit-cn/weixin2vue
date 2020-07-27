<style scoped src="@/onekit/OneKit.css"></style>
<style scoped="scoped" src="./text.css"></style>
<script src="./text.js"></script>
<template>
<onekit-page>
<import src="../../../common/head.vue"/>
<import src="../../../common/foot.vue"/>

<onekit-view Class="container">
  

  <onekit-view Class="page-body">
    <onekit-view Class="page-section page-section-spacing">
      <onekit-view Class="text-box" scroll-y="true" :scroll-top="{{scrollTop}}">
        <onekit-text>{{text}}</onekit-text>
      </onekit-view>
      <onekit-button :disabled="{{!canAdd}}" @tap="add">add line</onekit-button>
      <onekit-button :disabled="{{!canRemove}}" @tap="remove">remove line</onekit-button>
    </onekit-view>
  </onekit-view>

  
</onekit-view>
</onekit-page>
</template>