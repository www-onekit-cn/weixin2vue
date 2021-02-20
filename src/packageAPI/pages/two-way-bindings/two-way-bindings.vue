<template>
  <onekit-page id='app'>
    <!--    <import src='../../../common/head.vue' />
    <import src='../../../common/foot.vue' />-->

    <onekit-view onekit-class="container">
      <onekit-template is="onekit-template-head"
                       DATA='{"title":"双向绑定"}'></onekit-template>

      <onekit-view onekit-class="page-body">
        <onekit-view onekit-class="page-section">
          <onekit-input onekit-class="input"
                        :model:value="value"
                        placeholder="请输入"></onekit-input>
          <onekit-view onekit-class="text">这是你输入的数据：{{value}}</onekit-view>
        </onekit-view>

      </onekit-view>

      <onekit-template is="onekit-template-foot"></onekit-template>
    </onekit-view>
  </onekit-page>
</template>
<script>
/* eslint-disable */
import Vue from 'vue'
import head from '../../../common/head.head'
Vue.component('onekit-template-head', head)
import foot from '../../../common/foot.foot'
Vue.component('onekit-template-foot', foot)
const ONEKIT_JSON = {
  "navigationBarTitleText": "two-way-bindings",
  "usingComponents": {}
}
import OnekitPage from '../../../../weixin2vue/OnekitPage';
import wx from '../../../../weixin2vue/wx';
//let global = {};
export default OnekitPage(ONEKIT_JSON, {
  data: {
    value: ''
  },
  onLoad: function (options) {
  },
  onReady: function () {
  },
  onShow: function () {
  },
  onHide: function () {
  },
  onUnload: function () {
  },
  onPullDownRefresh: function () {
  },
  onReachBottom: function () {
  },
  onShareAppMessage: function () {
    return {
      title: '双向绑定',
      path: 'packageAPI/pages/make-phone-call/make-phone-call'
    }
  }
})
</script>
<style scoped src="@/app.css"/>
<style>
.input {
  margin: 15px auto;
  width: 80%;
}
.text {
  margin: 15px auto;
  width: 80%;
}
</style>
