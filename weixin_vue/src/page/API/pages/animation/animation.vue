<style scoped src="@/onekit/OneKit.css"></style>
<style scoped="scoped" src="./animation.css"></style>
<script src="./animation.js"></script>
<template>
<onekit-page>



<onekit-view class="container">
  

  <onekit-view class="page-body">
    <onekit-view class="page-section">

      <onekit-view class="animation-element-wrapper">
        <onekit-view class="animation-element" :animation="animation"></onekit-view>
      </onekit-view>
      <onekit-scroll-view class="animation-buttons" scroll-y="true">
        <onekit-button class="animation-button" @tap="rotate">旋转</onekit-button>
        <onekit-button class="animation-button" @tap="scale">缩放</onekit-button>
        <onekit-button class="animation-button" @tap="translate">移动</onekit-button>
        <onekit-button class="animation-button" @tap="skew">倾斜</onekit-button>
        <onekit-button class="animation-button" @tap="rotateAndScale">旋转并缩放</onekit-button>
        <onekit-button class="animation-button" @tap="rotateThenScale">旋转后缩放</onekit-button>
        <onekit-button class="animation-button" @tap="all">同时展示全部</onekit-button>
        <onekit-button class="animation-button" @tap="allInQueue">顺序展示全部</onekit-button>
        <onekit-button class="animation-button animation-button-reset" @tap="reset">还原</onekit-button>
      </onekit-scroll-view>
    </onekit-view>
  </onekit-view>

  
</onekit-view>
</onekit-page>
</template>