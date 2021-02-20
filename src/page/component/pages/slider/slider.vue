<template>
  <onekit-page id='app'>
    <import src='../../../common/head.vue' />
    <import src='../../../common/foot.vue' />

    <onekit-view onekit-class="container">
      <onekit-template is="onekit-template-head"
                       DATA='{"title":"slider"}'></onekit-template>

      <onekit-view onekit-class="page-body">
        <onekit-view onekit-class="page-section page-section-gap">
          <onekit-view onekit-class="page-section-title">设置step</onekit-view>
          <onekit-view onekit-class="body-view">
            <onekit-slider value="60"
                           @Change="slider2change"
                           step="5"></onekit-slider>
          </onekit-view>
        </onekit-view>

        <onekit-view onekit-class="page-section page-section-gap">
          <onekit-view onekit-class="page-section-title">显示当前value</onekit-view>
          <onekit-view onekit-class="body-view">
            <onekit-slider value="50"
                           @Change="slider3change"
                           show-value></onekit-slider>
          </onekit-view>
        </onekit-view>

        <onekit-view onekit-class="page-section page-section-gap">
          <onekit-view onekit-class="page-section-title">设置最小/最大值</onekit-view>
          <onekit-view onekit-class="body-view">
            <onekit-slider value="100"
                           @Change="slider4change"
                           min="50"
                           max="200"
                           show-value></onekit-slider>
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
  "navigationBarTitleText": "slider",
  "usingComponents": {}
}
import OnekitPage from '../../../../../weixin2vue/OnekitPage';
import wx from '../../../../../weixin2vue/wx';
//let global = {};
const pageData = {
  onShareAppMessage: function () {
    return {
      title: 'slider',
      path: 'page/component/pages/slider/slider'
    }
  }
}
for (var i = 1; i < 5; ++i) {
  (function (index) {
    pageData[(('slider' + index)) + 'change'] = function (e) {
      console.log((('slider' + index)) + '发生change事件，携带值为', e.detail.value)
    }
  })(i);
}
export default OnekitPage(ONEKIT_JSON, pageData)
</script>
<style scoped src="@/app.css"/>
<style>
.onekit-slider {
  margin: 0;
}
</style>
