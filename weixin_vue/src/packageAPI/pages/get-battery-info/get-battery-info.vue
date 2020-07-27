<style scoped src="@/onekit/OneKit.css"></style>
<style scoped="scoped" src="./get-battery-info.css"></style>
<script src="./get-battery-info.js"></script>
<template>
<onekit-page>
<import src="../../../common/head.vue"/>
<import src="../../../common/foot.vue"/>

<onekit-view class="container">
  

  <onekit-view class="page-body">
  	<onekit-view class="page-section">
    <onekit-view class="weui-cells weui-cells_after-title">
        <onekit-view class="weui-cell weui-cell_input">
          <onekit-view class="weui-cell__hd">
            <onekit-view class="weui-label">当前电量</onekit-view>
          </onekit-view>
          <onekit-view class="weui-cell__bd">
            <onekit-input class="weui-input" type="text" :disabled="{{true}}" placeholder="未获取" :value="{{level}}"></onekit-input>
          </onekit-view>
        </onekit-view>
        <onekit-view class="weui-cell weui-cell_input">
          <onekit-view class="weui-cell__hd">
            <onekit-view class="weui-label">电池模式</onekit-view>
          </onekit-view>
          <onekit-view class="weui-cell__bd">
            <onekit-input class="weui-input" type="text" :disabled="{{true}}" placeholder="未获取" :value="{{isCharging}}"></onekit-input>
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