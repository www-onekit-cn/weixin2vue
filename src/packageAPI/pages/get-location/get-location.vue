<script>
const PAGE_JSON = {
	"navigationBarTitleText":"获取位置",
	"usingComponents":{}
}
</script>
<script>
import {OnekitApp,OnekitPage,OnekitComponent} from "../../../onekit/onekit.js";
import wx from "../../../onekit/wx.js";
const util = require('../../../util/util.js');
const formatLocation = util.formatLocation;
OnekitPage({
    onShareAppMessage:function(){
        return {
            title:'获取位置',
            path:'packageAPI/pages/get-location/get-location'
        };
    },
    data:{
        hasLocation:false
    },
    getLocation:function(){
        const that = this;
        wx.getLocation({
            success:function(res){
                console.log(res);
                that.setData({
                    hasLocation:true,
                    location:formatLocation(res.longitude,res.latitude)
                });
            }
        });
    },
    clear:function(){
        this.setData({
            hasLocation:false
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
      <onekit-view class="page-body-info">
        <onekit-text class="page-body-text-small">当前位置经纬度</onekit-text>
        <onekit-block v-if="hasLocation === false">
          <onekit-text class="page-body-text">未获取</onekit-text>
        </onekit-block>
        <onekit-block v-if="hasLocation === true">
          <onekit-view class="page-body-text-location">
            <onekit-text>E: {{location.longitude[0]}}°{{location.longitude[1]}}′</onekit-text>
            <onekit-text>N: {{location.latitude[0]}}°{{location.latitude[1]}}′</onekit-text>
          </onekit-view>
        </onekit-block>
      </onekit-view>
      <onekit-view class="btn-area">
        <onekit-button type="primary" @tap="getLocation">获取位置</onekit-button>
        <onekit-button @tap="clear">清空</onekit-button>
      </onekit-view>
    </onekit-view>
  </onekit-view>

  
</onekit-view></template>
<style scoped src="@/onekit/onekit.css"/><style>
.page-body-info {
  height: 225px;
}
.page-body-text-small {
  font-size: 12px;
  color: var(--weui-FG-0);
  margin-bottom: 50px;
}
.page-body-text-location {
  display: flex;
  font-size: 25px;
}
.page-body-text-location text {
  margin: 5px;
}
</style>
