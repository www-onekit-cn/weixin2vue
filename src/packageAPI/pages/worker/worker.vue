<style scoped src="@/onekit/onekit.css"></style>
<style scoped="scoped" src="./worker.css"></style>
<script src="./worker.js"></script>
<template>
<onekit-page>
<import src="../../../common/head.vue"/>
<import src="../../../common/foot.vue"/>

<onekit-view class="container">
  
  
  <onekit-view class="page-body">
    <onekit-view class="page-body-wrapper">
      <onekit-canvas canvas-id="canvas" class="canvas"></onekit-canvas>
    </onekit-view>
  </onekit-view>

  <onekit-view class="page-section">
    <onekit-view class="weui-cells__title">计算斐波那契数</onekit-view>
    <onekit-view class="weui-cells weui-cells_after-title">
      <onekit-view class="weui-cell weui-cell_input">
        <onekit-input class="weui-input" type="number" :value="input" @input="bindInput"></onekit-input>
      </onekit-view>
    </onekit-view>
    <onekit-view class="weui-cells__title">结果</onekit-view>
    <onekit-view class="weui-cells weui-cells_after-title">
      <onekit-view class="weui-cell weui-cell_input">
        <onekit-view class="weui-input">{{res}}</onekit-view>
      </onekit-view>
    </onekit-view>
     <onekit-view class="page-section-title">提示：使用单线程进行计算时，动画会出现明显的卡顿现象。使用 Worker 线程进行计算，则可以保证动画的流畅。</onekit-view>
    <onekit-view class="btn-area">
      <onekit-button @tap="compute">单线程计算</onekit-button>
      <onekit-button type="primary" @tap="multiThreadCompute">利用 Worker 线程计算</onekit-button>
    </onekit-view>
  </onekit-view>

  
</onekit-view>
</onekit-page>
</template>