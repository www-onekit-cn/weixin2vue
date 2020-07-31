<script>
const PAGE_JSON = {
	"navigationBarTitleText":"webview",
	"usingComponents":{}
}
</script>
<template>
<onekit-web-view src="https://developers.weixin.qq.com/miniprogram/introduction/"></onekit-web-view></template>
<script>
import {OnekitApp,OnekitPage,OnekitComponent} from '../../../../onekit/onekit.js';
import wx from '../../../../onekit/wx.js';
export default OnekitPage({
    onShareAppMessage:function(){
        return {
            title:'webview',
            path:'page/component/pages/web-view/web-view'
        };
    }
});
</script>
<style scoped src="@/app.css"/>
<style>

</style>
