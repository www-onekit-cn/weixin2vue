<script>
const PAGE_JSON = {
	"navigationBarTitleText":"rich-text",
	"usingComponents":{}
}
</script>
<template>
<import src="../../../common/head.vue"/>
<import src="../../../common/foot.vue"/>

<onekit-view class="container">
  

  <onekit-view class="page-body">
    <onekit-view class="page-section">
      <onekit-view class="page-section-title">通过HTML String渲染</onekit-view>
      <onekit-view class="page-content">
        <onekit-scroll-view scroll-y>{{htmlSnip}}</onekit-scroll-view>
        <onekit-button type="primary" @tap="renderHtml">渲染HTML</onekit-button>
        <onekit-block v-if="renderedByHtml">
          <onekit-rich-text :nodes="htmlSnip"></onekit-rich-text>
        </onekit-block>
      </onekit-view>
    </onekit-view>

    <onekit-view class="page-section">
      <onekit-view class="page-section-title">通过节点渲染</onekit-view>
      <onekit-view class="page-content">
        <onekit-scroll-view scroll-y>{{nodeSnip}}</onekit-scroll-view>
        <onekit-button type="primary" @tap="renderNode">渲染Node</onekit-button>
        <onekit-block v-if="renderedByNode">
          <onekit-rich-text :nodes="nodes"></onekit-rich-text>
        </onekit-block>
      </onekit-view>
    </onekit-view>
  </onekit-view>

  
</onekit-view></template>
<script>
import {OnekitApp,OnekitPage,OnekitComponent} from '../../../../onekit/onekit.js';
import wx from '../../../../onekit/wx.js';
const htmlSnip = `<div class="div_class">
  <h1>Title</h1>
  <p class="p">
    Life is&nbsp;<i>like</i>&nbsp;a box of
    <b>&nbsp;chocolates</b>.
  </p>
</div>
`;
const nodeSnip = `Page({
  data: {
    nodes: [{
      name: 'div',
      attrs: {
        class: 'div_class',
        style: 'line-height: 60px; color: red;'
      },
      children: [{
        type: 'text',
        text: 'You never know what you're gonna get.'
      }]
    }]
  }
})
`;
export default OnekitPage({
    onShareAppMessage:function(){
        return {
            title:'rich-text',
            path:'page/component/pages/rich-text/rich-text'
        };
    },
    data:{
        htmlSnip:htmlSnip,
        nodeSnip:nodeSnip,
        renderedByHtml:false,
        renderedByNode:false,
        nodes:[
            {
                name:'div',
                attrs:{
                    class:'div_class',
                    style:'line-height: 60px; color: #1AAD19;'
                },
                children:[
                    {
                        type:'text',
                        text:'You never know what you\'re gonna get.'
                    }
                ]
            }
        ]
    },
    renderHtml:function(){
        this.setData({
            renderedByHtml:true
        });
    },
    renderNode:function(){
        this.setData({
            renderedByNode:true
        });
    },
    enterCode:function(e){
        console.log(e.detail.value);
        this.setData({
            htmlSnip:e.detail.value
        });
    }
});
</script>
<style scoped src="@/app.css"/>
<style>
.page-content {
  width: auto;
  margin: 15px 0;
  padding: 0 25px;
}

.code-fragment {
  height: 325px;
}

.code-textarea {
  width: auto;
  height: 325px;
  border: 1px solid #1AAD19;
}

.p {
  color: #1AAD19;
  margin-top: 15px;
}

.space {
  display: inline-block;
  background: red;
  width: 5px;
}

scroll-view {
  height: 325px;
  border: 1px solid #1AAD19;
  white-space: pre;
  padding: 5px;
  box-sizing: border-box;
}
</style>
