<script>
const PAGE_JSON = {
	"navigationBarTitleText":"动画",
	"usingComponents":{}
}
</script>
<script>
import {OnekitApp,OnekitPage,OnekitComponent} from "../../../onekit/onekit.js";
import wx from "../../../onekit/wx.js";
OnekitPage({
    onShareAppMessage:function(){
        return {
            title:'动画',
            path:'package/API/pages/animation/animation',
            containerStyle1:''
        };
    },
    data:{
        canIUse:true
    },
    onLoad:function(){
        const canIUse = this.animate !== undefined;
        if(!canIUse){
            wx.showModal({
                title:'微信版本过低，暂不支持本功能'
            });
            this.setData({
                canIUse:canIUse
            });
        }
    },
    change:function(){
        this.animate('#container1',[
            {
                opacity:1.0,
                rotate:0,
                backgroundColor:'#FF0000'
            },
            {
                opacity:0.5,
                rotate:45,
                backgroundColor:'#00FF00',
                offset:0.9
            },
            {
                opacity:0.0,
                rotate:90,
                backgroundColor:'#FF0000'
            }
        ],5000,function(){
    this.clearAnimation('#container1',{
        opacity:true,
        rotate:true
    },function(){
        console.log("清除了#container上的动画属性");
    });
}.bind(this));
        this.animate('.block1',[
            {
                scale:[
                    1,
                    1
                ],
                rotate:0,
                ease:'ease-out'
            },
            {
                scale:[
                    1.5,
                    1.5
                ],
                rotate:45,
                ease:'ease-in',
                offset:0.9
            },
            {
                scale:[
                    2,
                    2
                ],
                rotate:90
            }
        ],5000,function(){
    this.clearAnimation('.block1',{
        scale:true,
        rotate:true
    },function(){
        console.log("清除了.block1上的动画属性");
    });
}.bind(this));
    }
});
</script>
<template>
<import src="../../../common/head.vue"/>
<import src="../../../common/foot.vue"/>

<onekit-view class="container">
  

  <onekit-view class="page-body">
  <onekit-view class="page-section">
    <onekit-view class="page-section-title">
      <onekit-text>关键帧动画\n\n从小程序基础库 2.9.0 开始支持一种更友好的动画创建方式，用于代替旧的 wx.createAnimation</onekit-text>
    </onekit-view>  
    <onekit-view id="container1" :style="containerStyle1">
      <onekit-button class="block1" style="width: 150px; margin: 50px auto;">示例按钮</onekit-button>
      <onekit-a class="block1" style="display: block; margin: 50px auto; width: 150px; text-align: center;">示例超链接</onekit-a>
      <onekit-text class="block1" style="display: block; margin: 50px auto; width: 150px; text-align: center;">示例文本</onekit-text>
    </onekit-view>
    <onekit-button :disabled="!canIUse" type="primary" @tap="change">开启动画</onekit-button>
  </onekit-view>
  </onekit-view>
  
</onekit-view></template>
<style scoped src="@/onekit/onekit.css"/><style>
.animation-element-wrapper {
  display: flex;
  width: 100%;
  padding-top: 75px;
  padding-bottom: 75px;
  justify-content: center;
  overflow: hidden;
  background-color: #ffffff;
}
.animation-element {
  width: 100px;
  height: 100px;
  background-color: #1AAD19;
}
.animation-buttons {
  padding: 15px 25px 5px;
  width: 100%;
  height: 330px;
  box-sizing: border-box;
}
.animation-button {
  float: left;
  line-height: 2;
  width: 150px;
  margin: 8px 11px;
}

.animation-button-reset {
  width: 610px;
}

.btn-row {
  display: flex;
  justify-content: space-between;
}
</style>
