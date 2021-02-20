<template>
  <onekit-page id='app'>
    <!--    <import src='../../../common/head.vue' />
    <import src='../../../common/foot.vue' />-->

    <onekit-view onekit-class="container">
      <onekit-template is="onekit-template-head"
                       DATA='{"title":"onShareAppMessage"}'></onekit-template>

      <onekit-view onekit-class="page-body">
        <onekit-view onekit-class="weui-cells__title">发送内容（以下字段可自由适配）</onekit-view>
        <onekit-view onekit-class="weui-cells weui-cells_after-title">
          <onekit-view onekit-class="weui-cell weui-cell_input">
            <onekit-view onekit-class="weui-cell__hd">
              <onekit-view onekit-class="weui-label">标题</onekit-view>
            </onekit-view>
            <onekit-view onekit-class="weui-cell__bd">
              <onekit-input onekit-class="weui-input"
                            type="text"
                            :disabled="true"
                            :value="shareData.title"></onekit-input>
            </onekit-view>
          </onekit-view>
          <onekit-view onekit-class="weui-cell weui-cell_input">
            <onekit-view onekit-class="weui-cell__hd">
              <onekit-view onekit-class="weui-label">描述</onekit-view>
            </onekit-view>
            <onekit-view onekit-class="weui-cell__bd">
              <onekit-input onekit-class="weui-input"
                            type="text"
                            :disabled="true"
                            :value="shareData.desc"></onekit-input>
            </onekit-view>
          </onekit-view>
          <onekit-view onekit-class="weui-cell weui-cell_input">
            <onekit-view onekit-class="weui-cell__hd">
              <onekit-view onekit-class="weui-label">跳转页面</onekit-view>
            </onekit-view>
            <onekit-view onekit-class="weui-cell__bd">
              <onekit-input onekit-class="weui-input"
                            type="text"
                            :disabled="true"
                            :value="shareData.path"></onekit-input>
            </onekit-view>
          </onekit-view>
        </onekit-view>
        <onekit-view onekit-class="weui-cells__tips">点击右上角菜单转发给好友</onekit-view>
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
  "navigationBarTitleText": "转发",
  "usingComponents": {}
}
import OnekitPage from '../../../../weixin2vue/OnekitPage';
//import wx from '../../../../weixin2vue/wx';
//let global = {};
export default OnekitPage(ONEKIT_JSON, {
  data: {
    shareData: {
      title: '自定义转发标题',
      desc: '自定义转发描述',
      path: 'packageAPI/pages/share/share'
    }
  },
  onShareAppMessage: function () {
    return this.data.shareData
  }
})
</script>
<style scoped src="@/app.css"/>
<style>
@import "../../../common/lib/weui.css";
</style>
