<template>
  <onekit-page id='app'>
    <!--    <import src='../../../common/head.vue' />
    <import src='../../../common/foot.vue' />-->

    <onekit-view onekit-class="container">
      <onekit-template is="onekit-template-head"
                       DATA='{"title":"textarea"}'></onekit-template>

      <onekit-view onekit-class="page-body">
        <onekit-view onekit-class="page-section">
          <onekit-view onekit-class="page-section-title">输入区域高度自适应，不会出现滚动条</onekit-view>
          <onekit-view onekit-class="textarea-wrp">
            <onekit-textarea @Blur="bindTextAreaBlur"
                             auto-height></onekit-textarea>
          </onekit-view>
        </onekit-view>

        <onekit-view onekit-class="page-section">
          <onekit-view onekit-class="page-section-title">这是一个可以自动聚焦的textarea</onekit-view>
          <onekit-view onekit-class="textarea-wrp">
            <onekit-textarea auto-focus="true"
                             onekit-style="height: 3em"></onekit-textarea>
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
  "navigationBarTitleText": "textarea",
  "usingComponents": {}
}
import OnekitPage from '../../../../../weixin2vue/OnekitPage';
import wx from '../../../../../weixin2vue/wx';
//let global = {};
export default OnekitPage(ONEKIT_JSON, {
  onShareAppMessage: function () {
    return {
      title: 'textarea',
      path: 'page/component/pages/textarea/textarea'
    }
  },
  data: {
    focus: false
  },
  bindTextAreaBlur: function (e) {
    console.log(e.detail.value)
  }
})
</script>
<style scoped src="@/app.css"/>
<style>
.onekit-textarea {
  width: 350px;
  padding: 13px 0;
}
.textarea-wrp {
  padding: 0 13px;
}
</style>
