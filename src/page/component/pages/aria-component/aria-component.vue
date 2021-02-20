<template>
  <onekit-page id='app'>
    <import src='../../../common/head.vue' />
    <import src='../../../common/foot.vue' />

    <onekit-view onekit-class="container">
      <onekit-template is="onekit-template-head"
                       DATA='{"title":"无障碍访问"}'></onekit-template>
      <onekit-view onekit-class="page-body">
        <onekit-view onekit-class="page-section">
          <onekit-view onekit-class="page-section-title">
            <onekit-text>无障碍访问说明</onekit-text>
          </onekit-view>
          <onekit-view onekit-class="page-section-spacing">
            <onekit-view onekit-class="text-box">
              <onekit-text>为了更好地满足视障人士\n对于小程序的访问需求\n基础库自2.7.1起，支持部分ARIA标签\n无障碍特性在读屏模式下可以访问</onekit-text>
            </onekit-view>
          </onekit-view>
        </onekit-view>
        <onekit-view onekit-class="page-section">
          <onekit-view onekit-class="page-section-title">
            <onekit-text>例子</onekit-text>
          </onekit-view>
          <onekit-view onekit-class="page-section-spacing">
            <onekit-view aria-role="button"
                         aria-label="提交表单"
                         onekit-style="text-align: center">提交</onekit-view>
          </onekit-view>
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
  "navigationBarTitleText": "aria-component",
  "usingComponents": {}
}
import { OnekitPage } from 'weixin2vue';
import { wx } from 'weixin2vue';
//let global = {};
export default OnekitPage(ONEKIT_JSON, {
  onShareAppMessage: function () {
    return {
      title: '无障碍访问',
      path: 'page/component/pages/aria-component/aria-component'
    }
  }
})
</script>
<style scoped src="@/app.css"/>
<style>
.text-box {
  margin-bottom: 35px;
  padding: 20px 0;
  display: flex;
  min-height: 150px;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 15px;
  color: #353535;
  line-height: 2em;
}
</style>
