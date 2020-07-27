<style scoped src="@/onekit/OneKit.css"></style>
<style scoped="scoped" src="./download-file.css"></style>
<script src="./download-file.js"></script>
<template>
<onekit-page>
<import src="../../../common/head.vue"/>
<import src="../../../common/foot.vue"/>

<onekit-view Class="container">
  

  <onekit-view Class="page-body">
    <onekit-image v-if="imageSrc" :src="{{imageSrc}}" mode="center"></onekit-image>
    <onekit-block v-else>
      <onekit-view Class="page-body-wording">
        <onekit-text Class="page-body-text">
          点击按钮下载服务端示例图片
        </onekit-text>
      </onekit-view>
      <onekit-view Class="btn-area">
        <onekit-button @tap="downloadImage" type="primary">下载</onekit-button>
      </onekit-view>
    </onekit-block>
  </onekit-view>

  
</onekit-view>
</onekit-page>
</template>