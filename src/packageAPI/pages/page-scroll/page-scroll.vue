<style scoped src="@/onekit/onekit.css"></style>
<style scoped="scoped" src="./page-scroll.css"></style>
<script src="./page-scroll.js"></script>
<template>
<onekit-page>
<import src="../../../common/head.vue"/>
<import src="../../../common/foot.vue"/>

<onekit-view class="container">
  

  <onekit-view class="page-body">
    <onekit-view class="page-section">
      <onekit-view class="btn-area">
        <onekit-button type="primary" @tap="scrollToBottom">滚动到页面底部</onekit-button>
      </onekit-view>
      <onekit-view class="filling-area"></onekit-view>
      <onekit-view class="btn-area">
        <onekit-button type="primary" @tap="scrollToTop">返回顶部</onekit-button>
      </onekit-view>
    </onekit-view>
  </onekit-view>

  
</onekit-view>
</onekit-page>
</template>