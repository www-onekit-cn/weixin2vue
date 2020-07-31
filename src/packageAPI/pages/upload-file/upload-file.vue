<script>
const PAGE_JSON = {
	"navigationBarTitleText":"上传文件",
	"usingComponents":{}
}
</script>
<script>
import {OnekitApp,OnekitPage,OnekitComponent} from "../../../onekit/onekit.js";
import wx from "../../../onekit/wx.js";
export default OnekitPage({
    onShareAppMessage:function(){
        return {
            title:'上传文件',
            path:'packageAPI/pages/upload-file/upload-file'
        };
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
                const imageSrc = res.tempFilePaths[0];
                wx.cloud.uploadFile({
                    cloudPath:'example.png',
                    filePath:imageSrc,
                    config:{
                        env:'release-b86096'
                    },
                    success:(res)=>{
                        console.log(res.fileID);
                        console.log('uploadImage success, res is:',res);
                        wx.showToast({
                            title:'上传成功',
                            icon:'success',
                            duration:1000
                        });
                        self.setData({
                            imageSrc:imageSrc,
                            fileID:res.fileID
                        });
                    },
                    fail:function({errMsg}){
                        console.log('uploadImage fail, errMsg is',errMsg);
                    }
                });
            },
            fail:(res)=>{
                wx.showToast({
                    icon:'none',
                    title:'上传失败'
                });
                console.log('uploadImage fail, errMsg is',res.errMsg);
            }
        });
    },
    onUnload:function(){
        if(this.data.fileID){
            wx.cloud.deleteFile({
                fileList:[
                    this.data.fileID
                ]
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
      <onekit-view class="page-body-info">

        <onekit-block v-if="imageSrc">
          <onekit-image :src="imageSrc" class="image" mode="aspectFit"></onekit-image>
        </onekit-block>

        <onekit-block v-else>
          <onekit-view class="image-plus image-plus-nb" @tap="chooseImage">
            <onekit-view class="image-plus-horizontal"></onekit-view>
            <onekit-view class="image-plus-vertical"></onekit-view>
          </onekit-view>
          <onekit-view class="image-plus-text">选择图片</onekit-view>
        </onekit-block>

      </onekit-view>
    </onekit-view>
  </onekit-view>

  
</onekit-view></template>

<style scoped src="@/app.css"/>
<style>
.image {
  width: 100%;
  height: 330px;
}
.page-body-info {
  display: flex;
  box-sizing: border-box;
  padding: 15px;
  height: 410px;
  border-top: 1px solid var(--weui-FG-3);
  border-bottom: 1px solid var(--weui-FG-3);
  align-items: center;
  justify-content: center;
}
</style>
