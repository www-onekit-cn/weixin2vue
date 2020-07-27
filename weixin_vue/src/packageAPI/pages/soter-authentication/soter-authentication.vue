<style scoped src="@/onekit/OneKit.css"></style>
<style scoped="scoped" src="./soter-authentication.css"></style>
<script src="./soter-authentication.js"></script>
<template>
<onekit-page>
<import src="../../../common/head.vue"/>
<import src="../../../common/foot.vue"/>

<onekit-view class="container">
  

  <onekit-view class="page-body">
    <onekit-view class="btn-area">
      <onekit-button type="primary" data-mode="fingerPrint" @tap="startAuth">指纹认证</onekit-button>
    </onekit-view>
     <onekit-view class="btn-area">
      <onekit-button type="primary" data-mode="facial" @tap="startAuth">人脸认证</onekit-button>
    </onekit-view>
  </onekit-view>

  
</onekit-view>
</onekit-page>
</template>