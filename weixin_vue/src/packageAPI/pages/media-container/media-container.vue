<style scoped src="@/onekit/OneKit.css"></style>
<style scoped="scoped" src="./media-container.css"></style>
<script src="./media-container.js"></script>
<template>
<onekit-page>
<import src="../../../common/head.vue"/>
<import src="../../../common/foot.vue"/>

<onekit-view class="container">
  

  <onekit-view class="page-body">
    <onekit-view class="page-section">
      <onekit-view class="page-section-title">
       源视频
      </onekit-view>
    </onekit-view>
    <onekit-view class="page-section">
     <onekit-button type="primary" @tap="handleChooseVideo" data-video="one">选择源视频1</onekit-button>
     <onekit-video v-if="one" :src="{{one}}"></onekit-video>
    </onekit-view>
    <onekit-view class="page-section">
      <onekit-button type="primary" @tap="handleChooseVideo" data-video="two">选择源视频2</onekit-button>
      <onekit-video v-if="two" :src="{{two}}"></onekit-video>
    </onekit-view>
    <onekit-view class="btn-area">
      <onekit-button :disabled="{{!canIUse}}" type="primary" @:tap="handleExport">合成</onekit-button>
    </onekit-view> 
    <onekit-block v-if="targetSrc">
      <onekit-view class="page-section">
        <onekit-view class="page-section-title">
           <onekit-text>合成视频</onekit-text>
        </onekit-view>
        <onekit-view class="page-section-title">
           <onekit-text>合成视频轨道为：源视频1视频轨道 + 源视频2音频轨道</onekit-text>
        </onekit-view>
      </onekit-view>
      <onekit-view class="page-section">
        <onekit-video :src="{{targetSrc}}">
        </onekit-video>
      </onekit-view>
    </onekit-block>
  </onekit-view>
  
</onekit-view>
</onekit-page>
</template>