<style scoped src="@/onekit/OneKit.css"></style>
<style scoped="scoped" src="./voice.css"></style>
<script src="./voice.js"></script>
<template>
<onekit-page>
<import src="../../../common/head.vue"/>
<import src="../../../common/foot.vue"/>

<onekit-view Class="container">
  

  <onekit-view Class="page-body">
    <onekit-view Class="page-section">
      <onekit-block v-if="recording === false && playing === false && hasRecord === false">
        <onekit-view Class="page-body-time">
          <onekit-text Class="time-big">{{formatedRecordTime}}</onekit-text>
        </onekit-view>
        <onekit-view Class="page-body-buttons">
          <onekit-view Class="page-body-button"></onekit-view>
          <onekit-view Class="page-body-button" @tap="startRecord">
            <onekit-image src="/image/record.png"></onekit-image>
          </onekit-view>
          <onekit-view Class="page-body-button"></onekit-view>
        </onekit-view>
      </onekit-block>

      <onekit-block v-if="recording === true">
        <onekit-view Class="page-body-time">
          <onekit-text Class="time-big">{{formatedRecordTime}}</onekit-text>
        </onekit-view>
        <onekit-view Class="page-body-buttons">
          <onekit-view Class="page-body-button"></onekit-view>
          <onekit-view Class="page-body-button" @tap="stopRecord">
            <onekit-view Class="button-stop-record"></onekit-view>
          </onekit-view>
          <onekit-view Class="page-body-button"></onekit-view>
        </onekit-view>
      </onekit-block>

      <onekit-block v-if="hasRecord === true && playing === false">
        <onekit-view Class="page-body-time">
          <onekit-text Class="time-big">{{formatedPlayTime}}</onekit-text>
          <onekit-text Class="time-small">{{formatedRecordTime}}</onekit-text>
        </onekit-view>
        <onekit-view Class="page-body-buttons">
          <onekit-view Class="page-body-button"></onekit-view>
          <onekit-view Class="page-body-button" @tap="playVoice">
            <onekit-image src="/image/play.png"></onekit-image>
          </onekit-view>
          <onekit-view Class="page-body-button" @tap="clear">
            <onekit-image src="/image/trash.png"></onekit-image>
          </onekit-view>
        </onekit-view>
      </onekit-block>

      <onekit-block v-if="hasRecord === true && playing === true">
        <onekit-view Class="page-body-time">
          <onekit-text Class="time-big">{{formatedPlayTime}}</onekit-text>
          <onekit-text Class="time-small">{{formatedRecordTime}}</onekit-text>
        </onekit-view>
        <onekit-view Class="page-body-buttons">
          <onekit-view Class="page-body-button" @tap="stopVoice">
            <onekit-image src="/image/stop.png"></onekit-image>
          </onekit-view>
          <onekit-view Class="page-body-button" @tap="pauseVoice">
            <onekit-image src="/image/pause.png"></onekit-image>
          </onekit-view>
          <onekit-view Class="page-body-button" @tap="clear">
            <onekit-image src="/image/trash.png"></onekit-image>
          </onekit-view>
        </onekit-view>
      </onekit-block>
    </onekit-view>
  </onekit-view>

  
</onekit-view>
</onekit-page>
</template>