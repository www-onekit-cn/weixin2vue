<script>
const PAGE_JSON = {
	"navigationBarTitleText":"小程序组件文档",
	"usingComponents":{}
}
</script>
<template>
<onekit-web-view src="https://developers.weixin.qq.com/miniprogram/dev/component/"></onekit-web-view></template>
<script>
import OnekitPage from "../../../../onekit/OnekitPage.js"
import wx from '../../../../onekit/wx.js';
export default OnekitPage({
    onShareAppMessage:function(){
        return {
            title:'小程序组件文档',
            path:'page/component/pages/doc-web-view/doc-web-view'
        };
    }
});
</script>
<style scoped src="@/app.css"/>
<style>
/* miniprogram/page/component/pages/doc-web-view/doc-web-view.css */
</style>
