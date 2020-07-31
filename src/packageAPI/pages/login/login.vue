<script>
const PAGE_JSON = {
	"navigationBarTitleText":"微信登录",
	"usingComponents":{}
}
</script>
<template>
<import src="../../../common/head.vue"/>
<import src="../../../common/foot.vue"/>

<onekit-view class="container">
  

  <onekit-view class="page-body">
    <onekit-view class="page-section">
      <onekit-block v-if="hasLogin === true">
        <onekit-text class="page-body-title">已登录</onekit-text>
        <onekit-text class="page-body-text">每个微信号中仅需登录 1 次，后续每次进入页面即可根据微信 id 自动拉取用户信息</onekit-text>
      </onekit-block>
      <onekit-block v-if="hasLogin === false">
        <onekit-text class="page-body-text">每个微信号中仅需登录一次</onekit-text>
        <onekit-button class="page-body-button" type="primary" @tap="login">微信登录</onekit-button>
      </onekit-block>
    </onekit-view>
  </onekit-view>

  
</onekit-view></template>
<script>
import {OnekitApp,OnekitPage,OnekitComponent} from '../../../onekit/onekit.js';
import wx from '../../../onekit/wx.js';
const app = getApp();
export default OnekitPage({
    onShareAppMessage:function(){
        return {
            title:'微信登录',
            path:'package/API/pages/login/login'
        };
    },
    onLoad:function(){
        this.setData({
            hasLogin:app.globalData.hasLogin
        });
    },
    data:{},
    login:function(){
        const that = this;
        wx.login({
            success:function(){
                app.globalData.hasLogin = true;
                that.setData({
                    hasLogin:true
                });
            }
        });
    }
});
</script>
<style scoped src="@/app.css"/>
<style>
.page-section {
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0 25px;
  box-sizing: border-box;
}
.page-body-title {
  font-size: 30px;
  line-height: 100px;
}
.page-body-text {
  color: #bbb;
  font-size: 14px;
  line-height: 20px;
  margin: 0 0 50px 0;
  text-align: center;
}
.page-body-button {
  width: 100%;
}
</style>
