<style scoped src="@/onekit/onekit.css"></style>
<style scoped="scoped" src="./voice.css"></style>
<script src="./voice.js"></script>
<template>
<onekit-page>
<import src="../../../common/head.vue"/>
<import src="../../../common/foot.vue"/>

<onekit-view class="container">
  

  <onekit-view class="page-body">
    <onekit-view class="page-section">
      <onekit-block v-if="recording === false && playing === false && hasRecord === false">
        <onekit-view class="page-body-time">
          <onekit-text class="time-big">{{formatedRecordTime}}</onekit-text>
        </onekit-view>
        <onekit-view class="page-body-buttons">
          <onekit-view class="page-body-button"></onekit-view>
          <onekit-view class="page-body-button" @tap="startRecord">
            <onekit-image src="/image/record.png"></onekit-image>
          </onekit-view>
          <onekit-view class="page-body-button"></onekit-view>
        </onekit-view>
      </onekit-block>

      <onekit-block v-if="recording === true">
        <onekit-view class="page-body-time">
          <onekit-text class="time-big">{{formatedRecordTime}}</onekit-text>
        </onekit-view>
        <onekit-view class="page-body-buttons">
          <onekit-view class="page-body-button"></onekit-view>
          <onekit-view class="page-body-button" @tap="stopRecord">
            <onekit-view class="button-stop-record"></onekit-view>
          </onekit-view>
          <onekit-view class="page-body-button"></onekit-view>
        </onekit-view>
      </onekit-block>

      <onekit-block v-if="hasRecord === true && playing === false">
        <onekit-view class="page-body-time">
          <onekit-text class="time-big">{{formatedPlayTime}}</onekit-text>
          <onekit-text class="time-small">{{formatedRecordTime}}</onekit-text>
        </onekit-view>
        <onekit-view class="page-body-buttons">
          <onekit-view class="page-body-button"></onekit-view>
          <onekit-view class="page-body-button" @tap="playVoice">
            <onekit-image src="/image/play.png"></onekit-image>
          </onekit-view>
          <onekit-view class="page-body-button" @tap="clear">
            <onekit-image src="/image/trash.png"></onekit-image>
          </onekit-view>
        </onekit-view>
      </onekit-block>

      <onekit-block v-if="hasRecord === true && playing === true">
        <onekit-view class="page-body-time">
          <onekit-text class="time-big">{{formatedPlayTime}}</onekit-text>
          <onekit-text class="time-small">{{formatedRecordTime}}</onekit-text>
        </onekit-view>
        <onekit-view class="page-body-buttons">
          <onekit-view class="page-body-button" @tap="stopVoice">
            <onekit-image src="/image/stop.png"></onekit-image>
          </onekit-view>
          <onekit-view class="page-body-button" @tap="pauseVoice">
            <onekit-image src="/image/pause.png"></onekit-image>
          </onekit-view>
          <onekit-view class="page-body-button" @tap="clear">
            <onekit-image src="/image/trash.png"></onekit-image>
          </onekit-view>
        </onekit-view>
      </onekit-block>
    </onekit-view>
  </onekit-view>

  
</onekit-view>
</onekit-page>
</template>