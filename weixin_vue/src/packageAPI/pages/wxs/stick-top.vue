<style scoped src="@/onekit/OneKit.css"></style>
<style scoped="scoped" src="./stick-top.css"></style>
<script src="./stick-top.js"></script>
<template>
<onekit-page>
<script>
const test = require('./stick-top.wxs');
</script>

<onekit-scroll-view @scroll="theme=== 'dark' ? test.funcD :test.funcA" :style="'height:'+height+'px;'" scroll-y>
  <onekit-view class="page-banner">
    <onekit-image class="image" src="http://mmbiz.qpic.cn/mmbiz_jpg/TcDuyasB5T3Eg34AYwjMw7xbEK2n01ekiaicPiaMInEMTkOQtuv1yke5KziaYF4MLia4IAbxlm0m5NxkibicFg4IZ92EA/0?wx_fmt=jpeg" style="width:100%;height:200px" mode="aspectFit"></onekit-image>
  </onekit-view>
  <onekit-view class="page-group-interaction page-group">
    <onekit-view class="page-nav-list"><onekit-text>抗疫专区</onekit-text></onekit-view>
    <onekit-view class="page-nav-list"><onekit-text>技术开发</onekit-text></onekit-view>
    <onekit-view class="page-nav-list"><onekit-text>运营专区</onekit-text></onekit-view>
    <onekit-view class="page-nav-list"><onekit-text>我的</onekit-text></onekit-view>
  </onekit-view>
  <onekit-block v-for="(item,title) in tabs">
    <onekit-view class="goods-list" @:tap="handleClick">
      <onekit-image :src="item.img" mode="widthFix"></onekit-image>
      <onekit-view class="item-title">
        {{item.title2}}
      </onekit-view>
      <onekit-view class="item-desc">
        {{item.desc}}
      </onekit-view>
    </onekit-view>
  </onekit-block>
</onekit-scroll-view>
</onekit-page>
</template>