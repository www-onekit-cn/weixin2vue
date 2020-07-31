<script>
const PAGE_JSON = {
	"navigationBarTitleText":"two-way-bindings",
	"usingComponents":{}
}
</script>
<script>
import {OnekitApp,OnekitPage,OnekitComponent} from "../../../onekit/onekit.js";
import wx from "../../../onekit/wx.js";
export default OnekitPage({
    data:{
        value:''
    },
    onLoad:function(options){
    },
    onReady:function(){
    },
    onShow:function(){
    },
    onHide:function(){
    },
    onUnload:function(){
    },
    onPullDownRefresh:function(){
    },
    onReachBottom:function(){
    },
    onShareAppMessage:function(){
        return {
            title:'双向绑定',
            path:'packageAPI/pages/make-phone-call/make-phone-call'
        };
    }
});
</script>
<template>
<import src="../../../common/head.vue"/>
<import src="../../../common/foot.vue"/>

<onekit-view class="container">
  

  <onekit-view class="page-body">
    <onekit-view class="page-section">
      <onekit-input class="input" :model:value="value" placeholder="请输入"></onekit-input>
      <onekit-view class="text">这是你输入的数据：{{value}}</onekit-view>
    </onekit-view>
   
  </onekit-view>

  
</onekit-view></template>

<style scoped src="@/app.css"/>
<style>
.input {
  margin: 15px auto;
  width: 80%;
  /* border-bottom: 1px solid black; */
}
.text {
  margin: 15px auto;
  width: 80%;
}
</style>
