import PAGE_JSON from './scroll-view.json.js';
import {OnekitApp,OnekitPage,OnekitComponent} from "../../../../onekit/onekit.js";
import wx from "../../../../onekit/wx.js";
const order = [
    'demo1',
    'demo2',
    'demo3'
];
OnekitPage({
    onLoad:function(){
        this.animate('#scroll-sample-object1',[
            {
                borderRadius:'0',
                offset:0
            },
            {
                borderRadius:'25%',
                offset:0.5
            },
            {
                borderRadius:'50%',
                offset:1
            }
        ],2000,{
            scrollSource:'#scroll-view_D',
            timeRange:2000,
            startScrollOffset:0,
            endScrollOffset:150
        });
        this.animate('#scroll-sample-object2',[
            {
                opacity:1,
                offset:0
            },
            {
                opacity:0.5,
                offset:0.5
            },
            {
                opacity:0.3,
                offset:1
            }
        ],2000,{
            scrollSource:'#scroll-view_D',
            timeRange:2000,
            startScrollOffset:150,
            endScrollOffset:300
        });
        this.animate('#scroll-sample-object3',[
            {
                background:"white",
                offset:0
            },
            {
                background:"yellow",
                offset:1
            }
        ],2000,{
            scrollSource:'#scroll-view_D',
            timeRange:2000,
            startScrollOffset:300,
            endScrollOffset:400
        });
    },
    onPulling:function(e){
        console.log('onPulling:',e);
    },
    onRefresh:function(){
        if(this._freshing)return
        this._freshing = true;
        setTimeout(()=>{
            this.setData({
                triggered:false
            });
            this._freshing = false;
        },3000);
    },
    onRestore:function(e){
        console.log('onRestore:',e);
    },
    onAbort:function(e){
        console.log('onAbort',e);
    },
    onShareAppMessage:function(){
        return {
            title:'scroll-view',
            path:'page/component/pages/scroll-view/scroll-view'
        };
    },
    data:{
        toView:'green',
        triggered:false
    },
    upper:function(e){
        console.log(e);
    },
    lower:function(e){
        console.log(e);
    },
    scroll:function(e){
        console.log(e);
    },
    scrollToTop:function(){
        this.setAction({
            scrollTop:0
        });
    },
    tap:function(){
        for(var i = 0;i < order.length;++i){
            if(order[i] === this.data.toView){
                this.setData({
                    toView:order[i + 1],
                    scrollTop:(i + 1) * 200
                });
                break;
            }
        };
    },
    tapMove:function(){
        this.setData({
            scrollTop:this.data.scrollTop + 10
        });
    }
});
