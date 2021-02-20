<template>
  <onekit-page id='app'>
    <!--    <import src='../../../common/head.vue' />
    <import src='../../../common/foot.vue' />-->

    <onekit-view onekit-class="container">
      <onekit-template is="onekit-template-head"
                       :DATA='{"title":"getTempFileURL"}'></onekit-template>

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
            <onekit-view onekit-class="weui-cells__title">点击按钮即可根据文件 ID 换取临时网络链接</onekit-view>
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
                             :loading="loading">换取临时链接</onekit-button>
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
  "navigationBarTitleText": "换取临时链接",
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
      title: '获取临时链接',
      path: 'page/cloud/pages/get-temp-file-url/get-temp-file-url'
    }
  },
  data: {
    fileTempURLDone: false,
    fileId: '',
    tempFileURL: '',
    maxAge: 0,
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
    const self = this
    this.setData({
      loading: true
    })
    wx.cloud.getTempFileURL({
      fileList: [
        fileId
      ],
      success: (res) => {
        console.log('[换取临时链接] 成功：', res)
        if ((res.fileList && res.fileList.length)) {
          self.setData({
            fileTempURLDone: true,
            tempFileURL: res.fileList[0].tempFileURL,
            maxAge: res.fileList[0].maxAge
          });
        }
      },
      fail: (err) => { console.error('[换取临时链接] 失败：', err) },
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
