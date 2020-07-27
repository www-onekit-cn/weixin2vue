<style scoped src="@/onekit/OneKit.css"></style>
<style scoped="scoped" src="./camera.css"></style>
<script src="./camera.js"></script>
<template>
<onekit-page>
<import src="../../../common/head.vue"/>
<import src="../../../common/foot.vue"/>

<onekit-view class="container">
  

  <onekit-view class="page-body">
    <onekit-view class="page-body-wrapper">
    <onekit-view style="margin-bottom: 10px"> camera 组件 </onekit-view>
      <onekit-camera flash="off" :device-position="{{position}}" @error="error">
      </onekit-camera>
       <onekit-view v-if="showCanvas" class="info-container">
          <onekit-view style="margin: 10px 0">使用实时数据帧在 canvas 组件的展示</onekit-view>
          <onekit-view>
            帧高度：{{ frameHeight }}  帧宽度：{{ frameWidth }}
          </onekit-view>
          <onekit-canvas id="webgl" type="webgl" canvas-id="canvas" :style="width: {{width}}px; height: {{height}}px;">
          </onekit-canvas>
        </onekit-view>
      <onekit-view class="btn-area first-btn">
        <onekit-button @tap="handleShowCanvas" type="primary">{{showCanvas ? "关闭实时帧数据模式": "开启实时帧数据模式"}}</onekit-button>
      </onekit-view>
      <onekit-view class="btn-area">
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
        <onekit-navigator url="/page/component/pages/camera-scan-code/camera-scan-code" hover-class="none">
          <onekit-button type="primary">扫描一维码</onekit-button>
        </onekit-navigator>
      </onekit-view>
      <onekit-view class="preview-tips">点击录像或拍照即可在下方预览效果</onekit-view>
      <onekit-image v-if="src" mode="widthFix" class="photo" :src="{{src}}"></onekit-image>
      <onekit-video v-if="videoSrc" Class="video" :src="{{videoSrc}}"></onekit-video>
    </onekit-view>
  </onekit-view>

  
</onekit-view>
</onekit-page>
</template>