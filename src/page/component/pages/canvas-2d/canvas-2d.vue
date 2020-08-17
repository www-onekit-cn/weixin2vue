<script>
const PAGE_JSON = {
	"navigationBarTitleText":"canvas 2d",
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
                        <onekit-canvas type="2d" id="canvas2D" class="canvas"></onekit-canvas>    
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
            path:'page/component/pages/canvas-2d/canvas-2d'
        };
    },
    data:{
        canIUse:true
    },
    onReady:function(){
        const {SDKVersion} = wx.getSystemInfoSync();
        console.log(SDKVersion);
        if(compareVersion(SDKVersion,'2.7.0') < 0){
            console.log('123');
            this.setData({
                canIUse:false
            });
        } else {
            this.position2D = {
                x:150,
                y:150,
                vx:2,
                vy:2
            };
            this.x = -100;
            wx.createSelectorQuery().select('#canvas2D').fields({
    node:true,
    size:true
}).exec(this.init.bind(this));
        }
    },
    init:function(res){
        const width = res[0].width;
        const height = res[0].height;
        const canvas = res[0].node;
        if(!canvas){
            this.setData({
                canIUse:false
            });
            return;
        }
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
    drawBall2D:function(ctx){
        const p = this.position2D;
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
        function ball(x,y){
            ctx.beginPath();
            ctx.arc(x,y,5,0,Math.PI * 2);
            ctx.fillStyle = '#1aad19';
            ctx.strokeStyle = 'rgba(1,1,1,0)';
            ctx.fill();
            ctx.stroke();
        };
        ball(p.x,150);
        ball(150,p.y);
        ball(300 - p.x,150);
        ball(150,300 - p.y);
        ball(p.x,p.y);
        ball(300 - p.x,300 - p.y);
        ball(p.x,300 - p.y);
        ball(300 - p.x,p.y);
    },
    drawCar:function(ctx){
        if(!this._img)return
        if(this.x > 350){
            this.x = -100;
        }
        ctx.drawImage(this._img,this.x++,150 - 25,100,50);
        ctx.restore();
    },
    onUnload:function(){
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
