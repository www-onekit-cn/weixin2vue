<style scoped src="@/onekit/onekit.css"></style>
<style scoped="scoped" src="./toast.css"></style>
<script src="./toast.js"></script>
<template>
<onekit-page>
<import src="../../../common/head.vue"/>
<import src="../../../common/foot.vue"/>

<onekit-view class="container">
  

  <onekit-view class="page-body">
    <onekit-view class="btn-area">
      <onekit-view class="body-view">
        <onekit-button type="default" @tap="toast1Tap">点击弹出默认toast</onekit-button>
      </onekit-view>
      <onekit-view class="body-view">
        <onekit-button type="default" @tap="toast2Tap">点击弹出设置duration的toast</onekit-button>
      </onekit-view>
      <onekit-view class="body-view">
        <onekit-button type="default" @tap="toast3Tap">点击弹出显示loading的toast</onekit-button>
      </onekit-view>
      <onekit-view class="body-view">
        <onekit-button type="default" @tap="hideToast">点击隐藏toast</onekit-button>
      </onekit-view>
    </onekit-view>
  </onekit-view>

  
</onekit-view>
</onekit-page>
</template>