<template>
  <onekit-page id='app'>
    <!--    <import src='../../../common/head.vue' />
    <import src='../../../common/foot.vue' />-->

    <onekit-view onekit-class="container">
      <onekit-template is="onekit-template-head"
                       :DATA='{"title":"downloadFile"}'></onekit-template>

      <onekit-view onekit-class="page-body">
        <onekit-image v-if="imageSrc"
                      :src="imageSrc"
                      mode="center"></onekit-image>
        <template v-else>
          <onekit-view onekit-class="page-body-wording">
            <onekit-text onekit-class="page-body-text">
              点击按钮下载服务端示例图片
            </onekit-text>
          </onekit-view>
          <onekit-view onekit-class="btn-area">
            <onekit-button @Tap="downloadImage"
                           type="primary">下载</onekit-button>
          </onekit-view>
        </template>
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
  "navigationBarTitleText": "下载文件",
  "usingComponents": {}
}
import OnekitPage from '../../../../weixin2vue/OnekitPage';
import wx from '../../../../weixin2vue/wx';
//let global = {};
const demoImageFileId = require('../../../config').demoImageFileId
export default OnekitPage(ONEKIT_JSON, {
  onShareAppMessage: function () {
    return {
      title: '下载文件',
      path: 'packageAPI/pages/download-file/download-file'
    }
  },
  downloadImage: function () {
    const self = this
    wx.cloud.downloadFile({
      fileID: demoImageFileId,
      success: (res) => {
        console.log('downloadFile success, res is', res)
        self.setData({
          imageSrc: res.tempFilePath
        })
      },
      fail: console.error
    })
  }
})
</script>
<style scoped src="@/app.css"/>
<style>
.page-body image {
  width: 300px;
  height: 300px;
  margin: 0 38px;
}
</style>
