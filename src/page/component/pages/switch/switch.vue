<template>
  <onekit-page id='app'>
    <!--    <import src='../../../common/head.vue' />
    <import src='../../../common/foot.vue' />-->

    <onekit-view onekit-class="container">
      <onekit-template is="onekit-template-head"
                       DATA='{"title":"switch"}'></onekit-template>

      <onekit-view onekit-class="page-body">
        <onekit-view onekit-class="page-section page-section-gap">
          <onekit-view onekit-class="page-section-title">默认样式</onekit-view>
          <onekit-view onekit-class="body-view">
            <onekit-switch checked
                           @Change="switch1Change"></onekit-switch>
            <onekit-switch @Change="switch2Change"></onekit-switch>
          </onekit-view>
        </onekit-view>

        <onekit-view onekit-class="page-section">
          <onekit-view onekit-class="page-section-title">推荐展示样式</onekit-view>
          <onekit-view onekit-class="weui-cells weui-cells_after-title">
            <onekit-view onekit-class="weui-cell weui-cell_switch">
              <onekit-view onekit-class="weui-cell__bd">开启中</onekit-view>
              <onekit-view onekit-class="weui-cell__ft">
                <onekit-switch checked></onekit-switch>
              </onekit-view>
            </onekit-view>
            <onekit-view onekit-class="weui-cell weui-cell_switch">
              <onekit-view onekit-class="weui-cell__bd">关闭</onekit-view>
              <onekit-view onekit-class="weui-cell__ft">
                <onekit-switch></onekit-switch>
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
  "navigationBarTitleText": "switch",
  "usingComponents": {}
}
import OnekitPage from '../../../../../weixin2vue/OnekitPage';
//import wx from '../weixin2vue/wx';
//let global = {};
export default OnekitPage(ONEKIT_JSON, {
  onShareAppMessage: function () {
    return {
      title: 'switch',
      path: 'page/component/pages/switch/switch'
    }
  },
  switch1Change: function (e) {
    console.log('switch1 发生 change 事件，携带值为', e.detail.value)
  },
  switch2Change: function (e) {
    console.log('switch2 发生 change 事件，携带值为', e.detail.value)
  }
})
</script>
<style scoped src="@/app.css"/>
<style>
@import "../../../common/lib/weui.css";
</style>
