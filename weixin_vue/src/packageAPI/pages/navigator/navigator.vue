<style scoped src="@/onekit/onekit.css"></style>
<style scoped="scoped" src="./navigator.css"></style>
<script src="./navigator.js"></script>
<template>
<onekit-page>
<import src="../../../common/head.vue"/>
<import src="../../../common/foot.vue"/>

<onekit-view class="container">
  

  <onekit-view class="page-body">
    <onekit-view class="btn-area">
      <onekit-button @tap="navigateTo">跳转新页面</onekit-button>
      <onekit-button @tap="navigateBack">返回上一页</onekit-button>
      <onekit-button @tap="redirectTo">在当前页面打开</onekit-button>
      <onekit-button @tap="switchTab">跳转到组件Tab页</onekit-button>
      <onekit-button @tap="reLaunch">关闭所有页面并跳转</onekit-button>
    </onekit-view>
  </onekit-view>

  
</onekit-view>
</onekit-page>
</template>