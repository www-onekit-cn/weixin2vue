<style scoped src="@/onekit/OneKit.css"></style>
<style scoped="scoped" src="./radio.css"></style>
<script src="./radio.js"></script>
<template>
<onekit-page>
<import src="../../../common/head.vue"/>
<import src="../../../common/foot.vue"/>

<onekit-view Class="container">
  

  <onekit-view Class="page-body">
    <onekit-view Class="page-section page-section-gap">
      <onekit-view Class="page-section-title">默认样式</onekit-view>
      <onekit-label Class="radio">
        <onekit-radio value="r1" checked="true"></onekit-radio>选中
      </onekit-label>
      <onekit-label Class="radio">
        <onekit-radio value="r2"></onekit-radio>未选中
      </onekit-label>
    </onekit-view>


    <onekit-view Class="page-section">
      <onekit-view Class="page-section-title">推荐展示样式</onekit-view>
      <onekit-view Class="weui-cells weui-cells_after-title">
        <onekit-radio-group @change="radioChange">
          <onekit-label v-for="(item,value) in items" Class="weui-cell weui-check__label">

            <onekit-view Class="weui-cell__hd">
              <onekit-radio :value="{{item.value}}" checked="true"></onekit-radio>
            </onekit-view>
            <onekit-view Class="weui-cell__bd">{{item.name}}</onekit-view>
          </onekit-label>
        </onekit-radio-group>
      </onekit-view>
    </onekit-view>
  </onekit-view>

  
</onekit-view>
</onekit-page>
</template>