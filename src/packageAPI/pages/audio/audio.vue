<script>
const PAGE_JSON = {
	"navigationBarTitleText":"音频",
	"usingComponents":{}
}
</script>
<script>
import {OnekitApp,OnekitPage,OnekitComponent} from "../../../onekit/onekit.js";
import wx from "../../../onekit/wx.js";
export default OnekitPage({
    onShareAppMessage:function(){
        return {
            title:'Audio',
            path:'packageAPI/pages/audio/audio'
        };
    },
    onReady:function(e){
        this.audioCtx = wx.createAudioContext('myAudio');
        this.audioCtx.setSrc('https://dldir1.qq.com/music/release/upload/t_mm_file_publish/2339610.m4a');
        this.audioCtx.play();
    },
    data:{
        src:''
    },
    audioPlay:function(){
        this.audioCtx.play();
    },
    audioPause:function(){
        this.audioCtx.pause();
    },
    audio14:function(){
        this.audioCtx.seek(14);
    },
    audioStart:function(){
        this.audioCtx.seek(0);
    }
});
</script>
<template>
<onekit-view>
  <onekit-audio :src="src" id="myAudio"></onekit-audio>

  <onekit-button type="primary" @tap="audioPlay">播放</onekit-button>
  <onekit-button type="primary" @tap="audioPause">暂停</onekit-button>
  <onekit-button type="primary" @tap="audio14">设置当前播放时间为14秒</onekit-button>
  <onekit-button type="primary" @tap="audioStart">回到开头</onekit-button>
</onekit-view></template>
<style scoped src="@/onekit/onekit.css"/>
<style scoped src="@/app.css"/>
<style>
/* miniprogram/packageAPI/pages/audio/audio.css */
</style>
