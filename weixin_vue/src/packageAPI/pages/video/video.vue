<style scoped src="@/onekit/OneKit.css"></style>
<style scoped="scoped" src="./video.css"></style>
<script src="./video.js"></script>
<template>
<onekit-page>
<import src="../../../common/head.vue"/>
<import src="../../../common/foot.vue"/>

<onekit-view class="container">
  

  <onekit-view class="page-body">
    <onekit-view class="page-section">
      <onekit-view class="weui-cells weui-cells_after-title">
        <onekit-view class="weui-cell weui-cell_input">
          <onekit-view class="weui-cell__hd">
            <onekit-view class="weui-label">视频来源</onekit-view>
          </onekit-view>
          <onekit-view class="weui-cell__bd">
            <onekit-picker :range="{{sourceType}}" @change="sourceTypeChange" :value="{{sourceTypeIndex}}">
              <onekit-view class="weui-input">{{sourceType[sourceTypeIndex]}}</onekit-view>
            </onekit-picker>
          </onekit-view>
        </onekit-view>
        <onekit-view class="weui-cell weui-cell_input">
          <onekit-view class="weui-cell__hd">
            <onekit-view class="weui-label">摄像头</onekit-view>
          </onekit-view>
          <onekit-view class="weui-cell__bd">
            <onekit-picker :range="{{camera}}" @change="cameraChange" :value="{{cameraIndex}}">
              <onekit-view class="weui-input">{{camera[cameraIndex]}}</onekit-view>
            </onekit-picker>
          </onekit-view>
        </onekit-view>
        <onekit-view class="weui-cell weui-cell_input">
          <onekit-view class="weui-cell__hd">
            <onekit-view class="weui-label">拍摄长度</onekit-view>
          </onekit-view>
          <onekit-view class="weui-cell__bd">
            <onekit-picker :range="{{duration}}" @change="durationChange" :value="{{durationIndex}}">
              <onekit-view class="weui-input">{{duration[durationIndex]}}</onekit-view>
            </onekit-picker>
          </onekit-view>
        </onekit-view>
      </onekit-view>

      <onekit-view class="page-body-info">
        <onekit-block v-if="src === ''">
          <onekit-view class="image-plus image-plus-nb" @tap="chooseVideo">
            <onekit-view class="image-plus-horizontal"></onekit-view>
            <onekit-view class="image-plus-vertical"></onekit-view>
          </onekit-view>
          <onekit-view class="image-plus-text">添加视频</onekit-view>
        </onekit-block>
        <onekit-block v-if="src != ''">
          <onekit-video :src="{{src}}" Class="video"></onekit-video>
        </onekit-block>
      </onekit-view>
    </onekit-view>
  </onekit-view>
</onekit-view>
</onekit-page>
</template>