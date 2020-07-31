<script>
const PAGE_JSON = {
	"navigationBarTitleText":"页面滚动",
	"usingComponents":{}
}
</script>
<script>
import {OnekitApp,OnekitPage,OnekitComponent} from "../../../onekit/onekit.js";
import wx from "../../../onekit/wx.js";
export default OnekitPage({
    onShareAppMessage:function(){
        return {
            title:'页面滚动',
            path:'packageAPI/pages/page-scroll/page-scroll'
        };
    },
    scrollToTop:function(){
        wx.pageScrollTo({
            scrollTop:0,
            duration:300
        });
    },
    scrollToBottom:function(){
        wx.pageScrollTo({
            scrollTop:3000,
            duration:300
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
      <onekit-view class="btn-area">
        <onekit-button type="primary" @tap="scrollToBottom">滚动到页面底部</onekit-button>
      </onekit-view>
      <onekit-view class="filling-area"></onekit-view>
      <onekit-view class="btn-area">
        <onekit-button type="primary" @tap="scrollToTop">返回顶部</onekit-button>
      </onekit-view>
    </onekit-view>
  </onekit-view>

  
</onekit-view></template>

<style scoped src="@/app.css"/>
<style>
.rect {
  width: 50px;
  height: 50px;
  background-color: #ccc;
}

.filling-area {
  height: 1250px;
}
</style>
