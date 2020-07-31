<script>
const PAGE_JSON = {
	"navigationBarTitleText":"用户截屏事件",
	"usingComponents":{}
}
</script>
<template>
<import src="../../../common/head.vue"/>
<import src="../../../common/foot.vue"/>

<onekit-view class="container">
  

  <onekit-view class="page-body">
    <onekit-view class="page-body-info">
      <onekit-view class="page-body-title">请进行屏幕截屏</onekit-view>
      <onekit-text class="page-body-text">截屏事件{{ captured ? "已" : "未" }}触发</onekit-text>
    </onekit-view>
  </onekit-view>

  
</onekit-view></template>
<script>
import {OnekitApp,OnekitPage,OnekitComponent} from '../../../onekit/onekit.js';
import wx from '../../../onekit/wx.js';
export default OnekitPage({
    onShareAppMessage:function(){
        return {
            title:'用户截屏事件',
            path:'packageAPI/pages/capture-screen/capture-screen'
        };
    },
    data:{
        captured:false
    },
    onLoad:function(){
        wx.onUserCaptureScreen(()=>{this.setData({
            captured:true
        })});
    }
});
</script>
<style scoped src="@/app.css"/>
<style>
.page-body-text {
  font-size: 20px;
  font-family: -apple-system-font, Helvetica Neue,Helvetica,sans-serif;
}
</style>
