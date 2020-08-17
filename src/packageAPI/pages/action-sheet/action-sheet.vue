<script>
const PAGE_JSON = {
	"navigationBarTitleText":"操作菜单",
	"usingComponents":{}
}
</script>
<template>
<page>
<import src="../../../common/head.vue"/>
<import src="../../../common/foot.vue"/>

<onekit-view class="container">
  

  <onekit-view class="page-body">
    <onekit-view class="btn-area">
      <onekit-button type="default" @tap="actionSheetTap">弹出action sheet</onekit-button>
    </onekit-view>
  </onekit-view>

  
</onekit-view>
</page></template>
<script>
import "../../../onekit/OnekitPage.js"
import wx from '../../../onekit/wx.js';
export default OnekitPage({
    onShareAppMessage:function(){
        return {
            title:'操作菜单',
            path:'packageAPI/pages/action-sheet/action-sheet'
        };
    },
    actionSheetTap:function(){
        wx.showActionSheet({
            itemList:[
                'item1',
                'item2',
                'item3',
                'item4'
            ],
            success:function(e){
                console.log(e.tapIndex);
            }
        });
    }
});
</script>
<style scoped src="@/app.css"/>
<style>
/*
.cancel {
  color: white;
  background: #303F9F;
}
.item {
  color: black;
  background: #C5CAE9;
}*/
</style>
