<style scoped src="@/onekit/OneKit.css"></style>
<style scoped="scoped" src="./scroll-view.css"></style>
<script src="./scroll-view.js"></script>
<template>
<onekit-page>

<import src="../../../common/head.vue"/>
<import src="../../../common/foot.vue"/>

<onekit-view class="container">
  

  <onekit-view class="page-body">
    <onekit-view class="page-section">
      <onekit-view class="page-section-title">
        <onekit-text>Vertical Scroll\n纵向滚动</onekit-text>
      </onekit-view>
      <onekit-view class="page-section-spacing">
        <onekit-scroll-view scroll-y="true" style="height: 150px;" @scrolltoupper="upper" @scrolltolower="lower" @scroll="scroll" :scroll-into-view="toView" :scroll-top="scrollTop">
          <onekit-view id="demo1" class="scroll-view-item demo-text-1"></onekit-view>
          <onekit-view id="demo2" class="scroll-view-item demo-text-2"></onekit-view>
          <onekit-view id="demo3" class="scroll-view-item demo-text-3"></onekit-view>
        </onekit-scroll-view>
      </onekit-view>
    </onekit-view>
    <onekit-view class="page-section">
      <onekit-view class="page-section-title">
        <onekit-text>Horizontal Scroll\n横向滚动</onekit-text>
      </onekit-view>
      <onekit-view class="page-section-spacing">
        <onekit-scroll-view class="scroll-view_H" scroll-x="true" @scroll="scroll" style="width: 100%">
          <onekit-view id="demo1" class="scroll-view-item_H demo-text-1"></onekit-view>
          <onekit-view id="demo2" class="scroll-view-item_H demo-text-2"></onekit-view>
          <onekit-view id="demo3" class="scroll-view-item_H demo-text-3"></onekit-view>
        </onekit-scroll-view>
      </onekit-view>
    </onekit-view>
    <onekit-view class="page-section">
      <onekit-view class="page-section-title">
        <onekit-text>自定义下拉刷新\n自定义：</onekit-text>
      </onekit-view>
      <onekit-view class="page-section-spacing">
        <onekit-scroll-view scroll-y style="width: 100%; height: 400px;" :refresher-enabled="true" :refresher-threshold="80" refresher-default-style="none" refresher-background="lightgreen" @refresherpulling="refresh.onPulling">
          <onekit-view slot="refresher" class="refresh-container" style="display: block; width: 100%; height: 80px; background: #ECBDF0; display: flex; align-items: center;">
            <onekit-view class="view1" style="position: absolute; color: white; text-align: center; width: 100%;">
              下拉刷新
            </onekit-view>
          </onekit-view>

          <onekit-view id="demo1" class="scroll-view-item_H demo-text-1"></onekit-view>
          <onekit-view id="demo2" class="scroll-view-item_H demo-text-2"></onekit-view>
          <onekit-view id="demo3" class="scroll-view-item_H demo-text-3"></onekit-view>
        </onekit-scroll-view>
      </onekit-view>
    </onekit-view>
    <onekit-view class="page-section">
      <onekit-view class="page-section-title">
        <onekit-text>默认：</onekit-text>
      </onekit-view>
      <onekit-view class="page-section-spacing">
        <onekit-scroll-view scroll-y style="width: 100%; height: 400px;" :refresher-enabled="true" :refresher-threshold="100" refresher-default-style="white" refresher-background="lightgreen" :refresher-triggered="triggered" @refresherpulling="onPulling" @refresherrefresh="onRefresh" @refresherrestore="onRestore" @refresherabort="onAbort">
          <onekit-view id="demo1" class="scroll-view-item_H demo-text-1"></onekit-view>
          <onekit-view id="demo2" class="scroll-view-item_H demo-text-2"></onekit-view>
          <onekit-view id="demo3" class="scroll-view-item_H demo-text-3"></onekit-view>
        </onekit-scroll-view>
      </onekit-view>
    </onekit-view>
    <onekit-view class="page-section">
      <onekit-view class="page-section-title">
        <onekit-text>滚动驱动动画</onekit-text>
      </onekit-view>
      <onekit-view class="page-section-spacing">
        <onekit-scroll-view id="scroll-view_D" scroll-y="true" style="height: 150px;" @scrolltoupper="upper" @scrolltolower="lower" @scroll="scroll" :scroll-into-view="toView" :scroll-top="scrollTop">
          <onekit-view class="scroll-view-item_H demo-text-1" id="scroll-sample-object1"></onekit-view>
          <onekit-view class="scroll-view-item_H demo-text-2" id="scroll-sample-object2"></onekit-view>
          <onekit-view class="scroll-view-item_H demo-text-3" id="scroll-sample-object3"></onekit-view>
        </onekit-scroll-view>
      </onekit-view>
    </onekit-view>
  </onekit-view>
  
</onekit-view>


<script>
const refresh = 

module.exports = {
  onPulling: function(evt, instance) {
    var p = Math.min(evt.detail.dy / 80, 1)
    console.log(p)
    var view = instance.selectComponent('.refresh-container')
    view.setStyle({
      opacity: p,
      transform: "scale(" + p + ")"
    })
  }
}

</script>

</onekit-page>
</template>