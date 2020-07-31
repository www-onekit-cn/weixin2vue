<script>
const PAGE_JSON = {
	"navigationBarTitleText":"扫码",
	"usingComponents":{}
}
</script>
<template>
<import src="../../../common/head.vue"/>
<import src="../../../common/foot.vue"/>

<onekit-view class="container">
  

  <onekit-view class="page-body">
    <onekit-view class="weui-cells__title">扫码结果</onekit-view>
    <onekit-view class="weui-cells weui-cells_after-title">
      <onekit-view class="weui-cell">
        <onekit-view class="weui-cell__bd">{{result}}</onekit-view>
      </onekit-view>
    </onekit-view>
    <onekit-view class="btn-area">
      <onekit-button type="primary" @tap="scanCode">扫一扫</onekit-button>
    </onekit-view>
  </onekit-view>

  
</onekit-view></template>
<script>
import {OnekitApp,OnekitPage,OnekitComponent} from '../../../onekit/onekit.js';
import wx from '../../../onekit/wx.js';
export default OnekitPage({
    onShareAppMessage:function(){
        return {
            title:'扫码',
            path:'packageAPI/pages/scan-code/scan-code'
        };
    },
    data:{
        result:''
    },
    scanCode:function(){
        const that = this;
        wx.scanCode({
            success:function(res){
                that.setData({
                    result:res.result
                });
            },
            fail:function(){
            }
        });
    }
});
</script>
<style scoped src="@/app.css"/>
<style>
@import "../../../common/lib/weui.css";

.weui-cell__bd{
  min-height: 24px;
  word-break: break-all;
}
</style>
