<template>
  <onekit-page id='app'>
    <!--    <import src='../../../common/head.vue' />
    <import src='../../../common/foot.vue' />-->

    <onekit-view onekit-class="container">
      <onekit-template is="onekit-template-head"
                       DATA='{"title":"Storage"}'></onekit-template>

      <onekit-view onekit-class="page-body">
        <onekit-view onekit-class="page-section">
          <template v-if="fileTempURLDone">
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

              <onekit-view onekit-class="weui-cell weui-cell_input">
                <onekit-view onekit-class="weui-cell__hd">
                  <onekit-view onekit-class="weui-label">临时链接</onekit-view>
                </onekit-view>
                <onekit-view onekit-class="weui-cell__bd">
                  <onekit-textarea onekit-class="weui-textarea"
                                   :value="tempFileURL"
                                   onekit-style="height: 3.3em"
                                   disabled></onekit-textarea>
                </onekit-view>
              </onekit-view>

              <onekit-view onekit-class="weui-cell">
                <onekit-view onekit-class="page-section-ctn">
                  <onekit-image :src="tempFileURL"
                                onekit-class="image"
                                mode="aspectFit"></onekit-image>
                </onekit-view>
              </onekit-view>
            </onekit-view>

          </template>

          <template v-else>
            <onekit-view onekit-class="weui-cells__title">云函数亦可操作文件存储，点击按钮换取临时链接</onekit-view>
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
                             @Tap="getTempFileURL"
                             :loading="loading">通过云函数换取临时链接</onekit-button>
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
  "navigationBarTitleText": "云函数操作存储",
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
      title: '云函数操作存储',
      path: 'page/cloud/pages/scf-storage/scf-storage'
    }
  },
  data: {
    fileTempURLDone: false,
    fileId: '',
    tempFileURL: '',
    loading: false
  },
  onLoad: function () {
    this.setData({
      fileId: (app.globalData.fileId || demoImageFileId)
    })
  },
  getTempFileURL: function () {
    const fileId = this.data.fileId
    if (!fileId) {
      return;
    }
    this.setData({
      loading: true
    })
    wx.cloud.callFunction({
      name: 'getTempFileURL',
      data: {
        fileIdList: [
          fileId
        ]
      },
      success: (res) => {
        console.log('[云函数] [getTempFileURL] res: ', res.result)
        if (res.result.length) {
          this.setData({
            fileTempURLDone: true,
            tempFileURL: res.result[0].tempFileURL
          });
        }
      },
      fail: (err) => { console.error('[云函数] [getTempFileURL] 调用失败', err) },
      complete: () => {
        this.setData({
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
