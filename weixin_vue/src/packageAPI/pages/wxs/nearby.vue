<style scoped src="@/onekit/onekit.css"></style>
<style scoped="scoped" src="./nearby.css"></style>
<script src="./nearby.js"></script>
<template>
<onekit-page>
<script>
const test = require('./nearby.wxs');
</script>


<onekit-swiper class="swiper" :data-width="windowWidth" :data-imgsize="imgSize" @change="test.change" @animationfinish="test.animationFinish" @transition="test.func" :indicator-dots="indicatorDots" :autoplay="true" :interval="interval" circular :duration="duration">
  <onekit-block v-for="(item) in imgUrls">
    <onekit-swiper-item style="height:100%;">
      <onekit-image :src="item" class="slide-image" style="height:100%;width:100%;" mode="center" height="300"></onekit-image>
    </onekit-swiper-item>
  </onekit-block>
</onekit-swiper>
</onekit-page>
</template>