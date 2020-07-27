<style scoped src="@/onekit/OneKit.css"></style>
<style scoped="scoped" src="./cloud-file-component.css"></style>
<script src="./cloud-file-component.js"></script>
<template>
<onekit-page>
<import src="../../../common/head.vue"/>
<import src="../../../common/foot.vue"/>

<onekit-view Class="container">
  

  <onekit-view Class="page-body">
    <onekit-view Class="page-section">
      <onekit-view Class="weui-cells__title">小程序组件支持传入云文件 ID</onekit-view>
      <onekit-view Class="weui-cells weui-cells_after-title">
        <onekit-view Class="weui-cell weui-cell_input">
          <onekit-view Class="weui-cell__hd">
            <onekit-view Class="weui-label">文件 ID</onekit-view>
          </onekit-view>
          <onekit-view Class="weui-cell__bd">
            <onekit-textarea Class="weui-textarea" :value="{{imageFileId}}" Style="height: 3.3em" disabled></onekit-textarea>
          </onekit-view>
        </onekit-view>

        <onekit-view Class="weui-cell">
          <onekit-view Class="page-section-ctn">
            <onekit-image :src="{{imageFileId}}" class="image" mode="aspectFit"></onekit-image>
          </onekit-view>
        </onekit-view>
      </onekit-view>

      <onekit-view Class="weui-cells__title"></onekit-view>
      <onekit-view Class="weui-cells weui-cells_after-title">
        <onekit-view Class="weui-cell weui-cell_input">
          <onekit-view Class="weui-cell__hd">
            <onekit-view Class="weui-label">文件 ID</onekit-view>
          </onekit-view>
          <onekit-view Class="weui-cell__bd">
            <onekit-textarea Class="weui-textarea" :value="{{videoFileId}}" Style="height: 3.3em" disabled></onekit-textarea>
          </onekit-view>
        </onekit-view>

        <onekit-view Class="weui-cell">
          <onekit-view Class="page-section-ctn">
            <onekit-video :src="{{videoFileId}}" :show-center-play-btn="{{false}}"></onekit-video>
          </onekit-view>
        </onekit-view>
      </onekit-view>
    </onekit-view>
  </onekit-view>

  
</onekit-view>
</onekit-page>
</template>