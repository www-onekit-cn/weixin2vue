<script>
const PAGE_JSON = {
	"navigationBarTitleText":"checkbox",
	"usingComponents":{}
}
</script>
<script>
import {OnekitApp,OnekitPage,OnekitComponent} from "../../../../onekit/onekit.js";
import wx from "../../../../onekit/wx.js";
OnekitPage({
    onShareAppMessage:function(){
        return {
            title:'checkbox',
            path:'page/component/pages/checkbox/checkbox'
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
    checkboxChange:function(e){
        console.log('checkbox发生change事件，携带value值为：',e.detail.value);
        const items = this.data.items;
        const values = e.detail.value;
        for(var i = 0,lenI = items.length;i < lenI;++i){
            items[i].checked = false;
            for(var j = 0,lenJ = values.length;j < lenJ;++j){
                if(items[i].value === values[j]){
                    items[i].checked = true;
                    break;
                }
            }
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
      <onekit-label class="checkbox">
        <onekit-checkbox value="cb" checked="true"></onekit-checkbox>选中
      </onekit-label>
      <onekit-label class="checkbox">
        <onekit-checkbox value="cb"></onekit-checkbox>未选中
      </onekit-label>
    </onekit-view>

    <onekit-view class="page-section">
      <onekit-view class="page-section-title">推荐展示样式</onekit-view>
      <onekit-view class="weui-cells weui-cells_after-title">
        <onekit-checkbox-group @change="checkboxChange">
          <onekit-label v-for="(item,value) in items" class="weui-cell weui-check__label">
            <onekit-view class="weui-cell__hd">
              <onekit-checkbox :value="item.value" :checked="item.checked"></onekit-checkbox>
            </onekit-view>
            <onekit-view class="weui-cell__bd">{{item.name}}</onekit-view>
          </onekit-label>
        </onekit-checkbox-group>
      </onekit-view>
    </onekit-view>
  </onekit-view>

  
</onekit-view></template>
<style scoped src="@/onekit/onekit.css"/><style>
@import "../../../common/lib/weui.css";

.checkbox{
  margin-right: 10px;
}
</style>
