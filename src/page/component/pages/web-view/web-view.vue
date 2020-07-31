<script>
const PAGE_JSON = {
	"navigationBarTitleText":"webview",
	"usingComponents":{}
}
</script>
<script>
import {OnekitApp,OnekitPage,OnekitComponent} from "../../../../onekit/onekit.js";
import wx from "../../../../onekit/wx.js";
OnekitPage({
    onShareAppMessage:function(){
        return {
            title:'webview',
            path:'page/component/pages/web-view/web-view'
        };
    }
});
</script>
<template>
<onekit-web-view src="https://developers.weixin.qq.com/miniprogram/introduction/"></onekit-web-view></template>
<style scoped src="@/onekit/onekit.css"/><style>

</style>
