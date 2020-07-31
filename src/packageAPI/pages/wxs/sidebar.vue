<script>
const PAGE_JSON = {
	"navigationBarTitleText":"sidebar",
	"usingComponents":{}
}
</script>
<script>
import {OnekitApp,OnekitPage,OnekitComponent} from "../../../onekit/onekit.js";
import wx from "../../../onekit/wx.js";
OnekitPage({
    data:{
        tabs:[
        ],
        open:false,
        mark:0,
        newmark:0,
        startmark:0,
        endmark:0,
        windowWidth:wx.getSystemInfoSync().windowWidth,
        staus:1,
        translate:''
    },
    onLoad:function(){
        const tabs = [
            {
                title:'技术开发',
                title2:'小程序开发进阶',
                img:'http://mmbiz.qpic.cn/sz_mmbiz_jpg/GEWVeJPFkSEV5QjxLDJaL6ibHLSZ02TIcve0ocPXrdTVqGGbqAmh5Mw9V7504dlEiatSvnyibibHCrVQO2GEYsJicPA/0?wx_fmt=jpeg',
                desc:'本视频系列课程，由腾讯课堂NEXT学院与微信团队联合出品，通过实战案例，深入浅出地进行讲解。'
            }
        ];
        this.setData({
            tabs:tabs
        });
    }
});
</script>
<template>

<script>
const test = require('./sidebar.wxs');
</script>

<onekit-view class="page">
  <onekit-view class="page-bottom">
    <onekit-view class="page-content">
      <onekit-view class="wc">
          <onekit-text>技术开发</onekit-text>
      </onekit-view>
      <onekit-view class="wc">
          <onekit-text>产品解析</onekit-text>
      </onekit-view>
      <onekit-view class="wc">
          <onekit-text>运营规范</onekit-text>
      </onekit-view>
      <onekit-view class="wc">
          <onekit-text>高校大赛</onekit-text>
      </onekit-view>
    </onekit-view>
  </onekit-view> 
  <onekit-view :data-width="windowWidth" :catch:touchmove="test.touchmove" @:touchend="test.touchend" @:touchstart="test.touchstart" class="page-top">
    <onekit-view style="margin: 10px 10px;"> >>> 右滑出现侧边菜单</onekit-view>
      <onekit-block v-for="(item,title) in tabs">
        <onekit-view style="display: flex; align-items: center; flex-direction: column;">
          <onekit-image :src="item.img" mode="widthFix"></onekit-image>
         
        </onekit-view>
      </onekit-block>
  </onekit-view>
</onekit-view></template>
<style scoped src="@/onekit/onekit.css"/><style>
.container {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 100px 0;
  box-sizing: border-box;
} 
page,.page {
  height: 100%;
  font-family: 'PingFang SC', 'Helvetica Neue', Helvetica, 'Droid Sans Fallback', 'Microsoft Yahei', sans-serif;
}
.page-bottom{
  height: 100%;
  width: 725px;
  position: fixed; 
  background-color: #07c160;
  z-index: 0;
}
.wc{
  color: white;
  padding: 15px 0 15px 20px;
}
.page-content{
  padding-top: 150px;
}
.page-top{
  height: 100%;
  position: fixed;
  width: 725px;
  background-color: var(--weui-BG-1);
  z-index: 0;
  transition: All 0.4s ease; 
  -webkit-transition: All 0.4s ease;
}

.c-state1{
  transform: rotate(0deg) scale(1) translate(40%,0%); 
  -webkit-transform: rotate(0deg) scale(1) translate(40%,0%); 
}
.c-state2{
  transform: rotate(0deg) scale(.8) translate(40%,0%); 
  -webkit-transform: rotate(0deg) scale(.8) translate(40%,0%); 
}

.item-title {
  margin: 10px 10px 5px;
  font-size: 18px;
  width: 100%;
}
.item-desc {
  margin: 5px 10px 0;
  width: 100%;
  color: #00000080
}
</style>
