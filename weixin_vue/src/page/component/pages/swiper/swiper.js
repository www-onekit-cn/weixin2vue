import PAGE_JSON from './swiper.json.js';
import {OnekitApp,OnekitPage,OnekitComponent} from "../../../../onekit/onekit.js";
import wx from "../../../../onekit/wx.js";
OnekitPage({
    onShareAppMessage:function(){
        return {
            title:'swiper',
            path:'page/component/pages/swiper/swiper'
        };
    },
    data:{
        background:[
            'demo-text-1',
            'demo-text-2',
            'demo-text-3'
        ],
        indicatorDots:true,
        vertical:false,
        autoplay:false,
        interval:2000,
        duration:500
    },
    changeIndicatorDots:function(){
        this.setData({
            indicatorDots:!this.data.indicatorDots
        });
    },
    changeAutoplay:function(){
        this.setData({
            autoplay:!this.data.autoplay
        });
    },
    intervalChange:function(e){
        this.setData({
            interval:e.detail.value
        });
    },
    durationChange:function(e){
        this.setData({
            duration:e.detail.value
        });
    }
});
