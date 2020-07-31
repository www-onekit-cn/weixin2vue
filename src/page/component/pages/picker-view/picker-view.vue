<script>
const PAGE_JSON = {
	"navigationBarTitleText":"picker-view",
	"usingComponents":{}
}
</script>
<template>
<import src="../../../common/head.vue"/>
<import src="../../../common/foot.vue"/>

<onekit-view class="container">
  

  <onekit-view class="page-body">
    <onekit-view class="selected-date">{{year}}年{{month}}月{{day}}日{{isDaytime ? "白天" : "夜晚"}}</onekit-view>
    <onekit-picker-view indicator-style="height: 50px;" style="width: 100%; height: 300px;" :value="value" @change="bindChange">
      <onekit-picker-view-column>
        <onekit-view v-for="(item,years) in years" style="line-height: 50px; text-align: center;">{{item}}年</onekit-view>
      </onekit-picker-view-column>
      <onekit-picker-view-column>
        <onekit-view v-for="(item,months) in months" style="line-height: 50px; text-align: center;">{{item}}月</onekit-view>
      </onekit-picker-view-column>
      <onekit-picker-view-column>
        <onekit-view v-for="(item,days) in days" style="line-height: 50px; text-align: center;">{{item}}日</onekit-view>
      </onekit-picker-view-column>
      <onekit-picker-view-column>
        <onekit-view class="icon-container">
          <onekit-image class="picker-icon" src="../../resources/kind/daytime.png"></onekit-image>
        </onekit-view>
        <onekit-view class="icon-container">
          <onekit-image class="picker-icon" src="../../resources/kind/night.png"></onekit-image>
        </onekit-view>
      </onekit-picker-view-column>
    </onekit-picker-view>
  </onekit-view>

  
</onekit-view></template>
<script>
import {OnekitApp,OnekitPage,OnekitComponent} from '../../../../onekit/onekit.js';
import wx from '../../../../onekit/wx.js';
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
export default OnekitPage({
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
</script>
<style scoped src="@/app.css"/>
<style>
.selected-date {
  text-align: center;
  margin: 15px;
}

.icon-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.picker-icon {
  width: 25px;
  height: 25px;
}
</style>
