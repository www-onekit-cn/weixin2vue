<script>
const PAGE_JSON = {
	"navigationBarTitleText":"下拉刷新",
	"enablePullDownRefresh":true,
	"usingComponents":{}
}
</script>
<template>
<import src="../../../common/head.vue"/>
<import src="../../../common/foot.vue"/>

<onekit-view class="container">
  

  <onekit-view class="page-body">
    <onekit-view class="page-section">
      <onekit-view class="page-body-info">
        <onekit-text class="page-body-text">下滑页面即可刷新</onekit-text>
      </onekit-view>
      <onekit-view class="btn-area">
        <onekit-button @tap="stopPullDownRefresh">停止刷新</onekit-button>
      </onekit-view>
    </onekit-view>
  </onekit-view>

  
</onekit-view></template>
<script>
import {OnekitApp,OnekitPage,OnekitComponent} from '../../../onekit/onekit.js';
import wx from '../../../onekit/wx.js';
export default OnekitPage({
    onShareAppMessage:function(){
        return {
            title:'下拉刷新',
            path:'packageAPI/pages/pull-down-refresh/pull-down-refresh'
        };
    },
    onPullDownRefresh:function(){
        wx.showToast({
            title:'loading...',
            icon:'loading'
        });
        console.log('onPullDownRefresh',new Date());
    },
    stopPullDownRefresh:function(){
        wx.stopPullDownRefresh({
            complete:function(res){
                wx.hideToast();
                console.log(res,new Date());
            }
        });
    }
});
</script>
<style scoped src="@/app.css"/>
<style>
.page-body-info {
  background-color: transparent;
}
.btn-area{
  margin-top: 150px;
}
</style>
