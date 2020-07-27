<style scoped src="@/onekit/OneKit.css"></style>
<style scoped="scoped" src="./animation.css"></style>
<script src="./animation.js"></script>
<template>
<onekit-page>
<import src="../../../common/head.vue"/>
<import src="../../../common/foot.vue"/>

<onekit-view Class="container">
  

  <onekit-view Class="page-body">
  <onekit-view Class="page-section">
    <onekit-view Class="page-section-title">
      <onekit-text>关键帧动画\n\n从小程序基础库 2.9.0 开始支持一种更友好的动画创建方式，用于代替旧的 wx.createAnimation</onekit-text>
    </onekit-view>  
    <onekit-view id="container1" :Style="{{containerStyle1}}">
      <onekit-button Class="block1" Style="width: 150px; margin: 50px auto;">示例按钮</onekit-button>
      <onekit-a class="block1" style="display: block; margin: 50px auto; width: 150px; text-align: center;">示例超链接</onekit-a>
      <onekit-text Class="block1" Style="display: block; margin: 50px auto; width: 150px; text-align: center;">示例文本</onekit-text>
    </onekit-view>
    <onekit-button :disabled="{{!canIUse}}" type="primary" @tap="change">开启动画</onekit-button>
  </onekit-view>
  </onekit-view>
  
</onekit-view>
</onekit-page>
</template>