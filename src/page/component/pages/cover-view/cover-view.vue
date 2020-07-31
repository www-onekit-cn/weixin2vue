<script>
const PAGE_JSON = {
	"navigationBarTitleText":"cover-view",
	"usingComponents":{}
}
</script>
<script>
import {OnekitApp,OnekitPage,OnekitComponent} from "../../../../onekit/onekit.js";
import wx from "../../../../onekit/wx.js";
export default OnekitPage({
    onShareAppMessage:function(){
        return {
            title:'cover-view',
            path:'page/component/pages/cover-view/cover-view'
        };
    },
    data:{
        latitude:23.099994,
        longitude:113.32452
    }
});
</script>
<template>
<import src="../../../common/head.vue"/>
<import src="../../../common/foot.vue"/>

<onekit-view class="container">
  

  <onekit-view class="page-body">
    <onekit-view class="page-section page-section-gap">
      <onekit-map style="width: 100%; height: 300px;" :latitude="latitude" :longitude="longitude">
        <onekit-cover-view class="cover-view">
          <onekit-cover-view class="container">
            <onekit-cover-view class="flex-wrp" style="flex-direction:row;">
              <onekit-cover-view class="flex-item demo-text-1"></onekit-cover-view>
              <onekit-cover-view class="flex-item demo-text-2"></onekit-cover-view>
              <onekit-cover-view class="flex-item demo-text-3"></onekit-cover-view>
            </onekit-cover-view>
          </onekit-cover-view>
        </onekit-cover-view>
      </onekit-map>
    </onekit-view>
  </onekit-view>

  
</onekit-view></template>
<style scoped src="@/onekit/onekit.css"/>
<style scoped src="@/app.css"/>
<style>
.cover-view {
  position: absolute;
  top: calc(50% - 75px);
  left: calc(50% - 150px);
  /* opacity: .7; */
}

.flex-wrp{
  display:flex;
}

.flex-item{
  width: 100px;
  height: 150px;
  font-size: 13px;
}

.demo-text-1 {
  background: rgba(26, 173, 25, 0.7);
}

.demo-text-2 {
  background: rgba(39, 130, 215, 0.7);
}

.demo-text-3 {
  background: rgba(255, 255, 255, 0.7);
}
</style>
