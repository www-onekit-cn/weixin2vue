<style scoped src="@/onekit/OneKit.css"></style>
<style scoped="scoped" src="./set-navigation-bar-title.css"></style>
<script src="./set-navigation-bar-title.js"></script>
<template>
<onekit-page>
<import src="../../../common/head.vue"/>
<import src="../../../common/foot.vue"/>

<onekit-view class="container">
  

  <onekit-form class="page-body" @submit="setNaivgationBarTitle">
    <onekit-view class="weui-cells weui-cells_after-title">
      <onekit-view class="weui-cell weui-cell_input">
        <onekit-view class="weui-cell__hd">
          <onekit-view class="weui-label">页面标题</onekit-view>
        </onekit-view>
        <onekit-view class="weui-cell__bd">
          <onekit-input class="weui-input" type="text" placeholder="请输入页面标题并点击设置即可" name="title"></onekit-input>
        </onekit-view>
      </onekit-view>
    </onekit-view>
    <onekit-view class="btn-area">
      <onekit-button type="primary" formType="submit">设置</onekit-button>
    </onekit-view>
  </onekit-form>

  
</onekit-view>
</onekit-page>
</template>