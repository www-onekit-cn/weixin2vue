<style scoped src="@/onekit/OneKit.css"></style>
<style scoped="scoped" src="./scf-storage.css"></style>
<script src="./scf-storage.js"></script>
<template>
<onekit-page>
<import src="../../../common/head.vue"/>
<import src="../../../common/foot.vue"/>

<onekit-view Class="container">
  

  <onekit-view Class="page-body">
    <onekit-view Class="page-section">
      <onekit-block v-if="fileTempURLDone">
        <onekit-view Class="weui-cells weui-cells_after-title">
          <onekit-view Class="weui-cell weui-cell_input">
            <onekit-view Class="weui-cell__hd">
              <onekit-view Class="weui-label">文件 ID</onekit-view>
            </onekit-view>
            <onekit-view Class="weui-cell__bd">
              <onekit-textarea Class="weui-textarea" :value="{{fileId}}" Style="height: 3.3em" disabled></onekit-textarea>
            </onekit-view>
          </onekit-view>

          <onekit-view Class="weui-cell weui-cell_input">
            <onekit-view Class="weui-cell__hd">
              <onekit-view Class="weui-label">临时链接</onekit-view>
            </onekit-view>
            <onekit-view Class="weui-cell__bd">
              <onekit-textarea Class="weui-textarea" :value="{{tempFileURL}}" Style="height: 3.3em" disabled></onekit-textarea>
            </onekit-view>
          </onekit-view>

          <onekit-view Class="weui-cell">
            <onekit-view Class="page-section-ctn">
              <onekit-image :src="{{tempFileURL}}" class="image" mode="aspectFit"></onekit-image>
            </onekit-view>
          </onekit-view>
        </onekit-view>
        
      </onekit-block>

      <onekit-block v-else>
        <onekit-view Class="weui-cells__title">云函数亦可操作文件存储，点击按钮换取临时链接</onekit-view>
        <onekit-view Class="weui-cells weui-cells_after-title">
          <onekit-view Class="weui-cell weui-cell_input">
            <onekit-view Class="weui-cell__hd">
              <onekit-view Class="weui-label">文件 ID</onekit-view>
            </onekit-view>
            <onekit-view Class="weui-cell__bd">
              <onekit-textarea Class="weui-textarea" :value="{{fileId}}" Style="height: 3.3em" disabled></onekit-textarea>
            </onekit-view>
          </onekit-view>
        </onekit-view>

        <onekit-view Class="btn-area">
          <onekit-button type="primary" size="40" @tap="getTempFileURL" :loading="{{loading}}">通过云函数换取临时链接</onekit-button>
        </onekit-view>
      </onekit-block>
    </onekit-view>
  </onekit-view>

  
</onekit-view>
</onekit-page>
</template>