<style scoped src="@/onekit/OneKit.css"></style>
<style scoped="scoped" src="./upload-file.css"></style>
<script src="./upload-file.js"></script>
<template>
<onekit-page>
<import src="../../../common/head.vue"/>
<import src="../../../common/foot.vue"/>

<onekit-view Class="container">
  

  <onekit-view Class="page-body">
    <onekit-view Class="page-section">
      <onekit-view Class="page-body-info">

        <onekit-block v-if="imageSrc">
          <onekit-image :src="{{imageSrc}}" class="image" mode="aspectFit"></onekit-image>
        </onekit-block>

        <onekit-block v-else>
          <onekit-view Class="image-plus image-plus-nb" @tap="chooseImage">
            <onekit-view Class="image-plus-horizontal"></onekit-view>
            <onekit-view Class="image-plus-vertical"></onekit-view>
          </onekit-view>
          <onekit-view Class="image-plus-text">选择图片</onekit-view>
        </onekit-block>

      </onekit-view>
    </onekit-view>
  </onekit-view>

  
</onekit-view>
</onekit-page>
</template>