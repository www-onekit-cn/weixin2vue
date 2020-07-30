import PAGE_JSON from './scf-storage.json';
import {OnekitApp,OnekitPage,OnekitComponent} from "../../../onekit/onekit.js";
import wx from "../../../onekit/wx.js";
const demoImageFileId = require('../../../config').demoImageFileId;
const app = getApp();
OnekitPage({
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
