<script>
const PAGE_JSON = {
	"navigationBarTitleText":"WXS",
	"usingComponents":{}
}
</script>
<template>
<import src="../../../common/head.vue"/>
<import src="../../../common/foot.vue"/>

<onekit-view class="container">
  

  <onekit-view class="page-body">
    <onekit-view class="page-section">
    <onekit-view class="btn-area">
      <onekit-button type="primary" data-nav="movable" @:tap="handleNavChange">movable</onekit-button>
    </onekit-view>
    
    <onekit-view class="btn-area">
      <onekit-button type="primary" data-nav="nearby" @:tap="handleNavChange">跟随 swiper 的图片切换</onekit-button>   
    </onekit-view>
    </onekit-view>
  </onekit-view>

  
</onekit-view></template>
<script>
import {OnekitApp,OnekitPage,OnekitComponent} from '../../../onekit/onekit.js';
import wx from '../../../onekit/wx.js';
export default OnekitPage({
    onShareAppMessage:function(){
        return {
            title:'wxs',
            path:'packageAPI/pages/wxs/wxs'
        };
    },
    handleNavChange:function(e){
        console.log(e);
        wx.navigateTo({
            url:`/packageAPI/pages/wxs/${e.currentTarget.dataset.nav}`
        });
    }
});
</script>
<style scoped src="@/app.css"/>
<style>

</style>
