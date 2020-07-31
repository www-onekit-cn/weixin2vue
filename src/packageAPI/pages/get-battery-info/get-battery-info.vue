<script>
const PAGE_JSON = {
	"navigationBarTitleText":"获取手机设备电量",
	"usingComponents":{}
}
</script>
<script>
import {OnekitApp,OnekitPage,OnekitComponent} from "../../../onekit/onekit.js";
import wx from "../../../onekit/wx.js";
export default OnekitPage({
    onShareAppMessage:function(){
        return {
            title:'获取电池信息',
            path:'packageAPI/pages/get-battery-info/get-battery-info'
        };
    },
    data:{},
    getBatteryInfo:function(){
        wx.getBatteryInfo({
            complete:(res)=>{
                const msg = res.isCharging?'充电中':'使用电池中';
                this.setData({
                    level:res.level,
                    isCharging:msg
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
  	<onekit-view class="page-section">
    <onekit-view class="weui-cells weui-cells_after-title">
        <onekit-view class="weui-cell weui-cell_input">
          <onekit-view class="weui-cell__hd">
            <onekit-view class="weui-label">当前电量</onekit-view>
          </onekit-view>
          <onekit-view class="weui-cell__bd">
            <onekit-input class="weui-input" type="text" :disabled="true" placeholder="未获取" :value="level"></onekit-input>
          </onekit-view>
        </onekit-view>
        <onekit-view class="weui-cell weui-cell_input">
          <onekit-view class="weui-cell__hd">
            <onekit-view class="weui-label">电池模式</onekit-view>
          </onekit-view>
          <onekit-view class="weui-cell__bd">
            <onekit-input class="weui-input" type="text" :disabled="true" placeholder="未获取" :value="isCharging"></onekit-input>
          </onekit-view>
        </onekit-view>
      </onekit-view>
      <onekit-button type="primary" @:tap="getBatteryInfo">
        获取电量信息信息
      </onekit-button>
    </onekit-view>
  </onekit-view>
  
</onekit-view></template>
<style scoped src="@/onekit/onekit.css"/>
<style scoped src="@/app.css"/>
<style>
@import "../../../common/lib/weui.css";

</style>
