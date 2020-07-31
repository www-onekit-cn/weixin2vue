<script>
const PAGE_JSON = {
	"navigationBarTitleText":"音视频合成",
	"usingComponents":{}
}
</script>
<script>
import {OnekitApp,OnekitPage,OnekitComponent} from "../../../onekit/onekit.js";
import wx from "../../../onekit/wx.js";
export default OnekitPage({
    onShareAppMessage:function(){
        return {
            title:'音视频合成',
            path:'packageAPI/pages/media-container/media-container'
        };
    },
    onLoad:function(){
        const canIUse = wx.canIUse('wx.createMediaContainer()');
        if(canIUse){
            this.mediaContainer = wx.createMediaContainer();
        } else {
            this.setData({
                canIUse:false
            });
            wx.showModal({
                title:'微信版本过低，暂不支持本功能'
            });
        }
    },
    data:{
        targetSrc:'',
        one:'',
        two:'',
        canIUse:true
    },
    handleChooseVideo:function(e){
        const that = this;
        wx.chooseVideo({
            sourceType:[
                'album',
                'camera'
            ],
            success:function(res){
                console.log(res.tempFilePath);
                that.setData({
                    [e.currentTarget.dataset.video]:res.tempFilePath
                });
                if(e.currentTarget.dataset.video === 'one'){
                    that.mediaContainer.extractDataSource({
                        source:that.data.one,
                        success:function(mt){
                            that.mediaTrackOne = mt;
                        }
                    });
                } else {
                    that.mediaContainer.extractDataSource({
                        source:that.data.two,
                        success:function(mt){
                            that.mediaTrackTwo = mt;
                        }
                    });
                }
            }
        });
    },
    handleExport:function(){
        if((this.data.one === '') || (this.data.two === '')){
            wx.showToast({
                title:'请先选择源视频',
                icon:"none"
            });
        } else {
            console.log(this.mediaTrackOne,this.mediaTrackTwo);
            const [trackMedia] = this.mediaTrackOne.tracks.filter((item)=>item.kind === 'video');
            const [trackAudio] = this.mediaTrackTwo.tracks.filter((item)=>item.kind === 'audio');
            console.log(trackMedia,trackAudio);
            this.mediaContainer.addTrack(trackMedia);
            this.mediaContainer.addTrack(trackAudio);
            const that = this;
            this.mediaContainer.export({
                success:(res)=>{that.setData({
                    targetSrc:res.tempFilePath
                })}
            });
        }
    }
});
</script>
<template>
<import src="../../../common/head.vue"/>
<import src="../../../common/foot.vue"/>

<onekit-view class="container">
  

  <onekit-view class="page-body">
    <onekit-view class="page-section">
      <onekit-view class="page-section-title">
       源视频
      </onekit-view>
    </onekit-view>
    <onekit-view class="page-section">
     <onekit-button type="primary" @tap="handleChooseVideo" data-video="one">选择源视频1</onekit-button>
     <onekit-video v-if="one" :src="one"></onekit-video>
    </onekit-view>
    <onekit-view class="page-section">
      <onekit-button type="primary" @tap="handleChooseVideo" data-video="two">选择源视频2</onekit-button>
      <onekit-video v-if="two" :src="two"></onekit-video>
    </onekit-view>
    <onekit-view class="btn-area">
      <onekit-button :disabled="!canIUse" type="primary" @:tap="handleExport">合成</onekit-button>
    </onekit-view> 
    <onekit-block v-if="targetSrc">
      <onekit-view class="page-section">
        <onekit-view class="page-section-title">
           <onekit-text>合成视频</onekit-text>
        </onekit-view>
        <onekit-view class="page-section-title">
           <onekit-text>合成视频轨道为：源视频1视频轨道 + 源视频2音频轨道</onekit-text>
        </onekit-view>
      </onekit-view>
      <onekit-view class="page-section">
        <onekit-video :src="targetSrc">
        </onekit-video>
      </onekit-view>
    </onekit-block>
  </onekit-view>
  
</onekit-view></template>

<style scoped src="@/app.css"/>
<style>
.page-section {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
