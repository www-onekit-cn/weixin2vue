<script>
const PAGE_JSON = {
	"navigationBarTitleText":"获取用户信息",
	"usingComponents":{}
}
</script>
<script>
import {OnekitApp,OnekitPage,OnekitComponent} from "../../../onekit/onekit.js";
import wx from "../../../onekit/wx.js";
export default OnekitPage({
    onShareAppMessage:function(){
        return {
            title:'获取用户信息',
            path:'packageAPI/pages/get-user-info/get-user-info'
        };
    },
    data:{
        hasUserInfo:false
    },
    getUserInfo:function(info){
        const userInfo = info.detail.userInfo;
        this.setData({
            userInfo:userInfo,
            hasUserInfo:true
        });
    },
    clear:function(){
        this.setData({
            hasUserInfo:false,
            userInfo:{}
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
        <onekit-view class="page-body-title">用户信息</onekit-view>
        <onekit-block v-if="hasUserInfo === false">
          <onekit-text class="page-body-text">未获取</onekit-text>
          <onekit-text class="page-body-text">点击绿色按钮可获取用户头像及昵称</onekit-text>
        </onekit-block>
        <onekit-block v-if="hasUserInfo === true">
          <onekit-image class="userinfo-avatar" :src="userInfo.avatarUrl"></onekit-image>
          <onekit-text class="userinfo-nickname">{{userInfo.nickName}}</onekit-text>
        </onekit-block>
      </onekit-view>
      <onekit-view class="btn-area">
        <onekit-button type="primary" open-type="getUserInfo" @getuserinfo="getUserInfo">获取用户信息</onekit-button>
        <onekit-button @tap="clear">清空</onekit-button>
      </onekit-view>
    </onekit-view>
  </onekit-view>

  
</onekit-view></template>

<style scoped src="@/app.css"/>
<style>
.page-body-info {
  padding-bottom: 0;
  height: 230px;
}
.userinfo-avatar {
  border-radius: 114px;
  width: 114px;
  height: 114px;
}
.userinfo-nickname {
  margin-top: 10px;
  font-size: 19px;
}
</style>
