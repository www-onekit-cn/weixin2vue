<script>
const PAGE_JSON = {
	"navigationBarTitleText":"数据预拉取",
	"usingComponents":{}
}
</script>
<template>
<import src="../../../common/head.vue"/>
<import src="../../../common/foot.vue"/>

<onekit-view class="container">
  

  <onekit-view class="page-body">
    <onekit-view class="page-section">
      <onekit-view v-if="canIUse" class="page-body-info">
        <onekit-view class="page-body-title">数据预拉取</onekit-view>
        <onekit-block v-if="appid">
          <onekit-block>
            <onekit-text class="page-body-text">OpenID</onekit-text>
            <onekit-text class="context-value">{{openid}}</onekit-text>
          </onekit-block>
          <onekit-block>
            <onekit-text class="page-body-text">AppID</onekit-text>
            <onekit-text class="context-value">{{appid}}</onekit-text>
          </onekit-block>
          <onekit-block>
            <onekit-text class="page-body-text">数据缓存的时间</onekit-text>
            <onekit-text class="context-value">{{getDataTime}}</onekit-text>
          </onekit-block>
        </onekit-block>
        <onekit-block>
          <onekit-text class="page-body-text">用户启动小程序时，调用 wx.getBackgroundFetchData() 获取已缓存到本地的数据。
          </onekit-text>
        </onekit-block>
        
      </onekit-view>
    </onekit-view>
  </onekit-view>
  
</onekit-view></template>
<script>
import {OnekitApp,OnekitPage,OnekitComponent} from '../../../onekit/onekit.js';
import wx from '../../../onekit/wx.js';
const app = getApp();
Date.prototype.Format = function(fmt){
    var o = {
        "M+":this.getMonth() + 1,
        "d+":this.getDate(),
        "h+":this.getHours(),
        "m+":this.getMinutes(),
        "s+":this.getSeconds(),
        "q+":Math.floor((this.getMonth() + 3) / 3),
        "S":this.getMilliseconds()
    };
    if(new RegExp("(y+)","").test(fmt))fmt = fmt.replace(RegExp.$1,(this.getFullYear() + "").substr(4 - RegExp.$1.length))
    for(var k in o){
            if(new RegExp(("(" + k) + ")").test(fmt)){
                fmt = fmt.replace(RegExp.$1,RegExp.$1.length == 1?o[k]:("00" + o[k]).substr(("" + o[k]).length));
            }
        };
    return fmt;
};
export default OnekitPage({
    onShow:function(){
        this.getBackgroundFetchData();
    },
    onShareAppMessage:function(){
        return {
            title:'预拉取',
            path:'packageAPI/pages/get-background-prefetch-data/get-background-prefetch-data'
        };
    },
    data:{
        openid:'',
        appid:'',
        getDataTime:'',
        canIUse:true
    },
    getBackgroundFetchData:function(){
        if(wx.getBackgroundFetchData){
            console.log('读取预拉取数据');
            const res = app.globalData.backgroundFetchData;
            const {fetchedData} = res;
            const result = JSON.parse(fetchedData);
            const systemInfo = wx.getSystemInfoSync();
            const timeStamp = systemInfo.brand === 'iPhone'?res.timeStamp * 1000:res.timeStamp;
            const time = new Date(timeStamp).Format("yyyy-MM-dd hh:mm:ss");
            this.setData({
                appid:result.appid,
                openid:result.openid,
                getDataTime:time
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
<style scoped src="@/app.css"/>
<style>
.page-body-info {
  padding-bottom: 0;
  height: 340px;
}
.page-body-title {
  margin-bottom: 20px;
}
.page-body-text {
  padding: 0 15px;
  text-align: center;
}
.context-value {
  font-size: 19px;
}
</style>
