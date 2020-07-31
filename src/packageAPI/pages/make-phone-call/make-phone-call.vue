<script>
const PAGE_JSON = {
	"navigationBarTitleText":"打电话",
	"usingComponents":{}
}
</script>
<script>
import {OnekitApp,OnekitPage,OnekitComponent} from "../../../onekit/onekit.js";
import wx from "../../../onekit/wx.js";
export default OnekitPage({
    onShareAppMessage:function(){
        return {
            title:'打电话',
            path:'packageAPI/pages/make-phone-call/make-phone-call'
        };
    },
    data:{
        disabled:true
    },
    bindInput:function(e){
        this.inputValue = e.detail.value;
        if(this.inputValue.length > 0){
            this.setData({
                disabled:false
            });
        } else {
            this.setData({
                disabled:true
            });
        }
    },
    makePhoneCall:function(){
        wx.makePhoneCall({
            phoneNumber:this.inputValue,
            success:function(){
                console.log('成功拨打电话');
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
      <onekit-view class="desc">请在下方输入电话号码</onekit-view>
      <onekit-input class="input" type="number" name="input" @input="bindInput"></onekit-input>
      <onekit-view class="btn-area">
        <onekit-button type="primary" @tap="makePhoneCall" :disabled="disabled">拨打</onekit-button>
      </onekit-view>
    </onekit-view>
  </onekit-view>

  
</onekit-view></template>

<style scoped src="@/app.css"/>
<style>
.page-section{
  width: auto;
  margin: 15px;
  padding: 42px 30px 30px;
  background-color: var(--weui-BG-2);
  font-size: 14px;
}
.desc{
  margin-bottom: 10px;
}
.input{
  height: 60px;
  line-height: 60px;
  font-size: 39px;
  border-bottom: 1px solid var(--weui-FG-3);
}
.btn-area{
  padding: 0;
}
</style>
