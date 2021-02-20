<template>
  <onekit-page id='app'>
    <!--    <import src='../../../common/head.vue' />
    <import src='../../../common/foot.vue' />-->

    <onekit-view onekit-class="container">
      <onekit-template is="onekit-template-head"
                       DATA='{"title":"view"}'></onekit-template>
      <onekit-view onekit-class="page-body">
        <onekit-view onekit-class="page-section">
          <onekit-view onekit-class="page-section-title">
            <onekit-text>flex-direction: row\n横向布局</onekit-text>
          </onekit-view>
          <onekit-view onekit-class="page-section-spacing">
            <onekit-view onekit-class="flex-wrp"
                         onekit-style="flex-direction:row;">
              <onekit-view onekit-class="flex-item demo-text-1"></onekit-view>
              <onekit-view onekit-class="flex-item demo-text-2"></onekit-view>
              <onekit-view onekit-class="flex-item demo-text-3"></onekit-view>
            </onekit-view>
          </onekit-view>
        </onekit-view>
        <onekit-view onekit-class="page-section">
          <onekit-view onekit-class="page-section-title">
            <onekit-text>flex-direction: column\n纵向布局</onekit-text>
          </onekit-view>
          <onekit-view onekit-class="flex-wrp"
                       onekit-style="flex-direction:column;">
            <onekit-view onekit-class="flex-item flex-item-V demo-text-1"></onekit-view>
            <onekit-view onekit-class="flex-item flex-item-V demo-text-2"></onekit-view>
            <onekit-view onekit-class="flex-item flex-item-V demo-text-3"></onekit-view>
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
  "navigationBarTitleText": "view",
  "usingComponents": {}
}
import OnekitPage from '../../../../../weixin2vue/OnekitPage';
import wx from '../../../../../weixin2vue/wx';
//let global = {};
export default OnekitPage(ONEKIT_JSON, {
  onShareAppMessage: function () {
    return {
      title: 'view',
      path: 'page/component/pages/view/view'
    }
  }
})
</script>
<style scoped src="@/app.css"/>
<style>
.flex-wrp {
  margin-top: 30px;
  display: flex;
}
.flex-item {
  width: 100px;
  height: 150px;
  font-size: 13px;
}
.flex-item-V {
  margin: 0 auto;
  width: 150px;
  height: 100px;
}
</style>
