<style scoped src="@/onekit/onekit.css"></style>
<style scoped="scoped" src="./image.css"></style>
<script src="./image.js"></script>
<template>
<onekit-page>
<import src="../../../common/head.vue"/>
<import src="../../../common/foot.vue"/>

<onekit-view class="container">
  

  <onekit-view class="page-body">
    <onekit-view class="page-section page-section-gap">
      <onekit-view class="page-section-title">Local Image</onekit-view>
      <onekit-view class="page-section-ctn">
        <onekit-image class="image" src="../../resources/pic/1.jpg"></onekit-image>
      </onekit-view>
    </onekit-view>
    <onekit-view class="page-section page-section-gap">
      <onekit-view class="page-section-title">Internet Image</onekit-view>
      <onekit-view class="page-section-ctn">
        <onekit-image class="image" :src="imageUrl"></onekit-image>
      </onekit-view>
    </onekit-view>
     <onekit-view class="page-section page-section-gap">
      <onekit-view class="page-section-title">Webp Image</onekit-view>
      <onekit-view class="page-section-ctn">
        <onekit-image class="image" webp :src="webpImageUrl" mode="aspectFit"></onekit-image>
      </onekit-view>
    </onekit-view>
  </onekit-view>

  
</onekit-view>
</onekit-page>
</template>