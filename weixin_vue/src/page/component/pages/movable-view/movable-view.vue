<style scoped src="@/onekit/OneKit.css"></style>
<style scoped="scoped" src="./movable-view.css"></style>
<script src="./movable-view.js"></script>
<template>
<onekit-page>
<import src="../../../common/head.vue"/>
<import src="../../../common/foot.vue"/>

<onekit-view class="container">
  

  <onekit-view class="page-body">
    <onekit-view class="page-section">
      <onekit-view class="page-section-title first">movable-view区域小于movable-area</onekit-view>
      <onekit-movable-area>
        <onekit-movable-view :x="{{x}}" :y="{{y}}" direction="all">text</onekit-movable-view>
      </onekit-movable-area>
    </onekit-view>
    <onekit-view class="btn-area">
      <onekit-button @tap="tap" Class="page-body-button" type="primary">点击移动到 (30px, 30px)</onekit-button>
    </onekit-view>

    <onekit-view class="page-section">
      <onekit-view class="page-section-title">movable-view区域大于movable-area</onekit-view>
      <onekit-movable-area>
        <onekit-movable-view class="max" direction="all">text</onekit-movable-view>
      </onekit-movable-area>
    </onekit-view>

    <onekit-view class="page-section">
      <onekit-view class="page-section-title">只可以横向移动</onekit-view>
      <onekit-movable-area>
        <onekit-movable-view direction="horizontal">text</onekit-movable-view>
      </onekit-movable-area>
    </onekit-view>

    <onekit-view class="page-section">
      <onekit-view class="page-section-title">只可以纵向移动</onekit-view>
      <onekit-movable-area>
        <onekit-movable-view direction="vertical">text</onekit-movable-view>
      </onekit-movable-area>
    </onekit-view>

    <onekit-view class="page-section">
      <onekit-view class="page-section-title">可超出边界</onekit-view>
      <onekit-movable-area>
        <onekit-movable-view direction="all" out-of-bounds>text</onekit-movable-view>
      </onekit-movable-area>
    </onekit-view>

    <onekit-view class="page-section">
      <onekit-view class="page-section-title">带有惯性</onekit-view>
      <onekit-movable-area>
        <onekit-movable-view direction="all" inertia>text</onekit-movable-view>
      </onekit-movable-area>
    </onekit-view>

    <onekit-view class="page-section">
      <onekit-view class="page-section-title">可放缩</onekit-view>
      <onekit-movable-area scale-area>
        <onekit-movable-view direction="all" @change="onChange" @scale="onScale" scale scale-min="0.5" scale-max="4" :scale-value="{{scale}}">text</onekit-movable-view>
      </onekit-movable-area>
    </onekit-view>

    <onekit-view class="btn-area">
      <onekit-button @tap="tap2" Class="page-body-button" type="primary">点击放大3倍</onekit-button>
    </onekit-view>
  </onekit-view>

  
</onekit-view>
</onekit-page>
</template>