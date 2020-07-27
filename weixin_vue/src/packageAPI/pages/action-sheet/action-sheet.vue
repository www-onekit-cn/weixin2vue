<style scoped src="@/onekit/OneKit.css"></style>
<style scoped="scoped" src="./action-sheet.css"></style>
<script src="./action-sheet.js"></script>
<template>
<onekit-page>
<import src="../../../common/head.vue"/>
<import src="../../../common/foot.vue"/>

<onekit-view class="container">
  

  <onekit-view class="page-body">
    <onekit-view class="btn-area">
      <onekit-button type="default" @tap="actionSheetTap">弹出action sheet</onekit-button>
    </onekit-view>
  </onekit-view>

  
</onekit-view>
</onekit-page>
</template>