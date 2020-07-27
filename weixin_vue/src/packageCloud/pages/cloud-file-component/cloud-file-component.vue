<style scoped src="@/onekit/OneKit.css"></style>
<style scoped="scoped" src="./cloud-file-component.css"></style>
<script src="./cloud-file-component.js"></script>
<template>
<onekit-page>
<import src="../../../common/head.vue"/>
<import src="../../../common/foot.vue"/>

<onekit-view class="container">
  

  <onekit-view class="page-body">
    <onekit-view class="page-section">
      <onekit-view class="weui-cells__title">小程序组件支持传入云文件 ID</onekit-view>
      <onekit-view class="weui-cells weui-cells_after-title">
        <onekit-view class="weui-cell weui-cell_input">
          <onekit-view class="weui-cell__hd">
            <onekit-view class="weui-label">文件 ID</onekit-view>
          </onekit-view>
          <onekit-view class="weui-cell__bd">
            <onekit-textarea class="weui-textarea" :value="{{imageFileId}}" style="height: 3.3em" disabled></onekit-textarea>
          </onekit-view>
        </onekit-view>

        <onekit-view class="weui-cell">
          <onekit-view class="page-section-ctn">
            <onekit-image :src="{{imageFileId}}" class="image" mode="aspectFit"></onekit-image>
          </onekit-view>
        </onekit-view>
      </onekit-view>

      <onekit-view class="weui-cells__title"></onekit-view>
      <onekit-view class="weui-cells weui-cells_after-title">
        <onekit-view class="weui-cell weui-cell_input">
          <onekit-view class="weui-cell__hd">
            <onekit-view class="weui-label">文件 ID</onekit-view>
          </onekit-view>
          <onekit-view class="weui-cell__bd">
            <onekit-textarea class="weui-textarea" :value="{{videoFileId}}" style="height: 3.3em" disabled></onekit-textarea>
          </onekit-view>
        </onekit-view>

        <onekit-view class="weui-cell">
          <onekit-view class="page-section-ctn">
            <onekit-video :src="{{videoFileId}}" :show-center-play-btn="{{false}}"></onekit-video>
          </onekit-view>
        </onekit-view>
      </onekit-view>
    </onekit-view>
  </onekit-view>

  
</onekit-view>
</onekit-page>
</template>