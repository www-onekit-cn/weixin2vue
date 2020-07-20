<style scoped src="@/onekit/OneKit.css"></style>
<style scoped="scoped" src="./get-temp-file-url.css"></style>
<script src="./get-temp-file-url.js"></script>
<template>
<onekit-page>



<onekit-view class="container">
  

  <onekit-view class="page-body">
    <onekit-view class="page-section">
      <template v-if="fileTempURLDone">
        <onekit-view class="weui-cells weui-cells_after-title">
          <onekit-view class="weui-cell weui-cell_input">
            <onekit-view class="weui-cell__hd">
              <onekit-view class="weui-label">文件 ID</onekit-view>
            </onekit-view>
            <onekit-view class="weui-cell__bd">
              <onekit-textarea class="weui-textarea" :value="fileId" style="height: 3.3em" disabled=""></onekit-textarea>
            </onekit-view>
          </onekit-view>

          <onekit-view class="weui-cell weui-cell_input">
            <onekit-view class="weui-cell__hd">
              <onekit-view class="weui-label">临时链接</onekit-view>
            </onekit-view>
            <onekit-view class="weui-cell__bd">
              <onekit-textarea class="weui-textarea" :value="tempFileURL" style="height: 3.3em" disabled=""></onekit-textarea>
            </onekit-view>
          </onekit-view>

          <onekit-view class="weui-cell">
            <onekit-view class="page-section-ctn">
              <onekit-image :src="tempFileURL" class="image" mode="aspectFit"></onekit-image>
            </onekit-view>
          </onekit-view>
        </onekit-view>
        
      </template>

      <template v-else>
        <onekit-view class="weui-cells__title">点击按钮即可根据文件 ID 换取临时网络链接</onekit-view>
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
          <onekit-button type="primary" size="40" @tap="getTempFileURL" :loading="loading">换取临时链接</onekit-button>
        </onekit-view>
      </template>
    </onekit-view>
  </onekit-view>

  
</onekit-view>
</onekit-page>
</template>