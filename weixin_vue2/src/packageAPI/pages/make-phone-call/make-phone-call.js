import PAGE_JSON from './make-phone-call.json';
import {OnekitApp,OnekitPage,OnekitComponent} from "../../../onekit/onekit.js";
import wx from "../../../onekit/wx.js";
OnekitPage({
    onShareAppMessage:function(){
        return {
            title:'打电话',
            path:'packageAPI/pages/make-phone-call/make-phone-call'
        };
    },
    data:{
        disabled:true
    },
    bindInput:function(e){
        this.inputValue = e.detail.value;
        if(this.inputValue.length > 0){
            this.setData({
                disabled:false
            });
        } else {
            this.setData({
                disabled:true
            });
        }
    },
    makePhoneCall:function(){
        wx.makePhoneCall({
            phoneNumber:this.inputValue,
            success:function(){
                console.log('成功拨打电话');
            }
        });
    }
});
