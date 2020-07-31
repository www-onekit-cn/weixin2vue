<script>
const PAGE_JSON = {
	"navigationBarTitleText":"radio",
	"usingComponents":{}
}
</script>
<script>
import {OnekitApp,OnekitPage,OnekitComponent} from "../../../../onekit/onekit.js";
import wx from "../../../../onekit/wx.js";
OnekitPage({
    onShareAppMessage:function(){
        return {
            title:'radio',
            path:'page/component/pages/radio/radio'
        };
    },
    data:{
        items:[
            {
                value:'USA',
                name:'美国'
            },
            {
                value:'CHN',
                name:'中国',
                checked:'true'
            },
            {
                value:'BRA',
                name:'巴西'
            },
            {
                value:'JPN',
                name:'日本'
            },
            {
                value:'ENG',
                name:'英国'
            },
            {
                value:'FRA',
                name:'法国'
            }
        ]
    },
    radioChange:function(e){
        console.log('radio发生change事件，携带value值为：',e.detail.value);
        const items = this.data.items;
        for(var i = 0,len = items.length;i < len;++i){
            items[i].checked = items[i].value === e.detail.value;
        };
        this.setData({
            items:items
        });
    }
});
</script>
<template>
<import src="../../../common/head.vue"/>
<import src="../../../common/foot.vue"/>

<onekit-view class="container">
  

  <onekit-view class="page-body">
    <onekit-view class="page-section page-section-gap">
      <onekit-view class="page-section-title">默认样式</onekit-view>
      <onekit-label class="radio">
        <onekit-radio value="r1" checked="true"></onekit-radio>选中
      </onekit-label>
      <onekit-label class="radio">
        <onekit-radio value="r2"></onekit-radio>未选中
      </onekit-label>
    </onekit-view>


    <onekit-view class="page-section">
      <onekit-view class="page-section-title">推荐展示样式</onekit-view>
      <onekit-view class="weui-cells weui-cells_after-title">
        <onekit-radio-group @change="radioChange">
          <onekit-label v-for="(item,value) in items" class="weui-cell weui-check__label">

            <onekit-view class="weui-cell__hd">
              <onekit-radio :value="item.value" checked="true"></onekit-radio>
            </onekit-view>
            <onekit-view class="weui-cell__bd">{{item.name}}</onekit-view>
          </onekit-label>
        </onekit-radio-group>
      </onekit-view>
    </onekit-view>
  </onekit-view>

  
</onekit-view></template>
<style scoped src="@/onekit/onekit.css"/><style>
@import "../../../common/lib/weui.css";

.radio {
  margin-right: 10px;
}
</style>
