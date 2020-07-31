<script>
const PAGE_JSON = {
	"navigationBarTitleText":"多线程Worker",
	"usingComponents":{}
}
</script>
<script>
import {OnekitApp,OnekitPage,OnekitComponent} from "../../../onekit/onekit.js";
import wx from "../../../onekit/wx.js";
const {fib} = require('../../../util/util.js');
export default OnekitPage({
    onShareAppMessage:function(){
        return {
            title:'多线程Worker',
            path:'packageAPI/pages/worker/worker'
        };
    },
    data:{
        res:'',
        input:35
    },
    onLoad:function(){
        this._worker = wx.createWorker('workers/fib/index.js');
    },
    onUnload:function(){
        clearInterval(this.interval);
        if(this._worker)this._worker.terminate()
    },
    bindInput:function(e){
        const val = Number(e.detail.value);
        if(val > 40)return {
            value:40
        }
        if(Number.isNaN(val))return {
            value:33
        }
        this.setData({
            input:val
        });
        return undefined;
    },
    reset:function(){
        this.setData({
            res:''
        });
    },
    compute:function(){
        this.reset();
        wx.showLoading({
            title:'计算中...'
        });
        const t0 = +Date.now();
        const res = fib(this.data.input);
        const t1 = +Date.now();
        wx.hideLoading();
        this.setData({
            res:res,
            time:t1 - t0
        });
    },
    multiThreadCompute:function(){
        this.reset();
        wx.showLoading({
            title:'计算中...'
        });
        const t0 = +Date.now();
        this._worker.postMessage({
            type:'execFunc_fib',
            params:[
                this.data.input
            ]
        });
        this._worker.onMessage((res)=>{if(res.type === 'execFunc_fib'){
            wx.hideLoading();
            const t1 = +Date.now();
            this.setData({
                res:res.result,
                time:t1 - t0
            });
        }});
    },
    onReady:function(){
        this.position = {
            x:150,
            y:150,
            vx:2,
            vy:2
        };
        this.drawBall();
        this.interval = setInterval(()=>{
this.drawBall();
},()=>{
17();
});
    },
    drawBall:function(){
        const p = this.position;
        p.x += p.vx;
        p.y += p.vy;
        if(p.x >= 300){
            p.vx = -2;
        }
        if(p.x <= 7){
            p.vx = 2;
        }
        if(p.y >= 300){
            p.vy = -2;
        }
        if(p.y <= 7){
            p.vy = 2;
        }
        const context = wx.createContext();
        function ball(x,y){
            context.beginPath(0);
            context.arc(x,y,5,0,Math.PI * 2);
            context.setFillStyle('#1aad19');
            context.setStrokeStyle('rgba(1,1,1,0)');
            context.fill();
            context.stroke();
        };
        ball(p.x,150);
        ball(150,p.y);
        ball(300 - p.x,150);
        ball(150,300 - p.y);
        ball(p.x,p.y);
        ball(300 - p.x,300 - p.y);
        ball(p.x,300 - p.y);
        ball(300 - p.x,p.y);
        wx.drawCanvas({
            canvasId:'canvas',
            actions:context.getActions()
        });
    }
});
</script>
<template>
<import src="../../../common/head.vue"/>
<import src="../../../common/foot.vue"/>

<onekit-view class="container">
  
  
  <onekit-view class="page-body">
    <onekit-view class="page-body-wrapper">
      <onekit-canvas canvas-id="canvas" class="canvas"></onekit-canvas>
    </onekit-view>
  </onekit-view>

  <onekit-view class="page-section">
    <onekit-view class="weui-cells__title">计算斐波那契数</onekit-view>
    <onekit-view class="weui-cells weui-cells_after-title">
      <onekit-view class="weui-cell weui-cell_input">
        <onekit-input class="weui-input" type="number" :value="input" @input="bindInput"></onekit-input>
      </onekit-view>
    </onekit-view>
    <onekit-view class="weui-cells__title">结果</onekit-view>
    <onekit-view class="weui-cells weui-cells_after-title">
      <onekit-view class="weui-cell weui-cell_input">
        <onekit-view class="weui-input">{{res}}</onekit-view>
      </onekit-view>
    </onekit-view>
     <onekit-view class="page-section-title">提示：使用单线程进行计算时，动画会出现明显的卡顿现象。使用 Worker 线程进行计算，则可以保证动画的流畅。</onekit-view>
    <onekit-view class="btn-area">
      <onekit-button @tap="compute">单线程计算</onekit-button>
      <onekit-button type="primary" @tap="multiThreadCompute">利用 Worker 线程计算</onekit-button>
    </onekit-view>
  </onekit-view>

  
</onekit-view></template>
<style scoped src="@/onekit/onekit.css"/>
<style scoped src="@/app.css"/>
<style>
@import "../../../common/lib/weui.css";

.canvas {
  width: 305px;
  height: 305px;
  background-color: #fff;
}

.page-section-title {
  margin-top: 15px;
}
</style>
