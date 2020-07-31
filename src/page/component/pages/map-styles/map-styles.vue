<script>
const PAGE_JSON = {
	"navigationBarTitleText":"map底图样式",
	"usingComponents":{}
}
</script>
<template>
<import src="../../../common/head.vue"/>
<import src="../../../common/foot.vue"/>

<onekit-view class="container">
  

  <onekit-view class="page-body">
    <onekit-view class="page-section page-section-gap">
      <onekit-view class="page-section-title">经典</onekit-view>
      <onekit-view class="page-section-ctn">
        <onekit-image class="image" src="../../resources/pic/custom_map_template_1.png"></onekit-image>
      </onekit-view>
    </onekit-view>
    <onekit-view class="page-section page-section-gap">
      <onekit-view class="page-section-title">墨渊</onekit-view>
      <onekit-view class="page-section-ctn">
        <onekit-image class="image" src="../../resources/pic/custom_map_template_2.png"></onekit-image>
      </onekit-view>
    </onekit-view>
    <onekit-view class="page-section page-section-gap">
      <onekit-view class="page-section-title">白浅</onekit-view>
      <onekit-view class="page-section-ctn">
        <onekit-image class="image" src="../../resources/pic/custom_map_template_3.png"></onekit-image>
      </onekit-view>
    </onekit-view>
    <onekit-view class="page-section page-section-gap">
      <onekit-view class="page-section-title">玉露</onekit-view>
      <onekit-view class="page-section-ctn">
        <onekit-image class="image" src="../../resources/pic/custom_map_template_4.png"></onekit-image>
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
            title:'map底图样式',
            path:'page/component/pages/map-styles/map-styles'
        };
    }
});
</script>
<style scoped src="@/app.css"/>
<style>
.page-section-ctn {
  text-align: center;
}

.image {
  margin-top: 15px;
  width: 245px;
  height: 284px;
}
</style>
