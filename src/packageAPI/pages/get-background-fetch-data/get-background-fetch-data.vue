<script>
const PAGE_JSON = {
	"navigationBarTitleText":"周期性更新数据",
	"usingComponents":{}
}
</script>
<script>
import {OnekitApp,OnekitPage,OnekitComponent} from "../../../onekit/onekit.js";
import wx from "../../../onekit/wx.js";
export default OnekitPage({
    onShareAppMessage:function(){
        return {
            title:'周期性缓存',
            path:'packageAPI/pages/get-background-fetch-data/get-background-fetch-data'
        };
    },
    onShow:function(){
        this.getBackgroundFetchData();
    },
    data:{
        openid:'',
        appid:'',
        canIUse:true
    },
    getBackgroundFetchData:function(){
        console.log('读取周期性更新数据');
        const that = this;
        if(wx.getBackgroundFetchData){
            wx.getBackgroundFetchData({
                fetchType:'periodic',
                success:function(res){
                    console.log(res);
                    const {fetchedData} = res;
                    const result = JSON.parse(fetchedData);
                    that.setData({
                        appid:result.appid,
                        openid:result.openid
                    });
                    console.log('读取周期性更新数据成功');
                },
                fail:function(){
                    console.log('读取周期性更新数据失败');
                    wx.showToast({
                        title:'无缓存数据',
                        icon:'none'
                    });
                },
                complete:function(){
                    console.log('结束读取');
                }
            });
        } else {
            this.setData({
                canIUse:false
            });
            wx.showModal({
                title:'微信版本过低，暂不支持本功能'
            });
        }
    }
});
</script>
<template>
<import src="../../../common/head.vue"/>
<import src="../../../common/foot.vue"/>

<onekit-view class="container">
  

  <onekit-view class="page-body">
    <onekit-view class="page-section">
      <onekit-block v-if="canIUse">
        <onekit-view class="page-body-info">
          <onekit-view class="page-body-title">周期性缓存数据</onekit-view>
          <onekit-block v-if="appid">
            <onekit-block>
              <onekit-text class="page-body-text">OpenID</onekit-text>
              <onekit-text class="context-value">{{openid}}</onekit-text>
            </onekit-block>
            <onekit-block>
              <onekit-text class="page-body-text">AppID</onekit-text>
              <onekit-text class="context-value">{{appid}}</onekit-text>
            </onekit-block>
          </onekit-block>
          <onekit-block>
            <onekit-text class="page-body-text">微信客户端每隔 12 个小时才会发起一次请求</onekit-text>
            <onekit-text class="page-body-text">为了方便调试周期性数据，可以在 工具 -> 拉取周期性缓存数据 开启</onekit-text>
          </onekit-block>
        </onekit-view>
      </onekit-block>
    </onekit-view>
  </onekit-view>
  
</onekit-view></template>

<style scoped src="@/app.css"/>
<style>
.page-body-info {
  padding-bottom: 0;
  height: 300px;
}
.page-body-text {
  padding: 0 15px;
  text-align: center;
}
.page-body-title {
  margin-bottom: 20px;
}
.context-value {
  font-size: 19px;
}
</style>
