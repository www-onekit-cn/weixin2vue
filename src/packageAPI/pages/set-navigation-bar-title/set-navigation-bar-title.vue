<script>
const PAGE_JSON = {
	"navigationBarTitleText":"设置页面标题",
	"usingComponents":{}
}
</script>
<script>
import {OnekitApp,OnekitPage,OnekitComponent} from "../../../onekit/onekit.js";
import wx from "../../../onekit/wx.js";
OnekitPage({
    onShareAppMessage:function(){
        return {
            title:'设置页面标题',
            path:'packageAPI/pages/set-navigation-bar-title/set-navigation-bar-title'
        };
    },
    setNaivgationBarTitle:function(e){
        const title = e.detail.value.title;
        console.log(title);
        wx.setNavigationBarTitle({
            title:title,
            success:function(){
                console.log('setNavigationBarTitle success');
            },
            fail:function(err){
                console.log('setNavigationBarTitle fail, err is',err);
            }
        });
        return false;
    }
});
</script>
<template>
<import src="../../../common/head.vue"/>
<import src="../../../common/foot.vue"/>

<onekit-view class="container">
  

  <onekit-form class="page-body" @submit="setNaivgationBarTitle">
    <onekit-view class="weui-cells weui-cells_after-title">
      <onekit-view class="weui-cell weui-cell_input">
        <onekit-view class="weui-cell__hd">
          <onekit-view class="weui-label">页面标题</onekit-view>
        </onekit-view>
        <onekit-view class="weui-cell__bd">
          <onekit-input class="weui-input" type="text" placeholder="请输入页面标题并点击设置即可" name="title"></onekit-input>
        </onekit-view>
      </onekit-view>
    </onekit-view>
    <onekit-view class="btn-area">
      <onekit-button type="primary" formType="submit">设置</onekit-button>
    </onekit-view>
  </onekit-form>

  
</onekit-view></template>
<style scoped src="@/onekit/onekit.css"/><style>
@import "../../../common/lib/weui.css";

.weui-label{
  width: 5em;
}
</style>
