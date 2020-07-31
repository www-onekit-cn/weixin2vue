<script>
const PAGE_JSON = {
	"navigationBarTitleText":"redirectPage",
	"usingComponents":{}
}
</script>
<template>
<import src="../../../common/head.vue"/>
<import src="../../../common/foot.vue"/>

<onekit-view class="container">
  
</onekit-view></template>
<script>
import {OnekitApp,OnekitPage,OnekitComponent} from '../../../../onekit/onekit.js';
import wx from '../../../../onekit/wx.js';
export default OnekitPage({
    onShareAppMessage:function(){
        return {
            title:'redirectPage',
            path:'page/component/pages/navigator/redirect'
        };
    },
    onLoad:function(options){
        console.log(options);
        this.setData({
            title:options.title
        });
    }
});
</script>
<style scoped src="@/app.css"/>
<style>
/* page/component/pages/navigator/redirect.css */
</style>
