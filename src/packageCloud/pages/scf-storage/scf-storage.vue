<script>
const PAGE_JSON = {
	"navigationBarTitleText":"云函数操作存储",
	"usingComponents":{}
}
</script>
<template>
<import src="../../../common/head.vue"/>
<import src="../../../common/foot.vue"/>

<onekit-view class="container">
  

  <onekit-view class="page-body">
    <onekit-view class="page-section">
      <onekit-block v-if="fileTempURLDone">
        <onekit-view class="weui-cells weui-cells_after-title">
          <onekit-view class="weui-cell weui-cell_input">
            <onekit-view class="weui-cell__hd">
              <onekit-view class="weui-label">文件 ID</onekit-view>
            </onekit-view>
            <onekit-view class="weui-cell__bd">
              <onekit-textarea class="weui-textarea" :value="fileId" style="height: 3.3em" disabled></onekit-textarea>
            </onekit-view>
          </onekit-view>

          <onekit-view class="weui-cell weui-cell_input">
            <onekit-view class="weui-cell__hd">
              <onekit-view class="weui-label">临时链接</onekit-view>
            </onekit-view>
            <onekit-view class="weui-cell__bd">
              <onekit-textarea class="weui-textarea" :value="tempFileURL" style="height: 3.3em" disabled></onekit-textarea>
            </onekit-view>
          </onekit-view>

          <onekit-view class="weui-cell">
            <onekit-view class="page-section-ctn">
              <onekit-image :src="tempFileURL" class="image" mode="aspectFit"></onekit-image>
            </onekit-view>
          </onekit-view>
        </onekit-view>
        
      </onekit-block>

      <onekit-block v-else>
        <onekit-view class="weui-cells__title">云函数亦可操作文件存储，点击按钮换取临时链接</onekit-view>
        <onekit-view class="weui-cells weui-cells_after-title">
          <onekit-view class="weui-cell weui-cell_input">
            <onekit-view class="weui-cell__hd">
              <onekit-view class="weui-label">文件 ID</onekit-view>
            </onekit-view>
            <onekit-view class="weui-cell__bd">
              <onekit-textarea class="weui-textarea" :value="fileId" style="height: 3.3em" disabled></onekit-textarea>
            </onekit-view>
          </onekit-view>
        </onekit-view>

        <onekit-view class="btn-area">
          <onekit-button type="primary" size="40" @tap="getTempFileURL" :loading="loading">通过云函数换取临时链接</onekit-button>
        </onekit-view>
      </onekit-block>
    </onekit-view>
  </onekit-view>

  
</onekit-view></template>
<script>
import {OnekitApp,OnekitPage,OnekitComponent} from '../../../onekit/onekit.js';
import wx from '../../../onekit/wx.js';
const demoImageFileId = require('../../../config').demoImageFileId;
const app = getApp();
export default OnekitPage({
    onShareAppMessage:function(){
        return {
            title:'云函数操作存储',
            path:'page/cloud/pages/scf-storage/scf-storage'
        };
    },
    data:{
        fileTempURLDone:false,
        fileId:'',
        tempFileURL:'',
        loading:false
    },
    onLoad:function(){
        this.setData({
            fileId:app.globalData.fileId || demoImageFileId
        });
    },
    getTempFileURL:function(){
        const fileId = this.data.fileId;
        if(!fileId){
            return;
        }
        this.setData({
            loading:true
        });
        wx.cloud.callFunction({
            name:'getTempFileURL',
            data:{
                fileIdList:[
                    fileId
                ]
            },
            success:(res)=>{
                console.log('[云函数] [getTempFileURL] res: ',res.result);
                if(res.result.length){
                    this.setData({
                        fileTempURLDone:true,
                        tempFileURL:res.result[0].tempFileURL
                    });
                }
            },
            fail:(err)=>{console.error('[云函数] [getTempFileURL] 调用失败',err)},
            complete:()=>{this.setData({
                loading:false
            })}
        });
    }
});
</script>
<style scoped src="@/app.css"/>
<style>
@import "../../../common/lib/weui.css";

.page-section-ctn {
  text-align: center;
  margin: 0 auto;
  width: 100%;
}

.image {
  max-width: 100%;
}
</style>
