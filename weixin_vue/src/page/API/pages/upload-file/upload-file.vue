<style scoped src="@/onekit/OneKit.css"></style>
<style scoped="scoped" src="./upload-file.css"></style>
<script src="./upload-file.js"></script>
<template>
<onekit-page>



<onekit-view class="container">
  

  <onekit-view class="page-body">
    <onekit-view class="page-section">
      <onekit-view class="page-body-info">

        <template v-if="imageSrc">
          <onekit-image :src="imageSrc" class="image" mode="aspectFit"></onekit-image>
        </template>

        <template v-else>
          <onekit-view class="image-plus image-plus-nb" @tap="chooseImage">
            <onekit-view class="image-plus-horizontal"></onekit-view>
            <onekit-view class="image-plus-vertical"></onekit-view>
          </onekit-view>
          <onekit-view class="image-plus-text">选择图片</onekit-view>
        </template>

      </onekit-view>
    </onekit-view>
  </onekit-view>

  
</onekit-view>
</onekit-page>
</template>