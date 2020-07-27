<style scoped src="@/onekit/OneKit.css"></style>
<style scoped="scoped" src="./scroll-view.css"></style>
<script src="./scroll-view.js"></script>
<template>
<onekit-page>

<import src="../../../common/head.vue"/>
<import src="../../../common/foot.vue"/>

<onekit-view Class="container">
  

  <onekit-view Class="page-body">
    <onekit-view Class="page-section">
      <onekit-view Class="page-section-title">
        <onekit-text>Vertical Scroll\n纵向滚动</onekit-text>
      </onekit-view>
      <onekit-view Class="page-section-spacing">
        <onekit-scroll-view scroll-y="true" Style="height: 150px;" @scrolltoupper="upper" @scrolltolower="lower" @scroll="scroll" :scroll-into-view="{{toView}}" :scroll-top="{{scrollTop}}">
          <onekit-view id="demo1" Class="scroll-view-item demo-text-1"></onekit-view>
          <onekit-view id="demo2" Class="scroll-view-item demo-text-2"></onekit-view>
          <onekit-view id="demo3" Class="scroll-view-item demo-text-3"></onekit-view>
        </onekit-scroll-view>
      </onekit-view>
    </onekit-view>
    <onekit-view Class="page-section">
      <onekit-view Class="page-section-title">
        <onekit-text>Horizontal Scroll\n横向滚动</onekit-text>
      </onekit-view>
      <onekit-view Class="page-section-spacing">
        <onekit-scroll-view Class="scroll-view_H" scroll-x="true" @scroll="scroll" Style="width: 100%">
          <onekit-view id="demo1" Class="scroll-view-item_H demo-text-1"></onekit-view>
          <onekit-view id="demo2" Class="scroll-view-item_H demo-text-2"></onekit-view>
          <onekit-view id="demo3" Class="scroll-view-item_H demo-text-3"></onekit-view>
        </onekit-scroll-view>
      </onekit-view>
    </onekit-view>
    <onekit-view Class="page-section">
      <onekit-view Class="page-section-title">
        <onekit-text>自定义下拉刷新\n自定义：</onekit-text>
      </onekit-view>
      <onekit-view Class="page-section-spacing">
        <onekit-scroll-view scroll-y Style="width: 100%; height: 400px;" :refresher-enabled="{{true}}" :refresher-threshold="{{80}}" refresher-default-style="none" refresher-background="lightgreen" @refresherpulling="{{refresh.onPulling}}">
          <onekit-view slot="refresher" Class="refresh-container" Style="display: block; width: 100%; height: 80px; background: #ECBDF0; display: flex; align-items: center;">
            <onekit-view Class="view1" Style="position: absolute; color: white; text-align: center; width: 100%;">
              下拉刷新
            </onekit-view>
          </onekit-view>

          <onekit-view id="demo1" Class="scroll-view-item_H demo-text-1"></onekit-view>
          <onekit-view id="demo2" Class="scroll-view-item_H demo-text-2"></onekit-view>
          <onekit-view id="demo3" Class="scroll-view-item_H demo-text-3"></onekit-view>
        </onekit-scroll-view>
      </onekit-view>
    </onekit-view>
    <onekit-view Class="page-section">
      <onekit-view Class="page-section-title">
        <onekit-text>默认：</onekit-text>
      </onekit-view>
      <onekit-view Class="page-section-spacing">
        <onekit-scroll-view scroll-y Style="width: 100%; height: 400px;" :refresher-enabled="{{true}}" :refresher-threshold="{{100}}" refresher-default-style="white" refresher-background="lightgreen" :refresher-triggered="{{triggered}}" @refresherpulling="onPulling" @refresherrefresh="onRefresh" @refresherrestore="onRestore" @refresherabort="onAbort">
          <onekit-view id="demo1" Class="scroll-view-item_H demo-text-1"></onekit-view>
          <onekit-view id="demo2" Class="scroll-view-item_H demo-text-2"></onekit-view>
          <onekit-view id="demo3" Class="scroll-view-item_H demo-text-3"></onekit-view>
        </onekit-scroll-view>
      </onekit-view>
    </onekit-view>
    <onekit-view Class="page-section">
      <onekit-view Class="page-section-title">
        <onekit-text>滚动驱动动画</onekit-text>
      </onekit-view>
      <onekit-view Class="page-section-spacing">
        <onekit-scroll-view id="scroll-view_D" scroll-y="true" Style="height: 150px;" @scrolltoupper="upper" @scrolltolower="lower" @scroll="scroll" :scroll-into-view="{{toView}}" :scroll-top="{{scrollTop}}">
          <onekit-view Class="scroll-view-item_H demo-text-1" id="scroll-sample-object1"></onekit-view>
          <onekit-view Class="scroll-view-item_H demo-text-2" id="scroll-sample-object2"></onekit-view>
          <onekit-view Class="scroll-view-item_H demo-text-3" id="scroll-sample-object3"></onekit-view>
        </onekit-scroll-view>
      </onekit-view>
    </onekit-view>
  </onekit-view>
  
</onekit-view>


null
</onekit-page>
</template>