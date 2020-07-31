<script>
const PAGE_JSON = {
	"navigationBarTitleText":"网络请求",
	"usingComponents":{}
}
</script>
<script>
import {OnekitApp,OnekitPage,OnekitComponent} from "../../../onekit/onekit.js";
import wx from "../../../onekit/wx.js";
const requestUrl = require('../../../config').requestUrl;
const duration = 2000;
export default OnekitPage({
    onShareAppMessage:function(){
        return {
            title:'网络请求',
            path:'packageAPI/pages/request/request'
        };
    },
    makeRequest:function(){
        const self = this;
        self.setData({
            loading:true
        });
        wx.request({
            url:requestUrl,
            data:{
                noncestr:Date.now()
            },
            success:function(result){
                wx.showToast({
                    title:'请求成功',
                    icon:'success',
                    mask:true,
                    duration:duration
                });
                self.setData({
                    loading:false
                });
                console.log('request success',result);
            },
            fail:function({errMsg}){
                console.log('request fail',errMsg);
                self.setData({
                    loading:false
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
    <onekit-view class="page-body-wording">
      <onekit-text class="page-body-text">
        点击向服务器发起请求
      </onekit-text>
    </onekit-view>
    <onekit-view class="btn-area">
      <onekit-button @tap="makeRequest" type="primary" :disabled="buttonDisabled" :loading="loading">request</onekit-button>
    </onekit-view>
  </onekit-view>

  
</onekit-view></template>
<style scoped src="@/onekit/onekit.css"/>
<style scoped src="@/app.css"/>
<style>

</style>
