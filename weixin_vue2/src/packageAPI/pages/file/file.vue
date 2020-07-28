<style scoped src="@/onekit/OneKit.css"></style>
<style scoped="scoped" src="./file.css"></style>
<script src="./file.js"></script>
<template>
<onekit-page>
<import src="../../../common/head.vue"/>
<import src="../../../common/foot.vue"/>

<onekit-view class="container">
  

  <onekit-view class="page-body">
    <onekit-view class="page-section">
      <onekit-view class="page-body-info">
        <onekit-block v-if="tempFilePath != ''">
          <onekit-image :src="tempFilePath" class="image" mode="aspectFit"></onekit-image>
        </onekit-block>
        <onekit-block v-if="tempFilePath === '' && savedFilePath != ''">
          <onekit-image :src="savedFilePath" class="image" mode="aspectFit"></onekit-image>
        </onekit-block>
        <onekit-block v-if="tempFilePath === '' && savedFilePath === ''">
          <onekit-view class="image-plus image-plus-nb" @tap="chooseImage">
            <onekit-view class="image-plus-horizontal"></onekit-view>
            <onekit-view class="image-plus-vertical"></onekit-view>
          </onekit-view>
          <onekit-view class="image-plus-text">请选择文件</onekit-view>
        </onekit-block>
      </onekit-view>
      <onekit-view class="btn-area">
        <onekit-button type="primary" @tap="saveFile">保存文件</onekit-button>
        <onekit-button @tap="clear">删除文件</onekit-button>
      </onekit-view>
    </onekit-view>
  </onekit-view>

  <onekit-modal :title="dialog.title" :hidden="dialog.hidden" no-cancel @confirm="confirm">{{dialog.content}}</onekit-modal>

  
</onekit-view>
</onekit-page>
</template>