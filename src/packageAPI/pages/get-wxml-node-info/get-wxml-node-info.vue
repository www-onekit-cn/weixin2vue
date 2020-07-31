<script>
const PAGE_JSON = {
	"navigationBarTitleText":"获取WXML节点信息",
	"usingComponents":{}
}
</script>
<template>
<import src="../../../common/head.vue"/>
<import src="../../../common/foot.vue"/>

<onekit-view class="container">
  

  <onekit-view class="page-body">
    <onekit-view class="page-section">
      <onekit-movable-area>
        <onekit-movable-view class="target" :x="x" :y="y" direction="all" @change="getNodeInfo">
          Drag
        </onekit-movable-view>
      </onekit-movable-area>
    </onekit-view>

    <onekit-view class="page-section">
      <onekit-view class="metric">
        <onekit-view v-for="(item,key) in  metrics ">
          <onekit-text class="b">{{ item.key }}</onekit-text>
          <onekit-text class="span">{{ item.val }}</onekit-text>
        </onekit-view>
      </onekit-view>
    </onekit-view>
  </onekit-view>

  
</onekit-view></template>
<script>
import {OnekitApp,OnekitPage,OnekitComponent} from '../../../onekit/onekit.js';
import wx from '../../../onekit/wx.js';
export default OnekitPage({
    onShareAppMessage:function(){
        return {
            title:'获取WXML节点信息',
            path:'packageAPI/pages/get-wxml-node-info/get-wxml-node-info'
        };
    },
    data:{
        metrics:[
        ]
    },
    onReady:function(){
        this.getNodeInfo();
    },
    getNodeInfo:function(){
        const $ = wx.createSelectorQuery();
        const target = $.select('.target');
        target.boundingClientRect();
        $.exec((res)=>{
            const rect = res[0];
            if(rect){
                const metrics = [
                ];
                for(const key in rect){
                        if((key !== 'id') && (key !== 'dataset')){
                            const val = rect[key];
                            metrics.push({
                                key:key,
                                val:val
                            });
                        }
                    };
                this.setData({
                    metrics:metrics
                });
            }
        });
    }
});
</script>
<style scoped src="@/app.css"/>
<style>
movable-view {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 50px;
  background: #1AAD19;
  color: #fff;  
}

movable-area {
  height: 200px;
  width: 200px;
  background-color: #ccc;
  overflow: hidden;
}

.page-section {
  display: flex;
  justify-content: center;
}

.page-body {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.metric {
  width: 200px;
  display: flex;
  justify-content: center;
  flex-direction:column;
  align-items:center;
}

.b {
  display: inline-block;
  width: 75px;
  font-weight: bold;
}

.span {
  display: inline-block;
  width: 50px;
}
</style>
