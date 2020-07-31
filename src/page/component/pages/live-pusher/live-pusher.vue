<script>
const PAGE_JSON = {
	"navigationBarTitleText":"live-pusher",
	"usingComponents":{}
}
</script>
<template>
<import src="../../../common/head.vue"/>
<import src="../../../common/foot.vue"/>

<onekit-view class="container">
  
  <onekit-view class="page-body">
    	<onekit-view class="page-section">
		<onekit-live-pusher id="pusher" :url=" videoSrc " mode="RTC" autopush @statechange="handleLivePusherStateChange" @error="handleLivePusherError"></onekit-live-pusher>
	</onekit-view>

	<onekit-view class="page-section">
		<onekit-view class="page-url">视频地址 (支持rtmp):</onekit-view>
		<onekit-input name="input" placeholder="视频推送链接" :value=" videoSrc " @input="handleVideoSrcInput"></onekit-input>
     <onekit-button type="primary" @tap="handleScanQRCode">
        扫码
      </onekit-button>
	</onekit-view>

	<onekit-view class="page-section">
		<onekit-button @tap="handleStart" class="page-body-button" type="primary">开始</onekit-button>
		<onekit-button @tap="handlePause" class="page-body-button" type="primary">暂停</onekit-button>
		<onekit-button @tap="handleStop" class="page-body-button" type="primary">停止</onekit-button>
		<onekit-button @tap="handleResume" class="page-body-button" type="primary">恢复</onekit-button>
		<onekit-button @tap="handleSwitchCamera" class="page-body-button" type="primary">切换摄像头</onekit-button>
	</onekit-view>
  </onekit-view>

  
</onekit-view></template>
<script>
import {OnekitApp,OnekitPage,OnekitComponent} from '../../../../onekit/onekit.js';
import wx from '../../../../onekit/wx.js';
export default OnekitPage({
    onShareAppMessage:function(){
        return {
            title:'live-pusher',
            path:'page/component/pages/live-pusher/live-pusher'
        };
    },
    data:{
        videoSrc:''
    },
    onReady:function(res){
        this.ctx = wx.createLivePusherContext('pusher');
    },
    handleLivePusherStateChange:function(e){
        console.log('live-pusher code:',e.detail.code);
    },
    handleLivePusherError:function(e){
        console.error('live-pusher error:',e.detail.errMsg);
    },
    handleStart:function(){
        this.ctx.start({
            success:(res)=>{console.log('start success')},
            fail:(res)=>{console.log('start fail')}
        });
    },
    handleScanQRCode:function(){
        wx.scanCode({
            complete:(res)=>{
                const {result} = res;
                this.setData({
                    videoSrc:result
                });
            }
        });
    },
    handlePause:function(){
        this.ctx.pause({
            success:(res)=>{console.log('pause success')},
            fail:(res)=>{console.log('pause fail')}
        });
    },
    handleStop:function(){
        this.ctx.stop({
            success:(res)=>{console.log('stop success')},
            fail:(res)=>{console.log('stop fail')}
        });
    },
    handleResume:function(){
        this.ctx.resume({
            success:(res)=>{console.log('resume success')},
            fail:(res)=>{console.log('resume fail')}
        });
    },
    handleSwitchCamera:function(){
        this.ctx.switchCamera({
            success:(res)=>{console.log('switch camera success')},
            fail:(res)=>{console.log('switch camera fail')}
        });
    },
    handleVideoSrcInput:function(e){
        this.setData({
            videoSrc:e.detail.value
        });
    }
});
</script>
<style scoped src="@/app.css"/>
<style>
live-pusher {
  display: flex;
  margin: 11px auto;
  height: 325px;
}

.page-body-button {
  margin-bottom: 15px;
}
.page-url {
  margin: 0 auto 15px;
  width: 90%;
}

input {
  width: 90%;
  margin: 0 auto 15px;
}

</style>
