<template>
  <onekit-page id='app'>

    <import src='../../../common/head.vue' />
    <import src='../../../common/foot.vue' />

    <onekit-view onekit-class="container">
      <onekit-template is="onekit-template-head"
                       DATA='{"title":"getPerformance"}'></onekit-template>
      <template v-if="support">
        <onekit-button type="primary"
                       @:tap="getPerformanceInfo">
          获取性能数据
        </onekit-button>
        <onekit-view onekit-class="page-section">
          <onekit-view v-for="(item,index) in array"
                       :key="index"
                       onekit-class="performance-list">
            <onekit-view onekit-class="performance-item">
              <onekit-view>{{item.entryType}}：{{item.name}}</onekit-view>
              <onekit-view v-if="item.duration">耗时：{{item.duration}}</onekit-view>
              <onekit-view v-if="item.startTime">时间：{{item.startTime}}</onekit-view>
            </onekit-view>
          </onekit-view>
        </onekit-view>
      </template>
      <onekit-view onekit-style="text-align: center"
                   v-else>
        微信版本过低，暂不支持本功能
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
  "navigationBarTitleText": "性能数据",
  "usingComponents": {}
}
import { OnekitPage } from 'weixin2vue';
import { wx } from 'weixin2vue';
//let global = {};
const util = require('./util')
const performance = wx.getPerformance ? wx.getPerformance() : {}
const performanceObserver = performance.createObserver ? performance.createObserver() : null
export default OnekitPage(ONEKIT_JSON, {
  onShareAppMessage: function () {
    return {
      title: '周期性缓存',
      path: 'packageAPI/pages/get-performance/get-performance'
    }
  },
  data: {
    array: [
    ],
    support: false
  },
  onLoad: function () {
    console.log('canIUse:getPerformance:', wx.canIUse('getPerformance'))
    var canIUse = false
    if (wx.getPerformance) {
      canIUse = true;
    }
    this.setData({
      support: canIUse
    })
  },
  getPerformanceInfo: function () {
    const EntryList = performance.getEntries()
    const array = [
    ]
    EntryList.forEach((item) => {
      array.push({
        entryType: util.renderEntryType(item.entryType),
        name: util.renderName(item.name),
        duration: util.renderDuration(item.duration),
        startTime: util.renderStartTime(item.startTime)
      })
    })
    this.setData({
      array
    })
  },
  startObserver: function () {
    performanceObserver.observe({
      entryTypes: [
        'render',
        'script',
        'navigation'
      ]
    })
  },
  stopObserver: function () {
    performanceObserver.disconnect()
  }
})
</script>
<style scoped src="@/app.css"/>
<style>
.container {
  display: block;
}
.performance-list {
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
}
.performance-item {
  margin: 15px 0;
  width: 80%;
}
</style>
