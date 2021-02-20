<template>
  <onekit-page id='app'>
    <import src='../../../common/head.vue' />
    <import src='../../../common/foot.vue' />

    <onekit-view onekit-class="container">
      <onekit-template is="onekit-template-head"
                       DATA='{"title":"setNaivgationBarTitle"}'></onekit-template>

      <onekit-form class="page-body"
                   @submit="setNaivgationBarTitle">
        <onekit-view onekit-class="weui-cells weui-cells_after-title">
          <onekit-view onekit-class="weui-cell weui-cell_input">
            <onekit-view onekit-class="weui-cell__hd">
              <onekit-view onekit-class="weui-label">页面标题</onekit-view>
            </onekit-view>
            <onekit-view onekit-class="weui-cell__bd">
              <onekit-input onekit-class="weui-input"
                            type="text"
                            placeholder="请输入页面标题并点击设置即可"
                            name="title"></onekit-input>
            </onekit-view>
          </onekit-view>
        </onekit-view>
        <onekit-view onekit-class="btn-area">
          <onekit-button type="primary"
                         formType="submit">设置</onekit-button>
        </onekit-view>
      </onekit-form>

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
  "navigationBarTitleText": "设置页面标题",
  "usingComponents": {}
}
import { OnekitPage } from 'weixin2vue';
import { wx } from 'weixin2vue';
//let global = {};
export default OnekitPage(ONEKIT_JSON, {
  onShareAppMessage: function () {
    return {
      title: '设置页面标题',
      path: 'packageAPI/pages/set-navigation-bar-title/set-navigation-bar-title'
    }
  },
  setNaivgationBarTitle: function (e) {
    const title = e.detail.value.title
    console.log(title)
    wx.setNavigationBarTitle({
      title,
      success: function () {
        console.log('setNavigationBarTitle success')
      },
      fail: function (err) {
        console.log('setNavigationBarTitle fail, err is', err)
      }
    })
    return false
  }
})
</script>
<style scoped src="@/app.css"/>
<style>
@import "../../../common/lib/weui.css";
.weui-label {
  width: 5em;
}
</style>
