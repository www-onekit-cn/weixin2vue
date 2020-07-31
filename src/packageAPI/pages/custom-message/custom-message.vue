<script>
const PAGE_JSON = {
	"navigationBarTitleText":"客服消息",
	"usingComponents":{}
}
</script>
<script>
import {OnekitApp,OnekitPage,OnekitComponent} from "../../../onekit/onekit.js";
import wx from "../../../onekit/wx.js";
export default OnekitPage({
    onShareAppMessage:function(){
        return {
            title:'客服消息',
            path:'packageAPI/pages/custom-message/custom-message'
        };
    }
});
</script>
<template>
<import src="../../../common/head.vue"/>
<import src="../../../common/foot.vue"/>

<onekit-view class="container">
  

  <onekit-view class="page-body">
    <onekit-view class="page-body-wrapper">
      <onekit-text class="page-body-title">
        点击气泡icon打开客服消息界面
      </onekit-text>
      <onekit-view class="page-body-line">
        <onekit-contact-button size="40" session-from="weapp"></onekit-contact-button>
      </onekit-view>
    </onekit-view>
  </onekit-view>

  
</onekit-view></template>

<style scoped src="@/app.css"/>
<style>
/* page/API/pages/custom-message/custom-message.css */
</style>
