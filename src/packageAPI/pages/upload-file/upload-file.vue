<template>
  <onekit-page id='app'>
    <import src='../../../common/head.vue' />
    <import src='../../../common/foot.vue' />

    <onekit-view onekit-class="container">
      <onekit-template is="onekit-template-head"
                       DATA='{"title":"uploadFile"}'></onekit-template>

      <onekit-view onekit-class="page-body">
        <onekit-view onekit-class="page-section">
          <onekit-view onekit-class="page-body-info">

            <template v-if="imageSrc">
              <onekit-image :src="imageSrc"
                            onekit-class="image"
                            mode="aspectFit"></onekit-image>
            </template>

            <template v-else>
              <onekit-view onekit-class="image-plus image-plus-nb"
                           @Tap="chooseImage">
                <onekit-view onekit-class="image-plus-horizontal"></onekit-view>
                <onekit-view onekit-class="image-plus-vertical"></onekit-view>
              </onekit-view>
              <onekit-view onekit-class="image-plus-text">选择图片</onekit-view>
            </template>

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
  "navigationBarTitleText": "上传文件",
  "usingComponents": {}
}
import OnekitPage from '../../../../weixin2vue/OnekitPage';
import wx from '../../../../weixin2vue/wx';
//let global = {};
export default OnekitPage(ONEKIT_JSON, {
  onShareAppMessage: function () {
    return {
      title: '上传文件',
      path: 'packageAPI/pages/upload-file/upload-file'
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
        const imageSrc = res.tempFilePaths[0]
        wx.cloud.uploadFile({
          cloudPath: 'example.png',
          filePath: imageSrc,
          config: {
            env: 'release-b86096'
          },
          success: (res) => {
            console.log(res.fileID)
            console.log('uploadImage success, res is:', res)
            wx.showToast({
              title: '上传成功',
              icon: 'success',
              duration: 1000
            })
            self.setData({
              imageSrc,
              fileID: res.fileID
            })
          },
          fail: function ({ errMsg }) {
            console.log('uploadImage fail, errMsg is', errMsg)
          }
        })
      },
      fail: (res) => {
        wx.showToast({
          icon: 'none',
          title: '上传失败'
        })
        console.log('uploadImage fail, errMsg is', res.errMsg)
      }
    })
  },
  onUnload: function () {
    if (this.data.fileID) {
      wx.cloud.deleteFile({
        fileList: [
          this.data.fileID
        ]
      });
    }
  }
})
</script>
<style scoped src="@/app.css"/>
<style>
.image {
  width: 100%;
  height: 330px;
}
.page-body-info {
  display: flex;
  box-sizing: border-box;
  padding: 15px;
  height: 410px;
  border-top: 1px solid var(--weui-FG-3);
  border-bottom: 1px solid var(--weui-FG-3);
  align-items: center;
  justify-content: center;
}
</style>
