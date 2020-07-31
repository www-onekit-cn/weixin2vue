<script>
const PAGE_JSON = {
	"navigationBarTitleText":"小程序接口文档",
	"usingComponents":{}
}
</script>
<script>
import {OnekitApp,OnekitPage,OnekitComponent} from "../../../onekit/onekit.js";
import wx from "../../../onekit/wx.js";
OnekitPage({
    onShareAppMessage:function(){
        return {
            title:'小程序接口文档',
            path:'packageAPI/pages/doc-web-view/doc-web-view'
        };
    }
});
</script>
<template>
<onekit-web-view src="https://developers.weixin.qq.com/miniprogram/dev/api/"></onekit-web-view></template>
<style scoped src="@/onekit/onekit.css"/><style>
/* miniprogram/page/API/pages/doc-web-view/doc-web-view.css */
</style>
