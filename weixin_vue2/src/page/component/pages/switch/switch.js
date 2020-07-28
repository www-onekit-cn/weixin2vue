import PAGE_JSON from './switch.json';
import {OnekitApp,OnekitPage,OnekitComponent} from "../../../../onekit/onekit.js";
import wx from "../../../../onekit/wx.js";
OnekitPage({
    onShareAppMessage:function(){
        return {
            title:'switch',
            path:'page/component/pages/switch/switch'
        };
    },
    switch1Change:function(e){
        console.log('switch1 发生 change 事件，携带值为',e.detail.value);
    },
    switch2Change:function(e){
        console.log('switch2 发生 change 事件，携带值为',e.detail.value);
    }
});
