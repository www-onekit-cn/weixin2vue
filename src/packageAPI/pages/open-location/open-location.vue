<script>
const PAGE_JSON = {
	"navigationBarTitleText":"查看位置",
	"usingComponents":{}
}
</script>
<script>
import {OnekitApp,OnekitPage,OnekitComponent} from "../../../onekit/onekit.js";
import wx from "../../../onekit/wx.js";
export default OnekitPage({
    onShareAppMessage:function(){
        return {
            title:'查看位置',
            path:'packageAPI/pages/open-location/open-location'
        };
    },
    openLocation:function(e){
        console.log(e);
        const value = e.detail.value;
        console.log(value);
        wx.openLocation({
            longitude:Number(value.longitude),
            latitude:Number(value.latitude),
            name:value.name,
            address:value.address
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
      <onekit-form @submit="openLocation">
        <onekit-view class="weui-cells weui-cells_after-title">
          <onekit-view class="weui-cell weui-cell_input">
            <onekit-view class="weui-cell__hd">
              <onekit-view class="weui-label">经度</onekit-view>
            </onekit-view>
            <onekit-view class="weui-cell__bd">
              <onekit-input class="weui-input" type="text" :disabled="true" value="113.324520" name="longitude"></onekit-input>
            </onekit-view>
          </onekit-view>
          <onekit-view class="weui-cell weui-cell_input">
            <onekit-view class="weui-cell__hd">
              <onekit-view class="weui-label">纬度</onekit-view>
            </onekit-view>
            <onekit-view class="weui-cell__bd">
              <onekit-input class="weui-input" type="text" :disabled="true" value="23.099994" name="latitude"></onekit-input>
            </onekit-view>
          </onekit-view>
          <onekit-view class="weui-cell weui-cell_input">
            <onekit-view class="weui-cell__hd">
              <onekit-view class="weui-label">位置名称</onekit-view>
            </onekit-view>
            <onekit-view class="weui-cell__bd">
              <onekit-input class="weui-input" type="text" :disabled="true" value="T.I.T 创意园" name="name"></onekit-input>
            </onekit-view>
          </onekit-view>
          <onekit-view class="weui-cell weui-cell_input">
            <onekit-view class="weui-cell__hd">
              <onekit-view class="weui-label">详细位置</onekit-view>
            </onekit-view>
            <onekit-view class="weui-cell__bd">
              <onekit-input class="weui-input" type="text" :disabled="true" value="广州市海珠区新港中路397号" name="address"></onekit-input>
            </onekit-view>
          </onekit-view>
        </onekit-view>
        <onekit-view class="btn-area">
          <onekit-button type="primary" formType="submit">查看位置</onekit-button>
        </onekit-view>
      </onekit-form>
    </onekit-view>
  </onekit-view>

  
</onekit-view></template>

<style scoped src="@/app.css"/>
<style>
@import "../../../common/lib/weui.css";
</style>
