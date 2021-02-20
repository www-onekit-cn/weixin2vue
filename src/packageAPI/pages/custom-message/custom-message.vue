<template>
  <onekit-page id='app'>
    <!--    <import src='../../../common/head.vue' />
    <import src='../../../common/foot.vue' />-->

    <onekit-view onekit-class="container">
      <onekit-template is="onekit-template-head"
                       DATA='{"title":"customMessage"}'></onekit-template>

      <onekit-view onekit-class="page-body">
        <onekit-view onekit-class="page-body-wrapper">
          <onekit-text onekit-class="page-body-title">
            点击气泡icon打开客服消息界面
          </onekit-text>
          <onekit-view onekit-class="page-body-line">
            <onekit-contact-button size="40"
                                   session-from="weapp"></onekit-contact-button>
          </onekit-view>
        </onekit-view>
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
  "navigationBarTitleText": "客服消息",
  "usingComponents": {}
}
import OnekitPage from '../../../../weixin2vue/OnekitPage';
//import wx from '../../../../weixin2vue/wx';
//let //let global = {};
export default OnekitPage(ONEKIT_JSON, {
  onShareAppMessage: function () {
    return {
      title: '客服消息',
      path: 'packageAPI/pages/custom-message/custom-message'
    }
  }
})
</script>
<style scoped src="@/app.css"/>
<style>
</style>
