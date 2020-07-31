<script>
const PAGE_JSON = {
	"navigationBarTitleText":"swiper",
	"usingComponents":{}
}
</script>
<script>
import {OnekitApp,OnekitPage,OnekitComponent} from "../../../../onekit/onekit.js";
import wx from "../../../../onekit/wx.js";
export default OnekitPage({
    onShareAppMessage:function(){
        return {
            title:'swiper',
            path:'page/component/pages/swiper/swiper'
        };
    },
    data:{
        background:[
            'demo-text-1',
            'demo-text-2',
            'demo-text-3'
        ],
        indicatorDots:true,
        vertical:false,
        autoplay:false,
        interval:2000,
        duration:500
    },
    changeIndicatorDots:function(){
        this.setData({
            indicatorDots:!this.data.indicatorDots
        });
    },
    changeAutoplay:function(){
        this.setData({
            autoplay:!this.data.autoplay
        });
    },
    intervalChange:function(e){
        this.setData({
            interval:e.detail.value
        });
    },
    durationChange:function(e){
        this.setData({
            duration:e.detail.value
        });
    }
});
</script>
<template>
<import src="../../../common/head.vue"/>
<import src="../../../common/foot.vue"/>

<onekit-view class="container">
  

  <onekit-view class="page-body">
    <onekit-view class="page-section page-section-spacing swiper">
      <onekit-swiper :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
        <onekit-block v-for="(item) in background">
          <onekit-swiper-item>
            <onekit-view :class="'swiper-item '+item"></onekit-view>
          </onekit-swiper-item>
        </onekit-block>
      </onekit-swiper>
    </onekit-view>
    <onekit-view class="page-section" style="margin-top: 20px;margin-bottom: 0;">
      <onekit-view class="weui-cells weui-cells_after-title">
        <onekit-view class="weui-cell weui-cell_switch">
          <onekit-view class="weui-cell__bd">指示点</onekit-view>
          <onekit-view class="weui-cell__ft">
            <onekit-switch :checked="indicatorDots" @change="changeIndicatorDots"></onekit-switch>
          </onekit-view>
        </onekit-view>
        <onekit-view class="weui-cell weui-cell_switch">
          <onekit-view class="weui-cell__bd">自动播放</onekit-view>
          <onekit-view class="weui-cell__ft">
            <onekit-switch :checked="autoplay" @change="changeAutoplay"></onekit-switch>
          </onekit-view>
        </onekit-view>
      </onekit-view>
    </onekit-view>

    <onekit-view class="page-section page-section-spacing">
      <onekit-view class="page-section-title">
        <onekit-text>幻灯片切换时长(ms)</onekit-text>
        <onekit-text class="info">{{duration}}</onekit-text>
      </onekit-view>
      <onekit-slider @change="durationChange" :value="duration" min="500" max="2000"></onekit-slider>
      <onekit-view class="page-section-title">
        <onekit-text>自动播放间隔时长(ms)</onekit-text>
        <onekit-text class="info">{{interval}}</onekit-text>
      </onekit-view>
      <onekit-slider @change="intervalChange" :value="interval" min="2000" max="10000"></onekit-slider>
    </onekit-view>
  </onekit-view>

  
</onekit-view></template>
<style scoped src="@/onekit/onekit.css"/>
<style scoped src="@/app.css"/>
<style>
@import "../../../common/lib/weui.css";

button{
  margin-bottom: 15px;
}
button:last-child{
  margin-bottom: 0;
}
.page-section-title{
  padding: 0;
}
.swiper-item{
  display: block;
  height: 150px;
}
.page-section-title{
  margin-top: 30px;
  position: relative;
}
.info{
  position: absolute;
  right: 0;
  color: #353535;
  font-size: 15px;
}
.page-foot{
  margin-top: 25px;
}
</style>
