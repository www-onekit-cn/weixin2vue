<script>
const PAGE_JSON = {
	"navigationBarTitleText":"WXContext",
	"usingComponents":{}
}
</script>
<script>
import {OnekitApp,OnekitPage,OnekitComponent} from "../../../onekit/onekit.js";
import wx from "../../../onekit/wx.js";
export default OnekitPage({
    onShareAppMessage:function(){
        return {
            title:'WXContext',
            path:'page/cloud/pages/get-wx-context/get-wx-context'
        };
    },
    data:{
        hasWXContext:false,
        wxContext:{},
        loading:false
    },
    getWXContext:function(){
        this.setData({
            loading:true
        });
        wx.cloud.callFunction({
            name:'wxContext',
            data:{},
            success:(res)=>{
                console.log('[云函数] [wxContext] wxContext: ',res.result);
                this.setData({
                    hasWXContext:true,
                    wxContext:res.result,
                    loading:false
                });
            },
            fail:(err)=>{console.error('[云函数] [wxContext] 调用失败',err)}
        });
    },
    clear:function(){
        this.setData({
            hasWXContext:false,
            wxContext:{}
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
        <onekit-view class="page-body-title">WXContext</onekit-view>
        <onekit-block v-if="!hasWXContext">
          <onekit-text class="page-body-text">云函数是在云端（服务器端）运行的函数</onekit-text>
          <onekit-text class="page-body-text">点击绿色按钮可调用云函数获取微信调用上下文</onekit-text>
          <onekit-text class="page-body-text">返回内容包括用户 OpenID、小程序 AppID 以及用户 UnionID（满足 UnionID 获取条件时）</onekit-text>
        </onekit-block>
        <onekit-block v-else>
          <onekit-block>
            <onekit-text class="page-body-text">OpenID</onekit-text>
            <onekit-text class="context-value">{{wxContext.openid}}</onekit-text>
          </onekit-block>
          <onekit-block>
            <onekit-text class="page-body-text">AppID</onekit-text>
            <onekit-text class="context-value">{{wxContext.appid}}</onekit-text>
          </onekit-block>
          <onekit-block v-if="wxContext.unionid">
            <onekit-text class="page-body-text">UnionID</onekit-text>
            <onekit-text class="context-value">{{wxContext.unionid}}</onekit-text>
          </onekit-block>
        </onekit-block>
      </onekit-view>
      <onekit-view class="btn-area">
        <onekit-button type="primary" @tap="getWXContext" :loading="loading">获取 WXContext</onekit-button>
        <onekit-button @tap="clear">清空</onekit-button>
      </onekit-view>
    </onekit-view>
  </onekit-view>

  
</onekit-view></template>
<style scoped src="@/onekit/onekit.css"/>
<style scoped src="@/app.css"/>
<style>
.page-body-info {
  padding-bottom: 0;
  height: 230px;
}
.page-body-text {
  padding: 0 calc(var(--screen-width)*30/750);
  text-align: center;
}
.context-value {
  font-size: calc(var(--screen-width)*38/750);
}
</style>
