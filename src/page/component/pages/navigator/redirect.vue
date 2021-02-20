<template>
  <onekit-page id='app'>
    <!--    <import src='../../../common/head.vue' />
    <import src='../../../common/foot.vue' />-->

    <onekit-view onekit-class="container">
      <onekit-template is="onekit-template-head"
                       :DATA='{"title":"当前页"}'></onekit-template>
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
  "navigationBarTitleText": "redirectPage",
  "usingComponents": {}
}
import OnekitPage from '../../../../../weixin2vue/OnekitPage';
//import wx from '../weixin2vue/wx';
//let global = {};
export default OnekitPage(ONEKIT_JSON, {
  onShareAppMessage: function () {
    return {
      title: 'redirectPage',
      path: 'page/component/pages/navigator/redirect'
    }
  },
  onLoad: function (options) {
    console.log(options)
    this.setData({
      title: options.title
    })
  }
})
</script>
<style scoped src="@/app.css"/>
<style>
</style>
