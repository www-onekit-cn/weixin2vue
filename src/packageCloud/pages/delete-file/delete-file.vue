<script>
const PAGE_JSON = {
	"navigationBarTitleText":"删除文件",
	"usingComponents":{}
}
</script>
<script>
import {OnekitApp,OnekitPage,OnekitComponent} from "../../../onekit/onekit.js";
import wx from "../../../onekit/wx.js";
const app = getApp();
export default OnekitPage({
    onShareAppMessage:function(){
        return {
            title:'删除文件',
            path:'page/cloud/pages/delete-file/delete-file'
        };
    },
    data:{
        fileId:'',
        loading:false
    },
    onLoad:function(){
        this.setData({
            fileId:app.globalData.fileId || ''
        });
    },
    onShow:function(){
        this.setData({
            fileId:app.globalData.fileId || ''
        });
    },
    deleteFile:function(){
        const fileId = this.data.fileId;
        if(!fileId){
            return;
        }
        const self = this;
        this.setData({
            loading:true
        });
        wx.cloud.deleteFile({
            fileList:[
                fileId
            ],
            success:(res)=>{
                console.log('[删除文件] 成功：',res);
                if(res.fileList && res.fileList.length){
                    self.setData({
                        fileId:''
                    });
                }
                app.globalData.fileId = '';
                wx.showToast({
                    title:'删除成功'
                });
            },
            fail:(err)=>{console.error('[删除文件] 失败：',err)},
            complete:()=>{self.setData({
                loading:false
            })}
        });
    }
});
</script>
<template>
<import src="../../../common/head.vue"/>
<import src="../../../common/foot.vue"/>

<onekit-view class="container">
  

  <onekit-view class="page-body">
    <onekit-view class="page-section">
      <onekit-block v-if="!fileId">
        <onekit-view class="page-section-ctn">
          <onekit-text class="page-body-text">还未上传过文件，请先点击按钮上传</onekit-text>
        </onekit-view>
        
        <onekit-view class="btn-area">
          <onekit-navigator url="/page/cloud/pages/upload-file/upload-file?from=delete-file">
            <onekit-button type="primary" size="40">上传文件</onekit-button>
          </onekit-navigator>
        </onekit-view>
      </onekit-block>

      <onekit-block v-else>
        <onekit-view class="weui-cells__title">点击按钮即可删除指定文件</onekit-view>
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
          <onekit-button type="primary" size="40" @tap="deleteFile" :loading="loading">删除文件</onekit-button>
        </onekit-view>
      </onekit-block>
    </onekit-view>
  </onekit-view>

  
</onekit-view></template>
<style scoped src="@/onekit/onekit.css"/>
<style scoped src="@/app.css"/>
<style>
@import "../../../common/lib/weui.css";

.page-section-ctn {
  text-align: center;
  margin: calc(var(--screen-width)*200/750) auto 0;
  width: 100%;
}

.page-body-text {
  color: #bbb;
  font-size: calc(var(--screen-width)*28/750);
  line-height: calc(var(--screen-width)*40/750);
  text-align: center;
}
</style>
