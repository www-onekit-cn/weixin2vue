import "../../../onekit/OnekitPage.js"
import wx from '../../../onekit/wx.js';
export default OnekitPage({
    onShareAppMessage:function(){
        return {
            title:'sendMessage',
            path:'packageAPI/pages/sendMessage/sendMessage'
        };
    }
});
