import PAGE_JSON from './template-message.json.js';
import {OnekitApp,OnekitPage,OnekitComponent} from "../../../onekit/onekit.js";
import wx from "../../../onekit/wx.js";
const templateMessageUrl = require('../../../config').templateMessageUrl;
const app = getApp();
const formData = {
    address:'T.I.T 造舰厂',
    time:'2017.01.09',
    name:'帝国歼星舰',
    serial:'123456789'
};
OnekitPage({
    onShareAppMessage:function(){
        return {
            title:'模板消息',
            path:'packageAPI/pages/template-message/template-message'
        };
    },
    onLoad:function(){
        this.setData({
            formData:formData
        });
    },
    submitForm:function(e){
        const self = this;
        const {formId} = e.detail;
        const formData = e.detail.value;
        console.log('form_id is:',formId);
        self.setData({
            loading:true
        });
        app.getUserOpenId(function(err,openid){
            if(!err){
                wx.request({
                    url:templateMessageUrl,
                    method:'POST',
                    data:{
                        form_id:formId,
                        openid:openid,
                        formData:formData
                    },
                    success:function(res){
                        console.log('submit form success',res);
                        wx.showToast({
                            title:'发送成功',
                            icon:'success'
                        });
                        self.setData({
                            loading:false
                        });
                    },
                    fail:function({errMsg}){
                        console.log('submit form fail, errMsg is:',errMsg);
                    }
                });
            } else {
                console.log('err:',err);
            }
        });
    }
});
