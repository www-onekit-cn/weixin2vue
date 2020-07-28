<style scoped src="@/onekit/OneKit.css"></style>
<style scoped="scoped" src="./ad.css"></style>
<script src="./ad.js"></script>
<template>
<onekit-page>
<import src="../../../common/head.vue"/>
<import src="../../../common/foot.vue"/>

<onekit-view class="container">
  

  <onekit-view class="page-body">
    <onekit-view class="page-section page-section-gap">
      <onekit-view class="page-section-title">关注卡片</onekit-view>
      <onekit-ad unit-id="adunit-demo4"></onekit-ad>
    </onekit-view>
    <onekit-view v-if="platform === 'ios'" class="page-section page-section-gap">
      <onekit-view class="page-section-title">下载卡片</onekit-view>
      <onekit-ad unit-id="adunit-demo8"></onekit-ad>
    </onekit-view>
    <onekit-view v-else class="page-section page-section-gap">
      <onekit-view class="page-section-title">下载卡片</onekit-view>
      <onekit-ad unit-id="adunit-demo9"></onekit-ad>
    </onekit-view>
    <onekit-view v-if="platform === 'ios'" class="page-section page-section-gap">
      <onekit-view class="page-section-title">应用推广</onekit-view>
      <onekit-ad unit-id="adunit-demo2"></onekit-ad>
    </onekit-view>
    <onekit-view v-else class="page-section page-section-gap">
      <onekit-view class="page-section-title">应用推广</onekit-view>
      <onekit-ad unit-id="adunit-demo7"></onekit-ad>
    </onekit-view>
    <onekit-view class="page-section page-section-gap">
      <onekit-view class="page-section-title">公众号推广</onekit-view>
      <onekit-ad unit-id="adunit-demo3"></onekit-ad>
    </onekit-view>
    <onekit-view class="page-section page-section-gap">
      <onekit-view class="page-section-title">活动推广</onekit-view>
      <onekit-ad unit-id="adunit-demo5"></onekit-ad>
    </onekit-view>
    <onekit-view class="page-section page-section-gap">
      <onekit-view class="page-section-title">商品推广</onekit-view>
      <onekit-ad unit-id="adunit-demo6"></onekit-ad>
    </onekit-view>
  </onekit-view>

  
</onekit-view>
</onekit-page>
</template>