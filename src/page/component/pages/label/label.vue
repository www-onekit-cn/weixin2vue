<script>
const PAGE_JSON = {
	"navigationBarTitleText":"label",
	"usingComponents":{}
}
</script>
<template>
<import src="../../../common/head.vue"/>
<import src="../../../common/foot.vue"/>

<onekit-view class="container">
  

  <onekit-view class="page-body">
    <onekit-view class="page-section page-section-gap">
      <onekit-view class="page-section-title">表单组件在label内</onekit-view>
      <onekit-checkbox-group class="group" @change="checkboxChange">
        <onekit-view v-for="(item) in checkboxItems" class="label-1">
          <onekit-label>
            <onekit-checkbox :value="item.name" :checked="item.checked"></onekit-checkbox>
            <onekit-text class="label-1-text">{{item.value}}</onekit-text>
          </onekit-label>
        </onekit-view>
      </onekit-checkbox-group>
    </onekit-view>

    <onekit-view class="page-section page-section-gap">
      <onekit-view class="page-section-title">label用for标识表单组件</onekit-view>
      <onekit-radio-group class="group" @change="radioChange">
        <onekit-view v-for="(item) in radioItems" class="label-2">
          <onekit-radio :id="item.name" :value="item.name" :checked="item.checked"></onekit-radio>
          <onekit-label class="label-2-text" :for="item.name"><onekit-text>{{item.name}}</onekit-text></onekit-label>
        </onekit-view>
      </onekit-radio-group>
    </onekit-view>

    <onekit-view class="page-section page-section-gap">
      <onekit-view class="page-section-title">label内有多个时选中第一个</onekit-view>
      <onekit-label class="label-3">
        <onekit-checkbox class="checkbox-3">选项一</onekit-checkbox>
        <onekit-checkbox class="checkbox-3">选项二</onekit-checkbox>
        <onekit-view class="label-3-text">点击该label下的文字默认选中第一个checkbox</onekit-view>
      </onekit-label>
    </onekit-view>
  </onekit-view>

  
</onekit-view></template>
<script>
import {OnekitApp,OnekitPage,OnekitComponent} from '../../../../onekit/onekit.js';
import wx from '../../../../onekit/wx.js';
export default OnekitPage({
    onShareAppMessage:function(){
        return {
            title:'label',
            path:'page/component/pages/label/label'
        };
    },
    data:{
        checkboxItems:[
            {
                name:'USA',
                value:'美国'
            },
            {
                name:'CHN',
                value:'中国',
                checked:'true'
            }
        ],
        radioItems:[
            {
                name:'USA',
                value:'美国'
            },
            {
                name:'CHN',
                value:'中国',
                checked:'true'
            }
        ],
        hidden:false
    },
    checkboxChange:function(e){
        const checked = e.detail.value;
        const changed = {};
        for(var i = 0;i < this.data.checkboxItems.length;i++){
            if(checked.indexOf(this.data.checkboxItems[i].name) !== -1){
                changed[('checkboxItems[' + i) + '].checked'] = true;
            } else {
                changed[('checkboxItems[' + i) + '].checked'] = false;
            }
        };
        this.setData(changed);
    },
    radioChange:function(e){
        const checked = e.detail.value;
        const changed = {};
        for(var i = 0;i < this.data.radioItems.length;i++){
            if(checked.indexOf(this.data.radioItems[i].name) !== -1){
                changed[('radioItems[' + i) + '].checked'] = true;
            } else {
                changed[('radioItems[' + i) + '].checked'] = false;
            }
        };
        this.setData(changed);
    },
    tapEvent:function(){
        console.log('按钮被点击');
    }
});
</script>
<style scoped src="@/app.css"/>
<style>
.label-1, .label-2{
  margin: 15px 0;
}
.label-3-text{
  color: #576B95;
  font-size: 14px;
}
.checkbox-3{
  display: block;
  margin: 15px 0;
}
</style>
