<script>
const PAGE_JSON = {
	"pageOrientation":"auto",
	"navigationBarTitleText":"屏幕旋转",
	"usingComponents":{}
}
</script>
<script>
import {OnekitApp,OnekitPage,OnekitComponent} from "../../../onekit/onekit.js";
import wx from "../../../onekit/wx.js";
export default OnekitPage({
    onShareAppMessage:function(){
        return {
            title:'屏幕旋转',
            path:'package/API/pages/resizable/resizable'
        };
    },
    data:{
        status:'lock'
    },
    handleStatusChange:function(e){
        this.setData({
            status:e.currentTarget.dataset.status
        });
    }
});
</script>
<template>
<import src="../../../common/head.vue"/>
<import src="../../../common/foot.vue"/>
<script>
const resizable = require('./resizable.wxs');
</script>

<onekit-view class="container">
  

  <onekit-view class="page-body">
    <onekit-view class="page-section">
      <onekit-view style="text-align:center">
        
        旋转屏幕
      </onekit-view>
      <onekit-image src="http://mmbiz.qpic.cn/sz_mmbiz_png/GEWVeJPFkSHALb0g5rCc4Jf5IqDfdwhWJ43I1IvriaV5uFr9fLAuv3uxHR7DQstbIxhNXFoQEcxGzWwzQUDBd6Q/0?wx_fmt=png" mode="aspectFit" style="width: 100%"></onekit-image>
      
    </onekit-view>
  </onekit-view>

  
</onekit-view></template>

<style scoped src="@/app.css"/>
<style>
/* miniprogram/packageAPI/pages/resizable/resizable.css */
</style>
