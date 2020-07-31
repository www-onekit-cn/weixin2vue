<script>
const PAGE_JSON = {
	"navigationBarTitleText":"模板消息",
	"usingComponents":{}
}
</script>
<script>
import {OnekitApp,OnekitPage,OnekitComponent} from "../../../onekit/onekit.js";
import wx from "../../../onekit/wx.js";
const templateMessageUrl = require('../../../config').templateMessageUrl;
const app = getApp();
const formData = {
    address:'T.I.T 造舰厂',
    time:'2017.01.09',
    name:'帝国歼星舰',
    serial:'123456789'
};
export default OnekitPage({
    onShareAppMessage:function(){
        return {
            title:'模板消息',
            path:'packageAPI/pages/template-message/template-message'
        };
    },
    onLoad:function(){
        this.setData({
            formData:formData
        });
    },
    submitForm:function(e){
        const self = this;
        const {formId} = e.detail;
        const formData = e.detail.value;
        console.log('form_id is:',formId);
        self.setData({
            loading:true
        });
        app.getUserOpenId(function(err,openid){
            if(!err){
                wx.request({
                    url:templateMessageUrl,
                    method:'POST',
                    data:{
                        form_id:formId,
                        openid:openid,
                        formData:formData
                    },
                    success:function(res){
                        console.log('submit form success',res);
                        wx.showToast({
                            title:'发送成功',
                            icon:'success'
                        });
                        self.setData({
                            loading:false
                        });
                    },
                    fail:function({errMsg}){
                        console.log('submit form fail, errMsg is:',errMsg);
                    }
                });
            } else {
                console.log('err:',err);
            }
        });
    }
});
</script>
<template>
<import src="../../../common/head.vue"/>
<import src="../../../common/foot.vue"/>

<onekit-view class="container">
  
  <onekit-form class="page-body" @submit="submitForm" report-submit="true">
    <onekit-view class="weui-cells__title">点击提交，发送示例模板消息</onekit-view>
    <onekit-view class="weui-cells weui-cells_after-title">
      <onekit-view class="weui-cell weui-cell_input">
        <onekit-view class="weui-cell__hd">
          <onekit-view class="weui-label">示例地点</onekit-view>
        </onekit-view>
        <onekit-view class="weui-cell__bd">
          <onekit-input class="weui-input" type="text" :disabled="true" :value="formData.address" name="address"></onekit-input>
        </onekit-view>
      </onekit-view>
      <onekit-view class="weui-cell weui-cell_input">
        <onekit-view class="weui-cell__hd">
          <onekit-view class="weui-label">示例时间</onekit-view>
        </onekit-view>
        <onekit-view class="weui-cell__bd">
          <onekit-input class="weui-input" type="text" :disabled="true" :value="formData.time" name="time"></onekit-input>
        </onekit-view>
      </onekit-view>
      <onekit-view class="weui-cell weui-cell_input">
        <onekit-view class="weui-cell__hd">
          <onekit-view class="weui-label">示例物品</onekit-view>
        </onekit-view>
        <onekit-view class="weui-cell__bd">
          <onekit-input class="weui-input" type="text" :disabled="true" :value="formData.name" name="name"></onekit-input>
        </onekit-view>
      </onekit-view>
      <onekit-view class="weui-cell weui-cell_input">
        <onekit-view class="weui-cell__hd">
          <onekit-view class="weui-label">示例单号</onekit-view>
        </onekit-view>
        <onekit-view class="weui-cell__bd">
          <onekit-input class="weui-input" type="text" :disabled="true" :value="formData.serial" name="serial"></onekit-input>
        </onekit-view>
      </onekit-view>
    </onekit-view>
    <onekit-view class="btn-area">
      <onekit-button type="primary" size="40" formType="submit" :loading="loading">点我提交</onekit-button>
    </onekit-view>
  </onekit-form>

  
</onekit-view></template>
<style scoped src="@/onekit/onekit.css"/>
<style scoped src="@/app.css"/>
<style>
@import "../../../common/lib/weui.css";
</style>
