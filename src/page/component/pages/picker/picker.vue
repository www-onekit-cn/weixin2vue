<template>
  <onekit-page id='app'>
    <import src='../../../common/head.vue' />
    <import src='../../../common/foot.vue' />

    <onekit-view onekit-class="container">
      <onekit-template is="onekit-template-head"
                       DATA='{"title":"picker"}'></onekit-template>

      <onekit-view onekit-class="page-body">
        <onekit-view onekit-class="page-section">
          <onekit-view onekit-class="weui-cells__title">地区选择器</onekit-view>
          <onekit-view onekit-class="weui-cells weui-cells_after-title">
            <onekit-view onekit-class="weui-cell weui-cell_input">
              <onekit-view onekit-class="weui-cell__hd">
                <onekit-view onekit-class="weui-label">当前选择</onekit-view>
              </onekit-view>
              <onekit-view onekit-class="weui-cell__bd">
                <onekit-picker @Change="bindPickerChange"
                               :value="index"
                               :range="array">
                  <onekit-view onekit-class="weui-input">{{array[index]}}</onekit-view>
                </onekit-picker>
              </onekit-view>
            </onekit-view>
          </onekit-view>

          <onekit-view onekit-class="weui-cells__title">时间选择器</onekit-view>
          <onekit-view onekit-class="weui-cells weui-cells_after-title">
            <onekit-view onekit-class="weui-cell weui-cell_input">
              <onekit-view onekit-class="weui-cell__hd">
                <onekit-view onekit-class="weui-label">当前选择</onekit-view>
              </onekit-view>
              <onekit-view onekit-class="weui-cell__bd">
                <onekit-picker mode="time"
                               :value="time"
                               start="09:01"
                               end="21:01"
                               @Change="bindTimeChange">
                  <onekit-view onekit-class="weui-input">{{time}}</onekit-view>
                </onekit-picker>
              </onekit-view>
            </onekit-view>
          </onekit-view>

          <onekit-view onekit-class="weui-cells__title">日期选择器</onekit-view>
          <onekit-view onekit-class="weui-cells weui-cells_after-title">
            <onekit-view onekit-class="weui-cell weui-cell_input">
              <onekit-view onekit-class="weui-cell__hd">
                <onekit-view onekit-class="weui-label">当前选择</onekit-view>
              </onekit-view>
              <onekit-view onekit-class="weui-cell__bd">
                <onekit-picker mode="date"
                               :value="date"
                               start="2015-09-01"
                               end="2017-09-01"
                               @Change="bindDateChange">
                  <onekit-view onekit-class="weui-input">{{date}}</onekit-view>
                </onekit-picker>
              </onekit-view>
            </onekit-view>
          </onekit-view>
        </onekit-view>
      </onekit-view>

      <onekit-template is="onekit-template-foot"></onekit-template>
    </onekit-view>
  </onekit-page>
</template>
<script>
/* eslint-disable no-unused-vars */
import Vue from 'vue'
import foot from '../../../../page/common/foot.foot'
Vue.component('onekit-template-foot', foot)
import head from '../../../../page/common/head.head'
Vue.component('onekit-template-head', head)
const ONEKIT_JSON = {
  "navigationBarTitleText": "picker",
  "usingComponents": {}
}
import OnekitPage from '../../../../../weixin2vue/OnekitPage';
import wx from '../../../../../weixin2vue/wx';
//let //let global = {};
export default OnekitPage(ONEKIT_JSON, {
  onShareAppMessage: function () {
    return {
      title: 'picker',
      path: 'page/component/pages/picker/picker'
    }
  },
  data: {
    array: [
      '中国',
      '美国',
      '巴西',
      '日本'
    ],
    index: 0,
    date: '2016-09-01',
    time: '12:01'
  },
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  bindDateChange: function (e) {
    this.setData({
      date: e.detail.value
    })
  },
  bindTimeChange: function (e) {
    this.setData({
      time: e.detail.value
    })
  }
})
</script>
<style scoped src="@/app.css"/>
<style>
@import "../../../common/lib/weui.css";
.picker {
  padding: 10px 13px;
  background-color: #ffffff;
}
</style>
