<script>
const PAGE_JSON = {
	"navigationBarTitleText":"WXML节点布局相交状态",
	"usingComponents":{}
}
</script>
<script>
import {OnekitApp,OnekitPage,OnekitComponent} from "../../../onekit/onekit.js";
import wx from "../../../onekit/wx.js";
export default OnekitPage({
    onShareAppMessage:function(){
        return {
            title:'WXML节点布局相交状态',
            path:'packageAPI/pages/intersection-observer/intersection-observer'
        };
    },
    data:{
        appear:false
    },
    onLoad:function(){
        this._observer = wx.createIntersectionObserver(this);
        this._observer.relativeTo('.scroll-view').observe('.ball',(res)=>{
            console.log(res);
            this.setData({
                appear:res.intersectionRatio > 0
            });
        });
    },
    onUnload:function(){
        if(this._observer)this._observer.disconnect()
    }
});
</script>
<template>
<import src="../../../common/head.vue"/>
<import src="../../../common/foot.vue"/>

<onekit-view class="container">
  

  <onekit-view class="page-body">
    <onekit-view class="page-section message">
      <onekit-text v-if="appear">
        小球出现
      </onekit-text>
      <onekit-text v-else>
        小球消失
      </onekit-text>
    </onekit-view>
    <onekit-view class="page-section">
      <onekit-scroll-view class="scroll-view" scroll-y>
        <onekit-view class="scroll-area" :style="appear ? 'background: #ccc' : ''">
          <onekit-text class="notice">向下滚动让小球出现</onekit-text>
          <onekit-view class="filling"></onekit-view>
          <onekit-view class="ball"></onekit-view>
        </onekit-view>
      </onekit-scroll-view>
    </onekit-view>
  </onekit-view>

  
</onekit-view></template>

<style scoped src="@/app.css"/>
<style>
.scroll-view {
  height: 200px;
  background: var(--weui-BG-2);
}

.scroll-area {
  height: 1150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: .5s;
}

.notice {
  margin-top: 75px;
}

.ball {
  width: 100px;
  height: 100px;
  background: #1AAD19;
  border-radius: 50%;
}

.filling {
  height: 200px;
}

.message {
  width: 100%;
  display: flex;
  justify-content: center;
}

.message text {
  font-size: 20px;
  font-family: -apple-system-font, Helvetica Neue,Helvetica,sans-serif;
}
</style>
