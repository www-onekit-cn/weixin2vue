<template>
  <onekit-page id='app'>
    <import src='../../../common/head.vue' />
    <import src='../../../common/foot.vue' />

    <onekit-view onekit-class="container">
      <onekit-template is="onekit-template-head"
                       DATA='{"title":"屏幕旋转"}'></onekit-template>

      <onekit-view onekit-class="page-body">
        <onekit-view onekit-class="page-section">
          <onekit-view onekit-style="text-align:center">

            旋转屏幕
          </onekit-view>
          <onekit-image src="http://mmbiz.qpic.cn/sz_mmbiz_png/GEWVeJPFkSHALb0g5rCc4Jf5IqDfdwhWJ43I1IvriaV5uFr9fLAuv3uxHR7DQstbIxhNXFoQEcxGzWwzQUDBd6Q/0?wx_fmt=png"
                        mode="aspectFit"
                        onekit-style="width: 100%"></onekit-image>

        </onekit-view>
      </onekit-view>

      <onekit-template is="onekit-template-foot"></onekit-template>
    </onekit-view>
  </onekit-page>
</template>
<script>
/* eslint-disable */
const resizable = require('./resizable');
import Vue from 'vue'
import head from '../../../common/head.head'
Vue.component('onekit-template-head', head)
import foot from '../../../common/foot.foot'
Vue.component('onekit-template-foot', foot)
const ONEKIT_JSON = {
  "pageOrientation": "auto",
  "navigationBarTitleText": "屏幕旋转",
  "usingComponents": {}
}
import OnekitPage from '../../../../weixin2vue/OnekitPage';
//import wx from '../../../../weixin2vue/wx';
//let global = {};
export default OnekitPage(ONEKIT_JSON, {
  onShareAppMessage: function () {
    return {
      title: '屏幕旋转',
      path: 'package/API/pages/resizable/resizable'
    }
  },
  data: {
    status: 'lock'
  },
  handleStatusChange: function (e) {
    this.setData({
      status: e.currentTarget.dataset.status
    })
  }
})
</script>
<style scoped src="@/app.css"/>
<style>
</style>
