<style scoped src="@/onekit/OneKit.css"></style>
<style scoped="scoped" src="./camera.css"></style>
<script src="./camera.js"></script>
<template>
<onekit-page>



<onekit-view class="container">
  

  <onekit-view class="page-body">
    <onekit-view class="page-body-wrapper">
      <onekit-camera flash="off" :device-position="position" @error="error">
      </onekit-camera>
      <onekit-view class="btn-area first-btn">
      <onekit-button type="primary" @tap="togglePosition">切换摄像头</onekit-button>
      </onekit-view>
      <onekit-view class="btn-area">
        <onekit-button type="primary" @tap="takePhoto">拍照</onekit-button>
      </onekit-view>
      <onekit-view class="btn-area">
        <onekit-button type="primary" @tap="startRecord">开始录像</onekit-button>
      </onekit-view>
      <onekit-view class="btn-area">
        <onekit-button type="primary" @tap="stopRecord">结束录像</onekit-button>
      </onekit-view>
      <onekit-view class="btn-area">
        <onekit-navigator url="/page/component/pages/camera-scan-code/camera-scan-code">
          <onekit-button type="primary">扫描一维码</onekit-button>
        </onekit-navigator>
      </onekit-view>
      <onekit-view class="preview-tips">预览</onekit-view>
      <onekit-image v-if="src" mode="widthFix" class="photo" :src="src"></onekit-image>
      <onekit-video v-if="videoSrc" class="video" :src="videoSrc"></onekit-video>
    </onekit-view>
  </onekit-view>

  
</onekit-view>
</onekit-page>
</template>