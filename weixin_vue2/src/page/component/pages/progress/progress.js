import PAGE_JSON from './progress.json';
import {OnekitApp,OnekitPage,OnekitComponent} from "../../../../onekit/onekit.js";
import wx from "../../../../onekit/wx.js";
OnekitPage({
    onShareAppMessage:function(){
        return {
            title:'progress',
            path:'page/component/pages/progress/progress'
        };
    }
});
