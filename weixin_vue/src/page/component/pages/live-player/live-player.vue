<style scoped src="@/onekit/OneKit.css"></style>
<style scoped="scoped" src="./live-player.css"></style>
<script src="./live-player.js"></script>
<template>
<onekit-page>
	<import src="../../../common/head.vue"/>
<import src="../../../common/foot.vue"/>

<onekit-view Class="container">
  

  <onekit-view Class="page-body">

    <onekit-view Class="page-section">
      <onekit-live-player id="player" :src="{{ videoSrc }}" mode="RTC" autoplay @statechange="handleLivePlayerStateChange" @error="handleLivePlayerError"></onekit-live-player>
    </onekit-view>

    <onekit-view Class="page-section">
      <onekit-view Class="page-url">视频地址 (支持flv, rtmp):</onekit-view>
      <onekit-input Class="input" name="input" placeholder="视频播放链接" :value="{{ videoSrc }}" @input="handleVideoSrcInput"></onekit-input>
      <onekit-button type="primary" @tap="handleScanQRCode">
        扫码
      </onekit-button>
    </onekit-view>
    <onekit-view Class="page-section">
      <onekit-button @tap="handlePlay" Class="page-body-button" type="primary">播放</onekit-button>
      <onekit-button @tap="handlePause" Class="page-body-button" type="primary">暂停</onekit-button>
      <onekit-button @tap="handleStop" Class="page-body-button" type="primary">停止</onekit-button>
      <onekit-button @tap="handleResume" Class="page-body-button" type="primary">恢复</onekit-button>
      <onekit-button @tap="handleMute" Class="page-body-button" type="primary">静音</onekit-button>
    </onekit-view>
  </onekit-view>
  
</onekit-view>

  
  
</onekit-page>
</template>