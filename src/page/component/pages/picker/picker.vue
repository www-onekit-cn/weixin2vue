<script>
const PAGE_JSON = {
	"navigationBarTitleText":"picker",
	"usingComponents":{}
}
</script>
<template>
<import src="../../../common/head.vue"/>
<import src="../../../common/foot.vue"/>

<onekit-view class="container">
  

  <onekit-view class="page-body">
    <onekit-view class="page-section">
      <onekit-view class="weui-cells__title">地区选择器</onekit-view>
      <onekit-view class="weui-cells weui-cells_after-title">
        <onekit-view class="weui-cell weui-cell_input">
          <onekit-view class="weui-cell__hd">
            <onekit-view class="weui-label">当前选择</onekit-view>
          </onekit-view>
          <onekit-view class="weui-cell__bd">
            <onekit-picker @change="bindPickerChange" :value="index" :range="array">
              <onekit-view class="weui-input">{{array[index]}}</onekit-view>
            </onekit-picker>
          </onekit-view>
        </onekit-view>
      </onekit-view>

      <onekit-view class="weui-cells__title">时间选择器</onekit-view>
      <onekit-view class="weui-cells weui-cells_after-title">
        <onekit-view class="weui-cell weui-cell_input">
          <onekit-view class="weui-cell__hd">
            <onekit-view class="weui-label">当前选择</onekit-view>
          </onekit-view>
          <onekit-view class="weui-cell__bd">
            <onekit-picker mode="time" :value="time" start="09:01" end="21:01" @change="bindTimeChange">
              <onekit-view class="weui-input">{{time}}</onekit-view>
            </onekit-picker>
          </onekit-view>
        </onekit-view>
      </onekit-view>

      <onekit-view class="weui-cells__title">日期选择器</onekit-view>
      <onekit-view class="weui-cells weui-cells_after-title">
        <onekit-view class="weui-cell weui-cell_input">
          <onekit-view class="weui-cell__hd">
            <onekit-view class="weui-label">当前选择</onekit-view>
          </onekit-view>
          <onekit-view class="weui-cell__bd">
            <onekit-picker mode="date" :value="date" start="2015-09-01" end="2017-09-01" @change="bindDateChange">
              <onekit-view class="weui-input">{{date}}</onekit-view>
            </onekit-picker>
          </onekit-view>
        </onekit-view>
      </onekit-view>
    </onekit-view>
  </onekit-view>

  
</onekit-view></template>
<script>
import {OnekitApp,OnekitPage,OnekitComponent} from '../../../../onekit/onekit.js';
import wx from '../../../../onekit/wx.js';
export default OnekitPage({
    onShareAppMessage:function(){
        return {
            title:'picker',
            path:'page/component/pages/picker/picker'
        };
    },
    data:{
        array:[
            '中国',
            '美国',
            '巴西',
            '日本'
        ],
        index:0,
        date:'2016-09-01',
        time:'12:01'
    },
    bindPickerChange:function(e){
        console.log('picker发送选择改变，携带值为',e.detail.value);
        this.setData({
            index:e.detail.value
        });
    },
    bindDateChange:function(e){
        this.setData({
            date:e.detail.value
        });
    },
    bindTimeChange:function(e){
        this.setData({
            time:e.detail.value
        });
    }
});
</script>
<style scoped src="@/app.css"/>
<style>
@import "../../../common/lib/weui.css";

.picker{
  padding: 10px 13px;
  background-color: #FFFFFF;
}
</style>
