<template>
  <onekit-page id='app'>
    <!--    <import src='../../../common/head.vue' />
    <import src='../../../common/foot.vue' />-->

    <onekit-view onekit-class="container">
      <onekit-template is="onekit-template-head"
                       DATA='{"title":"progress"}'></onekit-template>

      <onekit-view onekit-class="page-body">
        <onekit-view onekit-class="page-section page-section-gap">

          <onekit-view onekit-class="progress-box">
            <onekit-progress percent="20"
                             show-info
                             stroke-width="3"></onekit-progress>
          </onekit-view>

          <onekit-view onekit-class="progress-box">
            <onekit-progress percent="40"
                             active
                             stroke-width="3"></onekit-progress>
            <onekit-icon onekit-class="progress-cancel"
                         type="cancel"></onekit-icon>
          </onekit-view>

          <onekit-view onekit-class="progress-box">
            <onekit-progress percent="60"
                             active
                             stroke-width="3"></onekit-progress>
          </onekit-view>

          <onekit-view onekit-class="progress-box">
            <onekit-progress percent="80"
                             color="#10AEFF"
                             active
                             stroke-width="3"></onekit-progress>
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
  "navigationBarTitleText": "progress",
  "usingComponents": {}
}
import OnekitPage from '../../../../../weixin2vue/OnekitPage';
import wx from '../../../../../weixin2vue/wx';
//let //let global = {};
export default OnekitPage(ONEKIT_JSON, {
  onShareAppMessage: function () {
    return {
      title: 'progress',
      path: 'page/component/pages/progress/progress'
    }
  }
})
</script>
<style scoped src="@/app.css"/>
<style>
.onekit-progress {
  width: 100%;
}
.progress-box {
  display: flex;
  height: 25px;
  margin-bottom: 30px;
}
.progress-cancel {
  margin-left: 20px;
}
</style>
