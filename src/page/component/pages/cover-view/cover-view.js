import PAGE_JSON from './cover-view.json.js';
import {OnekitApp,OnekitPage,OnekitComponent} from "../../../../onekit/onekit.js";
import wx from "../../../../onekit/wx.js";
OnekitPage({
    onShareAppMessage:function(){
        return {
            title:'cover-view',
            path:'page/component/pages/cover-view/cover-view'
        };
    },
    data:{
        latitude:23.099994,
        longitude:113.32452
    }
});
