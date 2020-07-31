<script>
const PAGE_JSON = {
	"navigationBarTitleText":"上传文件",
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
            title:'上传文件',
            path:'page/cloud/pages/upload-file/upload-file'
        };
    },
    data:{
        fileUploaded:false,
        fileId:'',
        filePath:'',
        fromOtherPage:false
    },
    onLoad:function(options){
        if(options.from){
            this.setData({
                fromOtherPage:true
            });
        }
    },
    chooseImage:function(){
        const self = this;
        wx.chooseImage({
            count:1,
            sizeType:[
                'compressed'
            ],
            sourceType:[
                'album'
            ],
            success:function(res){
                console.log('chooseImage success, temp path is',res.tempFilePaths[0]);
                const filePath = res.tempFilePaths[0];
                wx.showLoading({
                    title:'上传中'
                });
                app.getUserOpenIdViaCloud().then((openid)=>{
    const cloudPath = ('upload/' + openid) + filePath.match(new RegExp("\.[^.]+?$",""))[0];
    console.log('cloudPath',cloudPath);
    wx.cloud.uploadFile({
        cloudPath:cloudPath,
        filePath:filePath,
        success:(res)=>{
            console.log('[上传文件] 成功：',res);
            app.globalData.fileId = res.fileID;
            self.setData({
                fileUploaded:true,
                fileId:res.fileID,
                filePath:filePath
            });
            wx.hideLoading();
        },
        fail:(err)=>{
            console.error('[上传文件] 失败：',err);
            wx.hideLoading();
            wx.showToast({
                icon:'none',
                title:'上传失败'
            });
        }
    });
    return openid;
}).catch((err)=>{
                    console.error(err);
                    wx.hideLoading();
                });
            },
            fail:function({errMsg}){
                console.log('chooseImage fail, err is',errMsg);
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
    <onekit-view class="page-section">
      <onekit-block v-if="fileUploaded">
        <onekit-view class="weui-cells weui-cells_after-title">
          <onekit-view class="weui-cell weui-cell_input">
            <onekit-view class="weui-cell__hd">
              <onekit-view class="weui-label">文件 ID</onekit-view>
            </onekit-view>
            <onekit-view class="weui-cell__bd">
              <onekit-textarea class="weui-textarea" :value="fileId" style="height: 3.3em" disabled></onekit-textarea>
            </onekit-view>
          </onekit-view>

          <onekit-view class="weui-cell page-section-ctn">
            <onekit-image :src="filePath" class="image" mode="aspectFit"></onekit-image>
          </onekit-view>
        </onekit-view>

        <onekit-view class="btn-area" v-if="fromOtherPage">
          <onekit-navigator open-type="navigateBack">
            <onekit-button type="primary" size="40">返回</onekit-button>
          </onekit-navigator>
        </onekit-view>
      </onekit-block>

      <onekit-block v-else>
        <onekit-view class="page-body-info">
          <onekit-view class="image-plus image-plus-nb" @tap="chooseImage">
            <onekit-view class="image-plus-horizontal"></onekit-view>
            <onekit-view class="image-plus-vertical"></onekit-view>
          </onekit-view>
          <onekit-view class="image-plus-text">选择图片</onekit-view>
        </onekit-view>
      </onekit-block>
    </onekit-view>
  </onekit-view>

  
</onekit-view></template>
<style scoped src="@/onekit/onekit.css"/>
<style scoped src="@/app.css"/>
<style>
@import "../../../common/lib/weui.css";

.image {
  width: 100%;
  height: calc(var(--screen-width)*360/750);
}

.page-body-info {
  display: flex;
  box-sizing: border-box;
  padding: calc(var(--screen-width)*30/750);
  height: calc(var(--screen-width)*420/750);
  border-top: calc(var(--screen-width)*1/750) solid var(--weui-FG-3);
  border-bottom: calc(var(--screen-width)*1/750) solid var(--weui-FG-3);
  align-items: center;
  justify-content: center;
}

.page-section-ctn {
  text-align: center;
  margin: 0 auto;
  width: 100%;
}

.image {
  max-width: 100%;
}
</style>
