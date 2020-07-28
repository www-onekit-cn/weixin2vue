import PAGE_JSON from './sidebar.json';
import {OnekitApp,OnekitPage,OnekitComponent} from "../../../onekit/onekit.js";
import wx from "../../../onekit/wx.js";
OnekitPage({
    data:{
        tabs:[
        ],
        open:false,
        mark:0,
        newmark:0,
        startmark:0,
        endmark:0,
        windowWidth:wx.getSystemInfoSync().windowWidth,
        staus:1,
        translate:''
    },
    onLoad:function(){
        const tabs = [
            {
                title:'技术开发',
                title2:'小程序开发进阶',
                img:'http://mmbiz.qpic.cn/sz_mmbiz_jpg/GEWVeJPFkSEV5QjxLDJaL6ibHLSZ02TIcve0ocPXrdTVqGGbqAmh5Mw9V7504dlEiatSvnyibibHCrVQO2GEYsJicPA/0?wx_fmt=jpeg',
                desc:'本视频系列课程，由腾讯课堂NEXT学院与微信团队联合出品，通过实战案例，深入浅出地进行讲解。'
            }
        ];
        this.setData({
            tabs:tabs
        });
    }
});
