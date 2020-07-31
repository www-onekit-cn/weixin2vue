<script>
const PAGE_JSON = {
	"navigationBarTitleText":"剪切板",
	"usingComponents":{}
}
</script>
<template>
<import src="../../../common/head.vue"/>
<import src="../../../common/foot.vue"/>

<onekit-view class="container">
  

  <onekit-view class="page-body">
    <onekit-view class="weui-cells weui-cells_after-title">
      <onekit-view class="weui-cell weui-cell_input">
        <onekit-view class="weui-cell__hd">
          <onekit-view class="weui-label">Copy</onekit-view>
        </onekit-view>
        <onekit-view class="weui-cell__bd">
          <onekit-input class="weui-input" type="text" name="key" :value="value" @input="valueChanged"></onekit-input>
        </onekit-view>
      </onekit-view>
      <onekit-view class="weui-cell weui-cell_input">
        <onekit-view class="weui-cell__hd">
          <onekit-view class="weui-label">Paste</onekit-view>
        </onekit-view>
        <onekit-view class="weui-cell__bd">
          <onekit-input class="weui-input" type="text" :value="pasted"></onekit-input>
        </onekit-view>
      </onekit-view>
    </onekit-view>

    <onekit-view class="btn-area">
      <onekit-button type="primary" @tap="copy">复制</onekit-button>
      <onekit-button @tap="paste">粘贴</onekit-button>
    </onekit-view>
  </onekit-view>

  
</onekit-view></template>
<script>
import {OnekitApp,OnekitPage,OnekitComponent} from '../../../onekit/onekit.js';
import wx from '../../../onekit/wx.js';
export default OnekitPage({
    onShareAppMessage:function(){
        return {
            title:'剪切板',
            path:'packageAPI/pages/clipboard-data/clipboard-data'
        };
    },
    data:{
        value:'edit and copy me',
        pasted:''
    },
    valueChanged:function(e){
        this.setData({
            value:e.detail.value
        });
    },
    copy:function(){
        wx.setClipboardData({
            data:this.data.value,
            success:function(){
                wx.showToast({
                    title:'复制成功',
                    icon:'success',
                    duration:1000
                });
            }
        });
    },
    paste:function(){
        const self = this;
        wx.getClipboardData({
            success:function(res){
                self.setData({
                    pasted:res.data
                });
                wx.showToast({
                    title:'粘贴成功',
                    icon:'success',
                    duration:1000
                });
            }
        });
    }
});
</script>
<style scoped src="@/app.css"/>
<style>
@import "../../../common/lib/weui.css";

.page-body-info {
  padding: 5px;
  height: 100px;
  overflow: scroll-y;
  text-align: left;
}
</style>
