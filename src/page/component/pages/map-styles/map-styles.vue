<template>
  <onekit-page id='app'>
    <import src='../../../common/head.vue' />
    <import src='../../../common/foot.vue' />

    <onekit-view onekit-class="container">
      <onekit-template is="onekit-template-head"
                       DATA='{"title":"map"}'></onekit-template>

      <onekit-view onekit-class="page-body">
        <onekit-view onekit-class="page-section page-section-gap">
          <onekit-view onekit-class="page-section-title">经典</onekit-view>
          <onekit-view onekit-class="page-section-ctn">
            <onekit-image onekit-class="image"
                          src="../../resources/pic/custom_map_template_1.png"></onekit-image>
          </onekit-view>
        </onekit-view>
        <onekit-view onekit-class="page-section page-section-gap">
          <onekit-view onekit-class="page-section-title">墨渊</onekit-view>
          <onekit-view onekit-class="page-section-ctn">
            <onekit-image onekit-class="image"
                          src="../../resources/pic/custom_map_template_2.png"></onekit-image>
          </onekit-view>
        </onekit-view>
        <onekit-view onekit-class="page-section page-section-gap">
          <onekit-view onekit-class="page-section-title">白浅</onekit-view>
          <onekit-view onekit-class="page-section-ctn">
            <onekit-image onekit-class="image"
                          src="../../resources/pic/custom_map_template_3.png"></onekit-image>
          </onekit-view>
        </onekit-view>
        <onekit-view onekit-class="page-section page-section-gap">
          <onekit-view onekit-class="page-section-title">玉露</onekit-view>
          <onekit-view onekit-class="page-section-ctn">
            <onekit-image onekit-class="image"
                          src="../../resources/pic/custom_map_template_4.png"></onekit-image>
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
  "navigationBarTitleText": "map底图样式",
  "usingComponents": {}
}
import OnekitPage from '../../../../../weixin2vue/OnekitPage';
import wx from '../../../../../weixin2vue/wx';
//let global = {};
export default OnekitPage(ONEKIT_JSON, {
  onShareAppMessage: function () {
    return {
      title: 'map底图样式',
      path: 'page/component/pages/map-styles/map-styles'
    }
  }
})
</script>
<style scoped src="@/app.css"/>
<style>
.page-section-ctn {
  text-align: center;
}
.image {
  margin-top: 15px;
  width: 245px;
  height: 284px;
}
</style>
