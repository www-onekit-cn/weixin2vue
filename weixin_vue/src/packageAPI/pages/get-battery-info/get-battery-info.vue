<style scoped src="@/onekit/OneKit.css"></style>
<style scoped="scoped" src="./get-battery-info.css"></style>
<script src="./get-battery-info.js"></script>
<template>
<onekit-page>
<import src="../../../common/head.vue"/>
<import src="../../../common/foot.vue"/>

<onekit-view Class="container">
  

  <onekit-view Class="page-body">
  	<onekit-view Class="page-section">
    <onekit-view Class="weui-cells weui-cells_after-title">
        <onekit-view Class="weui-cell weui-cell_input">
          <onekit-view Class="weui-cell__hd">
            <onekit-view Class="weui-label">当前电量</onekit-view>
          </onekit-view>
          <onekit-view Class="weui-cell__bd">
            <onekit-input Class="weui-input" type="text" :disabled="{{true}}" placeholder="未获取" :value="{{level}}"></onekit-input>
          </onekit-view>
        </onekit-view>
        <onekit-view Class="weui-cell weui-cell_input">
          <onekit-view Class="weui-cell__hd">
            <onekit-view Class="weui-label">电池模式</onekit-view>
          </onekit-view>
          <onekit-view Class="weui-cell__bd">
            <onekit-input Class="weui-input" type="text" :disabled="{{true}}" placeholder="未获取" :value="{{isCharging}}"></onekit-input>
          </onekit-view>
        </onekit-view>
      </onekit-view>
      <onekit-button type="primary" @:tap="getBatteryInfo">
        获取电量信息信息
      </onekit-button>
    </onekit-view>
  </onekit-view>
  
</onekit-view>
</onekit-page>
</template>