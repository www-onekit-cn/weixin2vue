<script>
const PAGE_JSON = {
	"navigationBarTitleText":"canvas",
	"usingComponents":{}
}
</script>
<template>
    <page>
        <import src="../../../common/head.vue"/>
        <import src="../../../common/foot.vue"/>

        <onekit-view class="container">
            <onekit-view class="page-body">
                <onekit-block v-if="canIUse">
                <onekit-view class="page-section">
                    <onekit-view class="page-section-spacing">
                    <onekit-view class="page-body-wrapper">
                        <onekit-canvas canvas-id="canvas" class="canvas"></onekit-canvas>
                    </onekit-view>
                    </onekit-view>
                </onekit-view>
                </onekit-block>
                <onekit-view v-else style="margin: 15px; text-align:center">
                微信版本过低，暂不支持本功能
                </onekit-view>
            </onekit-view>
        </onekit-view>
    </page>
</template>
<script>
import OnekitPage from "../../../../onekit/OnekitPage.js"
import wx from '../../../../onekit/wx.js';
import {compareVersion} from "../../../../util/util";
export default OnekitPage({
    onShareAppMessage:function(){
        return {
            title:'canvas',
            path:'page/component/pages/canvas/canvas'
        };
    },
    data:{
        canIUse:true
    },
    onReady:function(){
        const {SDKVersion} = wx.getSystemInfoSync();
        if(compareVersion(SDKVersion,'2.7.0') < 0){
            console.log('123');
            this.setData({
                canIUse:false
            });
        } else {
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
        }
    },
    init:function(res){
        const width = res[0].width;
        const height = res[0].height;
        const canvas = res[0].node;
        const ctx = canvas.getContext('2d');
        const dpr = wx.getSystemInfoSync().pixelRatio;
        canvas.width = width * dpr;
        canvas.height = height * dpr;
        ctx.scale(dpr,dpr);
        const renderLoop = ()=>{
            this.render(canvas,ctx);
            canvas.requestAnimationFrame(renderLoop);
        };
        canvas.requestAnimationFrame(renderLoop);
        const img = canvas.createImage();
        img.onload = ()=>{this._img = img};
        img.src = './car.png';
    },
    render:function(canvas,ctx){
        ctx.clearRect(0,0,305,305);
        this.drawBall2D(ctx);
        this.drawCar(ctx);
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
        const context = wx.createCanvasContext('canvas');
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
        context.draw();
    },
    onUnload:function(){
        clearInterval(this.interval);
    }
});
</script>
<style scoped src="@/app.css"/>
<style>
@import '../../../common//lib/weui.css';

.canvas {
  width: 305px;
  height: 305px;
  background-color: var(--weui-BG-1);
  margin-top: 30px;
}
</style>
