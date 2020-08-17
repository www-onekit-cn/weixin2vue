import OnekitPage from "../../../../onekit/OnekitPage.js"
import wx from '../../../../onekit/wx.js';
export default OnekitPage({
    data:{},
    onLoad:function(options){
    },
    onReady:function(){
    },
    onShareAppMessage:function(){
        return {
            title:'小窗模式',
            path:'page/component/pages/picture-in-picture/picture-in-picture'
        };
    }
});
