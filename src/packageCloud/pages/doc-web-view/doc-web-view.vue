<script>
const PAGE_JSON = {
	"navigationBarTitleText":"小程序云开发文档",
	"usingComponents":{}
}
</script>
<script>
import {OnekitApp,OnekitPage,OnekitComponent} from "../../../onekit/onekit.js";
import wx from "../../../onekit/wx.js";
export default OnekitPage({
    onShareAppMessage:function(){
        return {
            title:'小程序云开发文档',
            path:'page/cloud/pages/doc-web-view/doc-web-view'
        };
    }
});
</script>
<template>
<onekit-web-view src="https://developers.weixin.qq.com/miniprogram/dev/wxcloud/basis/getting-started.html"></onekit-web-view></template>
<style scoped src="@/onekit/onekit.css"/>
<style scoped src="@/app.css"/>
<style>
/* miniprogram/page/cloud/pages/doc-web-view/doc-web-view.css */
</style>
