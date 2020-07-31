<script>
const PAGE_JSON = {
	"navigationBarTitleText":"振动",
	"usingComponents":{}
}
</script>
<script>
import {OnekitApp,OnekitPage,OnekitComponent} from "../../../onekit/onekit.js";
import wx from "../../../onekit/wx.js";
export default OnekitPage({
    onShareAppMessage:function(){
        return {
            title:'振动',
            path:'packageAPI/pages/vibrate/vibrate'
        };
    },
    vibrateShort:function(){
        wx.vibrateShort({
            success:function(res){
                console.log(res);
            },
            fail:function(err){
                console.error(err);
            },
            complete:function(){
                console.log('completed');
            }
        });
    },
    vibrateLong:function(){
        wx.vibrateLong({
            success:function(res){
                console.log(res);
            },
            fail:function(err){
                console.error(err);
            },
            complete:function(){
                console.log('completed');
            }
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
        <onekit-button type="primary" @tap="vibrateLong">长振动</onekit-button>
        <onekit-button type="default" @tap="vibrateShort">短振动</onekit-button>
      </onekit-view>
    </onekit-view>
  </onekit-view>

  
</onekit-view></template>

<style scoped src="@/app.css"/>
<style>

</style>
