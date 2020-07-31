<script>
const PAGE_JSON = {
	"navigationBarTitleText":"服务端时间",
	"usingComponents":{}
}
</script>
<script>
import {OnekitApp,OnekitPage,OnekitComponent} from "../../../onekit/onekit.js";
import wx from "../../../onekit/wx.js";
const util = require('../../../util/util.js');
const app = getApp();
const collection = 'serverDate';
export default OnekitPage({
    onShareAppMessage:function(){
        return {
            title:'服务端时间',
            path:'page/cloud/pages/server-date/server-date'
        };
    },
    data:{
        openid:'',
        loading:false,
        clientDate:null,
        serverDate:null,
        clientDateFormatted:'',
        serverDateFormatted:'',
        delta:0
    },
    onLoad:function(){
        if(app.globalData.openid){
            this.setData({
                openid:app.globalData.openid
            });
        } else {
            wx.showLoading({
                title:'正在初始化...'
            });
            app.getUserOpenIdViaCloud().then((openid)=>{
    this.setData({
        openid:openid
    });
    wx.hideLoading();
    return openid;
}).catch((err)=>{
                console.error(err);
                wx.hideLoading();
                wx.showToast({
                    icon:'none',
                    title:'初始化失败，请检查网络'
                });
            });
        }
    },
    showError:function(){
        wx.showToast({
            icon:'none',
            title:'插入失败'
        });
    },
    completeTask:function(){
        this.setData({
            loading:false
        });
    },
    insertOrUpdateData:function(existedData,data){
        const db = wx.cloud.database();
        if(existedData._id){
            db.collection(collection).doc(existedData._id).update({
    data:data
}).then((res)=>{
    this.setCompletedData(existedData._id);
    return res;
}).catch((err)=>{
                this.showError();
                console.error('[数据库] [更新记录] 失败：',err);
                this.completeTask();
            });
        } else {
            db.collection(collection).add({
    data:data
}).then((res)=>{
    this.setCompletedData(res._id);
    return res;
}).catch((err)=>{
                this.showError();
                console.error('[数据库] [新增记录] 失败：',err);
                this.completeTask();
            });
        }
    },
    setCompletedData:function(id){
        const db = wx.cloud.database();
        db.collection(collection).doc(id).get().then((res)=>{
    this.setData({
        delta:Math.abs(res.data.time - this.data.clientDate),
        serverDate:res.data.time,
        clientDateFormatted:util.formatDateTime(this.data.clientDate,true),
        serverDateFormatted:util.formatDateTime(res.data.time,true)
    });
    wx.showToast({
        title:'插入成功'
    });
    this.completeTask();
    return res;
}).catch((err)=>{
            this.showError();
            console.error('[数据库] [查询记录] 失败：',err);
            this.completeTask();
        });
    },
    insertData:function(){
        const db = wx.cloud.database();
        const data = {
            time:db.serverDate()
        };
        this.setData({
            loading:true
        });
        db.collection(collection).where({
    _openid:this.data.openid
}).get().then((res)=>{
    this.setData({
        clientDate:new Date()
    });
    console.log('[数据库] [查询记录] 成功: ',res);
    const resFirstData = res.data[0] || {};
    this.insertOrUpdateData(resFirstData,data);
    return res;
}).catch((err)=>{
            this.showError();
            console.error('[数据库] [查询记录] 失败：',err);
            this.completeTask();
        });
    }
});
</script>
<template>
<import src="../../../common/head.vue"/>
<import src="../../../common/foot.vue"/>

<onekit-view class="container">
  

  <onekit-view class="page-body" v-if="openid">
    <onekit-view class="page-section">
      <onekit-view class="page-body-info">
        <onekit-view class="page-body-title">服务端时间</onekit-view>
        <onekit-block v-if="!serverDate">
          <onekit-text class="page-body-text">很多时候我们希望记录数据的创建时间</onekit-text>
          <onekit-text class="page-body-text">在小程序端使用 Date 对象创建的是客户端时间（可被任意修改），而非服务端时间</onekit-text>
          <onekit-text class="page-body-text">这时可以使用云开发提供的 serverDate 对象，在请求被处理时会自动转换成服务端时间</onekit-text>
        </onekit-block>
        <onekit-block v-else>
          <onekit-block>
            <onekit-text class="page-body-text">客户端时间</onekit-text>
            <onekit-text class="context-value">{{clientDateFormatted}}</onekit-text>
          </onekit-block>
          <onekit-block>
            <onekit-text class="page-body-text">服务端时间</onekit-text>
            <onekit-text class="context-value">{{serverDateFormatted}}</onekit-text>
          </onekit-block>
          <onekit-block>
            <onekit-text class="page-body-text">时间差距</onekit-text>
            <onekit-text class="context-value">{{delta}} 毫秒</onekit-text>
          </onekit-block>
        </onekit-block>
      </onekit-view>
      <onekit-view class="btn-area">
        <onekit-button type="primary" @tap="insertData" :loading="loading">插入数据</onekit-button>
      </onekit-view>
    </onekit-view>
  </onekit-view>

  
</onekit-view></template>
<style scoped src="@/onekit/onekit.css"/>
<style scoped src="@/app.css"/>
<style>
.page-body-info {
  padding-bottom: 0;
  height: 280px;
}
.page-body-text {
  padding: 0 calc(var(--screen-width)*30/750);
  text-align: center;
}
.context-value {
  font-size: calc(var(--screen-width)*38/750);
}
</style>
