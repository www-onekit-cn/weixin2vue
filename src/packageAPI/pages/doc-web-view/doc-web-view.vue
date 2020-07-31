<script>
const PAGE_JSON = {
	"navigationBarTitleText":"小程序接口文档",
	"usingComponents":{}
}
</script>
<template>
<onekit-web-view src="https://developers.weixin.qq.com/miniprogram/dev/api/"></onekit-web-view></template>
<script>
import {OnekitApp,OnekitPage,OnekitComponent} from '../../../onekit/onekit.js';
import wx from '../../../onekit/wx.js';
export default OnekitPage({
    onShareAppMessage:function(){
        return {
            title:'小程序接口文档',
            path:'packageAPI/pages/doc-web-view/doc-web-view'
        };
    }
});
</script>
<style scoped src="@/app.css"/>
<style>
/* miniprogram/page/API/pages/doc-web-view/doc-web-view.css */
</style>
