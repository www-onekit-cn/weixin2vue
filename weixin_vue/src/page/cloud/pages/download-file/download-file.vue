<style scoped src="@/onekit/OneKit.css"></style>
<style scoped="scoped" src="./download-file.css"></style>
<script src="./download-file.js"></script>
<template>
<onekit-page>



<onekit-view class="container">
  

  <onekit-view class="page-body">
    <onekit-view class="page-section">
      <template v-if="fileDownloaded">
        <onekit-view class="weui-cells weui-cells_after-title">
          <onekit-view class="weui-cell weui-cell_input">
            <onekit-view class="weui-cell__hd">
              <onekit-view class="weui-label">文件 ID</onekit-view>
            </onekit-view>
            <onekit-view class="weui-cell__bd">
              <onekit-textarea class="weui-textarea" :value="fileId" style="height: 3.3em" disabled=""></onekit-textarea>
            </onekit-view>
          </onekit-view>

          <onekit-view class="weui-cell">
            <onekit-view class="page-section-ctn">
              <onekit-image :src="filePath" class="image" mode="aspectFit"></onekit-image>
            </onekit-view>
          </onekit-view>
        </onekit-view>
        
      </template>

      <template v-else>
        <onekit-view class="weui-cells__title">点击按钮即可从云端存储下载指定云文件</onekit-view>
        <onekit-view class="weui-cells weui-cells_after-title">
          <onekit-view class="weui-cell weui-cell_input">
            <onekit-view class="weui-cell__hd">
              <onekit-view class="weui-label">文件 ID</onekit-view>
            </onekit-view>
            <onekit-view class="weui-cell__bd">
              <onekit-textarea class="weui-textarea" :value="fileId" style="height: 3.3em" disabled=""></onekit-textarea>
            </onekit-view>
          </onekit-view>
        </onekit-view>

        <onekit-view class="btn-area">
          <onekit-button type="primary" size="40" @tap="downloadFile" :loading="loading">下载文件</onekit-button>
        </onekit-view>
      </template>
    </onekit-view>
  </onekit-view>

  
</onekit-view>
</onekit-page>
</template>