<style scoped src="@/onekit/OneKit.css"></style>
<style scoped="scoped" src="./upload-file.css"></style>
<script src="./upload-file.js"></script>
<template>
<onekit-page>



<onekit-view class="container">
  

  <onekit-view class="page-body">
    <onekit-view class="page-section">
      <template v-if="fileUploaded">
        <onekit-view class="weui-cells weui-cells_after-title">
          <onekit-view class="weui-cell weui-cell_input">
            <onekit-view class="weui-cell__hd">
              <onekit-view class="weui-label">文件 ID</onekit-view>
            </onekit-view>
            <onekit-view class="weui-cell__bd">
              <onekit-textarea class="weui-textarea" :value="fileId" style="height: 3.3em" disabled=""></onekit-textarea>
            </onekit-view>
          </onekit-view>

          <onekit-view class="weui-cell page-section-ctn">
            <onekit-image :src="filePath" class="image" mode="aspectFit"></onekit-image>
          </onekit-view>
        </onekit-view>

        <onekit-view class="btn-area" v-if="fromOtherPage">
          <onekit-navigator open-type="navigateBack">
            <onekit-button type="primary" size="40">返回</onekit-button>
          </onekit-navigator>
        </onekit-view>
      </template>

      <template v-else>
        <onekit-view class="page-body-info">
          <onekit-view class="image-plus image-plus-nb" @tap="chooseImage">
            <onekit-view class="image-plus-horizontal"></onekit-view>
            <onekit-view class="image-plus-vertical"></onekit-view>
          </onekit-view>
          <onekit-view class="image-plus-text">选择图片</onekit-view>
        </onekit-view>
      </template>
    </onekit-view>
  </onekit-view>

  
</onekit-view>
</onekit-page>
</template>