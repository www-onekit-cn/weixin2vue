<script>
const PAGE_JSON = {
	"navigationBarTitleText":"创建画布",
	"usingComponents":{}
}
</script>
<script>
import {OnekitApp,OnekitPage,OnekitComponent} from "../../../onekit/onekit.js";
import wx from "../../../onekit/wx.js";
const example = require('./example.js');
export default OnekitPage({
    onShareAppMessage:function(){
        return {
            title:'创建画布',
            path:'packageAPI/pages/canvas/canvas'
        };
    },
    onLoad:function(){
        this.context = wx.createContext();
        const methods = Object.keys(example);
        this.setData({
            methods:methods
        });
        const that = this;
        methods.forEach(function(method){
            that[method] = function(){
                example[method](that.context);
                const actions = that.context.getActions();
                wx.drawCanvas({
                    canvasId:'canvas',
                    actions:actions
                });
            };
        });
    },
    toTempFilePath:function(){
        wx.canvasToTempFilePath({
            canvasId:'canvas',
            success:function(res){
                console.log(res);
            },
            fail:function(res){
                console.log(res);
            }
        });
    }
});
</script>
<template>
<import src="../../../common/head.vue"/>
<import src="../../../common/foot.vue"/>

<onekit-view class="container">
  

  <onekit-view class="page-body">
    <onekit-view class="page-section">
      <onekit-canvas class="canvas-element" canvas-id="canvas"></onekit-canvas>
      <onekit-scroll-view class="canvas-buttons" scroll-y="true">
        <onekit-block v-for="(method) in methods">
          <onekit-button class="canvas-button" @tap="method">{{method}}</onekit-button>
        </onekit-block>
        <onekit-button class="canvas-button" @tap="toTempFilePath" type="primary">toTempFilePath</onekit-button>
      </onekit-scroll-view>
    </onekit-view>
  </onekit-view>

  
</onekit-view></template>

<style scoped src="@/app.css"/>
<style>
.canvas-element-wrapper {
  display: block;
  margin-bottom: 50px;
}
.canvas-element {
  width: 100%;
  height: 250px;
  background-color: #ffffff;
}
.canvas-buttons {
  padding: 15px 25px 5px;
  width: 100%;
  height: 330px;
  box-sizing: border-box;
}
.canvas-button {
  float: left;
  line-height: 2;
  width: 150px;
  margin: 8px 11px;
}
</style>
