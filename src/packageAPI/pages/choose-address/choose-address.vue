<script>
const PAGE_JSON = {
	"navigationBarTitleText":"收货地址",
	"usingComponents":{}
}
</script>
<script>
import {OnekitApp,OnekitPage,OnekitComponent} from "../../../onekit/onekit.js";
import wx from "../../../onekit/wx.js";
export default OnekitPage({
    onShareAppMessage:function(){
        return {
            title:'收货地址',
            path:'packageAPI/pages/choose-address/choose-address'
        };
    },
    data:{
        addressInfo:null
    },
    chooseAddress:function(){
        wx.chooseAddress({
            success:(res)=>{this.setData({
                addressInfo:res
            })},
            fail:function(err){
                console.log(err);
            }
        });
    }
});
</script>
<template>
<import src="../../../common/head.vue"/>
<import src="../../../common/foot.vue"/>

<onekit-view class="container">
  

  <onekit-form>
    <onekit-view class="page-section">
      <onekit-view class="weui-cells weui-cells_after-title">
        <onekit-view class="weui-cell weui-cell_input">
          <onekit-view class="weui-cell__hd">
            <onekit-view class="weui-label">收货人姓名</onekit-view>
          </onekit-view>
          <onekit-view class="weui-cell__bd">
            {{ addressInfo.userName }}
          </onekit-view>
        </onekit-view>

        <onekit-view class="weui-cell weui-cell_input">
          <onekit-view class="weui-cell__hd">
            <onekit-view class="weui-label">邮编</onekit-view>
          </onekit-view>
          <onekit-view class="weui-cell__bd">
            {{ addressInfo.postalCode }}
          </onekit-view>
        </onekit-view>

        <onekit-view class="weui-cell weui-cell_input region">
          <onekit-view class="weui-cell__hd">
            <onekit-view class="weui-label">地区</onekit-view>
          </onekit-view>
          <onekit-view class="weui-cell__bd">
            {{ addressInfo.provinceName }}
            {{ addressInfo.cityName }}
            {{ addressInfo.countyName }}
          </onekit-view>
        </onekit-view>


        <onekit-view class="weui-cell weui-cell_input detail">
          <onekit-view class="weui-cell__hd">
            <onekit-view class="weui-label">收货地址</onekit-view>
          </onekit-view>
          <onekit-view class="weui-cell__bd">
            {{ addressInfo.detailInfo }}
          </onekit-view>
        </onekit-view>

          <onekit-view class="weui-cell weui-cell_input">
          <onekit-view class="weui-cell__hd">
            <onekit-view class="weui-label">国家码</onekit-view>
          </onekit-view>
          <onekit-view class="weui-cell__bd">
            {{ addressInfo.nationalCode }}
          </onekit-view>
        </onekit-view>

        <onekit-view class="weui-cell weui-cell_input">
          <onekit-view class="weui-cell__hd">
            <onekit-view class="weui-label">手机号码</onekit-view>
          </onekit-view>
          <onekit-view class="weui-cell__bd">
            {{ addressInfo.telNumber }}
          </onekit-view>
        </onekit-view>

      </onekit-view>
    </onekit-view>
  </onekit-form>
  
  <onekit-view class="page-body">
    <onekit-view class="btn-area">
    <onekit-button type="primary" @tap="chooseAddress">获取收货地址</onekit-button>
    </onekit-view>
  </onekit-view>

  
</onekit-view></template>
<style scoped src="@/onekit/onekit.css"/>
<style scoped src="@/app.css"/>
<style>
@import "../../../common/lib/weui.css";

form {
  margin-top: 15px;
}

.weui-cell__bd {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 10px 0;
  min-height: 30px;
}
</style>
