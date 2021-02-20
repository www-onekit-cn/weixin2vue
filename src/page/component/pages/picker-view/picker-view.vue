
<template>
  <onekit-page id='app'>
    <!--    <import src='../../../common/head.vue' />
    <import src='../../../common/foot.vue' />-->

    <onekit-view onekit-class="container">
      <onekit-template is="onekit-template-head"
                       :DATA='{"title":"picker-view"}'></onekit-template>

      <onekit-view onekit-class="page-body">
        <onekit-view onekit-class="selected-date">{{year}}年{{month}}月{{day}}日{{isDaytime ? "白天" : "夜晚"}}</onekit-view>
        <onekit-picker-view indicator-style="height: 50px;"
                            onekit-style="width: 100%; height: 300px;"
                            :value="value"
                            @Change="bindChange">
          <onekit-picker-view-column>
            <onekit-view v-for="(item) in years"
                         :key="item.years"
                         onekit-style="line-height: 50px; text-align: center;">{{item}}年</onekit-view>
          </onekit-picker-view-column>
          <onekit-picker-view-column>
            <onekit-view v-for="(item) in months"
                         :key="item.months"
                         onekit-style="line-height: 50px; text-align: center;">{{item}}月</onekit-view>
          </onekit-picker-view-column>
          <onekit-picker-view-column>
            <onekit-view v-for="(item) in days"
                         :key="item.days"
                         onekit-style="line-height: 50px; text-align: center;">{{item}}日</onekit-view>
          </onekit-picker-view-column>
          <onekit-picker-view-column>
            <onekit-view onekit-class="icon-container">
              <onekit-image onekit-class="picker-icon"
                            src="../../resources/kind/daytime.png"></onekit-image>
            </onekit-view>
            <onekit-view onekit-class="icon-container">
              <onekit-image onekit-class="picker-icon"
                            src="../../resources/kind/night.png"></onekit-image>
            </onekit-view>
          </onekit-picker-view-column>
        </onekit-picker-view>
      </onekit-view>

      <onekit-template is="onekit-template-foot"></onekit-template>
    </onekit-view>
  </onekit-page>
</template>
<script>
/* eslint-disable no-unused-vars */
/* eslint-disable no-redeclare */
import Vue from 'vue'
import foot from '../../../../page/common/foot.foot'
Vue.component('onekit-template-foot', foot)
import head from '../../../../page/common/head.head'
Vue.component('onekit-template-head', head)
const ONEKIT_JSON = {
  "navigationBarTitleText": "picker-view",
  "usingComponents": {}
}
import OnekitPage from '../../../../../weixin2vue/OnekitPage';
import wx from '../../../../../weixin2vue/wx';
//let global = {};
const date = new Date()
const years = [
]
const months = [
]
const days = [
]
for (var i = 1990; i <= date.getFullYear(); i++) {
  years.push(i);
}
for (var i = 1; i <= 12; i++) {
  months.push(i);
}
for (var i = 1; i <= 31; i++) {
  days.push(i);
}
export default OnekitPage(ONEKIT_JSON, {
  onShareAppMessage: function () {
    return {
      title: 'picker-view',
      path: 'page/component/pages/picker-view/picker-view'
    }
  },
  data: {
    years,
    year: date.getFullYear(),
    months,
    month: 2,
    days,
    day: 2,
    value: [
      9999,
      1,
      1
    ],
    isDaytime: true
  },
  bindChange: function (e) {
    const val = e.detail.value
    this.setData({
      year: this.data.years[val[0]],
      month: this.data.months[val[1]],
      day: this.data.days[val[2]],
      isDaytime: !val[3]
    })
  }
})
</script>
<style scoped src="@/app.css"/>
<style>
.selected-date {
  text-align: center;
  margin: 15px;
}
.icon-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.picker-icon {
  width: 25px;
  height: 25px;
}
</style>
