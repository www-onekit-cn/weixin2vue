<script>
const PAGE_JSON = {
	"navigationBarTitleText":"动态加载字体",
	"usingComponents":{}
}
</script>
<script>
import {OnekitApp,OnekitPage,OnekitComponent} from "../../../onekit/onekit.js";
import wx from "../../../onekit/wx.js";
export default OnekitPage({
    onShareAppMessage:function(){
        return {
            title:'动态加载字体',
            path:'packageAPI/pages/load-font-face/load-font-face'
        };
    },
    data:{
        fontFamily:'Bitstream Vera Serif Bold',
        loaded:false
    },
    onLoad:function(){
        this.setData({
            loaded:false
        });
    },
    loadFontFace:function(){
        const self = this;
        wx.loadFontFace({
            family:this.data.fontFamily,
            source:'url("https://sungd.github.io/Pacifico.ttf")',
            success:function(res){
                console.log(res.status);
                self.setData({
                    loaded:true
                });
            },
            fail:function(res){
                console.log(res.status);
            },
            complete:function(res){
                console.log(res.status);
            }
        });
    },
    clear:function(){
        this.setData({
            loaded:false
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
      <onekit-view :class="'page-body-info display-area '+ loaded ? 'font-loaded' : '' ">
        <onekit-text v-if="!loaded">Load {{ fontFamily }}</onekit-text>
        <onekit-text v-else>{{ fontFamily }} is loaded</onekit-text>
      </onekit-view>
      <onekit-view class="btn-area">
        <onekit-button type="primary" @tap="loadFontFace">加载字体</onekit-button>
        <onekit-button type="default" @tap="clear">清除</onekit-button>
      </onekit-view>
    </onekit-view>
  </onekit-view>

  
</onekit-view></template>
<style scoped src="@/onekit/onekit.css"/>
<style scoped src="@/app.css"/>
<style>
.page-body-info {
  align-items: center;
  padding: 100px 0;
}

.font-loaded {
  font-family: "Bitstream Vera Serif Bold";
}

.display-area {
  font-size: 20px;
}
</style>
