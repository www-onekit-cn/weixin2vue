<style scoped src="@/onekit/OneKit.css"></style>
<style scoped="scoped" src="./label.css"></style>
<script src="./label.js"></script>
<template>
<onekit-page>
<import src="../../../common/head.vue"/>
<import src="../../../common/foot.vue"/>

<onekit-view Class="container">
  

  <onekit-view Class="page-body">
    <onekit-view Class="page-section page-section-gap">
      <onekit-view Class="page-section-title">表单组件在label内</onekit-view>
      <onekit-checkbox-group Class="group" @change="checkboxChange">
        <onekit-view v-for="(item) in checkboxItems" Class="label-1">
          <onekit-label>
            <onekit-checkbox :value="{{item.name}}" :checked="{{item.checked}}"></onekit-checkbox>
            <onekit-text Class="label-1-text">{{item.value}}</onekit-text>
          </onekit-label>
        </onekit-view>
      </onekit-checkbox-group>
    </onekit-view>

    <onekit-view Class="page-section page-section-gap">
      <onekit-view Class="page-section-title">label用for标识表单组件</onekit-view>
      <onekit-radio-group Class="group" @change="radioChange">
        <onekit-view v-for="(item) in radioItems" Class="label-2">
          <onekit-radio :id="{{item.name}}" :value="{{item.name}}" :checked="{{item.checked}}"></onekit-radio>
          <onekit-label Class="label-2-text" :for="{{item.name}}"><onekit-text>{{item.name}}</onekit-text></onekit-label>
        </onekit-view>
      </onekit-radio-group>
    </onekit-view>

    <onekit-view Class="page-section page-section-gap">
      <onekit-view Class="page-section-title">label内有多个时选中第一个</onekit-view>
      <onekit-label Class="label-3">
        <onekit-checkbox Class="checkbox-3">选项一</onekit-checkbox>
        <onekit-checkbox Class="checkbox-3">选项二</onekit-checkbox>
        <onekit-view Class="label-3-text">点击该label下的文字默认选中第一个checkbox</onekit-view>
      </onekit-label>
    </onekit-view>
  </onekit-view>

  
</onekit-view>
</onekit-page>
</template>