import PAGE_JSON from './file.json';
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
