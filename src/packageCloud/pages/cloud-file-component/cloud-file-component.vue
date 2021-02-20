<template>
  <onekit-page id='app'>
    <!--    <import src='../../../common/head.vue' />
    <import src='../../../common/foot.vue' />-->

    <onekit-view onekit-class="container">
      <onekit-template is="onekit-template-head"
                       :DATA='{"title":"Component Support"}'></onekit-template>

      <onekit-view onekit-class="page-body">
        <onekit-view onekit-class="page-section">
          <onekit-view onekit-class="weui-cells__title">小程序组件支持传入云文件 ID</onekit-view>
          <onekit-view onekit-class="weui-cells weui-cells_after-title">
            <onekit-view onekit-class="weui-cell weui-cell_input">
              <onekit-view onekit-class="weui-cell__hd">
                <onekit-view onekit-class="weui-label">文件 ID</onekit-view>
              </onekit-view>
              <onekit-view onekit-class="weui-cell__bd">
                <onekit-textarea onekit-class="weui-textarea"
                                 :value="imageFileId"
                                 onekit-style="height: 3.3em"
                                 disabled></onekit-textarea>
              </onekit-view>
            </onekit-view>

            <onekit-view onekit-class="weui-cell">
              <onekit-view onekit-class="page-section-ctn">
                <onekit-image :src="imageFileId"
                              onekit-class="image"
                              mode="aspectFit"></onekit-image>
              </onekit-view>
            </onekit-view>
          </onekit-view>

          <onekit-view onekit-class="weui-cells__title"></onekit-view>
          <onekit-view onekit-class="weui-cells weui-cells_after-title">
            <onekit-view onekit-class="weui-cell weui-cell_input">
              <onekit-view onekit-class="weui-cell__hd">
                <onekit-view onekit-class="weui-label">文件 ID</onekit-view>
              </onekit-view>
              <onekit-view onekit-class="weui-cell__bd">
                <onekit-textarea onekit-class="weui-textarea"
                                 :value="videoFileId"
                                 onekit-style="height: 3.3em"
                                 disabled></onekit-textarea>
              </onekit-view>
            </onekit-view>

            <onekit-view onekit-class="weui-cell">
              <onekit-view onekit-class="page-section-ctn">
                <onekit-video :src="videoFileId"
                              :show-center-play-btn="false"></onekit-video>
              </onekit-view>
            </onekit-view>
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
  "navigationBarTitleText": "组件支持",
  "usingComponents": {}
}
import OnekitPage from '../../../../weixin2vue/OnekitPage';
//import wx from '../../../../weixin2vue/wx';
//let //let global = {};
const { demoImageFileId, demoVideoFileId } = require('../../../config')
export default OnekitPage(ONEKIT_JSON, {
  onShareAppMessage: function () {
    return {
      title: '组件支持',
      path: 'page/cloud/pages/cloud-file-component/cloud-file-component'
    }
  },
  data: {
    imageFileId: demoImageFileId,
    videoFileId: demoVideoFileId
  }
})
</script>
<style scoped src="@/app.css"/>
<style>
@import "../../../common/lib/weui.css";
.page-section-ctn {
  text-align: center;
  margin: 0 auto;
  width: 100%;
}
.image {
  max-width: 100%;
}
</style>
