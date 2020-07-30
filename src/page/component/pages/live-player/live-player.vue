<style scoped src="@/onekit/onekit.css"></style>
<style scoped="scoped" src="./live-player.css"></style>
<script src="./live-player.js"></script>
<template>
<onekit-page>
	<import src="../../../common/head.vue"/>
<import src="../../../common/foot.vue"/>

<onekit-view class="container">
  

  <onekit-view class="page-body">

    <onekit-view class="page-section">
      <onekit-live-player id="player" :src=" videoSrc " mode="RTC" autoplay @statechange="handleLivePlayerStateChange" @error="handleLivePlayerError"></onekit-live-player>
    </onekit-view>

    <onekit-view class="page-section">
      <onekit-view class="page-url">视频地址 (支持flv, rtmp):</onekit-view>
      <onekit-input class="input" name="input" placeholder="视频播放链接" :value=" videoSrc " @input="handleVideoSrcInput"></onekit-input>
      <onekit-button type="primary" @tap="handleScanQRCode">
        扫码
      </onekit-button>
    </onekit-view>
    <onekit-view class="page-section">
      <onekit-button @tap="handlePlay" class="page-body-button" type="primary">播放</onekit-button>
      <onekit-button @tap="handlePause" class="page-body-button" type="primary">暂停</onekit-button>
      <onekit-button @tap="handleStop" class="page-body-button" type="primary">停止</onekit-button>
      <onekit-button @tap="handleResume" class="page-body-button" type="primary">恢复</onekit-button>
      <onekit-button @tap="handleMute" class="page-body-button" type="primary">静音</onekit-button>
    </onekit-view>
  </onekit-view>
  
</onekit-view>

  
  
</onekit-page>
</template>