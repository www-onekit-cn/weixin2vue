<template>
  <onekit-page id='app'>
    <import src='../../../common/head.vue' />
    <import src='../../../common/foot.vue' />

    <onekit-view onekit-class="container">
      <onekit-template is="onekit-template-head"
                       DATA='{"title":"pageScrollTo"}'></onekit-template>

      <onekit-view onekit-class="page-body">
        <onekit-view onekit-class="page-section">
          <onekit-view onekit-class="btn-area">
            <onekit-button type="primary"
                           @Tap="scrollToBottom">滚动到页面底部</onekit-button>
          </onekit-view>
          <onekit-view onekit-class="filling-area"></onekit-view>
          <onekit-view onekit-class="btn-area">
            <onekit-button type="primary"
                           @Tap="scrollToTop">返回顶部</onekit-button>
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
  "navigationBarTitleText": "页面滚动",
  "usingComponents": {}
}
import { OnekitPage } from 'weixin2vue';
import { wx } from 'weixin2vue';
//let global = {};
export default OnekitPage(ONEKIT_JSON, {
  onShareAppMessage: function () {
    return {
      title: '页面滚动',
      path: 'packageAPI/pages/page-scroll/page-scroll'
    }
  },
  scrollToTop: function () {
    wx.pageScrollTo({
      scrollTop: 0,
      duration: 300
    })
  },
  scrollToBottom: function () {
    wx.pageScrollTo({
      scrollTop: 3000,
      duration: 300
    })
  }
})
</script>
<style scoped src="@/app.css"/>
<style>
.rect {
  width: 50px;
  height: 50px;
  background-color: #ccc;
}
.filling-area {
  height: 1250px;
}
</style>
