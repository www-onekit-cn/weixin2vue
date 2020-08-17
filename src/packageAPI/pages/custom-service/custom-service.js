import "../../../onekit/OnekitPage.js"
import wx from '../../../onekit/wx.js';
export default OnekitPage({
    onShareAppMessage:function(){
        return {
            title:'联系客服',
            path:'packageAPI/pages/custom-service/custom-service'
        };
    }
});
