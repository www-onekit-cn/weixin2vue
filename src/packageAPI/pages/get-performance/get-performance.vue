<script>
const PAGE_JSON = {
	"navigationBarTitleText":"性能数据",
	"usingComponents":{}
}
</script>
<script>
import {OnekitApp,OnekitPage,OnekitComponent} from "../../../onekit/onekit.js";
import wx from "../../../onekit/wx.js";
const util = require('./util');
const performance = wx.getPerformance?wx.getPerformance():{};
const performanceObserver = performance.createObserver?performance.createObserver():null;
OnekitPage({
    onShareAppMessage:function(){
        return {
            title:'周期性缓存',
            path:'packageAPI/pages/get-performance/get-performance'
        };
    },
    data:{
        array:[
        ],
        support:false
    },
    onLoad:function(){
        console.log('canIUse:getPerformance:',wx.canIUse('getPerformance'));
        var canIUse = false;
        if(wx.getPerformance){
            canIUse = true;
        }
        this.setData({
            support:canIUse
        });
    },
    getPerformanceInfo:function(){
        const EntryList = performance.getEntries();
        const array = [
        ];
        EntryList.forEach((item)=>{array.push({
            entryType:util.renderEntryType(item.entryType),
            name:util.renderName(item.name),
            duration:util.renderDuration(item.duration),
            startTime:util.renderStartTime(item.startTime)
        })});
        this.setData({
            array:array
        });
    },
    startObserver:function(){
        performanceObserver.observe({
            entryTypes:[
                'render',
                'script',
                'navigation'
            ]
        });
    },
    stopObserver:function(){
        performanceObserver.disconnect();
    }
});
</script>
<template>

<import src="../../../common/head.vue"/>
<import src="../../../common/foot.vue"/>

<onekit-view class="container">
  
  <onekit-block v-if="support">
    <onekit-button type="primary" @:tap="getPerformanceInfo">
      获取性能数据
    </onekit-button>
    <onekit-view class="page-section">
      <onekit-view v-for="(item) in array" class="performance-list">
        <onekit-view class="performance-item">
          <onekit-view>{{item.entryType}}：{{item.name}}</onekit-view>
          <onekit-view v-if="item.duration">耗时：{{item.duration}}</onekit-view>
          <onekit-view v-if="item.startTime">时间：{{item.startTime}}</onekit-view>
        </onekit-view>
      </onekit-view>
    </onekit-view>
  </onekit-block>
  <onekit-view style="text-align: center" v-else>
    微信版本过低，暂不支持本功能
  </onekit-view>

  
</onekit-view></template>
<style scoped src="@/onekit/onekit.css"/><style>
.container {
  display: block;
}
.performance-list {
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
}
.performance-item {
  margin: 15px 0;
  width: 80%;
}
</style>
