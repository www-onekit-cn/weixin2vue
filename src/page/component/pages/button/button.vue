<script>
const PAGE_JSON = {
	"navigationBarTitleText":"button",
	"usingComponents":{}
}
</script>
<template>
<import src="../../../common/head.vue"/>
<import src="../../../common/foot.vue"/>

<onekit-view class="container">
  

  <onekit-view class="page-body">
    <onekit-view class="btn-area" id="buttonContainer">
      <onekit-button type="primary">页面主操作 Normal</onekit-button>
      <onekit-button type="primary" loading="true">页面主操作 Loading</onekit-button>
      <onekit-button type="primary" disabled="true">页面主操作 Disabled</onekit-button>

      <onekit-button type="default">页面次要操作 Normal</onekit-button>
      <onekit-button type="default" disabled="true">页面次要操作 Disabled</onekit-button>

      <onekit-button type="warn">警告类操作 Normal</onekit-button>
      <onekit-button type="warn" disabled="true">警告类操作 Disabled</onekit-button>

      <onekit-view class="button-sp-area">
        <onekit-button type="primary" plain="true">按钮</onekit-button>
        <onekit-button type="primary" disabled="true" plain="true">不可点击的按钮</onekit-button>

        <onekit-button type="default" plain="true">按钮</onekit-button>
        <onekit-button type="default" disabled="true" plain="true">按钮</onekit-button>

        <onekit-button class="mini-btn" type="primary" size="mini">按钮</onekit-button>
        <onekit-button class="mini-btn" type="default" size="mini">按钮</onekit-button>
        <onekit-button class="mini-btn" type="warn" size="mini">按钮</onekit-button>
      </onekit-view>
      <onekit-button type="primary" open-type="contact" @contact="handleContact" :show-message-card="true" send-message-title="临时会话">打开客服会话</onekit-button>
      <onekit-button type="primary" open-type="share">触发用户转发</onekit-button>
      <onekit-button type="primary" open-type="getPhoneNumber" @getphonenumber="handleGetPhoneNumber">获取用户手机号</onekit-button>
      <onekit-button type="primary" open-type="getUserInfo" lang="zh_CN" @getuserinfo="handleGetUserInfo">获取用户信息</onekit-button>
      <onekit-button type="primary" open-type="openSetting" @opensetting="handleOpenSetting">打开设置授权页</onekit-button>
      <onekit-button type="primary" open-type="feedback">打开意见反馈</onekit-button>
    </onekit-view>
  </onekit-view>

  
</onekit-view></template>
<script>
import {OnekitApp,OnekitPage,OnekitComponent} from '../../../../onekit/onekit.js';
import wx from '../../../../onekit/wx.js';
const types = [
    'default',
    'primary',
    'warn'
];
const pageObject = {
    data:{
        defaultSize:'default',
        primarySize:'default',
        warnSize:'default',
        disabled:false,
        plain:false,
        loading:false
    },
    onShareAppMessage:function(){
        return {
            title:'button',
            path:'page/component/pages/button/button'
        };
    },
    setDisabled:function(){
        this.setData({
            disabled:!this.data.disabled
        });
    },
    setPlain:function(){
        this.setData({
            plain:!this.data.plain
        });
    },
    setLoading:function(){
        this.setData({
            loading:!this.data.loading
        });
    },
    handleContact:function(e){
        console.log(e.detail);
    },
    handleGetPhoneNumber:function(e){
        console.log(e.detail);
    },
    handleGetUserInfo:function(e){
        console.log(e.detail);
    },
    handleOpenSetting:function(e){
        console.log(e.detail.authSetting);
    },
    handleGetUserInfo:function(e){
        console.log(e.detail.userInfo);
    }
};
for(var i = 0;i < types.length;++i){
    (function(type){
        pageObject[type] = function(){
            const key = type + 'Size';
            const changedData = {};
            changedData[key] = this.data[key] === 'default'?'mini':'default';
            this.setData(changedData);
        };
    }(types[i]));
};
export default OnekitPage(pageObject);
</script>
<style scoped src="@/app.css"/>
<style>
button{
  margin-top: 15px;
  margin-bottom: 15px;
}
.button-sp-area{
  margin: 0 auto;
  width: 60%;
}
.mini-btn{
  margin-right: 5px;
}
</style>
