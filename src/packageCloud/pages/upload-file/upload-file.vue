<template>
  <onekit-page id='app'>
    <import src='../../../common/head.vue' />
    <import src='../../../common/foot.vue' />

    <onekit-view onekit-class="container">
      <onekit-template is="onekit-template-head"
                       DATA='{"title":"uploadFile"}'></onekit-template>

      <onekit-view onekit-class="page-body">
        <onekit-view onekit-class="page-section">
          <template v-if="fileUploaded">
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

              <onekit-view onekit-class="weui-cell page-section-ctn">
                <onekit-image :src="filePath"
                              onekit-class="image"
                              mode="aspectFit"></onekit-image>
              </onekit-view>
            </onekit-view>

            <onekit-view onekit-class="btn-area"
                         v-if="fromOtherPage">
              <onekit-navigator open-type="navigateBack">
                <onekit-button type="primary"
                               size="40">返回</onekit-button>
              </onekit-navigator>
            </onekit-view>
          </template>

          <template v-else>
            <onekit-view onekit-class="page-body-info">
              <onekit-view onekit-class="image-plus image-plus-nb"
                           @Tap="chooseImage">
                <onekit-view onekit-class="image-plus-horizontal"></onekit-view>
                <onekit-view onekit-class="image-plus-vertical"></onekit-view>
              </onekit-view>
              <onekit-view onekit-class="image-plus-text">选择图片</onekit-view>
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
  "navigationBarTitleText": "上传文件",
  "usingComponents": {}
}
import OnekitPage from '../../../../weixin2vue/OnekitPage';
import wx from '../../../../weixin2vue/wx';
import { getApp } from '../../../../weixin2vue/macro';
//let global = {};
const app = getApp()
export default OnekitPage(ONEKIT_JSON, {
  onShareAppMessage: function () {
    return {
      title: '上传文件',
      path: 'page/cloud/pages/upload-file/upload-file'
    }
  },
  data: {
    fileUploaded: false,
    fileId: '',
    filePath: '',
    fromOtherPage: false
  },
  onLoad: function (options) {
    if (options.from) {
      this.setData({
        fromOtherPage: true
      });
    }
  },
  chooseImage: function () {
    const self = this
    wx.chooseImage({
      count: 1,
      sizeType: [
        'compressed'
      ],
      sourceType: [
        'album'
      ],
      success: function (res) {
        console.log('chooseImage success, temp path is', res.tempFilePaths[0])
        const filePath = res.tempFilePaths[0]
        wx.showLoading({
          title: '上传中'
        })
        app.getUserOpenIdViaCloud().then((openid) => {
          const cloudPath = (('upload/' + openid)) + filePath.match(/\.[^.]+?$/)[0]
          console.log('cloudPath', cloudPath)
          wx.cloud.uploadFile({
            cloudPath,
            filePath,
            success: (res) => {
              console.log('[上传文件] 成功：', res)
              app.globalData.fileId = res.fileID
              self.setData({
                fileUploaded: true,
                fileId: res.fileID,
                filePath
              })
              wx.hideLoading()
            },
            fail: (err) => {
              console.error('[上传文件] 失败：', err)
              wx.hideLoading()
              wx.showToast({
                icon: 'none',
                title: '上传失败'
              })
            }
          })
          return openid
        }).catch((err) => {
          console.error(err)
          wx.hideLoading()
        })
      },
      fail: function ({ errMsg }) {
        console.log('chooseImage fail, err is', errMsg)
      }
    })
  }
})
</script>
<style scoped src="@/app.css"/>
<style>
@import "../../../common/lib/weui.css";
.image {
  width: 100%;
  height: calc(var(--screen-width) * 360 / 750);
}
.page-body-info {
  display: flex;
  box-sizing: border-box;
  padding: calc(var(--screen-width) * 30 / 750);
  height: calc(var(--screen-width) * 420 / 750);
  border-top: calc(var(--screen-width) * 1 / 750) solid var(--weui-FG-3);
  border-bottom: calc(var(--screen-width) * 1 / 750) solid var(--weui-FG-3);
  align-items: center;
  justify-content: center;
}
.page-section-ctn {
  text-align: center;
  margin: 0 auto;
  width: 100%;
}
.image {
  max-width: 100%;
}
</style>
