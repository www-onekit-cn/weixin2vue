import PAGE_JSON from './form.json.js';
import {OnekitApp,OnekitPage,OnekitComponent} from "../../../../onekit/onekit.js";
import wx from "../../../../onekit/wx.js";
OnekitPage({
    onShareAppMessage:function(){
        return {
            title:'form',
            path:'page/component/pages/form/form'
        };
    },
    data:{
        pickerHidden:true,
        chosen:''
    },
    pickerConfirm:function(e){
        this.setData({
            pickerHidden:true
        });
        this.setData({
            chosen:e.detail.value
        });
    },
    pickerCancel:function(){
        this.setData({
            pickerHidden:true
        });
    },
    pickerShow:function(){
        this.setData({
            pickerHidden:false
        });
    },
    formSubmit:function(e){
        console.log('form发生了submit事件，携带数据为：',e.detail.value);
    },
    formReset:function(e){
        console.log('form发生了reset事件，携带数据为：',e.detail.value);
        this.setData({
            chosen:''
        });
    }
});
