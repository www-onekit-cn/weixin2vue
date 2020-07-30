<style scoped src="@/onekit/onekit.css"></style>
<style scoped="scoped" src="./request.css"></style>
<script src="./request.js"></script>
<template>
<onekit-page>
<import src="../../../common/head.vue"/>
<import src="../../../common/foot.vue"/>

<onekit-view class="container">
  

  <onekit-view class="page-body">
    <onekit-view class="page-body-wording">
      <onekit-text class="page-body-text">
        点击向服务器发起请求
      </onekit-text>
    </onekit-view>
    <onekit-view class="btn-area">
      <onekit-button @tap="makeRequest" type="primary" :disabled="buttonDisabled" :loading="loading">request</onekit-button>
    </onekit-view>
  </onekit-view>

  
</onekit-view>
</onekit-page>
</template>