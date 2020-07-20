<style scoped src="@/onekit/OneKit.css"></style>
<style scoped="scoped" src="./file.css"></style>
<script src="./file.js"></script>
<template>
<onekit-page>



<onekit-view class="container">
  

  <onekit-view class="page-body">
    <onekit-view class="page-section">
      <onekit-view class="page-body-info">
        <template v-if="tempFilePath != ''">
          <onekit-image :src="tempFilePath" class="image" mode="aspectFit"></onekit-image>
        </template>
        <template v-if="tempFilePath === '' && savedFilePath != ''">
          <onekit-image :src="savedFilePath" class="image" mode="aspectFit"></onekit-image>
        </template>
        <template v-if="tempFilePath === '' && savedFilePath === ''">
          <onekit-view class="image-plus image-plus-nb" @tap="chooseImage">
            <onekit-view class="image-plus-horizontal"></onekit-view>
            <onekit-view class="image-plus-vertical"></onekit-view>
          </onekit-view>
          <onekit-view class="image-plus-text">请选择文件</onekit-view>
        </template>
      </onekit-view>
      <onekit-view class="btn-area">
        <onekit-button type="primary" @tap="saveFile">保存文件</onekit-button>
        <onekit-button @tap="clear">删除文件</onekit-button>
      </onekit-view>
    </onekit-view>
  </onekit-view>

  <modal :title="dialog.title" :hidden="dialog.hidden" no-cancel="" @confirm="confirm">{{dialog.content}}</modal>

  
</onekit-view>
</onekit-page>
</template>