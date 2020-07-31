<script>
const PAGE_JSON = {
	"navigationBarTitleText":"switch",
	"usingComponents":{}
}
</script>
<script>
import {OnekitApp,OnekitPage,OnekitComponent} from "../../../../onekit/onekit.js";
import wx from "../../../../onekit/wx.js";
OnekitPage({
    onShareAppMessage:function(){
        return {
            title:'switch',
            path:'page/component/pages/switch/switch'
        };
    },
    switch1Change:function(e){
        console.log('switch1 发生 change 事件，携带值为',e.detail.value);
    },
    switch2Change:function(e){
        console.log('switch2 发生 change 事件，携带值为',e.detail.value);
    }
});
</script>
<template>
<import src="../../../common/head.vue"/>
<import src="../../../common/foot.vue"/>

<onekit-view class="container">
  

  <onekit-view class="page-body">
    <onekit-view class="page-section page-section-gap">
      <onekit-view class="page-section-title">默认样式</onekit-view>
      <onekit-view class="body-view">
        <onekit-switch checked @change="switch1Change"></onekit-switch>
        <onekit-switch @change="switch2Change"></onekit-switch>
      </onekit-view>
    </onekit-view>

    <onekit-view class="page-section">
      <onekit-view class="page-section-title">推荐展示样式</onekit-view>
      <onekit-view class="weui-cells weui-cells_after-title">
        <onekit-view class="weui-cell weui-cell_switch">
          <onekit-view class="weui-cell__bd">开启中</onekit-view>
          <onekit-view class="weui-cell__ft">
            <onekit-switch checked></onekit-switch>
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

  
</onekit-view></template>
<style scoped src="@/onekit/onekit.css"/><style>
@import "../../../common/lib/weui.css";
</style>
