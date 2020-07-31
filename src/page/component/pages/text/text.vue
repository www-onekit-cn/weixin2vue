<script>
const PAGE_JSON = {
	"navigationBarTitleText":"text",
	"usingComponents":{}
}
</script>
<script>
import {OnekitApp,OnekitPage,OnekitComponent} from "../../../../onekit/onekit.js";
import wx from "../../../../onekit/wx.js";
const texts = [
    '2011年1月，微信1.0发布',
    '同年5月，微信2.0语音对讲发布',
    '10月，微信3.0新增摇一摇功能',
    '2012年3月，微信用户突破1亿',
    '4月份，微信4.0朋友圈发布',
    '同年7月，微信4.2发布公众平台',
    '2013年8月，微信5.0发布微信支付',
    '2014年9月，企业号发布',
    '同月，发布微信卡包',
    '2015年1月，微信第一条朋友圈广告',
    '2016年1月，企业微信发布',
    '2017年1月，小程序发布',
    '......'
];
export default OnekitPage({
    onShareAppMessage:function(){
        return {
            title:'text',
            path:'page/component/pages/text/text'
        };
    },
    data:{
        text:'',
        canAdd:true,
        canRemove:false
    },
    extraLine:[
    ],
    add:function(){
        this.extraLine.push(texts[this.extraLine.length % 12]);
        this.setData({
            text:this.extraLine.join('\n'),
            canAdd:this.extraLine.length < 12,
            canRemove:this.extraLine.length > 0
        });
        setTimeout(()=>{this.setData({
            scrollTop:99999
        })},0);
    },
    remove:function(){
        if(this.extraLine.length > 0){
            this.extraLine.pop();
            this.setData({
                text:this.extraLine.join('\n'),
                canAdd:this.extraLine.length < 12,
                canRemove:this.extraLine.length > 0
            });
        }
        setTimeout(()=>{this.setData({
            scrollTop:99999
        })},0);
    }
});
</script>
<template>
<import src="../../../common/head.vue"/>
<import src="../../../common/foot.vue"/>

<onekit-view class="container">
  

  <onekit-view class="page-body">
    <onekit-view class="page-section page-section-spacing">
      <onekit-view class="text-box" scroll-y="true" :scroll-top="scrollTop">
        <onekit-text>{{text}}</onekit-text>
      </onekit-view>
      <onekit-button :disabled="!canAdd" @tap="add">add line</onekit-button>
      <onekit-button :disabled="!canRemove" @tap="remove">remove line</onekit-button>
    </onekit-view>
  </onekit-view>

  
</onekit-view></template>
<style scoped src="@/onekit/onekit.css"/>
<style scoped src="@/app.css"/>
<style>
button{
  margin: 20px 0;
}
.text-box{
  margin-bottom: 35px;
  padding: 20px 0;
  display: flex;
  min-height: 150px;
  background-color: #FFFFFF;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 15px;
  color: #353535;
  line-height: 2em;
}
</style>
