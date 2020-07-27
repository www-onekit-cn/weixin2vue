<style scoped src="@/onekit/OneKit.css"></style>
<style scoped="scoped" src="./set-navigation-bar-title.css"></style>
<script src="./set-navigation-bar-title.js"></script>
<template>
<onekit-page>
<import src="../../../common/head.vue"/>
<import src="../../../common/foot.vue"/>

<onekit-view Class="container">
  

  <onekit-form Class="page-body" @submit="setNaivgationBarTitle">
    <onekit-view Class="weui-cells weui-cells_after-title">
      <onekit-view Class="weui-cell weui-cell_input">
        <onekit-view Class="weui-cell__hd">
          <onekit-view Class="weui-label">页面标题</onekit-view>
        </onekit-view>
        <onekit-view Class="weui-cell__bd">
          <onekit-input Class="weui-input" type="text" placeholder="请输入页面标题并点击设置即可" name="title"></onekit-input>
        </onekit-view>
      </onekit-view>
    </onekit-view>
    <onekit-view Class="btn-area">
      <onekit-button type="primary" formType="submit">设置</onekit-button>
    </onekit-view>
  </onekit-form>

  
</onekit-view>
</onekit-page>
</template>