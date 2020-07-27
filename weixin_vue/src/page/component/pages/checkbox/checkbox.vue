<style scoped src="@/onekit/OneKit.css"></style>
<style scoped="scoped" src="./checkbox.css"></style>
<script src="./checkbox.js"></script>
<template>
<onekit-page>
<import src="../../../common/head.vue"/>
<import src="../../../common/foot.vue"/>

<onekit-view Class="container">
  

  <onekit-view Class="page-body">
    <onekit-view Class="page-section page-section-gap">
      <onekit-view Class="page-section-title">默认样式</onekit-view>
      <onekit-label Class="checkbox">
        <onekit-checkbox value="cb" checked="true"></onekit-checkbox>选中
      </onekit-label>
      <onekit-label Class="checkbox">
        <onekit-checkbox value="cb"></onekit-checkbox>未选中
      </onekit-label>
    </onekit-view>

    <onekit-view Class="page-section">
      <onekit-view Class="page-section-title">推荐展示样式</onekit-view>
      <onekit-view Class="weui-cells weui-cells_after-title">
        <onekit-checkbox-group @change="checkboxChange">
          <onekit-label v-for="(item,value) in items" Class="weui-cell weui-check__label">
            <onekit-view Class="weui-cell__hd">
              <onekit-checkbox :value="{{item.value}}" :checked="{{item.checked}}"></onekit-checkbox>
            </onekit-view>
            <onekit-view Class="weui-cell__bd">{{item.name}}</onekit-view>
          </onekit-label>
        </onekit-checkbox-group>
      </onekit-view>
    </onekit-view>
  </onekit-view>

  
</onekit-view>
</onekit-page>
</template>