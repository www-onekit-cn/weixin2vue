<template>
  <onekit-page id='app'>
    <import src='../../../common/head.vue' />
    <import src='../../../common/foot.vue' />

    <onekit-view onekit-class="container">
      <onekit-template is="onekit-template-head"
                       DATA='{"title":"navigator"}'></onekit-template>

      <onekit-view onekit-class="page-body">
        <onekit-view onekit-class="btn-area">
          <onekit-navigator url="navigate?title=navigate"
                            hover-class="ohter-navigator">
            <onekit-button type="default">跳转到新页面</onekit-button>
          </onekit-navigator>
          <onekit-navigator url="redirect?title=redirect"
                            redirect
                            hover-class="other-navigator-hover">
            <onekit-button type="default">在当前页打开</onekit-button>
          </onekit-navigator>
          <onekit-navigator target="miniProgram"
                            hover-class="other-navigator-hover"
                            open-type="navigate"
                            app-id="wx4f1b24bdc99fa23b"
                            version="release">
            <onekit-button type="default">打开小程序</onekit-button>
          </onekit-navigator>
        </onekit-view>
      </onekit-view>

      <onekit-template is="onekit-template-foot"></onekit-template>
    </onekit-view>
  </onekit-page>
</template>
<script>
import Vue from 'vue'
import foot from '../../../../page/common/foot.foot'
Vue.component('onekit-template-foot', foot)
import head from '../../../../page/common/head.head'
Vue.component('onekit-template-head', head)
const ONEKIT_JSON = {
  "navigationBarTitleText": "navigator",
  "usingComponents": {}
}
import { OnekitPage } from 'weixin2vue';
//import { wx } from 'weixin2vue';
//let global = {};
export default OnekitPage(ONEKIT_JSON, {
  onShareAppMessage: function () {
    return {
      title: 'navigator',
      path: 'page/component/pages/navigator/navigator'
    }
  }
})
</script>
<style scoped src="@/app.css"/>
<style>
.navigator-hover button {
  background-color: #dedede;
}
.other-navigator-hover button {
  background-color: #dedede;
}
</style>
