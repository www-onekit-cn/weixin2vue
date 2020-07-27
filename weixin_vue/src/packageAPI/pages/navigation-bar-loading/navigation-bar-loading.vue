<style scoped src="@/onekit/OneKit.css"></style>
<style scoped="scoped" src="./navigation-bar-loading.css"></style>
<script src="./navigation-bar-loading.js"></script>
<template>
<onekit-page>
<import src="../../../common/head.vue"/>
<import src="../../../common/foot.vue"/>

<onekit-view Class="container">
  

  <onekit-view Class="page-body">
    <onekit-view Class="btn-area">
      <onekit-button type="primary" @tap="showNavigationBarLoading">显示加载动画</onekit-button>
      <onekit-button @tap="hideNavigationBarLoading">隐藏加载动画</onekit-button>
    </onekit-view>
  </onekit-view>

  
</onekit-view>
</onekit-page>
</template>