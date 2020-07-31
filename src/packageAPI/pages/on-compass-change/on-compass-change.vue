<script>
const PAGE_JSON = {
	"navigationBarTitleText":"监听罗盘数据",
	"usingComponents":{}
}
</script>
<script>
import {OnekitApp,OnekitPage,OnekitComponent} from "../../../onekit/onekit.js";
import wx from "../../../onekit/wx.js";
export default OnekitPage({
    onShareAppMessage:function(){
        return {
            title:'监听罗盘数据',
            path:'packageAPI/pages/on-compass-change/on-compass-change'
        };
    },
    data:{
        enabled:true,
        direction:0
    },
    onReady:function(){
        const that = this;
        wx.onCompassChange(function(res){
            that.setData({
                direction:parseInt(res.direction,10)
            });
        });
    },
    startCompass:function(){
        if(this.data.enabled){
            return;
        }
        const that = this;
        wx.startCompass({
            success:function(){
                that.setData({
                    enabled:true
                });
            }
        });
    },
    stopCompass:function(){
        if(!this.data.enabled){
            return;
        }
        const that = this;
        wx.stopCompass({
            success:function(){
                that.setData({
                    enabled:false
                });
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
    <onekit-view class="page-section page-section_center">
      <onekit-text class="page-body-text">旋转手机即可获取方位信息</onekit-text>
      <onekit-view class="direction">
        <onekit-view class="bg-compass-line"></onekit-view>
        <onekit-image class="bg-compass" src="compass.png" :style="'transform: rotate('+direction+'deg)'"></onekit-image>
        <onekit-view class="direction-value">
          <onekit-text>{{direction}}</onekit-text>
          <onekit-text class="direction-degree">o</onekit-text>
        </onekit-view>
      </onekit-view>
      <onekit-view class="controls">
        <onekit-button @tap="startCompass" :disabled="enabled">开始监听</onekit-button>
        <onekit-button @tap="stopCompass" :disabled="!enabled">停止监听</onekit-button>
      </onekit-view>
    </onekit-view>
  </onekit-view>

  
</onekit-view></template>
<style scoped src="@/onekit/onekit.css"/>
<style scoped src="@/app.css"/>
<style>
.direction {
  position: relative;
  margin-top: 35px;
  display: flex;
  width: 520px;
  height: 520px;
  align-items: center;
  justify-content: center;
}
.direction-value {
  position: relative;
  font-size: 100px;
  color: #353535;
  line-height: 1;
  z-index: 1;
}
.direction-degree {
  position: absolute;
  top: 0;
  right: -20px;
  font-size: 30px;
}
.bg-compass{
  position: absolute;
  top: 0;
  left: 0;
  width: 520px;
  height: 520px;
  transition: .1s;
}
.bg-compass-line{
  position: absolute;
  left: 134px;
  top: -5px;
  width: 3px;
  height: 28px;
  background-color: #1AAD19;
  border-radius: 500px;
  z-index: 1;
}
.controls{
  margin-top: 35px;
}
.controls button{
  margin-left: 10px;
  float: left;
}
</style>
