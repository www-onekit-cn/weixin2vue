<script>
const PAGE_JSON = {
	"usingComponents":{}
}
</script>
<script>
import {OnekitApp,OnekitPage,OnekitComponent} from "../../../onekit/onekit.js";
import wx from "../../../onekit/wx.js";
OnekitPage({
    data:{},
    requestSubscribeMessage:function(){
        const self = this;
        wx.requestSubscribeMessage({
            tmplIds:[
                'y1bXHAg_oDuvrQ3pHgcODcMPl-2hZHenWugsqdB2CXY'
            ],
            success:function(res){
                console.log(res);
                if(res.errMsg === 'requestSubscribeMessage:ok'){
                    self.subscribeMessageSend();
                }
            },
            complete:function(res){
                console.log(res);
            }
        });
    },
    subscribeMessageSend:function(){
        wx.cloud.callFunction({
            name:'openapi',
            data:{
                action:'sendSubscribeMessage'
            },
            success:(res)=>{
                console.warn('[云函数] [openapi] templateMessage.send 调用成功：',res);
                wx.showModal({
                    title:'订阅成功',
                    content:'请返回微信主界面查看',
                    showCancel:false
                });
            },
            fail:(err)=>{
                wx.showToast({
                    icon:'none',
                    title:'调用失败'
                });
                console.error('[云函数] [openapi] templateMessage.send 调用失败：',err);
            }
        });
    },
    onLoad:function(options){
    },
    onReady:function(){
    },
    onShow:function(){
    },
    onHide:function(){
    },
    onUnload:function(){
    },
    onPullDownRefresh:function(){
    },
    onReachBottom:function(){
    },
    onShareAppMessage:function(){
        return {
            title:'订阅消息',
            path:'packageAPI/pages/subscribe-message/subscribe-message'
        };
    }
});
</script>
<template>
<import src="../../../common/head.vue"/>
<import src="../../../common/foot.vue"/>

<onekit-view class="container">
  

  <onekit-view class="page-body">
    <onekit-view class="page-section">
      <onekit-block>
        <onekit-text class="page-body-text">点击提交，调用示例订阅消息</onekit-text>
        <onekit-button class="page-body-button" type="primary" @tap="requestSubscribeMessage">提交</onekit-button>
      </onekit-block>
    </onekit-view>
  </onekit-view>

  
</onekit-view></template>
<style scoped src="@/onekit/onekit.css"/><style>
.page-section {
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0 25px;
  box-sizing: border-box;
}
.page-body-title {
  font-size: 30px;
  line-height: 100px;
}
.page-body-text {
  color: var(--weui-FG-1);
  font-size: 14px;
  line-height: 20px;
  margin: 0 0 50px 0;
  text-align: center;
}
.page-body-button {
  width: 100%;
}
</style>
