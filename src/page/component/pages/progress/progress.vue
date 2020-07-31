<script>
const PAGE_JSON = {
	"navigationBarTitleText":"progress",
	"usingComponents":{}
}
</script>
<template>
<import src="../../../common/head.vue"/>
<import src="../../../common/foot.vue"/>

<onekit-view class="container">
  

  <onekit-view class="page-body">
    <onekit-view class="page-section page-section-gap">

      <onekit-view class="progress-box">
        <onekit-progress percent="20" show-info stroke-width="3"></onekit-progress>
      </onekit-view>

      <onekit-view class="progress-box">
        <onekit-progress percent="40" active stroke-width="3"></onekit-progress>
        <onekit-icon class="progress-cancel" type="cancel"></onekit-icon>
      </onekit-view>

      <onekit-view class="progress-box">
        <onekit-progress percent="60" active stroke-width="3"></onekit-progress>
      </onekit-view>

      <onekit-view class="progress-box">
        <onekit-progress percent="80" color="#10AEFF" active stroke-width="3"></onekit-progress>
      </onekit-view>
    </onekit-view>
  </onekit-view>

  
</onekit-view></template>
<script>
import {OnekitApp,OnekitPage,OnekitComponent} from '../../../../onekit/onekit.js';
import wx from '../../../../onekit/wx.js';
export default OnekitPage({
    onShareAppMessage:function(){
        return {
            title:'progress',
            path:'page/component/pages/progress/progress'
        };
    }
});
</script>
<style scoped src="@/app.css"/>
<style>
progress{
  width: 100%;
}
.progress-box{
  display: flex;
  height: 25px;
  margin-bottom: 30px;
}
.progress-cancel{
  margin-left: 20px;
}
</style>
