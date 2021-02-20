<template>
  <onekit-page id='app'>
    <!--    <import src='../../../common/head.vue' />
    <import src='../../../common/foot.vue' />-->

    <onekit-view onekit-class="container">
      <onekit-template is="onekit-template-head"
                       :DATA='{"title":"deleteFile"}'></onekit-template>

      <onekit-view onekit-class="page-body">
        <onekit-view onekit-class="page-section">
          <template v-if="!fileId">
            <onekit-view onekit-class="page-section-ctn">
              <onekit-text onekit-class="page-body-text">还未上传过文件，请先点击按钮上传</onekit-text>
            </onekit-view>

            <onekit-view onekit-class="btn-area">
              <onekit-navigator url="/page/cloud/pages/upload-file/upload-file?from=delete-file">
                <onekit-button type="primary"
                               size="40">上传文件</onekit-button>
              </onekit-navigator>
            </onekit-view>
          </template>

          <template v-else>
            <onekit-view onekit-class="weui-cells__title">点击按钮即可删除指定文件</onekit-view>
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
                             @Tap="deleteFile"
                             :loading="loading">删除文件</onekit-button>
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
  "navigationBarTitleText": "删除文件",
  "usingComponents": {}
}
import { getApp } from '../../../../weixin2vue/macro';
import OnekitPage from '../../../../weixin2vue/OnekitPage';
import wx from '../../../../weixin2vue/wx';
//let //let global = {};
const app = getApp()
export default OnekitPage(ONEKIT_JSON, {
  onShareAppMessage: function () {
    return {
      title: '删除文件',
      path: 'page/cloud/pages/delete-file/delete-file'
    }
  },
  data: {
    fileId: '',
    loading: false
  },
  onLoad: function () {
    this.setData({
      fileId: (app.globalData.fileId || '')
    })
  },
  onShow: function () {
    this.setData({
      fileId: (app.globalData.fileId || '')
    })
  },
  deleteFile: function () {
    const fileId = this.data.fileId
    if (!fileId) {
      return;
    }
    const self = this
    this.setData({
      loading: true
    })
    wx.cloud.deleteFile({
      fileList: [
        fileId
      ],
      success: (res) => {
        console.log('[删除文件] 成功：', res)
        if ((res.fileList && res.fileList.length)) {
          self.setData({
            fileId: ''
          });
        }
        app.globalData.fileId = ''
        wx.showToast({
          title: '删除成功'
        })
      },
      fail: (err) => { console.error('[删除文件] 失败：', err) },
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
  margin: calc(var(--screen-width) * 200 / 750) auto 0;
  width: 100%;
}
.page-body-text {
  color: #bbb;
  font-size: calc(var(--screen-width) * 28 / 750);
  line-height: calc(var(--screen-width) * 40 / 750);
  text-align: center;
}
</style>
