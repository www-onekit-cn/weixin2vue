<template>
  <onekit-page id='app'>
    <!--    <import src='../../../common/head.vue' />
    <import src='../../../common/foot.vue' />-->

    <onekit-view onekit-class="container">
      <onekit-template is="onekit-template-head"
                       :DATA='{"title":"downloadFile"}'></onekit-template>

      <onekit-view onekit-class="page-body">
        <onekit-view onekit-class="page-section">
          <template v-if="fileDownloaded">
            <onekit-view onekit-class="weui-cells weui-cells_after-title">
              <onekit-view onekit-class="weui-cell weui-cell_input">
                <onekit-view onekit-class="weui-cell__hd">
                  <onekit-view onekit-class="weui-label">文件 ID</onekit-view>
                </onekit-view>
                <onekit-view onekit-class="weui-cell__bd">
                  <onekit-textarea onekit-class="weui-textarea"
                                   :value="fileId"
                                   onekit-style="height: 3.3em"
                                   disabled></onekit-textarea>
                </onekit-view>
              </onekit-view>

              <onekit-view onekit-class="weui-cell">
                <onekit-view onekit-class="page-section-ctn">
                  <onekit-image :src="filePath"
                                onekit-class="image"
                                mode="aspectFit"></onekit-image>
                </onekit-view>
              </onekit-view>
            </onekit-view>

          </template>

          <template v-else>
            <onekit-view onekit-class="weui-cells__title">点击按钮即可从云端存储下载指定云文件</onekit-view>
            <onekit-view onekit-class="weui-cells weui-cells_after-title">
              <onekit-view onekit-class="weui-cell weui-cell_input">
                <onekit-view onekit-class="weui-cell__hd">
                  <onekit-view onekit-class="weui-label">文件 ID</onekit-view>
                </onekit-view>
                <onekit-view onekit-class="weui-cell__bd">
                  <onekit-textarea onekit-class="weui-textarea"
                                   :value="fileId"
                                   onekit-style="height: 3.3em"
                                   disabled></onekit-textarea>
                </onekit-view>
              </onekit-view>
            </onekit-view>

            <onekit-view onekit-class="btn-area">
              <onekit-button type="primary"
                             size="40"
                             @Tap="downloadFile"
                             :loading="loading">下载文件</onekit-button>
            </onekit-view>
          </template>
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
  "navigationBarTitleText": "下载文件",
  "usingComponents": {}
}
import OnekitPage from '../../../../weixin2vue/OnekitPage';
import wx from '../../../../weixin2vue/wx';
import { getApp } from '../../../../weixin2vue/macro';
//let global = {};
const demoImageFileId = require('../../../config').demoImageFileId
const app = getApp()
export default OnekitPage(ONEKIT_JSON, {
  onShareAppMessage: function () {
    return {
      title: '下载文件',
      path: 'page/cloud/pages/download-file/download-file'
    }
  },
  data: {
    fileDownloaded: false,
    fileId: '',
    filePath: '',
    loading: false
  },
  onLoad: function () {
    this.setData({
      fileId: (app.globalData.fileId || demoImageFileId)
    })
  },
  downloadFile: function () {
    const fileId = this.data.fileId
    if (!fileId) {
      return;
    }
    const self = this
    this.setData({
      loading: true
    })
    wx.cloud.downloadFile({
      fileID: fileId,
      success: (res) => {
        console.log('[下载文件] 成功：', res)
        self.setData({
          fileDownloaded: true,
          filePath: res.tempFilePath
        })
      },
      fail: (err) => { console.error('[下载文件] 失败：', err) },
      complete: () => {
        self.setData({
          loading: false
        })
      }
    })
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
