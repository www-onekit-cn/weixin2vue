<script>
const PAGE_JSON = {
	"navigationBarTitleText":"页面跳转",
	"usingComponents":{}
}
</script>
<script>
import {OnekitApp,OnekitPage,OnekitComponent} from "../../../onekit/onekit.js";
import wx from "../../../onekit/wx.js";
export default OnekitPage({
    onShareAppMessage:function(){
        return {
            title:'页面跳转',
            path:'packageAPI/pages/navigator/navigator'
        };
    },
    navigateTo:function(){
        wx.navigateTo({
            url:'./navigator'
        });
    },
    navigateBack:function(){
        wx.navigateBack();
    },
    redirectTo:function(){
        wx.redirectTo({
            url:'./navigator'
        });
    },
    switchTab:function(){
        wx.switchTab({
            url:'/page/component/index'
        });
    },
    reLaunch:function(){
        wx.reLaunch({
            url:'/page/component/index'
        });
    }
});
</script>
<template>
<import src="../../../common/head.vue"/>
<import src="../../../common/foot.vue"/>

<onekit-view class="container">
  

  <onekit-view class="page-body">
    <onekit-view class="btn-area">
      <onekit-button @tap="navigateTo">跳转新页面</onekit-button>
      <onekit-button @tap="navigateBack">返回上一页</onekit-button>
      <onekit-button @tap="redirectTo">在当前页面打开</onekit-button>
      <onekit-button @tap="switchTab">跳转到组件Tab页</onekit-button>
      <onekit-button @tap="reLaunch">关闭所有页面并跳转</onekit-button>
    </onekit-view>
  </onekit-view>

  
</onekit-view></template>
<style scoped src="@/onekit/onekit.css"/>
<style scoped src="@/app.css"/>
<style>

</style>
