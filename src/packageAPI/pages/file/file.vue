<script>
const PAGE_JSON = {
	"navigationBarTitleText":"文件",
	"usingComponents":{}
}
</script>
<script>
import {OnekitApp,OnekitPage,OnekitComponent} from "../../../onekit/onekit.js";
import wx from "../../../onekit/wx.js";
OnekitPage({
    onShareAppMessage:function(){
        return {
            title:'文件',
            path:'packageAPI/pages/file/file'
        };
    },
    onLoad:function(){
        this.setData({
            savedFilePath:wx.getStorageSync('savedFilePath')
        });
    },
    data:{
        tempFilePath:'',
        savedFilePath:'',
        dialog:{
            hidden:true
        }
    },
    chooseImage:function(){
        const that = this;
        wx.chooseImage({
            count:1,
            success:function(res){
                that.setData({
                    tempFilePath:res.tempFilePaths[0]
                });
            }
        });
    },
    saveFile:function(){
        if(this.data.tempFilePath.length > 0){
            const that = this;
            wx.saveFile({
                tempFilePath:this.data.tempFilePath,
                success:function(res){
                    that.setData({
                        savedFilePath:res.savedFilePath
                    });
                    wx.setStorageSync('savedFilePath',res.savedFilePath);
                    that.setData({
                        dialog:{
                            title:'保存成功',
                            content:'下次进入应用时，此文件仍可用',
                            hidden:false
                        }
                    });
                },
                fail:function(){
                    that.setData({
                        dialog:{
                            title:'保存失败',
                            content:'应该是有 bug 吧',
                            hidden:false
                        }
                    });
                }
            });
        }
    },
    clear:function(){
        wx.setStorageSync('savedFilePath','');
        this.setData({
            tempFilePath:'',
            savedFilePath:''
        });
    },
    confirm:function(){
        this.setData({
            'dialog.hidden':true
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
      <onekit-view class="page-body-info">
        <onekit-block v-if="tempFilePath != ''">
          <onekit-image :src="tempFilePath" class="image" mode="aspectFit"></onekit-image>
        </onekit-block>
        <onekit-block v-if="tempFilePath === '' && savedFilePath != ''">
          <onekit-image :src="savedFilePath" class="image" mode="aspectFit"></onekit-image>
        </onekit-block>
        <onekit-block v-if="tempFilePath === '' && savedFilePath === ''">
          <onekit-view class="image-plus image-plus-nb" @tap="chooseImage">
            <onekit-view class="image-plus-horizontal"></onekit-view>
            <onekit-view class="image-plus-vertical"></onekit-view>
          </onekit-view>
          <onekit-view class="image-plus-text">请选择文件</onekit-view>
        </onekit-block>
      </onekit-view>
      <onekit-view class="btn-area">
        <onekit-button type="primary" @tap="saveFile">保存文件</onekit-button>
        <onekit-button @tap="clear">删除文件</onekit-button>
      </onekit-view>
    </onekit-view>
  </onekit-view>

  <onekit-modal :title="dialog.title" :hidden="dialog.hidden" no-cancel @confirm="confirm">{{dialog.content}}</onekit-modal>

  
</onekit-view></template>
<style scoped src="@/onekit/onekit.css"/><style>
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
