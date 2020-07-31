<script>
const PAGE_JSON = {
	"navigationBarTitleText":"监听手机网络变化",
	"usingComponents":{}
}
</script>
<script>
import {OnekitApp,OnekitPage,OnekitComponent} from "../../../onekit/onekit.js";
import wx from "../../../onekit/wx.js";
export default OnekitPage({
    onShareAppMessage:function(){
        return {
            title:'监听手机网络变化',
            path:'packageAPI/pages/on-network-status-change/on-network-status-change'
        };
    },
    data:{
        isConnected:false
    },
    onLoad:function(){
        const that = this;
        wx.onNetworkStatusChange(function(res){
            that.setData({
                isConnected:res.isConnected,
                networkType:res.networkType
            });
        });
    },
    onShow:function(){
        const that = this;
        wx.getNetworkType({
            success:function(res){
                that.setData({
                    isConnected:res.networkType !== 'none',
                    networkType:res.networkType
                });
            }
        });
    }
});
</script>
<template>
<import src="../../../common/head.vue"/>
<import src="../../../common/foot.vue"/>

<onekit-view class="container">
  

  <onekit-view class="page-body">
    <onekit-view class="page-section">
      <onekit-view class="page-body-info">
        <onekit-view class="page-body-title">网络状态</onekit-view>
        <onekit-block v-if="isConnected === false">
          <onekit-text class="page-body-text">没有网络连接</onekit-text>
        </onekit-block>
        <onekit-block v-if="isConnected === true">
          <onekit-text class="page-body-text-network-type">{{networkType}}</onekit-text>
        </onekit-block>
      </onekit-view>
    </onekit-view>
  </onekit-view>

  
</onekit-view></template>

<style scoped src="@/app.css"/>
<style>
.page-body-info {
  height: 100px;
}
.page-body-text-network-type {
  font-size: 40px;
  font-family: -apple-system-font,Helvetica Neue,Helvetica,sans-serif;
}
</style>
