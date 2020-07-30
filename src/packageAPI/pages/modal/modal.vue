<style scoped src="@/onekit/onekit.css"></style>
<style scoped="scoped" src="./modal.css"></style>
<script src="./modal.js"></script>
<template>
<onekit-page>
<import src="../../../common/head.vue"/>
<import src="../../../common/foot.vue"/>

<onekit-view class="container">
  

  <onekit-view class="page-body">
    <onekit-view class="btn-area">
      <onekit-button type="default" @tap="modalTap">有标题的modal</onekit-button>
      <onekit-button type="default" @tap="noTitlemodalTap">无标题的modal</onekit-button>
    </onekit-view>
  </onekit-view>

  
</onekit-view>
</onekit-page>
</template>