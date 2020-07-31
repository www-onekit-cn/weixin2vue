<script>
const PAGE_JSON = {
	"navigationBarTitleText":"消息提示框",
	"usingComponents":{}
}
</script>
<script>
import {OnekitApp,OnekitPage,OnekitComponent} from "../../../onekit/onekit.js";
import wx from "../../../onekit/wx.js";
export default OnekitPage({
    onShareAppMessage:function(){
        return {
            title:'消息提示框',
            path:'packageAPI/pages/toast/toast'
        };
    },
    toast1Tap:function(){
        wx.showToast({
            title:'默认'
        });
    },
    toast2Tap:function(){
        wx.showToast({
            title:'duration 3000',
            duration:3000
        });
    },
    toast3Tap:function(){
        wx.showToast({
            title:'loading',
            icon:'loading',
            duration:5000
        });
    },
    hideToast:function(){
        wx.hideToast();
    }
});
</script>
<template>
<import src="../../../common/head.vue"/>
<import src="../../../common/foot.vue"/>

<onekit-view class="container">
  

  <onekit-view class="page-body">
    <onekit-view class="btn-area">
      <onekit-view class="body-view">
        <onekit-button type="default" @tap="toast1Tap">点击弹出默认toast</onekit-button>
      </onekit-view>
      <onekit-view class="body-view">
        <onekit-button type="default" @tap="toast2Tap">点击弹出设置duration的toast</onekit-button>
      </onekit-view>
      <onekit-view class="body-view">
        <onekit-button type="default" @tap="toast3Tap">点击弹出显示loading的toast</onekit-button>
      </onekit-view>
      <onekit-view class="body-view">
        <onekit-button type="default" @tap="hideToast">点击隐藏toast</onekit-button>
      </onekit-view>
    </onekit-view>
  </onekit-view>

  
</onekit-view></template>

<style scoped src="@/app.css"/>
<style>
/* page/API/pages/toast/toast.css */
</style>
