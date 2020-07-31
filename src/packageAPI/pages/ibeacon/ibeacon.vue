<script>
const PAGE_JSON = {
	"navigationBarTitleText":"iBeacon",
	"usingComponents":{}
}
</script>
<script>
import {OnekitApp,OnekitPage,OnekitComponent} from "../../../onekit/onekit.js";
import wx from "../../../onekit/wx.js";
export default OnekitPage({
    onShareAppMessage:function(){
        return {
            title:'iBeacon',
            path:'packageAPI/pages/ibeacon/ibeacon'
        };
    },
    data:{
        uuid:'',
        beacons:[
        ]
    },
    onUnload:function(){
        this.stopSearch();
    },
    enterUuid:function(e){
        this.setData({
            uuid:e.detail.value
        });
    },
    startSearch:function(){
        if(this._searching)return
        this._searching = true;
        wx.startBeaconDiscovery({
            uuids:[
                this.data.uuid
            ],
            success:(res)=>{
                console.log(res);
                wx.onBeaconUpdate(({beacons})=>{this.setData({
                    beacons:beacons
                })});
            },
            fail:(err)=>{console.error(err)}
        });
    },
    stopSearch:function(){
        this._searching = false;
        wx.stopBeaconDiscovery();
    }
});
</script>
<template>
<import src="../../../common/head.vue"/>
<import src="../../../common/foot.vue"/>

<onekit-view class="container">
  

  <onekit-view class="page-body">
    <onekit-view class="page-section">
      <onekit-view class="weui-cells__title">输入iBeacon设备广播的UUID</onekit-view>
      <onekit-view class="weui-cells weui-cells_after-title">
        <onekit-view class="weui-cell weui-cell_input">
          <onekit-input class="weui-input" @input="enterUuid"></onekit-input>
        </onekit-view>
      </onekit-view>
    </onekit-view>
    <onekit-view class="btn-area">
      <onekit-button type="primary" @tap="startSearch">搜索iBeacon</onekit-button>
      <onekit-button @tap="stopSearch">停止搜索</onekit-button>
    </onekit-view>
    <onekit-view class="page-body-info">
      <onekit-view class="devices_summary">已发现 {{beacons.length}} 个外围设备：</onekit-view>
      <onekit-scroll-view class="device_list" scroll-y scroll-with-animation>
        <onekit-view v-for="(item,index) in beacons" class="device_item" hover-class="device_item_hover">
          <onekit-view style="font-size: 16px; color: #333;">主ID: {{item.major}} <onekit-text style="font-size: 12px;">次ID: {{item.minor}}</onekit-text></onekit-view>
          <onekit-view style="font-size: 10px">信号强度: {{item.rssi}}dBm</onekit-view>
          <onekit-view style="font-size: 10px">UUID: {{item.uuid}}</onekit-view>
          <onekit-view style="font-size: 10px">Proximity: {{item.proximity}} Accuracy: {{item.accuracy}}</onekit-view>
        </onekit-view>
      </onekit-scroll-view>
    </onekit-view>
  </onekit-view>

  
</onekit-view></template>

<style scoped src="@/app.css"/>
<style>
@import "../../../common/lib/weui.css";

.page-body-info {
  margin-top: 25px;
  padding: 15px 30px;
  width: auto;
}

.devices_summary {
  padding: 5px;
  font-size: 15px;
}
.device_list {
  height: 150px;
  border-radius: 3px;
  flex: 1;
}
.device_item {
  border-bottom: 1px solid var(--weui-FG-3);
  padding: 5px;
  color: var(--weui-FG-HALF);
}
.device_item_hover {
  background-color: rgba(0, 0, 0, .1);
}
</style>
