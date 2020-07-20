<style scoped src="@/onekit/OneKit.css"></style>
<style scoped="scoped" src="./switch.css"></style>
<script src="./switch.js"></script>
<template>
<onekit-page>



<onekit-view class="container">
  

  <onekit-view class="page-body">
    <onekit-view class="page-section page-section-gap">
      <onekit-view class="page-section-title">默认样式</onekit-view>
      <onekit-view class="body-view">
        <onekit-switch checked="" @change="switch1Change"></onekit-switch>
        <onekit-switch @change="switch2Change"></onekit-switch>
      </onekit-view>
    </onekit-view>

    <onekit-view class="page-section">
      <onekit-view class="page-section-title">推荐展示样式</onekit-view>
      <onekit-view class="weui-cells weui-cells_after-title">
        <onekit-view class="weui-cell weui-cell_switch">
          <onekit-view class="weui-cell__bd">开启中</onekit-view>
          <onekit-view class="weui-cell__ft">
            <onekit-switch checked=""></onekit-switch>
          </onekit-view>
        </onekit-view>
        <onekit-view class="weui-cell weui-cell_switch">
          <onekit-view class="weui-cell__bd">关闭</onekit-view>
          <onekit-view class="weui-cell__ft">
            <onekit-switch></onekit-switch>
          </onekit-view>
        </onekit-view>
      </onekit-view>
    </onekit-view>
  </onekit-view>

  
</onekit-view>
</onekit-page>
</template>