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
      <onekit-block v-if="fileUploaded">
        <onekit-view Class="weui-cells weui-cells_after-title">
          <onekit-view Class="weui-cell weui-cell_input">
            <onekit-view Class="weui-cell__hd">
              <onekit-view Class="weui-label">文件 ID</onekit-view>
            </onekit-view>
            <onekit-view Class="weui-cell__bd">
              <onekit-textarea Class="weui-textarea" :value="{{fileId}}" Style="height: 3.3em" disabled></onekit-textarea>
            </onekit-view>
          </onekit-view>

          <onekit-view Class="weui-cell page-section-ctn">
            <onekit-image :src="{{filePath}}" class="image" mode="aspectFit"></onekit-image>
          </onekit-view>
        </onekit-view>

        <onekit-view Class="btn-area" v-if="fromOtherPage">
          <onekit-navigator open-type="navigateBack">
            <onekit-button type="primary" size="40">返回</onekit-button>
          </onekit-navigator>
        </onekit-view>
      </onekit-block>

      <onekit-block v-else>
        <onekit-view Class="page-body-info">
          <onekit-view Class="image-plus image-plus-nb" @tap="chooseImage">
            <onekit-view Class="image-plus-horizontal"></onekit-view>
            <onekit-view Class="image-plus-vertical"></onekit-view>
          </onekit-view>
          <onekit-view Class="image-plus-text">选择图片</onekit-view>
        </onekit-view>
      </onekit-block>
    </onekit-view>
  </onekit-view>

  
</onekit-view>
</onekit-page>
</template>