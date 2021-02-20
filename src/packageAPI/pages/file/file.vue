<template>
  <onekit-page id='app'>
    <import src='../../../common/head.vue' />
    <import src='../../../common/foot.vue' />

    <onekit-view onekit-class="container">
      <onekit-template is="onekit-template-head"
                       DATA='{"title":"saveFile"}'></onekit-template>

      <onekit-view onekit-class="page-body">
        <onekit-view onekit-class="page-section">
          <onekit-view onekit-class="page-body-info">
            <template v-if="tempFilePath != ''">
              <onekit-image :src="tempFilePath"
                            onekit-class="image"
                            mode="aspectFit"></onekit-image>
            </template>
            <template v-if="tempFilePath === '' && savedFilePath != ''">
              <onekit-image :src="savedFilePath"
                            onekit-class="image"
                            mode="aspectFit"></onekit-image>
            </template>
            <template v-if="tempFilePath === '' && savedFilePath === ''">
              <onekit-view onekit-class="image-plus image-plus-nb"
                           @Tap="chooseImage">
                <onekit-view onekit-class="image-plus-horizontal"></onekit-view>
                <onekit-view onekit-class="image-plus-vertical"></onekit-view>
              </onekit-view>
              <onekit-view onekit-class="image-plus-text">请选择文件</onekit-view>
            </template>
          </onekit-view>
          <onekit-view onekit-class="btn-area">
            <onekit-button type="primary"
                           @Tap="saveFile">保存文件</onekit-button>
            <onekit-button @Tap="clear">删除文件</onekit-button>
          </onekit-view>
        </onekit-view>
      </onekit-view>

      <onekit-modal :title="dialog.title"
                    :hidden="dialog.hidden"
                    no-cancel
                    @confirm="confirm">{{dialog.content}}</onekit-modal>

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
  "navigationBarTitleText": "文件",
  "usingComponents": {}
}
import { OnekitPage } from 'weixin2vue';
import { wx } from 'weixin2vue';
//let global = {};
export default OnekitPage(ONEKIT_JSON, {
  onShareAppMessage: function () {
    return {
      title: '文件',
      path: 'packageAPI/pages/file/file'
    }
  },
  onLoad: function () {
    this.setData({
      savedFilePath: wx.getStorageSync('savedFilePath')
    })
  },
  data: {
    tempFilePath: '',
    savedFilePath: '',
    dialog: {
      hidden: true
    }
  },
  chooseImage: function () {
    const that = this
    wx.chooseImage({
      count: 1,
      success: function (res) {
        that.setData({
          tempFilePath: res.tempFilePaths[0]
        })
      }
    })
  },
  saveFile: function () {
    if (this.data.tempFilePath.length > 0) {
      const that = this;
      wx.saveFile({
        tempFilePath: this.data.tempFilePath,
        success: function (res) {
          that.setData({
            savedFilePath: res.savedFilePath
          })
          wx.setStorageSync('savedFilePath', res.savedFilePath)
          that.setData({
            dialog: {
              title: '保存成功',
              content: '下次进入应用时，此文件仍可用',
              hidden: false
            }
          })
        },
        fail: function () {
          that.setData({
            dialog: {
              title: '保存失败',
              content: '应该是有 bug 吧',
              hidden: false
            }
          })
        }
      });
    }
  },
  clear: function () {
    wx.setStorageSync('savedFilePath', '')
    this.setData({
      tempFilePath: '',
      savedFilePath: ''
    })
  },
  confirm: function () {
    this.setData({
      'dialog.hidden': true
    })
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
