<script>
const PAGE_JSON = {
	"navigationBarTitleText":"新增联系人",
	"usingComponents":{}
}
</script>
<template>
  <page>
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
  
</onekit-view>
  </page>
</template>
<script>
import {OnekitApp,OnekitPage,OnekitComponent} from '../../../onekit/onekit.js';
import wx from '../../../onekit/wx.js';
export default OnekitPage({
    onShareAppMessage:function(){
        return {
            title:'新增联系人',
            path:'packageAPI/pages/add-contact/add-contact'
        };
    },
    submit:function(e){
        const formData = e.detail.value;
        wx.addPhoneContact({
            ...formData,
            success:function(){
                wx.showToast({
                    title:'联系人创建成功'
                });
            },
            fail:function(){
                wx.showToast({
                    title:'联系人创建失败'
                });
            }
        });
    }
});
</script>
<style scoped src="@/app.css"/>
<style>
@import "../../../common/lib/weui.css";

input {
  width: 100%;
}
</style>
