<style scoped src="@/onekit/onekit.css"></style>
<style scoped="scoped" src="./audio.css"></style>
<script src="./audio.js"></script>
<template>
<onekit-page>
<onekit-view>
  <onekit-audio :src="src" id="myAudio"></onekit-audio>

  <onekit-button type="primary" @tap="audioPlay">播放</onekit-button>
  <onekit-button type="primary" @tap="audioPause">暂停</onekit-button>
  <onekit-button type="primary" @tap="audio14">设置当前播放时间为14秒</onekit-button>
  <onekit-button type="primary" @tap="audioStart">回到开头</onekit-button>
</onekit-view>
</onekit-page>
</template>