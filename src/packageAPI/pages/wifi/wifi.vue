<script>
const PAGE_JSON = {
	"navigationBarTitleText":"Wi-Fi",
	"usingComponents":{}
}
</script>
<script>
import {OnekitApp,OnekitPage,OnekitComponent} from "../../../onekit/onekit.js";
import wx from "../../../onekit/wx.js";
export default OnekitPage({
    onShareAppMessage:function(){
        return {
            title:'Wi-Fi',
            path:'packageAPI/pages/wifi/wifi'
        };
    },
    data:{
        wifiList:[
        ]
    },
    onUnload:function(){
        this.stopSearch();
    },
    startSearch:function(){
        const getWifiList = ()=>{wx.getWifiList({
            success:()=>{wx.onGetWifiList((res)=>{
                const wifiList = res.wifiList.sort((a,b)=>b.signalStrength - a.signalStrength).map((wifi)=>{
                    const strength = Math.ceil(wifi.signalStrength * 4);
                    return Object.assign(wifi,{
                        strength:strength
                    });
                });
                this.setData({
                    wifiList:wifiList
                });
            })},
            fail:function(err){
                console.error(err);
            }
        })};
        const startWifi = ()=>{wx.startWifi({
            success:getWifiList,
            fail:function(err){
                console.error(err);
            }
        })};
        wx.getSystemInfo({
            success:function(res){
                const isIOS = res.platform === 'ios';
                if(isIOS){
                    wx.showModal({
                        title:'提示',
                        content:'由于系统限制，iOS用户请手动进入系统WiFi页面，然后返回小程序。',
                        showCancel:false,
                        success:function(){
                            startWifi();
                        }
                    });
                    return;
                }
                startWifi();
            }
        });
    },
    stopSearch:function(){
        wx.stopWifi({
            success:function(res){
                console.log(res);
            },
            fail:function(err){
                console.error(err);
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
    <onekit-view class="page-body-info">
      <onekit-scroll-view class="device-list" scroll-y>
        <onekit-view v-for="(item,index) in wifiList" class="item">
          <onekit-view class="list">
            <onekit-text>{{ item.SSID }}</onekit-text>
            <onekit-span class="wifi-icon">
              <onekit-span class="wifi-1"></onekit-span>
              <onekit-span :class="'wifi-2 '+item.strength < 2 ? 'off' : ''"></onekit-span>
              <onekit-span :class="'wifi-3 '+item.strength < 3 ? 'off' : ''"></onekit-span>
              <onekit-span :class="'wifi-4 '+item.strength < 4 ? 'off' : ''"></onekit-span>
              <onekit-span class="lock" v-if="item.secure"></onekit-span>
            </onekit-span>
          </onekit-view>
        </onekit-view>
      </onekit-scroll-view>
    </onekit-view>
    <onekit-view class="btn-area">
      <onekit-button type="primary" @tap="startSearch">搜索Wi-Fi</onekit-button>
      <onekit-button @tap="stopSearch">停止搜索</onekit-button>
    </onekit-view>
  </onekit-view>

  
</onekit-view></template>
<style scoped src="@/onekit/onekit.css"/>
<style scoped src="@/app.css"/>
<style>
.page-body-info {
  padding: 15px 30px;
  width: auto;
}

.device-list {
  height: 150px;
  text-align: center;
}

.item {
  width: 100%;
  margin-bottom: 10px;
}

.list {
  width: 100%;
  text-align: left;
  display:flex;
  flex-direction:row;
  align-items:center;
  justify-content:space-between;
  font-size: 15px;
}

.list text {
  display: inline-block;
  max-width: 80%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.strength-ready { color: #26a69a; }
.strength-no { color: #37474f; }
.wifi-icon{
  width: 20px;
  height:20px;
  display: inline-block;
  position: relative;
  overflow: hidden;
  margin: 0 10px;
  float: right;
}
.wifi-icon span{
  display: block;
  position: absolute;
  border-radius: 50%;
}
.wifi-icon .wifi-1{
  width: 4px;
  height: 4px;
  left: 8px;
  bottom: 3px;
  background: currentcolor;
}
.wifi-icon .wifi-2,.wifi-icon .wifi-3,.wifi-icon .wifi-4{
  border: 2px solid;
  border-color: currentcolor transparent transparent;
 }
.wifi-icon .wifi-2{
  width: 12px;
  height: 12px;
  left: 2px;
  bottom: -4px;
}
.wifi-icon .wifi-3{
  width: 20px;
  height: 20px;
  left: -2px;
  bottom: -8px;
  }
.wifi-icon .wifi-4{
  width: 28px;
  height: 28px;
  left: -6px;
  bottom: -12px;
}
.wifi-icon span:after{
  content: "";
  display: block;
  position: absolute;
}
.wifi-icon .lock{
  width: 6px;
  height: 5px;
  background: currentcolor;
  display: block;
  right: 1px;
  bottom: 2px;
  border-radius: 0;
}
.wifi-icon .lock:after{
  width: 4px;
  height: 3px;
  border: 1px solid;
  border-radius: 100px 100px 0 0;
  border-bottom: none;
  left: 0px;
  bottom: 100%;
}
.off {
  border-color: #b0bec5 transparent transparent !important;
}
</style>
