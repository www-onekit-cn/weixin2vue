<script>
const PAGE_JSON = {
	"navigationBarTitleText":"标题栏加载动画",
	"usingComponents":{}
}
</script>
<script>
import {OnekitApp,OnekitPage,OnekitComponent} from "../../../onekit/onekit.js";
import wx from "../../../onekit/wx.js";
export default OnekitPage({
    onShareAppMessage:function(){
        return {
            title:'标题栏加载动画',
            path:'packageAPI/pages/navigation-bar-loading/navigation-bar-loading'
        };
    },
    showNavigationBarLoading:function(){
        wx.showNavigationBarLoading();
    },
    hideNavigationBarLoading:function(){
        wx.hideNavigationBarLoading();
    }
});
</script>
<template>
<import src="../../../common/head.vue"/>
<import src="../../../common/foot.vue"/>

<onekit-view class="container">
  

  <onekit-view class="page-body">
    <onekit-view class="btn-area">
      <onekit-button type="primary" @tap="showNavigationBarLoading">显示加载动画</onekit-button>
      <onekit-button @tap="hideNavigationBarLoading">隐藏加载动画</onekit-button>
    </onekit-view>
  </onekit-view>

  
</onekit-view></template>

<style scoped src="@/app.css"/>
<style>

</style>
