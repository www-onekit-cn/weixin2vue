<style scoped src="@/onekit/OneKit.css"></style>
<style scoped="scoped" src="./picker.css"></style>
<script src="./picker.js"></script>
<template>
<onekit-page>
<import src="../../../common/head.vue"/>
<import src="../../../common/foot.vue"/>

<onekit-view Class="container">
  

  <onekit-view Class="page-body">
    <onekit-view Class="page-section">
      <onekit-view Class="weui-cells__title">地区选择器</onekit-view>
      <onekit-view Class="weui-cells weui-cells_after-title">
        <onekit-view Class="weui-cell weui-cell_input">
          <onekit-view Class="weui-cell__hd">
            <onekit-view Class="weui-label">当前选择</onekit-view>
          </onekit-view>
          <onekit-view Class="weui-cell__bd">
            <onekit-picker @change="bindPickerChange" :value="{{index}}" :range="{{array}}">
              <onekit-view Class="weui-input">{{array[index]}}</onekit-view>
            </onekit-picker>
          </onekit-view>
        </onekit-view>
      </onekit-view>

      <onekit-view Class="weui-cells__title">时间选择器</onekit-view>
      <onekit-view Class="weui-cells weui-cells_after-title">
        <onekit-view Class="weui-cell weui-cell_input">
          <onekit-view Class="weui-cell__hd">
            <onekit-view Class="weui-label">当前选择</onekit-view>
          </onekit-view>
          <onekit-view Class="weui-cell__bd">
            <onekit-picker mode="time" :value="{{time}}" start="09:01" end="21:01" @change="bindTimeChange">
              <onekit-view Class="weui-input">{{time}}</onekit-view>
            </onekit-picker>
          </onekit-view>
        </onekit-view>
      </onekit-view>

      <onekit-view Class="weui-cells__title">日期选择器</onekit-view>
      <onekit-view Class="weui-cells weui-cells_after-title">
        <onekit-view Class="weui-cell weui-cell_input">
          <onekit-view Class="weui-cell__hd">
            <onekit-view Class="weui-label">当前选择</onekit-view>
          </onekit-view>
          <onekit-view Class="weui-cell__bd">
            <onekit-picker mode="date" :value="{{date}}" start="2015-09-01" end="2017-09-01" @change="bindDateChange">
              <onekit-view Class="weui-input">{{date}}</onekit-view>
            </onekit-picker>
          </onekit-view>
        </onekit-view>
      </onekit-view>
    </onekit-view>
  </onekit-view>

  
</onekit-view>
</onekit-page>
</template>