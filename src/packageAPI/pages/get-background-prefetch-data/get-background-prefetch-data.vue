<template>
  <onekit-page id='app'>
    <!--    <import src='../../../common/head.vue' />
    <import src='../../../common/foot.vue' />-->

    <onekit-view onekit-class="container">
      <onekit-template is="onekit-template-head"
                       DATA='{"title":"getBackgroundFetchData"}'></onekit-template>

      <onekit-view onekit-class="page-body">
        <onekit-view onekit-class="page-section">
          <onekit-view v-if="canIUse"
                       onekit-class="page-body-info">
            <onekit-view onekit-class="page-body-title">数据预拉取</onekit-view>
            <template v-if="appid">
              <template>
                <onekit-text onekit-class="page-body-text">OpenID</onekit-text>
                <onekit-text onekit-class="context-value">{{openid}}</onekit-text>
              </template>
              <template>
                <onekit-text onekit-class="page-body-text">AppID</onekit-text>
                <onekit-text onekit-class="context-value">{{appid}}</onekit-text>
              </template>
              <template>
                <onekit-text onekit-class="page-body-text">数据缓存的时间</onekit-text>
                <onekit-text onekit-class="context-value">{{getDataTime}}</onekit-text>
              </template>
            </template>
            <template>
              <onekit-text onekit-class="page-body-text">用户启动小程序时，调用 wx.getBackgroundFetchData() 获取已缓存到本地的数据。
              </onekit-text>
            </template>

          </onekit-view>
        </onekit-view>
      </onekit-view>
      <onekit-template is="onekit-template-foot"></onekit-template>
    </onekit-view>
  </onekit-page>
</template>
<script>
import Vue from 'vue'
import head from '../../../common/head.head'
Vue.component('onekit-template-head', head)
import foot from '../../../common/foot.foot'
Vue.component('onekit-template-foot', foot)
const ONEKIT_JSON = {
  "navigationBarTitleText": "数据预拉取",
  "usingComponents": {}
}
import OnekitPage from '../../../../weixin2vue/OnekitPage';
import wx from '../../../../weixin2vue/wx';
import { getApp } from '../../../../weixin2vue/macro';
//let global = {};
const app = getApp()
Date.prototype.Format = function (fmt) {
  var o = {
    "M+": this.getMonth() + 1,
    "d+": this.getDate(),
    "h+": this.getHours(),
    "m+": this.getMinutes(),
    "s+": this.getSeconds(),
    "q+": Math.floor(((this.getMonth() + 3)) / 3),
    "S": this.getMilliseconds()
  }
  if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length))
  for (var k in o) {
    if (new RegExp((("(" + k)) + ")").test(fmt)) {
      fmt = fmt.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
    }
  }
  return fmt
}
export default OnekitPage(ONEKIT_JSON, {
  onShow: function () {
    this.getBackgroundFetchData()
  },
  onShareAppMessage: function () {
    return {
      title: '预拉取',
      path: 'packageAPI/pages/get-background-prefetch-data/get-background-prefetch-data'
    }
  },
  data: {
    openid: '',
    appid: '',
    getDataTime: '',
    canIUse: true
  },
  getBackgroundFetchData: function () {
    if (wx.getBackgroundFetchData) {
      console.log('读取预拉取数据');
      const res = app.globalData.backgroundFetchData;
      const { fetchedData } = res;
      const result = JSON.parse(fetchedData);
      const systemInfo = wx.getSystemInfoSync();
      const timeStamp = systemInfo.brand == 'iPhone' ? res.timeStamp * 1000 : res.timeStamp;
      const time = new Date(timeStamp).Format("yyyy-MM-dd hh:mm:ss");
      this.setData({
        appid: result.appid,
        openid: result.openid,
        getDataTime: time
      });
    } else {
      this.setData({
        canIUse: false
      });
      wx.showModal({
        title: '微信版本过低，暂不支持本功能'
      });
    }
  }
})
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
