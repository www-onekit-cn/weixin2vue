<style scoped src="@/onekit/onekit.css"></style>
<style scoped="scoped" src="./delete-file.css"></style>
<script src="./delete-file.js"></script>
<template>
<onekit-page>
<import src="../../../common/head.vue"/>
<import src="../../../common/foot.vue"/>

<onekit-view class="container">
  

  <onekit-view class="page-body">
    <onekit-view class="page-section">
      <onekit-block v-if="!fileId">
        <onekit-view class="page-section-ctn">
          <onekit-text class="page-body-text">还未上传过文件，请先点击按钮上传</onekit-text>
        </onekit-view>
        
        <onekit-view class="btn-area">
          <onekit-navigator url="/page/cloud/pages/upload-file/upload-file?from=delete-file">
            <onekit-button type="primary" size="40">上传文件</onekit-button>
          </onekit-navigator>
        </onekit-view>
      </onekit-block>

      <onekit-block v-else>
        <onekit-view class="weui-cells__title">点击按钮即可删除指定文件</onekit-view>
        <onekit-view class="weui-cells weui-cells_after-title">
          <onekit-view class="weui-cell weui-cell_input">
            <onekit-view class="weui-cell__hd">
              <onekit-view class="weui-label">文件 ID</onekit-view>
            </onekit-view>
            <onekit-view class="weui-cell__bd">
              <onekit-textarea class="weui-textarea" :value="fileId" style="height: 3.3em" disabled></onekit-textarea>
            </onekit-view>
          </onekit-view>
        </onekit-view>

        <onekit-view class="btn-area">
          <onekit-button type="primary" size="40" @tap="deleteFile" :loading="loading">删除文件</onekit-button>
        </onekit-view>
      </onekit-block>
    </onekit-view>
  </onekit-view>

  
</onekit-view>
</onekit-page>
</template>