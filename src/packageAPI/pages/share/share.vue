<script>
const PAGE_JSON = {
	"navigationBarTitleText":"转发",
	"usingComponents":{}
}
</script>
<script>
import {OnekitApp,OnekitPage,OnekitComponent} from "../../../onekit/onekit.js";
import wx from "../../../onekit/wx.js";
export default OnekitPage({
    data:{
        shareData:{
            title:'自定义转发标题',
            desc:'自定义转发描述',
            path:'packageAPI/pages/share/share'
        }
    },
    onShareAppMessage:function(){
        return this.data.shareData;
    }
});
</script>
<template>
<import src="../../../common/head.vue"/>
<import src="../../../common/foot.vue"/>

<onekit-view class="container">
  

  <onekit-view class="page-body">
    <onekit-view class="weui-cells__title">发送内容（以下字段可自由适配）</onekit-view>
    <onekit-view class="weui-cells weui-cells_after-title">
      <onekit-view class="weui-cell weui-cell_input">
        <onekit-view class="weui-cell__hd">
          <onekit-view class="weui-label">标题</onekit-view>
        </onekit-view>
        <onekit-view class="weui-cell__bd">
          <onekit-input class="weui-input" type="text" :disabled="true" :value="shareData.title"></onekit-input>
        </onekit-view>
      </onekit-view>
      <onekit-view class="weui-cell weui-cell_input">
        <onekit-view class="weui-cell__hd">
          <onekit-view class="weui-label">描述</onekit-view>
        </onekit-view>
        <onekit-view class="weui-cell__bd">
          <onekit-input class="weui-input" type="text" :disabled="true" :value="shareData.desc"></onekit-input>
        </onekit-view>
      </onekit-view>
      <onekit-view class="weui-cell weui-cell_input">
        <onekit-view class="weui-cell__hd">
          <onekit-view class="weui-label">跳转页面</onekit-view>
        </onekit-view>
        <onekit-view class="weui-cell__bd">
          <onekit-input class="weui-input" type="text" :disabled="true" :value="shareData.path"></onekit-input>
        </onekit-view>
      </onekit-view>
    </onekit-view>
    <onekit-view class="weui-cells__tips">点击右上角菜单转发给好友</onekit-view>
  </onekit-view>

  
</onekit-view></template>

<style scoped src="@/app.css"/>
<style>
@import "../../../common/lib/weui.css";
</style>
