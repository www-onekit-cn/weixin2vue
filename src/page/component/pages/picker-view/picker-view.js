import PAGE_JSON from './picker-view.json.js';
import {OnekitApp,OnekitPage,OnekitComponent} from "../../../../onekit/onekit.js";
import wx from "../../../../onekit/wx.js";
const date = new Date();
const years = [
];
const months = [
];
const days = [
];
for(var i = 1990;i <= date.getFullYear();i++){
    years.push(i);
};
for(var i = 1;i <= 12;i++){
    months.push(i);
};
for(var i = 1;i <= 31;i++){
    days.push(i);
};
OnekitPage({
    onShareAppMessage:function(){
        return {
            title:'picker-view',
            path:'page/component/pages/picker-view/picker-view'
        };
    },
    data:{
        years:years,
        year:date.getFullYear(),
        months:months,
        month:2,
        days:days,
        day:2,
        value:[
            9999,
            1,
            1
        ],
        isDaytime:true
    },
    bindChange:function(e){
        const val = e.detail.value;
        this.setData({
            year:this.data.years[val[0]],
            month:this.data.months[val[1]],
            day:this.data.days[val[2]],
            isDaytime:!val[3]
        });
    }
});
