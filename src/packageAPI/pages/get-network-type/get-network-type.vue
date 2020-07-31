<script>
const PAGE_JSON = {
	"navigationBarTitleText":"获取手机网络状态",
	"usingComponents":{}
}
</script>
<script>
import {OnekitApp,OnekitPage,OnekitComponent} from "../../../onekit/onekit.js";
import wx from "../../../onekit/wx.js";
OnekitPage({
    onShareAppMessage:function(){
        return {
            title:'获取手机网络状态',
            path:'packageAPI/pages/get-network-type/get-network-type'
        };
    },
    data:{
        hasNetworkType:false
    },
    getNetworkType:function(){
        const that = this;
        wx.getNetworkType({
            success:function(res){
                console.log(res);
                that.setData({
                    hasNetworkType:true,
                    networkType:res.subtype || res.networkType
                });
            }
        });
    },
    clear:function(){
        this.setData({
            hasNetworkType:false,
            networkType:''
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
        <onekit-block v-if="hasNetworkType === false">
          <onekit-text class="page-body-text">未获取</onekit-text>
          <onekit-text class="page-body-text">点击绿色按钮可获取网络状态</onekit-text>
        </onekit-block>
        <onekit-block v-if="hasNetworkType === true">
          <onekit-text class="page-body-text-network-type">{{networkType}}</onekit-text>
        </onekit-block>
      </onekit-view>
      <onekit-view class="btn-area">
        <onekit-button type="primary" @tap="getNetworkType">获取手机网络状态</onekit-button>
        <onekit-button @tap="clear">清空</onekit-button>
      </onekit-view>
    </onekit-view>
  </onekit-view>

  
</onekit-view></template>
<style scoped src="@/onekit/onekit.css"/><style>
.page-body-info {
  height: 100px;
}
.page-body-text-network-type {
  font-size: 40px;
  font-family: -apple-system-font,Helvetica Neue,Helvetica,sans-serif;
}
</style>
